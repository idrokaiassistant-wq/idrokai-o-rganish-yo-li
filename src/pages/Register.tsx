import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Lock, Eye, EyeOff, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex flex-1 items-center justify-center gradient-hero p-12">
        <div className="text-center text-primary-foreground">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float">
            <Sparkles className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Sarguzasht boshlaylik!
          </h2>
          <p className="text-lg opacity-90 max-w-sm">
            Dasturlashni o'ynab o'rganish. XP to'plash. 
            Yangi darajalarga erishish. Barchasi IdrokAI bilan!
          </p>

          {/* Benefits list */}
          <div className="mt-8 space-y-3 text-left max-w-xs mx-auto">
            {[
              "Birinchi darslar bepul",
              "AI Ustoz 24/7 yordam",
              "XP va yutuqlar tizimi",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Idrok<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Ro'yxatdan o'ting 🚀
          </h1>
          <p className="text-muted-foreground mb-8">
            Bepul hisob yarating va o'rganishni boshlang.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Ismingiz
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 h-12 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email manzil
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="sizning@email.uz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Parol
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Kamida 8 belgi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-xl"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                Men{" "}
                <Link to="/shartlar" className="text-primary hover:underline">
                  Foydalanish shartlari
                </Link>
                {" "}va{" "}
                <Link to="/maxfiylik" className="text-primary hover:underline">
                  Maxfiylik siyosati
                </Link>
                ga roziman.
              </Label>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full h-12 rounded-xl text-lg font-semibold"
              disabled={!agreed}
            >
              Ro'yxatdan o'tish
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-8 text-center text-muted-foreground">
            Allaqachon hisobingiz bormi?{" "}
            <Link to="/kirish" className="text-primary font-medium hover:underline">
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
