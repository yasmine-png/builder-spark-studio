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
} from "lucide-react";

export default function AnalysisResults() {
  const matchingScore = 87;
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
      description: "Cette compétence augmenterait votre score de +20%",
      impact: "+20%",
      priority: "high",
    },
    {
      type: "experience",
      title: "Détaillez vos projets",
      description: "Ajoutez des métriques quantifiables à vos réalisations",
      impact: "+15%",
      priority: "medium",
    },
    {
      type: "certification",
      title: "Certification AWS",
      description: "Une certification Cloud améliorerait votre profil",
      impact: "+12%",
      priority: "medium",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <section id="results" className="py-16 bg-cv360-blue-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Analyse de votre CV
          </h2>
          <p className="text-lg text-cv360-gray max-w-2xl mx-auto">
            Découvrez votre score de matching et obtenez des conseils
            personnalisés pour améliorer votre profil
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Score Principal */}
          <Card className="lg:col-span-1 border-none shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl font-semibold text-gray-900">
                Score de Matching
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg
                  className="w-32 h-32 transform -rotate-90"
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
                    className={getScoreColor(matchingScore)}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${matchingScore}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-3xl font-bold ${getScoreColor(matchingScore)}`}
                  >
                    {matchingScore}%
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-700">
                    Excellent profil
                  </span>
                </div>
                <p className="text-sm text-cv360-gray">
                  Votre CV correspond à 87% des critères recherchés
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Compétences Détectées */}
          <Card className="lg:col-span-2 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-cv360-blue" />
                <span>Compétences Détectées</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detectedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-cv360-gray-light"
                  >
                    <div className="flex items-center space-x-3">
                      {skill.matched ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">
                          {skill.name}
                        </p>
                        <p className="text-sm text-cv360-gray">{skill.level}</p>
                      </div>
                    </div>
                    <Badge
                      variant={skill.matched ? "default" : "secondary"}
                      className={
                        skill.matched
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {skill.matched ? "Match" : "Partiel"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suggestions IA */}
        <Card className="mt-8 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-cv360-cyan" />
              <span>Suggestions IA pour améliorer votre profil</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-cv360-gray-light hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <Target className="h-5 w-5 text-cv360-blue mt-1" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {suggestion.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={getPriorityColor(suggestion.priority)}
                        >
                          {suggestion.priority === "high"
                            ? "Priorité haute"
                            : suggestion.priority === "medium"
                              ? "Priorité moyenne"
                              : "Priorité basse"}
                        </Badge>
                        <span className="text-sm font-semibold text-cv360-blue">
                          {suggestion.impact}
                        </span>
                      </div>
                    </div>
                    <p className="text-cv360-gray">{suggestion.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-cv360-blue hover:bg-cv360-blue/90 text-white px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger le rapport complet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
