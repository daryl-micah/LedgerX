import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto font-normal border-none focus-visible:ring-offset-0 outline-none",
        isActive ? "bg-white/10 text-white" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
