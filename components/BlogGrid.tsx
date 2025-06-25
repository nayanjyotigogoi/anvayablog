"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/useLanguage";

// Expanded multilingual blog posts data with comprehensive content
const blogPostsData = {
  en: [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the cutting-edge technologies and methodologies that are shaping the future of web development. From AI integration to progressive web apps, discover what's driving innovation in the digital landscape.",
      image: "/BLOG/BLOG1.png?height=400&width=600",
      category: "web-development",
      categoryLabel: "Web Development",
      author: "Mansi Sewa",
      authorRole: "Senior Full-Stack Developer",
      date: "2024-01-15",
      readTime: "12 min read",
      views: "2.4k",
      featured: true,
      tags: ["web-development", "ai", "pwa", "javascript", "react"],
      difficulty: "Intermediate",
      summary:
        "A comprehensive guide to emerging web development trends including AI-powered tools, WebAssembly adoption, and the evolution of Progressive Web Apps.",
    },
    {
      id: 2,
      title: "Why Every Business Needs a Modern Website in 2025",
      excerpt:
        "In 2025, a modern website is no longer optional—it's the cornerstone of credibility, customer engagement, and business growth. Learn what makes a website 'modern' and why it's crucial for businesses of all sizes.",
      image: "/BLOG/BLOG-2.jpg?height=400&width=600",
      category: "web-development",
      categoryLabel: "Web Development",
      author: "Mansi Sewa",
      authorRole: "Senior Full-Stack Developer",
      date: "2025-06-24",
      readTime: "15 min read",
      views: "1.8k",
      featured: true,
      tags: [
        "modern business website 2025",
        "digital presence",
        "mobile responsive",
        "analytics",
        "Anvaya web development",
      ],
      difficulty: "Beginner",
      summary:
        "An in-depth look at why every business—especially small and medium enterprises—needs a modern website in 2025, and how it directly impacts visibility, trust, and sales.",
    },
    {
      id: 3,
      title: "How AI is Transforming Customer Support (With Real Use Cases)",
      excerpt:
        "AI is reshaping customer support by enabling faster response times, smarter service, and 24/7 availability. Explore real-world examples and how Anvaya implements intelligent support systems.",
      image: "/BLOG/BLOG-3.png?height=500&width=1200",
      category: "ai-automation",
      categoryLabel: "AI Automation",
      author: "Nayanjyoti",
      authorRole: "Founder & AI Consultant",
      date: "2025-06-24",
      readTime: "14 min read",
      views: "2.1k",
      featured: true,
      tags: [
        "AI customer support solutions",
        "AI in customer service",
        "chatbot customer support",
        "automated support examples",
        "Anvaya AI implementation",
      ],
      difficulty: "Intermediate",
      summary:
        "Explore how AI is revolutionizing customer support with real-world tools, benefits, and examples—and how Anvaya Solution helps businesses implement scalable AI support systems.",
    },
    {
      id: 4,
      title: "Chatbots for Business: Do You Really Need One?",
      excerpt:
        "Chatbots are transforming how businesses handle sales, customer service, and onboarding. But does every business actually need one? Explore the pros, cons, use cases, and when it's worth investing in a chatbot solution.",
      image: "/BLOG/BLOG-4.jpg?height=400&width=600",
      category: "AI Automation",
      categoryLabel: "AI Automation",
      author: "Nayanjyoti",
      authorRole: "Founder & AI Consultant",
      date: "2025-05-14",
      readTime: "16 min read",
      views: "2.3k",
      featured: true,
      tags: [
        "do I need a chatbot for my business",
        "business chatbot benefits",
        "AI chatbot examples",
        "build chatbot for business",
        "Anvaya chatbot development",
      ],
      difficulty: "Intermediate",
      summary:
        "A deep dive into whether your business should adopt a chatbot. Learn about rule-based vs AI chatbots, their advantages, real-world applications, when to avoid them, and how Anvaya can help you build a tailored chatbot system.",
    },
    {
      id: 5,
      title: "Why Every Business Needs a Mobile App in 2025",
      excerpt:
        "With mobile usage soaring, having a business app is no longer optional. Learn how mobile apps drive marketing, customer engagement, and ROI—and when it’s the right time to build one.",
      image: "/BLOG/blog-5.png?height=400&width=600",
      category: "Mobile Development",
      categoryLabel: "Mobile Development",
      author: "Biswajit Das",
      authorRole: "Senior Mobile Developer",
      date: "2025-05-25",
      readTime: "13 min read",
      views: "1.9k",
      featured: true,
      tags: [
        "why businesses need a mobile app",
        "benefits of mobile apps for business",
        "business mobile app ROI",
        "mobile app trends 2025",
        "Anvaya mobile app development",
      ],
      difficulty: "Beginner",
      summary:
        "A business app can do much more than look good—it can serve as a powerful channel for marketing, engagement, loyalty, and long-term returns. Discover why 2025 is the year to go mobile and how Anvaya can help.",
    },
    {
      id: 6,
      title: "What is Technical Business Consulting and Why You Need It",
      excerpt:
        "Technical business consulting bridges the gap between strategy and technology. Discover how it drives automation, reduces costs, and aligns IT with your business goals—plus when to bring in a consulting partner.",
      image: "/BLOG/blog-6.png?height=400&width=600",
      category: "Business Consulting",
      categoryLabel: "Business Consulting",
      author: "Nayanjyoti Gogoi",
      authorRole: "Founder & Technical Consultant",
      date: "2025-06-25",
      readTime: "14 min read",
      views: "2.0k",
      featured: true,
      tags: [
        "technical business consulting",
        "IT business consulting services",
        "digital strategy consulting",
        "why businesses need consultants",
        "Anvaya consulting services",
      ],
      difficulty: "Intermediate",
      summary:
        "Learn how technical business consulting can unlock new efficiency, align your IT with growth goals, and reduce operational waste. See real-world examples and why Anvaya’s consulting services deliver results.",
    },
  ],
  hi: [
    {
      id: 1,
      title: "वेब डेवलपमेंट का भविष्य: 2024 में देखने योग्य रुझान",
      excerpt:
        "उन अत्याधुनिक तकनीकों और पद्धतियों का अन्वेषण करें जो वेब डेवलपमेंट के भविष्य को आकार दे रही हैं।",
      image: "/placeholder.svg?height=400&width=600",
      category: "web-development",
      categoryLabel: "वेब डेवलपमेंट",
      author: "सारा जॉनसन",
      authorRole: "सीनियर फुल-स्टैक डेवलपर",
      date: "2024-01-15",
      readTime: "12 मिनट पढ़ें",
      views: "2.4k",
      featured: true,
      tags: ["web-development", "ai", "pwa", "javascript", "react"],
      difficulty: "मध्यम",
      summary:
        "AI-संचालित उपकरण और प्रगतिशील वेब ऐप्स सहित उभरते वेब डेवलपमेंट रुझानों के लिए एक व्यापक गाइड।",
    },
    // Additional Hindi translations would go here...
  ],
  as: [
    {
      id: 1,
      title: "ৱেব ডেভেলপমেণ্টৰ ভৱিষ্যত: ২০২৪ত চাবলগীয়া ধাৰাসমূহ",
      excerpt:
        "ৱেব ডেভেলপমেণ্টৰ ভৱিষ্যত গঢ় দিয়া অত্যাধুনিক প্ৰযুক্তি আৰু পদ্ধতিসমূহ অন্বেষণ কৰক।",
      image: "/BLOG/BLOG1.png?height=400&width=600",
      category: "web-development",
      categoryLabel: "ৱেব ডেভেলপমেণ্ট",
      author: "চাৰা জনছন",
      authorRole: "চিনিয়ৰ ফুল-ষ্টেক ডেভেলপাৰ",
      date: "2024-01-15",
      readTime: "১২ মিনিট পঢ়ক",
      views: "2.4k",
      featured: true,
      tags: ["web-development", "ai", "pwa", "javascript", "react"],
      difficulty: "মধ্যম",
      summary:
        "AI-চালিত সঁজুলি আৰু প্ৰগতিশীল ৱেব এপ্সৰ বিকাশ সহ উদীয়মান ৱেব ডেভেলপমেণ্ট ধাৰাসমূহৰ বাবে এক বিস্তৃত গাইড।",
    },
    {
      id: 2,
      title: "২০২৫ত প্ৰতিটো ব্যৱসায়ৰ বাবে আধুনিক ৱেবছাইট কিয় আৱশ্যক?",
      excerpt:
        "২০২৫ত, এটা আধুনিক ৱেবছাইট কেতিয়াও বিকল্প নহয়—এইটো বিশ্বাসযোগ্যতা, গ্ৰাহক সম্পৰ্ক আৰু ব্যৱসায় বৃদ্ধিৰ মূল আধাৰ। জানক কি এটাক 'আধুনিক' বানায় আৰু কিয় এইটো সকলো প্ৰকাৰৰ ব্যৱসায়ৰ বাবে অতি প্ৰয়োজনীয়।",
      image: "/BLOG/BLOG-2.jpg?height=400&width=600",
      category: "web-development",
      categoryLabel: "ৱেব ডেভেলপমেণ্ট",
      author: "মানসী সেৱা",
      authorRole: "সিনিয়ৰ ফুল-ষ্টেক ডেভেলপাৰ",
      date: "২০২৫-০৬-২৪",
      readTime: "১৫ মিনিট পঢ়া সময়",
      views: "১.৮k",
      featured: true,
      tags: [
        "২০২৫ৰ আধুনিক ব্যৱসায়িক ৱেবছাইট",
        "ডিজিটেল উপস্থিতি",
        "ম'বাইল ৰেছপনছিভ",
        "এনালিটিক্স",
        "Anvaya ৱেব ডেভেলপমেণ্ট",
      ],
      difficulty: "আৰম্ভণি",
      summary:
        "এই লেখাটোৱে গভীৰভাৱে ব্যাখ্যা কৰিছে কিয় প্ৰতিটো ব্যৱসায়—বিশেষকৈ সৰু আৰু মধ্যম উদ্যোগ—২০২৫ত এটা আধুনিক ৱেবছাইটৰ প্ৰয়োজন আছে, আৰু কেনেকৈ এইটো দৃশ্যমানতা, বিশ্বাস আৰু বিক্ৰীক প্ৰত্যক্ষভাৱে প্ৰভাৱিত কৰে।",
    },
    {
      id: 3,
      title:
        "AI কেনেদৰে গ্ৰাহক সহায়তাক ৰূপান্তৰ কৰি আছে (বাস্তৱ উদাহৰণৰ সৈতে)",
      excerpt:
        "AI এতিয়া গ্ৰাহক সহায়তাৰ ক্ষেত্ৰখনক সঘনকৈ সলনি কৰি আছে—দ্রুত সঁহাৰি, ২৪/৭ উপলব্ধতা, আৰু অধিক বুদ্ধিমত্তাৰে চালিত সেৱা নিশ্চিত কৰি। এই ব্লগত বাস্তৱ উদাহৰণৰ জৰিয়তে জানক কেনেদৰে Anvaya AI-ভিত্তিক সহায়তা প্ৰণালী কাৰ্যকৰী কৰি তোলে।",
      image: "/BLOG/BLOG-3.png?height=500&width=1200",
      category: "AI-অটোমেশ্যন",
      categoryLabel: "AI অটোমেশ্যন",
      author: "নয়নজ্যোতি",
      authorRole: "প্ৰতিষ্ঠাপক আৰু AI পৰামৰ্শদাতা",
      date: "2025-06-24",
      readTime: "১৪ মিনিট পঢ়ক",
      views: "২.১ কে",
      featured: true,
      tags: [
        "AI গ্ৰাহক সহায়তা সমাধান",
        "গ্ৰাহক সেৱাত AI",
        "চেটবট সহায়তা",
        "স্বয়ংক্ৰিয় সহায়তাৰ উদাহৰণ",
        "Anvaya AI প্ৰয়োগ",
      ],
      difficulty: "মধ্যম",
      summary:
        "এই ব্লগত জানক কেনেদৰে AI গ্ৰাহক সহায়তা ক্ষেত্ৰখনক ৰূপান্তৰ কৰি আছে—বাস্তৱ উদাহৰণ, আধুনিক সঁজুলি, আৰু Anvaya Solution-ৰ দ্বাৰা প্ৰয়োগ কৰা প্ৰকৃত ব্যৱস্থা।",
    },
    {
      id: 4,
      title: "চেটবট ব্যৱসায়ৰ বাবে: আপোনাৰ প্ৰয়োজন আছেনে সঁচাকৈয়ে?",
      excerpt:
        "চেটবট ব্যৱসায়িক বিক্ৰি, কাষ্টমাৰ ছাৰ্ভিচ আৰু অনব’ৰ্ডিঙৰ ধৰণেই সলনি কৰি পেলাইছে। কিন্তু প্ৰত্যেকখন ব্যৱসায়ৰ বাবে চেটবট প্ৰয়োজননে? লাভ-অলাভ, ব্যৱহাৰ ক্ষেত্ৰ, আৰু কেতিয়া বেছিকৈ উপযোগী হ’ব জানক।",
      image: "/BLOG/BLOG-4.jpg?height=400&width=600",
      category: "AI অট’মেচন",
      categoryLabel: "AI অট’মেচন",
      author: "নয়নজ্যোতি",
      authorRole: "প্ৰতিষ্ঠাপক আৰু AI পৰামৰ্শদাতা",
      date: "২০২৫-০৫-১৪",
      readTime: "১৬ মিনিট পঢ়ক",
      views: "২.৩ক",
      featured: true,
      tags: [
        "ব্যৱসায়ৰ বাবে চেটবটৰ প্ৰয়োজন",
        "চেটবটৰ লাভ",
        "AI চেটবট উদাহৰণ",
        "ব্যৱসায়ৰ বাবে চেটবট বনাওক",
        "Anvaya চেটবট ডেভেলপমেন্ট",
      ],
      difficulty: "মধ্যম",
      summary:
        "আপোনাৰ ব্যৱসায়ৰ বাবে চেটবট হ’ব লাগে নেকি তাৰ বিষয়ে গভীৰ আলোচনা। নিয়মভিত্তিক বনাম AI চেটবট, তাৰ লাভ, বাস্তৱ উদাহৰণ, কেতিয়া বেছি উপযোগী নহয়, আৰু কিদৰে Anvaya আপোনাৰ বাবে কাষ্টম চেটবট গঠন কৰিব পাৰে, জানক।",
    },
    {
      id: 5,
      title: "2025-ত প্ৰতিটো ব্যৱসায়ৰ বাবে মোবাইল এপ কিয় আৱশ্যক?",
      excerpt:
        "মোবাইল ব্যৱহাৰৰ বৃদ্ধি সৈতে, এটা ব্যৱসায়িক মোবাইল এপ্‌ ৰখা এতিয়া বিলাসিতা নহয়—এটা প্ৰয়োজন। জানক কিদৰে এটা এপ্‌য়ে আপোনাৰ ব্যৱসায়ৰ লাভ, জড়িততা আৰু বিপণনত সহায় কৰে।",
      image: "/BLOG/blog-5.png?height=400&width=600",
      category: "Mobile Development",
      categoryLabel: "Mobile Development",
      author: "বিস্বজিত দাস",
      authorRole: "জেষ্ঠ মোবাইল ডেভেলপাৰ",
      date: "2025-05-25",
      readTime: "13 মিনিট পঢ়া সময়",
      views: "1.9k",
      featured: true,
      tags: [
        "ব্যৱসায়ৰ বাবে মোবাইল এপৰ প্ৰয়োজন",
        "মোবাইল এপৰ লাভ",
        "ব্যৱসায়িক এপৰ বিনিয়োগ ফলাফল",
        "২০২৫ৰ মোবাইল এপ প্রবণতা",
        "Anvaya মোবাইল এপ উন্নয়ন",
      ],
      difficulty: "আৰুম্ভনি",
      summary:
        "মোবাইল এপ্‌ এখন কেৱল দৃষ্টিনন্দন হোৱাৰ বাবে নহয়—এইখন হৈছে আপোনাৰ ব্যৱসায়ৰ বাবে এক শক্তিশালী বিপণন আৰু বিকাশৰ মাধ্যম। জানক কিয় 2025 হৈছে আপোনাৰ নিজা এপ্‌টো আৰম্ভ কৰাৰ উপযুক্ত সময় আৰু কেনেকৈ Anvaya আপোনাক সহায় কৰিব।",
    },
    {
      id: 6,
      title:
        "টেকনিকেল বিজনেছ কনছালটিং কি? আৰু এইটো আপোনাৰ বাবে কিয় প্ৰয়োজনীয়",
      excerpt:
        "টেকনিকেল বিজনেছ কনছালটিংয়ে ষ্ট্ৰাটেজি আৰু প্ৰযুক্তিৰ মাজত সংযোগ স্থাপন কৰে। জানক কেনেদৰে ই অটোমেশ্যন আনে, খৰচ কমায়, আৰু IT-ৰ সৈতে আপোনাৰ লক্ষ্য সদৃশ কৰে—পাছত কেতিয়া এজন কনছালটিং পাৰ্টনাৰ নিযুক্ত কৰিব লাগে।",
      image: "/BLOG/blog-6.png?height=400&width=600",
      category: "Business Consulting",
      categoryLabel: "Business Consulting",
      author: "নয়নজ্যোতি গগৈ",
      authorRole: "প্ৰতিষ্ঠাপক আৰু টেকনিকেল কনছালটেন্ট",
      date: "2025-06-25",
      readTime: "14 মিনিট পঢ়াৰ সময়",
      views: "2.0k",
      featured: true,
      tags: [
        "টেকনিকেল বিজনেছ কনছালটিং",
        "আইটি বিজনেছ কনছালটিং সেৱা",
        "ডিজিটেল ষ্ট্ৰাটেজি কনছালটিং",
        "বিজনেছ কনছালটেন্টৰ প্ৰয়োজন",
        "Anvaya কনছালটিং সেৱাসমূহ",
      ],
      difficulty: "মধ্যম",
      summary:
        "জানক কেনেদৰে টেকনিকেল বিজনেছ কনছালটিংয়ে আপোনাৰ IT-ৰ সৈতে বৃদ্ধি লক্ষ্য সদৃশ কৰি নতুন কার্যক্ষমতা উন্মোচন কৰে আৰু অপাৰেশ্যনাল অপচয় হ্ৰাস কৰে। বাস্তৱ উদাহৰণ আৰু Anvaya-ৰ ফলপ্ৰসূ সেৱাসমূহৰ জৰিয়তে এইটো কেনেকৈ সফল হয় সেয়া জানক।",
    },
    // Additional Assamese translations would go here...
  ],
};

