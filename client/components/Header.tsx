import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#" },
    { name: "Analyser mon CV", href: "#analyze" },
    { name: "Offres d'emploi", href: "#jobs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20 backdrop-blur-xl">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/5 via-cv360-purple/5 to-cv360-violet/5 animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-cv360-pink to-cv360-purple rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">CV</span>
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cv360-violet animate-pulse" />
                </div>
              </div>
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-cv360-pink to-cv360-purple bg-clip-text text-transparent">
                CV360
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-cv360-gray hover:text-cv360-pink transition-colors duration-300 font-medium group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button className="relative bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Connexion</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-xl glass-effect border border-cv360-pink/20 text-cv360-pink hover:bg-cv360-pink/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity"></div>
              {isMenuOpen ? (
                <X className="h-6 w-6 relative z-10" />
              ) : (
                <Menu className="h-6 w-6 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="glass-effect rounded-2xl border border-white/20 backdrop-blur-xl p-6 shadow-2xl">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-cv360-gray hover:text-cv360-pink hover:bg-cv360-pink/10 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Button className="w-full bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white py-3 rounded-xl font-semibold shadow-lg">
                    Connexion
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cv360-pink/50 to-transparent"></div>
    </header>
  );
}
