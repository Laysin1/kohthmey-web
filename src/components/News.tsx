import React, { useState } from "react";
import Header from "./Header";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 6;

  const featuredArticle = {
    id: 1,
    title: "Koh Thmey Technology Announces Major Expansion into Vietnam Market",
    excerpt:
      "In a strategic move to strengthen its presence in Southeast Asia, Koh Thmey Technology has announced plans to establish a new regional headquarters in Ho Chi Minh City, Vietnam. This expansion represents a significant milestone in the company's growth trajectory.",
    image:
      "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1200&q=80",
    date: "December 15, 2023",
    author: "Sopheak Chan",
    category: "Company News",
    readTime: "5 min read",
  };

  const newsArticles = [
    {
      id: 2,
      title: "TNAOT App Reaches 6 Million Users Milestone",
      excerpt:
        "Our flagship digital media platform continues its remarkable growth, now serving over 6 million active users across Southeast Asia.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      date: "December 10, 2023",
      author: "Sreypov Lim",
      category: "Product Updates",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "New AI-Powered Content Recommendation System Launched",
      excerpt:
        "Koh Thmey Technology introduces cutting-edge artificial intelligence to enhance user experience and content discovery.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      date: "December 5, 2023",
      author: "Dara Kem",
      category: "Technology",
      readTime: "4 min read",
    },
    {
      id: 4,
      title:
        "Partnership with Leading Telecom Provider Strengthens Infrastructure",
      excerpt:
        "Strategic alliance aims to improve digital infrastructure and connectivity across Cambodia and neighboring countries.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      date: "November 28, 2023",
      author: "Pisach Ngor",
      category: "Partnerships",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Koh Thmey Technology Wins 'Digital Innovation Award 2023'",
      excerpt:
        "Recognition for outstanding contribution to Southeast Asia's digital transformation and media technology advancement.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      date: "November 20, 2023",
      author: "Sopheak Chan",
      category: "Awards",
      readTime: "3 min read",
    },
    {
      id: 6,
      title: "New Mobile App Features Enhance User Engagement",
      excerpt:
        "Latest update introduces interactive features, improved navigation, and enhanced social sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      date: "November 15, 2023",
      author: "Sreypov Lim",
      category: "Product Updates",
      readTime: "4 min read",
    },
    {
      id: 7,
      title: "Sustainability Initiative: Going Green in Digital Operations",
      excerpt:
        "Koh Thmey Technology commits to carbon-neutral operations and sustainable business practices across all divisions.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      date: "November 8, 2023",
      author: "Dara Kem",
      category: "Sustainability",
      readTime: "5 min read",
    },
    {
      id: 8,
      title: "Youth Development Program Launches in Rural Cambodia",
      excerpt:
        "New initiative aims to provide digital literacy training and technology access to underserved communities.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      date: "October 30, 2023",
      author: "Pisach Ngor",
      category: "Community",
      readTime: "6 min read",
    },
    {
      id: 9,
      title: "Q3 Financial Results Show Strong Growth Trajectory",
      excerpt:
        "Company reports 45% year-over-year revenue growth and expanded market presence across Southeast Asia.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      date: "October 25, 2023",
      author: "Sopheak Chan",
      category: "Financial",
      readTime: "7 min read",
    },
  ];

  const categories = [
    "All",
    "Company News",
    "Product Updates",
    "Technology",
    "Partnerships",
    "Awards",
    "Community",
    "Financial",
  ];

  const popularPosts = [
    {
      title: "TNAOT App Reaches 6 Million Users",
      date: "Dec 10, 2023",
      views: "15.2K",
    },
    {
      title: "AI-Powered Content Recommendations",
      date: "Dec 5, 2023",
      views: "12.8K",
    },
    {
      title: "Digital Innovation Award 2023",
      date: "Nov 20, 2023",
      views: "11.5K",
    },
  ];

  const filteredArticles = newsArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest Updates & Insights
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest from Koh Thmey Technology
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Story
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1E40AF] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{featuredArticle.date}</span>
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{featuredArticle.author}</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white flex items-center gap-2 w-fit">
                    Read Full Article <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-[#1E40AF]"
                  />
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="relative h-48">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#1E40AF] text-white px-2 py-1 rounded text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center text-gray-500 text-xs mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span className="mr-3">{article.date}</span>
                          <User size={14} className="mr-1" />
                          <span className="mr-3">{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                          {article.excerpt}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 text-[#1E40AF] hover:text-[#1E3A8A] flex items-center gap-1 w-fit"
                        >
                          Read More <ArrowRight size={14} />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft size={16} /> Previous
                  </Button>
                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index + 1}
                      variant={
                        currentPage === index + 1 ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-10 h-10 ${
                        currentPage === index + 1
                          ? "bg-[#1E40AF] text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next <ChevronRight size={16} />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="p-6 mb-8 bg-white shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Tag size={16} className="mr-2 text-gray-400" />
                      <span className="text-gray-700">{category}</span>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Popular Posts */}
              <Card className="p-6 bg-white shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1E40AF] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and never miss the latest updates from
              Koh Thmey Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-white h-12"
              />
              <Button className="bg-[#FACC15] text-black hover:bg-[#EAB308] font-medium px-8 h-12">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
