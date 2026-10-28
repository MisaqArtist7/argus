import { VerifyOtpPage } from "@/features/auth/pages/VerifyOtpPage";

export const metadata = {
  title: "تأیید کد یکبار مصرف | آرگوس",
  description: "اعتبارسنجی و ورود به سامانه با وارد کردن کد پیامک‌شده",
};

export default function Page() {
  return <VerifyOtpPage />;
}
