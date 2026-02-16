// app/jobs/page.tsx
'use client';

import { useState, useMemo, useEffect, useCallback } from "react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import {
  Briefcase,
  MapPin,
  Clock,
  Search,
  Filter,
  Star,
  Building,
  DollarSign,
  Users,
  Shield,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Sparkles,
  Rocket,
  Eye,
  Share2,
  Bell,
  CheckCircle,
  XCircle,
  ThumbsUp,
  MessageSquare,
  Globe,
  Home,
  Calendar,
  Award,
  Heart,
  Sparkle,
  Users2,
  BarChart3,
  Lightbulb,
  Puzzle,
  Code,
  Palette,
  LineChart,
  Megaphone,
  Laptop,
  GraduationCap,
  Coins,
  Crown,
  Wallet,
  CalendarDays,
  ChevronRight,
  BrainCircuit,
  Target as TargetIcon,
  RefreshCw,
  AlertCircle,
  Linkedin,
  Chrome,
  Globe as Web,
  Mail,
  BellRing,
  Settings,
  User,
  FileText,
  Download,
  Upload,
  Database,
  Cpu,
  ShieldCheck,
  Lock,
  Unlock,
  Cloud,
  Network,
  GitBranch,
  Server,
  Terminal,
  Code2,
  Layers,
  Activity,
  Workflow,
  Container,
  GitPullRequest,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudSun,
  Cloudy,
  Compass,
  Navigation,
  Radar,
  Satellite,
  Cctv,
  Telescope,
  Scan,
  QrCode,
  Fingerprint,
  Key,
  KeyRound,
  KeySquare,
  Link,
  Linkedin as LinkedinIcon,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Gitlab,
  Bitbucket,
  Trello,
  Slack,
  Discord,
  Zoom,
  Skype,
  Microsoft,
  Google,
  Apple,
  Linux,
  Windows,
  Android,
  Ios,
  Docker,
  Kubernetes,
  Aws,
  Azure,
  Gcp,
  DigitalOcean,
  Heroku,
  Vercel,
  Netlify,
  Firebase,
  Supabase,
  MongoDB,
  Postgresql,
  Mysql,
  Redis,
  Elasticsearch,
  Graphql,
  Rest,
  Soap,
  Grpc,
  Websocket,
  Rabbitmq,
  Kafka,
  Nats,
  Redis as RedisIcon,
  Nginx,
  Apache,
  Nodejs,
  React as ReactIcon,
  Vue,
  Angular,
  Svelte,
  Nextdotjs as Nextjs,
  Nuxtdotjs as Nuxtjs,
  Gatsby,
  Remix,
  Astro,
  Tailwindcss,
  Bootstrap,
  Materialui,
  Chakraui,
  Styledcomponents,
  Sass,
  Less,
  Stylus,
  Webpack,
  Vite,
  Rollup,
  Esbuild,
  Babel,
  Typescript,
  Javascript,
  Python,
  Java,
  Cplusplus,
  Csharp,
  Go,
  Rust,
  Kotlin,
  Swift,
  Php,
  Ruby,
  Scala,
  Haskell,
  Elixir,
  Clojure,
  Dart,
  R,
  Matlab,
  Julia,
  Perl,
  Lua,
  Cobol,
  Fortran,
  Assembly,
  Bash,
  Powershell,
  Shell,
  Markdown,
  Html5,
  Css3,
  Json,
  Xml,
  Yaml,
  Toml,
  Csv,
  Txt,
  Pdf,
  Doc,
  Docx,
  Xls,
  Xlsx,
  Ppt,
  Pptx,
  Mp4,
  Mp3,
  Jpg,
  Png,
  Svg,
  Gif,
  Webp,
  Avif,
  Ico,
  IcoMoon,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Feather,
  Ionic,
  Eva,
  LineAwesome,
  RemixIcon,
  Tabler,
  Heroicons,
  Lucide,
  Box,
  Package,
  ShoppingCart,
  ShoppingBag,
  Store,
  Truck,
  Warehouse,
  Factory,
  Home as HomeIcon,
  Banknote,
  CreditCard,
  Bitcoin,
  Ethereum,
  Dogecoin,
  Litecoin,
  Ripple,
  Tether,
  Binance,
  Cardano,
  Polkadot,
  Solana,
  Avalanche,
  Polygon,
  Cosmos,
  Chainlink,
  Uniswap,
  Pancakeswap,
  Sushiswap,
  Curve,
  Aave,
  Compound,
  Maker,
  Yearn,
  Synthetix,
  Balancer,
  Bancor,
  Kyber,
  Loopring,
  Zksync,
  Arbitrum,
  Optimism,
  Starknet,
  Polygonzkevm,
  Scroll,
  Base,
  Mantle,
  Metis,
  Boba,
  Aurora,
  Harmony,
  Fantom,
  Cronos,
  Kucoin,
  Okex,
  Huobi,
  Gate,
  Mexc,
  Bybit,
  Coinbase,
  Kraken,
  Gemini,
  Bittrex,
  Bitfinex,
  Poloniex,
  Bitstamp,
  Itbit,
  Lmax,
  Deribit,
  Bitmex,
  Bybit as BybitIcon,
  Phemex,
  Primexbt,
  Etoro,
  Robinhood,
  Webull,
  Tradingview,
  MetaTrader,
  NinjaTrader,
  Thinkorswim,
  InteractiveBrokers,
  SaxoBank,
  Swissquote,
  Dukascopy,
  Oanda,
  Forex,
  ForexCom,
  Fxcm,
  IcmCapital,
  Pepperstone,
  Xm,
  Exness,
  Hotforex,
  Fbs,
  Instaforex,
  Roboforex,
  Alpari,
  TeleTrade,
  FreshForex,
  Fortfs,
  JustForex,
  Nordfx,
  Fxpro,
  Fxtm,
  Fxopen,
  Tickmill,
  Vantage,
  Axi,
  Octafx,
  Ironfx,
  Markets,
  Marketwatch,
  Bloomberg,
  Reuters,
  Cnbc,
  FoxBusiness,
  YahooFinance,
  GoogleFinance,
  Investing,
  TradingEconomics,
  Finviz,
  Zacks,
  Morningstar,
  SeekingAlpha,
  TheStreet,
  MotleyFool,
  Barons,
  Forbes,
  Fortune,
  BusinessInsider,
  WallStreetJournal,
  FinancialTimes,
  Economist,
  NewYorkTimes,
  WashingtonPost,
  Guardian,
  Bbc,
  Cnn,
  AlJazeera,
  Reuters as ReutersIcon,
  Ap,
  Afp,
  Dpa,
  Epa,
  GettyImages,
  Shutterstock,
  Adobe,
  Canva,
  Figma,
  Sketch,
  Invision,
  Marvel,
  Zeplin,
  Abstract,
  Framer,
  Principle,
  Protopie,
  Origami,
  Axure,
  Balsamiq,
  Lucidchart,
  Miro,
  Mural,
  Whimsical,
  Notion,
  Confluence,
  Jira,
  Trello as TrelloIcon,
  Asana,
  Basecamp,
  Clickup,
  Monday,
  Wrike,
  Smartsheet,
  Airtable,
  Coda,
  Notion as NotionIcon,
  Obsidian,
  RoamResearch,
  Logseq,
  RemNote,
  Tana,
  Capacities,
  Anytype,
  Athens,
  Supernotes,
  Reflect,
  Mem,
  Muse,
  Heptabase,
  Scrintal,
  Milanote,
  Mymap,
  Mindnode,
  Xmind,
  Mindmeister,
  Coggle,
  Whimsical as WhimsicalIcon,
  Lucidchart as LucidchartIcon,
} from "lucide-react";

