import { MapPin, Phone, Mail, Clock, ShieldCheck, Cctv, Award } from "lucide-react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ContactUsPage() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-neutral-900">
            <Cctv className="size-3.5 text-amber-600" />
            <span>واحد مشاوره، فروش و اجرای پروژه‌ها</span>
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-neutral-950">
            تماس با دفتر مرکزی و مشاوره خرید آرگوس
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            جهت استعلام قیمت روز تجهیزات مداربسته، دستگاه‌های ضبط، دزدگیرهای اماکن و
            هماهنگی جهت بازدید و نصب، با کارشناسان آرگوس در ارتباط باشید.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactUsForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <Card className="border-2 border-neutral-200 bg-white shadow-xs">
              <CardHeader>
                <CardTitle className="text-base font-bold text-neutral-950">
                  اطلاعات تماس و دفتر فروش
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">نشانی دفتر مرکزی و انبار</div>
                    <div className="text-xs leading-relaxed text-neutral-600 mt-0.5">
                      تهران، خیابان جمهوری، تقاطع فردوسی، پاساژ امجد، طبقه ۲، واحد ۲۴
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">تلفن‌های واحد فروش و استعلام</div>
                    <div
                      dir="ltr"
                      className="text-xs leading-relaxed text-neutral-600 mt-0.5 text-end font-mono font-bold"
                    >
                      ۰۲۱ - ۸۸۸۸۰۰۰۰ | ۰۲۱ - ۸۸۸۸۰۰۰۱
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">کارشناس فنی و مشاوره در محل</div>
                    <div
                      dir="ltr"
                      className="text-xs leading-relaxed text-neutral-600 mt-0.5 text-end font-mono font-bold"
                    >
                      ۰۹۱۲ - ۰۰۰ ۰۰۰۰
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">رایانامه رسمی فروش</div>
                    <div className="text-xs leading-relaxed text-neutral-600 mt-0.5 font-mono">
                      sales@argus-cctv.ir
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">ساعات کاری و پاسخگویی</div>
                    <div className="text-xs leading-relaxed text-neutral-600 mt-0.5">
                      شنبه تا چهارشنبه: ۹:۰۰ الی ۱۸:۰۰ | پنجشنبه‌ها: ۹:۰۰ الی ۱۴:۰۰
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-400/50 bg-amber-400/10 shadow-xs">
              <CardContent className="flex items-start gap-3.5 p-4">
                <ShieldCheck className="size-7 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-neutral-700">
                  <strong className="text-neutral-950 block font-bold mb-1">
                    ضمانت ۲۴ ماهه طلایی آرگوس
                  </strong>
                  کلیه دستگاه‌ها، دوربین‌ها و پنل‌های دزدگیر آرگوس دارای هولوگرام اصالت
                  و گارانتی تعویض بدون قیدوشرط سخت‌افزاری هستند.
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200 bg-white shadow-xs">
              <CardContent className="flex items-start gap-3.5 p-4">
                <Award className="size-7 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-neutral-700">
                  <strong className="text-neutral-950 block font-bold mb-1">
                    همکاری با نصابان و همکاران سراسر کشور
                  </strong>
                  جهت دریافت لیست قیمت همکاری و شرایط اعطای نمایندگی، نام فروشگاه یا
                  سابقه کاری خود را از طریق فرم ارسال نمایید.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
