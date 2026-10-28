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
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            تکنولوژی‌های حفاظتی روز
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            ویژگی‌های فنی و مزایای رقابتی آرگوس
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                className="group transition-all duration-300 hover:shadow-lg hover:border-primary/50"
              >
                <CardHeader className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
