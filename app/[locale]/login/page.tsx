import LoginForm from "@/components/LoginForm";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("login")
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{t("heading")}</h1>
          <p className="mt-2 text-sm text-gray-600">
            <a href="/register" className="font-medium text-primary hover:text-primary/90 hover:underline">
              {t("registerText")}
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

