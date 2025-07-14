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
          "Bonjour ! Je suis votre simulateur d'entretien IA. Je vais vous poser quelques questions pour vous aider à vous préparer. Êtes-vous prêt(e) ?",
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
        "Bonne réponse, mais vous pourriez ajouter plus de détails techniques.",
        "Réponse correcte. Pensez à quantifier vos résultats pour plus d'impact.",
        "Très bien ! Votre passion transparaît dans votre réponse.",
        "Réponse solide, mais essayez d'être plus spécifique sur vos contributions.",
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
              "Félicitations ! Vous avez terminé la simulation d'entretien. Votre performance globale est excellente. Continuez à pratiquer !",
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
          i < score ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simulateur d'Entretien IA
          </h2>
          <p className="text-lg text-cv360-gray max-w-2xl mx-auto">
            Entraînez-vous avec notre IA et recevez des feedbacks instantanés
            pour améliorer vos réponses
          </p>
        </div>

        <Card className="border-none shadow-xl">
          <CardHeader className="bg-gradient-to-r from-cv360-blue to-cv360-cyan text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6" />
                <span>Simulateur d'Entretien</span>
              </div>
              <div className="flex items-center space-x-2">
                {!isSimulationActive ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={startSimulation}
                    className="bg-white text-cv360-blue hover:bg-gray-100"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Démarrer
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={stopSimulation}
                    className="bg-white text-cv360-blue hover:bg-gray-100"
                  >
                    <Pause className="h-4 w-4 mr-1" />
                    Arrêter
                  </Button>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={resetSimulation}
                  className="bg-white text-cv360-blue hover:bg-gray-100"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <Bot className="h-16 w-16 text-cv360-gray mx-auto mb-4" />
                  <p className="text-cv360-gray">
                    Cliquez sur "Démarrer" pour commencer votre simulation
                    d'entretien
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-cv360-blue text-white"
                          : "bg-cv360-gray-light text-gray-900"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.sender === "bot" ? (
                          <Bot className="h-4 w-4" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                        <span className="text-xs opacity-75">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                      {message.score && (
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {getScoreStars(message.score)}
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              {message.feedback}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cv360-gray-light text-gray-900 px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cv360-gray rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cv360-gray rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-cv360-gray rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-cv360-gray-light p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isSimulationActive
                      ? "Tapez votre réponse..."
                      : "Démarrez la simulation pour commencer"
                  }
                  disabled={!isSimulationActive || isTyping}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={
                    !isSimulationActive || !inputValue.trim() || isTyping
                  }
                  className="bg-cv360-blue hover:bg-cv360-blue/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {isSimulationActive && (
                <p className="text-xs text-cv360-gray mt-2">
                  Question {currentQuestion + 1} sur {interviewQuestions.length}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
