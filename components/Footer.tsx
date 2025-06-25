"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "https://www.anvayasolution.com/about" },
      { name: "Our Team", href: "https://www.anvayasolution.com/team" },
      { name: "Careers", href: "https://www.anvayasolution.com/careers" },
      { name: "Contact", href: "https://www.anvayasolution.com/contact" },
    ],
    services: [
      {
        name: "Web Development",
        href: "https://www.anvayasolution.com/services",
      },
      { name: "Mobile Apps", href: "https://www.anvayasolution.com/services" },
      {
        name: "Cloud Solutions",
        href: "https://www.anvayasolution.com/services",
      },
      { name: "AI & ML", href: "https://www.anvayasolution.com/services" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      {
        name: "Case Studies",
        href: "https://www.anvayasolution.com/case-studies",
      },
      { name: "Documentation", href: "https://www.anvayasolution.com/docs" },
      { name: "Support", href: "https://www.anvayasolution.com/support" },
    ],
    legal: [
      {
        name: "Privacy Policy",
        href: "https://www.anvayasolution.com/privacy",
      },
      {
        name: "Terms of Service",
        href: "https://www.anvayasolution.com/terms",
      },
      { name: "Cookie Policy", href: "https://www.anvayasolution.com/cookies" },
      { name: "GDPR", href: "https://www.anvayasolution.com/gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/anvayasolution" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/anvayasolution_",
    },
  ];

  const handleExternalLink = (url: string) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/blog" className="flex items-center space-x-2 mb-6">
               <div className="flex items-center space-x-2 mb-4">
              <Image
                src="Logo/Anvaya-Light.png" // Update with your correct path if it's different
                alt="Anvaya Solution Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </div>
              <span className="text-xl font-bold">Anvaya Solution</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern business solutions with cutting-edge technology
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+91 97073 85552</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>admin@anvayasolution.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Guwahati, Assam</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleExternalLink(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleExternalLink(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleExternalLink(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleExternalLink(link.href)}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Anvaya Solution. All rights reserved. Built with ❤️ for
              innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
