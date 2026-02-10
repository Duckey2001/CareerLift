import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Star, Calendar } from "lucide-react";

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
  profileImage?: string;
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

interface CreativeCVPreviewProps {
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
  template?: "modern" | "creative" | "professional";
}

export const CreativeCVPreview = ({
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
}: CreativeCVPreviewProps) => {
  const isEmpty =
    !personalInfo.fullName &&
    !personalInfo.email &&
    experiences.length === 0 &&
    education.length === 0 &&
    skills.length === 0;

  if (isEmpty) {
    return (
      <div className="text-center text-muted-foreground py-12">
        <div className="space-y-2">
          <p>CV preview will appear here</p>
          <p className="text-sm">Fill in your information to see the preview</p>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="bg-white shadow-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Header Section with Gradient Background */}
        <div className="bg-gradient-to-r from-primary via-accent to-primary text-white p-8">
          <div className="flex items-start gap-6">
            {/* Profile Image/Avatar */}
            <div className="flex-shrink-0">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-white/20 bg-white/20 flex items-center justify-center text-2xl font-bold">
                  {personalInfo.fullName
                    ? getInitials(personalInfo.fullName)
                    : "CV"}
                </div>
              )}
            </div>

            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                {personalInfo.fullName || "Your Name"}
              </h1>
              <div className="space-y-1 opacity-90">
                {personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">{personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Professional Summary
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed pl-10">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              {experiences.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">W</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Work Experience
                    </h2>
                  </div>
                  <div className="space-y-6 pl-10">
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        {/* Timeline line */}
                        {index < experiences.length - 1 && (
                          <div className="absolute -left-5 top-5 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                        )}

                        <div className="bg-slate-50 rounded-lg p-4 ml-2">
                          <h3 className="font-bold text-slate-900 text-lg">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                            <span>{exp.company}</span>
                            {exp.duration && (
                              <>
                                <span>•</span>
                                <span className="text-sm">{exp.duration}</span>
                              </>
                            )}
                          </div>
                          {exp.description && (
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {education.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Education
                    </h2>
                  </div>
                  <div className="space-y-4 pl-10">
                    {education.map((edu, index) => (
                      <div key={edu.id} className="relative">
                        <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                        {index < education.length - 1 && (
                          <div className="absolute -left-5 top-5 w-0.5 h-12 bg-gradient-to-b from-orange-200 to-red-200"></div>
                        )}

                        <div className="bg-orange-50 rounded-lg p-4 ml-2">
                          <h3 className="font-bold text-slate-900">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-orange-600 font-medium mb-1">
                            <span>{edu.institution}</span>
                            {edu.year && (
                              <>
                                <span>•</span>
                                <span className="text-sm">{edu.year}</span>
                              </>
                            )}
                          </div>
                          {edu.description && (
                            <p className="text-slate-700 text-sm">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {projects.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Projects
                    </h2>
                  </div>
                  <div className="space-y-4 pl-10">
                    {projects.map((project, index) => (
                      <div key={project.id} className="relative">
                        <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                        {index < projects.length - 1 && (
                          <div className="absolute -left-5 top-5 w-0.5 h-12 bg-gradient-to-b from-green-200 to-blue-200"></div>
                        )}
                        <div className="bg-green-50 rounded-lg p-4 ml-2">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-slate-900">
                              {project.name}
                            </h3>
                            {project.link && (
                              <a
                                href={project.link}
                                className="text-blue-600 text-xs hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Project
                              </a>
                            )}
                          </div>
                          {project.technologies && (
                            <p className="text-green-600 font-medium text-sm mb-2">
                              {project.technologies}
                            </p>
                          )}
                          {project.description && (
                            <p className="text-slate-700 text-sm">
                              {project.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Certifications
                    </h2>
                  </div>
                  <div className="space-y-4 pl-10">
                    {certifications.map((cert, index) => (
                      <div key={cert.id} className="relative">
                        <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                        {index < certifications.length - 1 && (
                          <div className="absolute -left-5 top-5 w-0.5 h-12 bg-gradient-to-b from-yellow-200 to-orange-200"></div>
                        )}
                        <div className="bg-yellow-50 rounded-lg p-4 ml-2">
                          <h3 className="font-bold text-slate-900">
                            {cert.name}
                          </h3>
                          <div className="flex items-center gap-2 text-yellow-600 font-medium mb-1">
                            <span>{cert.issuer}</span>
                            {cert.date && (
                              <>
                                <span>•</span>
                                <span className="text-sm">{cert.date}</span>
                              </>
                            )}
                          </div>
                          {cert.description && (
                            <p className="text-slate-700 text-sm">
                              {cert.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {achievements.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Achievements
                    </h2>
                  </div>
                  <div className="space-y-4 pl-10">
                    {achievements.map((achievement, index) => (
                      <div key={achievement.id} className="relative">
                        <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500"></div>
                        {index < achievements.length - 1 && (
                          <div className="absolute -left-5 top-5 w-0.5 h-12 bg-gradient-to-b from-pink-200 to-red-200"></div>
                        )}
                        <div className="bg-pink-50 rounded-lg p-4 ml-2">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900">
                              {achievement.title}
                            </h3>
                            {achievement.date && (
                              <span className="text-pink-600 text-sm font-medium">
                                • {achievement.date}
                              </span>
                            )}
                          </div>
                          {achievement.description && (
                            <p className="text-slate-700 text-sm">
                              {achievement.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Skills and Other Info */}
            <div className="space-y-6">
              {skills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">Skills</h2>
                  </div>
                  <div className="space-y-3 pl-10">
                    {skills.map((skill, index) => (
                      <div key={skill} className="group">
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                          <span className="text-slate-800 font-medium">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {languages.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Languages
                    </h2>
                  </div>
                  <div className="space-y-3 pl-10">
                    {languages.map((language) => (
                      <div key={language.id} className="group">
                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-3 border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-800 font-medium">
                              {language.language}
                            </span>
                            <span className="text-indigo-600 text-sm font-medium">
                              {language.proficiency}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hobbies */}
              {hobbies.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">H</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Hobbies & Interests
                    </h2>
                  </div>
                  <div className="pl-10">
                    <div className="flex flex-wrap gap-2">
                      {hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* References */}
              {references.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-slate-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      References
                    </h2>
                  </div>
                  <div className="space-y-4 pl-10">
                    {references.map((reference) => (
                      <div
                        key={reference.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <h3 className="font-bold text-slate-900 text-sm">
                          {reference.name}
                        </h3>
                        <p className="text-gray-600 text-xs mb-1">
                          {reference.position} at {reference.company}
                        </p>
                        <div className="space-y-1">
                          {reference.email && (
                            <p className="text-gray-600 text-xs flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {reference.email}
                            </p>
                          )}
                          {reference.phone && (
                            <p className="text-gray-600 text-xs flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {reference.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Decorative Element */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Ready to make an impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-8 py-4 text-center">
          <p className="text-xs text-slate-500">
            Generated with careerLift CV Builder
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
