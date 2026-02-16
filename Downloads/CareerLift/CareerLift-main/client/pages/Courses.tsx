// app/courses/page.tsx
'use client';

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import {
  GraduationCap,
  Search,
  Clock,
  Users,
  Star,
  Trophy,
  ExternalLink,
  PlayCircle,
  CheckCircle,
  BookOpen,
  Award,
  Target,
  TrendingUp,
  Flame,
  Zap,
  Brain,
  Sparkles,
  Crown,
  Gem,
  Puzzle,
  Rocket,
  TargetIcon,
  Calendar,
  TrendingUp as ArrowUp,
  Eye,
  Bookmark,
  Share2,
  MessageSquare,
  Medal,
  Gift,
  Coins,
  Clock4,
  Filter,
  Grid,
  List,
  Heart,
  BarChart3,
  Target as Bullseye,
  Lightbulb,
  BrainCircuit,
  Gamepad2,
  ChevronRight,
  Bell,
  Plus,
  MoreVertical,
  CalendarDays,
  UserCheck,
  Sparkle,
  Wallet,
  Globe,
  Clock1,
  BarChart,
  CheckSquare,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: string;
  rating: number;
  students: number;
  price: "Free" | "Paid" | "Premium";
  certificate: boolean;
  skills: string[];
  url: string;
  progress?: number;
  completed?: boolean;
  difficulty: number;
  tags: string[];
  featured: boolean;
  trending: boolean;
  new: boolean;
  hoursPerWeek: number;
  instructor: string;
  instructorRating: number;
  aiRecommended?: boolean;
  enrollmentDeadline?: string;
  xpReward: number;
  badge?: string;
  colorScheme?: string;
  thumbnail?: string;
  videoCount: number;
  quizCount: number;
  projectCount: number;
  communityActive: boolean;
  liveSessions: boolean;
  careerImpact: number;
  saved?: boolean;
  liked?: boolean;
  enrolledDate?: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[];
  totalDuration: string;
  level: string;
  category: string;
  icon: string;
  color: string;
  xpReward: number;
  completionRate: number;
  enrolled: number;
  recommended?: boolean;
}

