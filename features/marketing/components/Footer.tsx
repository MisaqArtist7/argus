import Link from "next/link";
import { Cctv, ShieldCheck, Mail, Phone, MapPin, Clock, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50/80">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-sm">
                <Cctv className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-tight text-neutral-950">
                  برند آرگوس (Argus)
                </span>
                <span className="text-[11px] text-amber-600 font-semibold">
                  سیستم‌های نظارت تصویری و دزدگیر هوشمند اماکن
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              مرجع تخصصی فروش و اجرای دوربین‌های مداربسته دید در شب رنگی،
              دستگاه‌های ضبط XVR/NVR با فشرده‌سازی مدرن و دزدگیرهای سیم‌کارتی
              اماکن. تمامی محصولات با ۲۴ ماه گارانتی طلایی تعویض و خدمات نصب استاندارد
              عرضه می‌شوند.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-amber-500" />
                <span>گارانتی ۲۴ ماهه تعویض</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-4 text-amber-500" />
                <span>ضمانت اصالت و سلامت قطعات</span>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-bold text-neutral-950">
              محصولات و تجهیزات
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href="/#cameras" className="transition-colors hover:text-amber-600">
                  دوربین‌های مداربسته دید در شب
                </Link>
              </li>
              <li>
                <Link href="/#recorders" className="transition-colors hover:text-amber-600">
                  دستگاههای ضبط XVR و NVR
                </Link>
              </li>
              <li>
                <Link href="/#alarms" className="transition-colors hover:text-amber-600">
                  دزدگیر سیم‌کارتی و سنسورها
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="transition-colors hover:text-amber-600">
                  پکیج‌های آماده ۲، ۴ و ۸ دوربین
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="transition-colors hover:text-amber-600">
                  هارد وسترن بنفش و کابل ترکیبی
                </Link>
              </li>
            </ul>
          </div>

          {/* Static Contact Summary */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-bold text-neutral-950">
              ارتباط با دفتر فروش آرگوس
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-amber-500 mt-0.5" />
                <span>تهران، خیابان جمهوری، تقاطع فردوسی، ساختمان بازرگانی، واحد ۱۲</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-amber-500" />
                <span dir="ltr">۰۲۱ - ۸۸۸۸۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-amber-500" />
                <span dir="ltr">۰۹۱۲ - ۰۰۰ ۰۰۰۰ (کارشناس فنی)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-amber-500" />
                <span>شنبه تا چهارشنبه ۹ الی ۱۸ | پنجشنبه‌ها تا ۱۴</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-amber-500" />
                <span>sales@argus-cctv.ir</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-neutral-200" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-600 sm:flex-row">
          <p>© ۱۴۰۴ برند حفاظتی آرگوس. کلیه حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-amber-600 transition-colors font-medium">
              درخواست پیش‌فاکتور
            </Link>
            <Link href="/contact-us" className="hover:text-amber-600 transition-colors font-medium">
              اعطای نمایندگی نصابان
            </Link>
            <Link href="/register" className="hover:text-amber-600 transition-colors font-medium">
              ورود همکاران
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
