import Link from "next/link";
import { ArrowLeft, PhoneCall, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-12 text-white shadow-2xl sm:px-12 sm:py-16 md:p-16 border-2 border-neutral-800 ring-1 ring-amber-400/30">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-xs">
              <span>مشاوره و بازدید کارشناسی رایگان</span>
            </div>

            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-4xl text-white">
              نمی‌دانید چه سیستمی مناسب فضای شماست؟
            </h2>

            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              کارشناسان فنی آرگوس بر اساس متراژ، نقاط کور، نور محیط و بودجه شما، بهترین
              ترکیب دوربین‌های مداربسته و تجهیزات دزدگیر را با صدور پیش‌فاکتور شفاف به
              شما پیشنهاد می‌دهند.
            </p>

            <div className="flex flex-col items-center justify-center gap-3.5 pt-2 sm:flex-row">
              <Link
                href="/contact-us"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-full sm:w-auto px-7 font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-xl shadow-amber-400/25 border border-amber-500/40",
                })}
              >
                <FileText className="size-4 me-2" />
                درخواست پیش‌فاکتور و استعلام قیمت
                <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
              </Link>
              <a
                href="tel:02188880000"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full sm:w-auto px-7 bg-neutral-900 border-2 border-neutral-700 text-white hover:border-amber-400 hover:text-amber-400 transition-colors font-bold",
                })}
              >
                <PhoneCall className="size-4 me-2 text-amber-400" />
                تماس مستقیم با کارشناس فروش
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
