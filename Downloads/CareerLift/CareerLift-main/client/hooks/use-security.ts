import { useEffect } from "react";

interface SecurityConfig {
  disableRightClick?: boolean;
  disableTextSelection?: boolean;
  disableDevTools?: boolean;
  disableCopy?: boolean;
  disablePrint?: boolean;
  showConsoleWarning?: boolean;
}

export const useSecurity = (config: SecurityConfig = {}) => {
  const {
    disableRightClick = true,
    disableTextSelection = true,
    disableDevTools = true,
    disableCopy = true,
    disablePrint = false,
    showConsoleWarning = true,
  } = config;

  useEffect(() => {
    // Console warning
    if (showConsoleWarning) {
      console.clear();
      const warningStyle = `
        color: #ff6b6b;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      `;
      const messageStyle = `
        color: #4ecdc4;
        font-size: 14px;
        font-weight: normal;
      `;

      console.log("%c⚠️ STOP! ⚠️", warningStyle);
      console.log(
        "%cThis is a security feature. Unauthorized access to this console may violate our terms of service.",
        messageStyle,
      );
      console.log(
        "%cIf you are a legitimate developer, please contact our team for API access.",
        messageStyle,
      );
      console.log("%c© 2024 careerLift - All rights reserved", messageStyle);
    }

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      if (disableRightClick) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      if (disableTextSelection) {
        e.preventDefault();
        return false;
      }
    };

    // Disable copy/cut/paste
    const handleCopyPaste = (e: KeyboardEvent) => {
      if (disableCopy && (e.ctrlKey || e.metaKey)) {
        if (e.key === "c" || e.key === "x" || e.key === "v" || e.key === "a") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // Disable dev tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disableDevTools) {
        // F12
        if (e.key === "F12") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+Shift+I (Inspector)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+Shift+J (Console)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+Shift+C (Element inspector)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+U (View source)
        if ((e.ctrlKey || e.metaKey) && e.key === "u") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+S (Save page)
        if ((e.ctrlKey || e.metaKey) && e.key === "s") {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      // Handle copy/paste
      handleCopyPaste(e);
    };

    // Disable print
    const handlePrint = (e: Event) => {
      if (disablePrint) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu, {
      passive: false,
    });
    document.addEventListener("selectstart", handleSelectStart, {
      passive: false,
    });
    document.addEventListener("keydown", handleKeyDown, { passive: false });

    if (disablePrint) {
      window.addEventListener("beforeprint", handlePrint);
    }

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener("dragstart", handleDragStart, { passive: false });

    // Console warning (without overriding console methods to avoid conflicts)
    if (showConsoleWarning) {
      console.clear();
      console.log(
        "%c🚫 Unauthorized debugging detected",
        "color: red; font-size: 16px;",
      );
    }

    // Detect DevTools opening (heuristic approach)
    let devtools = { open: false };
    const threshold = 160;

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true;
          console.clear();
          console.log(
            "%c🔒 Security Notice: Developer tools detected",
            "color: red; font-size: 16px;",
          );
          if (showConsoleWarning) {
            // Optionally redirect or take action
            // window.location.href = '/';
          }
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Cleanup function
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);

      if (disablePrint) {
        window.removeEventListener("beforeprint", handlePrint);
      }

      // Console methods are managed by SecurityManager
    };
  }, [
    disableRightClick,
    disableTextSelection,
    disableDevTools,
    disableCopy,
    disablePrint,
    showConsoleWarning,
  ]);
};

export default useSecurity;
