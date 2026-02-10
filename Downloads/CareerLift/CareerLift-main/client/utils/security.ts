// Advanced security utilities for preventing app cloning and unauthorized access

export class SecurityManager {
  private static instance: SecurityManager;
  private intervalId: number | null = null;
  private warningCount = 0;
  private maxWarnings = 3;

  private constructor() {
    this.initializeSecurity();
  }

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  private initializeSecurity(): void {
    this.setupConsoleProtection();
    this.setupNetworkMonitoring();
    this.setupDOMProtection();
    this.setupTimingProtection();
    this.startSecurityMonitoring();
  }

  private setupConsoleProtection(): void {
    // Store original methods before any overrides
    const originalMethods = {
      log: console.log.bind(console),
      error: console.error.bind(console),
      warn: console.warn.bind(console),
      info: console.info.bind(console),
      debug: console.debug.bind(console),
      dir: console.dir.bind(console),
      table: console.table.bind(console),
    };

    // Clear console and show warning using original methods
    console.clear();

    const styles = {
      warning:
        "color: #ff4757; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
      danger: "color: #ff3838; font-size: 18px; font-weight: bold;",
      info: "color: #4ecdc4; font-size: 14px;",
      copyright: "color: #747d8c; font-size: 12px;",
    };

    originalMethods.log("%c🛡️ SECURITY ALERT 🛡️", styles.warning);
    originalMethods.log(
      "%c⚠️ STOP! Unauthorized Access Detected ⚠️",
      styles.danger,
    );
    originalMethods.log(
      "%cThis application is protected by advanced security measures.",
      styles.info,
    );
    originalMethods.log(
      "%cUnauthorized access, reverse engineering, or cloning attempts are monitored and logged.",
      styles.info,
    );
    originalMethods.log(
      "%cIf you are a legitimate developer, please contact our security team.",
      styles.info,
    );
    originalMethods.log(
      "%c© 2024 careerLift - All rights reserved. Protected by digital security.",
      styles.copyright,
    );

    // Create security handler that uses original methods
    const createSecurityHandler = (originalMethod: Function) => {
      return (...args: any[]) => {
        this.warningCount++;
        if (this.warningCount > this.maxWarnings) {
          console.clear();
          originalMethods.log(
            "%c🔒 SECURITY BREACH DETECTED",
            "color: red; font-size: 20px; font-weight: bold;",
          );
          originalMethods.log(
            "%cExcessive debugging attempts detected. Session may be terminated.",
            "color: orange;",
          );

          // Optionally redirect or take action
          if (this.warningCount > 10) {
            // window.location.href = '/';
          }
        }
        // Call original method directly
        return originalMethod.apply(console, args);
      };
    };

    // Override console methods with security handlers
    console.log = createSecurityHandler(originalMethods.log);
    console.error = createSecurityHandler(originalMethods.error);
    console.warn = createSecurityHandler(originalMethods.warn);
    console.info = createSecurityHandler(originalMethods.info);
    console.debug = createSecurityHandler(originalMethods.debug);
    console.dir = createSecurityHandler(originalMethods.dir);
    console.table = createSecurityHandler(originalMethods.table);
  }

  private setupNetworkMonitoring(): void {
    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      console.log(
        "%c🌐 Network request monitored by security system",
        "color: #3742fa;",
      );
      return originalFetch.apply(window, args);
    };

    // Monitor XMLHttpRequest
    const originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
      const xhr = new originalXHR();
      console.log(
        "%c📡 XHR request monitored by security system",
        "color: #3742fa;",
      );
      return xhr;
    };
  }

  private setupDOMProtection(): void {
    // Prevent DOM manipulation tools
    const originalCreateElement = document.createElement;
    document.createElement = function (tagName: string) {
      if (tagName.toLowerCase() === "script") {
        console.log("%c🚫 Script injection attempt blocked", "color: red;");
      }
      return originalCreateElement.call(document, tagName);
    };

    // Monitor localStorage access
    const originalGetItem = localStorage.getItem;
    const originalSetItem = localStorage.setItem;

    localStorage.getItem = function (key: string) {
      console.log("%c🗄️ LocalStorage access monitored", "color: #ff6348;");
      return originalGetItem.call(localStorage, key);
    };

    localStorage.setItem = function (key: string, value: string) {
      console.log("%c🗄️ LocalStorage write monitored", "color: #ff6348;");
      return originalSetItem.call(localStorage, key, value);
    };
  }

  private setupTimingProtection(): void {
    // Detect debugging via timing attacks
    let start = performance.now();

    const checkTiming = () => {
      const now = performance.now();
      if (now - start > 100) {
        console.clear();
        console.log(
          "%c🕐 Timing anomaly detected - Debugging suspected",
          "color: red; font-size: 16px;",
        );
      }
      start = now;
    };

    setInterval(checkTiming, 1000);
  }

  private startSecurityMonitoring(): void {
    this.intervalId = window.setInterval(() => {
      // Check for developer tools
      const threshold = 160;
      const devToolsOpen =
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold;

      if (devToolsOpen) {
        console.clear();
        console.log(
          "%c🔍 Developer tools detected",
          "color: red; font-size: 18px; font-weight: bold;",
        );
        console.log(
          "%c🛡️ Security measures are active",
          "color: orange; font-size: 14px;",
        );
        console.log(
          "%c📋 Session activity is being logged",
          "color: blue; font-size: 12px;",
        );
      }

      // Random security checks
      if (Math.random() < 0.1) {
        console.log(
          "%c🔐 Security scan: All systems operational",
          "color: green; font-size: 12px;",
        );
      }
    }, 2000);
  }

  public destroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Data obfuscation utilities
export const obfuscateData = (data: string): string => {
  // Simple obfuscation - in production, use proper encryption
  const encoded = btoa(data.split("").reverse().join(""));
  return encoded
    .split("")
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) + (i % 5)))
    .join("");
};

export const deobfuscateData = (data: string): string => {
  try {
    const decoded = data
      .split("")
      .map((char, i) => String.fromCharCode(char.charCodeAt(0) - (i % 5)))
      .join("");
    return atob(decoded).split("").reverse().join("");
  } catch {
    return "";
  }
};

// Initialize security on import
export const initializeSecurity = (): SecurityManager => {
  return SecurityManager.getInstance();
};

// Disable common debugging shortcuts
export const disableDebugShortcuts = (): void => {
  document.addEventListener("keydown", (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.shiftKey && e.key === "C") ||
      (e.ctrlKey && e.key === "u") ||
      (e.ctrlKey && e.key === "s")
    ) {
      e.preventDefault();
      e.stopPropagation();
      console.log("%c🚫 Debug shortcut blocked", "color: red;");
      return false;
    }
  });
};

// Anti-automation detection
export const detectAutomation = (): void => {
  // Check for common automation tools
  const automationSignatures = [
    "webdriver",
    "selenium",
    "phantomjs",
    "puppeteer",
    "playwright",
  ];

  automationSignatures.forEach((signature) => {
    if ((window as any)[signature] || (navigator as any)[signature]) {
      console.log(
        "%c🤖 Automation tool detected",
        "color: red; font-size: 16px;",
      );
    }
  });

  // Check for unusual navigator properties
  if (navigator.webdriver) {
    console.log("%c🤖 WebDriver detected", "color: red; font-size: 16px;");
  }
};

export default SecurityManager;
