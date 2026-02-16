// components/ApplicationLetterBuilder.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Upload,
  Sparkles,
  Eye,
  Download,
  Briefcase,
  User,
  Building,
  MapPin,
  Calendar,
  ExternalLink,
  Loader2,
  Copy,
  Save,
  Zap,
  Brain,
  Palette,
  Type,
  Target,
  Star,
  Heart,
  Clock,
  BookOpen,
  CheckCircle,
  XCircle,
  RotateCcw,
  RefreshCw,
  Plus,
  Minus,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Image as ImageIcon,
  Paperclip,
  Smile,
  Code,
  Lock,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Share2,
  Mail,
  Bell,
  BellRing,
  TrendingUp,
  TrendingDown,
  Activity,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Trophy,
  Award,
  Medal,
  Ribbon,
  Flame,
  Snowflake,
  Cloud,
  Sun,
  Moon,
  Droplets,
  Wind,
  Thermometer,
  Umbrella,
  Trees,
  Mountain,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Footprints,
  Compass,
  Navigation,
  Map,
  Globe,
  Satellite,
  Radar,
  Telescope,
  Wifi,
  Signal,
  Battery,
  Power,
  Music,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  PhoneOff,
  PhoneMissed,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneForwarded,
  Voicemail,
  MessageSquare,
  MessageCircle,
  MessageCircleOff,
  ThumbsUp,
  ThumbsDown,
  Heart as HeartIcon,
  HeartOff,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  Flag,
  FlagOff,
  AlertCircle,
  AlertTriangle,
  Check,
  X,
  Minus as MinusIcon,
  Plus as PlusIcon,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Move,
  MoveVertical,
  MoveHorizontal,
  RotateCw as RotateCwIcon,
  RotateCcw as RotateCcwIcon,
  ZoomIn,
  ZoomOut,
  Search,
  Filter,
  Grid,
  List as ListIcon,
  Layout,
  Sidebar,
  SidebarClose,
  SidebarOpen,
  Menu,
  MoreVertical,
  MoreHorizontal,
  Settings,
  User as UserIcon,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  KeyRound,
  KeySquare,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  ShieldQuestion,
  Bell as BellIcon,
  BellOff,
  BellRing as BellRingIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  TimerOff,
  TimerReset,
  Hourglass,
  Watch,
  Sunrise,
  Sunset,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Cloudy,
  CloudFog,
  CloudHail,
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
const AI_API_KEY = "AIzaSyCV3v3N_whnIa6dXdVBTkcG3NcIF8Hk6Ok";

interface JobSelection {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary?: string;
  type?: string;
  remote?: boolean;
  experienceLevel?: string;
}

interface ApplicationLetterData {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantAddress: string;
  applicantTitle?: string;
  applicantCompany?: string;
  linkedinProfile?: string;
  portfolioUrl?: string;
  
  companyName: string;
  hiringManagerName: string;
  hiringManagerTitle?: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirements: string[];
  jobId?: string;
  
  applicationDate: string;
  letterContent: string;
  closingStatement: string;
  signature: string;
  
  // Styling
  template: "modern" | "classic" | "creative" | "minimal" | "executive";
  tone: "professional" | "enthusiastic" | "confident" | "humble" | "innovative";
  length: "short" | "medium" | "detailed";
  keywords: string[];
  
  // ATS Optimization
  atsOptimized: boolean;
  atsScore: number;
  keywordMatches: string[];
  missingKeywords: string[];
  
  // Metadata
  version: number;
  lastModified: string;
  wordCount: number;
  readabilityScore: number;
}

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tone: string;
  bestFor: string[];
  colorScheme: string;
}

const mockJobs: JobSelection[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp Kenya",
    location: "Nairobi, Kenya",
    description:
      "We're looking for a skilled Frontend Developer to join our growing team. You'll work on modern web applications using React, TypeScript, and other cutting-edge technologies.",
    requirements: [
      "3+ years React experience",
      "TypeScript proficiency",
      "Responsive design skills",
      "Git knowledge",
      "Testing experience",
    ],
    salary: "KSh 80,000 - 120,000",
    type: "Full-time",
    remote: true,
    experienceLevel: "Mid",
  },
  {
    id: "2",
    title: "Digital Marketing Specialist",
    company: "Growth Marketing Ltd",
    location: "Lagos, Nigeria",
    description:
      "Join our marketing team to drive digital campaigns, manage social media presence, and analyze marketing performance across multiple channels.",
    requirements: [
      "2+ years marketing experience",
      "Social media expertise",
      "Analytics tools knowledge",
      "Content creation skills",
      "SEO/SEM experience",
    ],
    salary: "₦200,000 - 350,000",
    type: "Full-time",
    remote: false,
    experienceLevel: "Mid",
  },
];

