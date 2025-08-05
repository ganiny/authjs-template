import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MapPin, Shield, User } from "lucide-react";
import { ProfileActions } from "@/components/profile-actions";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Not Authenticated</h1>
            <p className="text-muted-foreground mb-4">
              Please log in to view your profile
            </p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and view your profile information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={user.image || ""}
                    alt={user.name || "User"}
                  />
                  <AvatarFallback className="text-2xl">
                    {user.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .filter(Boolean)
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <div className="flex justify-center mt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Verified User
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">{user.email}</span>
              </div>
              {user.name && (
                <div className="flex items-center gap-3 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{user.name}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Member since:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Account Details */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Your account details and authentication information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <div className="p-3 rounded-md border bg-muted/50">
                    {user.name || "Not provided"}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <div className="p-3 rounded-md border bg-muted/50">
                    {user.email}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Account Status
                  </label>
                  <div className="p-3 rounded-md border bg-muted/50">
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Authentication Provider
                  </label>
                  <div className="p-3 rounded-md border bg-muted/50">
                    {user.email?.includes("@gmail.com")
                      ? "Google"
                      : user.email?.includes("@github.com")
                      ? "GitHub"
                      : user.email?.includes("@twitter.com")
                      ? "Twitter"
                      : "OAuth"}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <ProfileActions />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Session Information */}
        <Card>
          <CardHeader>
            <CardTitle>Session Information</CardTitle>
            <CardDescription>
              Technical details about your current session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
