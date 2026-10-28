import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-muted/20">
      {/* Small Logo linking to Home */}
      <Link
        href="/"
        className="mb-8 flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90"
      >
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
          <ShieldCheck className="size-5" />
        </div>
        <span className="font-heading text-xl font-bold tracking-tight">
          آرگوس
        </span>
      </Link>

      {/* Main Auth Form Container */}
      <div className="w-full max-w-md">{children}</div>

      {/* Return to Home link */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <ArrowRight className="size-3.5 rtl:-scale-x-100" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>
    </div>
  );
}
