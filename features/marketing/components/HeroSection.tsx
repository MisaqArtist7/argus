import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Activity, Lock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary/30 to-primary/5 opacity-40 sm:w-288.75 inset-s-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Main Hero Text */}
          <div className="space-y-6 text-center lg:col-span-7 lg:text-start">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3.5 py-1 text-xs font-medium text-muted-foreground">
              <Shield className="size-3.5 text-primary" />
              <span>نسخه جدید سامانه نظارتی آرگوس</span>
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
              سامانه یکپارچه نظارت،
              <span className="block text-primary">مدیریت و احراز هویت هوشمند</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              زیرساختی امن، سریع و مقیاس‌پذیر برای ثبت‌نام کاربران، راستی‌آزمایی
              شماره موبایل و کنترل دسترسی‌ها. طراحی‌شده با رعایت استانداردهای روز نرم‌افزار.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/register"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto px-6",
                })}
              >
                شروع ثبت‌نام
                <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
              </Link>
              <Link
                href="/contact-us"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto px-6",
                })}
              >
                تماس با کارشناسان
              </Link>
            </div>

            {/* Value checklist */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                <span>احراز هویت پیامکی سریع</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                <span>رمزنگاری چندلایه‌ای</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                <span>رابط کاربری واکنش‌گرا و راست‌چین</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation Element */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border bg-card p-6 shadow-xl shadow-primary/5">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-destructive/60" />
                  <div className="size-3 rounded-full bg-chart-2/60" />
                  <div className="size-3 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  status: active
                </span>
              </div>

              <div className="space-y-4 pt-5">
                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Lock className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">پروتکل امنیتی</div>
                      <div className="text-[11px] text-muted-foreground">
                        ارتباط رمزگذاری‌شده SSL/TLS
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    تأییدشده
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-md bg-chart-1/20 text-foreground">
                      <Activity className="size-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">پایش لحظه‌ای</div>
                      <div className="text-[11px] text-muted-foreground">
                        نظارت مستمر بر وضعیت سرویس‌ها
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    آنلاین
                  </span>
                </div>

                <div className="rounded-lg border border-dashed p-4 text-center">
                  <div className="text-xs text-muted-foreground">
                    سامانه آماده اتصال به درگاه سرویس‌های ابری و پایگاه داده
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
