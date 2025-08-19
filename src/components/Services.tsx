import React from "react";
import Header from "./Header";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Digital Media Platforms",
      description:
        "Creating engaging content platforms that connect millions of users across Southeast Asia with news, entertainment, and community features.",
      icon: <Smartphone size={32} />,
    },
    {
      id: 2,
      title: "Technology Solutions",
      description:
        "Building innovative digital tools and infrastructure that power modern businesses and enhance user experiences across multiple platforms.",
      icon: <Code size={32} />,
    },
    {
      id: 3,
      title: "Advertising & Marketing",
      description:
        "Helping businesses reach their target audiences effectively through data-driven marketing strategies and digital advertising solutions.",
      icon: <TrendingUp size={32} />,
    },
    {
      id: 4,
      title: "Social Media Engagement",
      description:
        "Developing platforms and strategies that foster meaningful connections and community building in the digital space.",
      icon: <Users size={32} />,
    },
    {
      id: 5,
      title: "Regional Growth",
      description:
        "Expanding digital presence across Southeast Asia with localized content and culturally relevant solutions for diverse markets.",
      icon: <Globe size={32} />,
    },
    {
      id: 6,
      title: "Data & Analytics",
      description:
        "Providing comprehensive insights and analytics to help businesses make informed decisions and optimize their digital strategies.",
      icon: <BarChart3 size={32} />,
    },
  ];

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powering the Digital Future
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide end-to-end digital services that help businesses and
              communities thrive in the modern digital landscape. From content
              platforms to data analytics, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for
              our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your needs, goals, and target audience.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a comprehensive plan tailored to your objectives.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Building and deploying solutions with precision and care.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous improvement and performance monitoring.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#1E40AF] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1E40AF] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These numbers reflect our commitment to delivering exceptional
              results for our clients and users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5M+", label: "Active Users" },
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years of Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work With Us to Transform Digital Media
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Ready to take your digital presence to the next level? Let's
              collaborate and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-medium text-lg px-8 py-6">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-medium text-lg px-8 py-6"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-12 px-4 md:px-8 lg:px-16">
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
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-blue-100">Digital Media Platforms</span>
                </li>
                <li>
                  <span className="text-blue-100">Technology Solutions</span>
                </li>
                <li>
                  <span className="text-blue-100">Advertising & Marketing</span>
                </li>
                <li>
                  <span className="text-blue-100">Data & Analytics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-blue-100 text-sm">
                    123 Norodom Blvd, Phnom Penh
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span className="text-blue-100 text-sm">+855 23 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span className="text-blue-100 text-sm">
                    info@kohthmeytech.com
                  </span>
                </div>
              </div>
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

export default Services;
