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
          "✨ Bonjour ! Je suis votre simulateur d'entretien IA magique. Je vais vous poser quelques questions pour vous aider à briller. Êtes-vous prêt(e) à révéler votre potentiel ?",
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
        "🌟 Excellente réponse ! Votre structure est claire et vos exemples concrets.",
        "✨ Bonne réponse, mais vous pourriez ajouter plus de détails techniques.",
        "💫 Réponse correcte. Pensez à quantifier vos résultats pour plus d'impact.",
        "🚀 Très bien ! Votre passion transparaît dans votre réponse.",
        "⚡ Réponse solide, mais essayez d'être plus spécifique sur vos contributions.",
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
              "🎉 Félicitations ! Vous avez terminé la simulation d'entretien magique. Votre performance globale est exceptionnelle. Continuez à briller ! ✨",
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
            ? "text-cv360-magenta fill-current animate-pulse"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-cv360-violet-light/30 via-white to-cv360-magenta-light/30 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cv360-violet/10 to-cv360-magenta/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cv360-pink/10 to-cv360-purple/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-cv360-violet rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cv360-magenta rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cv360-violet/10 to-cv360-magenta/10 backdrop-blur-sm border border-cv360-violet/20 rounded-full px-6 py-2 mb-6">
            <Brain className="h-4 w-4 text-cv360-violet animate-pulse" />
            <span className="text-sm font-medium text-cv360-violet">
              Simulateur IA Avancé
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simulateur d'Entretien{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cv360-violet to-cv360-magenta">
              Magique
            </span>
          </h2>
          <p className="text-xl text-cv360-gray max-w-2xl mx-auto leading-relaxed">
            Entraînez-vous avec notre IA et recevez des feedbacks instantanés
            pour transformer vos réponses en pépites d'or !
          </p>
        </div>

        <div className="relative glass-effect rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet/5 to-cv360-magenta/5 animate-pulse-glow"></div>

          {/* Header */}
          <div className="relative bg-gradient-to-r from-cv360-violet to-cv360-magenta p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Simulateur Magique
                  </h3>
                  <p className="text-white/80">Votre coach IA personnel</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {!isSimulationActive ? (
                  <Button
                    onClick={startSimulation}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur rounded-xl px-6 py-2"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Démarrer
                  </Button>
                ) : (
                  <Button
                    onClick={stopSimulation}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur rounded-xl px-6 py-2"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Arrêter
                  </Button>
                )}
                <Button
                  onClick={resetSimulation}
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur rounded-xl p-2"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="relative h-96 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-16">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet to-cv360-magenta rounded-full blur opacity-30 animate-pulse-glow"></div>
                  <Bot className="relative h-20 w-20 text-cv360-violet mx-auto" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Prêt pour l'aventure ?
                </h4>
                <p className="text-cv360-gray text-lg">
                  Cliquez sur "Démarrer" pour commencer votre simulation
                  d'entretien magique
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
                    className={`relative max-w-xs lg:max-w-md px-6 py-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-cv360-pink to-cv360-purple text-white shadow-lg"
                        : "glass-effect-dark border border-white/20 text-gray-900"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet/5 to-cv360-magenta/5 rounded-2xl"></div>
                    )}

                    <div className="relative">
                      <div className="flex items-center space-x-2 mb-2">
                        {message.sender === "bot" ? (
                          <Bot className="h-5 w-5 text-cv360-violet" />
                        ) : (
                          <User className="h-5 w-5" />
                        )}
                        <span className="text-xs opacity-75 font-medium">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="leading-relaxed">{message.content}</p>
                      {message.score && (
                        <div className="mt-4 pt-3 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <div className="flex">
                              {getScoreStars(message.score)}
                            </div>
                            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                              🌟 {message.feedback}
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
                <div className="glass-effect-dark border border-white/20 px-6 py-4 rounded-2xl max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet/5 to-cv360-magenta/5 rounded-2xl"></div>
                    <div className="relative flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-cv360-violet" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cv360-violet rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-cv360-violet rounded-full animate-bounce"
                          style={{ animationDelay: "100ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-cv360-violet rounded-full animate-bounce"
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
            <div className="absolute inset-0 bg-gradient-to-r from-cv360-violet/5 to-cv360-magenta/5"></div>
            <div className="relative flex space-x-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  isSimulationActive
                    ? "Tapez votre réponse magique..."
                    : "Démarrez la simulation pour commencer"
                }
                disabled={!isSimulationActive || isTyping}
                className="flex-1 bg-white/50 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cv360-violet focus:border-transparent"
              />
              <Button
                onClick={sendMessage}
                disabled={!isSimulationActive || !inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-cv360-violet to-cv360-magenta hover:from-cv360-violet/90 hover:to-cv360-magenta/90 text-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            {isSimulationActive && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-cv360-gray">
                  Question{" "}
                  <span className="font-bold text-cv360-violet">
                    {currentQuestion + 1}
                  </span>{" "}
                  sur{" "}
                  <span className="font-bold text-cv360-magenta">
                    {interviewQuestions.length}
                  </span>
                </p>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-cv360-violet animate-pulse" />
                  <span className="text-sm text-cv360-violet font-medium">
                    IA en écoute active
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
