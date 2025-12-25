import { Link } from "react-router-dom";
import { 
  Brain, 
  Sparkles, 
  BookOpen, 
  Trophy, 
  Shield, 
  Lightbulb,
  ArrowRight,
  Star,
  Zap,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Landing() {
  const features = [
    {
      icon: Brain,
      title: "Sun'iy intellekt ustozi",
      description: "AI Ustoz javob bermaydi, balki o'ylashingizga yordam beradi. Savollar va maslahatlar orqali o'rganasiz.",
    },
    {
      icon: Sparkles,
      title: "Interaktiv mashqlar",
      description: "Testlar, kod yozish va xotira o'yinlari orqali bilimingizni mustahkamlang.",
    },
    {
      icon: Trophy,
      title: "Yutuqlar va mukofotlar",
      description: "XP to'plang, darajangizni oshiring va maxsus nishonlarni yutib oling.",
    },
    {
      icon: Shield,
      title: "Xavfsiz muhit",
      description: "Ota-onalar uchun tinch. Bolalar uchun xavfsiz ta'lim platformasi.",
    },
  ];

  const stats = [
    { value: "1000+", label: "O'quvchilar" },
    { value: "50+", label: "Darslar" },
    { value: "95%", label: "Mamnunlik" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6 animate-slide-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Yangi o'quv usuli
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-slide-up">
              Sun'iy intellekt bilan{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                o'ylashni o'rgan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Bolalar va boshlang'ich dasturchilar uchun maxsus platforma. 
              AI Ustoz sizga javob bermaydi — <strong>o'ylashingizga yordam beradi</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/royxatdan-otish">
                <Button size="lg" className="rounded-2xl px-8 text-lg h-14 shadow-glow">
                  Boshlash
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/kurslar">
                <Button variant="outline" size="lg" className="rounded-2xl px-8 text-lg h-14">
                  Bepul o'rganish
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Philosophy Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl gradient-hero p-8 md:p-12 text-center shadow-glow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Nima uchun AI Ustoz javob bermaydi?
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-6">
                Biz ishongan narsaga asoslanamiz: <strong>haqiqiy bilim</strong> faqat 
                mustaqil o'ylash orqali keladi. AI Ustoz sizga savollar beradi, 
                maslahatlar beradi va to'g'ri yo'lga yo'naltiradi — lekin 
                oxirgi javobni siz topasiz!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground">
                  <Star className="w-4 h-4" />
                  Maslahatlar
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground">
                  <Brain className="w-4 h-4" />
                  Savollar
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground">
                  <Sparkles className="w-4 h-4" />
                  Yo'naltirish
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nima uchun IdrokAI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zamonaviy ta'lim usullari bilan bolalaringiz dasturlashni va mantiqiy 
              fikrlashni o'yinga o'xshab o'rganadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-4 group-hover:animate-wiggle">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Ota-onalar uchun</span>
              </div>
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                Farzandingiz xavfsiz muhitda o'rgansin
              </h2>
              <p className="text-muted-foreground mb-6">
                IdrokAI platformasi bolalar uchun to'liq xavfsiz. Reklama yo'q, 
                noto'g'ri kontentlar yo'q. Faqat sifatli ta'lim va qiziqarli o'yinlar.
              </p>
              <ul className="space-y-3">
                {[
                  "100% xavfsiz kontent",
                  "Progress hisobotlari",
                  "Ota-onalar nazorati",
                  "Reklama yo'q",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-card-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Star className="w-3 h-3 text-success" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 rounded-full gradient-success opacity-20 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bugun boshlang!
            </h2>
            <p className="text-muted-foreground mb-8">
              Birinchi darslaringiz bepul. Ro'yxatdan o'ting va AI Ustoz bilan tanishing.
            </p>
            <Link to="/royxatdan-otish">
              <Button size="lg" className="rounded-2xl px-8 text-lg h-14 shadow-glow">
                Bepul boshlash
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
