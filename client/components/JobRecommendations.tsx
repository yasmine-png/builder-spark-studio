import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  TrendingUp,
  ExternalLink,
  Star,
  Building,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  matchScore: number;
  salary: string;
  postedDate: string;
  skills: string[];
  description: string;
  companyLogo?: string;
}

export default function JobRecommendations() {
  const recommendedJobs: Job[] = [
    {
      id: 1,
      title: "Développeur Full Stack React/Node.js",
      company: "TechCorp",
      location: "Paris, France",
      type: "CDI",
      matchScore: 95,
      salary: "50-65k €",
      postedDate: "Il y a 2 jours",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description:
        "Rejoignez notre équipe pour développer des applications web modernes...",
    },
    {
      id: 2,
      title: "Ingénieur Frontend React Senior",
      company: "StartupX",
      location: "Lyon, France",
      type: "CDI",
      matchScore: 89,
      salary: "45-55k €",
      postedDate: "Il y a 4 jours",
      skills: ["React", "TypeScript", "GraphQL", "Jest"],
      description:
        "Nous recherchons un développeur passionné pour notre plateforme...",
    },
    {
      id: 3,
      title: "Développeur JavaScript Full Stack",
      company: "InnovateTech",
      location: "Remote",
      type: "Freelance",
      matchScore: 83,
      salary: "400-500 €/jour",
      postedDate: "Il y a 1 semaine",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      description:
        "Mission de 6 mois pour développer une nouvelle fonctionnalité...",
    },
    {
      id: 4,
      title: "Lead Developer Frontend",
      company: "BigCorp",
      location: "Marseille, France",
      type: "CDI",
      matchScore: 78,
      salary: "55-70k €",
      postedDate: "Il y a 3 jours",
      skills: ["React", "Vue.js", "Leadership", "Agile"],
      description:
        "Dirigez une équipe de développeurs frontend dans un environnement...",
    },
    {
      id: 5,
      title: "Développeur Web React",
      company: "WebAgency",
      location: "Bordeaux, France",
      type: "CDI",
      matchScore: 75,
      salary: "40-50k €",
      postedDate: "Il y a 5 jours",
      skills: ["React", "CSS", "JavaScript", "Figma"],
      description:
        "Créez des expériences utilisateur exceptionnelles pour nos clients...",
    },
  ];

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 80) return "bg-blue-100 text-blue-800";
    if (score >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return "🎯";
    if (score >= 80) return "⭐";
    if (score >= 70) return "👍";
    return "✨";
  };

  return (
    <section id="jobs" className="py-16 bg-cv360-blue-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Offres d'emploi compatibles
          </h2>
          <p className="text-lg text-cv360-gray max-w-2xl mx-auto">
            Découvrez les offres qui correspondent le mieux à votre profil et à
            vos compétences
          </p>
        </div>

        <div className="grid gap-6">
          {recommendedJobs.map((job) => (
            <Card
              key={job.id}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    {/* Job Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cv360-blue to-cv360-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {job.title}
                            </h3>
                            <p className="text-cv360-gray font-medium">
                              {job.company}
                            </p>
                          </div>
                        </div>
                        <Badge className={getMatchColor(job.matchScore)}>
                          {getScoreIcon(job.matchScore)} {job.matchScore}% match
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-cv360-gray">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cv360-gray">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cv360-gray">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm font-medium text-cv360-blue">
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <p className="text-cv360-gray mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-cv360-blue-light text-cv360-blue"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-cv360-gray">
                          {job.postedDate}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cv360-blue text-cv360-blue hover:bg-cv360-blue-light"
                          >
                            <Star className="h-4 w-4 mr-1" />
                            Sauvegarder
                          </Button>
                          <Button
                            size="sm"
                            className="bg-cv360-blue hover:bg-cv360-blue/90 text-white"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Postuler
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-cv360-blue text-cv360-blue hover:bg-cv360-blue-light px-8"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Voir toutes les offres
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cv360-blue mb-2">
                2,500+
              </div>
              <p className="text-cv360-gray">Offres disponibles</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cv360-cyan mb-2">85%</div>
              <p className="text-cv360-gray">Taux de matching moyen</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cv360-purple mb-2">
                1,200+
              </div>
              <p className="text-cv360-gray">Entreprises partenaires</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
