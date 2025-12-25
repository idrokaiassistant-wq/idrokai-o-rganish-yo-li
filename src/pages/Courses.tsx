import { useState } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";

export default function Courses() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const difficulties = [
    { value: null, label: "Barchasi" },
    { value: "oson", label: "Oson" },
    { value: "o'rta", label: "O'rta" },
    { value: "qiyin", label: "Qiyin" },
  ];

  const courses = [
    {
      id: 1,
      title: "Python asoslari",
      description: "Dasturlash olamiga birinchi qadam. O'zgaruvchilar, shartlar va sikllar.",
      lessonsCount: 12,
      completedLessons: 8,
      difficulty: "oson" as const,
    },
    {
      id: 2,
      title: "Mantiqiy fikrlash",
      description: "Algoritm va mantiq asoslari. Masalalar yechish usullari.",
      lessonsCount: 10,
      completedLessons: 0,
      difficulty: "oson" as const,
    },
    {
      id: 3,
      title: "JavaScript boshlang'ich",
      description: "Veb dasturlash asoslari. HTML, CSS va JavaScript.",
      lessonsCount: 15,
      completedLessons: 3,
      difficulty: "o'rta" as const,
    },
    {
      id: 4,
      title: "Ma'lumotlar tuzilmasi",
      description: "Array, object va boshqa tuzilmalar bilan ishlash.",
      lessonsCount: 18,
      completedLessons: 0,
      difficulty: "o'rta" as const,
      isLocked: true,
    },
    {
      id: 5,
      title: "Algoritmlar",
      description: "Saralash, qidirish va murakkablik tahlili.",
      lessonsCount: 20,
      completedLessons: 0,
      difficulty: "qiyin" as const,
      isLocked: true,
    },
    {
      id: 6,
      title: "Xotira o'yinlari",
      description: "Mantiqiy fikrlash va xotirani rivojlantirish.",
      lessonsCount: 8,
      completedLessons: 5,
      difficulty: "oson" as const,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Kurslar kutubxonasi</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O'rganishni boshlang
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dasturlash va mantiqiy fikrlash bo'yicha interaktiv kurslar. 
            Har bir kurs AI Ustoz yordamida o'rganishga mo'ljallangan.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Kurs qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-xl"
            />
          </div>

          {/* Difficulty filter */}
          <div className="flex gap-2">
            {difficulties.map((diff) => (
              <Button
                key={diff.label}
                variant={selectedDifficulty === diff.value ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(diff.value)}
                className="rounded-xl"
              >
                {diff.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                lessonsCount={course.lessonsCount}
                completedLessons={course.completedLessons}
                difficulty={course.difficulty}
                isLocked={course.isLocked}
                onClick={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Kurs topilmadi
            </h3>
            <p className="text-muted-foreground">
              Boshqa kalit so'zlar bilan qidirib ko'ring
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
