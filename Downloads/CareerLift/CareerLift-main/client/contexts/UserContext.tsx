import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isLoggedIn: boolean;
  sessionToken: string;
  createdAt: string;
  lastLogin: string;
}

interface UserContextType {
  user: User | null;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signUp: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simple encryption/decryption for demo (in production use proper JWT)
  const encryptData = (data: string): string => {
    return btoa(data.split("").reverse().join(""));
  };

  const decryptData = (data: string): string => {
    try {
      return atob(data).split("").reverse().join("");
    } catch {
      return "";
    }
  };

  const generateSessionToken = (): string => {
    return encryptData(
      `${Date.now()}_${Math.random().toString(36).substring(2)}`,
    );
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const checkUserExists = (email: string): boolean => {
    const users = JSON.parse(localStorage.getItem("careerlift_users") || "[]");
    return users.some((user: any) => user.email === email);
  };

  const saveUser = (userData: User): void => {
    const users = JSON.parse(localStorage.getItem("careerlift_users") || "[]");
    const existingIndex = users.findIndex(
      (user: any) => user.email === userData.email,
    );

    if (existingIndex >= 0) {
      users[existingIndex] = userData;
    } else {
      users.push(userData);
    }

    localStorage.setItem("careerlift_users", JSON.stringify(users));
  };

  const getUserByCredentials = (
    email: string,
    password: string,
  ): User | null => {
    const users = JSON.parse(localStorage.getItem("careerlift_users") || "[]");
    const user = users.find((user: any) => {
      return user.email === email && user.password === encryptData(password);
    });
    return user || null;
  };

  const signIn = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setIsLoading(false);
        return { success: false, error: "Email and password are required" };
      }

      if (!validateEmail(email)) {
        setIsLoading(false);
        return { success: false, error: "Invalid email format" };
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const userData = getUserByCredentials(email, password);

      if (userData) {
        const sessionToken = generateSessionToken();
        const loggedInUser: User = {
          ...userData,
          isLoggedIn: true,
          sessionToken,
          lastLogin: new Date().toISOString(),
        };

        // Remove password from stored user data
        delete (loggedInUser as any).password;

        setUser(loggedInUser);
        localStorage.setItem(
          "careerlift_session",
          encryptData(JSON.stringify(loggedInUser)),
        );
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: "An error occurred during sign in" };
    }
  };

  const signUp = async (
    name: string,
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    try {
      // Validate inputs
      if (!name || !email || !password) {
        setIsLoading(false);
        return { success: false, error: "All fields are required" };
      }

      if (!validateEmail(email)) {
        setIsLoading(false);
        return { success: false, error: "Invalid email format" };
      }

      if (!validatePassword(password)) {
        setIsLoading(false);
        return {
          success: false,
          error:
            "Password must be at least 8 characters with uppercase, lowercase, and number",
        };
      }

      if (checkUserExists(email)) {
        setIsLoading(false);
        return {
          success: false,
          error: "An account with this email already exists",
        };
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const sessionToken = generateSessionToken();
      const newUser: User = {
        id: generateSessionToken(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        isLoggedIn: true,
        sessionToken,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      // Save user with encrypted password
      const userToSave = {
        ...newUser,
        password: encryptData(password),
      };

      saveUser(userToSave);

      // Set user without password
      setUser(newUser);
      localStorage.setItem(
        "careerlift_session",
        encryptData(JSON.stringify(newUser)),
      );
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: "An error occurred during registration" };
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("careerlift_session");
    // Clear any sensitive data
    sessionStorage.clear();
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem(
        "careerlift_session",
        encryptData(JSON.stringify(updatedUser)),
      );

      // Update in users database too
      const users = JSON.parse(
        localStorage.getItem("careerlift_users") || "[]",
      );
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex >= 0) {
        users[userIndex] = { ...users[userIndex], ...updates };
        localStorage.setItem("careerlift_users", JSON.stringify(users));
      }
    }
  };

  const validateSession = (storedUser: User): boolean => {
    // Check if session is valid (less than 24 hours old)
    const sessionAge = Date.now() - new Date(storedUser.lastLogin).getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    return sessionAge < twentyFourHours;
  };

  // Check for stored user on mount
  useEffect(() => {
    const storedSession = localStorage.getItem("careerlift_session");
    if (storedSession) {
      try {
        const decryptedData = decryptData(storedSession);
        const storedUser = JSON.parse(decryptedData);

        if (validateSession(storedUser)) {
          setUser(storedUser);
        } else {
          // Session expired
          localStorage.removeItem("careerlift_session");
        }
      } catch (error) {
        console.error("Error parsing stored session:", error);
        localStorage.removeItem("careerlift_session");
      }
    }
  }, []);

  const value: UserContextType = {
    user,
    signIn,
    signUp,
    signOut,
    updateProfile,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
