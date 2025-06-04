import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Features",
      links: [
        { label: "Analytics", href: "/features/analytics" },
        { label: "Auth", href: "/features/auth" },
        { label: "Database", href: "/products/api" },
        { label: "Functions", href: "/products/analytics" },
        { label: "Realtime", href: "/products/storage" },
        { label: "Testing", href: "/products/storage" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Company", href: "/about/company" },
        { label: "Team", href: "/about/team" },
        { label: "Careers", href: "/about/careers" },
        { label: "Contact", href: "/about/contact" },
        { label: "Press", href: "/about/press" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-white text-2xl font-light mb-6">Saaas</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the future of software solutions with innovative tools
              and seamless experiences.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white text-lg font-normal mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>

            <div className="text-gray-500 text-sm">
              © 2025 Saaas. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
