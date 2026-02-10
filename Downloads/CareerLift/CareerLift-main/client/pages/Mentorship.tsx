// app/mentorship/page.tsx
'use client';

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import {
  Heart,
  Search,
  Star,
  MessageCircle,
  Video,
  Calendar,
  Users,
  Award,
  Target,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Phone,
  Send,
  ExternalLink,
  Globe,
  Shield,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  TrendingUp,
  Palette,
  BookOpen,
  Lightbulb,
  UsersRound,
  Handshake,
  Crown,
  Trophy,
  BadgeCheck,
  Coffee,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Globe as GlobeIcon,
  ChevronRight,
  Flame,
  Target as TargetIcon,
  Leaf,
  Gem,
  Sparkle,
  SearchX,
  Filter,
  X,
  Plus,
  MessageSquare,
  CalendarDays,
  Video as VideoIcon,
  BookMarked,
  Flame as FlameIcon,
  TrendingUp as TrendingUpIcon,
  Rocket as RocketIcon,
  Crown as CrownIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Target as TargetIcon2,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  CheckCircle as CheckCircleIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
  ExternalLink as ExternalLinkIcon,
  Shield as ShieldIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  experience: number;
  location: string;
  avatar: string;
  bio: string;
  expertise: string[];
  languages: string[];
  rating: number;
  totalMentees: number;
  availableSlots: number;
  responseTime: string;
  sessionTypes: ("video" | "chat" | "phone")[];
  verified: boolean;
  price: "Free" | "Paid";
  personality?: "Analytical" | "Creative" | "Supportive" | "Strategic";
  matchingScore?: number;
}

interface MentorshipProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  mentors: number;
  participants: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  nextStart: string;
  icon?: string;
  color?: string;
  features?: string[];
}

interface MentorshipPlatform {
  id: string;
  name: string;
  url: string;
  description: string;
  specialization: string[];
  location: "Global" | "Africa" | "US/Europe";
  verified: boolean;
  rating: number;
  mentors: number;
  icon?: string;
  badge?: string;
}

