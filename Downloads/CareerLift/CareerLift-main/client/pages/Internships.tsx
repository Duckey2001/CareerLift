import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
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
import Layout from "@/components/Layout";
import {
  Users,
  Search,
  ExternalLink,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  BookmarkCheck,
  Award,
  Briefcase,
  GraduationCap,
  Target,
} from "lucide-react";

interface InternshipPlatform {
  id: string;
  name: string;
  url: string;
  description: string;
  specialization: string[];
  location: "Global" | "Remote" | "Africa" | "US/Europe";
  verified: boolean;
  rating: number;
  opportunities: number;
}

interface MockInternship {
  id: string;
  title: string;
  company: string;
  platform: string;
  location: string;
  type: "Remote" | "On-site" | "Hybrid";
  duration: string;
  stipend: string;
  description: string;
  requirements: string[];
  skills: string[];
  posted: string;
  applicants: number;
}

const internshipPlatforms: InternshipPlatform[] = [
  {
    id: "1",
    name: "Internships.com",
    url: "https://www.internships.com/",
    description:
      "Global platform offering remote and on-site internships across various fields.",
    specialization: ["Business", "Technology", "Marketing", "Finance"],
    location: "Global",
    verified: true,
    rating: 4.5,
    opportunities: 5000,
  },
  {
    id: "2",
    name: "LinkedIn Jobs",
    url: "https://www.linkedin.com/jobs/internship-jobs/",
    description:
      "Search for internships worldwide using filters like 'Remote,' 'Entry-level,' and industry.",
    specialization: ["All Industries"],
    location: "Global",
    verified: true,
    rating: 4.7,
    opportunities: 12000,
  },
  {
    id: "3",
    name: "Indeed Internships",
    url: "https://www.indeed.com/q-Internship-jobs.html",
    description:
      "Search engine for jobs and internships, including remote and international opportunities.",
    specialization: ["All Industries"],
    location: "Global",
    verified: true,
    rating: 4.3,
    opportunities: 8000,
  },
  {
    id: "4",
    name: "AIESEC",
    url: "https://internship.aiesec.org/",
    description:
      "Global youth-run platform for internships and volunteer programs, including remote roles.",
    specialization: ["Global Development", "Leadership", "Social Impact"],
    location: "Global",
    verified: true,
    rating: 4.6,
    opportunities: 3000,
  },
  {
    id: "5",
    name: "Wintern",
    url: "https://www.wintern.me/",
    description:
      "Remote internships for students and recent graduates, especially in tech and business.",
    specialization: ["Technology", "Business", "Startups"],
    location: "Remote",
    verified: true,
    rating: 4.4,
    opportunities: 1500,
  },
  {
    id: "6",
    name: "RemoteOK",
    url: "https://remoteok.com/remote-internships",
    description:
      "Tech-focused remote internships listed alongside remote jobs.",
    specialization: ["Technology", "Software Development", "Design"],
    location: "Remote",
    verified: true,
    rating: 4.8,
    opportunities: 800,
  },
  {
    id: "7",
    name: "Hands-on Institute",
    url: "https://www.hands-on-institute.org/internships",
    description:
      "Offers remote and international internships in global development fields.",
    specialization: ["Global Development", "Non-profit", "Public Policy"],
    location: "Global",
    verified: true,
    rating: 4.5,
    opportunities: 500,
  },
  {
    id: "8",
    name: "Virtual Internships",
    url: "https://www.virtualinternships.com/",
    description: "Structured remote internship programs with global companies.",
    specialization: ["Business", "Technology", "Marketing", "Finance"],
    location: "Remote",
    verified: true,
    rating: 4.7,
    opportunities: 2000,
  },
  {
    id: "9",
    name: "FaangPath",
    url: "https://www.faangpath.com/",
    description:
      "Platform offering internship opportunities and career coaching for students.",
    specialization: ["Technology", "Software Engineering", "Data Science"],
    location: "Global",
    verified: true,
    rating: 4.6,
    opportunities: 600,
  },
  {
    id: "10",
    name: "YouIntern",
    url: "https://youintern.com/",
    description:
      "Internships in marketing, finance, tech, and more—many are virtual.",
    specialization: ["Marketing", "Finance", "Technology", "Business"],
    location: "Remote",
    verified: true,
    rating: 4.2,
    opportunities: 1200,
  },
];

