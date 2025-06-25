"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "as"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.webDevelopment": "Web Development",
    "nav.mobileApps": "Mobile Apps",
    "nav.cloudSolutions": "Cloud Solutions",
    "nav.aiMl": "AI & ML",

    // Theme
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",

    // Blog Hero
    "blog.hero.title": "Insights & Innovation",
    "blog.hero.subtitle":
      "Discover the latest trends, best practices, and innovative solutions in technology. Stay ahead with expert insights from our team at Anvaya Solution.",
    "blog.hero.searchPlaceholder": "Search articles, topics, or technologies...",
    "blog.hero.search": "Search",
    "blog.hero.allPosts": "All Posts",

    // Blog Grid
    "blog.latestArticles": "Latest Articles",
    "blog.latestSubtitle": "Stay updated with our latest insights, tutorials, and industry analysis",
    "blog.readMore": "Read More",
    "blog.loadMore": "Load More Articles",
    "blog.noResults": "No posts found matching your search criteria.",
    "blog.backToBlog": "Back to Blog",

    // Newsletter
    "newsletter.title": "Stay in the Loop",
    "newsletter.subtitle":
      "Get the latest insights, tutorials, and industry updates delivered straight to your inbox. Join thousands of developers and business leaders who trust our content.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Thank you for subscribing!",
    "newsletter.privacy": "No spam, unsubscribe at any time. We respect your privacy.",

    // Categories
    "category.technology": "Technology",
    "category.webDevelopment": "Web Development",
    "category.mobileApps": "Mobile Apps",
    "category.cloudComputing": "Cloud Computing",
    "category.aiMl": "AI & Machine Learning",
    "category.digitalTransformation": "Digital Transformation",

    // Common
    "common.author": "Author",
    "common.date": "Date",
    "common.readTime": "Read Time",
    "common.tags": "Tags",
    "common.share": "Share",
    "common.save": "Save",
  },
  as: {
    // Navigation
    "nav.home": "ঘৰ",
    "nav.services": "সেৱাসমূহ",
    "nav.about": "আমাৰ বিষয়ে",
    "nav.blog": "ব্লগ",
    "nav.contact": "যোগাযোগ",
    "nav.getStarted": "আৰম্ভ কৰক",
    "nav.webDevelopment": "ৱেব ডেভেলপমেণ্ট",
    "nav.mobileApps": "মোবাইল এপ্স",
    "nav.cloudSolutions": "ক্লাউড সমাধান",
    "nav.aiMl": "AI আৰু ML",

    // Theme
    "theme.light": "লাইট মোড",
    "theme.dark": "ডাৰ্ক মোড",

    // Blog Hero
    "blog.hero.title": "অন্তৰ্দৃষ্টি আৰু উদ্ভাৱন",
    "blog.hero.subtitle":
      "প্ৰযুক্তিৰ শেহতীয়া ধাৰা, উত্তম পদ্ধতি আৰু উদ্ভাৱনী সমাধান আৱিষ্কাৰ কৰক। অন্বয়া সলিউশ্যনৰ আমাৰ দলৰ পৰা বিশেষজ্ঞ অন্তৰ্দৃষ্টিৰ সৈতে আগবাঢ়ি থাকক।",
    "blog.hero.searchPlaceholder": "প্ৰবন্ধ, বিষয় বা প্ৰযুক্তি বিচাৰক...",
    "blog.hero.search": "বিচাৰক",
    "blog.hero.allPosts": "সকলো পোষ্ট",

    // Blog Grid
    "blog.latestArticles": "শেহতীয়া প্ৰবন্ধসমূহ",
    "blog.latestSubtitle": "আমাৰ শেহতীয়া অন্তৰ্দৃষ্টি, টিউটোৰিয়েল আৰু উদ্যোগ বিশ্লেষণৰ সৈতে আপডেট থাকক",
    "blog.readMore": "আৰু পঢ়ক",
    "blog.loadMore": "আৰু প্ৰবন্ধ লোড কৰক",
    "blog.noResults": "আপোনাৰ বিচাৰ মাপদণ্ডৰ সৈতে মিল থকা কোনো পোষ্ট পোৱা নগ'ল।",
    "blog.backToBlog": "ব্লগলৈ উভতি যাওক",

    // Newsletter
    "newsletter.title": "যোগাযোগত থাকক",
    "newsletter.subtitle": "শেহতীয়া অন্তৰ্দৃষ্টি, টিউটোৰিয়েল আৰু উদ্যোগ আপডেট পোনপটীয়াকৈ আপোনাৰ ইনবক্সত পাওক।",
    "newsletter.placeholder": "আপোনাৰ ইমেইল ঠিকনা দিয়ক",
    "newsletter.subscribe": "চাবস্ক্ৰাইব কৰক",
    "newsletter.success": "চাবস্ক্ৰাইব কৰাৰ বাবে ধন্যবাদ!",
    "newsletter.privacy": "কোনো স্পেম নাই, যিকোনো সময়তে আনচাবস্ক্ৰাইব কৰক।",

    // Categories
    "category.technology": "প্ৰযুক্তি",
    "category.webDevelopment": "ৱেব ডেভেলপমেণ্ট",
    "category.mobileApps": "মোবাইল এপ্স",
    "category.cloudComputing": "ক্লাউড কম্পিউটিং",
    "category.aiMl": "AI আৰু মেচিন লাৰ্নিং",
    "category.digitalTransformation": "ডিজিটেল ৰূপান্তৰ",

    // Common
    "common.author": "লেখক",
    "common.date": "তাৰিখ",
    "common.readTime": "পঢ়াৰ সময়",
    "common.tags": "টেগ",
    "common.share": "শ্বেয়াৰ কৰক",
    "common.save": "সংৰক্ষণ কৰক",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (["en", "as"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return (
      translations[language]?.[key] ??
      translations["en"]?.[key] ?? // fallback to English
      key
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
