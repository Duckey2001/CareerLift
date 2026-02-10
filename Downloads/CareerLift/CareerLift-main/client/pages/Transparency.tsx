// app/transparency/page.tsx
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import {
  Shield,
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Building,
  Users,
  MessageSquare,
  Flag,
  Award,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Brain,
  Sparkles,
  Zap,
  Radar,
  Scale,
  Gavel,
  Lock,
  Unlock,
  Heart,
  Ghost,
  ShieldCheck,
  ShieldAlert,
  AlertCircle,
  FileWarning,
  Skull,
  Scale as Justice,
  ShieldX,
  ShieldPlus,
  ShieldMinus,
  ShieldQuestion,
  ShieldOff,
  Shield as ShieldIcon,
  Target,
  BarChart3,
  TrendingUp as ArrowUp,
  TrendingDown as ArrowDown,
  Globe,
  MapPin,
  Clock,
  Calendar,
  Filter,
  Download,
  Upload,
  Share2,
  Bell,
  BellRing,
  EyeOff,
  Eye as EyeIcon,
  Users as UsersIcon,
  Briefcase,
  DollarSign,
  Percent,
  LineChart,
  PieChart,
  Activity,
  Cpu,
  Database,
  Network,
  Cloud,
  Server,
  Terminal,
  Code,
  Palette,
  Megaphone,
  Newspaper,
  BookOpen,
  GraduationCap,
  Coins,
  Wallet,
  CreditCard,
  Banknote,
  Bitcoin,
  Gem,
  Crown,
  Trophy,
  Medal,
  Ribbon,
  Award as AwardIcon,
  Flame,
  Snowflake,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Cloudy,
  Compass,
  Navigation,
  Map,
  Globe as GlobeIcon,
  Satellite,
  Wifi,
  WifiOff,
  Signal,
  SignalLow,
  SignalMedium,
  SignalHigh,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryFull,
  BatteryCharging,
  Power,
  PowerOff,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Zap as ZapIcon,
  Wind as WindIcon,
  Droplet,
  Thermometer,
  ThermometerSun,
  ThermometerSnowflake,
  Umbrella,
  Sun as SunIcon,
  Moon as MoonIcon,
  Cloud as CloudIcon,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudSun as CloudSunIcon,
  CloudMoon,
  CloudMoonRain,
  CloudSunRain,
  CloudLightningRain,
  CloudSnowRain,
  CloudHaze,
  CloudHaze2,
  CloudRainWind,
  CloudSnowWind,
  CloudLightningWind,
  CloudFogWind,
  CloudHailWind,
  CloudRainSnow,
  CloudSnowLightning,
  CloudRainLightning,
  CloudSnowRainLightning,
  CloudHailLightning,
  CloudFogLightning,
  CloudWind,
  CloudWindRain,
  CloudWindSnow,
  CloudWindLightning,
  CloudWindHail,
  CloudWindFog,
  CloudWindRainSnow,
  CloudWindSnowLightning,
  CloudWindRainLightning,
  CloudWindHailLightning,
  CloudWindFogLightning,
  CloudWindRainHail,
  CloudWindSnowHail,
  CloudWindRainSnowHail,
  CloudWindRainSnowLightning,
  CloudWindRainHailLightning,
  CloudWindSnowHailLightning,
  CloudWindRainSnowHailLightning,
  CloudWindFogRain,
  CloudWindFogSnow,
  CloudWindFogLightningRain,
  CloudWindFogLightningSnow,
  CloudWindFogRainSnow,
  CloudWindFogRainLightning,
  CloudWindFogSnowLightning,
  CloudWindFogRainSnowLightning,
  CloudWindFogHail,
  CloudWindFogHailLightning,
  CloudWindFogRainHail,
  CloudWindFogSnowHail,
  CloudWindFogRainSnowHail,
  CloudWindFogRainHailLightning,
  CloudWindFogSnowHailLightning,
  CloudWindFogRainSnowHailLightning,
} from "lucide-react";

// AI API Integration
const TRANSPARENCY_API_KEY = "AIzaSyCV3v3N_whnIa6dXdVBTkcG3NcIF8Hk6Ok";

interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  size: string;
  location: string;
  transparencyScore: number;
  hiringFairness: number;
  salaryTransparency: number;
  processClarity: number;
  responseTime: number;
  diversityScore: number;
  growthScore: number;
  complianceScore: number;
  totalReviews: number;
  recentTrend: "up" | "down" | "stable";
  verified: boolean;
  lastUpdate: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  aiAnalysis?: string;
  dataSources: string[];
  alerts: Alert[];
  similarCompanies: string[];
  employeeCount: number;
  founded: number;
  funding?: string;
  ceo?: string;
  website: string;
  linkedin?: string;
  glassdoor?: string;
  rating: number;
  revenue?: string;
  marketCap?: string;
}

interface Review {
  id: string;
  companyId: string;
  rating: number;
  title: string;
  description: string;
  category: "hiring" | "salary" | "process" | "culture" | "diversity" | "compliance";
  isAnonymous: boolean;
  date: string;
  helpful: number;
  reported: number;
  verifiedUser: boolean;
  sentiment: "positive" | "neutral" | "negative";
  aiVerified: boolean;
  tags: string[];
  evidence?: string[];
  resolution?: string;
  impactScore: number;
}

interface Alert {
  id: string;
  companyId: string;
  type: "corruption" | "discrimination" | "fraud" | "unfair-practice" | "safety" | "compliance";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  date: string;
  status: "active" | "investigating" | "resolved" | "dismissed";
  source: string;
  evidence?: string[];
  affectedUsers: number;
  aiConfidence: number;
}

interface Report {
  id: string;
  companyId?: string;
  companyName: string;
  type: string;
  description: string;
  evidence: string[];
  date: string;
  status: "pending" | "investigating" | "verified" | "dismissed";
  priority: "low" | "medium" | "high" | "critical";
  category: string[];
  anonymityLevel: "anonymous" | "semi-anonymous" | "public";
  aiAnalysis?: string;
  impactScore: number;
  similarReports: string[];
}

