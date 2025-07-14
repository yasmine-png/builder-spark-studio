import { Button } from "@/components/ui/button";
import { Upload, Brain, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cv360-blue-light via-white to-cv360-cyan-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Analysez votre CV en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cv360-blue to-cv360-cyan">
                  1 clic
                </span>{" "}
                grâce à l'IA
              </h1>
              <p className="mt-6 text-xl text-cv360-gray max-w-2xl lg:max-w-none">
                Obtenez des conseils personnalisés, un score de matching précis,
                et préparez vos entretiens avec notre simulateur IA avancé.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cv360-blue to-cv360-cyan hover:from-cv360-blue/90 hover:to-cv360-cyan/90 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Téléverser mon CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cv360-blue text-cv360-blue hover:bg-cv360-blue-light px-8 py-4 text-lg"
                >
                  Voir une démo
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-cv360-blue">
                    98%
                  </div>
                  <div className="text-sm text-cv360-gray">Précision IA</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-cv360-cyan">
                    10k+
                  </div>
                  <div className="text-sm text-cv360-gray">CV analysés</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-cv360-purple">
                    4.9/5
                  </div>
                  <div className="text-sm text-cv360-gray">Note moyenne</div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative lg:order-last">
              <div className="relative mx-auto w-full max-w-lg">
                {/* Background gradient circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-cv360-blue/20 to-cv360-cyan/20 rounded-full blur-3xl"></div>

                {/* Main illustration container */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-cv360-gray-light">
                  {/* CV Document */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 mb-6">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2 bg-cv360-blue-light rounded-full px-4 py-2">
                      <Brain className="h-4 w-4 text-cv360-blue" />
                      <span className="text-sm font-medium text-cv360-blue">
                        IA en action
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-cv360-cyan-light rounded-full px-4 py-2">
                      <TrendingUp className="h-4 w-4 text-cv360-cyan" />
                      <span className="text-sm font-medium text-cv360-cyan">
                        Score: 87%
                      </span>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cv360-purple rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cv360-cyan rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cv360-blue to-cv360-cyan opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
