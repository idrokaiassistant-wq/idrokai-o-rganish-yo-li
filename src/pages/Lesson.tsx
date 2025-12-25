import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Code, 
  Brain,
  Send,
  Lightbulb,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { AIChatBubble } from "@/components/ui/AIChatBubble";
import { HintSelector } from "@/components/ui/HintSelector";
import { cn } from "@/lib/utils";

export default function Lesson() {
  const [activeTab, setActiveTab] = useState<"content" | "exercise" | "chat">("content");
  const [hintLevel, setHintLevel] = useState<1 | 2 | 3>(1);
  const [userMessage, setUserMessage] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const lesson = {
    id: 9,
    title: "for sikli",
    module: "Sikllar",
    courseTitle: "Python asoslari",
    progress: 75,
    content: `
# for sikli nima?

Dasturlashda ko'pincha bir xil amalni bir necha marta bajarishga to'g'ri keladi. Masalan, 1 dan 10 gacha bo'lgan sonlarni ekranga chiqarish kerak bo'lsa, har bir sonni alohida yozish juda uzoq vaqt oladi.

**for sikli** aynan shu muammoni hal qiladi. U sizga biror amalni kerakli sonda takrorlash imkonini beradi.

## Sintaksis

\`\`\`python
for element in ketma_ketlik:
    # bajariladigan amallar
\`\`\`

## Misol

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

Bu kod 0 dan 4 gacha bo'lgan sonlarni chiqaradi:
\`\`\`
0
1
2
3
4
\`\`\`

## range() funksiyasi

\`range()\` funksiyasi sonlar ketma-ketligini yaratadi:
- \`range(5)\` — 0 dan 4 gacha
- \`range(1, 6)\` — 1 dan 5 gacha
- \`range(0, 10, 2)\` — 0, 2, 4, 6, 8
    `,
  };

  const exercise = {
    question: "Quyidagi kod nima chiqaradi?",
    code: `for x in range(3):
    print(x * 2)`,
    options: [
      { id: 1, text: "0, 1, 2" },
      { id: 2, text: "0, 2, 4" },
      { id: 3, text: "2, 4, 6" },
      { id: 4, text: "1, 2, 3" },
    ],
    correctAnswer: 2,
  };

  const chatMessages = [
    {
      isAI: true,
      message: "Salom! Men AI Ustoz. Bu darsda sizga yordam berishga tayyorman. Esda tuting: men to'g'ridan-to'g'ri javob bermayman, lekin to'g'ri yo'lga yo'naltirishga harakat qilaman. 😊",
      timestamp: "10:30",
    },
    {
      isAI: true,
      message: "for sikli haqida savollaringiz bo'lsa, bemalol so'rang!",
      timestamp: "10:30",
    },
  ];

  const handleSubmitAnswer = () => {
    setShowResult(true);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    // Handle sending message to AI
    setUserMessage("");
  };

  const tabs = [
    { id: "content", label: "Dars", icon: BookOpen },
    { id: "exercise", label: "Mashq", icon: Code },
    { id: "chat", label: "AI Ustoz", icon: Brain },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/kurs/1"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Kursga qaytish</span>
            </Link>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">{lesson.courseTitle}</p>
              <h1 className="font-semibold text-foreground">{lesson.title}</h1>
            </div>

            <div className="w-20" />
          </div>

          {/* Progress */}
          <div className="pb-3">
            <Progress value={lesson.progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Mobile tabs */}
      <div className="lg:hidden bg-card border-b border-border sticky top-16 z-40">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2",
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Lesson Content */}
          <div
            className={cn(
              "lg:col-span-2 bg-card rounded-3xl shadow-card overflow-hidden",
              activeTab !== "content" && "hidden lg:block"
            )}
          >
            <div className="p-6 h-full overflow-auto">
              <article className="prose prose-sm max-w-none">
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-card-foreground">for sikli nima?</h1>
                  
                  <p className="text-card-foreground leading-relaxed">
                    Dasturlashda ko'pincha bir xil amalni bir necha marta bajarishga to'g'ri keladi. 
                    Masalan, 1 dan 10 gacha bo'lgan sonlarni ekranga chiqarish kerak bo'lsa, 
                    har bir sonni alohida yozish juda uzoq vaqt oladi.
                  </p>

                  <p className="text-card-foreground leading-relaxed">
                    <strong>for sikli</strong> aynan shu muammoni hal qiladi. 
                    U sizga biror amalni kerakli sonda takrorlash imkonini beradi.
                  </p>

                  <div className="bg-muted rounded-2xl p-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Sintaksis</h3>
                    <pre className="bg-foreground/5 rounded-xl p-4 text-sm font-mono text-card-foreground overflow-x-auto">
{`for element in ketma_ketlik:
    # bajariladigan amallar`}
                    </pre>
                  </div>

                  <div className="bg-muted rounded-2xl p-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Misol</h3>
                    <pre className="bg-foreground/5 rounded-xl p-4 text-sm font-mono text-card-foreground overflow-x-auto">
{`for i in range(5):
    print(i)`}
                    </pre>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Bu kod 0 dan 4 gacha bo'lgan sonlarni chiqaradi: 0, 1, 2, 3, 4
                    </p>
                  </div>

                  <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      range() funksiyasi
                    </h3>
                    <ul className="space-y-2 text-card-foreground">
                      <li><code className="bg-muted px-2 py-0.5 rounded">range(5)</code> — 0 dan 4 gacha</li>
                      <li><code className="bg-muted px-2 py-0.5 rounded">range(1, 6)</code> — 1 dan 5 gacha</li>
                      <li><code className="bg-muted px-2 py-0.5 rounded">range(0, 10, 2)</code> — 0, 2, 4, 6, 8</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Exercise Panel */}
          <div
            className={cn(
              "bg-card rounded-3xl shadow-card overflow-hidden",
              activeTab !== "exercise" && "hidden lg:block"
            )}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-secondary" />
                <h2 className="text-lg font-bold text-card-foreground">Mashq</h2>
              </div>

              <div className="flex-1 space-y-4">
                <p className="text-card-foreground font-medium">
                  {exercise.question}
                </p>

                <pre className="bg-muted rounded-xl p-4 text-sm font-mono text-card-foreground overflow-x-auto">
                  {exercise.code}
                </pre>

                <div className="space-y-2">
                  {exercise.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => !showResult && setSelectedAnswer(option.id)}
                      disabled={showResult}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border-2 transition-all",
                        selectedAnswer === option.id
                          ? showResult
                            ? option.id === exercise.correctAnswer
                              ? "border-success bg-success/10"
                              : "border-destructive bg-destructive/10"
                            : "border-primary bg-primary/10"
                          : showResult && option.id === exercise.correctAnswer
                          ? "border-success bg-success/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-card-foreground">{option.text}</span>
                        {showResult && option.id === exercise.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                        {showResult && selectedAnswer === option.id && option.id !== exercise.correctAnswer && (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {!showResult && selectedAnswer && (
                  <Button onClick={handleSubmitAnswer} className="w-full rounded-xl">
                    Tekshirish
                  </Button>
                )}

                {showResult && (
                  <div
                    className={cn(
                      "p-4 rounded-xl",
                      selectedAnswer === exercise.correctAnswer
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                    )}
                  >
                    <p className="font-medium">
                      {selectedAnswer === exercise.correctAnswer
                        ? "🎉 To'g'ri! Ajoyib!"
                        : "❌ Noto'g'ri. Qaytadan o'ylab ko'ring."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Chat Panel - Mobile only when selected */}
          <div
            className={cn(
              "lg:hidden bg-card rounded-3xl shadow-card overflow-hidden flex flex-col",
              activeTab !== "chat" && "hidden"
            )}
            style={{ height: "calc(100vh - 200px)" }}
          >
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-card-foreground">AI Ustoz</h2>
                  <p className="text-xs text-muted-foreground">Savollaringizga javob beradi</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-auto space-y-4">
              {chatMessages.map((msg, index) => (
                <AIChatBubble key={index} {...msg} />
              ))}
            </div>

            <div className="p-4 border-t border-border space-y-3">
              <HintSelector level={hintLevel} onLevelChange={setHintLevel} />
              
              <div className="flex gap-2">
                <Textarea
                  placeholder="Savolingizni yozing..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="min-h-[60px] rounded-xl resize-none"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-[60px] w-[60px] rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop AI Chat - Fixed sidebar */}
      <div className="hidden lg:block fixed right-4 top-24 bottom-4 w-80 bg-card rounded-3xl shadow-card overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-card-foreground">AI Ustoz</h2>
              <p className="text-xs text-muted-foreground">Savollaringizga javob beradi</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-auto space-y-4">
          {chatMessages.map((msg, index) => (
            <AIChatBubble key={index} {...msg} />
          ))}
        </div>

        <div className="p-4 border-t border-border space-y-3">
          <HintSelector level={hintLevel} onLevelChange={setHintLevel} />
          
          <div className="flex gap-2">
            <Textarea
              placeholder="Savolingizni yozing..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="min-h-[60px] rounded-xl resize-none"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="h-[60px] w-[60px] rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-card border-t border-border py-4 lg:mr-84">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button variant="outline" className="rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Oldingi dars
          </Button>

          <Button className="rounded-xl">
            Keyingi dars
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
