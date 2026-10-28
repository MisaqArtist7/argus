"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShieldCheck, ArrowLeft } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <ShieldCheck className="size-5" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight">
              آرگوس
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              تماس با ما
            </Link>
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/request-otp"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            ورود با کد یکبار مصرف
          </Link>
          <Link
            href="/register"
            className={buttonVariants({ size: "sm" })}
          >
            ثبت‌نام
            <ArrowLeft className="size-4 ms-1 rtl:-scale-x-100" />
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="منوی ناوبری">
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72 p-6">
              <SheetHeader className="text-start p-0 pb-6 border-b">
                <SheetTitle className="flex items-center gap-2 text-lg font-bold">
                  <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <ShieldCheck className="size-4" />
                  </div>
                  سامانه آرگوس
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col justify-between h-[calc(100%-4rem)] pt-6">
                <nav className="flex flex-col gap-4 text-start">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <span>صفحه اصلی</span>
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <span>تماس با ما</span>
                  </Link>
                </nav>

                <div className="flex flex-col gap-2 pt-6 border-t">
                  <Link
                    href="/request-otp"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full justify-center",
                    })}
                  >
                    ورود با کد یکبار مصرف
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      className: "w-full justify-center",
                    })}
                  >
                    ثبت‌نام در سامانه
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
