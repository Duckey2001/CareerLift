import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Users,
  Shield,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Award,
  Target,
  Zap,
  Sparkles,
  Rocket,
  Trophy,
  Lightbulb,
  Globe2,
  Cpu,
  Network,
  TrendingUp as ChartUp,
  BookOpen,
  Clock,
  UserCheck,
  HeartHandshake,
  Eye,
  Filter,
  Bell,
  Calendar,
  MessageSquare,
  Video,
  MapPin,
  Users as Users2,
  ChevronRight,
  Medal,
  Crown,
  ShieldCheck,
  Lock,
  Unlock,
  RefreshCw,
  Play,
  Pause,
} from "lucide-react";

const features = [
    {
      icon: FileText,
      title: "Smart AI CV & Proposal Builder",
      description: "Create professional CVs and proposals with AI-powered assistance. Download in PDF and Word formats.",
      link: "/cv-builder",
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      badge: "AI-Powered",
      features: ["AI Optimization", "ATS Friendly", "Multi-Format Export"]
    },
    {
      icon: Briefcase,
      title: "Fair & Transparent Job Board",
      description: "Access verified job posts with anonymous applications and transparent hiring processes.",
      link: "/jobs",
      color: "bg-green-100 text-green-600",
      gradient: "from-green-500 to-emerald-500",
      badge: "Live Updates",
      features: ["Real-time Alerts", "Salary Insights", "Company Reviews"]
    },
    {
      icon: GraduationCap,
      title: "Skill & Soft Skills Academy",
      description: "Build skills through free online courses and earn certificates while you search for opportunities.",
      link: "/courses",
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-500 to-violet-500",
      badge: "Free Access",
      features: ["Interactive Labs", "Skill Assessments", "Progress Tracking"]
    },
    {
      icon: Users,
      title: "Virtual Internship Hub",
      description: "Connect to remote internships with real-world tasks and verified experience for your CV.",
      link: "/internships",
      color: "bg-orange-100 text-orange-600",
      gradient: "from-orange-500 to-amber-500",
      badge: "Global Access",
      features: ["Remote Projects", "Mentor Support", "Portfolio Building"]
    },
    {
      icon: Shield,
      title: "Corruption Watch & HR Transparency",
      description: "Rate companies anonymously and view transparency scores to make informed decisions.",
      link: "/transparency",
      color: "bg-red-100 text-red-600",
      gradient: "from-red-500 to-rose-500",
      badge: "Community Driven",
      features: ["Anonymous Reviews", "Salary Benchmark", "Culture Insights"]
    },
    {
      icon: Heart,
      title: "Mentorship Matching",
      description: "Connect with experienced professionals for career guidance and accountability.",
      link: "/mentorship",
      color: "bg-pink-100 text-pink-600",
      gradient: "from-pink-500 to-rose-500",
      badge: "AI Matching",
      features: ["1:1 Sessions", "Goal Tracking", "Network Building"]
    },
  ];

const stats = [
    { label: "Young Professionals Helped", value: "50,000+", icon: Users2 },
    { label: "Verified Job Opportunities", value: "12,000+", icon: Briefcase },
    { label: "Course Completions", value: "100,000+", icon: GraduationCap },
    { label: "Mentorship Connections", value: "5,000+", icon: HeartHandshake },
    { label: "Companies Rated", value: "2,500+", icon: ShieldCheck },
    { label: "Avg. Salary Increase", value: "42%", icon: ChartUp },
  ];

