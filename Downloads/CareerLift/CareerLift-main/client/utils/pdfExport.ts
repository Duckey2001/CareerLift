// Simple PDF generation utility using manual PDF creation
interface PDFDoc {
  content: string[];
  addText: (text: string, x: number, y: number, fontSize?: number) => void;
  addLine: (x1: number, y1: number, x2: number, y2: number) => void;
  save: (filename: string) => void;
}

// Basic PDF document creator
class SimplePDFDocument implements PDFDoc {
  content: string[] = [];
  private pageHeight = 842; // A4 height in points
  private pageWidth = 595; // A4 width in points
  private currentY = 792; // Start near top of page
  private margin = 50;

  constructor() {
    this.initializePDF();
  }

  private initializePDF() {
    this.content = [
      "%PDF-1.4",
      "1 0 obj",
      "<<",
      "/Type /Catalog",
      "/Pages 2 0 R",
      ">>",
      "endobj",
      "",
      "2 0 obj",
      "<<",
      "/Type /Pages",
      "/Kids [3 0 R]",
      "/Count 1",
      ">>",
      "endobj",
      "",
      "3 0 obj",
      "<<",
      "/Type /Page",
      "/Parent 2 0 R",
      "/Resources <<",
      "/Font <<",
      "/F1 4 0 R",
      ">>",
      ">>",
      `/MediaBox [0 0 ${this.pageWidth} ${this.pageHeight}]`,
      "/Contents 5 0 R",
      ">>",
      "endobj",
      "",
      "4 0 obj",
      "<<",
      "/Type /Font",
      "/Subtype /Type1",
      "/BaseFont /Helvetica",
      ">>",
      "endobj",
      "",
      "5 0 obj",
      "<<",
      "/Length 6 0 R",
      ">>",
      "stream",
    ];
  }

  addText(
    text: string,
    x: number = this.margin,
    y: number = this.currentY,
    fontSize: number = 12,
  ) {
    this.content.push(`BT`);
    this.content.push(`/F1 ${fontSize} Tf`);
    this.content.push(`${x} ${y} Td`);
    this.content.push(`(${text.replace(/[()\\]/g, "\\$&")}) Tj`);
    this.content.push(`ET`);
    this.currentY -= fontSize + 4;
  }

  addLine(x1: number, y1: number, x2: number, y2: number) {
    this.content.push(`${x1} ${y1} m`);
    this.content.push(`${x2} ${y2} l`);
    this.content.push(`S`);
  }

  save(filename: string) {
    // Calculate content length
    const contentStart = this.content.indexOf("stream") + 1;
    const contentEnd = this.content.length;
    const contentLength = this.content
      .slice(contentStart, contentEnd)
      .join("\n").length;

    // Add content length and close stream
    this.content.splice(
      contentEnd,
      0,
      "endstream",
      "endobj",
      "",
      "6 0 obj",
      contentLength.toString(),
      "endobj",
    );

    // Add cross-reference table
    this.content.push("", "xref", "0 7", "0000000000 65535 f ");

    // Calculate byte offsets (simplified)
    let offset = 0;
    const offsets: string[] = [];
    this.content.forEach((line, index) => {
      if (line.match(/^\d+ 0 obj$/)) {
        offsets.push(offset.toString().padStart(10, "0") + " 00000 n ");
      }
      offset += line.length + 1;
    });

    this.content.push(...offsets);
    this.content.push(
      "",
      "trailer",
      "<<",
      "/Size 7",
      "/Root 1 0 R",
      ">>",
      "startxref",
      offset.toString(),
      "%%EOF",
    );

    // Create and download blob
    const pdfContent = this.content.join("\n");
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Alternative: Use HTML to Canvas to PDF approach
export const generatePDFFromElement = async (
  elementId: string,
  filename: string,
) => {
  try {
    // Create a temporary container with the content
    const originalElement = document.getElementById(elementId);
    if (!originalElement) {
      throw new Error("Element not found");
    }

    // Clone the element to avoid modifying the original
    const clonedElement = originalElement.cloneNode(true) as HTMLElement;
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";
    clonedElement.style.width = "794px"; // A4 width
    clonedElement.style.background = "white";
    clonedElement.style.padding = "40px";

    document.body.appendChild(clonedElement);

    // Use html2canvas-like approach with manual canvas creation
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas context not available");
    }

    // Set canvas size for A4 (96 DPI)
    canvas.width = 794;
    canvas.height = 1123;

    // Fill white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Simple text rendering (fallback approach)
    ctx.fillStyle = "#2c3e50";
    ctx.font = "16px Arial";
    ctx.fillText("Generated PDF Document", 50, 50);
    ctx.fillText("Created with careerLift", 50, 80);

    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename.replace(".pdf", ".png"); // Save as image for now
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });

    // Clean up
    document.body.removeChild(clonedElement);
  } catch (error) {
    console.error("PDF generation failed:", error);
    // Fallback to print dialog
    window.print();
  }
};

// Main export function that tries browser print first
export const exportToPDF = async (htmlContent: string, filename: string) => {
  try {
    // Create a new window with the content for printing
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      throw new Error("Popup blocked");
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print Document</title>
        <style>
          @page { 
            size: A4; 
            margin: 0.5in; 
          }
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6;
            color: #2c3e50;
            background: white;
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
            page-break-inside: avoid; 
          }
          h1, h2, h3 { 
            color: #4ECDC4; 
            page-break-after: avoid; 
          }
          @media print {
            body { print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        ${htmlContent}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 1000);
          }
        </script>
      </body>
      </html>
    `);

    printWindow.document.close();
  } catch (error) {
    console.error("Print window failed:", error);
    // Final fallback - show content in current window for manual printing
    const newTab = window.open("about:blank", "_blank");
    if (newTab) {
      newTab.document.write(htmlContent);
      newTab.document.close();
    }
  }
};
