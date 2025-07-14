import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Analyser mon CV", href: "#analyze" },
      { name: "Simulateur d'entretien", href: "#interview" },
      { name: "Offres d'emploi", href: "#jobs" },
      { name: "API", href: "#api" },
    ],
    company: [
      { name: "À propos", href: "#about" },
      { name: "Notre équipe", href: "#team" },
      { name: "Carrières", href: "#careers" },
      { name: "Blog", href: "#blog" },
    ],
    resources: [
      { name: "Centre d'aide", href: "#help" },
      { name: "Guides", href: "#guides" },
      { name: "Webinaires", href: "#webinars" },
      { name: "Templates CV", href: "#templates" },
    ],
    legal: [
      { name: "Mentions légales", href: "#legal" },
      { name: "Politique de confidentialité", href: "#privacy" },
      { name: "Conditions d'utilisation", href: "#terms" },
      { name: "RGPD", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/cv360",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/cv360",
      icon: Github,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Restez informé des dernières opportunités
              </h3>
              <p className="text-gray-400">
                Recevez chaque semaine les meilleures offres d'emploi qui
                correspondent à votre profil.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cv360-blue focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-cv360-blue to-cv360-cyan hover:from-cv360-blue/90 hover:to-cv360-cyan/90 text-white px-8 py-3">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-cv360-blue to-cv360-cyan rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">CV</span>
                </div>
                <span className="text-xl font-bold">CV360</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                La plateforme IA qui révolutionne l'analyse de CV et la
                préparation aux entretiens. Optimisez votre recherche d'emploi
                avec notre technologie avancée.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cv360-blue transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Produit</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Ressources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-cv360-blue" />
              <span className="text-gray-400">contact@cv360.fr</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-cv360-cyan" />
              <span className="text-gray-400">+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-cv360-purple" />
              <span className="text-gray-400">Paris, France</span>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 CV360. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇫🇷 Français</span>
              <span>Made with ❤️ in France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
