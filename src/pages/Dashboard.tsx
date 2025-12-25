import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Trophy, 
  Flame, 
  Star, 
  ArrowRight, 
  Play,
  Target,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { XPBadge } from "@/components/ui/XPBadge";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { StreakBadge } from "@/components/ui/StreakBadge";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { CourseCard } from "@/components/ui/CourseCard";

export default function Dashboard() {
  const user = {
    name: "Sardor",
    level: 5,
    xp: 2450,
    xpToNextLevel: 3000,
    streak: 7,
    lessonsCompleted: 23,
    totalLessons: 50,
  };

  const dailyProgress = {
    completed: 2,
    goal: 3,
  };

  const currentCourse = {
    title: "Python asoslari",
    description: "Dasturlash olamiga birinchi qadam",
    lessonsCount: 12,
    completedLessons: 8,
    difficulty: "oson" as const,
    lastLesson: "O'zgaruvchilar va ma'lumot turlari",
  };

  const recentAchievements = [
    { icon: Trophy, title: "Birinchi qadam", color: "text-warning" },
    { icon: Flame, title: "7 kunlik streak", color: "text-accent" },
    { icon: Star, title: "Quiz ustasi", color: "text-primary" },
  ];

  const recommendedCourses = [
    {
      title: "Mantiqiy fikrlash",
      description: "Algoritm va mantiq asoslari",
      lessonsCount: 10,
      completedLessons: 0,
      difficulty: "oson" as const,
    },
    {
      title: "JavaScript boshlang'ich",
      description: "Veb dasturlash asoslari",
      lessonsCount: 15,
      completedLessons: 0,
      difficulty: "o'rta" as const,
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Salom, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Bugun ham o'rganishni davom ettiramiz!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-2xl p-4 shadow-card text-center">
                <LevelBadge level={user.level} size="lg" className="mx-auto mb-2" />
                <p className="text-sm font-medium text-card-foreground">Daraja</p>
              </div>
              <div className="bg-card rounded-2xl p-4 shadow-card flex flex-col items-center justify-center">
                <XPBadge xp={user.xp} size="lg" className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {user.xpToNextLevel - user.xp} XP kerak
                </p>
              </div>
              <div className="bg-card rounded-2xl p-4 shadow-card flex flex-col items-center justify-center">
                <StreakBadge days={user.streak} size="lg" className="mb-2" />
                <p className="text-sm text-muted-foreground">ketma-ket</p>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-card-foreground">
                  Davom ettirish
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {currentCourse.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {currentCourse.lastLesson}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen size={16} />
                      <span>{currentCourse.completedLessons}/{currentCourse.lessonsCount} dars</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      <span>~15 daqiqa</span>
                    </div>
                  </div>
                  <Progress 
                    value={(currentCourse.completedLessons / currentCourse.lessonsCount) * 100} 
                    className="h-2 mb-4" 
                  />
                  <Link to="/dars/1">
                    <Button className="rounded-xl">
                      <Play className="w-4 h-4 mr-2" />
                      Davom ettirish
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <ProgressRing 
                    progress={(currentCourse.completedLessons / currentCourse.lessonsCount) * 100}
                    size={120}
                    strokeWidth={10}
                  >
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        {Math.round((currentCourse.completedLessons / currentCourse.lessonsCount) * 100)}%
                      </span>
                    </div>
                  </ProgressRing>
                </div>
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">
                  Tavsiya etilgan kurslar
                </h2>
                <Link to="/kurslar" className="text-sm text-primary hover:underline">
                  Barchasini ko'rish
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    {...course}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Goal */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-secondary" />
                <h2 className="text-lg font-bold text-card-foreground">
                  Kunlik maqsad
                </h2>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <ProgressRing 
                  progress={(dailyProgress.completed / dailyProgress.goal) * 100}
                  size={100}
                  strokeWidth={10}
                >
                  <div className="text-center">
                    <span className="text-2xl font-bold text-card-foreground">
                      {dailyProgress.completed}/{dailyProgress.goal}
                    </span>
                  </div>
                </ProgressRing>
              </div>

              <p className="text-center text-muted-foreground text-sm">
                Yana {dailyProgress.goal - dailyProgress.completed} dars tugatish kerak
              </p>
            </div>

            {/* Recent Achievements */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-warning" />
                <h2 className="text-lg font-bold text-card-foreground">
                  So'nggi yutuqlar
                </h2>
              </div>

              <div className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center shadow-soft">
                      <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                    </div>
                    <span className="font-medium text-card-foreground">
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/yutuqlar">
                <Button variant="ghost" className="w-full mt-4">
                  Barcha yutuqlar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Premium CTA */}
            <div className="rounded-3xl p-6 gradient-hero text-primary-foreground">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium ga o'ting</h3>
              <p className="text-sm opacity-90 mb-4">
                Barcha darslar va kurslarni oching. Cheksiz o'rganish!
              </p>
              <Link to="/narxlar">
                <Button variant="secondary" className="w-full bg-card text-primary hover:bg-card/90">
                  Ko'proq bilish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
