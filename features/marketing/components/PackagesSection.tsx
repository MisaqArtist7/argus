import Link from "next/link";
import {
  Cctv,
  HardDrive,
  BellRing,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  PhoneCall,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function PackagesSection() {
  const packages = [
    {
      id: "pkg-2-cam",
      title: "پکیج اقتصادی ۲ دوربین",
      badge: "مناسب مغازه و ورودی",
      isPopular: false,
      idealFor: "دفاتر کار، مغازه‌ها، مطب و ورودی ساختمان",
      specs: [
        "۲ عدد دوربین ۲ مگاپیکسل دید در شب رنگی (وارم‌لایت)",
        "۱ عدد دستگاه ضبط ۴ کانال هوشمند با انتقال تصویر رایگان",
        "هارد ۵۰۰ گیگابایت اورجینال وسترن بنفش",
        "آداپتور و منبع تغذیه استاندارد مرکزی با نویزگیر",
        "۲۰ متر کابل ترکیبی تمام مس با فیش‌های طلایی BNC",
        "گارانتی طلایی ۲۴ ماهه تعویض شرکت آرگوس",
      ],
      priceNote: "استعلام قیمت ویژه روز با تخفیف نقدی",
    },
    {
      id: "pkg-4-cam",
      title: "پکیج حرفه‌ای ۴ دوربین 5MP",
      badge: "⭐ پرفروش‌ترین پکیج",
      isPopular: true,
      idealFor: "ویلاها، فروشگاه‌های زنجیره‌ای، کارگاه و مجتمع‌ها",
      specs: [
        "۴ عدد دوربین فلزی ضدآب 5 مگاپیکسل با سنسور دید در شب سونی",
        "۱ عدد دستگاه رکوردر ۴ کانال 5MP با قابلیت تشخیص چهره",
        "هارد ۱ ترابایت وسترن دیجیتال بنفش با ضبط مداوم ۲۰ روزه",
        "منبع تغذیه صنعتی ۱۰ آمپر مجهز به فیوز محافظتی",
        "۴۰ متر کابل کواکسیال تمام مس با اتصالات کامل نصب",
        "۲۴ ماه گارانتی بی‌قیدوشرط + پشتیبانی نصب در محل",
      ],
      priceNote: "بهترین انتخاب از نظر کارایی، کیفیت و هزینه",
    },
    {
      id: "pkg-8-cam",
      title: "پکیج جامع ۸ دوربین نظارتی",
      badge: "سازمانی و صنعتی",
      isPopular: false,
      idealFor: "کارخانجات، پارکینگ مجتمع، انبار و شرکت‌ها",
      specs: [
        "۸ عدد دوربین بالت و دام واید با بدنه آلومینیومی مستحکم",
        "۱ عدد دستگاه ۸ کانال هوشمند با خروجی تصویر 4K Ultra HD",
        "هارد ۲ ترابایت بنفش با قابلیت ذخیره‌سازی طولانی‌مدت",
        "پاور مرکزی ۲۰ آمپر صنعتی با سیستم خنک‌کننده فن‌دار",
        "۸۰ متر کابل ترکیبی شیلددار ضد نویز و نوسان برق",
        "ارائه نقشه چیدمان دوربین‌ها و مشاوره جانمایی رایگان",
      ],
      priceNote: "امکان سفارشی‌سازی تعداد بالت و دام متناسب با فضا",
    },
    {
      id: "pkg-alarm",
      title: "پکیج کامل دزدگیر سیم‌کارتی",
      badge: "ضدسرقت هوشمند",
      isPopular: true,
      idealFor: "منازل مسکونی، انبارها، باغ و فروشگاه‌های حساس",
      specs: [
        "پنل مرکزی هوشمند سیم‌کارتی آرگوس با تماس صوتی و پیامک فارسی",
        "۲ عدد چشمی حرکتی دیجیتال ضد حیوانات (عدم آژیر خطا)",
        "بلندگوی پرقدرت با کاور فلزی ضد باران و دستکاری",
        "باتری ۴.۵ آمپری جهت روشن ماندن دستگاه در قطعی احتمالی برق",
        "۲ عدد ریموت هاپینگ کد ضد هک و کپی با برد بالا",
        "اپلیکیشن اندروید و iOS جهت کنترل فعال/غیرفعال از هر نقطه",
      ],
      priceNote: "نصب سریع و بدون تخریب با بیشترین ضریب امنیت",
    },
  ];

  return (
    <section id="packages" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            <span>پکیج‌های کامل آماده نصب</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            پکیج‌های اقتصادی و پرفروش آرگوس
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            تمامی پکیج‌ها شامل کلیه متعلقات مورد نیاز برای نصب بوده و نیازی به خرید
            جداگانه لوازم جانبی ندارند.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${
                pkg.isPopular
                  ? "border-primary ring-2 ring-primary/20 shadow-primary/5"
                  : "hover:border-primary/40"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 right-6">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground shadow">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {!pkg.isPopular && (
                  <span className="inline-block rounded-md bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground mb-2">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold mt-1">
                  {pkg.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 mb-4">
                  {pkg.idealFor}
                </p>

                <div className="border-t pt-4 space-y-2.5">
                  {pkg.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t pt-4 space-y-3">
                <div className="rounded-lg bg-muted/50 p-2.5 text-center text-xs font-medium text-foreground">
                  {pkg.priceNote}
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/contact-us?package=${encodeURIComponent(pkg.title)}`}
                    className={buttonVariants({
                      variant: pkg.isPopular ? "default" : "outline",
                      className: "w-full justify-center font-bold text-xs sm:text-sm",
                    })}
                  >
                    استعلام قیمت و سفارش پکیج
                    <ArrowLeft className="size-4 ms-1.5 rtl:-scale-x-100" />
                  </Link>

                  <a
                    href="tel:02188880000"
                    className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <PhoneCall className="size-3.5" />
                    <span>مشاوره تلفنی رایگان: ۰۲۱۸۸۸۸۰۰۰۰</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
