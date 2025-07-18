import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Cranes", href: "#cranes" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Construction Support",
    "Industrial Projects",
    "Transportation & Rigging",
    "Emergency Services",
    "Equipment Maintenance",
  ];

  const craneTypes = [
    "Tower Cranes",
    "Mobile Cranes",
    "Crawler Cranes",
    "Rough Terrain Cranes",
    "All Terrain Cranes",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CraneMax</h3>
            <p className="text-primary-foreground/80 mb-6">
              Professional crane services with over 25 years of experience. 
              Your trusted partner for safe, reliable, and efficient lifting solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>info@cranemax.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>123 Industrial Ave, Construction City, CC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Crane Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Crane Types</h4>
            <ul className="space-y-2">
              {craneTypes.map((crane) => (
                <li key={crane} className="text-primary-foreground/80">
                  {crane}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80">
                © {currentYear} CraneMax Professional Crane Services. All rights reserved.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-1">
                Licensed • Insured • Certified Operators
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;