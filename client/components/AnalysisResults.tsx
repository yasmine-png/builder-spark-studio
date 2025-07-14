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
  Cpu,
  Shield,
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

  // Suggestions dynamiques basées sur l'offre sélectionnée
  const getSuggestions = () => {
    const jobSkills = state.selectedJob?.skills || [];
    const suggestions = [];

    // Suggestions basées sur les compétences de l'offre
    if (jobSkills.includes("React")) {
      suggestions.push({
        type: "skill",
        title: `Maîtrisez React avancé`,
        description: `Approfondissez vos connaissances React pour cette offre chez ${state.selectedJob?.company}`,
        impact: "+18%",
        priority: "high",
        icon: "⚛️",
      });
    }

    if (jobSkills.includes("TypeScript")) {
      suggestions.push({
        type: "skill",
        title: "Certification TypeScript",
        description: "Une expertise TypeScript vous démarquerait pour ce poste",
        impact: "+15%",
        priority: "medium",
        icon: "📘",
      });
    }

    // Suggestion générale d'amélioration
    suggestions.push({
      type: "experience",
      title: "Projets similaires",
      description: `Mettez en avant des projets similaires aux besoins de ${state.selectedJob?.company}`,
      impact: "+12%",
      priority: "medium",
      icon: "💼",
    });

    return suggestions;
  };

  const suggestions = getSuggestions();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-100/20 to-pink-100/20 text-red-300 border-red-400/30";
      case "medium":
        return "bg-gradient-to-r from-yellow-100/20 to-orange-100/20 text-yellow-300 border-yellow-400/30";
      default:
        return "bg-gradient-to-r from-blue-100/20 to-purple-100/20 text-blue-300 border-blue-400/30";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <section
      id="results"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Advanced Neural Background */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <svg className="w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="resultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="33%" stopColor="#8b5cf6" />
              <stop offset="66%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Data connections */}
          {Array.from({ length: 35 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#resultGrad)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}

          {/* Processing nodes */}
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="3"
              fill="url(#resultGrad)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Quantum particles */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Energy fields */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          {/* Analysis Badge */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-pink-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm tracking-wide">
                    ANALYSE QUANTIQUE COMPLÈTE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Refined Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 animate-pulse-glow">
              Score Quantique
            </span>
          </h2>

          {/* Mission Context */}
          <div className="glass-effect rounded-2xl px-8 py-4 mb-6 max-w-4xl mx-auto border border-white/20">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Target className="h-5 w-5 text-pink-400" />
              <p className="text-lg font-semibold text-pink-300">
                Compatibilité Mission: {state.selectedJob.title}
              </p>
            </div>
            <p className="text-white/70 text-sm">
              {state.selectedJob.company} • {state.selectedJob.location}
            </p>
          </div>

          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez votre compatibilité et recevez des recommandations
            personnalisées pour optimiser votre profil quantique
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Score Principal */}
          <div className="lg:col-span-1">
            <div className="relative glass-effect rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-3xl animate-pulse-glow"></div>

              <div className="relative text-center">
                <div className="flex items-center justify-center mb-6">
                  <Cpu className="h-6 w-6 text-pink-400 mr-2 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">
                    Score de Compatibilité
                  </h3>
                </div>

                <div className="relative w-36 h-36 mx-auto mb-6">
                  {/* Orbital rings */}
                  <div className="absolute inset-0 border border-pink-500/20 rounded-full animate-rotate-slow"></div>
                  <div
                    className="absolute inset-2 border border-violet-500/20 rounded-full animate-rotate-slow"
                    style={{ animationDirection: "reverse" }}
                  ></div>

                  <svg
                    className="w-36 h-36 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-white/10"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-pink-400"
                      stroke="url(#scoreGrad)"
                      strokeWidth="4"
                      strokeDasharray={`${matchingScore}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <defs>
                      <linearGradient
                        id="scoreGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                        {matchingScore}%
                      </span>
                      <div className="flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < 4
                                ? "text-pink-400 fill-current animate-pulse"
                                : "text-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <TrendingUp className="h-5 w-5 text-green-400 animate-bounce" />
                    <span className="font-semibold text-green-300 text-sm">
                      Compatibilité Excellente
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Votre profil correspond à{" "}
                    <span className="font-bold text-pink-400">
                      {matchingScore}%
                    </span>{" "}
                    des critères de la mission
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compétences Détectées */}
          <div className="lg:col-span-2">
            <div className="relative glass-effect rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-3xl animate-pulse-glow"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-violet-400 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">
                    Compétences Analysées
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detectedSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="relative group glass-effect-dark rounded-xl p-4 border border-white/10 transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              skill.matched
                                ? "bg-gradient-to-r from-green-400 to-green-500 animate-pulse"
                                : "bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"
                            }`}
                          ></div>
                          <div>
                            <p className="font-semibold text-white">
                              {skill.name}
                            </p>
                            <p className="text-white/60 text-sm">
                              {skill.level}
                            </p>
                          </div>
                        </div>
                        <Badge
                          className={
                            skill.matched
                              ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30"
                              : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
                          }
                        >
                          {skill.matched ? "✓ Compatible" : "~ Partiel"}
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
          <div className="relative glass-effect rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-3xl animate-pulse-glow"></div>

            <div className="relative">
              <div className="flex items-center space-x-3 mb-8">
                <Lightbulb className="h-6 w-6 text-cyan-400 animate-pulse" />
                <h3 className="text-xl font-bold text-white">
                  Recommandations Quantiques IA
                </h3>
              </div>

              <div className="grid gap-6">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="relative group glass-effect-dark rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center text-lg shadow-lg">
                          {suggestion.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg text-white">
                            {suggestion.title}
                          </h4>
                          <div className="flex items-center space-x-3">
                            <Badge
                              className={getPriorityColor(suggestion.priority)}
                            >
                              {suggestion.priority === "high"
                                ? "Priorité Haute"
                                : suggestion.priority === "medium"
                                  ? "Priorité Moyenne"
                                  : "Priorité Basse"}
                            </Badge>
                            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                              {suggestion.impact}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                          {suggestion.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="mr-3 h-5 w-5 relative z-10" />
                  <span className="relative z-10">
                    Télécharger l'Analyse Complète
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
