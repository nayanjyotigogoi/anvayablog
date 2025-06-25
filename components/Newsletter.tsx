"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/useLanguage"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t("newsletter.title")}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t("newsletter.subtitle")}</p>

          {isSubscribed ? (
            <div className="flex items-center justify-center text-white text-lg">
              <CheckCircle className="h-6 w-6 mr-2" />
              {t("newsletter.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 text-lg border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 rounded-xl focus:bg-white/30 focus:ring-2 focus:ring-white/50"
                />
                <Button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  {t("newsletter.subscribe")}
                </Button>
              </div>
            </form>
          )}

          <p className="text-white/70 text-sm mt-4">{t("newsletter.privacy")}</p>
        </div>
      </div>
    </section>
  )
}
