import Link from "next/link";
import { Cctv, ShieldCheck, Mail, Phone, MapPin, Clock, Award } from "lucide-react";
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
                <Cctv className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-tight">
                  برند آرگوس (Argus)
                </span>
                <span className="text-[11px] text-muted-foreground font-medium">
                  سیستم‌های نظارت تصویری و دزدگیر هوشمند اماکن
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              مرجع تخصصی فروش و اجرای دوربین‌های مداربسته دید در شب رنگی،
              دستگاه‌های ضبط XVR/NVR با فشرده‌سازی مدرن و دزدگیرهای سیم‌کارتی
              اماکن. تمامی محصولات با ۲۴ ماه گارانتی طلایی تعویض و خدمات نصب استاندارد
              عرضه می‌شوند.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" />
                <span>گارانتی ۲۴ ماهه تعویض</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-4 text-primary" />
                <span>ضمانت اصالت و سلامت قطعات</span>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-bold text-foreground">
              محصولات و تجهیزات
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/#cameras" className="transition-colors hover:text-foreground">
                  دوربین‌های مداربسته دید در شب
                </Link>
              </li>
              <li>
                <Link href="/#recorders" className="transition-colors hover:text-foreground">
                  دستگاههای ضبط XVR و NVR
                </Link>
              </li>
              <li>
                <Link href="/#alarms" className="transition-colors hover:text-foreground">
                  دزدگیر سیم‌کارتی و سنسورها
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="transition-colors hover:text-foreground">
                  پکیج‌های آماده ۲، ۴ و ۸ دوربین
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="transition-colors hover:text-foreground">
                  هارد وسترن بنفش و کابل ترکیبی
                </Link>
              </li>
            </ul>
          </div>

          {/* Static Contact Summary */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-bold text-foreground">
              ارتباط با دفتر فروش آرگوس
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-primary mt-0.5" />
                <span>تهران، خیابان جمهوری، تقاطع فردوسی، ساختمان بازرگانی، واحد ۱۲</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span dir="ltr">۰۲۱ - ۸۸۸۸۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span dir="ltr">۰۹۱۲ - ۰۰۰ ۰۰۰۰ (کارشناس فنی)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-primary" />
                <span>شنبه تا چهارشنبه ۹ الی ۱۸ | پنجشنبه‌ها تا ۱۴</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>sales@argus-cctv.ir</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© ۱۴۰۴ برند حفاظتی آرگوس. کلیه حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-foreground transition-colors">
              درخواست پیش‌فاکتور
            </Link>
            <Link href="/contact-us" className="hover:text-foreground transition-colors">
              اعطای نمایندگی نصابان
            </Link>
            <Link href="/register" className="hover:text-foreground transition-colors">
              ورود همکاران
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