const mockInternships: MockInternship[] = [
  {
    id: "1",
    title: "Digital Marketing Intern",
    company: "TechStart Africa",
    platform: "Virtual Internships",
    location: "Remote",
    type: "Remote",
    duration: "3 months",
    stipend: "$300/month",
    description:
      "Join our marketing team to help launch new products across African markets. You'll work on social media campaigns, content creation, and market research.",
    requirements: [
      "Marketing or Communications student",
      "Social media experience",
      "English proficiency",
    ],
    skills: [
      "Digital Marketing",
      "Social Media",
      "Content Creation",
      "Analytics",
    ],
    posted: "2 days ago",
    applicants: 45,
  },
  {
    id: "2",
    title: "Software Development Intern",
    company: "Remote Code Solutions",
    platform: "RemoteOK",
    location: "Remote",
    type: "Remote",
    duration: "6 months",
    stipend: "$500/month",
    description:
      "Work with our development team on real client projects. Perfect opportunity to gain hands-on experience with modern web technologies.",
    requirements: [
      "Computer Science student",
      "Basic programming knowledge",
      "Git familiarity",
    ],
    skills: ["JavaScript", "React", "Node.js", "Git"],
    posted: "1 day ago",
    applicants: 89,
  },
  {
    id: "3",
    title: "Business Analysis Intern",
    company: "Global Consulting Group",
    platform: "AIESEC",
    location: "Nairobi, Kenya",
    type: "Hybrid",
    duration: "4 months",
    stipend: "KSh 15,000/month",
    description:
      "Support our consulting team in analyzing business processes and developing recommendations for client organizations.",
    requirements: [
      "Business or Economics student",
      "Analytical skills",
      "Excel proficiency",
    ],
    skills: ["Business Analysis", "Excel", "PowerPoint", "Data Analysis"],
    posted: "3 days ago",
    applicants: 67,
  },
  {
    id: "4",
    title: "Graphic Design Intern",
    company: "Creative Agency Plus",
    platform: "Wintern",
    location: "Remote",
    type: "Remote",
    duration: "3 months",
    stipend: "$250/month",
    description:
      "Create visual content for various clients including logos, social media graphics, and marketing materials.",
    requirements: [
      "Design student or portfolio",
      "Adobe Creative Suite",
      "Creative thinking",
    ],
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Design",
      "Typography",
    ],
    posted: "5 days ago",
    applicants: 34,
  },
  {
    id: "5",
    title: "Data Science Intern",
    company: "DataLab Africa",
    platform: "FaangPath",
    location: "Cape Town, South Africa",
    type: "On-site",
    duration: "6 months",
    stipend: "R8,000/month",
    description:
      "Work on real data science projects including machine learning models and data visualization dashboards.",
    requirements: [
      "Statistics/Math student",
      "Python knowledge",
      "Machine learning basics",
    ],
    skills: ["Python", "Machine Learning", "Data Visualization", "Statistics"],
    posted: "1 week ago",
    applicants: 123,
  },
  {
    id: "6",
    title: "Content Writing Intern",
    company: "Digital Content Hub",
    platform: "YouIntern",
    location: "Remote",
    type: "Remote",
    duration: "4 months",
    stipend: "$200/month",
    description:
      "Create engaging content for blogs, websites, and social media platforms across various industries.",
    requirements: [
      "Communications student",
      "Excellent writing skills",
      "Research abilities",
    ],
    skills: ["Content Writing", "SEO", "Research", "Social Media"],
    posted: "4 days ago",
    applicants: 56,
  },
];

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [activeTab, setActiveTab] = useState("platforms");
  const [savedInternships, setSavedInternships] = useState<string[]>([]);

  const filteredInternships = useMemo(() => {
    return mockInternships.filter((internship) => {
      const matchesSearch =
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesType =
        selectedType === "all" || internship.type === selectedType;
      const matchesLocation =
        selectedLocation === "all" ||
        internship.location
          .toLowerCase()
          .includes(selectedLocation.toLowerCase());
      const matchesDuration =
        selectedDuration === "all" ||
        internship.duration.includes(selectedDuration);

      return matchesSearch && matchesType && matchesLocation && matchesDuration;
    });
  }, [searchTerm, selectedType, selectedLocation, selectedDuration]);

  const toggleSaveInternship = (internshipId: string) => {
    setSavedInternships((prev) =>
      prev.includes(internshipId)
        ? prev.filter((id) => id !== internshipId)
        : [...prev, internshipId],
    );
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌍 Virtual Internship Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect to remote internships with real-world tasks and verified
              experience for your CV. Access global opportunities from trusted
              platforms.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-muted-foreground">
                  Verified Platforms
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">30,000+</div>
                <div className="text-sm text-muted-foreground">
                  Available Internships
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">
                  Remote Opportunities
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-muted-foreground">
                  Offer Certificates
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="platforms">
                🔗 Internship Platforms
              </TabsTrigger>
              <TabsTrigger value="opportunities">
                💼 Current Opportunities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="platforms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Free/Remote Internship Platforms
                  </CardTitle>
                  <CardDescription>
                    Trusted platforms offering remote and international
                    internship opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {internshipPlatforms.map((platform) => (
                      <Card
                        key={platform.id}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">
                                {platform.name}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                {platform.verified && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-green-100 text-green-800"
                                  >
                                    Verified
                                  </Badge>
                                )}
                                <Badge variant="outline">
                                  {platform.location}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {platform.rating}
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {platform.description}
                          </p>

                          <div>
                            <div className="text-sm font-medium mb-2">
                              Specializations:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {platform.specialization.map((spec) => (
                                <Badge
                                  key={spec}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              {platform.opportunities.toLocaleString()}{" "}
                              opportunities
                            </div>
                          </div>

                          <Button className="w-full" asChild>
                            <a
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Visit Platform
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-6">
              {/* Search and Filters */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search internships..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Work Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="Remote">Remote</SelectItem>
                        <SelectItem value="On-site">On-site</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="nairobi">Nairobi</SelectItem>
                        <SelectItem value="cape town">Cape Town</SelectItem>
                        <SelectItem value="lagos">Lagos</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedDuration}
                      onValueChange={setSelectedDuration}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Durations</SelectItem>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="4">4 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Internship Listings */}
              <div className="space-y-6">
                {filteredInternships.map((internship) => (
                  <Card
                    key={internship.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl">
                            {internship.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {internship.company}
                          </CardDescription>

                          <div className="flex items-center gap-4 text-muted-foreground mt-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {internship.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {internship.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              {internship.stipend}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline">{internship.type}</Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700"
                            >
                              {internship.platform}
                            </Badge>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSaveInternship(internship.id)}
                        >
                          {savedInternships.includes(internship.id) ? (
                            <BookmarkCheck className="h-4 w-4 text-primary" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {internship.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.requirements.map((req, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Skills you'll gain:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-muted-foreground">
                            Posted {internship.posted}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            {internship.applicants} applicants
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredInternships.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No internships found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria to find more
                    opportunities.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
