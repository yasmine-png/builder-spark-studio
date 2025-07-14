import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  TrendingUp,
  Target,
  Building,
  Sparkles,
  Zap,
  Star,
  Rocket,
  Brain,
  Shield,
} from "lucide-react";
import { useApp } from "@/contexts/AppContext";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  description: string;
}

export default function JobSelection() {
  const { state, selectJob } = useApp();

  const availableJobs: Job[] = [
    {
      id: 1,
      title: "Développeur Quantique React/Node.js",
      company: "NeuroCorp Industries",
      location: "Station Alpha, Secteur 7",
      type: "Mission Permanente",
      salary: "50-65k Credits",
      skills: ["React", "Node.js", "TypeScript", "Neural-AWS"],
      description:
        "Rejoignez notre flotte d'élite pour développer des applications interdimensionnelles et révolutionner l'expérience utilisateur galactique.",
    },
    {
      id: 2,
      title: "Ingénieur Frontend Cyber-React",
      company: "Quantum StartupX",
      location: "Base Luna, Cratère Tech",
      type: "Contrat Stellaire",
      salary: "45-55k Credits",
      skills: ["React", "TypeScript", "GraphQL", "Cyber-Jest"],
      description:
        "Nous recherchons un développeur cybernétique pour notre plateforme SaaS multi-dimensionnelle en expansion hyperspace.",
    },
    {
      id: 3,
      title: "Architecte JavaScript Spatial",
      company: "Cosmos InnovateTech",
      location: "Station Orbitale",
      type: "Mission Freelance",
      salary: "400-500 Credits/cycle",
      skills: ["JavaScript", "React", "Node.js", "Quantum-DB"],
      description:
        "Mission de 6 cycles stellaires pour développer une nouvelle fonctionnalité de téléportation de données révolutionnaire.",
    },
    {
      id: 4,
      title: "Commandant Frontend Suprême",
      company: "MegaCorp Galactic",
      location: "Metropolis Neo-Mars",
      type: "Rang Permanent",
      salary: "55-70k Credits",
      skills: ["React", "Vue.js", "Neural-Leadership", "Cyber-Agile"],
      description:
        "Dirigez une armée de développeurs cybernétiques dans un environnement d'innovation continue et de conquête spatiale.",
    },
  ];

  // Ne pas afficher cette section si aucun CV n'a été téléchargé ou si l'analyse n'est pas terminée
  if (!state.uploadedFile || state.isAnalyzing) {
    return null;
  }

  return (
    <section
      id="job-selection"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Advanced Neural Background */}
      <div className="absolute inset-0">
        {/* Complex neural network */}
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="jobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="25%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="75%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Neural grid */}
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#jobGrad)"
              strokeWidth="1"
              opacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>

        {/* Floating data packets */}
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Geometric holograms */}
        <div className="absolute top-20 left-20 w-48 h-48 border border-pink-500/20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-40 right-32 w-32 h-32 border border-violet-500/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 border border-cyan-500/20 rotate-12 animate-float"></div>

        {/* Energy fields */}
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Epic Header */}
        <div className="text-center mb-20">
          {/* Mission Badge */}
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-pink-400 animate-pulse" />
                  <span className="text-white font-black text-lg tracking-wider">
                    ÉTAPE 2: SÉLECTION STRATÉGIQUE
                  </span>
                  <Rocket className="h-6 w-6 text-violet-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Choisissez votre
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 animate-pulse-glow">
              Mission Spatiale
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Sélectionnez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-black">
              {" "}
              mission galactique{" "}
            </span>
            pour découvrir votre compatibilité quantique avec notre IA suprême !
          </p>

          {/* Mission Counter */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-2xl px-6 py-3 border border-white/20">
            <Brain className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-white font-bold">
              {availableJobs.length} MISSIONS DISPONIBLES
            </span>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-12">
          {availableJobs.map((job, index) => (
            <div
              key={job.id}
              className="relative group perspective-1000 transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 3D Container */}
              <div className="relative transform-style-preserve-3d group-hover:rotate-x-3 group-hover:rotate-y-3 transition-all duration-500">
                {/* Main job card */}
                <div className="relative glass-effect rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>

                  {/* Holographic scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      {/* Job Information */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-start space-x-8">
                            {/* 3D Company Icon */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition-opacity animate-pulse-glow"></div>
                              <div className="relative w-20 h-20 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                                <Building className="h-10 w-10 text-white" />

                                {/* Orbital rings */}
                                <div className="absolute inset-0 border border-pink-500/30 rounded-3xl animate-rotate-slow"></div>
                                <div
                                  className="absolute inset-2 border border-violet-500/30 rounded-3xl animate-rotate-slow"
                                  style={{ animationDirection: "reverse" }}
                                ></div>
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="text-3xl font-black text-white mb-3 leading-tight">
                                {job.title}
                              </h3>
                              <p className="text-white/80 font-bold text-xl mb-2">
                                {job.company}
                              </p>
                              <div className="text-sm text-white/60 font-mono tracking-wide">
                                ID: MISSION-{job.id.toString().padStart(4, "0")}
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="flex items-center space-x-2 glass-effect rounded-xl px-4 py-2 border border-white/20">
                            <Star className="h-5 w-5 text-pink-400 animate-pulse" />
                            <span className="text-pink-300 font-bold text-sm">
                              PRIORITÉ ALPHA
                            </span>
                          </div>
                        </div>

                        {/* Mission Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="flex items-center space-x-3 glass-effect-dark rounded-xl p-4 border border-white/10">
                            <MapPin className="h-6 w-6 text-pink-400" />
                            <div>
                              <div className="text-white/60 text-xs font-bold">
                                LOCALISATION
                              </div>
                              <div className="text-white font-bold">
                                {job.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 glass-effect-dark rounded-xl p-4 border border-white/10">
                            <Clock className="h-6 w-6 text-violet-400" />
                            <div>
                              <div className="text-white/60 text-xs font-bold">
                                TYPE MISSION
                              </div>
                              <div className="text-white font-bold">
                                {job.type}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 glass-effect-dark rounded-xl p-4 border border-white/10">
                            <TrendingUp className="h-6 w-6 text-cyan-400" />
                            <div>
                              <div className="text-white/60 text-xs font-bold">
                                RÉCOMPENSE
                              </div>
                              <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-black text-xl">
                                {job.salary}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Mission Description */}
                        <p className="text-white/80 text-lg leading-relaxed mb-8 glass-effect-dark rounded-xl p-6 border border-white/10">
                          {job.description}
                        </p>

                        {/* Skills Requirements */}
                        <div className="mb-10">
                          <div className="text-white/80 font-bold mb-4 flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-cyan-400" />
                            <span>COMPÉTENCES REQUISES:</span>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {job.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-white border border-pink-500/30 px-4 py-2 text-sm font-bold rounded-xl backdrop-blur"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Mission Accept Button */}
                        <div className="flex justify-center lg:justify-start">
                          <Button
                            onClick={() => selectJob(job)}
                            size="lg"
                            className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-16 py-6 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden border border-white/20"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <Zap className="mr-4 h-6 w-6 relative z-10 animate-pulse" />
                            <span className="relative z-10">
                              ACCEPTER LA MISSION
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating holographic elements */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-60"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.7}s`,
                      }}
                    />
                  ))}

                  {/* Corner UI elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-500 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-violet-500 rounded-full animate-pulse opacity-60"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Briefing */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 glass-effect rounded-3xl px-12 py-6 border border-white/20">
            <Sparkles className="h-8 w-8 text-pink-400 animate-pulse" />
            <span className="text-2xl font-black text-white">
              SÉLECTIONNEZ UNE MISSION POUR ACTIVER LE SCANNER QUANTIQUE !
            </span>
            <Brain className="h-8 w-8 text-violet-400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-3 {
          transform: rotateX(3deg);
        }
        .rotate-y-3 {
          transform: rotateY(3deg);
        }
      `}</style>
    </section>
  );
}
