import { ShoppingBag, User, Globe } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { openCart, count } = useCart();
  const { language, setLanguage } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 w-[140px] md:w-[180px]">
          <img 
            src="/logo.png" 
            alt="Iron Fuel Lab" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-[13px] md:text-[16px] lg:text-xl font-black tracking-[0.35em] font-display text-white whitespace-nowrap uppercase leading-none">
             IRON FUEL LAB
          </span>
        </a>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-bold bg-[#131514] px-3 py-1.5 rounded border border-white/10"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>
          <a href="#" className="hidden md:flex text-[#4ca735] hover:opacity-80 transition-opacity">
            <User className="w-6 h-6" />
          </a>
          <button 
            onClick={openCart}
            className="relative flex items-center justify-center p-1 text-[#4ca735] hover:opacity-80 transition-opacity"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[11px] rounded-full flex items-center justify-center font-bold">
              {count}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
