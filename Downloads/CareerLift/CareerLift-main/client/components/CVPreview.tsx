import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Code, 
  Star, 
  Target, 
  Sparkles, 
  TrendingUp,
  Heart,
  Clock,
  Calendar,
  Users,
  Trophy,
  Zap,
  Brain,
  Rocket,
  Palette,
  PenTool,
  BookOpen,
  Music,
  Camera,
  Gamepad2,
  Dumbbell,
  ChefHat,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Coffee,
  Cloud,
  Leaf,
  Coffee as CoffeeIcon,
  Compass,
  Lightbulb,
  Crown,
  Gem,
  Flame,
  BarChart3,
  Building,
  User,
  Link,
  Eye,
  Download,
  Share2,
  Edit3,
  Copy,
  Check,
  X,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  RotateCcw,
  MoreVertical,
  Settings,
  Filter,
  Search,
  HelpCircle,
  Info,
  AlertCircle,
  Bell,
  Home,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Code as CodeIcon,
  Award as AwardIcon,
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  Star as StarIcon,
  Target as TargetIcon,
  Sparkles as SparklesIcon,
  TrendingUp as TrendingUpIcon,
  Heart as HeartIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Trophy as TrophyIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Palette as PaletteIcon,
  PenTool as PenToolIcon,
  BookOpen as BookOpenIcon,
  Music as MusicIcon,
  Camera as CameraIcon,
  Gamepad2 as Gamepad2Icon,
  Dumbbell as DumbbellIcon,
  ChefHat as ChefHatIcon,
  MessageSquare as MessageSquareIcon,
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Coffee as CoffeeIconIcon,
  Cloud as CloudIcon,
  Leaf as LeafIcon,
  Compass as CompassIcon,
  Lightbulb as LightbulbIcon,
  Crown as CrownIcon,
  Gem as GemIcon,
  Flame as FlameIcon,
  BarChart3 as BarChart3Icon,
  Building as BuildingIcon,
  User as UserIcon,
  Link as LinkIcon,
  Eye as EyeIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Edit3 as Edit3Icon,
  Copy as CopyIcon,
  Check as CheckIcon,
  X as XIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Maximize2 as Maximize2Icon,
  Minimize2 as Minimize2Icon,
  RotateCcw as RotateCcwIcon,
  MoreVertical as MoreVerticalIcon,
  Settings as SettingsIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
  Bell as BellIcon,
  Home as HomeIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
  skills?: string[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
  grade?: string;
}

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  website?: string;
  linkedin?: string;
  github?: string;
  nationality?: string;
  dateOfBirth?: string;
  jobTitle?: string;
  desiredIndustry?: string;
  careerLevel?: string;
}

interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

interface Language {
  id: string;
  language: string;
  proficiency: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link?: string;
}

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface CVPreviewProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  references?: Reference[];
  languages?: Language[];
  certifications?: Certification[];
  projects?: Project[];
  achievements?: Achievement[];
  hobbies?: string[];
  template?: "modern" | "creative" | "professional" | "executive" | "minimal";
  accentColor?: string;
}

// Hobby icons mapping
const hobbyIcons: Record<string, React.ReactNode> = {
  "Reading": <BookOpen className="h-3 w-3" />,
  "Traveling": <Compass className="h-3 w-3" />,
  "Photography": <Camera className="h-3 w-3" />,
  "Gaming": <Gamepad2 className="h-3 w-3" />,
  "Fitness": <Dumbbell className="h-3 w-3" />,
  "Cooking": <ChefHat className="h-3 w-3" />,
  "Painting": <Palette className="h-3 w-3" />,
  "Coding": <Code className="h-3 w-3" />,
  "Music": <Music className="h-3 w-3" />,
  "Writing": <PenTool className="h-3 w-3" />,
  "Coffee": <Coffee className="h-3 w-3" />,
  "Sports": <Target className="h-3 w-3" />,
  "Yoga": <Leaf className="h-3 w-3" />,
  "Hiking": <Compass className="h-3 w-3" />,
  "Dancing": <Sparkles className="h-3 w-3" />,
};

