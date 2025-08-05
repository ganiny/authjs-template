import Link from "next/link";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t bg-background px-2">
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/ganiny"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/mohamed-abubakr-7225aa2b4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:gen2022eg@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 Mohamed Abubakr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