// AI API Integration
const JOB_API_KEY = "AIzaSyCV3v3N_whnIa6dXdVBTkcG3NcIF8Hk6Ok";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
  remote: boolean;
  hybrid: boolean;
  salary: string;
  salaryTransparent: boolean;
  equity: boolean;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  transparencyScore: number;
  verified: boolean;
  applicants: number;
  views: number;
  tags: string[];
  category: string;
  experienceLevel: "Entry" | "Mid" | "Senior" | "Lead";
  urgency: "Normal" | "Urgent" | "Immediate";
  aiMatchScore?: number;
  saved?: boolean;
  applied?: boolean;
  matchScore?: number;
  companyRating?: number;
  interviewProcess?: string[];
  workCulture?: string[];
  techStack?: string[];
  applicationDeadline?: string;
  diversityScore?: number;
  growthScore?: number;
  source: "linkedin" | "indeed" | "glassdoor" | "company" | "other";
  applyUrl: string;
  sourceUrl: string;
  companyWebsite?: string;
  recruiter?: string;
  recruiterLinkedin?: string;
  easyApply: boolean;
  sponsored: boolean;
  featured: boolean;
  aiGenerated?: boolean;
  skillsMatch?: string[];
  skillsMissing?: string[];
  recommendedCourses?: string[];
  similarJobs?: string[];
  companyReviews?: number;
  hiringTimeline?: string;
  visaSponsorship?: boolean;
  relocationAssistance?: boolean;
}

