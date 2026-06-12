import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-cloud px-5 pt-24 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-4 font-display text-5xl text-navy">This address is still on the drawing board.</h1>
        <Button asChild className="mt-8"><Link href="/">Return home</Link></Button>
      </div>
    </section>
  );
}
