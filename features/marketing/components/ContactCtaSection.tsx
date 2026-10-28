import Link from "next/link";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="border-t bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-xl border bg-card p-8 text-center shadow-sm sm:p-10 space-y-5">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MessageSquare className="size-6" />
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
              پرسش یا نظری درباره سامانه دارید؟
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
              تیم پشتیبانی و کارشناسان ما آماده دریافت پیام‌ها، پیشنهادات و بررسی
              درخواست‌های شما از طریق فرم اختصاصی تماس با ما هستند.
            </p>
          </div>

          <div>
            <Link
              href="/contact-us"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "px-6",
              })}
            >
              رفتن به فرم تماس با ما
              <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
