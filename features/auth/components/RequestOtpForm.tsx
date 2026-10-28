"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, Smartphone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function RequestOtpForm() {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      setErrorMessage(
        "لطفاً یک شماره همراه معتبر ۱۱ رقمی (شروع با ۰۹) وارد کنید."
      );
      return;
    }

    // TODO: connect to backend
  };

  return (
    <Card className="w-full border-2 border-neutral-200 bg-white rounded-2xl shadow-xs">
      <CardHeader className="space-y-1.5 text-center">
        <CardTitle className="text-2xl font-bold text-neutral-950">ورود به سامانه</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-neutral-600">
          شماره تلفن همراه خود را وارد کنید تا کد یکبار مصرف پیامک شود
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {errorMessage && (
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>خطای ورود شماره</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-neutral-900 font-bold text-xs">شماره تلفن همراه *</Label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                dir="ltr"
                placeholder="09123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                autoFocus
                className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
              />
            </div>
            <p className="text-[11px] text-neutral-500">
              کد یکبار مصرف ۵ یا ۶ رقمی به این شماره ارسال خواهد شد.
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-2">
          <Button
            type="submit"
            className="w-full font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-md border border-amber-500/30"
            size="lg"
          >
            <Smartphone className="size-4 me-2" />
            دریافت کد تأیید
            <ArrowLeft className="size-4 ms-2 rtl:-scale-x-100" />
          </Button>

          <div className="flex flex-col items-center gap-2 text-center text-xs text-neutral-600">
            <div>
              کد را قبلاً دریافت کرده‌اید؟{" "}
              <Link
                href="/verify-otp"
                className="font-bold text-amber-600 underline-offset-4 hover:underline"
              >
                وارد کردن کد تأیید
              </Link>
            </div>
            <div>
              حساب کاربری ندارید؟{" "}
              <Link
                href="/register"
                className="font-bold text-amber-600 underline-offset-4 hover:underline"
              >
                ثبت‌نام جدید
              </Link>
            </div>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
