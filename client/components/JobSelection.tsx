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
      title: "Développeur Full Stack React/Node.js",
      company: "TechCorp",
      location: "Paris, France",
      type: "CDI",
      salary: "50-65k €",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description:
        "Rejoignez notre équipe pour développer des applications web modernes et révolutionner l'expérience utilisateur.",
    },
    {
      id: 2,
      title: "Ingénieur Frontend React Senior",
      company: "StartupX",
      location: "Lyon, France",
      type: "CDI",
      salary: "45-55k €",
      skills: ["React", "TypeScript", "GraphQL", "Jest"],
      description:
        "Nous recherchons un développeur passionné pour notre plateforme SaaS en pleine croissance.",
    },
    {
      id: 3,
      title: "Développeur JavaScript Full Stack",
      company: "InnovateTech",
      location: "Remote",
      type: "Freelance",
      salary: "400-500 €/jour",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      description:
        "Mission de 6 mois pour développer une nouvelle fonctionnalité révolutionnaire.",
    },
    {
      id: 4,
      title: "Lead Developer Frontend",
      company: "BigCorp",
      location: "Marseille, France",
      type: "CDI",
      salary: "55-70k €",
      skills: ["React", "Vue.js", "Leadership", "Agile"],
      description:
        "Dirigez une équipe de développeurs frontend dans un environnement d'innovation continue.",
    },
  ];

  // Ne pas afficher cette section si aucun CV n'a été téléchargé ou si l'analyse n'est pas terminée
  if (!state.uploadedFile || state.isAnalyzing) {
    return null;
  }

  return (
    <section
      id="job-selection"
      className="relative py-24 bg-gradient-to-br from-cv360-magenta-light/20 via-white to-cv360-violet-light/20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cv360-magenta/10 to-cv360-violet/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-cv360-magenta rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-cv360-violet rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cv360-magenta/10 to-cv360-violet/10 backdrop-blur-sm border border-cv360-magenta/20 rounded-full px-6 py-2 mb-6">
            <Target className="h-4 w-4 text-cv360-magenta animate-pulse" />
            <span className="text-sm font-medium text-cv360-magenta">
              Étape 2 : Choix Magique
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choisissez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cv360-magenta to-cv360-violet">
              offre de rêve
            </span>
          </h2>
          <p className="text-xl text-cv360-gray max-w-2xl mx-auto leading-relaxed">
            Sélectionnez l'offre d'emploi qui vous intéresse pour découvrir
            votre score de matching magique !
          </p>
        </div>

        <div className="grid gap-8">
          {availableJobs.map((job, index) => (
            <div
              key={job.id}
              className="relative group glass-effect rounded-3xl border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-magenta/5 to-cv360-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>

              <div className="relative p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cv360-magenta to-cv360-violet rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                          <div className="relative w-16 h-16 bg-gradient-to-r from-cv360-magenta to-cv360-violet rounded-2xl flex items-center justify-center shadow-lg">
                            <Building className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {job.title}
                          </h3>
                          <p className="text-cv360-gray font-semibold text-lg">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-cv360-magenta animate-pulse" />
                        <span className="text-sm font-medium text-cv360-magenta">
                          Recommandé
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-center space-x-3 text-cv360-gray">
                        <MapPin className="h-5 w-5 text-cv360-magenta" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-cv360-gray">
                        <Clock className="h-5 w-5 text-cv360-violet" />
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-cv360-gray">
                        <TrendingUp className="h-5 w-5 text-cv360-pink" />
                        <span className="font-bold text-cv360-magenta text-lg">
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <p className="text-cv360-gray text-lg leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-gradient-to-r from-cv360-magenta/10 to-cv360-violet/10 text-cv360-magenta border border-cv360-magenta/20 px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center lg:justify-start">
                      <Button
                        onClick={() => selectJob(job)}
                        size="lg"
                        className="relative bg-gradient-to-r from-cv360-magenta to-cv360-violet hover:from-cv360-magenta/90 hover:to-cv360-violet/90 text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet to-cv360-purple opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <Zap className="mr-3 h-6 w-6 relative z-10 animate-pulse" />
                        <span className="relative z-10">
                          Calculer mon matching
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cv360-magenta rounded-full opacity-30 animate-float"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cv360-violet rounded-full opacity-40 animate-float-delayed"></div>
            </div>
          ))}
        </div>

        {/* Encouragement Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 glass-effect rounded-2xl px-8 py-4 border border-white/30">
            <Sparkles className="h-6 w-6 text-cv360-magenta animate-pulse" />
            <span className="text-lg font-medium text-cv360-gray">
              Choisissez une offre pour découvrir la magie du matching IA !
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