interface UserProfile {
  skills: string[];
  experience: string[];
  education: string[];
  location: string;
  jobTitle: string;
  salaryExpectations: string;
  remotePreference: boolean;
  jobTypes: string[];
  industries: string[];
  experienceLevel: string;
  visaRequired: boolean;
  relocationWillingness: boolean;
}

const mockUserProfile: UserProfile = {
  skills: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB", "AWS"],
  experience: ["Frontend Development", "Full-stack Development", "Team Leadership"],
  education: ["Computer Science Degree", "CIMA Certificate"],
  location: "Maseru, Lesotho",
  jobTitle: "Frontend Developer",
  salaryExpectations: "$50,000 - $80,000",
  remotePreference: true,
  jobTypes: ["Full-time", "Contract"],
  industries: ["Technology", "Fintech", "SaaS"],
  experienceLevel: "Mid",
  visaRequired: false,
  relocationWillingness: true,
};

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedRemote, setSelectedRemote] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [userProfile] = useState<UserProfile>(mockUserProfile);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [jobSources] = useState(["LinkedIn", "Indeed", "Glassdoor", "RemoteOK", "WeWorkRemotely", "Company Websites"]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // AI-powered job fetching
  const fetchJobsWithAI = useCallback(async () => {
    setLoading(true);
    setAiAnalyzing(true);
    
    try {
      // Simulate AI job aggregation from multiple sources
      const prompt = `As an AI job aggregator, find and list real job opportunities for a ${userProfile.jobTitle} with skills in ${userProfile.skills.join(', ')}. 
      Location preference: ${userProfile.location}, Remote: ${userProfile.remotePreference}, Experience: ${userProfile.experienceLevel}.
      
      Provide job listings from:
      1. LinkedIn (most recent postings)
      2. Indeed (matching salary expectations)
      3. Glassdoor (companies with good reviews)
      4. Company career pages
      5. Remote job boards
      
      Format each job with realistic details including actual company names, locations, and URLs.`;
      
      // In a real implementation, you would:
      // 1. Use the Gemini API to analyze job market
      // 2. Scrape/aggregate from actual job boards (with proper APIs/consent)
      // 3. Use job search APIs like LinkedIn API, Indeed API, etc.
      
      // For now, we'll use enhanced mock data
      const aiGeneratedJobs = await generateAIPoweredJobs(userProfile);
      setJobs(aiGeneratedJobs);
      
      // Show toast notification
      showToast(`🎯 AI found ${aiGeneratedJobs.length} personalized jobs from multiple sources`);
      
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Fallback to mock data
      setJobs(enhancedMockJobs);
    } finally {
      setLoading(false);
      setAiAnalyzing(false);
    }
  }, [userProfile]);

  useEffect(() => {
    fetchJobsWithAI();
  }, [fetchJobsWithAI]);

  // Filter jobs based on search, filters, and active tab
  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    // Apply active tab filters
    switch (activeTab) {
      case "saved":
        filtered = filtered.filter(job => savedJobs.includes(job.id));
        break;
      case "applied":
        filtered = filtered.filter(job => appliedJobs.includes(job.id));
        break;
      case "ai-recommended":
        filtered = filtered.filter(job => job.aiMatchScore && job.aiMatchScore > 75);
        break;
      case "remote":
        filtered = filtered.filter(job => job.remote);
        break;
      case "urgent":
        filtered = filtered.filter(job => job.urgency === "Urgent" || job.urgency === "Immediate");
        break;
    }

    // Apply search and filter criteria
    return filtered.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        job.skillsMatch?.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesLocation =
        selectedLocation === "all" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = selectedType === "all" || job.type === selectedType;

      const matchesRemote =
        selectedRemote === "all" ||
        (selectedRemote === "remote" && job.remote) ||
        (selectedRemote === "onsite" && !job.remote) ||
        (selectedRemote === "hybrid" && job.hybrid);

      const matchesSource = selectedSource === "all" || job.source === selectedSource;

      return matchesSearch && matchesLocation && matchesType && matchesRemote && matchesSource;
    });
  }, [searchTerm, selectedLocation, selectedType, selectedRemote, selectedSource, jobs, activeTab, savedJobs, appliedJobs]);

  // AI-powered job matching
  const calculateJobMatch = (job: Job): number => {
    if (!aiEnabled) return 0;
    
    let matchScore = 0;
    const maxScore = 100;
    
    // Skills match (40 points)
    const userSkills = userProfile.skills.map(s => s.toLowerCase());
    const jobSkills = [...(job.skillsMatch || []), ...job.tags].map(s => s.toLowerCase());
    
    const matchedSkills = userSkills.filter(skill => 
      jobSkills.some(jobSkill => jobSkill.includes(skill) || skill.includes(jobSkill))
    );
    
    matchScore += (matchedSkills.length / Math.max(userSkills.length, 1)) * 40;
    
    // Experience level match (20 points)
    if (job.experienceLevel === userProfile.experienceLevel) {
      matchScore += 20;
    } else if (
      (userProfile.experienceLevel === "Mid" && job.experienceLevel === "Senior") ||
      (userProfile.experienceLevel === "Senior" && job.experienceLevel === "Lead")
    ) {
      matchScore += 15;
    }
    
    // Remote preference match (15 points)
    if (userProfile.remotePreference && job.remote) {
      matchScore += 15;
    } else if (!userProfile.remotePreference && !job.remote) {
      matchScore += 15;
    }
    
    // Location match (10 points)
    if (userProfile.location.includes(job.location) || job.location.includes(userProfile.location)) {
      matchScore += 10;
    }
    
    // Job type preference (15 points)
    if (userProfile.jobTypes.includes(job.type)) {
      matchScore += 15;
    }
    
    return Math.min(Math.round(matchScore), 100);
  };

  // Enhanced job actions
  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
    showToast(savedJobs.includes(jobId) ? "📌 Job unsaved" : "💾 Job saved to your collection");
  };

  const markAsApplied = (jobId: string) => {
    setAppliedJobs((prev) => [...prev, jobId]);
    showToast("✅ Marked as applied. Good luck!");
  };

  const shareJob = (job: Job) => {
    const shareText = `Check out this ${job.title} position at ${job.company} - ${job.location}`;
    navigator.clipboard.writeText(shareText);
    showToast("🔗 Job link copied to clipboard");
  };

  const quickApply = async (job: Job) => {
    if (job.easyApply) {
      // In a real app, this would submit the application
      showToast("⚡ Quick apply submitted! Good luck!");
      markAsApplied(job.id);
    } else {
      window.open(job.applyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const refreshJobs = () => {
    setIsRefreshing(true);
    fetchJobsWithAI();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  // AI Analysis functions
  const analyzeJobMarket = async () => {
    setAiAnalyzing(true);
    try {
      const prompt = `Analyze the current job market for ${userProfile.jobTitle} with skills ${userProfile.skills.join(', ')}.
      Provide insights on:
      1. Current demand and salary trends
      2. Top hiring locations
      3. Most sought-after skills
      4. Best companies hiring
      5. Application success tips`;
      
      // In real implementation, call Gemini API
      showToast("🧠 AI analyzing job market trends...");
      
      setTimeout(() => {
        showToast("📈 Market analysis complete! Check AI Insights.");
        setAiAnalyzing(false);
      }, 2000);
      
    } catch (error) {
      showToast("❌ Analysis failed. Please try again.");
      setAiAnalyzing(false);
    }
  };

  const generateCoverLetter = async (job: Job) => {
    showToast("📝 AI generating personalized cover letter...");
    // In real implementation, call Gemini API
  };

  const showToast = (message: string) => {
    // Toast implementation
    console.log("Toast:", message);
  };

  // Stats calculation
  const stats = useMemo(() => {
    const totalJobs = jobs.length;
    const remoteJobs = jobs.filter(job => job.remote).length;
    const highMatchJobs = jobs.filter(job => job.aiMatchScore && job.aiMatchScore > 80).length;
    const urgentJobs = jobs.filter(job => job.urgency === "Urgent" || job.urgency === "Immediate").length;
    
    return { totalJobs, remoteJobs, highMatchJobs, urgentJobs };
  }, [jobs]);

  // Loading skeletons
  const JobCardSkeleton = () => (
    <Card className="animate-pulse">
      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-4/6" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  );

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
                  <BrainCircuit className="inline mr-3 h-10 w-10" />
                  AI Job Aggregator
                </h1>
              </div>
              <Badge className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                <Sparkles className="mr-1 h-3 w-3" />
                Real-time
              </Badge>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              AI-powered job search aggregating opportunities from LinkedIn, Indeed, Glassdoor, and company career pages
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-gray-800">{stats.totalJobs}</div>
                <div className="text-sm text-gray-500">Total Jobs</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-green-600">{stats.remoteJobs}</div>
                <div className="text-sm text-gray-500">Remote</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-purple-600">{stats.highMatchJobs}</div>
                <div className="text-sm text-gray-500">High Match</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-orange-600">{stats.urgentJobs}</div>
                <div className="text-sm text-gray-500">Urgent</div>
              </div>
            </div>
          </div>

          {/* AI Job Aggregator Panel */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-gray-900 to-black text-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-3 w-3" />
                    </div>
                  </div>
                  <div>
                    <CardTitle>AI Job Aggregator Active</CardTitle>
                    <CardDescription className="text-gray-300">
                      Scanning LinkedIn, Indeed, Glassdoor, and 50+ job boards
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold">Real-time</div>
                    <div className="text-sm text-gray-300">Updated 5 min ago</div>
                  </div>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10"
                    onClick={refreshJobs}
                    disabled={isRefreshing}
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {jobSources.map((source, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      {source === "LinkedIn" ? <Linkedin className="h-4 w-4 text-blue-400" /> :
                       source === "Indeed" ? <Briefcase className="h-4 w-4 text-yellow-400" /> :
                       <Globe className="h-4 w-4 text-green-400" />}
                    </div>
                    <span className="text-sm font-medium">{source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* AI Controls */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-purple-500" />
                      AI Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="ai-enabled" className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-2" />
                        AI Job Matching
                      </Label>
                      <Switch
                        id="ai-enabled"
                        checked={aiEnabled}
                        onCheckedChange={setAiEnabled}
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600"
                      onClick={analyzeJobMarket}
                      disabled={aiAnalyzing}
                    >
                      {aiAnalyzing ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="h-4 w-4 mr-2" />
                          Analyze Market
                        </>
                      )}
                    </Button>
                    
                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-2 block">Job Sources</Label>
                      <Select value={selectedSource} onValueChange={setSelectedSource}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Sources" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sources</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="indeed">Indeed</SelectItem>
                          <SelectItem value="glassdoor">Glassdoor</SelectItem>
                          <SelectItem value="company">Company Sites</SelectItem>
                          <SelectItem value="other">Other Boards</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Filters */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Filter className="h-5 w-5 mr-2 text-blue-500" />
                      Quick Filters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Location</SelectItem>
                          <SelectItem value="remote">Remote Only</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="north america">North America</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Job Type</Label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Type</SelectItem>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Work Style</Label>
                      <Select value={selectedRemote} onValueChange={setSelectedRemote}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Style</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSelectedLocation("all");
                        setSelectedType("all");
                        setSelectedRemote("all");
                        setSelectedSource("all");
                        setSearchTerm("");
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>

                {/* Your Profile Card */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <User className="h-5 w-5 mr-2 text-green-500" />
                      Your Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium">Current Role</div>
                        <div className="text-sm text-gray-600">{userProfile.jobTitle}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Top Skills</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {userProfile.skills.slice(0, 5).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Preferences</div>
                        <div className="text-sm text-gray-600">
                          {userProfile.remotePreference ? 'Remote' : 'On-site'} • {userProfile.jobTypes.join(', ')}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Job Listings */}
            <div className="lg:col-span-3">
              {/* Search and Tabs */}
              <Card className="mb-6 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          placeholder="Search jobs, companies, skills, or locations..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-12 text-lg border-2 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600">
                        <Search className="h-5 w-5 mr-2" />
                        Search Jobs
                      </Button>
                    </div>
                  </div>

                  {/* Job Tabs */}
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                    <TabsList className="grid grid-cols-2 md:grid-cols-6">
                      <TabsTrigger value="all">All Jobs</TabsTrigger>
                      <TabsTrigger value="ai-recommended">
                        <Brain className="h-4 w-4 mr-2" />
                        AI Picks
                      </TabsTrigger>
                      <TabsTrigger value="remote">Remote</TabsTrigger>
                      <TabsTrigger value="urgent">Urgent</TabsTrigger>
                      <TabsTrigger value="saved">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Saved
                      </TabsTrigger>
                      <TabsTrigger value="applied">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Applied
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    {loading ? "Finding jobs..." : `${filteredJobs.length} Jobs Found`}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {aiEnabled ? "Sorted by AI Match Score" : "Sorted by Recent"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50">
                    <Linkedin className="h-3 w-3 mr-1" />
                    LinkedIn
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-50">
                    <Briefcase className="h-3 w-3 mr-1" />
                    Indeed
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    <Building className="h-3 w-3 mr-1" />
                    Company Sites
                  </Badge>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-6">
                {loading ? (
                  // Loading skeletons
                  Array.from({ length: 3 }).map((_, index) => (
                    <JobCardSkeleton key={index} />
                  ))
                ) : filteredJobs.length === 0 ? (
                  <Card className="text-center py-12">
                    <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your search criteria or check back later
                    </p>
                    <Button onClick={refreshJobs}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Jobs
                    </Button>
                  </Card>
                ) : (
                  filteredJobs.map((job) => {
                    const matchScore = calculateJobMatch(job);
                    
                    return (
                      <JobCard 
                        key={job.id}
                        job={job}
                        matchScore={matchScore}
                        saved={savedJobs.includes(job.id)}
                        applied={appliedJobs.includes(job.id)}
                        onSave={() => toggleSaveJob(job.id)}
                        onApply={() => markAsApplied(job.id)}
                        onShare={() => shareJob(job)}
                        onQuickApply={() => quickApply(job)}
                        onGenerateCoverLetter={() => generateCoverLetter(job)}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Enhanced Job Card Component
interface JobCardProps {
  job: Job;
  matchScore: number;
  saved: boolean;
  applied: boolean;
  onSave: () => void;
  onApply: () => void;
  onShare: () => void;
  onQuickApply: () => void;
  onGenerateCoverLetter: () => void;
}

function JobCard({
  job,
  matchScore,
  saved,
  applied,
  onSave,
  onApply,
  onShare,
  onQuickApply,
  onGenerateCoverLetter,
}: JobCardProps) {
  const [expanded, setExpanded] = useState(false);

  const getMatchColor = (score: number) => {
    if (score >= 80) return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (score >= 60) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-red-500 to-pink-500";
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "linkedin": return <Linkedin className="h-4 w-4 text-blue-600" />;
      case "indeed": return <Briefcase className="h-4 w-4 text-yellow-600" />;
      case "glassdoor": return <Building className="h-4 w-4 text-green-600" />;
      default: return <Globe className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  {job.companyLogo || job.company.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                    {job.title}
                  </CardTitle>
                  {job.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {job.sponsored && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <Zap className="h-3 w-3 mr-1" />
                      Sponsored
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.posted}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Badge variant="outline">{job.type}</Badge>
              {job.remote && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  <Globe className="h-3 w-3 mr-1" />
                  Remote
                </Badge>
              )}
              {job.hybrid && (
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <Home className="h-3 w-3 mr-1" />
                  Hybrid
                </Badge>
              )}
              {job.easyApply && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  <Zap className="h-3 w-3 mr-1" />
                  Easy Apply
                </Badge>
              )}
              {job.urgency === "Urgent" && (
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Urgent
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                {getSourceIcon(job.source)}
                <span className="text-gray-500">{job.source}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onSave}
              >
                {saved ? (
                  <BookmarkCheck className="h-5 w-5 text-blue-500" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </Button>
            </div>
            
            {/* AI Match Score */}
            <div className="text-center">
              <div className={`px-3 py-1 rounded-full ${getMatchColor(matchScore)} text-white text-sm font-bold`}>
                {matchScore}% Match
              </div>
              <div className="text-xs text-gray-500 mt-1">AI Score</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">{job.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1">
              <div className="font-medium flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                Salary
              </div>
              <div className="text-gray-600">{job.salary}</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium flex items-center gap-1">
                <Users className="h-4 w-4" />
                Applicants
              </div>
              <div className="text-gray-600">{job.applicants}</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium flex items-center gap-1">
                <Shield className="h-4 w-4" />
                Transparency
              </div>
              <div className="text-gray-600">{job.transparencyScore}%</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Deadline
              </div>
              <div className="text-gray-600">{job.applicationDeadline || "Open"}</div>
            </div>
          </div>

          {expanded && (
            <div className="space-y-4 pt-4 border-t">
              <div>
                <h4 className="font-medium mb-2">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <Badge key={index} variant="secondary">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {job.techStack && (
                <div>
                  <h4 className="font-medium mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {job.benefits && (
                <div>
                  <h4 className="font-medium mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <Badge key={index} className="bg-green-50 text-green-700">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {job.skillsMatch && (
                <div>
                  <h4 className="font-medium mb-2 text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Skills You Match
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skillsMatch.map((skill, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
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
            onClick={onShare}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          
          {!applied && (
            <>
              {job.easyApply ? (
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600"
                  onClick={onQuickApply}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Quick Apply
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() => window.open(job.applyUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={onGenerateCoverLetter}
              >
                <FileText className="h-4 w-4 mr-2" />
                AI Cover Letter
              </Button>
            </>
          )}
          
          {applied && (
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Applied
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

// Mock function to simulate AI job aggregation
async function generateAIPoweredJobs(userProfile: UserProfile): Promise<Job[]> {
  // In a real implementation, this would:
  // 1. Call multiple job APIs (LinkedIn, Indeed, Glassdoor, etc.)
  // 2. Use web scraping (with proper consent)
  // 3. Filter and rank based on user profile
  // 4. Return real job data
  
  // Simulated delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return [
    {
      id: "linkedin-1",
      title: "Senior Frontend Developer (React/TypeScript)",
      company: "Microsoft",
      companyLogo: "🪟",
      location: "Remote (EMEA)",
      type: "Full-time",
      remote: true,
      hybrid: false,
      salary: "$90,000 - $130,000",
      salaryTransparent: true,
      equity: true,
      posted: "1 day ago",
      description: "Join Microsoft's Cloud team to build next-generation web applications using React, TypeScript, and Azure services.",
      requirements: ["5+ years React", "TypeScript expert", "Cloud experience", "Team leadership"],
      responsibilities: ["Lead frontend development", "Architect scalable solutions", "Mentor junior devs"],
      benefits: ["Stock options", "Health insurance", "Learning budget", "Remote work"],
      transparencyScore: 95,
      verified: true,
      applicants: 89,
      views: 560,
      tags: ["React", "TypeScript", "Azure", "Remote", "Senior"],
      category: "Technology",
      experienceLevel: "Senior",
      urgency: "Urgent",
      aiMatchScore: 92,
      source: "linkedin",
      applyUrl: "https://linkedin.com/jobs/view/123456",
      sourceUrl: "https://linkedin.com",
      easyApply: true,
      sponsored: true,
      featured: true,
      aiGenerated: true,
      skillsMatch: ["React", "TypeScript", "AWS"],
      techStack: ["React", "TypeScript", "Next.js", "Azure", "GraphQL"],
      diversityScore: 85,
      growthScore: 90,
    },
    {
      id: "indeed-1",
      title: "Full Stack Developer",
      company: "Amazon Web Services",
      companyLogo: "📦",
      location: "Cape Town, South Africa",
      type: "Full-time",
      remote: true,
      hybrid: true,
      salary: "R1,200,000 - R1,800,000",
      salaryTransparent: true,
      equity: true,
      posted: "2 days ago",
      description: "Build scalable cloud applications with AWS services. Work on high-impact projects with global reach.",
      requirements: ["3+ years full-stack", "AWS certification", "Node.js", "React"],
      responsibilities: ["Develop microservices", "Implement CI/CD", "Optimize performance"],
      benefits: ["AWS stock", "Remote work", "Health benefits", "Career growth"],
      transparencyScore: 88,
      verified: true,
      applicants: 145,
      views: 890,
      tags: ["AWS", "Node.js", "React", "Cloud", "Full-stack"],
      category: "Technology",
      experienceLevel: "Mid",
      urgency: "Normal",
      aiMatchScore: 85,
      source: "indeed",
      applyUrl: "https://indeed.com/job/789012",
      sourceUrl: "https://indeed.com",
      easyApply: false,
      sponsored: false,
      featured: true,
      aiGenerated: true,
      skillsMatch: ["Node.js", "AWS", "React"],
      techStack: ["Node.js", "React", "AWS", "Docker", "Kubernetes"],
      diversityScore: 78,
      growthScore: 95,
    },
    // Add more realistic job listings...
  ];
}

const enhancedMockJobs: Job[] = [
  // ... (previous mock jobs data with source and URL fields added)
];
