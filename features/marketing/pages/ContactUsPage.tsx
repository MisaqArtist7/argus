import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ContactUsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            ارتباط مستقیم
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            تماس با ما
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            پرسش‌ها، انتقادات و پیشنهادات خود را با ما در میان بگذارید. تیم
            پشتیبانی در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.
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
                  اطلاعات ارتباطی
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">نشانی مرکزی</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5">
                      تهران، میدان ونک، خیابان ملاصدرا، پلاک ۱۰۰، ساختمان نوآوری
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">شماره تماس</div>
                    <div
                      dir="ltr"
                      className="text-xs leading-relaxed text-muted-foreground mt-0.5 text-end"
                    >
                      ۰۲۱ - ۸۸۸۸۰۰۰۰ | ۰۲۱ - ۸۸۸۸۰۰۰۱
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">رایانامه رسمی</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5 font-mono">
                      info@argus.example
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">ساعات کاری</div>
                    <div className="text-xs leading-relaxed text-muted-foreground mt-0.5">
                      شنبه تا چهارشنبه: ۸:۳۰ الی ۱۷:۰۰
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-center gap-3 p-4">
                <ShieldCheck className="size-8 text-primary shrink-0" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  پیام‌های دریافتی از طریق این فرم در سامانه تیکتینگ آرگوس ثبت و کد
                  پیگیری برای شما صادر خواهد شد.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
