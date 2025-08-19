import React from "react";
import Header from "./Header";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: "🔍",
      title: "Integrity",
      description: "Honesty and transparency in all our actions and decisions.",
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "Innovative thinking that drives digital transformation.",
    },
    {
      icon: "🤝",
      title: "Responsibility",
      description: "Accountable to our stakeholders and communities.",
    },
    {
      icon: "🙏",
      title: "Respect",
      description: "Valuing diversity and treating everyone with dignity.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Always pushing boundaries to create better solutions.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Koh Thmey Technology established in Phnom Penh, Cambodia.",
    },
    {
      year: "2017",
      title: "TNAOT App Launch",
      description: "Launched our flagship digital media platform.",
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description: "Expanded operations to Vietnam and Thailand.",
    },
    {
      year: "2021",
      title: "5M Users Milestone",
      description: "TNAOT App reached 5 million active users.",
    },
    {
      year: "2023",
      title: "Technology Innovation",
      description: "Launched AI-powered content recommendation system.",
    },
  ];

  const leadership = [
    {
      name: "Sopheak Chan",
      position: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sopheak",
    },
    {
      name: "Sreypov Lim",
      position: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sreypov",
    },
    {
      name: "Dara Kem",
      position: "Head of Product",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dara",
    },
    {
      name: "Pisach Ngor",
      position: "Head of Marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=pisach",
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
            Innovation. Integrity. Impact.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading Cambodia's digital transformation since 2015
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2015, Koh Thmey Technology began with a simple yet
                ambitious vision: to transform Cambodia's digital landscape and
                connect millions of people through innovative technology
                solutions.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                What started as a small team of passionate developers has grown
                into one of Southeast Asia's leading digital media and
                technology companies, serving over 5 million users across the
                region.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to push boundaries, creating platforms that
                not only inform and entertain but also empower communities to
                connect, share, and grow together in the digital age.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FACC15] p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-gray-900 text-2xl">8+</p>
                <p className="text-gray-800">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission, Vision & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core principles guide everything we do, from product
              development to community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-white shadow-md">
              <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower Southeast Asian communities through innovative
                digital media platforms and technology solutions that connect,
                inform, and inspire millions of users every day.
              </p>
            </Card>
            <Card className="p-8 bg-white shadow-md">
              <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading digital media and technology company in
                Southeast Asia, setting the standard for innovation, quality,
                and social impact in the digital ecosystem.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a startup to a regional leader - here's how we've grown over
              the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#1E40AF] hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-1 md:w-1/2">
                    <Card
                      className={`p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} bg-white shadow-md`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#FACC15] text-black px-3 py-1 rounded-full font-bold text-sm">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-[#1E40AF] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="flex-1 md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading Koh Thmey Technology into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#1E40AF] font-medium">
                    {leader.position}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-[#1E40AF] bg-opacity-90"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join us in shaping the future of digital media and technology in
            Southeast Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FACC15] text-black hover:bg-[#EAB308] font-medium text-lg px-8 py-6">
              Join Our Team
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1E40AF] font-medium text-lg px-8 py-6"
            >
              Partner With Us
            </Button>
          </div>
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
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

export default AboutUs;
