import { Button } from "@/components/ui/button";
import { Upload, Sparkles, TrendingUp, Zap, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cv360-pink-light via-white to-cv360-purple-light">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cv360-violet to-cv360-magenta rounded-full opacity-30 animate-float-delayed blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-cv360-purple to-cv360-pink rounded-full opacity-15 animate-float blur-2xl"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-cv360-magenta opacity-20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-cv360-violet opacity-25 rounded-full animate-pulse-glow"></div>

        {/* Gradient Mesh */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cv360-purple/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cv360-pink/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 backdrop-blur-sm border border-cv360-pink/20 rounded-full px-6 py-2">
                <Sparkles className="h-4 w-4 text-cv360-pink" />
                <span className="text-sm font-medium text-cv360-pink">
                  IA Nouvelle Génération
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">
                  Analysez votre CV
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink via-cv360-purple to-cv360-violet animate-pulse-glow">
                  en 1 clic
                </span>
                <span className="block text-gray-900 text-4xl md:text-5xl lg:text-6xl mt-2">
                  grâce à l'IA
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-cv360-gray max-w-2xl lg:max-w-none leading-relaxed">
                Obtenez des conseils personnalisés, un score de matching précis,
                et préparez vos entretiens avec notre simulateur IA
                révolutionnaire.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-magenta opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Upload className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">Téléverser mon CV</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-cv360-pink text-cv360-pink hover:bg-cv360-pink hover:text-white px-10 py-6 text-lg rounded-2xl backdrop-blur-sm bg-white/50 transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Voir une démo
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative text-center lg:text-left p-4">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink to-cv360-purple">
                      98%
                    </div>
                    <div className="text-sm text-cv360-gray font-medium">
                      Précision IA
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative text-center lg:text-left p-4">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cv360-purple to-cv360-violet">
                      25k+
                    </div>
                    <div className="text-sm text-cv360-gray font-medium">
                      CV analysés
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet to-cv360-magenta rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative text-center lg:text-left p-4">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cv360-violet to-cv360-magenta">
                      4.9/5
                    </div>
                    <div className="text-sm text-cv360-gray font-medium">
                      Note moyenne
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Illustration */}
            <div className="relative lg:order-last">
              <div className="relative mx-auto w-full max-w-lg">
                {/* Floating Card Container */}
                <div className="relative">
                  {/* Main Floating Card */}
                  <div className="relative glass-effect rounded-3xl p-8 shadow-2xl border border-white/30 animate-float backdrop-blur-xl">
                    {/* CV Document with Glassmorphism */}
                    <div className="glass-effect-dark rounded-2xl p-6 mb-6 border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full"></div>
                          <div className="h-4 bg-gradient-to-r from-cv360-pink/50 to-transparent rounded w-3/4"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gradient-to-r from-cv360-purple/30 to-transparent rounded w-full"></div>
                          <div className="h-3 bg-gradient-to-r from-cv360-violet/30 to-transparent rounded w-5/6"></div>
                          <div className="h-3 bg-gradient-to-r from-cv360-magenta/30 to-transparent rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>

                    {/* AI Analysis with Enhanced Effects */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative flex items-center space-x-2 bg-white/90 backdrop-blur rounded-full px-6 py-3 border border-cv360-pink/30">
                          <Sparkles className="h-5 w-5 text-cv360-pink animate-pulse" />
                          <span className="text-sm font-bold text-cv360-pink">
                            IA Active
                          </span>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative flex items-center space-x-2 bg-white/90 backdrop-blur rounded-full px-6 py-3 border border-cv360-purple/30">
                          <TrendingUp className="h-5 w-5 text-cv360-purple animate-bounce" />
                          <span className="text-sm font-bold text-cv360-purple">
                            Score: 94%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Mini Cards */}
                    <div className="absolute -top-6 -right-6 glass-effect rounded-xl p-3 animate-float-delayed border border-white/30">
                      <Star className="h-6 w-6 text-cv360-magenta animate-pulse" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-3 animate-float border border-white/30">
                      <Zap className="h-6 w-6 text-cv360-violet animate-pulse" />
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute -inset-20">
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-cv360-pink rounded-full animate-rotate-slow origin-bottom"></div>
                    <div
                      className="absolute bottom-0 right-1/4 w-3 h-3 bg-cv360-purple rounded-full animate-rotate-slow origin-top"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                    <div
                      className="absolute top-1/2 right-0 w-5 h-5 bg-cv360-violet rounded-full animate-rotate-slow origin-left"
                      style={{ animationDelay: "5s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
