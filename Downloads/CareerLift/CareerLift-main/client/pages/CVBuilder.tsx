// app/cv-builder/page.tsx
'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { CVPreview } from "@/components/CVPreview";
import {
  FileText,
  Download,
  Eye,
  Plus,
  Trash2,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Loader2,
  ExternalLink,
  Globe,
  Code,
  Zap,
  Brain,
  Target,
  Rocket,
  Palette,
  Star,
  Gem,
  Crown,
  Trophy,
  Lightbulb,
  Wand2,
  Sparkle,
  Check,
  Heart,
  BookOpen,
  Camera,
  Music,
  Gamepad2,
  Dumbbell,
  ChefHat,
  Compass,
  PenTool,
  MessageSquare,
  Linkedin,
  Github,
  Calendar,
  BarChart3,
  Building,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Layers,
  TrendingUp,
  Shield,
  Users,
  Clock,
  Coffee,
  CheckCircle,
  X,
  Maximize2,
  Minimize2,
  Share2,
  Copy,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
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

// Mock AI function - replace with real API in production
const mockAIContent = async (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "Based on your experience, I suggest adding quantifiable achievements like 'Increased revenue by 30%' or 'Reduced costs by 25%'.",
        "Consider using action verbs: Orchestrated, Spearheaded, Engineered, Transformed, Accelerated, Optimized, Pioneered.",
        "Your skills section should include industry-specific keywords that ATS systems look for.",
        "Add certifications and relevant courses to demonstrate continuous learning.",
        "Include a projects section to showcase practical applications of your skills.",
        "Tailor your CV by matching keywords from the job description.",
        "Start your summary with your strongest achievement and include target industry keywords.",
        "Group similar skills together and highlight your top 5-7 most relevant skills.",
        "Use the STAR method (Situation, Task, Action, Result) for experience descriptions.",
        "Add metrics wherever possible - numbers make your achievements more impressive."
      ];
      resolve(responses[Math.floor(Math.random() * responses.length)]);
    }, 1500);
  });
};

