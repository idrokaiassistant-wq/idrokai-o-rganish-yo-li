import { Link } from "react-router-dom";
import { Check, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingCard } from "@/components/ui/PricingCard";

export default function Pricing() {
  const plans = [
    {
      title: "Bepul",
      price: "0",
      period: "abadiy",
      description: "Boshlash uchun ideal",
      features: [
        "5 ta bepul dars",
        "AI Ustoz bilan suhbat (cheklangan)",
        "Asosiy mashqlar",
        "XP va darajalar",
        "Yutuq nishonlari",
      ],
      buttonText: "Boshlash",
      isPopular: false,
    },
    {
      title: "Premium",
      price: "49,000",
      period: "oy",
      description: "To'liq imkoniyatlar",
      features: [
        "Barcha kurslar va darslar",
        "Cheksiz AI Ustoz suhbati",
        "Ilg'or mashqlar va loyihalar",
        "Maxsus yutuq nishonlari",
        "Yuklab olish imkoniyati",
        "Reklama yo'q",
        "Ustuvor yordam",
      ],
      buttonText: "Premium sotib olish",
      isPopular: true,
    },
    {
      title: "Oila",
      price: "99,000",
      period: "oy",
      description: "4 nafargacha foydalanuvchi",
      features: [
        "Premium ning barcha imkoniyatlari",
        "4 ta alohida hisob",
        "Ota-onalar paneli",
        "Progress hisobotlari",
        "Oilaviy chegirmalar",
      ],
      buttonText: "Oila rejasini tanlash",
      isPopular: false,
    },
  ];

  const faqs = [
    {
      question: "Qanday to'lash mumkin?",
      answer: "Click, Payme, Uzum yoki bank kartasi orqali to'lashingiz mumkin. Barcha to'lovlar xavfsiz amalga oshiriladi.",
    },
    {
      question: "Bekor qilsam nima bo'ladi?",
      answer: "Istalgan vaqtda obunani bekor qilishingiz mumkin. Joriy oy oxirigacha Premium imkoniyatlardan foydalanasiz.",
    },
    {
      question: "Bola uchun xavfsizmi?",
      answer: "Ha! Platformamiz 100% bolalar uchun xavfsiz. Reklama yo'q, faqat ta'limiy kontent.",
    },
    {
      question: "Pulni qaytarib olsam bo'ladimi?",
      answer: "7 kun ichida pulni to'liq qaytarib beramiz, agar platforma sizga yoqmasa.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Oddiy narxlar</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O'zingizga mos rejani tanlang
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bepul boshlang va kerak bo'lganda Premium ga o'ting. 
            Barcha to'lovlar O'zbekiston so'mida.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onSelect={() => {}}
            />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {[
            { icon: Shield, text: "Xavfsiz to'lov" },
            { icon: Zap, text: "Tezkor aktivatsiya" },
            { icon: Sparkles, text: "7 kunlik kafolat" },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Ko'p so'raladigan savollar
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-semibold text-card-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Hali ikkilanasizmi?
          </h2>
          <p className="text-muted-foreground mb-6">
            Bepul versiyadan boshlang va o'zingiz sinab ko'ring!
          </p>
          <Link to="/royxatdan-otish">
            <Button size="lg" className="rounded-2xl px-8">
              Bepul boshlash
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
