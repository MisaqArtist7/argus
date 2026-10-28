import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground shadow-xl sm:px-12 sm:py-16 md:p-16">
          <div className="relative z-10 mx-auto max-w-2xl text-center space-y-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-4xl">
              آماده شروع کار با سامانه آرگوس هستید؟
            </h2>
            <p className="text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              در کمتر از یک دقیقه حساب کاربری خود را ایجاد کنید یا با استفاده از
              کد یکبار مصرف وارد سامانه شوید.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link
                href="/register"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full sm:w-auto px-6 font-semibold",
                })}
              >
                <UserPlus className="size-4 me-2" />
                ایجاد حساب کاربری
                <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
              </Link>
              <Link
                href="/request-otp"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full sm:w-auto px-6 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                })}
              >
                ورود با شماره موبایل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