const templates: Template[] = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean, contemporary design with ATS optimization",
    icon: <Sparkles className="h-5 w-5" />,
    tone: "professional",
    bestFor: ["Tech", "Startups", "Creative Industries"],
    colorScheme: "from-blue-500 to-purple-600",
  },
  {
    id: "classic",
    name: "Classic Corporate",
    description: "Traditional format preferred by established companies",
    icon: <Building className="h-5 w-5" />,
    tone: "professional",
    bestFor: ["Finance", "Law", "Corporate Roles"],
    colorScheme: "from-gray-700 to-gray-900",
  },
  {
    id: "creative",
    name: "Creative Impact",
    description: "Bold and innovative for creative roles",
    icon: <Palette className="h-5 w-5" />,
    tone: "enthusiastic",
    bestFor: ["Design", "Marketing", "Arts"],
    colorScheme: "from-pink-500 to-orange-500",
  },
  {
    id: "executive",
    name: "Executive Level",
    description: "Sophisticated and strategic for leadership roles",
    icon: <Crown className="h-5 w-5" />,
    tone: "confident",
    bestFor: ["Management", "Executive", "Consulting"],
    colorScheme: "from-amber-600 to-yellow-500",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple, focused, and highly readable",
    icon: <Type className="h-5 w-5" />,
    tone: "professional",
    bestFor: ["All Industries", "ATS Systems"],
    colorScheme: "from-green-500 to-teal-600",
  },
];

interface ApplicationLetterBuilderProps {
  availableJobs?: JobSelection[];
  onSave?: (letterData: ApplicationLetterData) => void;
  initialData?: Partial<ApplicationLetterData>;
}

