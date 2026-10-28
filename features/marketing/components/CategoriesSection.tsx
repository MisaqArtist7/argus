import Link from "next/link";
import {
  Cctv,
  HardDrive,
  BellRing,
  ArrowLeft,
  Check,
  ShieldCheck,
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
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 px-3 py-1 text-xs font-bold text-neutral-900">
            <span>دسته‌بندی تجهیزات حفاظتی آرگوس</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-neutral-950">
            محصولات تخصصی نظارت تصویری و دزدگیر
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-400"
              >
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-neutral-950 text-amber-400 border border-amber-400/30 px-2.5 py-0.5 text-[11px] font-bold shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                <CardHeader className="space-y-3 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-400">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-neutral-950">
                      {cat.title}
                    </CardTitle>
                    <div className="text-xs font-bold text-amber-600 mt-0.5">
                      {cat.subtitle}
                    </div>
                  </div>
                  <CardDescription className="text-xs leading-relaxed text-neutral-600">
                    {cat.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 border-t border-neutral-200 pt-3">
                    {cat.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-neutral-700">
                        <Check className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
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
                        "w-full justify-between border-2 border-neutral-900 text-neutral-900 font-bold group-hover:bg-neutral-900 group-hover:text-amber-400 group-hover:border-neutral-900 transition-colors",
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