const testimonials = [
    {
      name: "Sarah M.",
      role: "Software Developer",
      content: "CareerLift's AI CV builder helped me land 3 interviews in one week! The transparency scores saved me from two companies with poor work culture.",
      avatar: "SM",
      rating: 5,
      achievement: "Landed dream job at Google"
    },
    {
      name: "David K.",
      role: "Marketing Specialist",
      content: "The virtual internship program gave me real-world experience that made my resume stand out. I went from no experience to a full-time offer in 6 months!",
      avatar: "DK",
      rating: 5,
      achievement: "Secured remote position"
    },
    {
      name: "Amina J.",
      role: "Project Manager",
      content: "The mentorship program connected me with an industry leader who guided me through my career transition. Life-changing experience!",
      avatar: "AJ",
      rating: 5,
      achievement: "Promoted within 3 months"
    }
  ];

  const learningPlatforms = [
    { 
      name: "YALI Courses", 
      url: "https://yali.state.gov/courses/",
      courses: 200,
      category: "Leadership"
    },
    { 
      name: "Google Grow", 
      url: "https://grow.google/intl/africa/courses/",
      courses: 150,
      category: "Tech Skills"
    },
    {
      name: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/",
      courses: 300,
      category: "Certifications"
    },
    { 
      name: "Khan Academy", 
      url: "https://www.khan.academy.org/",
      courses: 500,
      category: "Fundamentals"
    },
    { 
      name: "FutureLearn", 
      url: "https://www.futurelearn.com/courses",
      courses: 250,
      category: "University"
    },
    { 
      name: "Alison", 
      url: "https://alison.com/courses",
      courses: 1000,
      category: "Vocational"
    },
  ];

