"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side UI validation
    if (!formData.fullName.trim()) {
      setErrorMessage("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setErrorMessage(
        "شماره موبایل نامعتبر است. شماره باید ۱۱ رقمی و با ۰۹ آغاز شود."
      );
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("کلمه عبور باید حداقل شامل ۸ کاراکتر باشد.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("کلمه عبور و تکرار آن یکسان نیستند.");
      return;
    }

    if (!formData.termsAccepted) {
      setErrorMessage("لطفاً قوانین و شرایط استفاده از سامانه را تأیید نمایید.");
      return;
    }

    // TODO: connect to backend
  };

  return (
    <Card className="w-full border-2 border-neutral-200 bg-white rounded-2xl shadow-xs">
      <CardHeader className="space-y-1.5 text-center">
        <CardTitle className="text-2xl font-bold text-neutral-950">ثبت‌نام در آرگوس</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-neutral-600">
          مشخصات خود را برای افتتاح حساب کاربری وارد نمایید
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {errorMessage && (
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>خطای ثبت اطلاعات</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="fullName">نام و نام خانوادگی *</Label>
            <Input
              id="fullName"
              placeholder="مثال: سارا محمدی"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">شماره همراه *</Label>
            <Input
              id="phone"
              type="tel"
              dir="ltr"
              placeholder="09123456789"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              autoComplete="tel"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">کلمه عبور *</Label>
            <Input
              id="password"
              type="password"
              dir="ltr"
              placeholder="حداقل ۸ کاراکتر"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              autoComplete="new-password"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تکرار کلمه عبور *</Label>
            <Input
              id="confirmPassword"
              type="password"
              dir="ltr"
              placeholder="تکرار کلمه عبور"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              autoComplete="new-password"
            />
          </div>

          <div className="flex items-start gap-2 pt-2">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  termsAccepted: checked === true,
                }))
              }
              className="mt-0.5"
            />
            <Label
              htmlFor="terms"
              className="text-xs leading-normal font-normal text-muted-foreground cursor-pointer"
            >
              کلیه قوانین، ضوابط و شرایط استفاده از خدمات سامانه آرگوس را مطالعه
              نموده و می‌پذیرم.
            </Label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-2">
          <Button
            type="submit"
            className="w-full font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-md border border-amber-500/30"
            size="lg"
          >
            <UserPlus className="size-4 me-2" />
            ثبت‌نام و ادامه
          </Button>

          <div className="text-center text-xs text-neutral-600">
            قبلاً در سامانه ثبت‌نام کرده‌اید؟{" "}
            <Link
              href="/request-otp"
              className="font-bold text-amber-600 underline-offset-4 hover:underline"
            >
              ورود با کد یکبار مصرف
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