const getHobbyIcon = (hobby: string) => {
  for (const [key, icon] of Object.entries(hobbyIcons)) {
    if (hobby.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  return <Heart className="h-3 w-3" />;
};

// Proficiency color mapping
const getProficiencyColor = (proficiency: string) => {
  switch(proficiency.toLowerCase()) {
    case 'native':
    case 'fluent':
      return 'from-green-500 to-emerald-600';
    case 'advanced':
      return 'from-blue-500 to-cyan-500';
    case 'intermediate':
      return 'from-yellow-500 to-amber-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export const CVPreview = ({
  personalInfo,
  experiences,
  education,
  skills,
  references = [],
  languages = [],
  certifications = [],
  projects = [],
  achievements = [],
  hobbies = [],
  template = "creative",
  accentColor = "#7C3AED",
}: CVPreviewProps) => {
  const [activeSection, setActiveSection] = useState<string>("summary");

  const isEmpty =
    !personalInfo.fullName &&
    !personalInfo.email &&
    experiences.length === 0 &&
    education.length === 0 &&
    skills.length === 0;

  const templateStyles = {
    modern: {
      card: "bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100",
      header: "bg-gradient-to-r from-blue-600 to-cyan-600",
      accent: "text-blue-600",
      accentBg: "bg-gradient-to-r from-blue-100 to-cyan-100",
      accentBorder: "border-blue-200",
      sidebar: "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900",
    },
    creative: {
      card: "bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 border-2 border-purple-100",
      header: "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600",
      accent: "text-purple-600",
      accentBg: "bg-gradient-to-r from-purple-100 to-pink-100",
      accentBorder: "border-purple-200",
      sidebar: "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900",
    },
    professional: {
      card: "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200",
      header: "bg-gradient-to-r from-gray-800 to-gray-700",
      accent: "text-gray-800",
      accentBg: "bg-gradient-to-r from-gray-100 to-gray-200",
      accentBorder: "border-gray-300",
      sidebar: "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900",
    },
    executive: {
      card: "bg-gradient-to-br from-white to-amber-50/20 border-2 border-amber-100",
      header: "bg-gradient-to-r from-amber-700 to-orange-700",
      accent: "text-amber-700",
      accentBg: "bg-gradient-to-r from-amber-100 to-orange-100",
      accentBorder: "border-amber-200",
      sidebar: "bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900",
    },
    minimal: {
      card: "bg-white border border-gray-100",
      header: "bg-gradient-to-r from-gray-50 to-white",
      accent: "text-gray-700",
      accentBg: "bg-gray-100",
      accentBorder: "border-gray-200",
      sidebar: "bg-gradient-to-b from-gray-800 to-gray-900",
    },
  };

  const styles = templateStyles[template];

  if (isEmpty) {
    return (
      <div className={cn(
        "relative overflow-hidden rounded-2xl p-8 min-h-[600px] flex flex-col items-center justify-center",
        styles.card
      )}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-200 to-rose-200 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-green-200 to-emerald-200 opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-md">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            <Rocket className="h-12 w-12 text-white" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your CV Canvas Awaits
            </h3>
            <p className="text-gray-600">
              Start building your professional story. Fill in your details to see your personalized CV come to life.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Palette className="h-4 w-4 text-purple-500" />
              <span>5 Templates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Target className="h-4 w-4 text-green-500" />
              <span>ATS Friendly</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate completion percentage
  const completionScore = Math.min(100, 
    (personalInfo.fullName ? 15 : 0) +
    (personalInfo.summary ? 15 : 0) +
    (experiences.length > 0 ? 20 : 0) +
    (education.length > 0 ? 15 : 0) +
    (skills.length > 3 ? 15 : 0) +
    (certifications.length > 0 ? 10 : 0) +
    (projects.length > 0 ? 10 : 0)
  );

  return (
    <div className="relative group">
      {/* Interactive controls overlay */}
      <div className="absolute -top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
          <button className="p-1 hover:bg-gray-100 rounded" title="Preview">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded" title="Download">
            <Download className="h-4 w-4" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded" title="Share">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Completion score badge */}
      <div className="absolute -top-3 left-4 z-20">
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
          <div className="flex items-center gap-1">
            <Trophy className="h-3 w-3" />
            <span className="text-xs font-bold">{completionScore}% Complete</span>
          </div>
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Left Sidebar */}
        <div className={cn(
          "lg:col-span-1 p-8 text-white",
          styles.sidebar
        )}>
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm flex items-center justify-center">
                  <div className="text-3xl font-bold">
                    {personalInfo.fullName
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                </div>
              </div>
              {completionScore > 80 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full p-1.5 border-4 border-purple-900">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
            
            <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
            {personalInfo.jobTitle && (
              <p className="text-white/80 font-medium mb-4">{personalInfo.jobTitle}</p>
            )}
            {personalInfo.careerLevel && (
              <Badge variant="outline" className="border-white/30 text-white/90 bg-white/10">
                {personalInfo.careerLevel}
              </Badge>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Contact</h3>
            <div className="space-y-3">
              {personalInfo.email && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <Mail className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white/90">{personalInfo.email}</div>
                    <div className="text-white/60 text-xs">Email</div>
                  </div>
                </div>
              )}
              
              {personalInfo.phone && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                    <Phone className="h-4 w-4 text-green-300" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white/90">{personalInfo.phone}</div>
                    <div className="text-white/60 text-xs">Phone</div>
                  </div>
                </div>
              )}
              
              {personalInfo.location && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <MapPin className="h-4 w-4 text-purple-300" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white/90">{personalInfo.location}</div>
                    <div className="text-white/60 text-xs">Location</div>
                  </div>
                </div>
              )}
              
              {personalInfo.linkedin && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20">
                    <Linkedin className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white/90 truncate">LinkedIn Profile</div>
                    <div className="text-white/60 text-xs">Connect</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Core Skills</h3>
              <div className="space-y-3">
                {skills.slice(0, 8).map((skill) => (
                  <div key={skill} className="relative">
                    <div className="text-sm font-medium text-white/90 mb-1">{skill}</div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        style={{ 
                          width: `${Math.min(100, Math.random() * 30 + 70)}%`,
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex items-center justify-between">
                    <span className="text-sm text-white/90">{lang.language}</span>
                    <Badge className={cn(
                      "text-xs",
                      `bg-gradient-to-r ${getProficiencyColor(lang.proficiency)} text-white`
                    )}>
                      {lang.proficiency}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
                  >
                    {getHobbyIcon(hobby)}
                    <span className="text-xs text-white/90">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className={cn(
          "lg:col-span-3 p-8 space-y-8",
          styles.card
        )}>
          {/* Professional Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={cn(
                "p-2 rounded-lg",
                styles.accentBg
              )}>
                <User className={cn("h-5 w-5", styles.accent)} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Professional Profile</h2>
            </div>
            
            <div className="relative">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed pl-4">
                {personalInfo.summary || "Professional summary will appear here..."}
              </p>
            </div>
          </div>

          {/* Skills Cloud */}
          {skills.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  styles.accentBg
                )}>
                  <Zap className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Skills & Expertise</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
                      index % 4 === 0 ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800" :
                      index % 4 === 1 ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800" :
                      index % 4 === 2 ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800" :
                      "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800"
                    )}>
                      {skill}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Timeline */}
          {experiences.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  styles.accentBg
                )}>
                  <Briefcase className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Professional Journey</h2>
              </div>
              
              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300"></div>
                
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative mb-8 last:mb-0 group">
                    {/* Timeline dot */}
                    <div className={cn(
                      "absolute -left-8 w-4 h-4 rounded-full border-4 border-white shadow-lg",
                      index % 3 === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-500" :
                      index % 3 === 1 ? "bg-gradient-to-r from-purple-500 to-pink-500" :
                      "bg-gradient-to-r from-green-500 to-emerald-500"
                    )}></div>
                    
                    <div className={cn(
                      "p-5 rounded-xl transition-all duration-300 group-hover:shadow-lg",
                      styles.accentBorder,
                      index % 2 === 0 ? "bg-gradient-to-r from-white to-blue-50/50" : "bg-gradient-to-r from-white to-purple-50/50"
                    )}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{exp.position}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-gray-700">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <Star className="h-4 w-4 text-amber-500" />
                            Key Achievements
                          </div>
                          <ul className="space-y-2 pl-6">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Grid */}
          {education.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  styles.accentBg
                )}>
                  <GraduationCap className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Education & Qualifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className={cn(
                      "p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                      styles.accentBorder,
                      "bg-gradient-to-br from-white to-gray-50/50"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="font-medium text-gray-700">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">{edu.year}</span>
                      </div>
                    </div>
                    
                    {edu.grade && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-3">
                        <Trophy className="h-3 w-3" />
                        Grade: {edu.grade}
                      </div>
                    )}
                    
                    {edu.description && (
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects & Certifications Grid */}
          {(projects.length > 0 || certifications.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Projects */}
              {projects.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      styles.accentBg
                    )}>
                      <Code className={cn("h-5 w-5", styles.accent)} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Projects</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className={cn(
                          "p-4 rounded-xl transition-all duration-300 hover:shadow-lg",
                          styles.accentBorder,
                          "bg-gradient-to-br from-white to-blue-50/30"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-gray-900">{project.name}</h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View
                            </a>
                          )}
                        </div>
                        
                        {project.technologies && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.technologies.split(',').map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
                              >
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {project.description && (
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      styles.accentBg
                    )}>
                      <Award className={cn("h-5 w-5", styles.accent)} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className={cn(
                          "p-4 rounded-xl transition-all duration-300 hover:shadow-lg",
                          styles.accentBorder,
                          "bg-gradient-to-br from-white to-amber-50/30"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-gray-900">{cert.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="h-3 w-3" />
                            {cert.date}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                          <Building className="h-4 w-4" />
                          <span>{cert.issuer}</span>
                        </div>
                        
                        {cert.description && (
                          <p className="text-gray-600 text-sm">{cert.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  styles.accentBg
                )}>
                  <Trophy className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Achievements & Awards</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-bl-full"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-full",
                          index % 3 === 0 ? "bg-gradient-to-r from-yellow-100 to-amber-100" :
                          index % 3 === 1 ? "bg-gradient-to-r from-purple-100 to-pink-100" :
                          "bg-gradient-to-r from-blue-100 to-cyan-100"
                        )}>
                          <Trophy className={cn(
                            "h-5 w-5",
                            index % 3 === 0 ? "text-yellow-600" :
                            index % 3 === 1 ? "text-purple-600" :
                            "text-blue-600"
                          )} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                          {achievement.date && (
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Calendar className="h-3 w-3" />
                              {achievement.date}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {achievement.description && (
                        <p className="text-gray-600">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Powered by careerLift</div>
                  <div className="text-xs text-gray-500">Professional CV Builder</div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>ATS Optimized</span>
                  </div>
                  <span>•</span>
                  <span>Confidence Score: {completionScore}%</span>
                </div>
                <div>Generated on {new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { width: 0; }
          to { width: var(--target-width); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .group:hover .float-animation {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
