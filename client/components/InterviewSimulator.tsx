import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Star,
  Play,
  Pause,
  RefreshCw,
  Sparkles,
  Zap,
  Brain,
  Cpu,
  Shield,
} from "lucide-react";

interface Message {
  id: number;
  content: string;
  sender: "bot" | "user";
  timestamp: Date;
  score?: number;
  feedback?: string;
}

export default function InterviewSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const interviewQuestions = [
    "Pouvez-vous vous présenter en quelques mots ?",
    "Pourquoi souhaitez-vous rejoindre notre équipe ?",
    "Parlez-moi d'un projet technique dont vous êtes fier.",
    "Comment gérez-vous les défis techniques complexes ?",
    "Quelles sont vos forces et vos axes d'amélioration ?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startSimulation = () => {
    setIsSimulationActive(true);
    setMessages([
      {
        id: 1,
        content:
          "Bonjour ! Je suis votre simulateur d'entretien IA. Nous allons ensemble préparer votre entretien avec des questions personnalisées. Êtes-vous prêt(e) à commencer ?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const stopSimulation = () => {
    setIsSimulationActive(false);
    setCurrentQuestion(0);
  };

  const resetSimulation = () => {
    setMessages([]);
    setCurrentQuestion(0);
    setIsSimulationActive(false);
    setInputValue("");
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI analysis and response
    simulateTyping();
    setTimeout(() => {
      const score = Math.floor(Math.random() * 3) + 3; // Score entre 3 et 5
      const feedbacks = [
        "Excellente réponse ! Votre structure est claire et vos exemples concrets.",
        "Bonne approche, vous pourriez ajouter plus de détails techniques.",
        "Réponse pertinente. Pensez à quantifier vos résultats pour plus d'impact.",
        "Très bien ! Votre motivation transparaît dans votre réponse.",
        "Réponse solide, essayez d'être plus spécifique sur vos contributions.",
      ];

      const botResponse: Message = {
        id: messages.length + 2,
        content: feedbacks[Math.floor(Math.random() * feedbacks.length)],
        sender: "bot",
        timestamp: new Date(),
        score: score,
        feedback: `Score: ${score}/5`,
      };

      setMessages((prev) => [...prev, botResponse]);

      // Next question
      if (currentQuestion < interviewQuestions.length - 1) {
        setTimeout(() => {
          const nextQ = currentQuestion + 1;
          setCurrentQuestion(nextQ);
          const nextQuestion: Message = {
            id: messages.length + 3,
            content: interviewQuestions[nextQ],
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, nextQuestion]);
        }, 2000);
      } else {
        setTimeout(() => {
          const finalMessage: Message = {
            id: messages.length + 3,
            content:
              "Félicitations ! Vous avez terminé la simulation d'entretien. Votre performance globale est très prometteuse. Continuez à vous entraîner pour parfaire vos réponses !",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, finalMessage]);
          setIsSimulationActive(false);
        }, 2000);
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getScoreStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < score
            ? "text-pink-400 fill-current animate-pulse"
            : "text-white/20"
        }`}
      />
    ));
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Advanced Neural Background */}
      <div className="absolute inset-0">
        {/* Neural connections */}
        <svg className="w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Data streams */}
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#chatGrad)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Energy fields */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-12">
          {/* Simulator Badge */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-pink-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm tracking-wide">
                    SIMULATEUR IA AVANCÉ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Refined Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Simulateur d'Entretien{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 animate-pulse-glow">
              Intelligent
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Entraînez-vous avec notre IA et recevez des évaluations instantanées
            pour perfectionner vos réponses d'entretien
          </p>
        </div>

        {/* Chat Interface */}
        <div className="relative glass-effect rounded-3xl border border-white/20 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 animate-pulse-glow"></div>

          {/* Header */}
          <div className="relative bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-cyan-500/20 p-6 backdrop-blur-xl border-b border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-50 animate-pulse-glow"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center backdrop-blur border border-white/30">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Assistant IA Personnel
                  </h3>
                  <p className="text-white/70 text-sm">
                    Votre coach d'entretien intelligent
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!isSimulationActive ? (
                  <Button
                    onClick={startSimulation}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur rounded-xl px-4 py-2 text-sm font-semibold"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Démarrer
                  </Button>
                ) : (
                  <Button
                    onClick={stopSimulation}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur rounded-xl px-4 py-2 text-sm font-semibold"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Arrêter
                  </Button>
                )}
                <Button
                  onClick={resetSimulation}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur rounded-xl p-2"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="relative h-96 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-30 animate-pulse-glow"></div>
                  <Bot className="relative h-16 w-16 text-pink-400 mx-auto" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Prêt pour l'entraînement ?
                </h4>
                <p className="text-white/70">
                  Cliquez sur "Démarrer" pour commencer votre simulation
                  d'entretien personnalisée
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`relative max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                        : "glass-effect-dark border border-white/20 text-white"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-2xl"></div>
                    )}

                    <div className="relative">
                      <div className="flex items-center space-x-2 mb-2">
                        {message.sender === "bot" ? (
                          <Bot className="h-4 w-4 text-pink-400" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                        <span className="text-xs opacity-75 font-medium">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="leading-relaxed text-sm">
                        {message.content}
                      </p>
                      {message.score && (
                        <div className="mt-3 pt-3 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <div className="flex">
                              {getScoreStars(message.score)}
                            </div>
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 text-xs">
                              {message.feedback}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="glass-effect-dark border border-white/20 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-2xl"></div>
                    <div className="relative flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-pink-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"
                          style={{ animationDelay: "100ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: "200ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="relative border-t border-white/20 p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5"></div>
            <div className="relative flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  isSimulationActive
                    ? "Rédigez votre réponse..."
                    : "Démarrez la simulation pour commencer"
                }
                disabled={!isSimulationActive || isTyping}
                className="flex-1 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <Button
                onClick={sendMessage}
                disabled={!isSimulationActive || !inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {isSimulationActive && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-white/70">
                  Question{" "}
                  <span className="font-bold text-pink-400">
                    {currentQuestion + 1}
                  </span>{" "}
                  sur{" "}
                  <span className="font-bold text-violet-400">
                    {interviewQuestions.length}
                  </span>
                </p>
                <div className="flex items-center space-x-2">
                  <Cpu className="h-4 w-4 text-cyan-400 animate-pulse" />
                  <span className="text-sm text-cyan-300 font-medium">
                    IA en analyse
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