const mockMentors: Mentor[] = [
  {
    id: "1",
    name: "Sarah Kimani",
    title: "Senior Software Engineer",
    company: "Google",
    industry: "Technology",
    experience: 8,
    location: "Nairobi, Kenya",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=7c3aed",
    bio: "Passionate about helping young developers break into tech. I've mentored 50+ engineers and love sharing knowledge about software development, career growth, and work-life balance.",
    expertise: [
      "Software Development",
      "Career Growth",
      "Technical Interviews",
      "Leadership",
    ],
    languages: ["English", "Swahili"],
    rating: 4.9,
    totalMentees: 52,
    availableSlots: 3,
    responseTime: "< 24 hours",
    sessionTypes: ["video", "chat"],
    verified: true,
    price: "Free",
    personality: "Supportive",
    matchingScore: 92,
  },
  {
    id: "2",
    name: "Michael Okafor",
    title: "Marketing Director",
    company: "Coca-Cola Africa",
    industry: "Marketing",
    experience: 12,
    location: "Lagos, Nigeria",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=3b82f6",
    bio: "Building brands across Africa for over a decade. I help young marketers develop strategic thinking, creative skills, and understand the African market landscape.",
    expertise: [
      "Digital Marketing",
      "Brand Strategy",
      "Market Research",
      "Team Leadership",
    ],
    languages: ["English", "Igbo", "Yoruba"],
    rating: 4.8,
    totalMentees: 38,
    availableSlots: 5,
    responseTime: "< 48 hours",
    sessionTypes: ["video", "chat", "phone"],
    verified: true,
    price: "Free",
    personality: "Strategic",
    matchingScore: 88,
  },
  {
    id: "3",
    name: "Dr. Fatima Al-Zahra",
    title: "Entrepreneur & Business Consultant",
    company: "Al-Zahra Consulting",
    industry: "Business",
    experience: 15,
    location: "Cairo, Egypt",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fatima&backgroundColor=10b981",
    bio: "Founded 3 successful businesses and now help aspiring entrepreneurs across MENA. Specialized in business planning, fundraising, and scaling operations.",
    expertise: [
      "Entrepreneurship",
      "Business Planning",
      "Fundraising",
      "Operations",
    ],
    languages: ["Arabic", "English", "French"],
    rating: 4.7,
    totalMentees: 29,
    availableSlots: 2,
    responseTime: "< 24 hours",
    sessionTypes: ["video", "chat"],
    verified: true,
    price: "Paid",
    personality: "Analytical",
    matchingScore: 95,
  },
  {
    id: "4",
    name: "James Mwangi",
    title: "Financial Analyst",
    company: "Standard Bank",
    industry: "Finance",
    experience: 6,
    location: "Cape Town, South Africa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=f59e0b",
    bio: "Young finance professional passionate about financial literacy and career development. I focus on helping new graduates navigate the finance industry.",
    expertise: [
      "Financial Analysis",
      "Investment Banking",
      "Career Transitions",
      "Financial Literacy",
    ],
    languages: ["English", "Afrikaans"],
    rating: 4.6,
    totalMentees: 21,
    availableSlots: 4,
    responseTime: "< 72 hours",
    sessionTypes: ["video", "chat"],
    verified: true,
    price: "Free",
    personality: "Creative",
    matchingScore: 85,
  },
  {
    id: "5",
    name: "Aisha Hassan",
    title: "HR Director",
    company: "UN Women",
    industry: "Human Resources",
    experience: 10,
    location: "Addis Ababa, Ethiopia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha&backgroundColor=ec4899",
    bio: "HR professional with expertise in talent development and organizational culture. I help young professionals develop leadership skills and navigate workplace dynamics.",
    expertise: [
      "Human Resources",
      "Leadership Development",
      "Workplace Culture",
      "Career Coaching",
    ],
    languages: ["English", "Amharic", "Arabic"],
    rating: 4.8,
    totalMentees: 45,
    availableSlots: 1,
    responseTime: "< 24 hours",
    sessionTypes: ["video", "chat", "phone"],
    verified: true,
    price: "Free",
    personality: "Supportive",
    matchingScore: 90,
  },
];

const mockPrograms: MentorshipProgram[] = [
  {
    id: "1",
    title: "Tech Career Accelerator",
    description:
      "12-week intensive program for aspiring software developers and tech professionals",
    duration: "12 weeks",
    mentors: 25,
    participants: 100,
    category: "Technology",
    level: "Beginner",
    nextStart: "March 15, 2024",
    icon: "💻",
    color: "from-blue-500 to-purple-600",
    features: [
      "Weekly 1:1 mentorship",
      "Group workshops",
      "Project portfolio building",
      "Job placement support",
    ],
  },
  {
    id: "2",
    title: "Entrepreneurship Bootcamp",
    description:
      "8-week program covering business planning, fundraising, and startup execution",
    duration: "8 weeks",
    mentors: 15,
    participants: 60,
    category: "Business",
    level: "Intermediate",
    nextStart: "April 1, 2024",
    icon: "🚀",
    color: "from-green-500 to-emerald-600",
    features: [
      "Business model development",
      "Pitch practice sessions",
      "Investor networking",
      "Legal & financial guidance",
    ],
  },
  {
    id: "3",
    title: "Leadership Development Program",
    description:
      "16-week comprehensive leadership training for emerging leaders",
    duration: "16 weeks",
    mentors: 20,
    participants: 80,
    category: "Leadership",
    level: "Advanced",
    nextStart: "March 22, 2024",
    icon: "👑",
    color: "from-amber-500 to-orange-600",
    features: [
      "Executive coaching",
      "Team management training",
      "Strategic thinking workshops",
      "Global leadership network",
    ],
  },
];

