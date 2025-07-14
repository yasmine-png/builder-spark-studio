import { Button } from "@/components/ui/button";
import {
  Upload,
  Sparkles,
  TrendingUp,
  Zap,
  Star,
  Rocket,
  Brain,
  Target,
  Cpu,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Advanced Neural Network Background */}
      <div className="absolute inset-0">
        {/* Main neural network */}
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="33%" stopColor="#8b5cf6" />
              <stop offset="66%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Neural connections */}
          {Array.from({ length: 50 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#neuralGrad)"
              strokeWidth="1"
              opacity="0.3"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}

          {/* Neural nodes */}
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="4"
              fill="url(#neuralGrad)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Floating quantum particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric hologram elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-pink-500/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-60 right-32 w-32 h-32 border border-violet-500/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 border border-cyan-500/30 rotate-12 animate-float"></div>
        <div
          className="absolute top-1/3 right-10 w-20 h-20 border border-emerald-500/30 rotate-45 animate-rotate-slow"
          style={{ animationDirection: "reverse" }}
        ></div>

        {/* Massive glowing energy orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-12">
              {/* Quantum Badge */}
              <div className="inline-flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-6 w-6 text-pink-400 animate-pulse" />
                      <span className="text-white font-black text-lg tracking-wider">
                        SYSTÈME NEURONAL AVANCÉ
                      </span>
                      <Cpu className="h-6 w-6 text-violet-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white drop-shadow-2xl mb-4">
                  Analysez votre
                </span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 animate-pulse-glow">
                    CV Quantique
                  </span>
                </span>
                <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl mt-4">
                  en 1 nano-seconde
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl leading-relaxed">
                Découvrez la puissance de l'
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-black">
                  intelligence artificielle quantique
                </span>{" "}
                pour propulser votre carrière vers l'infini
              </p>

              {/* Epic CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-16 py-8 text-2xl font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Rocket className="mr-4 h-8 w-8 relative z-10 animate-bounce" />
                  <span className="relative z-10">TÉLÉPORTER MON CV</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-white px-16 py-8 text-2xl font-black rounded-2xl backdrop-blur-sm bg-white/5 transform hover:scale-110 transition-all duration-300"
                >
                  <Zap className="mr-3 h-7 w-7 animate-pulse" />
                  DÉMO HOLOGRAPHIQUE
                </Button>
              </div>

              {/* Advanced Stats Grid */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                {[
                  {
                    icon: Target,
                    value: "99.9%",
                    label: "Précision Quantique",
                    color: "from-pink-400 to-rose-400",
                    delay: "0s",
                  },
                  {
                    icon: Rocket,
                    value: "< 0.1s",
                    label: "Vitesse Lumière",
                    color: "from-violet-400 to-purple-400",
                    delay: "0.5s",
                  },
                  {
                    icon: Sparkles,
                    value: "∞^∞",
                    label: "Potentiel Infini",
                    color: "from-cyan-400 to-emerald-400",
                    delay: "1s",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{ animationDelay: stat.delay }}
                  >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-glow"></div>

                    {/* Main card */}
                    <div className="relative glass-effect rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                      {/* Icon with orbital rings */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 border border-white/20 rounded-full animate-rotate-slow"></div>
                        <div
                          className="absolute inset-2 border border-white/10 rounded-full animate-rotate-slow"
                          style={{ animationDirection: "reverse" }}
                        ></div>
                        <stat.icon
                          className={`h-12 w-12 mx-auto text-transparent bg-clip-text bg-gradient-to-r ${stat.color} relative z-10`}
                        />
                      </div>

                      {/* Value */}
                      <div
                        className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 animate-pulse-glow`}
                      >
                        {stat.value}
                      </div>

                      {/* Label */}
                      <div className="text-white/80 text-sm font-bold tracking-wide">
                        {stat.label}
                      </div>

                      {/* Floating particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-60"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Futuristic 3D Hologram */}
            <div className="relative lg:order-last">
              <div className="relative mx-auto w-full max-w-lg">
                {/* Holographic container */}
                <div className="relative">
                  {/* Main hologram frame */}
                  <div className="relative glass-effect rounded-3xl p-12 shadow-2xl border border-white/20 backdrop-blur-2xl transform hover:scale-105 transition-all duration-500">
                    {/* Animated hologram effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl animate-pulse-glow"></div>

                    {/* Holographic scan lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-3xl animate-pulse opacity-50"></div>

                    {/* CV Document Hologram */}
                    <div className="relative glass-effect-dark rounded-2xl p-8 mb-8 border border-white/20">
                      <div className="space-y-6">
                        {/* Header with avatar */}
                        <div className="flex items-center space-x-4">
                          <div className="relative w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse-glow">
                            <div className="absolute inset-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"></div>
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="h-4 bg-gradient-to-r from-pink-500/40 to-violet-500/40 rounded w-3/4 animate-pulse"></div>
                            <div
                              className="h-3 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded w-1/2 animate-pulse"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                          </div>
                        </div>

                        {/* Data sections */}
                        <div className="space-y-3">
                          <div
                            className="h-3 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded w-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          <div
                            className="h-3 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded w-5/6 animate-pulse"
                            style={{ animationDelay: "1.5s" }}
                          ></div>
                          <div
                            className="h-3 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded w-4/6 animate-pulse"
                            style={{ animationDelay: "2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* AI Analysis Displays */}
                    <div className="flex items-center justify-center space-x-4">
                      {[
                        {
                          icon: Brain,
                          label: "IA ACTIVE",
                          color: "from-pink-500 to-rose-500",
                        },
                        {
                          icon: TrendingUp,
                          label: "SCORE: 97%",
                          color: "from-violet-500 to-purple-500",
                        },
                      ].map((item, index) => (
                        <div key={index} className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl blur group-hover:blur-lg transition-all"></div>
                          <div className="relative flex items-center space-x-3 glass-effect backdrop-blur rounded-2xl px-6 py-4 border border-white/30">
                            <item.icon
                              className={`h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r ${item.color} animate-pulse`}
                            />
                            <span className="text-white font-bold text-sm">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Floating holographic elements */}
                    <div className="absolute -top-8 -right-8 glass-effect rounded-2xl p-4 animate-float border border-white/30">
                      <Star className="h-8 w-8 text-cyan-400 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 animate-float-delayed border border-white/30">
                      <Zap className="h-8 w-8 text-pink-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Orbital scanner rings */}
                  <div className="absolute -inset-20">
                    <div className="absolute top-0 left-1/2 w-6 h-6 bg-pink-500 rounded-full animate-rotate-slow origin-bottom opacity-60"></div>
                    <div
                      className="absolute bottom-0 right-1/4 w-4 h-4 bg-violet-500 rounded-full animate-rotate-slow origin-top opacity-60"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                    <div
                      className="absolute top-1/2 right-0 w-8 h-8 bg-cyan-500 rounded-full animate-rotate-slow origin-left opacity-60"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Quantum field effect */}
                  <div className="absolute -inset-32 border border-white/10 rounded-full animate-rotate-slow opacity-30"></div>
                  <div
                    className="absolute -inset-40 border border-white/5 rounded-full animate-rotate-slow opacity-20"
                    style={{ animationDirection: "reverse" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

      {/* Corner UI elements */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
        <div
          className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="absolute top-4 right-4 text-white/40 font-mono text-sm">
        NEURAL-SYS v3.0.1
      </div>
    </section>
  );
}
