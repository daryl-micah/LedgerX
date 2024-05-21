import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-#2E2A47">Welcome!</h1>
          <p className="text-base text-[7E8CA0]">
            Create an account to access your dashboard.
          </p>
        </div>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignUp path="/sign-up" />
        </ClerkLoaded>
      </div>
      <div className="h-full bg-blue-400 hidden lg:flex items-center justify-items-center">
        <Image src="/next.svg" alt="Logo" height={100} width={100} />
      </div>
    </div>
  );
}