const mentorshipPlatforms: MentorshipPlatform[] = [
  {
    id: "1",
    name: "SCORE",
    url: "https://www.score.org/find-mentor",
    description:
      "Connect with experienced business mentors (great for entrepreneurs).",
    specialization: [
      "Business",
      "Entrepreneurship",
      "Small Business",
      "Strategy",
    ],
    location: "US/Europe",
    verified: true,
    rating: 4.6,
    mentors: 10000,
    icon: "🏢",
    badge: "Top Rated",
  },
  {
    id: "2",
    name: "MicroMentor",
    url: "https://www.micromentor.org/",
    description:
      "Global platform offering free mentorship in business, career, and personal growth.",
    specialization: [
      "Business",
      "Career Growth",
      "Personal Development",
      "Small Business",
    ],
    location: "Global",
    verified: true,
    rating: 4.5,
    mentors: 15000,
    icon: "🌍",
    badge: "Most Popular",
  },
  {
    id: "3",
    name: "ADPList",
    url: "https://www.adplist.org/",
    description:
      "Free 1-on-1 mentorship with professionals in design, tech, marketing, and career growth.",
    specialization: ["Design", "Technology", "Marketing", "Career Growth"],
    location: "Global",
    verified: true,
    rating: 4.8,
    mentors: 20000,
    icon: "👥",
    badge: "Fastest Growing",
  },
  {
    id: "4",
    name: "Mentoring.org",
    url: "https://www.mentoring.org/",
    description:
      "National Mentoring Partnership—connects youth with free mentoring organizations.",
    specialization: [
      "Youth Development",
      "Career Guidance",
      "Education",
      "Life Skills",
    ],
    location: "US/Europe",
    verified: true,
    rating: 4.4,
    mentors: 8000,
    icon: "🎓",
    badge: "Community Focused",
  },
  {
    id: "5",
    name: "MentoringClub",
    url: "https://www.mentoringclub.com/",
    description:
      "Free mentorship by industry experts in product, tech, business, and more.",
    specialization: [
      "Product Management",
      "Technology",
      "Business",
      "Strategy",
    ],
    location: "Global",
    verified: true,
    rating: 4.7,
    mentors: 12000,
    icon: "🎯",
    badge: "Expert Network",
  },
  {
    id: "6",
    name: "PushFar",
    url: "https://www.pushfar.com/",
    description: "Free career mentoring network with personalized matching.",
    specialization: [
      "Career Development",
      "Professional Growth",
      "Leadership",
      "Networking",
    ],
    location: "Global",
    verified: true,
    rating: 4.3,
    mentors: 5000,
    icon: "🚀",
    badge: "AI-Powered",
  },
  {
    id: "7",
    name: "Tunde Advisory",
    url: "https://tundeadvisory.com/mentorship/",
    description:
      "Africa-focused mentorship for youth, professionals, and entrepreneurs.",
    specialization: [
      "African Business",
      "Youth Development",
      "Entrepreneurship",
      "Professional Growth",
    ],
    location: "Africa",
    verified: true,
    rating: 4.6,
    mentors: 2000,
    icon: "🤝",
    badge: "Africa Focus",
  },
  {
    id: "8",
    name: "Youth Business",
    url: "https://www.youthbusiness.org/",
    description:
      "Global initiative supporting young entrepreneurs with free mentorship and tools.",
    specialization: [
      "Young Entrepreneurs",
      "Business Development",
      "Social Enterprise",
      "Innovation",
    ],
    location: "Global",
    verified: true,
    rating: 4.5,
    mentors: 3000,
    icon: "💡",
    badge: "Youth Focus",
  },
];

const personalityIcons = {
  Analytical: <Brain className="h-4 w-4" />,
  Creative: <Sparkle className="h-4 w-4" />,
  Supportive: <Heart className="h-4 w-4" />,
  Strategic: <Target className="h-4 w-4" />,
};

const personalityColors = {
  Analytical: "from-blue-500 to-cyan-500",
  Creative: "from-purple-500 to-pink-500",
  Supportive: "from-green-500 to-emerald-500",
  Strategic: "from-amber-500 to-orange-500",
};

