import { Zap, ShieldCheck, Cpu } from "lucide-react";

export function IntroSection() {
  return (
    <section className="border-y bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            طراحی‌شده برای پاسخگویی به بالاترین معیارهای فنی
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            سامانه آرگوس بستری استاندارد، پایدار و امن را فراهم می‌آورد تا مدیریت
            دسترسی‌ها و ثبت هویت کاربران به شیوه‌ای چابک و با حداکثر اطمینان انجام شود.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-2 p-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="size-6" />
            </div>
            <h3 className="font-heading text-base font-semibold">سرعت و پاسخگویی بالا</h3>
            <p className="text-xs leading-normal text-muted-foreground">
              بهینه‌سازی شده برای اجرای سریع عملیات و حداقل تأخیر در تبادل داده‌ها.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="font-heading text-base font-semibold">حفاظت چندسطحی اطلاعات</h3>
            <p className="text-xs leading-normal text-muted-foreground">
              پیروی از پروتکل‌های ایمن و استانداردهای سخت‌گیرانه حفظ حریم خصوصی.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Cpu className="size-6" />
            </div>
            <h3 className="font-heading text-base font-semibold">معماری ماژولار و توسعه‌پذیر</h3>
            <p className="text-xs leading-normal text-muted-foreground">
              قابلیت توسعه و ارتباط مستقیم با زیرساخت‌های نوین نرم‌افزاری و وب‌سرویس‌ها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