interface BlogGridProps {
  searchQuery: string;
  selectedCategory: string;
}

function BlogCard({
  post,
  featured = false,
}: {
  post: any;
  featured?: boolean;
}) {
  const { t } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
      case "শুরুকারী":
      case "প্ৰাৰম্ভিক":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "intermediate":
      case "मध्यम":
      case "মধ্যম":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "advanced":
      case "उन्नत":
      case "উন্নত":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <article
      className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 ${
        featured ? "sm:col-span-1" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={featured ? 800 : 400}
          height={featured ? 400 : 300}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? "h-48 lg:h-64" : "h-48"
          }`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.categoryLabel}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              post.difficulty
            )}`}
          >
            {post.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="flex items-center text-white text-sm">
            <Eye className="h-3 w-3 mr-1" />
            {post.views}
          </div>
        </div>
      </div>

      <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <div>
              <span className="font-medium">{post.author}</span>
              <span className="text-xs block text-gray-400">
                {post.authorRole}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h2
          className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 ${
            featured ? "text-2xl lg:text-3xl" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.id}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {post.title}
          </Link>
        </h2>

        <p
          className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${
            featured ? "text-lg line-clamp-4" : "line-clamp-3"
          }`}
        >
          {post.excerpt}
        </p>

        {post.summary && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
              📝 {post.summary}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, featured ? 5 : 3).map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > (featured ? 5 : 3) && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{post.tags.length - (featured ? 5 : 3)} more
            </span>
          )}
        </div>

        <div>
          <Link href={`/blog/${post.id}`}>
            <Button
              variant="ghost"
              className="p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium group/btn"
            >
              {t("blog.readMore")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogGrid({
  searchQuery,
  selectedCategory,
}: BlogGridProps) {
  const { language, t } = useLanguage();
  const [visiblePosts, setVisiblePosts] = useState(9);

  const blogPosts = blogPostsData[language] || blogPostsData.en;

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.summary?.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [blogPosts, selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const featuredPost =
    displayedPosts.find((post) => post.featured) || displayedPosts[0];
  const regularPosts = displayedPosts.filter(
    (post) => !post.featured || post.id !== featuredPost?.id
  );

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("blog.latestArticles")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("blog.latestSubtitle")}
          </p>

          {/* Search Results Info */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "all" &&
                ` in ${selectedCategory.replace("-", " ")}`}
            </div>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("blog.noResults")}
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg"
              >
                {t("blog.hero.allPosts")}
              </Button>
            </div>
          </div>
        ) : (
          <>
            {featuredPost && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <BlogCard post={featuredPost} featured={true} />
                {regularPosts.slice(0, 2).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {regularPosts.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {regularPosts.slice(2).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {visiblePosts < filteredPosts.length && (
              <div className="text-center">
                <Button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                >
                  {t("blog.loadMore")} ({filteredPosts.length - visiblePosts}{" "}
                  more)
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
