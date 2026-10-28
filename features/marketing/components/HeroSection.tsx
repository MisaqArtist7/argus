import Link from "next/link";
import {
  Cctv,
  BellRing,
  HardDrive,
  Eye,
  ArrowLeft,
  CheckCircle2,
  Radio,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 lg:py-24 bg-white">
      {/* Background radial gradient glow in soft amber */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-amber-400/20 via-amber-300/10 to-transparent opacity-60 sm:w-288.75 inset-s-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Main Hero Text */}
          <div className="space-y-6 text-center lg:col-span-7 lg:text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-neutral-950 shadow-xs">
              <span className="flex size-2 rounded-full bg-amber-500 animate-pulse" />
              <Cctv className="size-4 text-amber-600" />
              <span>تجهیزات نظارت تصویری و دزدگیر اماکن آرگوس</span>
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-tight lg:text-5.5xl lg:leading-tight text-neutral-950">
              امنیت بی‌وقفه، نظارت هوشمند؛
              <span className="block text-amber-500 mt-1">
                تخصصی‌ترین سیستم‌های مداربسته و ضدسرقت
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0">
              ارائه مدرن‌ترین دوربین‌های مداربسته دید در شب رنگی (وارم‌لایت)،
              دستگاه‌های ضبط هوشمند XVR/NVR با انتقال تصویر پرسرعت بدون قطعی،
              و پنل‌های پیشرفته دزدگیر سیم‌کارتی آرگوس با گارانتی طلایی تعویض و خدمات
              نصب تخصصی در سراسر کشور.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#packages"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-full sm:w-auto px-7 font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-lg shadow-amber-500/20 border border-amber-500/30",
                })}
              >
                مشاهده پکیج‌های آماده و پرفروش
                <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
              </a>
              <Link
                href="/contact-us"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full sm:w-auto px-6 font-bold border-2 border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-amber-400 transition-colors",
                })}
              >
                مشاوره و بازدید رایگان پروژه
              </Link>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-semibold text-neutral-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-amber-500 shrink-0" />
                <span>۲۴ ماه گارانتی تعویض</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-amber-500 shrink-0" />
                <span>دید در شب تمام رنگی</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-amber-500 shrink-0" />
                <span>انتقال تصویر P2P رایگان</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-amber-500 shrink-0" />
                <span>دزدگیر سیم‌کارتی ضدخطا</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation Element: High-Tech Argus Security Console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border-2 border-neutral-900 bg-neutral-950 p-5 shadow-2xl text-white ring-1 ring-amber-400/30">
              {/* Header of Console */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex size-2.5 rounded-full bg-amber-400"></span>
                  </span>
                  <span className="text-xs font-bold text-white">
                    مرکز نظارت هوشمند آرگوس
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-neutral-900 border border-amber-400/30 px-2 py-0.5 rounded font-bold">
                  <span>ARGUS-LIVE</span>
                </div>
              </div>

              {/* 4-Channel Live View Simulation Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {/* Channel 1 */}
                <div className="relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 text-neutral-100 aspect-4/3 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center gap-1 font-mono text-amber-400 font-semibold">
                      <span className="size-1.5 rounded-full bg-amber-400"></span>
                      CH-01: ورودی
                    </span>
                    <span className="text-neutral-400 text-[9px] font-mono">4K ULTRA</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto text-neutral-400">
                    <Eye className="size-6 text-amber-400 mb-1" />
                    <span className="text-[10px] text-neutral-200 font-medium">دید در شب وارم‌لایت</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-neutral-400">
                    <span>تشخیص سوژه: فعال</span>
                    <span className="font-mono text-amber-400 font-bold">REC ●</span>
                  </div>
                </div>

                {/* Channel 2 */}
                <div className="relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 text-neutral-100 aspect-4/3 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center gap-1 font-mono text-amber-400 font-semibold">
                      <span className="size-1.5 rounded-full bg-amber-400"></span>
                      CH-02: محوطه
                    </span>
                    <span className="text-neutral-400 text-[9px] font-mono">5MP PRO</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto text-neutral-400">
                    <Cctv className="size-6 text-amber-400 mb-1" />
                    <span className="text-[10px] text-neutral-200 font-medium">بدنه فلزی ضدآب</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-neutral-400">
                    <span>زوم دیجیتال 4X</span>
                    <span className="font-mono text-amber-400 font-bold">REC ●</span>
                  </div>
                </div>

                {/* Channel 3: DVR Status */}
                <div className="rounded-lg bg-neutral-900/90 border border-neutral-800 p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-md bg-amber-400/20 text-amber-400 border border-amber-400/30">
                      <HardDrive className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">دستگاه XVR / NVR</div>
                      <div className="text-[10px] text-neutral-400">فشرده‌سازی H.265+</div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-amber-400 font-semibold">
                    هارد بنفش: ۱ ترابایت فعال
                  </div>
                </div>

                {/* Channel 4: Alarm Status */}
                <div className="rounded-lg bg-neutral-900/90 border border-neutral-800 p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-md bg-amber-400/20 text-amber-400 border border-amber-400/30">
                      <BellRing className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">دزدگیر سیم‌کارتی</div>
                      <div className="text-[10px] text-neutral-400">پنل مرکزی آرگوس</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400">
                      وضعیت: مسلح (فعال)
                    </span>
                    <span className="size-2 rounded-full bg-amber-400"></span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Status Strip */}
              <div className="mt-3.5 flex items-center justify-between rounded-lg border border-neutral-800 p-2.5 bg-neutral-900 text-[11px]">
                <div className="flex items-center gap-2">
                  <Radio className="size-3.5 text-amber-400 animate-pulse" />
                  <span className="text-neutral-300">
                    انتقال تصویر ابری P2P روی موبایل
                  </span>
                </div>
                <span className="font-bold text-amber-400">آنلاین و متصل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
