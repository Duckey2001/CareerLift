import { ReactNode, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { AuthModal } from "./AuthModal";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ProtectedRoute = ({ children, fallback }: ProtectedRouteProps) => {
  const { user } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowWarning(true);
      const timer = setTimeout(() => {
        setShowAuthModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        {showWarning && (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 p-4">
            <div className="max-w-md w-full space-y-6">
              <Alert className="border-destructive/50 text-destructive">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Access Restricted</strong>
                  <br />
                  This page requires authentication. Please sign in to continue.
                </AlertDescription>
              </Alert>

              {fallback || (
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Authentication Required
                  </h2>
                  <p className="text-muted-foreground">
                    You need to be signed in to access this feature. Our
                    authentication modal will open shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <AuthModal
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          defaultTab="signin"
        />
      </>
    );
  }

  return <>{children}</>;
};
