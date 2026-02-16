import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "./Layout";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: ReactNode;
  comingSoonFeatures?: string[];
}

const PlaceholderPage = ({
  title,
  description,
  icon,
  comingSoonFeatures = [],
}: PlaceholderPageProps) => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8">
            <CardHeader>
              <div className="flex items-center justify-center mb-6">
                {icon || (
                  <Construction className="h-16 w-16 text-muted-foreground" />
                )}
              </div>
              <CardTitle className="text-3xl mb-4">{title}</CardTitle>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {comingSoonFeatures.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">
                    Coming Soon:
                  </h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    {comingSoonFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This feature is currently under development. Want to see it
                  implemented next?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                  <Button variant="outline">
                    Request Priority Development
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
