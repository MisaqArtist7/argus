import { MapPin, Phone, Mail, Clock, ShieldCheck, Cctv, Award } from "lucide-react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ContactUsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Cctv className="size-3.5" />
            <span>واحد مشاوره، فروش و اجرای پروژه‌ها</span>
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            تماس با دفتر مرکزی و مشاوره خرید آرگوس
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-bold">
                  اطلاعات تماس و دفتر فروش
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">نشانی دفتر مرکزی و انبار</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5">
                      تهران، خیابان جمهوری، تقاطع فردوسی، پاساژ امجد، طبقه ۲، واحد ۲۴
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">تلفن‌های واحد فروش و استعلام</div>
                    <div
                      dir="ltr"
                      className="text-xs leading-relaxed text-muted-foreground mt-0.5 text-end font-mono"
                    >
                      ۰۲۱ - ۸۸۸۸۰۰۰۰ | ۰۲۱ - ۸۸۸۸۰۰۰۱
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">کارشناس فنی و مشاوره در محل</div>
                    <div
                      dir="ltr"
                      className="text-xs leading-relaxed text-muted-foreground mt-0.5 text-end font-mono"
                    >
                      ۰۹۱۲ - ۰۰۰ ۰۰۰۰
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">رایانامه رسمی فروش</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5 font-mono">
                      sales@argus-cctv.ir
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">ساعات کاری و پاسخگویی</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5">
                      شنبه تا چهارشنبه: ۹:۰۰ الی ۱۸:۰۰ | پنجشنبه‌ها: ۹:۰۰ الی ۱۴:۰۰
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-3.5 p-4">
                <ShieldCheck className="size-7 text-primary shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground block font-bold mb-1">
                    ضمانت ۲۴ ماهه طلایی آرگوس
                  </strong>
                  کلیه دستگاه‌ها، دوربین‌ها و پنل‌های دزدگیر آرگوس دارای هولوگرام اصالت
                  و گارانتی تعویض بدون قیدوشرط سخت‌افزاری هستند.
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="flex items-start gap-3.5 p-4">
                <Award className="size-7 text-primary shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground block font-bold mb-1">
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
