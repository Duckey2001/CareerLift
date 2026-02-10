import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Building, Mail, Phone, MapPin, Target, Sparkles, PenTool, Award, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApplicationLetterData {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantAddress: string;
  companyName: string;
  hiringManagerName: string;
  jobTitle: string;
  jobDescription: string;
  applicationDate: string;
  letterContent: string;
  closingStatement: string;
  skills?: string[];
  achievements?: string[];
}

interface ApplicationLetterPreviewProps {
  letterData: ApplicationLetterData;
  template?: "modern" | "creative" | "professional" | "minimal";
}

export const ApplicationLetterPreview = ({
  letterData,
  template = "creative",
}: ApplicationLetterPreviewProps) => {
  const isEmpty = !letterData.applicantName && !letterData.letterContent;

  // Template styles
  const templateStyles = {
    modern: {
      card: "bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100 shadow-xl",
      header: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white",
      accent: "text-blue-600",
      border: "border-blue-200",
    },
    creative: {
      card: "bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 border-2 border-purple-100 shadow-2xl",
      header: "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white",
      accent: "text-purple-600",
      border: "border-purple-200",
    },
    professional: {
      card: "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-lg",
      header: "bg-gradient-to-r from-gray-800 to-gray-700 text-white",
      accent: "text-gray-800",
      border: "border-gray-300",
    },
    minimal: {
      card: "bg-white border border-gray-100 shadow-sm",
      header: "bg-gradient-to-r from-gray-50 to-white border-b",
      accent: "text-gray-700",
      border: "border-gray-100",
    },
  };

  const styles = templateStyles[template];

  if (isEmpty) {
    return (
      <div className={cn(
        "relative overflow-hidden rounded-xl p-8 text-center",
        styles.card
      )}>
        {/* Floating decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-pink-200 to-rose-200 opacity-30"></div>
        
        <div className="relative space-y-4 py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6 mx-auto">
            <PenTool className="h-10 w-10 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Your Application Letter Awaits</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Fill in your information to create a compelling, professional application letter that stands out
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span>AI-Powered Suggestions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Target className="h-4 w-4 text-green-500" />
              <span>ATS Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award className="h-4 w-4 text-blue-500" />
              <span>Professional Templates</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 opacity-20 blur-xl"></div>
      
      <Card className={cn(
        "relative overflow-hidden border-0 shadow-2xl",
        styles.card
      )}>
        {/* Letter Header with gradient */}
        <div className={cn(
          "relative overflow-hidden px-8 py-6",
          styles.header
        )}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Application Letter</h1>
                <p className="text-white/80 text-sm">Prepared with careerLift</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-white/90">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">{letterData.applicationDate || new Date().toLocaleDateString()}</span>
              </div>
              <div className="text-xs text-white/70 mt-1">Date of Application</div>
            </div>
          </div>
        </div>

        <CardContent className="p-8 space-y-8">
          {/* Applicant Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sender Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  template === "creative" ? "bg-gradient-to-r from-purple-100 to-pink-100" :
                  template === "modern" ? "bg-gradient-to-r from-blue-100 to-cyan-100" :
                  "bg-gray-100"
                )}>
                  <User className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h3 className="font-bold text-lg">Applicant Information</h3>
              </div>
              
              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{letterData.applicantName || "Your Name"}</div>
                    <div className="text-sm text-gray-600">Primary Applicant</div>
                  </div>
                </div>
                
                {letterData.applicantEmail && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-green-50 to-emerald-50">
                      <Mail className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{letterData.applicantEmail}</div>
                      <div className="text-gray-600">Email Address</div>
                    </div>
                  </div>
                )}
                
                {letterData.applicantPhone && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-50 to-pink-50">
                      <Phone className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{letterData.applicantPhone}</div>
                      <div className="text-gray-600">Contact Number</div>
                    </div>
                  </div>
                )}
                
                {letterData.applicantAddress && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-amber-50 to-orange-50">
                      <MapPin className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{letterData.applicantAddress}</div>
                      <div className="text-gray-600">Location</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recipient Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  template === "creative" ? "bg-gradient-to-r from-pink-100 to-rose-100" :
                  template === "modern" ? "bg-gradient-to-r from-cyan-100 to-blue-100" :
                  "bg-gray-100"
                )}>
                  <Building className={cn("h-5 w-5", styles.accent)} />
                </div>
                <h3 className="font-bold text-lg">To</h3>
              </div>
              
              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-50 to-rose-50">
                    <Building className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{letterData.companyName || "Company Name"}</div>
                    <div className="text-sm text-gray-600">Organization</div>
                  </div>
                </div>
                
                {letterData.hiringManagerName && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50">
                      <User className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">Attn: {letterData.hiringManagerName}</div>
                      <div className="text-gray-600">Hiring Manager</div>
                    </div>
                  </div>
                )}
                
                {letterData.jobTitle && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-green-50 to-emerald-50">
                      <Briefcase className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{letterData.jobTitle}</div>
                      <div className="text-gray-600">Position Applied For</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Letter Content - Main Body */}
          <div className="space-y-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Target className={cn("h-5 w-5", styles.accent)} />
                Application Letter
              </h3>
              {letterData.jobTitle && (
                <div className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  template === "creative" ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800" :
                  template === "modern" ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800" :
                  "bg-gray-100 text-gray-800"
                )}>
                  Re: {letterData.jobTitle}
                </div>
              )}
            </div>
            
            <div className={cn(
              "p-6 rounded-xl space-y-4",
              template === "creative" ? "bg-gradient-to-br from-purple-50/50 to-pink-50/50" :
              template === "modern" ? "bg-gradient-to-br from-blue-50/50 to-cyan-50/50" :
              "bg-gray-50"
            )}>
              {letterData.letterContent ? (
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm md:text-base">
                  {letterData.letterContent}
                </div>
              ) : (
                <div className="text-center py-8 space-y-2">
                  <PenTool className="h-12 w-12 text-gray-300 mx-auto" />
                  <p className="text-gray-500 font-medium">Your letter content will appear here</p>
                  <p className="text-sm text-gray-400">Start writing to see your application letter come to life</p>
                </div>
              )}
            </div>

            {/* Skills & Achievements Section (Optional) */}
            {(letterData.skills && letterData.skills.length > 0) || 
             (letterData.achievements && letterData.achievements.length > 0) ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {letterData.skills && letterData.skills.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className={cn("h-5 w-5", styles.accent)} />
                      <h4 className="font-semibold">Key Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {letterData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm",
                            template === "creative" ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800" :
                            template === "modern" ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800" :
                            "bg-gray-100 text-gray-800"
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {letterData.achievements && letterData.achievements.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className={cn("h-5 w-5", styles.accent)} />
                      <h4 className="font-semibold">Notable Achievements</h4>
                    </div>
                    <div className="space-y-2">
                      {letterData.achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className={cn(
                            "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                            template === "creative" ? "bg-gradient-to-r from-purple-500 to-pink-500" :
                            template === "modern" ? "bg-gradient-to-r from-blue-500 to-cyan-500" :
                            "bg-gray-600"
                          )}>
                            <span className="text-white text-xs">{index + 1}</span>
                          </div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          {/* Closing Section */}
          {(letterData.closingStatement || letterData.applicantName) && (
            <div className={cn(
              "p-6 rounded-xl space-y-4 border",
              styles.border
            )}>
              {letterData.closingStatement && (
                <div className="text-gray-700 leading-relaxed">
                  {letterData.closingStatement}
                </div>
              )}
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className="text-sm text-gray-500">Sincerely,</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full",
                    template === "creative" ? "bg-gradient-to-r from-purple-100 to-pink-100" :
                    template === "modern" ? "bg-gradient-to-r from-blue-100 to-cyan-100" :
                    "bg-gray-100"
                  )}>
                    <User className={cn("h-6 w-6", styles.accent)} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      {letterData.applicantName || "Your Name"}
                    </div>
                    <div className="text-sm text-gray-600">Applicant</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Powered by careerLift</div>
                  <div className="text-xs text-gray-500">Professional Application Builder</div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 space-y-1 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>ATS Optimized Format</span>
                </div>
                <div>Confidence Score: 92%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
