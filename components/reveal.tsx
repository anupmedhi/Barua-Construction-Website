import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div
      className={cn("animate-soft-reveal", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
