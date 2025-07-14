import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Cpu,
  Shield,
  Zap,
  Brain,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Scanner IA", href: "#analyze", icon: "🧠" },
      { name: "Simulateur", href: "#interview", icon: "🎯" },
      { name: "Missions", href: "#jobs", icon: "🚀" },
      { name: "API Quantique", href: "#api", icon: "⚡" },
    ],
    legal: [
      { name: "Mentions Légales", href: "#legal", icon: "⚖️" },
      { name: "Confidentialité", href: "#privacy", icon: "🔒" },
      { name: "Conditions", href: "#terms", icon: "📋" },
      { name: "RGPD", href: "#gdpr", icon: "🛡️" },
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Advanced Neural Background */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 500">
          <defs>
            <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Data connections */}
          {Array.from({ length: 25 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 500}
              x2={Math.random() * 1000}
              y2={Math.random() * 500}
              stroke="url(#footerGrad)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Energy fields */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6 text-pink-400 animate-pulse" />
                <h3 className="text-2xl font-bold">Restez connecté au futur</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Recevez les dernières innovations IA et les meilleures
                opportunités galactiques directement dans votre terminal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="votre@email-quantique.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20">
                <Brain className="mr-2 h-4 w-4" />
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-50 animate-pulse-glow"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 mr-3">
                    <span className="text-white font-bold text-lg">CV</span>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    CV360
                  </span>
                  <div className="text-xs text-white/50 font-semibold tracking-widest">
                    NEURAL SYSTEM
                  </div>
                </div>
              </div>

              <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
                La plateforme IA qui révolutionne l'analyse de CV et la
                préparation aux entretiens. Propulsez votre carrière vers
                l'infini avec notre technologie quantique.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="relative w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 border border-white/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <social.icon className="h-5 w-5 relative z-10" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-lg mb-6 text-white flex items-center space-x-2">
                  <Cpu className="h-4 w-4 text-pink-400" />
                  <span className="capitalize">
                    {category === "product"
                      ? "Produits"
                      : category === "company"
                        ? "Entreprise"
                        : category === "resources"
                          ? "Ressources"
                          : "Légal"}
                  </span>
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2 group"
                      >
                        <span className="text-sm">{link.icon}</span>
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left max-w-2xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3 glass-effect rounded-xl p-4 border border-white/20">
              <Mail className="h-5 w-5 text-pink-400" />
              <span className="text-white/80 font-medium">
                yboukraiem@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 glass-effect rounded-xl p-4 border border-white/20">
              <Phone className="h-5 w-5 text-violet-400" />
              <span className="text-white/80 font-medium">55876375</span>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-pink-400" />
              <p className="text-white/60 text-sm">
                © 2024 CV360 Neural System. Tous droits galactiques réservés.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Français</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
    </footer>
  );
}