const mockCompanies: Company[] = [
  {
    id: "1",
    name: "TechCorp Kenya",
    logo: "🟣",
    industry: "Technology",
    size: "50-200",
    location: "Nairobi, Kenya",
    transparencyScore: 92,
    hiringFairness: 95,
    salaryTransparency: 88,
    processClarity: 94,
    responseTime: 91,
    diversityScore: 85,
    growthScore: 90,
    complianceScore: 93,
    totalReviews: 124,
    recentTrend: "up",
    verified: true,
    lastUpdate: "2 hours ago",
    riskLevel: "low",
    aiAnalysis: "High transparency with consistent positive reviews. Strong compliance record.",
    dataSources: ["Glassdoor", "LinkedIn", "Company Website", "Employee Reviews"],
    alerts: [],
    similarCompanies: ["Microsoft", "Google", "Amazon"],
    employeeCount: 150,
    founded: 2015,
    funding: "Series B",
    ceo: "John Kariuki",
    website: "https://techcorp.ke",
    linkedin: "https://linkedin.com/company/techcorp-kenya",
    glassdoor: "https://glassdoor.com/Reviews/TechCorp-Kenya",
    rating: 4.5,
    revenue: "$10M",
  },
  {
    id: "2",
    name: "Global Finance Ltd",
    logo: "💼",
    industry: "Finance",
    size: "200-500",
    location: "Lagos, Nigeria",
    transparencyScore: 78,
    hiringFairness: 82,
    salaryTransparency: 71,
    processClarity: 80,
    responseTime: 79,
    diversityScore: 65,
    growthScore: 75,
    complianceScore: 68,
    totalReviews: 89,
    recentTrend: "stable",
    verified: true,
    lastUpdate: "1 day ago",
    riskLevel: "medium",
    aiAnalysis: "Moderate transparency with some salary negotiation concerns. Needs improvement in diversity.",
    dataSources: ["Glassdoor", "LinkedIn", "Regulatory Filings"],
    alerts: [
      {
        id: "alert-1",
        companyId: "2",
        type: "unfair-practice",
        severity: "medium",
        title: "Salary Negotiation Issues",
        description: "Multiple reports of unclear salary ranges during hiring process",
        date: "1 week ago",
        status: "investigating",
        source: "User Reports",
        affectedUsers: 12,
        aiConfidence: 78,
      }
    ],
    similarCompanies: ["Goldman Sachs", "JPMorgan", "Standard Bank"],
    employeeCount: 350,
    founded: 2008,
    website: "https://globalfinance.ng",
    rating: 3.8,
    revenue: "$50M",
  },
  {
    id: "3",
    name: "StartupX Africa",
    logo: "🚀",
    industry: "Technology",
    size: "10-50",
    location: "Cape Town, South Africa",
    transparencyScore: 65,
    hiringFairness: 70,
    salaryTransparency: 58,
    processClarity: 68,
    responseTime: 65,
    diversityScore: 72,
    growthScore: 85,
    complianceScore: 62,
    totalReviews: 34,
    recentTrend: "down",
    verified: false,
    lastUpdate: "3 hours ago",
    riskLevel: "high",
    aiAnalysis: "Significant transparency issues reported. Multiple unfair practice alerts active.",
    dataSources: ["Glassdoor", "User Reports", "Social Media"],
    alerts: [
      {
        id: "alert-2",
        companyId: "3",
        type: "unfair-practice",
        severity: "high",
        title: "Ghosting Candidates",
        description: "Multiple reports of candidates being ghosted after interviews",
        date: "3 days ago",
        status: "active",
        source: "User Reports",
        affectedUsers: 23,
        aiConfidence: 85,
      },
      {
        id: "alert-3",
        companyId: "3",
        type: "salary",
        severity: "medium",
        title: "Unclear Compensation Structure",
        description: "Reports of misleading salary information during hiring",
        date: "1 week ago",
        status: "investigating",
        source: "User Reports",
        evidence: ["Screenshots", "Email correspondence"],
        affectedUsers: 8,
        aiConfidence: 72,
      }
    ],
    similarCompanies: ["Andela", "Flutterwave", "Paystack"],
    employeeCount: 35,
    founded: 2020,
    funding: "Seed",
    website: "https://startupx.africa",
    rating: 2.8,
  },
  {
    id: "4",
    name: "Healthcare Solutions Inc",
    logo: "🏥",
    industry: "Healthcare",
    size: "100-500",
    location: "Accra, Ghana",
    transparencyScore: 88,
    hiringFairness: 90,
    salaryTransparency: 85,
    processClarity: 89,
    responseTime: 88,
    diversityScore: 82,
    growthScore: 80,
    complianceScore: 91,
    totalReviews: 67,
    recentTrend: "up",
    verified: true,
    lastUpdate: "1 hour ago",
    riskLevel: "low",
    aiAnalysis: "Strong transparency metrics with positive employee feedback. Good compliance record.",
    dataSources: ["Glassdoor", "Company Website", "Regulatory Database"],
    alerts: [],
    similarCompanies: ["Johnson & Johnson", "Roche", "Novartis"],
    employeeCount: 280,
    founded: 2012,
    website: "https://healthcaresolutions.gh",
    rating: 4.2,
    revenue: "$25M",
  },
];

const mockReviews: Review[] = [
  {
    id: "1",
    companyId: "1",
    rating: 5,
    title: "Exceptionally Transparent Hiring Process",
    description: "From initial contact to final offer, every step was clearly communicated. Salary range was provided upfront, interview timeline was respected, and feedback was constructive.",
    category: "hiring",
    isAnonymous: true,
    date: "1 week ago",
    helpful: 24,
    reported: 0,
    verifiedUser: true,
    sentiment: "positive",
    aiVerified: true,
    tags: ["transparent", "professional", "timely"],
    impactScore: 95,
  },
  {
    id: "2",
    companyId: "2",
    rating: 3,
    title: "Salary Negotiations Lack Transparency",
    description: "The role was advertised with 'competitive salary' but no range was provided. After 3 interviews, they offered below market rate and were unwilling to negotiate fairly.",
    category: "salary",
    isAnonymous: true,
    date: "2 weeks ago",
    helpful: 18,
    reported: 1,
    verifiedUser: true,
    sentiment: "negative",
    aiVerified: true,
    tags: ["salary", "negotiation", "frustrating"],
    evidence: ["Job posting screenshot"],
    impactScore: 78,
  },
  {
    id: "3",
    companyId: "3",
    rating: 2,
    title: "Ghosted After Final Interview",
    description: "Completed 5 rounds of interviews over 2 months. Was told I'd hear back within a week. It's been 3 weeks with no communication despite multiple follow-ups.",
    category: "process",
    isAnonymous: true,
    date: "3 days ago",
    helpful: 32,
    reported: 0,
    verifiedUser: false,
    sentiment: "negative",
    aiVerified: true,
    tags: ["ghosting", "unprofessional", "time-wasting"],
    impactScore: 85,
  },
  {
    id: "4",
    companyId: "4",
    rating: 4,
    title: "Good Process but Slow Response Times",
    description: "The hiring process was clear and organized, but response times between rounds were longer than expected. Overall positive experience with room for improvement.",
    category: "process",
    isAnonymous: true,
    date: "5 days ago",
    helpful: 9,
    reported: 0,
    verifiedUser: true,
    sentiment: "neutral",
    aiVerified: true,
    tags: ["organized", "slow-response", "professional"],
    impactScore: 65,
  },
];

