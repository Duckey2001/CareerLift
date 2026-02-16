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

export const generateApplicationLetterHTML = (
  data: ApplicationLetterData,
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Letter - ${data.applicantName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #2c3e50;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #4ECDC4;
    }
    .applicant-info {
      flex: 1;
    }
    .applicant-name {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
    .contact-info {
      color: #6c757d;
      font-size: 0.9rem;
    }
    .date {
      color: #6c757d;
      font-size: 0.9rem;
    }
    .company-info {
      margin: 2rem 0;
      padding: 1rem;
      background: #f8f9fa;
      border-left: 4px solid #FF9500;
    }
    .company-name {
      font-weight: bold;
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
    .job-title {
      color: #FF9500;
      font-weight: 600;
      margin-top: 0.5rem;
    }
    .letter-content {
      margin: 2rem 0;
      line-height: 1.8;
      white-space: pre-wrap;
    }
    .closing {
      margin-top: 2rem;
      padding-top: 1rem;
    }
    .signature {
      margin-top: 2rem;
      font-weight: 600;
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
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="applicant-info">
      <div class="applicant-name">${data.applicantName || "Your Name"}</div>
      <div class="contact-info">
        ${data.applicantAddress ? `<div>${data.applicantAddress}</div>` : ""}
        ${data.applicantEmail ? `<div>📧 ${data.applicantEmail}</div>` : ""}
        ${data.applicantPhone ? `<div>📞 ${data.applicantPhone}</div>` : ""}
      </div>
    </div>
    <div class="date">
      ${data.applicationDate}
    </div>
  </div>

  <div class="company-info">
    <div class="company-name">${data.companyName || "Company Name"}</div>
    ${data.hiringManagerName ? `<div>Attention: ${data.hiringManagerName}</div>` : ""}
    ${data.jobTitle ? `<div class="job-title">Re: Application for ${data.jobTitle} Position</div>` : ""}
  </div>

  <div class="letter-content">
    ${data.letterContent || "Your application letter content will appear here..."}
  </div>

  ${
    data.closingStatement
      ? `
  <div class="closing">
    ${data.closingStatement}
  </div>
  `
      : ""
  }

  <div class="signature">
    Sincerely,<br>
    ${data.applicantName || "Your Name"}
  </div>

  <div class="footer">
    Generated with careerLift Application Builder
  </div>
</body>
</html>
  `;
};

export const downloadApplicationLetterHTML = (
  data: ApplicationLetterData,
  filename?: string,
) => {
  const html = generateApplicationLetterHTML(data);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    filename ||
    `Application_Letter_${data.applicantName?.replace(/\s+/g, "_") || "Document"}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const openApplicationLetterPreview = (data: ApplicationLetterData) => {
  const html = generateApplicationLetterHTML(data);
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.document.write(html);
    newWindow.document.close();
  }
};
