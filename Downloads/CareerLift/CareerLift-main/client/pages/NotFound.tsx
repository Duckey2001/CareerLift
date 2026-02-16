// components/NotFound.tsx
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Home, 
  ArrowLeft, 
  Compass, 
  Map, 
  Globe, 
  Satellite,
  Ghost,
  AlertTriangle,
  Brain,
  Sparkles,
  Zap,
  RefreshCw,
  ExternalLink,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  Shield,
  Target,
  Rocket,
  Star,
  Palette,
  Gamepad2,
  Wand2,
  Cat,
  Coffee,
  Moon,
  Sun,
  Cloud,
  Wind,
  Droplets,
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
  MapPin,
  Navigation,
  Compass as CompassIcon,
  Radar,
  Telescope,
  Satellite as SatelliteIcon,
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
  RotateCcw,
  RotateCw,
  Zap as ZapIcon,
  Wind as WindIcon,
  Droplet,
  ThermometerSun,
  ThermometerSnowflake,
  Umbrella as UmbrellaIcon,
  Mountain as MountainIcon,
  Ship as ShipIcon,
  Plane as PlaneIcon,
  Train as TrainIcon,
  Car as CarIcon,
  Bike as BikeIcon,
  Footprints as FootprintsIcon,
  MapPin as MapPinIcon,
  Navigation as NavigationIcon,
  Compass as CompassIcon2,
  Radar as RadarIcon,
  Telescope as TelescopeIcon,
  Satellite as SatelliteIcon2,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Cloudy,
  Bell,
  MessageSquare,
  DollarSign,
} from "lucide-react";

