// Import improved PDF export
import { exportToPDF } from "./pdfExport";

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  website?: string;
}

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

interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

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
}

// Helper function to create downloadable blob
const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Generate Word document content (RTF format for compatibility)
export const generateCVWordContent = (data: CVData): string => {
  const { personalInfo, experiences, education, skills } = data;

  let rtfContent = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}
{\\colortbl;\\red78\\green205\\blue196;\\red255\\green149\\blue0;\\red44\\green62\\blue80;}
\\f0\\fs24`;

  // Header
  rtfContent += `\\pard\\qc\\cf1\\fs36\\b ${personalInfo.fullName || "Your Name"}\\par`;
  rtfContent += `\\fs20\\b0\\cf3`;
  if (personalInfo.email) rtfContent += `${personalInfo.email} | `;
  if (personalInfo.phone) rtfContent += `${personalInfo.phone} | `;
  if (personalInfo.location) rtfContent += `${personalInfo.location}`;
  rtfContent += `\\par\\par`;

  // Summary
  if (personalInfo.summary) {
    rtfContent += `\\pard\\ql\\cf1\\fs24\\b Professional Summary\\par`;
    rtfContent += `\\cf3\\fs20\\b0 ${personalInfo.summary}\\par\\par`;
  }

  // Experience
  if (experiences.length > 0) {
    rtfContent += `\\cf1\\fs24\\b Work Experience\\par`;
    experiences.forEach((exp) => {
      rtfContent += `\\cf3\\fs22\\b ${exp.position}\\par`;
      rtfContent += `\\cf2\\fs20\\b0 ${exp.company}`;
      if (exp.duration) rtfContent += ` | ${exp.duration}`;
      rtfContent += `\\par`;
      if (exp.description) rtfContent += `${exp.description}\\par`;
      rtfContent += `\\par`;
    });
  }

  // Education
  if (education.length > 0) {
    rtfContent += `\\cf1\\fs24\\b Education\\par`;
    education.forEach((edu) => {
      rtfContent += `\\cf3\\fs22\\b ${edu.degree}\\par`;
      rtfContent += `\\cf2\\fs20\\b0 ${edu.institution}`;
      if (edu.year) rtfContent += ` | ${edu.year}`;
      rtfContent += `\\par`;
      if (edu.description) rtfContent += `${edu.description}\\par`;
      rtfContent += `\\par`;
    });
  }

  // Skills
  if (skills.length > 0) {
    rtfContent += `\\cf1\\fs24\\b Skills\\par`;
    rtfContent += `\\cf3\\fs20\\b0 ${skills.join(" • ")}\\par\\par`;
  }

  rtfContent += `\\pard\\qc\\cf3\\fs16 Generated with careerLift CV Builder\\par}`;

  return rtfContent;
};

export const generateApplicationLetterWordContent = (
  data: ApplicationLetterData,
): string => {
  let rtfContent = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}
{\\colortbl;\\red78\\green205\\blue196;\\red255\\green149\\blue0;\\red44\\green62\\blue80;}
\\f0\\fs24`;

  // Header
  rtfContent += `\\pard\\qr\\cf3\\fs20 ${data.applicationDate}\\par\\par`;

  // Applicant info
  rtfContent += `\\pard\\ql\\cf1\\fs24\\b ${data.applicantName || "Your Name"}\\par`;
  rtfContent += `\\cf3\\fs20\\b0`;
  if (data.applicantAddress) rtfContent += `${data.applicantAddress}\\par`;
  if (data.applicantEmail) rtfContent += `${data.applicantEmail}\\par`;
  if (data.applicantPhone) rtfContent += `${data.applicantPhone}\\par`;
  rtfContent += `\\par`;

  // Company info
  rtfContent += `\\cf1\\fs22\\b ${data.companyName || "Company Name"}\\par`;
  if (data.hiringManagerName)
    rtfContent += `\\cf3\\fs20\\b0 Attention: ${data.hiringManagerName}\\par`;
  if (data.jobTitle)
    rtfContent += `\\cf2\\fs20\\b Re: Application for ${data.jobTitle} Position\\par`;
  rtfContent += `\\par`;

  // Letter content
  rtfContent += `\\cf3\\fs20\\b0 ${data.letterContent || "Your application letter content..."}\\par\\par`;

  // Closing
  if (data.closingStatement) {
    rtfContent += `${data.closingStatement}\\par\\par`;
  }

  rtfContent += `\\b Sincerely,\\par ${data.applicantName || "Your Name"}\\par\\par`;
  rtfContent += `\\pard\\qc\\fs16 Generated with careerLift Application Builder\\par}`;

  return rtfContent;
};

