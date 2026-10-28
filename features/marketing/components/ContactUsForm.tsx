"use client";

import { useState } from "react";
import { AlertCircle, Send } from "lucide-react";
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
    message: "",
    sendCopy: false,
  });

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
      setErrorMessage("لطفاً شماره تماس یا ایمیل خود را وارد کنید.");
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage("لطفاً موضوع پیام را مشخص کنید.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage("متن پیام باید حداقل شامل ۱۰ کاراکتر باشد.");
      return;
    }

    // TODO: connect to backend
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="space-y-1.5">
        <CardTitle className="text-xl font-bold">فرم ارسال پیام</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          مشخصات و پیام خود را یادداشت کنید تا در اسرع وقت پاسخگوی شما باشیم.
        </CardDescription>
      </CardHeader>

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
              <Label htmlFor="name">نام و نام خانوادگی *</Label>
              <Input
                id="name"
                name="name"
                placeholder="مثال: علی رضایی"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">شماره همراه یا ایمیل *</Label>
              <Input
                id="contact"
                name="contact"
                dir="ltr"
                placeholder="09123456789 یا info@example.com"
                value={formData.contact}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, contact: e.target.value }))
                }
                autoComplete="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">موضوع پیام *</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="مثال: درخواست پشتیبانی یا همکاری"
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">متن پیام *</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="شرح پیام یا درخواست خود را اینجا بنویسید..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Checkbox
              id="sendCopy"
              checked={formData.sendCopy}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  sendCopy: checked === true,
                }))
              }
            />
            <Label
              htmlFor="sendCopy"
              className="text-xs font-normal text-muted-foreground cursor-pointer"
            >
              ارسال رونوشت این پیام به ایمیل من
            </Label>
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          <Button type="submit" className="w-full sm:w-auto px-6">
            <Send className="size-4 me-2 rtl:-scale-x-100" />
            ارسال پیام
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
