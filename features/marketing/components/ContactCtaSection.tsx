import Link from "next/link";
import { MessageSquare, ArrowLeft, PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="border-t bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center shadow-xs sm:p-10 space-y-5">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageSquare className="size-6" />
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
              پرسشی درباره گارانتی، نصب یا خرید عمده همکار دارید؟
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
              تیم پشتیبانی فنی، واحد اعطای نمایندگی به همکاران نصاب و کارشناسان فروش
              آرگوس در تمامی روزهای کاری آماده ارائه خدمات و پاسخگویی به شما هستند.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact-us"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "px-6 w-full sm:w-auto font-bold",
              })}
            >
              ارسال پیام و ثبت استعلام
              <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
            </Link>
            <a
              href="tel:02188880000"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "px-6 w-full sm:w-auto",
              })}
            >
              <PhoneCall className="size-4 me-2 text-primary" />
              تماس با دفتر مرکزی (۰۲۱۸۸۸۸۰۰۰۰)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
