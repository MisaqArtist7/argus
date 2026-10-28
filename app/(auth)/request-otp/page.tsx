import { RequestOtpPage } from "@/features/auth/pages/RequestOtpPage";

export const metadata = {
  title: "دریافت کد ورود | آرگوس",
  description: "ورود به سامانه آرگوس از طریق پیامک کد تأیید یکبار مصرف",
};

export default function Page() {
  return <RequestOtpPage />;
}
