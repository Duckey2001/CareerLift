import { ReactNode, useEffect } from "react";
import { useSecurity } from "@/hooks/use-security";
import {
  initializeSecurity,
  disableDebugShortcuts,
  detectAutomation,
} from "@/utils/security";

interface SecurityWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SecurityWrapper = ({
  children,
  className,
}: SecurityWrapperProps) => {
  // Apply all security measures
  useSecurity({
    disableRightClick: true,
    disableTextSelection: true,
    disableDevTools: true,
    disableCopy: true,
    disablePrint: false,
    showConsoleWarning: true,
  });

  useEffect(() => {
    // Initialize advanced security system
    const securityManager = initializeSecurity();

    // Enable debug shortcuts protection
    disableDebugShortcuts();

    // Detect automation tools
    detectAutomation();

    // Additional timing-based debugging detection
    const debugDetector = () => {
      let start = performance.now();
      debugger;
      if (performance.now() - start > 100) {
        console.clear();
        console.log(
          "%c🚨 Active debugging session detected",
          "color: red; font-size: 18px; font-weight: bold;",
        );
        console.log(
          "%c🛡️ Advanced security protocols activated",
          "color: orange; font-size: 14px;",
        );
      }
    };

    // Run detector periodically
    const detectorInterval = setInterval(debugDetector, 5000);

    // Cleanup
    return () => {
      clearInterval(detectorInterval);
      securityManager.destroy();
    };
  }, []);

  return (
    <div
      className={`select-none ${className || ""}`}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        WebkitTouchCallout: "none",
        WebkitTapHighlightColor: "transparent",
      }}
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
};
