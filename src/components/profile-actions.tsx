"use client";

import { Button } from "@/components/ui/button";
import { Settings, Shield, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function ProfileActions() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Settings className="w-4 h-4" />
        Settings
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Shield className="w-4 h-4" />
        Security
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={handleSignOut}
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </Button>
    </div>
  );
}
