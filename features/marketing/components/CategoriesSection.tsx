import Link from "next/link";
import {
  Cctv,
  HardDrive,
  BellRing,
  Cable,
  ArrowLeft,
  Check,
  Eye,
  Sliders,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export function CategoriesSection() {
  const categories = [
    {
      id: "cameras",
      title: "دوربین‌های مداربسته",
      subtitle: "AHD / IP / دید در شب رنگی",
      description:
        "مجموعه‌ای از دوربین‌های بالت ضدآب، دام‌های سقفی و اسپیددام‌های گردان مجهز به سنسور سونی، وضوح 2MP تا 4K و دید در شب وارم‌لایت تمام‌رنگی.",
      icon: Cctv,
      badge: "پرفروش‌ترین",
      features: [
        "دید در شب رنگی Full-Color بدون تاریکی",
        "استاندارد ضدآب و گردوغبار IP66 / IP67",
        "بدنه مستحکم آلومینیومی مقاوم در برابر ضربه",
        "پشتیبانی از فناوری ضد نور DWDR / WDR",
      ],
      href: "/contact-us?subject=cctv-cameras",
      linkText: "مشاوره و استعلام دوربین‌ها",
    },
    {
      id: "recorders",
      title: "دستگاه‌های ضبط (XVR / NVR)",
      subtitle: "۴، ۸، ۱۶ و ۳۲ کانال هوشمند",
      description:
        "دستگاه‌های رکوردر قدرتمند با پردازنده قوی، فشرده‌سازی مدرن H.265+، قابلیت انتقال تصویر فوق‌سریع روی موبایل (P2P) و تشخیص هوشمند چهره.",
      icon: HardDrive,
      badge: "گارانتی طلایی",
      features: [
        "انتقال تصویر پایدار بدون نیاز به آی‌پی استاتیک",
        "کاهش ۵۰ درصدی مصرف هارد با H.265+",
        "پشتیبانی از انواع دوربین‌های IP و کواکسیال",
        "قابلیت تشخیص حرکت و تفکیک انسان و خودرو",
      ],
      href: "/contact-us?subject=recorders",
      linkText: "استعلام دستگاه‌های ضبط",
    },
    {
      id: "alarms",
      title: "سیستم‌های دزدگیر اماکن",
      subtitle: "پنل مرکزی سیم‌کارتی و بی‌سیم",
      description:
        "دزدگیرهای نسل جدید با قابلیت برقراری تماس و ارسال پیامک فوری در هنگام سرقت، مجهز به اپلیکیشن اختصاصی و سنسورهای دقیق ضد خطای وزنی.",
      icon: BellRing,
      badge: "امنیت ۱۰۰٪",
      features: [
        "تماس و پیامک آنی روی چندین شماره همزمان",
        "چشمی‌های وزنی حساس به انسان (عدم تحریک با حیوانات)",
        "باتری پشتیبان قدرتمند در زمان قطع احتمالی برق",
        "کنترل از راه دور با ریموت برد بلند و نرم‌افزار موبایل",
      ],
      href: "/contact-us?subject=alarms",
      linkText: "استعلام پکیج‌های دزدگیر",
    },
    {
      id: "accessories",
      title: "هارد و تجهیزات نصب جانبی",
      subtitle: "هارد بنفش، کابل مس، آداپتور و رک",
      description:
        "تجهیزات مکمل استاندارد شامل هارد دیسک‌های نظارتی وسترن بنفش، کابل‌های تمام مس با افت سیگنال صفر، منابع تغذیه پایدار و فیش‌های ضد نویز.",
      icon: ShieldCheck,
      badge: "لوازم اورجینال",
      features: [
        "هارد دیسک تخصصی نظارتی Western Digital بنفش",
        "کابل ترکیبی تمام مس با روکش مقاوم بیرونی",
        "آداپتور و منبع تغذیه مرکزی مجهز به مدار محافظ",
        "رک‌های دیواری و اتصالات باکیفیت جهت طول عمر بالا",
      ],
      href: "/contact-us?subject=accessories",
      linkText: "درخواست تجهیزات جانبی",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-muted/30 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span>دسته‌بندی تجهیزات حفاظتی آرگوس</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            محصولات تخصصی نظارت تصویری و دزدگیر
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            تمامی تجهیزات با ضمانت اصالت کالا، تست فنی قبل از ارسال و ۲۴ ماه گارانتی
            طلایی شرکت آرگوس تقدیم شما می‌گردد.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.id}
                id={cat.id}
                className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
              >
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {cat.badge}
                  </span>
                </div>

                <CardHeader className="space-y-3 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">
                      {cat.title}
                    </CardTitle>
                    <div className="text-xs font-medium text-primary mt-0.5">
                      {cat.subtitle}
                    </div>
                  </div>
                  <CardDescription className="text-xs leading-relaxed">
                    {cat.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 border-t pt-3">
                    {cat.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={cat.href}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className:
                        "w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors",
                    })}
                  >
                    <span>{cat.linkText}</span>
                    <ArrowLeft className="size-3.5 rtl:-scale-x-100" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
