import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Trophy, 
  Lock, 
  CheckCircle,
  Play,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

export default function CourseDetail() {
  const { id } = useParams();

  const course = {
    id: 1,
    title: "Python asoslari",
    description: "Dasturlash olamiga birinchi qadam. Bu kursda siz Python tilining asoslarini o'rganasiz: o'zgaruvchilar, ma'lumot turlari, shartlar, sikllar va funksiyalar.",
    difficulty: "oson",
    lessonsCount: 12,
    completedLessons: 8,
    duration: "3 soat",
    xpReward: 500,
    modules: [
      {
        id: 1,
        title: "Kirish",
        lessons: [
          { id: 1, title: "Python nima?", duration: "10 daq", completed: true },
          { id: 2, title: "Birinchi dasturingiz", duration: "15 daq", completed: true },
        ],
      },
      {
        id: 2,
        title: "O'zgaruvchilar",
        lessons: [
          { id: 3, title: "O'zgaruvchilar nima?", duration: "12 daq", completed: true },
          { id: 4, title: "Ma'lumot turlari", duration: "15 daq", completed: true },
          { id: 5, title: "String bilan ishlash", duration: "20 daq", completed: true },
        ],
      },
      {
        id: 3,
        title: "Shartlar",
        lessons: [
          { id: 6, title: "if-else shartlari", duration: "15 daq", completed: true },
          { id: 7, title: "Murakkab shartlar", duration: "18 daq", completed: true },
          { id: 8, title: "Amaliy mashqlar", duration: "25 daq", completed: true },
        ],
      },
      {
        id: 4,
        title: "Sikllar",
        lessons: [
          { id: 9, title: "for sikli", duration: "15 daq", completed: false, current: true },
          { id: 10, title: "while sikli", duration: "15 daq", completed: false },
          { id: 11, title: "Ichma-ich sikllar", duration: "20 daq", completed: false, locked: true },
          { id: 12, title: "Yakuniy loyiha", duration: "30 daq", completed: false, locked: true },
        ],
      },
    ],
  };

  const progress = (course.completedLessons / course.lessonsCount) * 100;

  return (
    <div className="min-h-screen pb-8">
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        {/* Back button */}
        <Link
          to="/kurslar"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kurslarga qaytish</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-card rounded-3xl p-6 shadow-card mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-success text-success-foreground rounded-full">
                  {course.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
              </div>

              <h1 className="text-3xl font-bold text-card-foreground mb-4">
                {course.title}
              </h1>

              <p className="text-muted-foreground mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-card-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>{course.lessonsCount} dars</span>
                </div>
                <div className="flex items-center gap-2 text-card-foreground">
                  <Trophy className="w-5 h-5 text-warning" />
                  <span>{course.xpReward} XP</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-card-foreground">
                    {course.completedLessons}/{course.lessonsCount} tugallandi
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                Kurs tarkibi
              </h2>

              {course.modules.map((module, moduleIndex) => (
                <div
                  key={module.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card"
                >
                  {/* Module header */}
                  <div className="p-4 bg-muted/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">
                          {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {module.lessons.length} dars
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div className="divide-y divide-border">
                    {module.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={lesson.locked ? "#" : `/dars/${lesson.id}`}
                        className={cn(
                          "flex items-center gap-4 p-4 transition-colors",
                          lesson.locked
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:bg-muted/30"
                        )}
                      >
                        {/* Status icon */}
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                            lesson.completed
                              ? "bg-success/20 text-success"
                              : lesson.current
                              ? "gradient-hero text-primary-foreground"
                              : lesson.locked
                              ? "bg-muted text-muted-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : lesson.locked ? (
                            <Lock className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </div>

                        {/* Lesson info */}
                        <div className="flex-1">
                          <h4
                            className={cn(
                              "font-medium",
                              lesson.completed
                                ? "text-muted-foreground"
                                : "text-card-foreground"
                            )}
                          >
                            {lesson.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {lesson.duration}
                          </p>
                        </div>

                        {/* Current badge */}
                        {lesson.current && (
                          <Badge className="bg-primary text-primary-foreground rounded-full">
                            Davom etish
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Start/Continue CTA */}
            <div className="bg-card rounded-3xl p-6 shadow-card sticky top-24">
              <Link to="/dars/9">
                <Button className="w-full h-14 rounded-xl text-lg font-semibold mb-4">
                  <Play className="w-5 h-5 mr-2" />
                  Davom ettirish
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Keyingi dars: for sikli</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                Nimalarni o'rganasiz
              </h3>
              <ul className="space-y-3">
                {[
                  "Python sintaksisi",
                  "O'zgaruvchilar va turlar",
                  "Shartli operatorlar",
                  "Sikllar bilan ishlash",
                  "Oddiy dasturlar yozish",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
