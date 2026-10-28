"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Cctv, Phone, ArrowLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "صفحه اصلی", href: "/" },
    { label: "دوربین‌های مداربسته", href: "/#cameras" },
    { label: "دستگاه‌های ضبط (XVR/NVR)", href: "/#recorders" },
    { label: "دزدگیر اماکن", href: "/#alarms" },
    { label: "پکیج‌های اقتصادی", href: "/#packages" },
    { label: "تماس و مشاوره", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-sm">
              <Cctv className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight leading-tight text-neutral-950">
                آرگوس
              </span>
              <span className="text-[10px] text-amber-600 font-semibold leading-none">
                سیستم‌های مداربسته و دزدگیر
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-neutral-700 transition-colors hover:text-amber-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:02188880000"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-neutral-950 hover:border-amber-400/50 transition-colors ps-2.5 pe-3 py-1.5 rounded-md border border-neutral-200 bg-neutral-50 shadow-xs"
          >
            <Phone className="size-3.5 text-amber-500" />
            <span dir="ltr" className="font-mono font-bold">۰۲۱ - ۸۸۸۸۰۰۰۰</span>
          </a>
          <Link
            href="/contact-us"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-amber-400 font-bold transition-colors shadow-xs",
            })}
          >
            استعلام قیمت فوری
          </Link>
          <Link
            href="/register"
            className={buttonVariants({
              size: "sm",
              className:
                "bg-amber-400 text-neutral-950 hover:bg-amber-500 font-bold shadow-xs border border-amber-500/30",
            })}
          >
            حساب کاربری
            <ArrowLeft className="size-4 ms-1 rtl:-scale-x-100" />
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:02188880000"
            className="flex items-center justify-center size-9 rounded-md border border-neutral-200 bg-neutral-50 text-amber-500 shadow-xs"
            aria-label="تماس با کارشناس فروش"
          >
            <Phone className="size-4" />
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="منوی ناوبری">
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-80 p-6 bg-white">
              <SheetHeader className="text-start p-0 pb-5 border-b border-neutral-200">
                <SheetTitle className="flex items-center gap-2.5 text-base font-bold">
                  <div className="flex size-8 items-center justify-center rounded-md bg-neutral-950 text-amber-400 border border-amber-400/30">
                    <Cctv className="size-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-neutral-950">تجهیزات حفاظتی آرگوس</div>
                    <div className="text-[11px] text-amber-600 font-medium">
                      دوربین مداربسته، دستگاه ضبط و دزدگیر
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col justify-between h-[calc(100%-4rem)] pt-5">
                <nav className="flex flex-col gap-2 text-start">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-amber-400/10 hover:text-neutral-950"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-2.5 pt-6 border-t border-neutral-200">
                  <a
                    href="tel:02188880000"
                    className="flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 py-2.5 text-xs font-bold text-neutral-900"
                  >
                    <Phone className="size-4 text-amber-500" />
                    <span>تماس با واحد فروش: ۰۲۱۸۸۸۸۰۰۰۰</span>
                  </a>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full justify-center border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-amber-400 font-bold",
                    })}
                  >
                    درخواست استعلام قیمت و مشاوره
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      className: "w-full justify-center bg-amber-400 text-neutral-950 hover:bg-amber-500 font-bold shadow-xs border border-amber-500/30",
                    })}
                  >
                    ورود / ثبت‌نام در سامانه
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
