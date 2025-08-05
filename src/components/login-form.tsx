import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { signIn } from "@/auth";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/profile" });
                }}
                className="cursor-pointer"
              >
                <Button type="submit" variant="outline" className="w-full cursor-pointer">
                  <FcGoogle />
                </Button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("twitter", { redirectTo: "/profile" });
                }}
                className="cursor-pointer"
              >
                <Button type="submit" variant="outline" className="w-full cursor-pointer">
                  <FaXTwitter />
                </Button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("github", { redirectTo: "/profile" });
                }}
              >
                <Button type="submit" variant="outline" className="w-full cursor-pointer">
                  <FaGithub />
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