interface UserStats {
  xp: number;
  level: number;
  streak: number;
  badges: string[];
  certificates: number;
  totalLearningHours: number;
  enrolledCourses: number;
  completedCourses: number;
  currentStreak: number;
  nextLevelXp: number;
  rank: string;
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Digital Marketing Fundamentals",
    provider: "Google Grow",
    description:
      "Master the art of digital marketing from search engine optimization to social media marketing. Learn to create compelling campaigns and analyze their performance.",
    duration: "6 weeks",
    level: "Beginner",
    category: "Marketing",
    rating: 4.8,
    students: 12459,
    price: "Free",
    certificate: true,
    skills: ["SEO", "Social Media", "Google Ads", "Analytics", "Content Strategy", "Email Marketing"],
    url: "https://grow.google/intl/africa/courses/",
    progress: 0,
    difficulty: 2,
    tags: ["Trending", "High-Demand", "Beginner-Friendly"],
    featured: true,
    trending: true,
    new: false,
    hoursPerWeek: 4,
    instructor: "Sarah Chen",
    instructorRating: 4.9,
    aiRecommended: true,
    xpReward: 500,
    badge: "Digital Marketer",
    colorScheme: "from-blue-500 to-purple-600",
    videoCount: 24,
    quizCount: 6,
    projectCount: 3,
    communityActive: true,
    liveSessions: true,
    careerImpact: 8,
  },
  {
    id: "2",
    title: "Leadership Essentials for Young Leaders",
    provider: "YALI",
    description:
      "Develop essential leadership skills for professional and personal growth in the African context. Transform into an impactful leader.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Leadership",
    rating: 4.9,
    students: 8934,
    price: "Free",
    certificate: true,
    skills: ["Leadership", "Communication", "Team Management", "Decision Making", "Emotional Intelligence", "Conflict Resolution"],
    url: "https://yali.state.gov/courses/",
    progress: 60,
    completed: false,
    difficulty: 3,
    tags: ["Leadership", "Soft Skills", "Career Growth"],
    featured: true,
    trending: false,
    new: true,
    hoursPerWeek: 3,
    instructor: "Dr. James Okafor",
    instructorRating: 4.8,
    xpReward: 450,
    badge: "Emerging Leader",
    colorScheme: "from-green-500 to-teal-600",
    videoCount: 18,
    quizCount: 4,
    projectCount: 2,
    communityActive: true,
    liveSessions: false,
    careerImpact: 9,
  },
  {
    id: "3",
    title: "Introduction to Python Programming",
    provider: "Microsoft Learn",
    description:
      "Start your programming journey with Python, one of the most popular programming languages. Build real-world applications from day one.",
    duration: "8 weeks",
    level: "Beginner",
    category: "Technology",
    rating: 4.7,
    students: 15672,
    price: "Free",
    certificate: true,
    skills: ["Python", "Programming", "Problem Solving", "Software Development", "Data Structures", "Algorithms"],
    url: "https://learn.microsoft.com/en-us/training/",
    progress: 25,
    difficulty: 3,
    tags: ["High-Demand", "Tech", "Beginner-Friendly"],
    featured: false,
    trending: true,
    new: false,
    hoursPerWeek: 6,
    instructor: "Alex Johnson",
    instructorRating: 4.7,
    aiRecommended: true,
    xpReward: 600,
    badge: "Python Developer",
    colorScheme: "from-yellow-500 to-orange-600",
    videoCount: 32,
    quizCount: 8,
    projectCount: 4,
    communityActive: true,
    liveSessions: true,
    careerImpact: 10,
  },
  {
    id: "4",
    title: "Financial Literacy for Entrepreneurs",
    provider: "LIFE Global",
    description:
      "Master the financial concepts essential for starting and running a successful business. Learn to manage finances like a pro.",
    duration: "5 weeks",
    level: "Intermediate",
    category: "Business",
    rating: 4.6,
    students: 7123,
    price: "Free",
    certificate: true,
    skills: ["Financial Planning", "Budgeting", "Investment", "Business Finance", "Accounting", "Risk Management"],
    url: "https://www.life-global.org/",
    progress: 0,
    difficulty: 4,
    tags: ["Entrepreneurship", "Finance", "Business"],
    featured: true,
    trending: false,
    new: false,
    hoursPerWeek: 5,
    instructor: "Maria Rodriguez",
    instructorRating: 4.6,
    enrollmentDeadline: "2024-03-15",
    xpReward: 550,
    badge: "Financial Strategist",
    colorScheme: "from-purple-500 to-pink-600",
    videoCount: 20,
    quizCount: 5,
    projectCount: 3,
    communityActive: true,
    liveSessions: false,
    careerImpact: 8,
  },
  {
    id: "5",
    title: "Data Analysis with Excel",
    provider: "Khan Academy",
    description:
      "Learn to analyze data and create meaningful insights using Microsoft Excel and basic statistical concepts. Become a data wizard.",
    duration: "3 weeks",
    level: "Beginner",
    category: "Data",
    rating: 4.5,
    students: 9876,
    price: "Free",
    certificate: false,
    skills: ["Excel", "Data Analysis", "Statistics", "Visualization", "Pivot Tables", "Formulas"],
    url: "https://www.khanacademy.org/",
    progress: 100,
    completed: true,
    difficulty: 2,
    tags: ["Data", "Excel", "Analytics"],
    featured: false,
    trending: false,
    new: false,
    hoursPerWeek: 3,
    instructor: "Prof. David Kim",
    instructorRating: 4.5,
    xpReward: 300,
    badge: "Excel Expert",
    colorScheme: "from-green-400 to-emerald-500",
    videoCount: 12,
    quizCount: 3,
    projectCount: 2,
    communityActive: false,
    liveSessions: false,
    careerImpact: 7,
  },
  {
    id: "6",
    title: "Public Health Fundamentals",
    provider: "OpenWHO",
    description:
      "Understanding public health principles and their application in community health improvement. Make a difference in healthcare.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Health",
    rating: 4.8,
    students: 5432,
    price: "Free",
    certificate: true,
    skills: ["Public Health", "Epidemiology", "Health Policy", "Community Health", "Disease Prevention", "Health Education"],
    url: "https://openwho.org/",
    progress: 0,
    difficulty: 3,
    tags: ["Health", "Science", "Community"],
    featured: false,
    trending: true,
    new: false,
    hoursPerWeek: 4,
    instructor: "Dr. Amina Bello",
    instructorRating: 4.8,
    xpReward: 400,
    badge: "Public Health Advocate",
    colorScheme: "from-red-500 to-orange-500",
    videoCount: 22,
    quizCount: 5,
    projectCount: 2,
    communityActive: true,
    liveSessions: true,
    careerImpact: 7,
  },
  {
    id: "7",
    title: "AI & Machine Learning Basics",
    provider: "DeepLearning.AI",
    description:
      "Explore the fundamentals of Artificial Intelligence and Machine Learning. Build your first AI model in this hands-on course.",
    duration: "10 weeks",
    level: "Advanced",
    category: "Technology",
    rating: 4.9,
    students: 23456,
    price: "Premium",
    certificate: true,
    skills: ["AI", "Machine Learning", "Python", "TensorFlow", "Neural Networks", "Data Science"],
    url: "https://www.deeplearning.ai/",
    progress: 0,
    difficulty: 5,
    tags: ["AI", "Tech", "Future Skills"],
    featured: true,
    trending: true,
    new: true,
    hoursPerWeek: 8,
    instructor: "Andrew Ng",
    instructorRating: 5.0,
    aiRecommended: true,
    xpReward: 1000,
    badge: "AI Pioneer",
    colorScheme: "from-indigo-600 to-purple-700",
    videoCount: 40,
    quizCount: 12,
    projectCount: 5,
    communityActive: true,
    liveSessions: true,
    careerImpact: 10,
  },
  {
    id: "8",
    title: "Creative Writing Masterclass",
    provider: "CreativeLive",
    description:
      "Unleash your creativity and master the art of storytelling. Learn from award-winning authors and improve your writing skills.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Creative",
    rating: 4.7,
    students: 6543,
    price: "Paid",
    certificate: true,
    skills: ["Creative Writing", "Storytelling", "Editing", "Character Development", "Plot Structure", "Publishing"],
    url: "https://www.creativelive.com/",
    progress: 30,
    completed: false,
    difficulty: 3,
    tags: ["Creative", "Writing", "Arts"],
    featured: false,
    trending: false,
    new: true,
    hoursPerWeek: 4,
    instructor: "Neil Gaiman",
    instructorRating: 4.9,
    xpReward: 400,
    badge: "Creative Writer",
    colorScheme: "from-pink-500 to-rose-600",
    videoCount: 16,
    quizCount: 4,
    projectCount: 3,
    communityActive: true,
    liveSessions: false,
    careerImpact: 6,
  },
];

