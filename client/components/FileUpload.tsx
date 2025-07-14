import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Upload,
  FileText,
  X,
  CheckCircle,
  Sparkles,
  Zap,
  Brain,
  Target,
  Rocket,
  Cpu,
} from "lucide-react";
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

  const handleRemoveFile = () => {
    removeFile();
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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated 3D Background */}
      <div className="absolute inset-0">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient
                id="neuralGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Nodes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="3"
                fill="url(#neuralGrad)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}

            {/* Connections */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 1000}
                y1={Math.random() * 1000}
                x2={Math.random() * 1000}
                y2={Math.random() * 1000}
                stroke="url(#neuralGrad)"
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-pink-500/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-violet-500/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-500/30 rotate-12 animate-float"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-20 w-48 h-48 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Header */}
        <div className="text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-pink-400 animate-pulse" />
                  <span className="text-white font-bold text-lg">
                    IA NOUVELLE GÉNÉRATION
                  </span>
                  <Cpu className="h-6 w-6 text-violet-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            <span className="block text-white drop-shadow-2xl">ANALYSE</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 animate-pulse-glow">
                FUTURISTE
              </span>
            </span>
            <span className="block text-white/90 text-5xl md:text-6xl lg:text-7xl">
              DE VOTRE CV
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Découvrez la puissance de l'intelligence artificielle pour
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-bold">
              {" "}
              révolutionner{" "}
            </span>
            votre carrière professionnelle
          </p>

          {/* Tech Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                value: "99.9%",
                label: "Précision IA",
                color: "from-pink-400 to-rose-400",
              },
              {
                icon: Rocket,
                value: "< 3s",
                label: "Analyse Ultra-Rapide",
                color: "from-violet-400 to-purple-400",
              },
              {
                icon: Sparkles,
                value: "∞",
                label: "Possibilités",
                color: "from-cyan-400 to-blue-400",
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  <stat.icon
                    className={`h-8 w-8 mx-auto mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                  />
                  <div
                    className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Interface */}
        <div className="max-w-4xl mx-auto">
          {!state.uploadedFile ? (
            <div
              className={`relative group perspective-1000 transition-all duration-700 ${
                dragOver ? "scale-105" : "hover:scale-102"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* 3D Container */}
              <div
                className={`relative transform-style-preserve-3d transition-all duration-700 ${
                  dragOver
                    ? "rotate-x-12 rotate-y-12"
                    : "group-hover:rotate-x-6 group-hover:rotate-y-6"
                }`}
              >
                {/* Main Upload Card */}
                <div className="relative glass-effect rounded-3xl p-16 border border-white/20 backdrop-blur-2xl shadow-2xl">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-violet-500/5 to-cyan-500/5 rounded-3xl animate-pulse-glow"></div>

                  {/* Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl transform skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative text-center">
                    {/* 3D Upload Icon */}
                    <div className="relative mb-12">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-2xl opacity-50 animate-pulse-glow scale-150"></div>
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full animate-rotate-slow"></div>
                        <div
                          className="absolute inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full animate-rotate-slow"
                          style={{ animationDirection: "reverse" }}
                        ></div>
                        <div className="absolute inset-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                          <Upload className="h-12 w-12 text-white animate-bounce" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-black text-white mb-4">
                      ZONE DE TÉLÉPORTATION
                    </h3>
                    <p className="text-xl text-white/80 mb-8">
                      Glissez votre CV dans le portail quantique
                    </p>

                    {/* Upload Button */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileSelect}
                      className="hidden"
                    />

                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 mb-8 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <Zap className="mr-3 h-6 w-6 relative z-10 animate-pulse" />
                      <span className="relative z-10">ACTIVER LE SCANNER</span>
                    </Button>

                    {/* File Types */}
                    <div className="flex items-center justify-center space-x-6 text-white/60">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                        <span className="font-bold">PDF</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <span className="font-bold">DOC</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                        <span className="font-bold">DOCX</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-60"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // File Uploaded State
            <div className="relative glass-effect rounded-3xl p-12 border border-white/20 backdrop-blur-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl animate-pulse-glow"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    {/* 3D File Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-50"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                        <FileText className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-2xl text-white mb-2">
                        {state.uploadedFile.name}
                      </p>
                      <p className="text-white/70 text-lg">
                        {formatFileSize(state.uploadedFile.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveFile}
                    className="text-white/70 hover:text-red-400 hover:bg-red-500/10 rounded-xl p-3"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Success Badge */}
                <div className="flex items-center space-x-3 mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30">
                  <CheckCircle className="h-8 w-8 text-green-400 animate-pulse" />
                  <span className="text-green-300 font-bold text-xl">
                    FICHIER SCANNÉ ET VALIDÉ ✨
                  </span>
                </div>

                {/* Analyze Button */}
                <Button
                  onClick={handleAnalyzeCV}
                  disabled={state.isAnalyzing}
                  className="relative w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-black py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  {state.isAnalyzing ? (
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-4"></div>
                      <span>ANALYSE QUANTIQUE EN COURS...</span>
                    </div>
                  ) : (
                    <span className="relative z-10 flex items-center justify-center">
                      <Rocket className="mr-3 h-6 w-6 animate-pulse" />
                      LANCER L'ANALYSE FUTURISTE
                    </span>
                  )}
                </Button>

                {/* Analysis Progress */}
                {state.isAnalyzing && (
                  <div className="mt-8 glass-effect rounded-2xl p-6 border border-white/20">
                    <div className="space-y-4">
                      {[
                        {
                          icon: Brain,
                          text: "🧠 Décodage neural en cours...",
                          delay: "0ms",
                        },
                        {
                          icon: Target,
                          text: "🎯 Analyse des compétences...",
                          delay: "1000ms",
                        },
                        {
                          icon: Sparkles,
                          text: "✨ Calcul du score magique...",
                          delay: "2000ms",
                        },
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4"
                          style={{ animationDelay: step.delay }}
                        >
                          <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse"></div>
                          <span className="text-white/90 font-medium text-lg">
                            {step.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-6 {
          transform: rotateX(6deg);
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
}
