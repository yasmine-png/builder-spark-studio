import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap, Brain, Shield } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Base Spatiale", href: "#", icon: "🚀" },
    { name: "Scanner IA", href: "#analyze", icon: "🧠" },
    { name: "Missions", href: "#jobs", icon: "⚡" },
    { name: "Transmission", href: "#contact", icon: "📡" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-2xl">
      {/* Animated Neural Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 100">
          <defs>
            <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Flowing data lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={i * 125}
              y1="50"
              x2={(i + 1) * 125}
              y2="50"
              stroke="url(#headerGrad)"
              strokeWidth="1"
              opacity="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}

          {/* Data nodes */}
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={i}
              cx={i * 150 + 75}
              cy="50"
              r="2"
              fill="url(#headerGrad)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Futuristic Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>

                {/* 3D Logo container */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-white font-black text-xl">CV</span>

                  {/* Floating elements */}
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400 animate-pulse" />
                  <Brain
                    className="absolute -bottom-1 -left-1 h-3 w-3 text-pink-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>

                {/* Orbital rings */}
                <div className="absolute inset-0 border border-pink-500/30 rounded-2xl animate-rotate-slow"></div>
                <div
                  className="absolute inset-0 border border-violet-500/30 rounded-2xl animate-rotate-slow"
                  style={{
                    animationDirection: "reverse",
                    animationDelay: "1s",
                  }}
                ></div>
              </div>

              <div className="ml-4">
                <span className="text-3xl font-black bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                  CV360
                </span>
                <div className="text-xs text-white/60 font-bold tracking-widest">
                  NEURAL SYSTEM
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-6 py-3 text-white/80 hover:text-white transition-colors duration-300 font-bold"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur"></div>

                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </div>

                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-3 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Shield className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">ACCÈS SÉCURISÉ</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-xl glass-effect border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity"></div>
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
            <div className="glass-effect rounded-2xl border border-white/20 backdrop-blur-2xl p-6 shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-2xl"></div>

              <div className="relative space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white py-3 rounded-xl font-bold shadow-lg border border-white/20">
                    <Shield className="mr-2 h-5 w-5" />
                    ACCÈS SÉCURISÉ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom scanner line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse"></div>

      {/* Corner elements */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-pink-500/50"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-violet-500/50"></div>
    </header>
  );
}
