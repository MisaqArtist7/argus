"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, KeyRound, ArrowRight, RotateCcw } from "lucide-react";
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

export function VerifyOtpForm() {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedCode = code.trim();
    if (!trimmedCode) {
      setErrorMessage("لطفاً کد تأیید ارسال‌شده را وارد کنید.");
      return;
    }

    if (!/^\d{4,6}$/.test(trimmedCode)) {
      setErrorMessage("کد تأیید باید تنها شامل ارقام لاتین (۴ تا ۶ رقم) باشد.");
      return;
    }

    // TODO: connect to backend
  };

  return (
    <Card className="w-full border-border/80 shadow-md">
      <CardHeader className="space-y-1.5 text-center">
        <CardTitle className="text-2xl font-bold">تأیید کد یکبار مصرف</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          کد پیامک‌شده به شماره همراه خود را وارد کنید
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {errorMessage && (
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>خطای اعتبارسنجی کد</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="otpCode" className="text-center block">
              کد تأیید پیامکی *
            </Label>
            <div className="max-w-50 mx-auto">
              <Input
                id="otpCode"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                dir="ltr"
                placeholder="••••••"
                className="text-center font-mono text-xl tracking-[0.5em] h-12"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                autoComplete="one-time-code"
                autoFocus
              />
            </div>
            <p className="text-center text-[11px] text-muted-foreground pt-1">
              کد ارسال‌شده معمولاً ۵ یا ۶ رقمی است.
            </p>
          </div>

          <div className="flex items-center justify-center pt-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => {
                // TODO: connect to backend
              }}
            >
              <RotateCcw className="size-3.5 me-1.5" />
              ارسال مجدد کد تأیید
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-2">
          <Button type="submit" className="w-full font-medium" size="lg">
            <KeyRound className="size-4 me-2" />
            تأیید و ورود به پنل
          </Button>

          <div className="text-center text-xs text-muted-foreground">
            شماره را اشتباه وارد کرده‌اید؟{" "}
            <Link
              href="/request-otp"
              className="font-semibold text-primary underline-offset-4 hover:underline inline-flex items-center gap-1"
            >
              ویرایش شماره همراه
              <ArrowRight className="size-3 rtl:-scale-x-100" />
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
