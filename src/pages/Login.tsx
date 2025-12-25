import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
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
            Xush kelibsiz! 👋
          </h1>
          <p className="text-muted-foreground mb-8">
            Hisobingizga kiring va o'rganishni davom ettiring.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-xl"
                  required
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

            {/* Forgot password */}
            <div className="text-right">
              <Link
                to="/parolni-unutdim"
                className="text-sm text-primary hover:underline"
              >
                Parolni unutdingizmi?
              </Link>
            </div>

            {/* Submit button */}
            <Button type="submit" className="w-full h-12 rounded-xl text-lg font-semibold">
              Kirish
            </Button>
          </form>

          {/* Register link */}
          <p className="mt-8 text-center text-muted-foreground">
            Hisobingiz yo'qmi?{" "}
            <Link to="/royxatdan-otish" className="text-primary font-medium hover:underline">
              Ro'yxatdan o'ting
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Decorative */}
      <div className="hidden lg:flex flex-1 items-center justify-center gradient-hero p-12">
        <div className="text-center text-primary-foreground">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float">
            <BookOpen className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            O'ylashni o'rganamiz!
          </h2>
          <p className="text-lg opacity-90 max-w-sm">
            AI Ustoz sizga javob bermaydi. U sizga savollar beradi va 
            to'g'ri javobga o'zingiz yetishishingizga yordam beradi.
          </p>
        </div>
      </div>
    </div>
  );
}