const mockLearningPaths: LearningPath[] = [
  {
    id: "1",
    title: "Digital Marketing Professional",
    description: "Complete pathway to become a skilled digital marketer with hands-on projects",
    courses: ["1", "4"],
    totalDuration: "11 weeks",
    level: "Beginner to Intermediate",
    category: "Marketing",
    icon: "📈",
    color: "bg-gradient-to-r from-blue-500 to-purple-600",
    xpReward: 1500,
    completionRate: 68,
    enrolled: 2345,
    recommended: true,
  },
  {
    id: "2",
    title: "Tech Career Starter",
    description: "Foundation courses for starting a career in technology and software development",
    courses: ["3", "5", "7"],
    totalDuration: "21 weeks",
    level: "Beginner to Advanced",
    category: "Technology",
    icon: "💻",
    color: "bg-gradient-to-r from-green-500 to-teal-600",
    xpReward: 2500,
    completionRate: 45,
    enrolled: 1890,
    recommended: true,
  },
  {
    id: "3",
    title: "Entrepreneurship Journey",
    description: "Build the skills needed to start, run, and grow your own successful business",
    courses: ["2", "4"],
    totalDuration: "9 weeks",
    level: "Intermediate",
    category: "Business",
    icon: "🚀",
    color: "bg-gradient-to-r from-yellow-500 to-orange-600",
    xpReward: 1200,
    completionRate: 72,
    enrolled: 1567,
  },
  {
    id: "4",
    title: "Data Science Fundamentals",
    description: "Master data analysis, visualization, and machine learning essentials",
    courses: ["3", "5", "7"],
    totalDuration: "21 weeks",
    level: "Beginner to Advanced",
    category: "Data",
    icon: "📊",
    color: "bg-gradient-to-r from-purple-500 to-pink-600",
    xpReward: 2200,
    completionRate: 38,
    enrolled: 2100,
    recommended: true,
  },
];