// PDF Generation using improved print approach
export const generatePDFFromHTML = async (
  htmlContent: string,
  filename: string,
) => {
  await exportToPDF(htmlContent, filename);
};

// Enhanced HTML generation for better PDF output
export const generatePrintableHTML = (
  content: string,
  title: string,
  type: "cv" | "letter",
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    @page {
      size: A4;
      margin: 0.5in;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #2c3e50;
      background: white;
      margin: 0;
      padding: 0;
      font-size: 12pt;
    }
    .page-break {
      page-break-before: always;
    }
    .no-break {
      page-break-inside: avoid;
    }
    h1, h2, h3 {
      page-break-after: avoid;
    }
    .header {
      background: linear-gradient(135deg, #4ECDC4, #FF9500);
      color: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    .section {
      margin-bottom: 20px;
    }
    .section-title {
      color: #4ECDC4;
      font-size: 14pt;
      font-weight: bold;
      margin-bottom: 10px;
      border-bottom: 2px solid #4ECDC4;
      padding-bottom: 5px;
    }
    .experience-item, .education-item {
      margin-bottom: 15px;
      padding-left: 15px;
      border-left: 3px solid #FF9500;
    }
    .item-title {
      font-weight: bold;
      color: #2c3e50;
    }
    .item-subtitle {
      color: #FF9500;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill {
      background: #f1f1f1;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 10pt;
      color: #2c3e50;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px solid #e2e8f0;
      font-size: 9pt;
      color: #94a3b8;
    }
    @media print {
      body { print-color-adjust: exact; }
      .header { break-inside: avoid; }
      .section { break-inside: avoid; }
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>
  `;
};

// Export functions
export const downloadCVAsWord = (data: CVData) => {
  const rtfContent = generateCVWordContent(data);
  const filename = `CV_${data.personalInfo.fullName?.replace(/\s+/g, "_") || "Document"}.rtf`;
  downloadFile(rtfContent, filename, "application/rtf");
};

export const downloadApplicationLetterAsWord = (
  data: ApplicationLetterData,
) => {
  const rtfContent = generateApplicationLetterWordContent(data);
  const filename = `Application_Letter_${data.applicantName?.replace(/\s+/g, "_") || "Document"}.rtf`;
  downloadFile(rtfContent, filename, "application/rtf");
};

export const downloadCVAsPDF = async (
  htmlContent: string,
  personalInfo: PersonalInfo,
) => {
  const printableHTML = generatePrintableHTML(
    htmlContent,
    `CV - ${personalInfo.fullName}`,
    "cv",
  );
  await generatePDFFromHTML(
    printableHTML,
    `CV_${personalInfo.fullName?.replace(/\s+/g, "_") || "Document"}.pdf`,
  );
};

export const downloadApplicationLetterAsPDF = async (
  htmlContent: string,
  applicantName: string,
) => {
  const printableHTML = generatePrintableHTML(
    htmlContent,
    `Application Letter - ${applicantName}`,
    "letter",
  );
  await generatePDFFromHTML(
    printableHTML,
    `Application_Letter_${applicantName?.replace(/\s+/g, "_") || "Document"}.pdf`,
  );
};