export default function Transparency() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [minScore, setMinScore] = useState("all");
  const [riskLevel, setRiskLevel] = useState("all");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [showAlerts, setShowAlerts] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);

  // Filter companies based on search and filters
  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry =
        selectedIndustry === "all" || company.industry === selectedIndustry;
      const matchesSize =
        selectedSize === "all" || company.size === selectedSize;
      const matchesScore =
        minScore === "all" || company.transparencyScore >= parseInt(minScore);
      const matchesRisk =
        riskLevel === "all" || company.riskLevel === riskLevel;

      return matchesSearch && matchesIndustry && matchesSize && matchesScore && matchesRisk;
    });
  }, [searchTerm, selectedIndustry, selectedSize, minScore, riskLevel]);

  // AI Analysis Functions
  const analyzeCompanyWithAI = async (company: Company) => {
    setLoading(true);
    try {
      // In a real implementation, this would call the Gemini API
      const prompt = `Analyze this company's transparency and hiring practices:
      Company: ${company.name}
      Industry: ${company.industry}
      Location: ${company.location}
      Current Score: ${company.transparencyScore}
      
      Provide recommendations for improvement and identify potential risks.`;
      
      // Simulated AI response
      const aiResponse = `Based on analysis, ${company.name} shows ${
        company.transparencyScore >= 80 ? 'strong' : company.transparencyScore >= 60 ? 'moderate' : 'weak'
      } transparency practices. Key areas for improvement: ${
        company.salaryTransparency < 80 ? 'Salary transparency needs enhancement. ' : ''
      }${
        company.diversityScore < 70 ? 'Diversity initiatives could be strengthened. ' : ''
      }`;
      
      showToast(`🤖 AI Analysis Complete: ${company.name}`);
      return aiResponse;
    } catch (error) {
      console.error("AI analysis failed:", error);
      return "Unable to perform AI analysis at this time.";
    } finally {
      setLoading(false);
    }
  };

  const submitReport = async (report: Omit<Report, 'id' | 'date' | 'status'>) => {
    setLoading(true);
    try {
      // AI analysis of the report
      const aiAnalysis = await analyzeReportWithAI(report);
      
      const newReport: Report = {
        id: `report-${Date.now()}`,
        ...report,
        date: new Date().toISOString(),
        status: "pending",
        aiAnalysis,
        impactScore: calculateImpactScore(report),
      };
      
      setReports(prev => [newReport, ...prev]);
      showToast("🚨 Report submitted successfully! AI analysis in progress.");
      
    } catch (error) {
      showToast("❌ Failed to submit report. Please try again.");
    } finally {
      setLoading(false);
      setShowReportForm(false);
    }
  };

  const analyzeReportWithAI = async (report: any) => {
    // Simulated AI analysis
    return `AI Analysis: This report shows ${report.priority} priority issues. The description suggests ${
      report.type === 'corruption' ? 'potential unethical practices' :
      report.type === 'discrimination' ? 'possible bias concerns' :
      'hiring process irregularities'
    }. Recommended action: Investigate further.`;
  };

  const calculateImpactScore = (report: any) => {
    let score = 50;
    if (report.priority === "critical") score += 30;
    if (report.priority === "high") score += 20;
    if (report.evidence && report.evidence.length > 0) score += 15;
    return Math.min(score, 100);
  };

  const showToast = (message: string) => {
    // Toast implementation
    console.log("Toast:", message);
  };

  // Score color and label helpers
  const getScoreColor = (score: number) => {
    if (score >= 90) return "from-green-500 to-emerald-600";
    if (score >= 80) return "from-blue-500 to-cyan-600";
    if (score >= 70) return "from-yellow-500 to-orange-500";
    if (score >= 60) return "from-orange-500 to-red-500";
    return "from-red-500 to-rose-700";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-green-50 text-green-700";
    if (score >= 80) return "bg-blue-50 text-blue-700";
    if (score >= 70) return "bg-yellow-50 text-yellow-700";
    if (score >= 60) return "bg-orange-50 text-orange-700";
    return "bg-red-50 text-red-700";
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low": return <ShieldCheck className="h-4 w-4" />;
      case "medium": return <ShieldAlert className="h-4 w-4" />;
      case "high": return <AlertTriangle className="h-4 w-4" />;
      case "critical": return <Skull className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    const totalCompanies = mockCompanies.length;
    const avgTransparency = Math.round(mockCompanies.reduce((acc, c) => acc + c.transparencyScore, 0) / totalCompanies);
    const highRiskCompanies = mockCompanies.filter(c => c.riskLevel === "high" || c.riskLevel === "critical").length;
    const verifiedCompanies = mockCompanies.filter(c => c.verified).length;
    const activeAlerts = mockCompanies.flatMap(c => c.alerts).filter(a => a.status === "active").length;
    
    return { totalCompanies, avgTransparency, highRiskCompanies, verifiedCompanies, activeAlerts };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <Scale className="inline mr-3 h-10 w-10" />
                  Transparency Watch AI
                </h1>
              </div>
              <Badge className="ml-4 bg-gradient-to-r from-red-500 to-orange-600 text-white border-0">
                <Shield className="mr-1 h-3 w-3" />
                Corruption Monitor
              </Badge>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              AI-powered platform monitoring corporate transparency, fighting corruption, and exposing unfair hiring practices across Africa.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-800">{stats.totalCompanies}</div>
                  <div className="text-sm text-gray-500">Companies Monitored</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.avgTransparency}%</div>
                  <div className="text-sm text-gray-500">Avg. Transparency</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{stats.highRiskCompanies}</div>
                  <div className="text-sm text-gray-500">High Risk Companies</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.verifiedCompanies}</div>
                  <div className="text-sm text-gray-500">Verified Companies</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{stats.activeAlerts}</div>
                  <div className="text-sm text-gray-500">Active Alerts</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Monitor Panel */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-gray-900 to-black text-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center">
                      <Radar className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Activity className="h-3 w-3" />
                    </div>
                  </div>
                  <div>
                    <CardTitle>AI Corruption Detection Active</CardTitle>
                    <CardDescription className="text-gray-300">
                      Real-time monitoring of 50+ companies across Africa
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold">Real-time</div>
                    <div className="text-sm text-gray-300">AI Analysis Active</div>
                  </div>
                  <Switch
                    checked={aiEnabled}
                    onCheckedChange={setAiEnabled}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    <div className="font-medium">AI Sentiment Analysis</div>
                  </div>
                  <div className="text-sm text-gray-300">Analyzing 245 reviews/hour</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="h-5 w-5 text-red-400" />
                    <div className="font-medium">Risk Detection</div>
                  </div>
                  <div className="text-sm text-gray-300">12 potential risks detected</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-5 w-5 text-blue-400" />
                    <div className="font-medium">Data Sources</div>
                  </div>
                  <div className="text-sm text-gray-300">8 sources integrated</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-green-400" />
                    <div className="font-medium">Community Reports</div>
                  </div>
                  <div className="text-sm text-gray-300">89 reports this month</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-gradient-to-r from-gray-50 to-white p-1 rounded-lg">
              <TabsTrigger 
                value="dashboard"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <Activity className="h-4 w-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="companies"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                <Building className="h-4 w-4 mr-2" />
                Companies
              </TabsTrigger>
              <TabsTrigger 
                value="alerts"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Alerts
              </TabsTrigger>
              <TabsTrigger 
                value="reports"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-600 data-[state=active]:text-white"
              >
                <Flag className="h-4 w-4 mr-2" />
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="analytics"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* High Risk Companies */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">🚨 High Risk Companies</h2>
                  <Badge className="bg-red-100 text-red-800">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Immediate Attention Required
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockCompanies
                    .filter(company => company.riskLevel === "high" || company.riskLevel === "critical")
                    .map(company => (
                      <Card key={company.id} className="border-2 border-red-200 hover:border-red-300 transition-all">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white">
                                  {company.logo || company.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-semibold">{company.name}</div>
                                  <div className="text-sm text-gray-500">{company.industry}</div>
                                </div>
                              </CardTitle>
                            </div>
                            <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getRiskColor(company.riskLevel)}`}>
                              {getRiskIcon(company.riskLevel)}
                              <span className="text-sm font-medium capitalize">{company.riskLevel}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm text-gray-600 mb-1">Transparency Score</div>
                              <div className="flex items-center gap-2">
                                <Progress 
                                  value={company.transparencyScore} 
                                  className="h-2 flex-1 bg-gray-200"
                                />
                                <span className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${getScoreColor(company.transparencyScore)} text-white`}>
                                  {company.transparencyScore}%
                                </span>
                              </div>
                            </div>
                            
                            {company.alerts.length > 0 && (
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-red-600">Active Alerts:</div>
                                {company.alerts.slice(0, 2).map(alert => (
                                  <div key={alert.id} className="text-xs bg-red-50 p-2 rounded">
                                    <div className="font-medium">{alert.title}</div>
                                    <div className="text-gray-600">{alert.affectedUsers} users affected</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            <div className="pt-3 border-t">
                              <div className="text-sm text-gray-500">Last updated: {company.lastUpdate}</div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant="outline" 
                            className="w-full border-red-300 text-red-600 hover:bg-red-50"
                            onClick={() => {
                              setSelectedCompany(company);
                              setActiveTab("companies");
                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Investigate Company
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">📈 Recent Activity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Reviews */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                        Recent Reviews
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockReviews.slice(0, 3).map(review => {
                          const company = mockCompanies.find(c => c.id === review.companyId);
                          return (
                            <div key={review.id} className="p-3 border rounded-lg hover:bg-gray-50">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-medium">{review.title}</div>
                                  <div className="text-sm text-gray-500">{company?.name} • {review.date}</div>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">{review.description}</p>
                              <div className="flex items-center justify-between mt-2">
                                <Badge className={review.sentiment === "positive" ? "bg-green-100 text-green-800" : 
                                                 review.sentiment === "negative" ? "bg-red-100 text-red-800" : 
                                                 "bg-gray-100 text-gray-800"}>
                                  {review.sentiment}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <ThumbsUp className="h-4 w-4" />
                                  {review.helpful}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-green-500" />
                        Platform Statistics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-medium">Trust Score</div>
                            <div className="text-lg font-bold text-green-600">87/100</div>
                          </div>
                          <Progress value={87} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">98%</div>
                            <div className="text-sm text-gray-600">Report Accuracy</div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">72</div>
                            <div className="text-sm text-gray-600">Issues Resolved</div>
                          </div>
                          <div className="text-center p-4 bg-yellow-50 rounded-lg">
                            <div className="text-2xl font-bold text-yellow-600">24h</div>
                            <div className="text-sm text-gray-600">Avg. Response Time</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">1.2k</div>
                            <div className="text-sm text-gray-600">Active Users</div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <div className="text-sm font-medium mb-2">AI Insights</div>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                            <Sparkles className="h-4 w-4 inline mr-2 text-purple-500" />
                            AI detected 3 new potential corruption patterns this week.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Companies Tab */}
            <TabsContent value="companies" className="space-y-6">
              {/* Search and Filters */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          placeholder="Search companies, industries, locations..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-12 text-lg border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Industries</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sizes</SelectItem>
                          <SelectItem value="10-50">10-50 employees</SelectItem>
                          <SelectItem value="50-200">50-200 employees</SelectItem>
                          <SelectItem value="200-500">200-500 employees</SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Select value={minScore} onValueChange={setMinScore}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Min. Score" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Scores</SelectItem>
                          <SelectItem value="90">90+ (Excellent)</SelectItem>
                          <SelectItem value="80">80+ (Good)</SelectItem>
                          <SelectItem value="70">70+ (Fair)</SelectItem>
                          <SelectItem value="60">60+ (Poor)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Select value={riskLevel} onValueChange={setRiskLevel}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Risk Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Risks</SelectItem>
                          <SelectItem value="low">Low Risk</SelectItem>
                          <SelectItem value="medium">Medium Risk</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Company Listings */}
              <div className="space-y-6">
                {filteredCompanies.map((company) => (
                  <CompanyCard 
                    key={company.id} 
                    company={company}
                    onAnalyze={() => analyzeCompanyWithAI(company)}
                    onSelect={() => setSelectedCompany(company)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Alerts Tab */}
            <TabsContent value="alerts" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Active Alerts & Investigations
                  </CardTitle>
                  <CardDescription>
                    Real-time alerts for unfair practices, corruption, and transparency violations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockCompanies.flatMap(company => 
                      company.alerts.map(alert => (
                        <div key={alert.id} className="border-l-4 border-l-red-500 pl-4 py-4 hover:bg-red-50 rounded-r-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{alert.title}</h4>
                                <Badge className={alert.severity === "critical" ? "bg-red-100 text-red-800" :
                                                 alert.severity === "high" ? "bg-orange-100 text-orange-800" :
                                                 "bg-yellow-100 text-yellow-800"}>
                                  {alert.severity}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Building className="h-4 w-4" />
                                  {mockCompanies.find(c => c.id === alert.companyId)?.name}
                                </span>
                                <span>•</span>
                                <span>{alert.date}</span>
                                <span>•</span>
                                <span>{alert.affectedUsers} users affected</span>
                                <span>•</span>
                                <span>AI Confidence: {alert.aiConfidence}%</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className={alert.status === "active" ? "border-red-300 text-red-700" :
                                                               alert.status === "investigating" ? "border-blue-300 text-blue-700" :
                                                               "border-green-300 text-green-700"}>
                                {alert.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Report Form */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Flag className="h-5 w-5 mr-2 text-red-500" />
                        Submit Anonymous Report
                      </CardTitle>
                      <CardDescription>
                        Help us fight corruption and unfair practices. Your report is 100% anonymous.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name *</Label>
                          <Input
                            id="company-name"
                            placeholder="Enter company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="report-type">Issue Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select issue type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corruption">Corruption / Bribery</SelectItem>
                              <SelectItem value="discrimination">Discrimination</SelectItem>
                              <SelectItem value="salary-deception">Salary Deception</SelectItem>
                              <SelectItem value="ghosting">Candidate Ghosting</SelectItem>
                              <SelectItem value="unfair-process">Unfair Hiring Process</SelectItem>
                              <SelectItem value="safety">Workplace Safety Issues</SelectItem>
                              <SelectItem value="fraud">Fraud / Misrepresentation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Detailed Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Please provide as much detail as possible. Include dates, people involved, and specific incidents."
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Evidence (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Upload screenshots, emails, or documents</p>
                          <p className="text-xs text-gray-500 mt-1">Max file size: 10MB each</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Switch id="anonymous" defaultChecked />
                          <Label htmlFor="anonymous">Submit anonymously</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="ai-analysis" defaultChecked />
                          <Label htmlFor="ai-analysis">Enable AI analysis of this report</Label>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-red-500 to-orange-600"
                        size="lg"
                        onClick={() => setShowReportForm(true)}
                      >
                        <Shield className="h-5 w-5 mr-2" />
                        Submit Anonymous Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Report Statistics */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Report Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Total Reports</span>
                          <span className="font-semibold">89</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Verified Reports</span>
                          <span className="font-semibold text-green-600">67 (75%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Under Investigation</span>
                          <span className="font-semibold text-yellow-600">18</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Resolved Cases</span>
                          <span className="font-semibold text-blue-600">42</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <div className="text-sm font-medium mb-2">Common Issues</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Salary Deception</span>
                            <span className="font-medium">32%</span>
                          </div>
                          <Progress value={32} className="h-2" />
                          
                          <div className="flex justify-between text-sm">
                            <span>Candidate Ghosting</span>
                            <span className="font-medium">28%</span>
                          </div>
                          <Progress value={28} className="h-2" />
                          
                          <div className="flex justify-between text-sm">
                            <span>Discrimination</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <Progress value={18} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-purple-500" />
                        AI Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600 bg-purple-50 p-3 rounded-lg">
                          <Sparkles className="h-4 w-4 inline mr-2 text-purple-500" />
                          AI detects increasing reports of salary transparency issues in tech startups.
                        </div>
                        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                          <Target className="h-4 w-4 inline mr-2 text-blue-500" />
                          Most reports resolved within 72 hours of investigation.
                        </div>
                        <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                          <TrendingUp className="h-4 w-4 inline mr-2 text-green-500" />
                          Company transparency scores improving by 15% on average after intervention.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-blue-500" />
                        Transparency Trends
                      </CardTitle>
                      <CardDescription>
                        Monthly analysis of corporate transparency across industries
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center border rounded-lg">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                          <p className="text-gray-500">Transparency analytics visualization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Industry Rankings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Technology", "Healthcare", "Finance", "Education", "Manufacturing"].map((industry, index) => (
                          <div key={industry} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs">
                                {index + 1}
                              </div>
                              <span className="text-sm font-medium">{industry}</span>
                            </div>
                            <Badge className={index === 0 ? "bg-green-100 text-green-800" :
                                             index === 1 ? "bg-blue-100 text-blue-800" :
                                             "bg-gray-100 text-gray-800"}>
                              {85 - index * 5}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

// Enhanced Company Card Component
interface CompanyCardProps {
  company: Company;
  onAnalyze: () => void;
  onSelect: () => void;
}

function CompanyCard({ company, onAnalyze, onSelect }: CompanyCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className={`bg-gradient-to-r ${getScoreColor(company.transparencyScore)} text-white text-lg`}>
                {company.logo || company.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl hover:text-blue-600 cursor-pointer" onClick={onSelect}>
                  {company.name}
                </CardTitle>
                {company.verified && (
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getRiskColor(company.riskLevel)}`}>
                  {getRiskIcon(company.riskLevel)}
                  <span className="text-sm font-medium capitalize">{company.riskLevel} Risk</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  {company.industry}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {company.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {company.size}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getScoreColor(company.transparencyScore)} text-white text-lg font-bold`}>
              {company.transparencyScore}%
            </div>
            <div className="text-xs text-gray-500 mt-1">Transparency Score</div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard 
              label="Hiring Fairness" 
              value={company.hiringFairness} 
              color={getScoreColor(company.hiringFairness)}
            />
            <MetricCard 
              label="Salary Transparency" 
              value={company.salaryTransparency} 
              color={getScoreColor(company.salaryTransparency)}
            />
            <MetricCard 
              label="Process Clarity" 
              value={company.processClarity} 
              color={getScoreColor(company.processClarity)}
            />
            <MetricCard 
              label="Response Time" 
              value={company.responseTime} 
              color={getScoreColor(company.responseTime)}
            />
          </div>

          {expanded && (
            <div className="space-y-4 pt-4 border-t">
              {company.aiAnalysis && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <div className="font-medium">AI Analysis</div>
                  </div>
                  <p className="text-sm text-gray-600">{company.aiAnalysis}</p>
                </div>
              )}

              {company.alerts.length > 0 && (
                <div className="space-y-2">
                  <div className="font-medium text-red-600 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Active Alerts ({company.alerts.length})
                  </div>
                  {company.alerts.map(alert => (
                    <div key={alert.id} className="text-sm bg-red-50 p-3 rounded">
                      <div className="font-medium">{alert.title}</div>
                      <div className="text-gray-600">{alert.affectedUsers} users affected</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Data Sources</div>
                  <div className="text-gray-600">{company.dataSources.join(", ")}</div>
                </div>
                <div>
                  <div className="font-medium">Last Updated</div>
                  <div className="text-gray-600">{company.lastUpdate}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex flex-wrap gap-3 w-full">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "View Details"}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onAnalyze}
          >
            <Brain className="h-4 w-4 mr-2" />
            AI Analyze
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={onSelect}
          >
            <Eye className="h-4 w-4 mr-2" />
            Full Report
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="ml-auto border-red-300 text-red-600 hover:bg-red-50"
          >
            <Flag className="h-4 w-4 mr-2" />
            Report Issue
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// Metric Card Component
function MetricCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-gray-700">{label}</div>
      <div className="flex items-center gap-2">
        <Progress value={value} className="h-2 flex-1" />
        <span className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${color} text-white`}>
          {value}%
        </span>
      </div>
    </div>
  );
}
