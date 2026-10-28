import {
  Smartphone,
  Users,
  FileText,
  Lock,
  Layers,
  Headphones,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "احراز هویت پیامکی (OTP)",
      description:
        "ارسال سریع کدهای یکبار مصرف پیامکی جهت اعتبارسنجی و ورود بی‌دردسر کاربران بدون نیاز به رمزهای پیچیده.",
      icon: Smartphone,
    },
    {
      title: "مدیریت یکپارچه کاربران",
      description:
        "ثبت اطلاعات شناسنامه‌ای، شماره تماس و ایجاد پروفایل‌های کاری امن با ساختاری منظم و شفاف.",
      icon: Users,
    },
    {
      title: "امنیت داده‌ها و تراکنش‌ها",
      description:
        "استفاده از به‌روزترین الگوریتم‌های اعتبارسنجی جهت جلوگیری از دسترسی‌های غیرمجاز و حملات احتمالی.",
      icon: Lock,
    },
    {
      title: "ثبت وقایع و نظارت سیستمی",
      description:
        "رهگیری مستمر رخدادها، درخواست‌ها و زمان‌های ورود جهت شفافیت کامل فرآیندهای نظارتی.",
      icon: FileText,
    },
    {
      title: "طراحی کاملاً واکنش‌گرا (RTL)",
      description:
        "پشتیبانی ذاتی و بدون نقص از زبان فارسی، چیدمان راست‌چین و نمایش بهینه روی انواع نمایشگرها.",
      icon: Layers,
    },
    {
      title: "پشتیبانی و همراهی مستمر",
      description:
        "امکان ارتباط سریع با تیم پشتیبانی فنی از طریق فرم تماس اختصاصی و پاسخگویی به ابهامات کاربری.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            امکانات و ویژگی‌ها
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            ویژگی‌های کلیدی سامانه آرگوس
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            مجموعه‌ای منسجم از قابلیت‌ها که برای ارتقای امنیت و ساده‌سازی فرآیندهای
            ارتباطی توسعه یافته‌اند.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group transition-all duration-200 hover:shadow-md hover:border-primary/40"
              >
                <CardHeader className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed sm:text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