const mockUserStats: UserStats = {
  xp: 1250,
  level: 3,
  streak: 14,
  badges: ["Early Learner", "Weekend Warrior", "Course Explorer"],
  certificates: 2,
  totalLearningHours: 56,
  enrolledCourses: 5,
  completedCourses: 2,
  currentStreak: 7,
  nextLevelXp: 2000,
  rank: "Explorer",
};

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [activeTab, setActiveTab] = useState("all-courses");
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(["2", "3", "5", "8"]);
  const [savedCourses, setSavedCourses] = useState<string[]>(["1", "7"]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [userStats, setUserStats] = useState<UserStats>(mockUserStats);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [showAIRecommendations, setShowAIRecommendations] = useState(true);
  const [activeDay, setActiveDay] = useState<string>("today");

  const categories = [
    "All Categories",
    "Marketing",
    "Technology",
    "Leadership",
    "Business",
    "Data",
    "Health",
    "Creative",
    "Science",
    "Finance",
  ];

  const providers = [
    "All Providers",
    "Google Grow",
    "YALI",
    "Microsoft Learn",
    "Khan Academy",
    "LIFE Global",
    "OpenWHO",
    "DeepLearning.AI",
    "CreativeLive",
    "Coursera",
    "edX",
  ];

  const badges = [
    { id: "ai-recommended", name: "AI Recommended", icon: Brain },
    { id: "trending", name: "Trending", icon: Flame },
    { id: "featured", name: "Featured", icon: Star },
    { id: "new", name: "New", icon: Zap },
    { id: "certificate", name: "Certificate", icon: Award },
    { id: "free", name: "Free", icon: Gift },
  ];

  const dailyChallenges = [
    { id: 1, title: "Watch 30 minutes of course content", xp: 50, completed: true },
    { id: 2, title: "Complete one quiz", xp: 30, completed: false },
    { id: 3, title: "Save 2 interesting courses", xp: 20, completed: true },
    { id: 4, title: "Share a course with a friend", xp: 25, completed: false },
  ];

  // Filter courses based on search, filters, and active tab
  const filteredCourses = useMemo(() => {
    let courses = [...mockCourses];

    if (activeTab === "my-courses") {
      courses = courses.filter((course) => enrolledCourses.includes(course.id));
    } else if (activeTab === "saved") {
      courses = courses.filter((course) => savedCourses.includes(course.id));
    } else if (activeTab === "ai-recommended") {
      courses = courses.filter((course) => course.aiRecommended);
    }

    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || 
        selectedCategory === "All Categories" || 
        course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      const matchesProvider =
        selectedProvider === "all" || 
        selectedProvider === "All Providers" || 
        course.provider === selectedProvider;

      const matchesBadge = !selectedBadge || (
        selectedBadge === "ai-recommended" ? course.aiRecommended :
        selectedBadge === "trending" ? course.trending :
        selectedBadge === "featured" ? course.featured :
        selectedBadge === "new" ? course.new :
        selectedBadge === "certificate" ? course.certificate :
        selectedBadge === "free" ? course.price === "Free" : true
      );

      return (
        matchesSearch && matchesCategory && matchesLevel && matchesProvider && matchesBadge
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedLevel,
    selectedProvider,
    activeTab,
    enrolledCourses,
    savedCourses,
    selectedBadge,
  ]);

  // Gamification functions
  const enrollInCourse = (courseId: string) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      // Add XP for enrolling
      setUserStats(prev => ({
        ...prev,
        xp: prev.xp + 50,
        enrolledCourses: prev.enrolledCourses + 1,
      }));
      toast("🎉 Enrolled successfully! +50 XP");
    }
  };

  const toggleSaveCourse = (courseId: string) => {
    if (savedCourses.includes(courseId)) {
      setSavedCourses(savedCourses.filter(id => id !== courseId));
    } else {
      setSavedCourses([...savedCourses, courseId]);
      setUserStats(prev => ({ ...prev, xp: prev.xp + 10 }));
      toast("📚 Course saved! +10 XP");
    }
  };

  const toggleLikeCourse = (courseId: string) => {
    // Implementation for liking courses
    toast("💖 Liked!");
  };

  const completeChallenge = (challengeId: number) => {
    // Mark challenge as completed and award XP
    setUserStats(prev => ({ 
      ...prev, 
      xp: prev.xp + dailyChallenges.find(c => c.id === challengeId)?.xp || 0 
    }));
    toast("✅ Challenge completed!");
  };

  // Calculate stats
  const stats = useMemo(() => {
    const myCourses = mockCourses.filter((course) => enrolledCourses.includes(course.id));
    const completed = myCourses.filter((course) => course.completed).length;
    const inProgress = myCourses.filter(
      (course) => course.progress && course.progress > 0 && !course.completed,
    ).length;

    return { 
      total: myCourses.length, 
      completed, 
      inProgress,
      totalHours: myCourses.reduce((acc, course) => acc + (course.progress || 0) * course.hoursPerWeek / 100 * parseInt(course.duration), 0)
    };
  }, [enrolledCourses]);

  // AI Course Recommendations
  const aiRecommendedCourses = useMemo(() => {
    return mockCourses
      .filter(course => course.aiRecommended)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  }, []);

  const toast = (message: string) => {
    // Simple toast implementation
    const toast = document.createElement("div");
    toast.className = "fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-right";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header with Gamification */}
          <div className="text-center mb-10 pt-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <BrainCircuit className="inline mr-3 h-10 w-10" />
                  SkillSphere AI Academy
                </h1>
              </div>
              <Badge className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-Powered
              </Badge>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Transform your career with intelligent learning paths, gamified progress tracking, 
              and AI-curated courses from top global platforms.
            </p>
            
            {/* Quick Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-gray-800">{stats.total}</div>
                <div className="text-sm text-gray-500">Enrolled Courses</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-orange-600">{stats.inProgress}</div>
                <div className="text-sm text-gray-500">In Progress</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-purple-600">{Math.round(stats.totalHours)}h</div>
                <div className="text-sm text-gray-500">Learning Time</div>
              </div>
            </div>
          </div>

          {/* Gamification Dashboard */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {userStats.level}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-white">Learning Journey</CardTitle>
                    <CardDescription className="text-gray-300">
                      Level {userStats.level} {userStats.rank} • {userStats.streak} day streak
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">{userStats.xp} XP</div>
                  <div className="text-sm text-gray-300">Next level: {userStats.nextLevelXp - userStats.xp} XP</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Level Progress</span>
                  <span>{Math.round((userStats.xp / userStats.nextLevelXp) * 100)}%</span>
                </div>
                <Progress 
                  value={(userStats.xp / userStats.nextLevelXp) * 100} 
                  className="h-3 bg-gray-700"
                />
                
                {/* Badges Display */}
                <div className="pt-4">
                  <div className="text-sm font-medium mb-3 flex items-center">
                    <Medal className="h-4 w-4 mr-2 text-yellow-400" />
                    Your Badges
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userStats.badges.map((badge, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="bg-white/10 text-white border-white/20"
                      >
                        {badge}
                      </Badge>
                    ))}
                    <Badge 
                      variant="outline"
                      className="bg-white/10 text-white border-white/20"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Earn More
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Challenges */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <TargetIcon className="h-5 w-5 mr-2 text-red-500" />
                Daily Challenges
              </CardTitle>
              <CardDescription>
                Complete challenges to earn XP and level up faster
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {dailyChallenges.map((challenge) => (
                  <div 
                    key={challenge.id} 
                    className={`p-4 rounded-lg border ${challenge.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm flex-1">{challenge.title}</h4>
                      <Badge 
                        variant={challenge.completed ? "default" : "outline"}
                        className={challenge.completed ? 'bg-green-100 text-green-800' : ''}
                      >
                        {challenge.completed ? '✅' : '+'}{challenge.xp} XP
                      </Badge>
                    </div>
                    {!challenge.completed && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="w-full mt-2 text-xs"
                        onClick={() => completeChallenge(challenge.id)}
                      >
                        Mark Complete
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations Banner */}
          {showAIRecommendations && (
            <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-blue-700">
                    <Brain className="h-5 w-5 mr-2" />
                    AI Recommended For You
                  </CardTitle>
                  <Switch 
                    checked={showAIRecommendations} 
                    onCheckedChange={setShowAIRecommendations}
                  />
                </div>
                <CardDescription>
                  Based on your learning history and career goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {aiRecommendedCourses.map((course) => (
                    <div 
                      key={course.id} 
                      className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => enrollInCourse(course.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          <Brain className="h-3 w-3 mr-1" />
                          AI Pick
                        </Badge>
                        <div className={`w-10 h-10 rounded-full ${course.colorScheme} flex items-center justify-center`}>
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2">{course.title}</h4>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock1 className="h-3 w-3 mr-1" />
                        {course.duration} • {course.level}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Enhanced Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <TabsList className="bg-gradient-to-r from-gray-50 to-white p-1 rounded-lg">
                <TabsTrigger 
                  value="all-courses"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <Grid className="h-4 w-4 mr-2" />
                  All Courses
                </TabsTrigger>
                <TabsTrigger 
                  value="my-courses"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  My Courses
                </TabsTrigger>
                <TabsTrigger 
                  value="learning-paths"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Learning Paths
                </TabsTrigger>
                <TabsTrigger 
                  value="saved"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white"
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  Saved
                </TabsTrigger>
                <TabsTrigger 
                  value="ai-recommended"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  AI Picks
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                >
                  {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Search and Advanced Filters */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        placeholder="Search courses, skills, or topics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 h-12 text-lg border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  {showFilters && (
                    <>
                      <div className="md:col-span-2">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="h-12">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                              <SelectValue placeholder="Category" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                          <SelectTrigger className="h-12">
                            <div className="flex items-center">
                              <Target className="h-4 w-4 mr-2 text-gray-500" />
                              <SelectValue placeholder="Level" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                            <SelectItem value="Expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                          <SelectTrigger className="h-12">
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-2 text-gray-500" />
                              <SelectValue placeholder="Provider" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {providers.map((provider) => (
                              <SelectItem key={provider} value={provider}>
                                {provider}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-1">
                        <Button 
                          variant="outline" 
                          className="h-12 w-full"
                          onClick={() => {
                            setSelectedCategory("all");
                            setSelectedLevel("all");
                            setSelectedProvider("all");
                            setSelectedBadge(null);
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                    </>
                  )}
                </div>

                {/* Badge Filters */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <Badge
                      key={badge.id}
                      variant={selectedBadge === badge.id ? "default" : "outline"}
                      className={`cursor-pointer px-3 py-1 ${selectedBadge === badge.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''}`}
                      onClick={() => setSelectedBadge(selectedBadge === badge.id ? null : badge.id)}
                    >
                      <badge.icon className="h-3 w-3 mr-1" />
                      {badge.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Courses Content */}
            <TabsContent value="all-courses" className="space-y-6">
              {/* Courses Count */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {filteredCourses.length} Courses Found
                </h3>
                <div className="text-sm text-gray-500">
                  Sorted by: <span className="font-medium text-gray-800">Recommended</span>
                </div>
              </div>

              {/* Courses Grid/List View */}
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {filteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    viewMode={viewMode}
                    enrolled={enrolledCourses.includes(course.id)}
                    saved={savedCourses.includes(course.id)}
                    onEnroll={() => enrollInCourse(course.id)}
                    onSave={() => toggleSaveCourse(course.id)}
                    onLike={() => toggleLikeCourse(course.id)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* My Courses Content */}
            <TabsContent value="my-courses" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Learning Progress */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold mb-4">My Learning Progress</h3>
                  <div className="space-y-4">
                    {mockCourses
                      .filter((course) => enrolledCourses.includes(course.id))
                      .map((course) => (
                        <Card key={course.id} className="hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className={`w-12 h-12 rounded-lg ${course.colorScheme} flex items-center justify-center`}>
                                    <BookOpen className="h-6 w-6 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">{course.title}</h4>
                                    <p className="text-sm text-gray-500">{course.provider}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                                  <span className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {course.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <Target className="h-4 w-4 mr-1" />
                                    {course.level}
                                  </span>
                                  {course.certificate && (
                                    <Badge variant="outline" className="text-xs">
                                      <Award className="h-3 w-3 mr-1" />
                                      Certificate
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                {course.completed ? (
                                  <Badge className="bg-green-100 text-green-800">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Completed
                                  </Badge>
                                ) : (
                                  <Badge variant="outline">In Progress</Badge>
                                )}
                              </div>
                            </div>
                            
                            {course.progress !== undefined && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span className="font-medium">{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>XP Reward: {course.xpReward}</span>
                                  <span>Time: {course.hoursPerWeek} hrs/week</span>
                                </div>
                              </div>
                            )}
                            
                            <div className="flex gap-2 mt-4">
                              <Button className="flex-1" asChild>
                                <a
                                  href={course.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <PlayCircle className="h-4 w-4 mr-2" />
                                  {course.completed ? 'Review Course' : 'Continue Learning'}
                                </a>
                              </Button>
                              <Button variant="outline" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Learning Stats Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Learning Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Learning Streak</span>
                          <span className="font-semibold">{userStats.currentStreak} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Total Hours</span>
                          <span className="font-semibold">{Math.round(stats.totalHours)}h</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Course Completion</span>
                          <span className="font-semibold">
                            {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Deadlines */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <CalendarDays className="h-5 w-5 mr-2 text-blue-500" />
                        Upcoming Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {mockCourses
                        .filter(course => course.enrollmentDeadline && enrolledCourses.includes(course.id))
                        .map(course => (
                          <div key={course.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg mb-2">
                            <div>
                              <p className="text-sm font-medium">{course.title}</p>
                              <p className="text-xs text-gray-500">Enrollment ends</p>
                            </div>
                            <Badge variant="outline" className="bg-white">
                              {course.enrollmentDeadline}
                            </Badge>
                          </div>
                        ))}
                      {mockCourses.filter(course => course.enrollmentDeadline && enrolledCourses.includes(course.id)).length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">No upcoming deadlines</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Learning Paths Content */}
            <TabsContent value="learning-paths" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockLearningPaths.map((path) => (
                  <Card key={path.id} className="hover:shadow-xl transition-all border-0 shadow-lg overflow-hidden">
                    <div className={`h-2 ${path.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{path.icon}</div>
                          <Badge variant="secondary">{path.category}</Badge>
                          {path.recommended && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-800">{path.xpReward}</div>
                          <div className="text-xs text-gray-500">XP Reward</div>
                        </div>
                      </div>
                      <CardTitle>{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {path.courses.length} courses
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {path.totalDuration}
                        </div>
                        <div className="flex items-center gap-1">
                          <UserCheck className="h-4 w-4" />
                          {path.enrolled.toLocaleString()} enrolled
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Completion Rate</span>
                          <span className="font-medium">{path.completionRate}%</span>
                        </div>
                        <Progress value={path.completionRate} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Courses in this path:</div>
                        {path.courses.map((courseId) => {
                          const course = mockCourses.find((c) => c.id === courseId);
                          return course ? (
                            <div
                              key={courseId}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded ${course.colorScheme} flex items-center justify-center`}>
                                  <BookOpen className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm">{course.title}</span>
                              </div>
                              {enrolledCourses.includes(courseId) ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Button size="sm" variant="ghost" onClick={() => enrollInCourse(courseId)}>
                                  Enroll
                                </Button>
                              )}
                            </div>
                          ) : null;
                        })}
                      </div>
                    </CardContent>

                    <CardFooter className="border-t bg-gray-50">
                      <Button className="w-full" size="lg">
                        <Rocket className="h-4 w-4 mr-2" />
                        Start Learning Path
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Saved Courses */}
            <TabsContent value="saved" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCourses
                  .filter((course) => savedCourses.includes(course.id))
                  .map((course) => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      viewMode="grid"
                      enrolled={enrolledCourses.includes(course.id)}
                      saved={true}
                      onEnroll={() => enrollInCourse(course.id)}
                      onSave={() => toggleSaveCourse(course.id)}
                    />
                  ))}
                {savedCourses.length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <Bookmark className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-semibold mb-2">No saved courses yet</h3>
                    <p className="text-gray-500 mb-4">Save interesting courses to access them later</p>
                    <Button onClick={() => setActiveTab("all-courses")}>
                      <Search className="h-4 w-4 mr-2" />
                      Browse Courses
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* AI Recommended Courses */}
            <TabsContent value="ai-recommended" className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Brain className="h-5 w-5 mr-2" />
                    Why These Recommendations?
                  </CardTitle>
                  <CardDescription>
                    Our AI analyzes your learning patterns, career goals, and market trends to suggest the most relevant courses
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCourses
                  .filter((course) => course.aiRecommended)
                  .map((course) => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      viewMode="grid"
                      enrolled={enrolledCourses.includes(course.id)}
                      saved={savedCourses.includes(course.id)}
                      onEnroll={() => enrollInCourse(course.id)}
                      onSave={() => toggleSaveCourse(course.id)}
                      isAIRecommended={true}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

// Enhanced Course Card Component
interface CourseCardProps {
  course: Course;
  viewMode: "grid" | "list";
  enrolled: boolean;
  saved: boolean;
  onEnroll: () => void;
  onSave: () => void;
  onLike?: () => void;
  isAIRecommended?: boolean;
}

function CourseCard({ 
  course, 
  viewMode, 
  enrolled, 
  saved, 
  onEnroll, 
  onSave, 
  onLike,
  isAIRecommended = false 
}: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-lg transition-all border-l-4 border-l-primary">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-16 h-16 rounded-lg ${course.colorScheme} flex items-center justify-center`}>
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    {isAIRecommended && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                        <Brain className="h-3 w-3 mr-1" />
                        AI Pick
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{course.provider} • {course.duration}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.hoursPerWeek} hrs/week
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.slice(0, 4).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {course.skills.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{course.skills.length - 4} more
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge variant={enrolled ? "default" : "outline"}>
                    {enrolled ? 'Enrolled' : 'Available'}
                  </Badge>
                  <Badge variant={course.price === "Free" ? "secondary" : "outline"}>
                    {course.price}
                  </Badge>
                  {course.certificate && (
                    <Badge variant="outline" className="text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      Certificate
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={onSave}
                  >
                    {saved ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Bookmark className="h-4 w-4" />}
                  </Button>
                  {enrolled ? (
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  ) : (
                    <Button onClick={onEnroll}>
                      Enroll Now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid View
  return (
    <Card 
      className="hover:shadow-2xl transition-all duration-300 overflow-hidden group border-0 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-40 ${course.colorScheme} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
              {course.level}
            </Badge>
            {course.featured && (
              <Badge className="bg-yellow-500/20 backdrop-blur-sm text-yellow-100 border-0">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
            {course.trending && (
              <Badge className="bg-red-500/20 backdrop-blur-sm text-red-100 border-0">
                <Flame className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            onClick={onSave}
          >
            {saved ? <CheckCircle className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </Button>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="text-white">
            <div className="text-2xl font-bold">{course.badge}</div>
            <div className="text-sm opacity-90">{course.xpReward} XP Reward</div>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {course.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-gray-400">({course.students.toLocaleString()})</span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span>{course.provider}</span>
          {isAIRecommended && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs">
              <Brain className="h-3 w-3 mr-1" />
              AI Recommended
            </Badge>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              {course.level}
            </div>
          </div>
          <Badge variant={course.price === "Free" ? "secondary" : "outline"}>
            {course.price}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-700">Skills you'll gain:</div>
          <div className="flex flex-wrap gap-1">
            {course.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {course.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{course.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-center">
          <div className="bg-gray-50 p-2 rounded">
            <div className="font-semibold">{course.videoCount}</div>
            <div className="text-gray-500">Videos</div>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <div className="font-semibold">{course.quizCount}</div>
            <div className="text-gray-500">Quizzes</div>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <div className="font-semibold">{course.projectCount}</div>
            <div className="text-gray-500">Projects</div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex gap-2 w-full">
          {enrolled ? (
            <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600">
              <PlayCircle className="h-4 w-4 mr-2" />
              Continue
            </Button>
          ) : (
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={onEnroll}
            >
              Enroll Now
            </Button>
          )}
          <Button variant="outline" size="icon" asChild>
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              title="View course details"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