export default function Index() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Animate stats when they come into view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          stats.forEach((stat, index) => {
            const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
            animateNumber(index, target, 2000);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateNumber = (index: number, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedStats(prev => {
        const newStats = [...prev];
        newStats[index] = Math.floor(current);
        return newStats;
      });
    }, 16);
  };

  const successStories = [
    { metric: "30 days", label: "Average time to first interview" },
    { metric: "85%", label: "Report better job satisfaction" },
    { metric: "4.8/5", label: "Platform satisfaction rating" },
    { metric: "60%", label: "Faster career progression" },
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              Elevating Careers Through Innovation
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  careerLift
                </span>
                <Rocket className="absolute -top-4 -right-8 w-8 h-8 text-accent animate-bounce" />
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Propel your career forward with AI-powered tools, transparent job opportunities, 
              and a community dedicated to your success. 
              <span className="block text-primary font-semibold mt-2">
                Your dream career starts here.
              </span>
            </p>

            {/* Interactive CTA with Progress */}
            <div className="max-w-2xl mx-auto mb-12 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-2">Start Your Journey in 5 Minutes</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Quick setup • AI-guided • Free forever</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="lg" asChild className="relative overflow-hidden group">
                    <Link to="/cv-builder">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      <span className="relative flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Build Your AI CV
                      </span>
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" asChild className="group">
                    <Link to="/jobs">
                      <Briefcase className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Explore Jobs
                      <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Profile completion</span>
                  <span className="text-primary font-semibold">Just 2 steps away</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>

            {/* Quick Stats Preview */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {successStories.map((story, index) => (
                <div key={index} className="group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {story.metric}
                  </div>
                  <div className="text-sm text-muted-foreground max-w-[150px]">
                    {story.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section id="stats-section" className="py-16 bg-gradient-to-r from-muted/50 to-background relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {animatedStats[index]}{stat.value.includes('%') ? '%' : '+'}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Gallery */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered Platform
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Complete Career <span className="text-primary">Toolkit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, powered by intelligent technology
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All Features</TabsTrigger>
              <TabsTrigger value="ai">AI Tools</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  hoveredFeature === index ? 'border-primary' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${feature.color} transition-transform group-hover:scale-110`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-3">
                    <Link to={feature.link} className="hover:text-primary transition-colors">
                      {feature.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="relative">
                    <Button
                      className="w-full group/btn overflow-hidden"
                      asChild
                    >
                      <Link to={feature.link}>
                        <span className="relative z-10">Explore Feature</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
                
                <CardFooter className="text-xs text-muted-foreground border-t pt-4">
                  <div className="flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    Real-time updates available
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Journey Builder */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build Your <span className="text-primary">Success Path</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow these steps to accelerate your career growth
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "AI Profile Setup",
                  description: "Create your smart profile with AI optimization",
                  icon: UserCheck,
                  time: "5 min",
                  color: "bg-blue-500"
                },
                {
                  step: "02",
                  title: "Skill Assessment",
                  description: "Identify strengths and skill gaps",
                  icon: Target,
                  time: "10 min",
                  color: "bg-green-500"
                },
                {
                  step: "03",
                  title: "Personalized Plan",
                  description: "Get your customized career roadmap",
                  icon: MapPin,
                  time: "3 min",
                  color: "bg-purple-500"
                },
                {
                  step: "04",
                  title: "Launch & Track",
                  description: "Start your journey with progress tracking",
                  icon: Rocket,
                  time: "2 min",
                  color: "bg-orange-500"
                },
              ].map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="relative inline-flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-2xl ${step.color} text-white flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      {step.step}
                    </div>
                    
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                    
                    <step.icon className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white h-8 w-8 z-20" />
                    
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center text-sm text-primary font-medium">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="group">
              <Link to="/onboarding">
                Start Your Free Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from professionals who transformed their careers
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-background to-muted/50 border shadow-xl">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                        {testimonials[activeTestimonial].avatar}
                      </div>
                      <div className="absolute bottom-6 right-1/4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-bold text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <Badge variant="outline" className="gap-2">
                        <Trophy className="w-3 h-3" />
                        {testimonials[activeTestimonial].achievement}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between mt-8">
                      <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === activeTestimonial 
                                ? 'bg-primary w-8' 
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                            aria-label={`View testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        >
                          <ArrowRight className="h-4 w-4 rotate-180" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Learning Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                World-Class <span className="text-primary">Learning</span> Partners
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access thousands of free courses from top educational platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {learningPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="group text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
              >
                <CardContent className="p-0">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {platform.courses}+
                    </div>
                  </div>
                  
                  <p className="font-semibold text-foreground mb-2">{platform.name}</p>
                  <Badge variant="secondary" className="text-xs">
                    {platform.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="group">
              <Link to="/courses">
                <GraduationCap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore All Learning Paths
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                <Shield className="w-4 h-4 mr-2" />
                Trust & Transparency
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a <span className="text-primary">Fair</span> Future for Work
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Lock,
                    title: "Anonymous Applications",
                    description: "Remove bias with blind hiring processes"
                  },
                  {
                    icon: Eye,
                    title: "Transparency Scores",
                    description: "Real company ratings from real employees"
                  },
                  {
                    icon: Filter,
                    title: "AI Bias Detection",
                    description: "Our AI screens for discriminatory job posts"
                  },
                  {
                    icon: Bell,
                    title: "Real-time Alerts",
                    description: "Get notified about new opportunities instantly"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Trust Score</h3>
                  <div className="text-6xl font-bold mb-2">9.8/10</div>
                  <p className="opacity-90 mb-6">Based on 10,000+ user reviews</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Job Quality</span>
                        <span>96%</span>
                      </div>
                      <Progress value={96} className="h-2 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Platform Usability</span>
                        <span>94%</span>
                      </div>
                      <Progress value={94} className="h-2 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Support Quality</span>
                        <span>98%</span>
                      </div>
                      <Progress value={98} className="h-2 bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground">Avg. Response</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Interactive Elements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-pulse" />
            <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full animate-pulse delay-1000" />
          </div>
          
          <div className="relative">
            <Badge className="mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time: Free AI CV Review
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-primary">Accelerate</span> Your Career?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join 50,000+ professionals who transformed their careers with careerLift. 
              Your future starts today.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: FileText, text: "AI CV Builder", color: "bg-blue-500" },
                { icon: Briefcase, text: "Smart Job Matches", color: "bg-green-500" },
                { icon: Users, text: "Expert Community", color: "bg-purple-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group relative overflow-hidden">
                <Link to="/signup">
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="group">
                <Link to="/demo">
                  <Video className="mr-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
                  Watch Demo
                  <Play className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              No credit card required • Free forever plan available • 24/7 Support
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
