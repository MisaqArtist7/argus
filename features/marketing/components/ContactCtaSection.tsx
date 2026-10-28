import Link from "next/link";
import { MessageSquare, ArrowLeft, PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-neutral-200 bg-white p-8 text-center shadow-xs sm:p-10 space-y-5">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-sm">
            <MessageSquare className="size-6" />
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl text-neutral-950">
              پرسشی درباره گارانتی، نصب یا خرید عمده همکار دارید؟
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-600">
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
                className: "px-6 w-full sm:w-auto font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-md border border-amber-500/30",
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
                className: "px-6 w-full sm:w-auto font-bold border-2 border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-amber-400 transition-colors",
              })}
            >
              <PhoneCall className="size-4 me-2 text-amber-400" />
              تماس با دفتر مرکزی (۰۲۱۸۸۸۸۰۰۰۰)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
