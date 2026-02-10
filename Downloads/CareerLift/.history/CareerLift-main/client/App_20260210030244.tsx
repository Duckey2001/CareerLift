import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CVBuilder from "./pages/CVBuilder";
import Jobs from "./pages/Jobs";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";
import Transparency from "./pages/Transparency";
import Mentorship from "./pages/Mentorship";

const queryClient = new QueryClient();

// Simplified home page that works
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-6">Welcome to careerLift</h1>
        <p className="text-2xl text-muted-foreground mb-12">Elevate your career with AI-powered tools</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link to="/cv-builder" className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-4">CV Builder</h2>
            <p className="text-gray-600">Create professional CVs with AI assistance</p>
          </Link>
          <Link to="/jobs" className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-4">Job Board</h2>
            <p className="text-gray-600">Find verified job opportunities</p>
          </Link>
          <Link to="/courses" className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-4">Courses</h2>
            <p className="text-gray-600">Learn new skills from industry experts</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/cv-builder"
                element={
                  <ProtectedRoute>
                    <CVBuilder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <Jobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/courses"
                element={
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/internships"
                element={
                  <ProtectedRoute>
                    <Internships />
                  </ProtectedRoute>
                }
              />
              <Route path="/transparency" element={<Transparency />} />
              <Route
                path="/mentorship"
                element={
                  <ProtectedRoute>
                    <Mentorship />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