interface Suggestion {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  category: string;
}

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [hoveredSuggestion, setHoveredSuggestion] = useState<string | null>(null);

  // Common paths and suggestions
  const commonPaths = [
    { path: "/", title: "Home", icon: <Home />, description: "Return to homepage", category: "navigation" },
    { path: "/jobs", title: "Job Board", icon: <Briefcase />, description: "Browse job opportunities", category: "career" },
    { path: "/courses", title: "Courses", icon: <GraduationCap />, description: "Skill development courses", category: "learning" },
    { path: "/cv-builder", title: "CV Builder", icon: <BookOpen />, description: "Create your professional CV", category: "tools" },
    { path: "/transparency", title: "Transparency", icon: <Shield />, description: "Company transparency ratings", category: "community" },
  ];

  // AI-powered path suggestions based on URL
  const generateSuggestions = (pathname: string) => {
    const pathSegments = pathname.toLowerCase().split('/').filter(Boolean);
    
    const aiSuggestions: Suggestion[] = [
      {
        title: "Career Dashboard",
        description: "View your career progress and recommendations",
        icon: <Target />,
        path: "/dashboard",
        category: "career"
      },
      {
        title: "AI CV Assistant",
        description: "Get AI-powered CV optimization",
        icon: <Brain />,
        path: "/cv-builder/ai",
        category: "tools"
      },
      {
        title: "Skill Assessment",
        description: "Take skill assessment tests",
        icon: <Zap />,
        path: "/assessment",
        category: "learning"
      },
      {
        title: "Job Alerts",
        description: "Set up personalized job alerts",
        icon: <Bell />,
        path: "/jobs/alerts",
        category: "career"
      },
      {
        title: "Community Forum",
        description: "Join career discussions",
        icon: <Users />,
        path: "/community",
        category: "community"
      },
      {
        title: "Career Pathways",
        description: "Explore career growth paths",
        icon: <Compass />,
        path: "/pathways",
        category: "learning"
      },
      {
        title: "Interview Prep",
        description: "Practice interview questions",
        icon: <MessageSquare />,
        path: "/interview-prep",
        category: "career"
      },
      {
        title: "Salary Calculator",
        description: "Calculate your market salary",
        icon: <DollarSign />,
        path: "/salary-calculator",
        category: "tools"
      },
    ];

    // Filter suggestions based on path segments
    const filteredSuggestions = aiSuggestions.filter(suggestion => {
      const suggestionText = suggestion.title.toLowerCase() + " " + suggestion.description.toLowerCase();
      return pathSegments.some(segment => suggestionText.includes(segment));
    });

    return [...commonPaths, ...filteredSuggestions.slice(0, 6)];
  };

  useEffect(() => {
    console.error(
      "🔍 404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
    
    // Send analytics (in production, use proper analytics service)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', '404_error', {
        page_path: location.pathname,
      });
    }

    // Generate suggestions
    const generatedSuggestions = generateSuggestions(location.pathname);
    setSuggestions(generatedSuggestions);

    // Start analyzing animation
    setIsAnalyzing(true);
    const timer = setTimeout(() => setIsAnalyzing(false), 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const getRandomFunFact = () => {
    const funFacts = [
      "Did you know? The average person will spend 90,000 hours at work over their lifetime.",
      "Fun fact: The term 'CV' comes from Latin 'Curriculum Vitae' meaning 'course of life'.",
      "Interesting: LinkedIn has over 900 million members worldwide.",
      "Tip: Customizing your CV for each job increases interview chances by 40%.",
      "Fact: The first online job board was launched in 1994.",
      "Insight: 85% of jobs are filled through networking.",
      "Statistic: AI will create 97 million new jobs by 2025.",
      "Did you know? Soft skills are now as important as technical skills.",
    ];
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  };

  const getEmojiForPath = (path: string) => {
    if (path.includes('job')) return '💼';
    if (path.includes('course')) return '📚';
    if (path.includes('cv')) return '📄';
    if (path.includes('transparency')) return '⚖️';
    if (path.includes('dashboard')) return '📊';
    return '🔍';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          {/* Animated 404 */}
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8 
              }}
              className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              404
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              👻
            </motion.div>
          </div>

          {/* Main message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Oops! Page{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Not Found
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            The page <code className="bg-gray-800 px-2 py-1 rounded">{location.pathname}</code> seems to have wandered off into the digital wilderness.
          </motion.p>

          {/* AI Analysis Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full mb-8"
          >
            {isAnalyzing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
                <span>AI analyzing your path...</span>
              </>
            ) : (
              <>
                <Brain className="h-4 w-4 text-green-400" />
                <span>AI suggestions ready!</span>
              </>
            )}
          </motion.div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="What are you looking for? Search jobs, courses, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-24 h-14 text-lg bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI Search
            </Button>
          </form>
        </motion.div>

        {/* Suggested Paths */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Compass className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold">Suggested Destinations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredSuggestion(suggestion.path)}
                  onHoverEnd={() => setHoveredSuggestion(null)}
                >
                  <Link to={suggestion.path}>
                    <Card className="h-full bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            animate={hoveredSuggestion === suggestion.path ? { rotate: 360 } : {}}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white"
                          >
                            {suggestion.icon}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors">
                                {suggestion.title}
                              </h3>
                              <Badge className="bg-gray-700/50 text-gray-300">
                                {suggestion.category}
                              </Badge>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {suggestion.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                          <span className="text-sm text-gray-500">
                            {getEmojiForPath(suggestion.path)} {suggestion.path}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
                          >
                            Explore →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Fun Zone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-full mb-4">
                <Gamepad2 className="h-4 w-4" />
                <span className="text-sm font-medium">Fun Zone</span>
              </div>
              <h3 className="text-xl font-bold mb-2">While You're Here...</h3>
              <p className="text-gray-400 mb-6">
                Since this page doesn't exist yet, here's something interesting:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fun Fact */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wand2 className="h-5 w-5 text-yellow-400" />
                  <h4 className="font-semibold">Career Fun Fact</h4>
                </div>
                <p className="text-gray-300">
                  {getRandomFunFact()}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-5 w-5 text-blue-400" />
                  <h4 className="font-semibold">Quick Actions</h4>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 hover:border-purple-500 hover:bg-purple-900/20"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Go Back
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 hover:border-blue-500 hover:bg-blue-900/20"
                    onClick={() => window.location.reload()}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Page
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 hover:border-green-500 hover:bg-green-900/20"
                    onClick={() => navigate('/contact')}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Report Missing Page
                  </Button>
                </div>
              </div>
            </div>

            {/* Easter Egg */}
            <div className="text-center mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-4">
                Found a bug? Need a feature? Let us know!
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => {
                  const easterEgg = document.createElement('div');
                  easterEgg.className = 'fixed inset-0 flex items-center justify-center z-50';
                  easterEgg.innerHTML = `
                    <div class="absolute inset-0 bg-black/80"></div>
                    <div class="relative bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-2xl max-w-sm text-center">
                      <div class="text-6xl mb-4">🎉</div>
                      <h3 class="text-xl font-bold mb-2">Easter Egg Found!</h3>
                      <p class="text-gray-300 mb-4">You discovered a hidden feature!</p>
                      <p class="text-sm text-gray-400">This page was brought to you by AI magic ✨</p>
                    </div>
                  `;
                  document.body.appendChild(easterEgg);
                  setTimeout(() => easterEgg.remove(), 3000);
                }}
              >
                <Cat className="h-4 w-4 mr-2" />
                Click for a surprise
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate('/')}
            >
              <Home className="h-4 w-4 mr-2" />
              Homepage
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate('/jobs')}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Jobs
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate('/courses')}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Courses
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate('/cv-builder')}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              CV Builder
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate('/transparency')}
            >
              <Shield className="h-4 w-4 mr-2" />
              Transparency
            </Button>
          </div>
        </motion.div>

        {/* Decorative footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CareerLift AI • Making career growth accessible for everyone
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Error logged for improvement. Thank you for helping us grow! 🌱
          </p>
        </div>
      </div>

      {/* Interactive particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
