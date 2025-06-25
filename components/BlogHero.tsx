"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/useLanguage"
import { useRef } from "react"

interface BlogHeroProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  selectedCategory: string
  searchQuery: string
}

export default function BlogHero({ onSearch, onCategoryFilter, selectedCategory, searchQuery }: BlogHeroProps) {
  const { t } = useLanguage()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { key: "all", label: t("blog.hero.allPosts") },
    { key: "technology", label: t("category.technology") },
    { key: "web-development", label: t("category.webDevelopment") },
    { key: "mobile-apps", label: t("category.mobileApps") },
    { key: "cloud-computing", label: t("category.cloudComputing") },
    { key: "ai-ml", label: t("category.aiMl") },
    { key: "digital-transformation", label: t("category.digitalTransformation") },
  ]

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchInputRef.current?.value || ""
    onSearch(query)
  }

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("blog.hero.title").split(" & ")[0]} &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              {t("blog.hero.title").split(" & ")[1]}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{t("blog.hero.subtitle")}</p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                ref={searchInputRef}
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder={t("blog.hero.searchPlaceholder")}
                className="pl-12 pr-4 py-4 w-full text-lg border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg"
              >
                {t("blog.hero.search")}
              </Button>
            </div>
          </form>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => onCategoryFilter(category.key)}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-gray-800"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
