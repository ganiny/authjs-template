import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  Database,
  Shield,
  Palette,
  Zap,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { CopyableCode } from "@/components/copyable-code";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete guide to the Auth.js Template - a modern Next.js
            application with authentication, database integration, and beautiful
            UI components.
          </p>
        </div>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Quick Start
            </CardTitle>
            <CardDescription>
              Get up and running with the Auth.js Template in minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Clone the Repository</h3>
                <CopyableCode code="git clone https://github.com/ganiny/authjs-template.git" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">2. Install Dependencies</h3>
                <CopyableCode code="npm install" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">3. Set Up Environment</h3>
                <CopyableCode code="cp .env.example .env.local" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">4. Run Development Server</h3>
                <CopyableCode code="npm run dev" />
              </div>
            </div>
            <div className="pt-4 border-t">
              <Button asChild>
                <Link
                  href="https://github.com/ganiny/authjs-template"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Authentication
              </CardTitle>
              <CardDescription>
                Secure authentication with multiple providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Google OAuth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">GitHub OAuth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Twitter OAuth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">JWT Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Protected Routes</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database
              </CardTitle>
              <CardDescription>
                Prisma ORM with PostgreSQL support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Prisma ORM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Type-safe Queries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Migrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">User Management</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                UI Components
              </CardTitle>
              <CardDescription>
                Beautiful, accessible components with shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">shadcn/ui Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Dark/Light Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Accessible</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Development
              </CardTitle>
              <CardDescription>
                Modern development tools and practices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">ESLint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Turbopack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Hot Reload</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Next.js 15</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
            <CardDescription>
              Configure your environment variables for authentication and
              database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Authentication</h3>
                  <div className="space-y-2 text-sm">
                    <CopyableCode code="AUTH_SECRET=your-secret-key" />
                    <CopyableCode code="GOOGLE_CLIENT_ID=your-google-client-id" />
                    <CopyableCode code="GOOGLE_CLIENT_SECRET=your-google-client-secret" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Database</h3>
                  <div className="space-y-2 text-sm">
                    <CopyableCode code="DATABASE_URL=postgresql://..." />
                    <CopyableCode code="DIRECT_URL=postgresql://..." />
                    <div className="text-xs text-muted-foreground pt-2">
                      <strong>Note:</strong> Most cloud database providers will
                      give you a special connection string for Prisma ORM. Make
                      sure to copy this connection string into your{" "}
                      <code>.env</code> file as <code>DATABASE_URL</code> (and{" "}
                      <code>DIRECT_URL</code> if needed).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Project Structure</CardTitle>
            <CardDescription>
              Understanding the organization of your codebase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                {`authjs-template/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── login/          # Login page
│   │   ├── profile/        # Profile page
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Footer component
│   ├── auth.ts            # Auth.js configuration
│   ├── auth.config.ts     # Auth providers
│   └── middleware.ts      # Route protection
├── prisma/                # Database schema & migrations
├── public/               # Static assets
└── package.json          # Dependencies & scripts`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              What to do after setting up your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Customize Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Add more OAuth providers or implement custom authentication
                    logic in the auth configuration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Extend Database Schema</h3>
                  <p className="text-sm text-muted-foreground">
                    Modify the Prisma schema to add your own models and
                    relationships.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Add New Pages</h3>
                  <p className="text-sm text-muted-foreground">
                    Create new pages and components following the existing
                    patterns and styling.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-semibold">Deploy Your Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy to Vercel, Netlify, or your preferred hosting
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Helpful links and documentation for further learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-semibold">Official Documentation</h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://nextjs.org/docs"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Next.js Documentation
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://authjs.dev"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Auth.js Documentation
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://www.prisma.io/docs"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Prisma Documentation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">UI & Styling</h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://ui.shadcn.com"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      shadcn/ui Components
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://tailwindcss.com/docs"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Tailwind CSS
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link
                      href="https://lucide.dev"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Lucide Icons
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