export default function Mentorship() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedPersonality, setSelectedPersonality] = useState("all");
  const [activeTab, setActiveTab] = useState("platforms");
  const [connectedMentors, setConnectedMentors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    // Add some initial connected mentors for demo
    setConnectedMentors(["1", "3"]);
  }, []);

  const filteredMentors = useMemo(() => {
    return mockMentors.filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesIndustry =
        selectedIndustry === "all" || mentor.industry === selectedIndustry;
      const matchesExperience =
        selectedExperience === "all" ||
        (selectedExperience === "5-" && mentor.experience < 5) ||
        (selectedExperience === "5-10" &&
          mentor.experience >= 5 &&
          mentor.experience <= 10) ||
        (selectedExperience === "10+" && mentor.experience > 10);
      const matchesPrice =
        selectedPrice === "all" || mentor.price === selectedPrice;
      const matchesPersonality =
        selectedPersonality === "all" || mentor.personality === selectedPersonality;

      return (
        matchesSearch && matchesIndustry && matchesExperience && matchesPrice && matchesPersonality
      );
    });
  }, [searchTerm, selectedIndustry, selectedExperience, selectedPrice, selectedPersonality]);

  const connectWithMentor = (mentorId: string) => {
    if (!connectedMentors.includes(mentorId)) {
      setConnectedMentors([...connectedMentors, mentorId]);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedIndustry("all");
    setSelectedExperience("all");
    setSelectedPrice("all");
    setSelectedPersonality("all");
  };

  const filteredPlatforms = selectedPlatform 
    ? mentorshipPlatforms.filter(p => p.location === selectedPlatform)
    : mentorshipPlatforms;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Animated Elements */}
          <div className="text-center mb-10 relative">
            {/* Floating Elements */}
            <div className="absolute top-0 left-10 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="absolute top-0 right-10 w-32 h-32 bg-gradient-to-r from-green-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{ animationDelay: '0.3s' }} />
            <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }} />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <Handshake className="inline mr-3 h-10 w-10 animate-float" />
                    MentorMatch AI
                  </h1>
                </div>
                <Badge className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 animate-pulse">
                  <Sparkles className="mr-1 h-3 w-3" />
                  AI-Powered
                </Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 relative z-10">
                Find your perfect mentor with AI-powered matching. Connect, learn, and grow with industry leaders worldwide. ✨
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-6 relative z-10">
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-2">
                  <Users className="mr-2 h-4 w-4 text-blue-600" />
                  {mockMentors.length} Expert Mentors
                </Badge>
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-2">
                  <Globe className="mr-2 h-4 w-4 text-green-600" />
                  {mentorshipPlatforms.length} Free Platforms
                </Badge>
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-2">
                  <Award className="mr-2 h-4 w-4 text-amber-600" />
                  {mockPrograms.length} Group Programs
                </Badge>
              </div>
            </div>
          </div>

          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mentorshipPlatforms.length}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Free Platforms
                </div>
                <div className="text-xs text-blue-600 mt-1">Verified & Trusted</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mentorshipPlatforms
                    .reduce((sum, platform) => sum + platform.mentors, 0)
                    .toLocaleString()}
                  +
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Available Mentors
                </div>
                <div className="text-xs text-green-600 mt-1">Ready to Help</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 font-medium">Free Access</div>
                <div className="text-xs text-pink-600 mt-1">No Hidden Fees</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{mockPrograms.length}</div>
                <div className="text-sm text-gray-600 font-medium">Group Programs</div>
                <div className="text-xs text-amber-600 mt-1">Structured Learning</div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Tabs */}
          <Card className="border-0 shadow-xl mb-8 bg-gradient-to-br from-white to-gray-50/50">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <Handshake className="mr-3 h-6 w-6" />
                    Your Mentorship Journey
                  </CardTitle>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {connectedMentors.length} Connected
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Choose your path to professional growth and guidance
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-0">
                <TabsList className="grid w-full grid-cols-4 p-2 bg-gradient-to-r from-gray-50 to-white">
                  <TabsTrigger value="platforms" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
                    <Globe className="h-4 w-4 mr-2" />
                    🔗 Free Platforms
                  </TabsTrigger>
                  <TabsTrigger value="mentors" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
                    <Users className="h-4 w-4 mr-2" />
                    👥 Find Mentors
                  </TabsTrigger>
                  <TabsTrigger value="programs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
                    <BookOpen className="h-4 w-4 mr-2" />
                    🎓 Group Programs
                  </TabsTrigger>
                  <TabsTrigger value="my-mentors" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
                    <Heart className="h-4 w-4 mr-2" />
                    💬 My Mentorships
                  </TabsTrigger>
                </TabsList>

                {/* Platforms Tab */}
                <TabsContent value="platforms" className="p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Filter by Region</h3>
                      <p className="text-sm text-gray-600">Find platforms that serve your location</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={selectedPlatform === null ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setSelectedPlatform(null)}
                        className={cn(
                          selectedPlatform === null && "bg-gradient-to-r from-blue-500 to-cyan-500"
                        )}
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        All Regions
                      </Button>
                      {["Global", "Africa", "US/Europe"].map(region => (
                        <Button
                          key={region}
                          variant={selectedPlatform === region ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPlatform(region)}
                          className={cn(
                            selectedPlatform === region && 
                            (region === "Global" ? "bg-gradient-to-r from-green-500 to-emerald-500" :
                             region === "Africa" ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                             "bg-gradient-to-r from-purple-500 to-pink-500")
                          )}
                        >
                          {region}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPlatforms.map((platform) => (
                      <Card
                        key={platform.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-all group bg-gradient-to-br from-white to-gray-50/50"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{platform.icon}</div>
                              <div className="flex-1">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                  {platform.name}
                                </CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  {platform.verified && (
                                    <Badge
                                      variant="secondary"
                                      className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                                    >
                                      <Shield className="h-3 w-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    {platform.location}
                                  </Badge>
                                  {platform.badge && (
                                    <Badge
                                      variant="secondary"
                                      className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800"
                                    >
                                      <Sparkles className="h-3 w-3 mr-1" />
                                      {platform.badge}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm font-semibold">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {platform.rating}
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-sm text-gray-600">
                            {platform.description}
                          </p>

                          <div>
                            <div className="text-sm font-medium mb-2 flex items-center">
                              <Target className="h-4 w-4 mr-2 text-blue-600" />
                              Specializations:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {platform.specialization.map((spec) => (
                                <Badge
                                  key={spec}
                                  variant="secondary"
                                  className="text-xs bg-gradient-to-r from-gray-50 to-white"
                                >
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span className="font-semibold">{platform.mentors.toLocaleString()}+</span> mentors
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Free Access</span>
                            </div>
                          </div>

                          <Button 
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all"
                            asChild
                          >
                            <a
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Visit Platform
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Mentors Tab */}
                <TabsContent value="mentors" className="p-6 space-y-6">
                  {/* Search and Filters */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Find Your Perfect Mentor</h3>
                            <p className="text-sm text-gray-600">Filter by expertise, experience, and personality</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2"
                          >
                            <Filter className="h-4 w-4" />
                            {showFilters ? "Hide Filters" : "Show Filters"}
                          </Button>
                        </div>

                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            placeholder="Search by name, role, skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 h-12 text-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                          {searchTerm && (
                            <button
                              onClick={() => setSearchTerm("")}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          )}
                        </div>

                        {showFilters && (
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t animate-fadeIn">
                            <Select
                              value={selectedIndustry}
                              onValueChange={setSelectedIndustry}
                            >
                              <SelectTrigger className="bg-gradient-to-r from-gray-50 to-white">
                                <SelectValue placeholder="Industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Industries</SelectItem>
                                <SelectItem value="Technology">
                                  <div className="flex items-center">
                                    <Code className="h-4 w-4 mr-2" />
                                    Technology
                                  </div>
                                </SelectItem>
                                <SelectItem value="Marketing">
                                  <div className="flex items-center">
                                    <TrendingUp className="h-4 w-4 mr-2" />
                                    Marketing
                                  </div>
                                </SelectItem>
                                <SelectItem value="Business">
                                  <div className="flex items-center">
                                    <Briefcase className="h-4 w-4 mr-2" />
                                    Business
                                  </div>
                                </SelectItem>
                                <SelectItem value="Finance">
                                  <div className="flex items-center">
                                    <DollarSign className="h-4 w-4 mr-2" />
                                    Finance
                                  </div>
                                </SelectItem>
                                <SelectItem value="Human Resources">
                                  <div className="flex items-center">
                                    <Users className="h-4 w-4 mr-2" />
                                    Human Resources
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>

                            <Select
                              value={selectedExperience}
                              onValueChange={setSelectedExperience}
                            >
                              <SelectTrigger className="bg-gradient-to-r from-gray-50 to-white">
                                <SelectValue placeholder="Experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Experience</SelectItem>
                                <SelectItem value="5-">Under 5 years</SelectItem>
                                <SelectItem value="5-10">5-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>

                            <Select
                              value={selectedPrice}
                              onValueChange={setSelectedPrice}
                            >
                              <SelectTrigger className="bg-gradient-to-r from-gray-50 to-white">
                                <SelectValue placeholder="Price" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Pricing</SelectItem>
                                <SelectItem value="Free">Free Only</SelectItem>
                                <SelectItem value="Paid">Paid Only</SelectItem>
                              </SelectContent>
                            </Select>

                            <Select
                              value={selectedPersonality}
                              onValueChange={setSelectedPersonality}
                            >
                              <SelectTrigger className="bg-gradient-to-r from-gray-50 to-white">
                                <SelectValue placeholder="Mentor Style" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Styles</SelectItem>
                                <SelectItem value="Analytical">Analytical</SelectItem>
                                <SelectItem value="Creative">Creative</SelectItem>
                                <SelectItem value="Supportive">Supportive</SelectItem>
                                <SelectItem value="Strategic">Strategic</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                          <div className="text-sm text-gray-600">
                            Showing {filteredMentors.length} of {mockMentors.length} mentors
                          </div>
                          {(searchTerm || selectedIndustry !== "all" || selectedExperience !== "all" || selectedPrice !== "all" || selectedPersonality !== "all") && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={resetFilters}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="h-4 w-4 mr-1" />
                              Clear Filters
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mentor Grid */}
                  {filteredMentors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredMentors.map((mentor) => (
                        <Card
                          key={mentor.id}
                          className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        >
                          {/* Matching Score Badge */}
                          {mentor.matchingScore && (
                            <div className="absolute top-4 right-4 z-10">
                              <Badge className={cn(
                                "bg-gradient-to-r text-white shadow-lg",
                                mentor.matchingScore >= 90 ? "from-green-500 to-emerald-600" :
                                mentor.matchingScore >= 80 ? "from-blue-500 to-cyan-500" :
                                "from-amber-500 to-orange-500"
                              )}>
                                <Target className="h-3 w-3 mr-1" />
                                {mentor.matchingScore}% Match
                              </Badge>
                            </div>
                          )}

                          <CardHeader className="pb-4">
                            <div className="flex items-start gap-4">
                              <div className="relative">
                                <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    {getInitials(mentor.name)}
                                  </AvatarFallback>
                                </Avatar>
                                {mentor.verified && (
                                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-1 border-2 border-white">
                                    <CheckCircle className="h-4 w-4 text-white" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {mentor.name}
                                  </CardTitle>
                                </div>
                                <CardDescription className="mt-1">
                                  {mentor.title} at {mentor.company}
                                </CardDescription>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs bg-gradient-to-r from-gray-50 to-white"
                                  >
                                    <Briefcase className="h-3 w-3 mr-1" />
                                    {mentor.industry}
                                  </Badge>
                                  <Badge
                                    variant={mentor.price === "Free" ? "secondary" : "outline"}
                                    className={cn(
                                      "text-xs",
                                      mentor.price === "Free" && "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                                    )}
                                  >
                                    {mentor.price === "Free" ? "Free" : "Premium"}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            <p className="text-sm text-gray-600 line-clamp-3">
                              {mentor.bio}
                            </p>

                            {/* Personality Badge */}
                            {mentor.personality && (
                              <div className="flex items-center gap-2">
                                <Badge 
                                  variant="outline" 
                                  className={cn(
                                    "text-xs",
                                    `bg-gradient-to-r ${personalityColors[mentor.personality]} bg-clip-text text-transparent`
                                  )}
                                >
                                  {personalityIcons[mentor.personality]}
                                  <span className="ml-1">{mentor.personality} Mentor</span>
                                </Badge>
                              </div>
                            )}

                            <div className="space-y-2">
                              <div className="text-sm font-medium flex items-center">
                                <Award className="h-4 w-4 mr-2 text-amber-600" />
                                Expertise:
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {mentor.expertise.slice(0, 3).map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="text-xs bg-gradient-to-r from-gray-50 to-white"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                                {mentor.expertise.length > 3 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{mentor.expertise.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-semibold">{mentor.rating}</span>
                                </div>
                                <div className="text-gray-600">Rating</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-600" />
                                <div>
                                  <span className="font-semibold">{mentor.totalMentees}</span>
                                  <div className="text-gray-600">Mentees</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-purple-600" />
                                <div>
                                  <span className="font-semibold">{mentor.responseTime}</span>
                                  <div className="text-gray-600">Response</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-green-600" />
                                <div>
                                  <span className="font-semibold">{mentor.availableSlots}</span>
                                  <div className="text-gray-600">Slots left</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                              {mentor.sessionTypes.includes("video") && (
                                <Badge variant="outline" className="text-xs">
                                  <Video className="h-3 w-3 mr-1" />
                                  Video
                                </Badge>
                              )}
                              {mentor.sessionTypes.includes("chat") && (
                                <Badge variant="outline" className="text-xs">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  Chat
                                </Badge>
                              )}
                              {mentor.sessionTypes.includes("phone") && (
                                <Badge variant="outline" className="text-xs">
                                  <Phone className="h-3 w-3 mr-1" />
                                  Phone
                                </Badge>
                              )}
                            </div>
                          </CardContent>

                          <CardFooter className="border-t pt-4">
                            <div className="flex gap-2 w-full">
                              {connectedMentors.includes(mentor.id) ? (
                                <Button
                                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                                  disabled
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Connected
                                </Button>
                              ) : (
                                <Button
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all"
                                  onClick={() => connectWithMentor(mentor.id)}
                                >
                                  <Send className="h-4 w-4 mr-2" />
                                  Connect
                                </Button>
                              )}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                                    View Profile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <Avatar className="h-12 w-12">
                                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                                        <AvatarFallback>{getInitials(mentor.name)}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <div className="text-xl font-bold">{mentor.name}</div>
                                        <div className="text-sm text-gray-600">{mentor.title} at {mentor.company}</div>
                                      </div>
                                    </DialogTitle>
                                    <DialogDescription>
                                      Complete mentor profile and availability
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <p className="text-gray-700">{mentor.bio}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-2">Languages</h4>
                                        <div className="flex flex-wrap gap-1">
                                          {mentor.languages.map(lang => (
                                            <Badge key={lang} variant="secondary">{lang}</Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-2">Experience</h4>
                                        <div className="flex items-center gap-2">
                                          <Briefcase className="h-4 w-4" />
                                          <span>{mentor.experience} years</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                      <SearchX className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">No mentors found</h3>
                      <p className="text-gray-600 max-w-sm mx-auto mb-4">
                        Try adjusting your filters or search term to find more mentors.
                      </p>
                      <Button onClick={resetFilters} variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Reset All Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {/* Programs Tab */}
                <TabsContent value="programs" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockPrograms.map((program) => (
                      <Card
                        key={program.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                      >
                        <CardHeader className={`bg-gradient-to-br ${program.color} p-6`}>
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-3xl mb-2">{program.icon}</div>
                              <CardTitle className="text-white text-lg">
                                {program.title}
                              </CardTitle>
                              <CardDescription className="text-white/80 mt-1">
                                {program.description}
                              </CardDescription>
                            </div>
                            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                              {program.level}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="p-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-600" />
                              <div>
                                <span className="font-semibold">{program.duration}</span>
                                <div className="text-gray-600">Duration</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-green-600" />
                              <div>
                                <span className="font-semibold">{program.mentors}</span>
                                <div className="text-gray-600">Mentors</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-purple-600" />
                              <div>
                                <span className="font-semibold">{program.participants}</span>
                                <div className="text-gray-600">Participants</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-amber-600" />
                              <div>
                                <span className="font-semibold">{program.nextStart}</span>
                                <div className="text-gray-600">Next Start</div>
                              </div>
                            </div>
                          </div>

                          <Badge variant="secondary" className="bg-gradient-to-r from-gray-50 to-white">
                            {program.category}
                          </Badge>

                          {program.features && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold">Program Features:</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {program.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="h-3 w-3 text-green-500" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Join Program
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* My Mentors Tab */}
                <TabsContent value="my-mentors" className="p-6 space-y-6">
                  {connectedMentors.length > 0 ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Active Mentorships</h3>
                          <p className="text-sm text-gray-600">Your ongoing learning relationships</p>
                        </div>
                        <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700">
                          {connectedMentors.length} Active
                        </Badge>
                      </div>
                      
                      {connectedMentors.map((mentorId) => {
                        const mentor = mockMentors.find((m) => m.id === mentorId);
                        if (!mentor) return null;

                        return (
                          <Card key={mentorId} className="border-0 shadow-lg hover:shadow-xl transition-all">
                            <CardHeader>
                              <div className="flex items-center gap-4">
                                <Avatar className="h-14 w-14 border-4 border-white shadow-lg">
                                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    {getInitials(mentor.name)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <CardTitle className="flex items-center gap-2">
                                    {mentor.name}
                                    <Badge
                                      variant="secondary"
                                      className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                                    >
                                      <CheckCircle className="h-3 w-3 mr-1" />
                                      Active
                                    </Badge>
                                  </CardTitle>
                                  <CardDescription>
                                    {mentor.title} at {mentor.company}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Send Message
                                </Button>
                                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                                  <Video className="h-4 w-4 mr-2" />
                                  Schedule Call
                                </Button>
                                <Button variant="outline" className="border-green-200 hover:bg-green-50">
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  View Progress
                                </Button>
                                <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  Book Session
                                </Button>
                              </div>
                            </CardContent>

                            <CardFooter className="border-t pt-4">
                              <div className="w-full">
                                <div className="flex items-center justify-between text-sm mb-2">
                                  <span className="text-gray-600">Next meeting:</span>
                                  <span className="font-semibold">Tomorrow, 2:00 PM</span>
                                </div>
                                <Progress value={65} className="h-2" />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                  <span>Last session: 3 days ago</span>
                                  <span>65% complete</span>
                                </div>
                              </div>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                      <Heart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">No active mentorships</h3>
                      <p className="text-gray-600 max-w-sm mx-auto mb-4">
                        Connect with mentors to start your professional development journey and accelerate your growth.
                      </p>
                      <Button 
                        onClick={() => setActiveTab("mentors")}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Find Your First Mentor
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* CTA Section */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mb-8">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to accelerate your career?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Join thousands of professionals who have found their perfect mentor and transformed their careers. 
                Start your mentorship journey today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl"
                  onClick={() => setActiveTab("mentors")}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Find a Mentor
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-300 hover:bg-blue-50"
                  onClick={() => setActiveTab("platforms")}
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Explore Platforms
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Stats */}
          <div className="text-center text-sm text-gray-500">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4 text-green-500" />
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center">
                <Lock className="mr-2 h-4 w-4 text-blue-500" />
                <span>Secure Connections</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
                <span>AI-Powered Matching</span>
              </div>
              <div className="flex items-center">
                <Heart className="mr-2 h-4 w-4 text-pink-500" />
                <span>100% Free Access</span>
              </div>
            </div>
            <p>
              Empowering professionals worldwide through mentorship • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
}