export const ApplicationLetterBuilder = ({
  availableJobs = mockJobs,
  onSave,
  initialData,
}: ApplicationLetterBuilderProps) => {
  const [selectedJobType, setSelectedJobType] = useState<"platform" | "custom" | "import">("platform");
  const [selectedJob, setSelectedJob] = useState<JobSelection | null>(null);
  const [importedJobUrl, setImportedJobUrl] = useState("");
  
  const [letterData, setLetterData] = useState<ApplicationLetterData>({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantAddress: "",
    applicantTitle: "",
    linkedinProfile: "",
    portfolioUrl: "",
    
    companyName: "",
    hiringManagerName: "",
    jobTitle: "",
    jobDescription: "",
    jobRequirements: [],
    
    applicationDate: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    letterContent: "",
    closingStatement: "Thank you for considering my application. I look forward to hearing from you soon.",
    signature: "Sincerely,\n[Your Name]",
    
    template: "modern",
    tone: "professional",
    length: "medium",
    keywords: [],
    
    atsOptimized: true,
    atsScore: 0,
    keywordMatches: [],
    missingKeywords: [],
    
    version: 1,
    lastModified: new Date().toISOString(),
    wordCount: 0,
    readabilityScore: 0,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [letterHistory, setLetterHistory] = useState<ApplicationLetterData[]>([]);
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [readabilityScore, setReadabilityScore] = useState(0);

  const editorRef = useRef<HTMLTextAreaElement>(null);

  // Load saved data on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("careerLift_application_draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setLetterData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
    
    if (initialData) {
      setLetterData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  // Update counts when content changes
  useEffect(() => {
    const words = letterData.letterContent.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = letterData.letterContent.length;
    
    setWordCount(words);
    setCharacterCount(characters);
    
    // Simple readability calculation (Flesch-Kincaid approximation)
    const sentences = letterData.letterContent.split(/[.!?]+/).length;
    const syllables = letterData.letterContent.toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
      .filter(char => 'aeiou'.includes(char)).length;
    
    const readability = sentences > 0 ? 
      Math.max(0, Math.min(100, 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words))) : 0;
    
    setReadabilityScore(Math.round(readability));
  }, [letterData.letterContent]);

  // Handle job selection
  const handleJobSelection = (jobId: string) => {
    const job = availableJobs.find(j => j.id === jobId);
    if (job) {
      setSelectedJob(job);
      setLetterData(prev => ({
        ...prev,
        companyName: job.company,
        jobTitle: job.title,
        jobDescription: job.description,
        jobRequirements: job.requirements,
      }));
      
      // Auto-generate content suggestions
      setTimeout(() => generateAISuggestions(), 500);
    }
  };

  // Import job from URL
  const handleImportJob = async () => {
    if (!importedJobUrl) return;
    
    setIsAnalyzing(true);
    try {
      // In real implementation, this would call an API to parse job descriptions
      // For now, simulate with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockImportedJob = {
        title: "Imported Job Role",
        company: "Imported Company",
        description: "Job description extracted from the provided URL...",
        requirements: ["Experience in relevant field", "Degree in related discipline"],
      };
      
      setLetterData(prev => ({
        ...prev,
        companyName: mockImportedJob.company,
        jobTitle: mockImportedJob.title,
        jobDescription: mockImportedJob.description,
        jobRequirements: mockImportedJob.requirements,
      }));
      
      showToast("✅ Job imported successfully!");
    } catch (error) {
      showToast("❌ Failed to import job. Please check the URL.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // AI-powered content generation
  const generateLetterWithAI = async (mode: "full" | "improve" | "paraphrase" | "expand") => {
    if (!letterData.jobTitle || !letterData.applicantName) {
      showToast("Please fill in job title and your name first");
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // In a real implementation, this would call the Gemini API
      const prompt = generateAIPrompt(mode);
      
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const aiContent = generateMockAIContent(mode);
      
      setLetterData(prev => {
        const newContent = mode === "improve" ? aiContent : 
                          mode === "paraphrase" ? aiContent : 
                          mode === "expand" ? prev.letterContent + "\n\n" + aiContent : 
                          aiContent;
        
        return {
          ...prev,
          letterContent: newContent,
          version: prev.version + 1,
          lastModified: new Date().toISOString(),
        };
      });
      
      showToast(`✨ AI ${mode === "full" ? "generated" : mode} letter content!`);
      
      // Add to history
      setLetterHistory(prev => [letterData, ...prev.slice(0, 4)]);
      
    } catch (error) {
      showToast("❌ AI generation failed. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAIPrompt = (mode: string): string => {
    const basePrompt = `Generate an application letter for ${letterData.jobTitle} at ${letterData.companyName}.
    Applicant: ${letterData.applicantName}
    Tone: ${letterData.tone}
    Length: ${letterData.length}
    Job Description: ${letterData.jobDescription}
    Requirements: ${letterData.jobRequirements.join(', ')}`;
    
    switch (mode) {
      case "full": return `${basePrompt}\nGenerate a complete application letter.`;
      case "improve": return `${basePrompt}\nImprove this existing letter: ${letterData.letterContent}`;
      case "paraphrase": return `${basePrompt}\nParaphrase this professionally: ${letterData.letterContent}`;
      case "expand": return `${basePrompt}\nExpand on these key points with more detail.`;
      default: return basePrompt;
    }
  };

  const generateMockAIContent = (mode: string): string => {
    const templates = {
      full: `Dear ${letterData.hiringManagerName || "Hiring Manager"},

I am writing to express my enthusiastic interest in the ${letterData.jobTitle} position at ${letterData.companyName}. With my background in [relevant field] and passion for [industry/field], I am confident in my ability to contribute effectively to your team.

Your job posting immediately caught my attention, particularly the emphasis on [specific aspect from job description]. This aligns perfectly with my experience in [specific skill/experience].

Throughout my career, I have developed strong capabilities in:
• ${letterData.jobRequirements[0] || "Relevant skill 1"}
• ${letterData.jobRequirements[1] || "Relevant skill 2"}
• ${letterData.jobRequirements[2] || "Relevant skill 3"}

What excites me most about this opportunity is [specific aspect of company/mission]. I am particularly drawn to ${letterData.companyName}'s commitment to [company value/goal].

I would welcome the opportunity to discuss how my skills and experiences can contribute to your team's success. Thank you for considering my application.

Best regards,
${letterData.applicantName}`,

      improve: `[Improved version of your letter with better structure and stronger language]`,
      
      paraphrase: `[Professional paraphrase of your existing content]`,
      
      expand: `[Additional detailed paragraphs expanding on your key points]`,
    };
    
    return templates[mode as keyof typeof templates];
  };

  const generateAISuggestions = async () => {
    setIsAnalyzing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const suggestions = [
        "Highlight your experience with React and TypeScript",
        "Mention specific projects that demonstrate problem-solving skills",
        "Connect your skills directly to the job requirements",
        "Show enthusiasm for the company's mission",
        "Include metrics or quantifiable achievements",
      ];
      
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error("Error generating suggestions:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeATS = () => {
    setIsAnalyzing(true);
    
    // Simulate ATS analysis
    setTimeout(() => {
      const keywords = ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Frontend", "Development"];
      const content = letterData.letterContent.toLowerCase();
      
      const matches = keywords.filter(keyword => 
        content.includes(keyword.toLowerCase())
      );
      
      const missing = keywords.filter(keyword => 
        !content.includes(keyword.toLowerCase())
      );
      
      const score = Math.round((matches.length / keywords.length) * 100);
      
      setLetterData(prev => ({
        ...prev,
        atsScore: score,
        keywordMatches: matches,
        missingKeywords: missing,
      }));
      
      setIsAnalyzing(false);
      showToast(`📊 ATS Score: ${score}/100`);
    }, 1500);
  };

  const saveDraft = () => {
    localStorage.setItem("careerLift_application_draft", JSON.stringify(letterData));
    showToast("💾 Draft saved successfully!");
  };

  const resetToTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;
    
    setLetterData(prev => ({
      ...prev,
      template: templateId as any,
      tone: template.tone as any,
    }));
    
    showToast(`🎨 Switched to ${template.name} template`);
  };

  const showToast = (message: string) => {
    // Implement toast notification
    console.log("Toast:", message);
  };

  const wordCountColor = wordCount < 200 ? "text-red-500" : 
                        wordCount < 400 ? "text-yellow-500" : 
                        "text-green-500";

  const atsScoreColor = letterData.atsScore < 50 ? "text-red-500" : 
                        letterData.atsScore < 75 ? "text-yellow-500" : 
                        "text-green-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="inline mr-3 h-10 w-10" />
            AI Application Letter Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional, ATS-optimized application letters with AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Builder */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-3 h-6 w-6 text-blue-500" />
                      Letter Builder
                    </CardTitle>
                    <CardDescription>
                      Fill in details and let AI craft your perfect application
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600">
                      <Brain className="h-3 w-3 mr-1" />
                      AI Assistant
                    </Badge>
                    <Button variant="outline" size="sm" onClick={saveDraft}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-5 w-full">
                  <TabsTrigger value="job">💼 Job</TabsTrigger>
                  <TabsTrigger value="personal">👤 Personal</TabsTrigger>
                  <TabsTrigger value="content">📝 Content</TabsTrigger>
                  <TabsTrigger value="style">🎨 Style</TabsTrigger>
                  <TabsTrigger value="analysis">📊 Analysis</TabsTrigger>
                </TabsList>

                {/* Job Tab */}
                <TabsContent value="job" className="space-y-6 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Button
                      variant={selectedJobType === "platform" ? "default" : "outline"}
                      onClick={() => setSelectedJobType("platform")}
                      className="h-auto p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Platform Jobs</div>
                          <div className="text-sm opacity-75">Select from available jobs</div>
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant={selectedJobType === "custom" ? "default" : "outline"}
                      onClick={() => setSelectedJobType("custom")}
                      className="h-auto p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Custom Job</div>
                          <div className="text-sm opacity-75">Enter job details manually</div>
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant={selectedJobType === "import" ? "default" : "outline"}
                      onClick={() => setSelectedJobType("import")}
                      className="h-auto p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Upload className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Import Job</div>
                          <div className="text-sm opacity-75">Import from job posting URL</div>
                        </div>
                      </div>
                    </Button>
                  </div>

                  {selectedJobType === "platform" && (
                    <div className="space-y-4">
                      <Select onValueChange={handleJobSelection}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a job from platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableJobs.map((job) => (
                            <SelectItem key={job.id} value={job.id}>
                              <div className="flex flex-col">
                                <span className="font-medium">{job.title}</span>
                                <span className="text-sm text-gray-500">
                                  {job.company} • {job.location}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {selectedJob && (
                        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold text-lg">{selectedJob.title}</h3>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Building className="h-4 w-4" />
                                    <span>{selectedJob.company}</span>
                                    <MapPin className="h-4 w-4" />
                                    <span>{selectedJob.location}</span>
                                  </div>
                                </div>
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600">
                                  {selectedJob.experienceLevel}
                                </Badge>
                              </div>
                              
                              <p className="text-gray-700">{selectedJob.description}</p>
                              
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-gray-700">Requirements:</div>
                                <div className="flex flex-wrap gap-2">
                                  {selectedJob.requirements.map((req, idx) => (
                                    <Badge key={idx} variant="outline" className="bg-white">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {selectedJob.type}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Globe className="h-4 w-4" />
                                    {selectedJob.remote ? "Remote" : "On-site"}
                                  </span>
                                </div>
                                {selectedJob.salary && (
                                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                                    {selectedJob.salary}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )}

                  {selectedJobType === "import" && (
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Paste job posting URL (LinkedIn, Indeed, etc.)"
                          value={importedJobUrl}
                          onChange={(e) => setImportedJobUrl(e.target.value)}
                        />
                        <Button
                          onClick={handleImportJob}
                          disabled={isAnalyzing || !importedJobUrl}
                          className="bg-gradient-to-r from-blue-500 to-purple-600"
                        >
                          {isAnalyzing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4 mr-2" />
                              Import
                            </>
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Supports: LinkedIn, Indeed, Glassdoor, and most company career pages
                      </p>
                    </div>
                  )}
                </TabsContent>

                {/* Personal Tab */}
                <TabsContent value="personal" className="space-y-6 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <UserIcon className="h-5 w-5 text-blue-500" />
                        Personal Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="applicant-name">Full Name *</Label>
                          <Input
                            id="applicant-name"
                            placeholder="John Doe"
                            value={letterData.applicantName}
                            onChange={(e) =>
                              setLetterData(prev => ({ ...prev, applicantName: e.target.value }))
                            }
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="applicant-email">Email *</Label>
                            <Input
                              id="applicant-email"
                              type="email"
                              placeholder="john@example.com"
                              value={letterData.applicantEmail}
                              onChange={(e) =>
                                setLetterData(prev => ({ ...prev, applicantEmail: e.target.value }))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="applicant-phone">Phone</Label>
                            <Input
                              id="applicant-phone"
                              placeholder="+1 (555) 123-4567"
                              value={letterData.applicantPhone}
                              onChange={(e) =>
                                setLetterData(prev => ({ ...prev, applicantPhone: e.target.value }))
                              }
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="applicant-title">Current/Most Recent Title</Label>
                          <Input
                            id="applicant-title"
                            placeholder="e.g., Frontend Developer"
                            value={letterData.applicantTitle}
                            onChange={(e) =>
                              setLetterData(prev => ({ ...prev, applicantTitle: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <Link className="h-5 w-5 text-blue-500" />
                        Online Profiles & Links
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input
                            id="linkedin"
                            placeholder="linkedin.com/in/username"
                            value={letterData.linkedinProfile}
                            onChange={(e) =>
                              setLetterData(prev => ({ ...prev, linkedinProfile: e.target.value }))
                            }
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="portfolio">Portfolio/Website</Label>
                          <Input
                            id="portfolio"
                            placeholder="https://your-portfolio.com"
                            value={letterData.portfolioUrl}
                            onChange={(e) =>
                              setLetterData(prev => ({ ...prev, portfolioUrl: e.target.value }))
                            }
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            placeholder="City, Country"
                            value={letterData.applicantAddress}
                            onChange={(e) =>
                              setLetterData(prev => ({ ...prev, applicantAddress: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="hiring-manager">Hiring Manager Name</Label>
                        <Input
                          id="hiring-manager"
                          placeholder="Sarah Johnson (if known)"
                          value={letterData.hiringManagerName}
                          onChange={(e) =>
                            setLetterData(prev => ({ ...prev, hiringManagerName: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="company-name">Company Name *</Label>
                        <Input
                          id="company-name"
                          placeholder="TechCorp Inc."
                          value={letterData.companyName}
                          onChange={(e) =>
                            setLetterData(prev => ({ ...prev, companyName: e.target.value }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Content Tab */}
                <TabsContent value="content" className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">Letter Content</h3>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => generateLetterWithAI("improve")}
                          disabled={isGenerating || !letterData.letterContent}
                        >
                          {isGenerating ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4 mr-2" />
                              AI Improve
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => generateLetterWithAI("full")}
                          disabled={isGenerating}
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          AI Generate
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-3 right-3 flex gap-2 z-10">
                        <Button variant="ghost" size="sm">
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Underline className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Textarea
                        ref={editorRef}
                        className="min-h-[400px] text-lg p-6 bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 focus:border-blue-500"
                        placeholder="Start writing your application letter here, or use AI to generate content..."
                        value={letterData.letterContent}
                        onChange={(e) =>
                          setLetterData(prev => ({ 
                            ...prev, 
                            letterContent: e.target.value,
                            lastModified: new Date().toISOString(),
                          }))
                        }
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${wordCountColor}`}>
                              {wordCount}
                            </div>
                            <div className="text-sm text-gray-500">Words</div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-500">
                              {characterCount}
                            </div>
                            <div className="text-sm text-gray-500">Characters</div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-500">
                              {readabilityScore}
                            </div>
                            <div className="text-sm text-gray-500">Readability</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {aiSuggestions.length > 0 && (
                      <Card className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-500" />
                            AI Suggestions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {aiSuggestions.map((suggestion, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">{suggestion}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>

                {/* Style Tab */}
                <TabsContent value="style" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-4">Choose Template</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {templates.map((template) => (
                          <Card
                            key={template.id}
                            className={`cursor-pointer hover:shadow-lg transition-all ${
                              letterData.template === template.id ? 'ring-2 ring-blue-500' : ''
                            }`}
                            onClick={() => resetToTemplate(template.id)}
                          >
                            <CardContent className="p-4">
                              <div className="space-y-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${template.colorScheme} flex items-center justify-center text-white mx-auto`}>
                                  {template.icon}
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">{template.name}</div>
                                  <div className="text-xs text-gray-500">{template.description}</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Letter Tone</h4>
                        <div className="space-y-2">
                          {["professional", "enthusiastic", "confident", "humble", "innovative"].map((tone) => (
                            <Button
                              key={tone}
                              variant={letterData.tone === tone ? "default" : "outline"}
                              className="w-full justify-start capitalize"
                              onClick={() => setLetterData(prev => ({ ...prev, tone: tone as any }))}
                            >
                              {tone}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Letter Length</h4>
                        <div className="space-y-2">
                          {["short", "medium", "detailed"].map((length) => (
                            <Button
                              key={length}
                              variant={letterData.length === length ? "default" : "outline"}
                              className="w-full justify-start capitalize"
                              onClick={() => setLetterData(prev => ({ ...prev, length: length as any }))}
                            >
                              {length} {length === "short" ? "(<250 words)" : length === "medium" ? "(250-400)" : "(400+)"}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-4">Keywords</h4>
                      <div className="flex gap-2 flex-wrap">
                        {letterData.keywords.map((keyword, idx) => (
                          <Badge key={idx} className="px-3 py-1">
                            {keyword}
                            <button
                              onClick={() => setLetterData(prev => ({
                                ...prev,
                                keywords: prev.keywords.filter((_, i) => i !== idx)
                              }))}
                              className="ml-2"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                        <Input
                          placeholder="Add important keywords..."
                          className="max-w-xs"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.currentTarget.value) {
                              setLetterData(prev => ({
                                ...prev,
                                keywords: [...prev.keywords, e.currentTarget.value]
                              }));
                              e.currentTarget.value = '';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Analysis Tab */}
                <TabsContent value="analysis" className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">ATS Optimization</h3>
                      <Button
                        onClick={analyzeATS}
                        disabled={isAnalyzing}
                        className="bg-gradient-to-r from-green-500 to-emerald-600"
                      >
                        {isAnalyzing ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                          <Target className="h-4 w-4 mr-2" />
                        )}
                        Analyze ATS Score
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-center space-y-4">
                            <div className="text-5xl font-bold">
                              <span className={atsScoreColor}>{letterData.atsScore}</span>
                              <span className="text-2xl text-gray-500">/100</span>
                            </div>
                            <div className="text-lg font-medium">ATS Compatibility Score</div>
                            <Progress value={letterData.atsScore} className="h-2" />
                            <div className="text-sm text-gray-500">
                              {letterData.atsScore >= 75 ? "Excellent! Your letter is ATS-friendly" :
                               letterData.atsScore >= 50 ? "Good, but could be improved" :
                               "Needs optimization for better results"}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              Keywords Found
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            {letterData.keywordMatches.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {letterData.keywordMatches.map((keyword, idx) => (
                                  <Badge key={idx} className="bg-green-100 text-green-800">
                                    {keyword}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500">No keywords matched yet</p>
                            )}
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <XCircle className="h-5 w-5 text-red-500" />
                              Keywords Missing
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            {letterData.missingKeywords.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {letterData.missingKeywords.map((keyword, idx) => (
                                  <Badge key={idx} variant="outline" className="text-red-700">
                                    {keyword}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500">All keywords matched!</p>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Optimization Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
                              <div>
                                <div className="font-medium">Use Specific Keywords</div>
                                <div className="text-sm text-gray-600">Include exact phrases from the job description</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
                              <div>
                                <div className="font-medium">Keep Formatting Simple</div>
                                <div className="text-sm text-gray-600">Avoid tables, columns, and fancy formatting</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
                              <div>
                                <div className="font-medium">Standard Headings</div>
                                <div className="text-sm text-gray-600">Use "Experience", "Skills", "Education" as headings</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Panel - Preview & Actions */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-blue-500" />
                  Letter Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Word Count</span>
                    <span className={`font-semibold ${wordCountColor}`}>{wordCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Character Count</span>
                    <span className="font-semibold">{characterCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Readability</span>
                    <span className="font-semibold text-green-500">{readabilityScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ATS Score</span>
                    <span className={`font-semibold ${atsScoreColor}`}>{letterData.atsScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Version</span>
                    <span className="font-semibold">v{letterData.version}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">Last Modified</div>
                  <div className="text-sm font-medium">
                    {new Date(letterData.lastModified).toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-500" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => generateLetterWithAI("full")}
                    disabled={isGenerating || !letterData.jobTitle}
                  >
                    {isGenerating ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Sparkles className="h-4 w-4 mr-2" />
                    )}
                    Generate Full Letter
                  </Button>
                  
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => generateLetterWithAI("improve")}
                    disabled={isGenerating || !letterData.letterContent}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Improve Current Letter
                  </Button>
                  
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => generateLetterWithAI("paraphrase")}
                    disabled={isGenerating || !letterData.letterContent}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Paraphrase Professionally
                  </Button>
                  
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => generateLetterWithAI("expand")}
                    disabled={isGenerating || !letterData.letterContent}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Expand with Details
                  </Button>
                  
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={generateAISuggestions}
                    disabled={isAnalyzing}
                  >
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Get Suggestions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Export Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2 text-green-500" />
                  Export Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700"
                    onClick={() => {/* PDF export */}}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                    onClick={() => {/* Word export */}}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download Word
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {/* HTML export */}}
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Download HTML
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowPreview(true)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Full Preview
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={saveDraft}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={() => {
                        setLetterHistory(prev => [letterData, ...prev]);
                        showToast("📋 Copied to history");
                      }}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Save to History
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Template Preview */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-blue-500" />
                  Quick Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border h-64 overflow-y-auto">
                  <div className="text-sm">
                    <div className="font-bold mb-2">{letterData.applicantName || "Your Name"}</div>
                    <div className="text-gray-600 mb-4">
                      Application for: {letterData.jobTitle || "Job Title"}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {letterData.letterContent.substring(0, 200) || "Your letter content will appear here..."}
                      {letterData.letterContent.length > 200 ? "..." : ""}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
