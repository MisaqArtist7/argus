"use client";

import { useState } from "react";
import { AlertCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

export function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    projectType: "مسکونی / اداری",
    message: "",
    needVisit: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side UI validation
    if (!formData.name.trim()) {
      setErrorMessage("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }

    if (!formData.contact.trim()) {
      setErrorMessage("لطفاً شماره تماس (موبایل) خود را جهت تماس کارشناس وارد کنید.");
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage("لطفاً عنوان استعلام یا نوع تجهیزات مورد نیاز را مشخص کنید.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      setErrorMessage("لطفاً توضیحات یا متراژ و تعداد دوربین مورد نیاز را وارد کنید.");
      return;
    }

    setIsSuccess(true);
  };

  return (
    <Card className="w-full shadow-xs border-2 border-neutral-200 bg-white rounded-2xl">
      <CardHeader className="space-y-1.5">
        <CardTitle className="text-xl font-bold text-neutral-950">
          فرم استعلام قیمت و مشاوره تخصصی آرگوس
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-neutral-600">
          مشخصات فضای خود و درخواستتان را بنویسید تا کارشناس فنی آرگوس در کمتر از
          ۲ ساعت کاری پیش‌فاکتور دقیق و مشاوره لازم را به شما ارائه دهد.
        </CardDescription>
      </CardHeader>

      {isSuccess ? (
        <CardContent className="py-8">
          <div className="flex flex-col items-center text-center space-y-3 rounded-2xl border-2 border-amber-400/50 bg-amber-400/10 p-6">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-neutral-950 text-amber-400 border border-amber-400/30 shadow-sm">
              <CheckCircle2 className="size-7 text-amber-500" />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-950">
              درخواست شما با موفقیت ثبت شد
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 max-w-md">
              از حسن اعتماد شما به برند آرگوس سپاسگزاریم. کارشناسان واحد فروش و فنی به
              زودی با شماره همراه شما تماس خواهند گرفت.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSuccess(false)}
              className="mt-3 border-2 border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-amber-400 font-bold"
            >
              ثبت درخواست جدید
            </Button>
          </div>
        </CardContent>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {errorMessage && (
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>خطا در اعتبارسنجی</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-900 font-bold text-xs">نام و نام خانوادگی *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="مثال: محمد احمدی"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  autoComplete="name"
                  className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-neutral-900 font-bold text-xs">شماره تلفن همراه جهت تماس *</Label>
                <Input
                  id="contact"
                  name="contact"
                  dir="ltr"
                  placeholder="۰۹۱۲XXXXXXX"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, contact: e.target.value }))
                  }
                  autoComplete="tel"
                  className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-neutral-900 font-bold text-xs">موضوع استعلام / تجهیزات *</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="مثال: پکیج ۴ دوربین 5MP یا دزدگیر سیم‌کارتی"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-neutral-900 font-bold text-xs">نوع کاربری محل</Label>
                <Input
                  id="projectType"
                  name="projectType"
                  placeholder="مثال: مغازه، ویلا، انبار، شرکت یا منزل"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, projectType: e.target.value }))
                  }
                  className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-neutral-900 font-bold text-xs">توضیحات و نیازمندی‌ها *</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="متراژ تقریبی، تعداد دوربین‌های مورد نیاز، نیاز به دید در شب رنگی یا دزدگیر، یا درخواست خدمات نصب در محل را ذکر بفرمایید..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="border-neutral-300 focus-visible:border-amber-400 focus-visible:ring-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Checkbox
                id="needVisit"
                checked={formData.needVisit}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    needVisit: checked === true,
                  }))
                }
              />
              <Label
                htmlFor="needVisit"
                className="text-xs font-medium text-neutral-700 cursor-pointer"
              >
                درخواست بازدید و کارشناسی حضوری رایگان در محل (ویژه پروژه‌ها)
              </Label>
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <Button
              type="submit"
              className="w-full sm:w-auto px-7 font-extrabold bg-amber-400 text-neutral-950 hover:bg-amber-500 shadow-md border border-amber-500/30"
            >
              <Send className="size-4 me-2 rtl:-scale-x-100" />
              ارسال درخواست استعلام و مشاوره
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  );
}
