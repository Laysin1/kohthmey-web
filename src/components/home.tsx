import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  ArrowRight,
  Download,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const Home = () => {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "Digital Media",
      description: "Content platforms for news & entertainment.",
      icon: "📱",
    },
    {
      id: 2,
      title: "Technology Solutions",
      description: "Building innovative digital tools.",
      icon: "💻",
    },
    {
      id: 3,
      title: "Advertising & Marketing",
      description: "Helping businesses reach audiences effectively.",
      icon: "📈",
    },
    {
      id: 4,
      title: "Regional Expansion",
      description: "Growing across Southeast Asia.",
      icon: "🌏",
    },
  ];

  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "Koh Thmey Technology Expands to Vietnam",
      excerpt:
        "Our company continues its Southeast Asian expansion with a new office in Ho Chi Minh City.",
      image:
        "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&q=80",
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "TNAOT App Reaches 5 Million Users",
      excerpt:
        "Our flagship app celebrates a major milestone as user base continues to grow across the region.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      date: "May 22, 2023",
    },
    {
      id: 3,
      title: "New Partnership with Leading Telecom Provider",
      excerpt:
        "Strategic alliance aims to improve digital infrastructure across Cambodia.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      date: "April 10, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="about">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At Koh Thmey Technology, we're dedicated to transforming the
                digital landscape of Southeast Asia. We create innovative media
                platforms and technology solutions that connect people,
                businesses, and communities.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <span className="text-xl">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Integrity</h4>
                    <p className="text-sm text-gray-600">
                      Honesty in all our actions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Creativity</h4>
                    <p className="text-sm text-gray-600">Innovative thinking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Responsibility
                    </h4>
                    <p className="text-sm text-gray-600">
                      Accountable to all stakeholders
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Innovation</h4>
                    <p className="text-sm text-gray-600">
                      Always moving forward
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-gray-900">Established 2015</p>
                <p className="text-gray-800">Cambodia's Digital Pioneer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50" id="services">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We provide comprehensive digital solutions to help businesses and
            communities thrive in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TNAOT App Showcase */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16 bg-blue-900 text-white"
        id="brands"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">TNAOT App</h2>
              <p className="mb-8 text-blue-100">
                Our flagship digital platform connecting millions of users
                across Southeast Asia with news, entertainment, and community
                features.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-yellow-400">5M+</p>
                  <p className="text-sm text-blue-100">Active Users</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-yellow-400">#1</p>
                  <p className="text-sm text-blue-100">In Cambodia</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-yellow-400">4.8</p>
                  <p className="text-sm text-blue-100">App Rating</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2">
                  <Download size={18} />
                  Google Play
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2">
                  <Download size={18} />
                  App Store
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="TNAOT App"
                className="max-w-full h-auto rounded-xl shadow-2xl transform rotate-3"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="news">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Latest News
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Stay updated with the latest developments at Koh Thmey Technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    Read More <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50"
            >
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center relative"
        id="careers"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Be part of one of the fastest-growing media technology companies in
            Cambodia.
          </p>
          <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-medium text-lg px-8 py-6">
            Explore Careers
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="contact">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have questions or want to work with us? Reach out and we'll get back
            to you soon.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <div className="h-64 md:h-80 bg-gray-200 rounded-lg mb-6">
                {/* Google Map would be embedded here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Google Map Integration</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      123 Norodom Blvd, Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-blue-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+855 23 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@kohthmeytech.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Koh Thmey Technology</h3>
              <p className="text-blue-100 mb-4">
                Leading the digital future in Southeast Asia through innovation,
                integrity, and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#brands"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    TNAOT App
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-400 text-white hover:bg-blue-800"
                >
                  English
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-400 text-white hover:bg-blue-800"
                >
                  ភាសាខ្មែរ
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-blue-800 mb-6" />
          <div className="text-center text-blue-200 text-sm">
            <p>
              © {new Date().getFullYear()} Koh Thmey Technology. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
