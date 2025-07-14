import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

export default function FileUpload() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        setFile(selectedFile);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (isValidFileType(selectedFile)) {
        setFile(selectedFile);
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
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const analyzeCV = () => {
    if (!file) return;
    setIsAnalyzing(true);

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      // Trigger scroll to results section
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  };

  return (
    <section id="analyze" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Téléversez votre CV
          </h2>
          <p className="text-lg text-cv360-gray max-w-2xl mx-auto">
            Déposez votre CV (PDF ou Word) et obtenez une analyse complète en
            quelques secondes
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!file ? (
            <div
              className={`border-2 border-dashed rounded-2xl p-12 transition-all duration-200 ${
                dragOver
                  ? "border-cv360-blue bg-cv360-blue-light"
                  : "border-cv360-gray-light hover:border-cv360-blue hover:bg-cv360-blue-light/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <Upload
                  className={`mx-auto h-16 w-16 mb-6 ${
                    dragOver ? "text-cv360-blue" : "text-cv360-gray"
                  }`}
                />
                <div className="mb-6">
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    Glissez-déposez votre CV ici
                  </p>
                  <p className="text-cv360-gray">
                    ou cliquez pour parcourir vos fichiers
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
                  className="bg-cv360-blue hover:bg-cv360-blue/90 text-white px-8"
                >
                  Parcourir les fichiers
                </Button>
                <p className="mt-4 text-sm text-cv360-gray">
                  Formats acceptés: PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-cv360-blue-light rounded-2xl p-8 border border-cv360-blue/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cv360-blue rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{file.name}</p>
                    <p className="text-sm text-cv360-gray">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-cv360-gray hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-green-700">
                  Fichier valide et prêt à analyser
                </span>
              </div>

              <Button
                onClick={analyzeCV}
                disabled={isAnalyzing}
                size="lg"
                className="w-full bg-gradient-to-r from-cv360-blue to-cv360-cyan hover:from-cv360-blue/90 hover:to-cv360-cyan/90 text-white font-semibold"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyse en cours...
                  </>
                ) : (
                  "Analyser mon CV"
                )}
              </Button>

              {isAnalyzing && (
                <div className="mt-6 bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="animate-pulse w-3 h-3 bg-cv360-blue rounded-full"></div>
                    <span className="text-sm text-cv360-gray">
                      Extraction du contenu...
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="animate-pulse w-3 h-3 bg-cv360-cyan rounded-full delay-300"></div>
                    <span className="text-sm text-cv360-gray">
                      Analyse des compétences...
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="animate-pulse w-3 h-3 bg-cv360-purple rounded-full delay-700"></div>
                    <span className="text-sm text-cv360-gray">
                      Calcul du score de matching...
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
