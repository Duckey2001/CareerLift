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
}

interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

export const generateCVHTML = (
  data: CVData,
  template: "modern" | "creative" | "professional" = "professional",
): string => {
  const { personalInfo, experiences, education, skills } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${personalInfo.fullName || "CV"}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
    }
    .creative-header {
      background: linear-gradient(135deg, #4ECDC4, #FF9500, #4ECDC4);
      color: white;
      padding: 2rem;
      border-radius: 1rem 1rem 0 0;
      margin: -2rem -2rem 2rem -2rem;
    }
    .creative-avatar {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      border: 4px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .section-icon {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .work-icon { background: linear-gradient(135deg, #10b981, #14b8a6); }
    .edu-icon { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .skills-icon { background: linear-gradient(135deg, #8b5cf6, #ec4899); }
    .header {
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }
    .name {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 0.9rem;
      color: #64748b;
    }
    .section {
      margin-bottom: 2rem;
    }
    .section-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1e293b;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 0.5rem;
    }
    .experience-item, .education-item {
      margin-bottom: 1.5rem;
      padding-left: 1rem;
      border-left: 3px solid #3b82f6;
    }
    .item-title {
      font-weight: 600;
      color: #1e293b;
    }
    .item-subtitle {
      color: #64748b;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .item-description {
      color: #374151;
      line-height: 1.6;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .skill {
      background: #f1f5f9;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      color: #475569;
    }
    .footer {
      text-align: center;
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
      font-size: 0.75rem;
      color: #94a3b8;
    }
    @media print {
      body { padding: 1rem; }
      .header { page-break-after: avoid; }
      .section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  ${
    template === "creative"
      ? `
  <div class="creative-header">
    <div style="display: flex; gap: 1.5rem; align-items: start;">
      <div class="creative-avatar">
        ${
          personalInfo.fullName
            ? personalInfo.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
            : "CV"
        }
      </div>
      <div style="flex: 1;">
        <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">${personalInfo.fullName || "Your Name"}</h1>
        <div style="opacity: 0.9; display: flex; flex-direction: column; gap: 0.25rem;">
          ${personalInfo.email ? `<div>📧 ${personalInfo.email}</div>` : ""}
          ${personalInfo.phone ? `<div>📞 ${personalInfo.phone}</div>` : ""}
          ${personalInfo.location ? `<div>📍 ${personalInfo.location}</div>` : ""}
        </div>
      </div>
    </div>
  </div>
  `
      : `
  <div class="header">
    <h1 class="name">${personalInfo.fullName || "Your Name"}</h1>
    <div class="contact-info">
      ${personalInfo.email ? `<span>📧 ${personalInfo.email}</span>` : ""}
      ${personalInfo.phone ? `<span>📞 ${personalInfo.phone}</span>` : ""}
      ${personalInfo.location ? `<span>📍 ${personalInfo.location}</span>` : ""}
    </div>
  </div>
  `
  }

  ${
    personalInfo.summary
      ? `
  <div class="section">
    <h2 class="section-title">Professional Summary</h2>
    <p class="item-description">${personalInfo.summary}</p>
  </div>
  `
      : ""
  }

  ${
    skills.length > 0
      ? `
  <div class="section">
    <h2 class="section-title">Skills</h2>
    <div class="skills">
      ${skills.map((skill) => `<span class="skill">${skill}</span>`).join("")}
    </div>
  </div>
  `
      : ""
  }

  ${
    experiences.length > 0
      ? `
  <div class="section">
    <h2 class="section-title">
      ${template === "creative" ? '<span class="section-icon work-icon">W</span>' : ""}
      Work Experience
    </h2>
    ${experiences
      .map(
        (exp) => `
    <div class="experience-item" ${template === "creative" ? 'style="background: #f8fafc; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;"' : ""}>
      <div class="item-title">${exp.position}</div>
      <div class="item-subtitle" ${template === "creative" ? 'style="color: #3b82f6; font-weight: 500;"' : ""}>${exp.company}${exp.duration ? ` • ${exp.duration}` : ""}</div>
      ${exp.description ? `<div class="item-description">${exp.description}</div>` : ""}
    </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  ${
    education.length > 0
      ? `
  <div class="section">
    <h2 class="section-title">Education</h2>
    ${education
      .map(
        (edu) => `
    <div class="education-item">
      <div class="item-title">${edu.degree}</div>
      <div class="item-subtitle">${edu.institution}${edu.year ? ` • ${edu.year}` : ""}</div>
      ${edu.description ? `<div class="item-description">${edu.description}</div>` : ""}
    </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <div class="footer">
    Generated with careerLift CV Builder
  </div>
</body>
</html>
  `;
};

export const downloadHTML = (
  data: CVData,
  template: "modern" | "creative" | "professional" = "professional",
  filename?: string,
) => {
  const html = generateCVHTML(data, template);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || `${data.personalInfo.fullName || "CV"}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const openPreviewWindow = (
  data: CVData,
  template: "modern" | "creative" | "professional" = "professional",
) => {
  const html = generateCVHTML(data, template);
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.document.write(html);
    newWindow.document.close();
  }
};

// AI Assistant Mock Functions
export const enhanceSummary = async (
  currentSummary: string,
  personalInfo: PersonalInfo,
): Promise<string> => {
  // Mock AI enhancement - in real app this would call an AI API
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!currentSummary.trim()) {
    return `Motivated professional with strong expertise in ${personalInfo.fullName ? "various fields" : "my field"}. Passionate about delivering high-quality results and contributing to team success. Seeking opportunities to leverage my skills and experience to drive organizational growth.`;
  }

  // Enhance existing summary
  const enhanced =
    currentSummary +
    (currentSummary.endsWith(".") ? "" : ".") +
    " Known for strong problem-solving abilities, excellent communication skills, and the ability to work effectively in both independent and collaborative environments.";

  return enhanced;
};

export const suggestSkills = async (
  experiences: Experience[],
  education: Education[],
): Promise<string[]> => {
  // Mock AI skill suggestions
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const allText = [
    ...experiences.map(
      (exp) => `${exp.position} ${exp.company} ${exp.description}`,
    ),
    ...education.map(
      (edu) => `${edu.degree} ${edu.institution} ${edu.description}`,
    ),
  ]
    .join(" ")
    .toLowerCase();

  const skillSuggestions = [
    "Communication",
    "Leadership",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Customer Service",
    "Data Analysis",
  ];

  // Add technical skills based on content
  if (
    allText.includes("software") ||
    allText.includes("computer") ||
    allText.includes("technology")
  ) {
    skillSuggestions.push(
      "Software Development",
      "Technical Support",
      "System Administration",
    );
  }

  if (allText.includes("design") || allText.includes("creative")) {
    skillSuggestions.push(
      "Creative Design",
      "Adobe Creative Suite",
      "UI/UX Design",
    );
  }

  if (allText.includes("marketing") || allText.includes("sales")) {
    skillSuggestions.push(
      "Digital Marketing",
      "Sales Strategy",
      "Social Media Management",
    );
  }

  return skillSuggestions.slice(0, 8);
};
