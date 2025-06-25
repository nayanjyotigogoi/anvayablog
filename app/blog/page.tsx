"use client"

import { useState } from "react"
import { Suspense } from "react"
import Header from "@/components/Header"
import BlogHero from "@/components/BlogHero"
import BlogGrid from "@/components/BlogGrid"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"
import LoadingSpinner from "@/components/LoadingSpinner"
import { LanguageProvider } from "@/components/useLanguage"
import { ThemeProvider } from "@/components/useTheme"

function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <BlogHero
          onSearch={handleSearch}
          onCategoryFilter={handleCategoryFilter}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
        <Suspense fallback={<LoadingSpinner />}>
          <BlogGrid searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default function BlogPage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BlogContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
