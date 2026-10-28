import Link from "next/link";
import { ArrowLeft, PhoneCall, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-primary/90 px-6 py-12 text-primary-foreground shadow-2xl sm:px-12 sm:py-16 md:p-16">
          <div className="relative z-10 mx-auto max-w-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs">
              <span>مشاوره و بازدید کارشناسی رایگان</span>
            </div>

            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-4xl">
              نمی‌دانید چه سیستمی مناسب فضای شماست؟
            </h2>

            <p className="text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              کارشناسان فنی آرگوس بر اساس متراژ، نقاط کور، نور محیط و بودجه شما، بهترین
              ترکیب دوربین‌های مداربسته و تجهیزات دزدگیر را با صدور پیش‌فاکتور شفاف به
              شما پیشنهاد می‌دهند.
            </p>

            <div className="flex flex-col items-center justify-center gap-3.5 pt-2 sm:flex-row">
              <Link
                href="/contact-us"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full sm:w-auto px-7 font-bold shadow-md",
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
                    "w-full sm:w-auto px-7 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground font-semibold",
                })}
              >
                <PhoneCall className="size-4 me-2" />
                تماس مستقیم با کارشناس فروش
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
