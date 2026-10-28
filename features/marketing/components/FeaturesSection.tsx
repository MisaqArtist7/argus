import {
  Cpu,
  Moon,
  HardDrive,
  ShieldAlert,
  Radio,
  Volume2,
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
      title: "هوش مصنوعی و تفکیک انسان و خودرو",
      description:
        "الگوریتم‌های هوشمند جهت تشخیص دقیق سوژه انسانی و وسایل نقلیه و کاهش ۹۵٪ هشدارهای کاذب ناشی از حرکت باد، درختان یا حشرات.",
      icon: Cpu,
    },
    {
      title: "دید در شب رنگی وارم‌لایت (Full-Color)",
      description:
        "ثبت تصاویر با کیفیت و رنگ واقعی در تاریکی مطلق؛ امکان شناسایی رنگ لباس، مدل خودرو و چهره افراد حتی در نیمه‌شب.",
      icon: Moon,
    },
    {
      title: "فشرده‌سازی پیشرفته H.265+",
      description:
        "کاهش بیش از ۵۰ درصدی حجم فایل‌های ضبط‌شده و ترافیک اینترنت، با امکان نگهداری طولانی‌تر آرشیو تصاویر روی هارد دیسک.",
      icon: HardDrive,
    },
    {
      title: "دزدگیر سیم‌کارتی با واکنش ۳ ثانیه‌ای",
      description:
        "اعلام سرقت آنی از طریق تماس تلفنی صوتی و پیامک فارسی همزمان با به صدا درآمدن آژیرهای محیطی پرقدرت ضد نفوذ.",
      icon: ShieldAlert,
    },
    {
      title: "انتقال تصویر ابری P2P پایدار",
      description:
        "تماشای آنلاین دوربین‌ها و بازبینی ضبط‌ها از طریق تلفن همراه (iOS و Android) و کامپیوتر در هر نقطه با سرورهای سریع و بدون قطعی.",
      icon: Radio,
    },
    {
      title: "صدای دوطرفه و میکروفون داخلی ضد نویز",
      description:
        "مجهز به میکروفون پرقدرت با ضبط همزمان صدا و تصویر محیط، به همراه امکان پخش صدا و هشدار صوتی برای اخطار به متجاوزین.",
      icon: Volume2,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-neutral-50/70 border-y border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600">
            تکنولوژی‌های حفاظتی روز
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-neutral-950">
            ویژگی‌های فنی و مزایای رقابتی آرگوس
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            ترکیب سخت‌افزار صنعتی باکیفیت و هوش مصنوعی پیشرفته برای ایجاد بیشترین
            ضریب امنیت برای محیط کار و زندگی شما.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group rounded-2xl border border-neutral-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg"
              >
                <CardHeader className="space-y-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-xs transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-400">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-bold text-neutral-950">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed sm:text-sm text-neutral-600">
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
