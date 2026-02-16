import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7b32f578521d41aebc1d74102196f4ba%2Ffd824a06a4834ff8bb5b49c0c02426e0?format=webp&width=800"
                  alt="careerLift"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-foreground">
                  careerLift
                </span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Elevating careers through innovative tools, fair opportunities,
                and comprehensive professional development for the modern
                workforce.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="/cv-builder"
                    className="hover:text-foreground transition-colors"
                  >
                    CV Builder
                  </a>
                </li>
                <li>
                  <a
                    href="/jobs"
                    className="hover:text-foreground transition-colors"
                  >
                    Job Board
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="hover:text-foreground transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/internships"
                    className="hover:text-foreground transition-colors"
                  >
                    Internships
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/mentorship"
                    className="hover:text-foreground transition-colors"
                  >
                    Mentorship
                  </a>
                </li>
                <li>
                  <a
                    href="/transparency"
                    className="hover:text-foreground transition-colors"
                  >
                    Transparency Report
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 careerLift. Elevating careers through innovative
              solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
