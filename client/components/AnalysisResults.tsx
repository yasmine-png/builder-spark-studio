import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Brain,
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Download,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export default function AnalysisResults() {
  const { state } = useApp();

  // Ne pas afficher cette section si les conditions ne sont pas remplies
  if (!state.showResults || !state.selectedJob || !state.matchingScore) {
    return null;
  }

  const matchingScore = state.matchingScore;
  const detectedSkills = [
    { name: "React", level: "Expert", matched: true },
    { name: "TypeScript", level: "Avancé", matched: true },
    { name: "Node.js", level: "Intermédiaire", matched: true },
    { name: "Python", level: "Débutant", matched: false },
    { name: "Git", level: "Avancé", matched: true },
    { name: "AWS", level: "Intermédiaire", matched: false },
  ];

  const suggestions = [
    {
      type: "skill",
      title: "Ajoutez TensorFlow",
      description: "Cette compétence magique augmenterait votre score de +20%",
      impact: "+20%",
      priority: "high",
      icon: "🚀",
    },
    {
      type: "experience",
      title: "Détaillez vos projets",
      description: "Ajoutez des métriques quantifiables à vos réalisations",
      impact: "+15%",
      priority: "medium",
      icon: "📊",
    },
    {
      type: "certification",
      title: "Certification AWS",
      description: "Une certification Cloud améliorerait votre profil",
      impact: "+12%",
      priority: "medium",
      icon: "☁️",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200";
      case "medium":
        return "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <section
      id="results"
      className="relative py-24 bg-gradient-to-br from-cv360-purple-light/30 via-white to-cv360-pink-light/30 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-cv360-violet/10 to-cv360-magenta/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-cv360-pink rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-cv360-purple rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 backdrop-blur-sm border border-cv360-pink/20 rounded-full px-6 py-2 mb-6">
            <Brain className="h-4 w-4 text-cv360-pink animate-pulse" />
            <span className="text-sm font-medium text-cv360-pink">
              Analyse IA Complète
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink to-cv360-purple">
              Score Magique
            </span>
          </h2>
          <div className="bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 backdrop-blur-sm border border-cv360-pink/20 rounded-2xl px-6 py-4 mb-6 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-cv360-pink mb-1">
              Matching pour : {state.selectedJob.title}
            </p>
            <p className="text-cv360-gray">
              chez {state.selectedJob.company} • {state.selectedJob.location}
            </p>
          </div>
          <p className="text-xl text-cv360-gray max-w-2xl mx-auto leading-relaxed">
            Découvrez votre compatibilité et obtenez des conseils personnalisés
            pour optimiser votre profil pour cette offre !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Score Principal */}
          <div className="lg:col-span-1">
            <div className="relative glass-effect rounded-3xl p-8 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-3xl animate-pulse-glow"></div>

              <div className="relative text-center">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-cv360-pink mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Score Ultime
                  </h3>
                </div>

                <div className="relative w-40 h-40 mx-auto mb-8">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full opacity-20 animate-pulse-glow"></div>

                  <svg
                    className="w-40 h-40 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-cv360-gray-light"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-cv360-pink"
                      stroke="url(#gradient1)"
                      strokeWidth="4"
                      strokeDasharray={`${matchingScore}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{
                        animation: "drawCircle 2s ease-in-out",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="hsl(var(--cv360-pink))" />
                        <stop
                          offset="100%"
                          stopColor="hsl(var(--cv360-purple))"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink to-cv360-purple">
                        {matchingScore}%
                      </span>
                      <div className="flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < 4
                                ? "text-cv360-magenta fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <TrendingUp className="h-6 w-6 text-green-500 animate-bounce" />
                    <span className="font-bold text-green-700">
                      Profil Exceptionnel !
                    </span>
                  </div>
                  <p className="text-cv360-gray">
                    Votre CV correspond à{" "}
                    <span className="font-bold text-cv360-pink">87%</span> des
                    critères magiques
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compétences Détectées */}
          <div className="lg:col-span-2">
            <div className="relative glass-effect rounded-3xl p-8 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple/5 to-cv360-violet/5 rounded-3xl animate-pulse-glow"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-8">
                  <Brain className="h-7 w-7 text-cv360-purple animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Compétences Magiques Détectées
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {detectedSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="relative group glass-effect-dark rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/5 to-cv360-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              skill.matched
                                ? "bg-gradient-to-r from-green-400 to-green-500 animate-pulse"
                                : "bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"
                            }`}
                          ></div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">
                              {skill.name}
                            </p>
                            <p className="text-cv360-gray">{skill.level}</p>
                          </div>
                        </div>
                        <Badge
                          className={
                            skill.matched
                              ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200"
                              : "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200"
                          }
                        >
                          {skill.matched ? "✨ Perfect Match" : "⚡ Partiel"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions IA */}
        <div className="mt-12">
          <div className="relative glass-effect rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet/5 to-cv360-magenta/5 rounded-3xl animate-pulse-glow"></div>

            <div className="relative">
              <div className="flex items-center space-x-3 mb-8">
                <Lightbulb className="h-7 w-7 text-cv360-violet animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Suggestions Magiques IA
                </h3>
              </div>

              <div className="grid gap-6">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="relative group glass-effect-dark rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/5 to-cv360-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                          {suggestion.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-xl text-gray-900">
                            {suggestion.title}
                          </h4>
                          <div className="flex items-center space-x-3">
                            <Badge
                              className={getPriorityColor(suggestion.priority)}
                            >
                              {suggestion.priority === "high"
                                ? "🔥 Priorité haute"
                                : suggestion.priority === "medium"
                                  ? "⚡ Priorité moyenne"
                                  : "✨ Priorité basse"}
                            </Badge>
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink to-cv360-purple">
                              {suggestion.impact}
                            </span>
                          </div>
                        </div>
                        <p className="text-cv360-gray text-lg leading-relaxed">
                          {suggestion.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">
                    Télécharger le rapport magique
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          from {
            stroke-dasharray: 0, 100;
          }
          to {
            stroke-dasharray: ${matchingScore}, 100;
          }
        }
      `}</style>
    </section>
  );
}
