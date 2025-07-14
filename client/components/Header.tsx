import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#" },
    { name: "Analyser mon CV", href: "#analyze" },
    { name: "Offres d'emploi", href: "#jobs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-cv360-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-cv360-blue to-cv360-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
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
                className="text-cv360-gray hover:text-cv360-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className="mr-4 border-cv360-blue text-cv360-blue hover:bg-cv360-blue-light"
            >
              Connexion
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cv360-gray hover:text-cv360-blue hover:bg-cv360-blue-light focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-cv360-gray-light">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-cv360-gray hover:text-cv360-blue hover:bg-cv360-blue-light rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-cv360-gray-light">
                <Button
                  variant="outline"
                  className="w-full border-cv360-blue text-cv360-blue hover:bg-cv360-blue-light"
                >
                  Connexion
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
