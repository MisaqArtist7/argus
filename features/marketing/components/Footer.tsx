import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <ShieldCheck className="size-5" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight">
                سامانه هوشمند آرگوس
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              راهکار یکپارچه و مدرن برای نظارت، مدیریت دسترسی‌ها و پایش فرآیندها.
              طراحی‌شده بر پایه جدیدترین استانداردها برای ایجاد امنیت و سهولت کاربری.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold text-foreground">
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="transition-colors hover:text-foreground"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="transition-colors hover:text-foreground"
                >
                  ثبت‌نام در سامانه
                </Link>
              </li>
              <li>
                <Link
                  href="/request-otp"
                  className="transition-colors hover:text-foreground"
                >
                  ورود با کد یکبار مصرف
                </Link>
              </li>
            </ul>
          </div>

          {/* Static Contact Summary */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold text-foreground">
              ارتباط با ما
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>تهران، میدان ونک، برج فناوری</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span dir="ltr">۰۲۱ - ۸۸۸۸۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>support@argus.example</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© ۱۴۰۴ سامانه آرگوس. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <span>امنیت تضمین‌شده</span>
            <span>پشتیبانی شبانه‌روزی</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
