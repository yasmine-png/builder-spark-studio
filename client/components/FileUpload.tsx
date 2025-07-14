import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X, CheckCircle, Sparkles, Zap } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export default function FileUpload() {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { state, uploadFile, removeFile, analyzeCV } = useApp();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      if (isValidFileType(selectedFile)) {
        uploadFile(selectedFile);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (isValidFileType(selectedFile)) {
        uploadFile(selectedFile);
      }
    }
  };

  const isValidFileType = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return validTypes.includes(file.type);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = () => {
    // Reset the uploaded file by updating the context
    // We need to modify the context to handle file removal
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAnalyzeCV = () => {
    analyzeCV();
  };

  return (
    <section
      id="analyze"
      className="relative py-24 bg-gradient-to-br from-cv360-pink-light/20 via-white to-cv360-purple-light/20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cv360-violet/10 to-cv360-magenta/10 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 backdrop-blur-sm border border-cv360-pink/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-cv360-pink animate-pulse" />
            <span className="text-sm font-medium text-cv360-pink">
              Analyse IA Ultra-Rapide
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Téléversez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cv360-pink to-cv360-purple">
              CV magique
            </span>
          </h2>
          <p className="text-xl text-cv360-gray max-w-2xl mx-auto leading-relaxed">
            Déposez votre CV et découvrez la magie de l'IA en action. Analyse
            complète en quelques secondes !
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!state.uploadedFile ? (
            <div
              className={`relative glass-effect border-2 border-dashed rounded-3xl p-16 transition-all duration-500 transform hover:scale-105 ${
                dragOver
                  ? "border-cv360-pink bg-gradient-to-br from-cv360-pink/10 to-cv360-purple/10 shadow-2xl"
                  : "border-cv360-gray-light hover:border-cv360-pink/50 hover:bg-gradient-to-br hover:from-cv360-pink/5 hover:to-cv360-purple/5"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/5 via-cv360-purple/5 to-cv360-violet/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full blur opacity-30 animate-pulse-glow"></div>
                  <Upload
                    className={`relative mx-auto h-20 w-20 mb-6 transition-all duration-500 ${
                      dragOver
                        ? "text-cv360-pink scale-110"
                        : "text-cv360-gray hover:text-cv360-pink"
                    }`}
                  />
                </div>

                <div className="mb-8">
                  <p className="text-2xl font-bold text-gray-900 mb-3">
                    Glissez-déposez votre CV ici
                  </p>
                  <p className="text-lg text-cv360-gray">
                    ou cliquez pour ouvrir l'explorateur magique
                  </p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="lg"
                  className="relative bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">Parcourir les fichiers</span>
                </Button>

                <p className="text-sm text-cv360-gray">
                  Formats magiques acceptés:{" "}
                  <span className="font-semibold text-cv360-pink">
                    PDF, DOC, DOCX
                  </span>{" "}
                  (max 10MB)
                </p>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-cv360-pink rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-cv360-purple rounded-full opacity-30 animate-float-delayed"></div>
            </div>
          ) : (
            <div className="relative glass-effect rounded-3xl p-8 border border-cv360-pink/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-3xl animate-pulse-glow"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-2xl blur opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-2xl flex items-center justify-center shadow-lg">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-1">
                        {state.uploadedFile.name}
                      </p>
                      <p className="text-cv360-gray">
                        {formatFileSize(state.uploadedFile.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-cv360-gray hover:text-red-500 hover:bg-red-50 rounded-xl"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center space-x-3 mb-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <CheckCircle className="h-6 w-6 text-green-500 animate-pulse" />
                  <span className="text-green-700 font-semibold">
                    Fichier validé et prêt pour l'analyse magique !
                  </span>
                </div>

                <Button
                  onClick={handleAnalyzeCV}
                  disabled={state.isAnalyzing}
                  size="lg"
                  className="relative w-full bg-gradient-to-r from-cv360-pink to-cv360-purple hover:from-cv360-pink/90 hover:to-cv360-purple/90 text-white font-bold py-4 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-purple to-cv360-violet opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  {state.isAnalyzing ? (
                    <>
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        <span>Magie en cours...</span>
                      </div>
                    </>
                  ) : (
                    <span className="relative z-10 flex items-center justify-center">
                      <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                      Analyser mon CV avec l'IA
                    </span>
                  )}
                </Button>

                {state.isAnalyzing && (
                  <div className="mt-8 glass-effect rounded-2xl p-6 border border-white/30">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-cv360-pink to-cv360-purple rounded-full animate-pulse"></div>
                        <span className="text-cv360-gray font-medium">
                          🔍 Extraction magique du contenu...
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-4 h-4 bg-gradient-to-r from-cv360-purple to-cv360-violet rounded-full animate-pulse"
                          style={{ animationDelay: "500ms" }}
                        ></div>
                        <span className="text-cv360-gray font-medium">
                          🧠 Analyse des super-compétences...
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-4 h-4 bg-gradient-to-r from-cv360-violet to-cv360-magenta rounded-full animate-pulse"
                          style={{ animationDelay: "1000ms" }}
                        ></div>
                        <span className="text-cv360-gray font-medium">
                          ⚡ Calcul du score ultime...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
