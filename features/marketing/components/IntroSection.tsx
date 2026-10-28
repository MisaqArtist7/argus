import { Eye, ShieldCheck, Smartphone, Wrench } from "lucide-react";

export function IntroSection() {
  const pillars = [
    {
      icon: Eye,
      title: "دید در شب رنگی Full-Color",
      description:
        "حتی در تاریکی مطلق و بدون نور محیط، تصاویر را با کیفیت تمام‌رنگی، بدون نویز و با تفکیک واضح چهره و پلاک ثبت کنید.",
    },
    {
      icon: Smartphone,
      title: "انتقال تصویر P2P رایگان",
      description:
        "پایش زنده و بازپخش ویدیوها روی گوشی هوشمند بدون نیاز به پرداخت اشتراک سالانه یا خرید آی‌پی استاتیک مخابراتی.",
    },
    {
      icon: ShieldCheck,
      title: "۲۴ ماه گارانتی طلایی تعویض",
      description:
        "کلیه دوربین‌ها، دستگاه‌های ضبط و دزدگیرهای آرگوس دارای ضمانت معتبر تعویض قطعه و ۵ سال خدمات پشتیبانی فنی هستند.",
    },
    {
      icon: Wrench,
      title: "نصب استاندارد و تمیز",
      description:
        "اجرای پروژه با کابل‌کشی اصولی، لوله‌گذاری و داکت‌کشی منظم توسط نصابان مجرب، جهت تضمین طول عمر تجهیزات و زیبایی فضا.",
    },
  ];

  return (
    <section className="border-y bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            چرا برند آرگوس؟
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            آرامش خاطر با تجهیزات نظارتی و امنیتی استاندارد
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            سیستم‌های مداربسته و دزدگیر آرگوس طراحی شده‌اند تا در هر شرایط آب‌وهوایی
            و بدون وقفه، از سرمایه، خانه و کسب‌وکار شما محافظت نمایند.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 rounded-xl border bg-card/60 p-6 shadow-xs transition-colors hover:border-primary/40 hover:bg-card"
              >
                <div className="flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
