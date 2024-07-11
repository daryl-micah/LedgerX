import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-#2E2A47">Welcome Back!</h1>
          <p className="text-base text-[7E8CA0]">
            Log in to access your dashboard.
          </p>
        </div>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignIn path="/sign-in" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
