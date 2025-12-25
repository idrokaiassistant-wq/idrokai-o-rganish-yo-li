import { Link } from "react-router-dom";
import { BookOpen, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Idrok<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Bolalar va boshlang'ich dasturchilar uchun sun'iy intellekt bilan o'qish platformasi. 
              O'ylashni o'rganing, javob emas!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sahifalar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/kurslar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link to="/narxlar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Narxlar
                </Link>
              </li>
              <li>
                <Link to="/haqida" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Yordam</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/yordam" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Yordam markazi
                </Link>
              </li>
              <li>
                <Link to="/aloqa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bog'lanish
                </Link>
              </li>
              <li>
                <Link to="/maxfiylik" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Maxfiylik siyosati
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 IdrokAI. Barcha huquqlar himoyalangan.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <Heart size={14} className="text-accent fill-accent" />
            bilan O'zbekistonda yaratildi
          </p>
        </div>
      </div>
    </footer>
  );
}
