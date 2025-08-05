import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Code,
  Shield,
  Zap,
  Users,
  Star,
  Github,
  ExternalLink,
  Globe,
  Lightbulb,
  Target,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            About Auth.js Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, production-ready Next.js template with authentication,
            database integration, and beautiful UI components built for
            developers who want to ship fast.
          </p>
        </div>

        {/* Mission */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Target className="w-5 h-5" />
              Our Mission
            </CardTitle>
            <CardDescription>
              Empowering developers to build secure, scalable applications with
              modern tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg leading-relaxed">
                We believe that every developer should have access to a solid
                foundation for building web applications. This template combines
                the best practices from the modern web development ecosystem to
                provide you with a starting point that's both powerful and easy
                to understand.
              </p>
              <p className="text-muted-foreground">
                Whether you're building a SaaS application, a personal project,
                or learning modern web development, this template gives you
                everything you need to get started quickly and scale
                confidently.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security First
              </CardTitle>
              <CardDescription>
                Built with security best practices from the ground up
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">OAuth 2.0 Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">JWT Session Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Protected API Routes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Type-safe Database Queries</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Developer Experience
              </CardTitle>
              <CardDescription>
                Optimized for productivity and developer happiness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">Hot Reload Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">TypeScript Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">ESLint Configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">Modern Tooling</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Modern Stack
              </CardTitle>
              <CardDescription>
                Built with the latest technologies and best practices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm">Next.js 15 App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm">Auth.js v5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm">Prisma ORM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm">shadcn/ui Components</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Production Ready
              </CardTitle>
              <CardDescription>
                Optimized for deployment and real-world usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm">Vercel Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm">Database Migrations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm">Environment Configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm">SEO Optimized</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technology Stack
            </CardTitle>
            <CardDescription>
              The technologies and tools that power this template
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Frontend
                </h3>
                <div className="space-y-2">
                  <Badge variant="outline">Next.js 15</Badge>
                  <Badge variant="outline">React 19</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Backend
                </h3>
                <div className="space-y-2">
                  <Badge variant="outline">Auth.js</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Next.js API</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Tools
                </h3>
                <div className="space-y-2">
                  <Badge variant="outline">ESLint</Badge>
                  <Badge variant="outline">Turbopack</Badge>
                  <Badge variant="outline">Lucide Icons</Badge>
                  <Badge variant="outline">Sonner</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose This Template */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Why Choose This Template?
            </CardTitle>
            <CardDescription>
              What makes this template stand out from the rest
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zero Configuration</h3>
                  <p className="text-muted-foreground">
                    Get started immediately with pre-configured authentication,
                    database setup, and UI components. No need to spend hours
                    setting up the basics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Production Ready</h3>
                  <p className="text-muted-foreground">
                    Built with production best practices including security,
                    performance, and scalability considerations. Deploy with
                    confidence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Modern Architecture</h3>
                  <p className="text-muted-foreground">
                    Uses the latest Next.js App Router, Auth.js v5, and modern
                    development patterns for a future-proof codebase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Beautiful UI</h3>
                  <p className="text-muted-foreground">
                    Includes a complete design system with dark/light mode
                    support, responsive components, and accessible interactions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join the Community
            </CardTitle>
            <CardDescription>
              Connect with other developers and contribute to the project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-semibold">Get Involved</h3>
                <p className="text-sm text-muted-foreground">
                  We welcome contributions from the community! Whether it's bug
                  reports, feature requests, or code contributions, every bit
                  helps.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/your-repo"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Support the Project</h3>
                <p className="text-sm text-muted-foreground">
                  If this template has helped you build something amazing,
                  consider giving it a star on GitHub or contributing to its
                  development.
                </p>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Star on GitHub</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Type Safe</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Auth Providers
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  UI Components
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">
                  Possibilities
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Ready to Get Started?</CardTitle>
            <CardDescription>
              Begin building your next application with confidence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Clone the repository, set up your environment variables, and start
              building your application in minutes.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <Link href="/docs">
                  <Award className="w-4 h-4 mr-2" />
                  View Documentation
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/your-repo">
                  <Github className="w-4 h-4 mr-2" />
                  Get the Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