export default function CVBuilder() {
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary: "Senior Software Engineer with 8+ years of experience building scalable web applications. Passionate about clean code, mentorship, and innovative solutions. Proven track record of leading teams and delivering projects that exceed expectations.",
    website: "alexjohnson.dev",
    linkedin: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    jobTitle: "Senior Software Engineer",
    desiredIndustry: "Technology",
    careerLevel: "Senior",
  });

  // All Sections State
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 60%.",
    },
    {
      id: "2",
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Improved application performance by 40%.",
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      institution: "Stanford University",
      degree: "Master of Computer Science",
      year: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Published research on neural networks.",
    },
    {
      id: "2",
      institution: "UC Berkeley",
      degree: "Bachelor of Science in Computer Science",
      year: "2016 - 2020",
      description: "Graduated with honors. President of Computer Science Club.",
    }
  ]);

  const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js", "AWS", "Docker", 
    "Python", "Machine Learning", "Project Management", 
    "Team Leadership", "Agile Methodologies"
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [references, setReferences] = useState<Reference[]>([]);
  const [languages, setLanguages] = useState<Language[]>([
    { id: "1", language: "English", proficiency: "Native" },
    { id: "2", language: "Spanish", proficiency: "Fluent" }
  ]);

  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional level certification for designing distributed systems on AWS.",
    }
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce solution with real-time inventory management.",
      technologies: "React, Node.js, MongoDB, Redis",
      link: "https://github.com/alexjohnson/ecommerce"
    }
  ]);

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "1",
      title: "Employee of the Year",
      date: "2023",
      description: "Recognized for outstanding contributions and leadership.",
    }
  ]);

  const [hobbies, setHobbies] = useState<string[]>([
    "Photography", "Hiking", "Cooking", "Reading Tech Blogs"
  ]);
  const [newHobby, setNewHobby] = useState("");

  // UI State
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState<"modern" | "creative" | "professional">("creative");
  const [isDownloading, setIsDownloading] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [showAIInsights, setShowAIInsights] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string>("");

  // Experience Functions
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: "",
    };
    setExperiences([...experiences, newExp]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  // Education Functions
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      year: "",
      description: "",
    };
    setEducation([...education, newEdu]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  // Skills Functions
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  // AI Functions
  const handleEnhanceSummary = async () => {
    if (!personalInfo.summary.trim()) {
      toast({
        title: "No Summary",
        description: "Please write a summary first to enhance.",
        variant: "destructive",
      });
      return;
    }

    setIsEnhancing(true);
    try {
      const enhanced = await mockAIContent(`Enhance this summary: ${personalInfo.summary}`);
      setPersonalInfo({ ...personalInfo, summary: enhanced });
      toast({
        title: "✨ Summary Enhanced",
        description: "AI has improved your professional summary!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Enhancement Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSuggestSkills = async () => {
    setIsEnhancing(true);
    try {
      const suggested = await mockAIContent("Suggest skills for a software engineer");
      const newSkills = suggested.split(',').map(s => s.trim()).filter(s => s && !skills.includes(s));
      setSkills([...skills, ...newSkills.slice(0, 5)]);
      toast({
        title: "🎯 Skills Suggested",
        description: `Added ${Math.min(5, newSkills.length)} new skills!`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Suggestion Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleAnalyzeJob = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: "No Job Description",
        description: "Please paste a job description first.",
        variant: "destructive",
      });
      return;
    }

    setIsEnhancing(true);
    try {
      const analysis = await mockAIContent(`Analyze job: ${jobDescription.substring(0, 200)}`);
      setAiSuggestions(analysis);
      setShowAIInsights(true);
      toast({
        title: "🔍 Analysis Complete",
        description: "AI has analyzed the job description!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  // Export Functions
  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Mock download
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "📄 PDF Downloaded",
        description: "Your CV has been downloaded as PDF!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadWord = async () => {
    setIsDownloading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "📝 Word Document Downloaded",
        description: "Your CV has been downloaded as Word document!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Creative components
  const CreativeSkillBadge = ({ skill }: { skill: string }) => (
    <Badge 
      variant="secondary" 
      className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100 hover:border-blue-200 transition-all hover:scale-105"
    >
      {skill}
      <button
        onClick={() => removeSkill(skill)}
        className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
      >
        ×
      </button>
    </Badge>
  );

  const TemplateSelector = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Choose Template</h2>
        <Badge variant="outline">{selectedTemplate}</Badge>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { id: "creative", name: "Creative", color: "from-purple-500 to-pink-500", icon: <Sparkle /> },
          { id: "modern", name: "Modern", color: "from-blue-500 to-cyan-500", icon: <TrendingUp /> },
          { id: "professional", name: "Professional", color: "from-gray-700 to-gray-900", icon: <Briefcase /> },
        ].map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id as any)}
            className={cn(
              "p-4 rounded-xl border-2 transition-all",
              selectedTemplate === template.id
                ? "border-primary shadow-lg scale-105"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center text-white mb-2`}>
              {template.icon}
            </div>
            <div className="text-sm font-medium">{template.name}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const AIInsightsPanel = () => (
    <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 mb-6">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-700">
          <Brain className="mr-2 h-5 w-5" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-700">{aiSuggestions || "Analyze a job description to get AI insights!"}</p>
          </div>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setShowAIInsights(false)}
          >
            Close Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  // Calculate completion
  const completionScore = Math.min(100,
    (personalInfo.fullName ? 20 : 0) +
    (personalInfo.summary ? 20 : 0) +
    (experiences.length > 0 ? 20 : 0) +
    (education.length > 0 ? 20 : 0) +
    (skills.length > 3 ? 20 : 0)
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
                <h1 className="relative text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <Rocket className="inline mr-3 h-8 w-8" />
                  CV Builder Pro
                </h1>
              </div>
              <Badge className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-Powered
              </Badge>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Create stunning, professional CVs with AI assistance
            </p>
          </div>

          {/* Template & AI Insights */}
          <TemplateSelector />
          {showAIInsights && <AIInsightsPanel />}

          {/* Job Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Tailor to Job Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste a job description here to get AI-powered tailoring suggestions..."
                  className="min-h-[100px]"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <Button
                  onClick={handleAnalyzeJob}
                  disabled={isEnhancing || !jobDescription}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500"
                >
                  {isEnhancing ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Zap className="mr-2 h-4 w-4" />
                  )}
                  Analyze Job Description
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Builder Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 h-6 w-6" />
                    Build Your CV
                  </CardTitle>
                  <CardDescription>
                    Fill in your details section by section
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-5 mb-6">
                      <TabsTrigger value="personal">
                        <User className="h-4 w-4 mr-2" />
                        Personal
                      </TabsTrigger>
                      <TabsTrigger value="experience">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Experience
                      </TabsTrigger>
                      <TabsTrigger value="education">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Education
                      </TabsTrigger>
                      <TabsTrigger value="skills">
                        <Award className="h-4 w-4 mr-2" />
                        Skills
                      </TabsTrigger>
                      <TabsTrigger value="extras">
                        <Gem className="h-4 w-4 mr-2" />
                        Extras
                      </TabsTrigger>
                    </TabsList>

                    {/* Personal Tab */}
                    <TabsContent value="personal" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Full Name</Label>
                          <Input
                            value={personalInfo.fullName}
                            onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input
                            type="email"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                            placeholder="email@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          <Input
                            value={personalInfo.phone}
                            onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Location</Label>
                          <Input
                            value={personalInfo.location}
                            onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                            placeholder="City, Country"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label>Job Title</Label>
                          <Input
                            value={personalInfo.jobTitle}
                            onChange={(e) => setPersonalInfo({...personalInfo, jobTitle: e.target.value})}
                            placeholder="e.g., Senior Software Engineer"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label className="text-lg font-semibold">Professional Summary</Label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleEnhanceSummary}
                            disabled={isEnhancing}
                          >
                            {isEnhancing ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                              <Sparkles className="mr-2 h-4 w-4" />
                            )}
                            AI Enhance
                          </Button>
                        </div>
                        <Textarea
                          className="min-h-[120px]"
                          value={personalInfo.summary}
                          onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                          placeholder="Write a compelling summary of your professional background..."
                        />
                      </div>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience" className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">Work Experience</h3>
                          <p className="text-sm text-gray-600">Your professional journey</p>
                        </div>
                        <Button onClick={addExperience}>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Experience
                        </Button>
                      </div>

                      {experiences.map((exp) => (
                        <Card key={exp.id} className="mb-4">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                  <div className="space-y-2">
                                    <Label className="text-sm">Company</Label>
                                    <Input
                                      value={exp.company}
                                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-sm">Position</Label>
                                    <Input
                                      value={exp.position}
                                      onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                                    />
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeExperience(exp.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm">Duration</Label>
                                <Input
                                  value={exp.duration}
                                  onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm">Description</Label>
                                <Textarea
                                  value={exp.description}
                                  onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills" className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">Skills</h3>
                          <p className="text-sm text-gray-600">Your expertise and abilities</p>
                        </div>
                        <Button onClick={handleSuggestSkills} disabled={isEnhancing}>
                          {isEnhancing ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <Sparkles className="mr-2 h-4 w-4" />
                          )}
                          AI Suggest Skills
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add a skill"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                            className="flex-1"
                          />
                          <Button onClick={addSkill}>Add</Button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <CreativeSkillBadge key={skill} skill={skill} />
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    {/* Education Tab */}
                    <TabsContent value="education" className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">Education</h3>
                          <p className="text-sm text-gray-600">Your academic background</p>
                        </div>
                        <Button onClick={addEducation}>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Education
                        </Button>
                      </div>

                      {education.map((edu) => (
                        <Card key={edu.id} className="mb-4">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                  <div className="space-y-2">
                                    <Label className="text-sm">Institution</Label>
                                    <Input
                                      value={edu.institution}
                                      onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-sm">Degree</Label>
                                    <Input
                                      value={edu.degree}
                                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                    />
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeEducation(edu.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm">Year</Label>
                                <Input
                                  value={edu.year}
                                  onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm">Description</Label>
                                <Textarea
                                  value={edu.description}
                                  onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    {/* Extras Tab */}
                    <TabsContent value="extras" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Languages */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <Globe className="mr-2 h-5 w-5" />
                              Languages
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {languages.map((lang) => (
                              <div key={lang.id} className="flex items-center justify-between">
                                <span>{lang.language}</span>
                                <Badge variant="outline">{lang.proficiency}</Badge>
                              </div>
                            ))}
                          </CardContent>
                        </Card>

                        {/* Hobbies */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <Heart className="mr-2 h-5 w-5" />
                              Hobbies & Interests
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {hobbies.map((hobby) => (
                                <Badge key={hobby} variant="secondary">
                                  {hobby}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Preview Sidebar */}
            <div className="space-y-6">
              {/* Preview Card */}
              <Card className="sticky top-24">
                <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <CardTitle className="flex items-center">
                    <Eye className="mr-2 h-5 w-5" />
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 h-[500px] overflow-y-auto bg-gray-50">
                    <div className="transform scale-75 origin-top-left w-[133%]">
                      <CVPreview
                        personalInfo={personalInfo}
                        experiences={experiences}
                        education={education}
                        skills={skills}
                        languages={languages}
                        certifications={certifications}
                        projects={projects}
                        achievements={achievements}
                        hobbies={hobbies}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Export Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Export CV
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full"
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <FileText className="mr-2 h-4 w-4" />
                    )}
                    Download PDF
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleDownloadWord}
                    disabled={isDownloading}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Word
                  </Button>

                  {/* Progress */}
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
                      <span className="font-bold">{completionScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${completionScore}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
