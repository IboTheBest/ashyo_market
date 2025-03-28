import RegisterForm from "@/components/RegisterForm";
import { useTranslations } from "next-intl";

export default function RegisterPage() {
  const t = useTranslations("register");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{t("heading")}</h1>
          <p className="mt-2 text-sm text-gray-600">
            <a href="/login" className="font-medium text-primary hover:text-primary/90 hover:underline">
              {t("loginText")}
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}