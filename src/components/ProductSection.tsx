import { useState } from "react";
import { Star, CheckCircle, ShieldCheck, Zap, Lock, Truck, CreditCard, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";

const VARIANTS = [
  { id: "zenfuel-ashwagandha", title: "ZenFuel Ashwagandha", price: 34.99, comparePrice: 54.99, img: "/Ashwagandha.jpeg", badge: "BEST SELLER", active: true },
  { id: "neurofuel-lions-mane", title: "NeuroFuel Lion's Mane", price: 39.99, comparePrice: 59.99, img: "/Lion.jpeg", badge: "FOCUS", savings: "SAVE $20", active: false },
  { id: "gutfuel-gut-health", title: "GutFuel Gut Health", price: 29.99, comparePrice: 49.99, img: "/Gut Health.jpeg", badge: "DIGESTION", savings: "SAVE $20", active: false },
  { id: "fury-isolate-vanilla", title: "FURY Isolate Vanilla", price: 79.99, comparePrice: 109.99, img: "/FURY Isolate.jpeg", badge: "PROTEIN", savings: "SAVE $30", active: false },
  { id: "fury-hydrate-creatine", title: "FURY Hydrate Creatine", price: 44.99, comparePrice: 64.99, img: "/Creatine Formula.jpeg", badge: "POWER", savings: "SAVE $20", active: false }
];

export default function ProductSection() {
  const [activeVariant, setActiveVariant] = useState(0); // Default to Ashwagandha
  const [isSubscription, setIsSubscription] = useState(true);
  const { addItem } = useCart();

  const currentVariantInfo = VARIANTS[activeVariant];
  const finalPrice = isSubscription ? currentVariantInfo.price * 0.8 : currentVariantInfo.price;

  // Set the images for the gallery based on variant (could be expanded)
  const currentImages = [currentVariantInfo.img, "/Ashwagandha.jpeg", "/Lion.jpeg", "/Gut Health.jpeg"];

  const handleAddToCart = () => {
    addItem({
      id: currentVariantInfo.id,
      name: currentVariantInfo.title,
      price: finalPrice.toFixed(2),
      image: currentVariantInfo.img
    });
  };

  return (
    <section id="products-section" className="bg-white w-full py-6 md:py-10 border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <img src={currentVariantInfo.img} alt="Product" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {currentImages.map((img, i) => (
              <button 
                key={i} 
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${i === 0 ? "border-[#4ca735]" : "border-transparent opacity-50"}`}
              >
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col text-black"
        >
          {/* Reviews & Title */}
          <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs">
            <div className="flex gap-0.5 text-amber-500">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span>4.9/5 | (12,108 Reviews)</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display uppercase tracking-tight">
            <ShinyText text={currentVariantInfo.title} disabled={false} speed={2} color="#000000" shineColor="#4ca735" />
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase">● LIVE</span>
            <span className="text-xs text-gray-500"><strong className="text-black">108</strong> people are currently viewing this product</span>
          </div>

          {/* Icons list */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-8 mt-4">
            {[
              { icon: ShieldCheck, text: "Science Backed" },
              { icon: Zap, text: "Peak Performance" },
              { icon: CheckCircle, text: "Purity Verified" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200 text-[#4ca735]">
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-medium text-gray-600 leading-tight">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Custom Mini Review Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-200/50 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Marcus T.</h3>
                <CheckCircle className="text-[#4ca735]" size={16} />
              </div>
              <div className="flex gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-sm text-gray-600">"The quality of Iron Fuel is unmatched. Clean ingredients, no fillers, and I actually feel the difference in my recovery."</p>
          </div>

          {/* Quantity Breaks */}
          <h3 className="font-bold mb-3 mt-2 text-sm uppercase tracking-wide text-gray-500">Select Formula</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {VARIANTS.map((v, i) => (
              <button 
                key={v.id}
                onClick={() => setActiveVariant(i)}
                className={`relative flex flex-col items-center justify-center p-3 border rounded-md transition-all pt-8 ${activeVariant === i ? "bg-white border-[#4ca735] shadow-[0_4px_15px_rgba(76,167,53,0.15)]" : "bg-gray-50 border-gray-200 hover:border-gray-300"}`}
              >
                <div className={`absolute top-0 left-0 w-full text-center py-1 text-[10px] font-bold uppercase ${activeVariant === i ? "bg-[#4ca735] text-white" : "bg-gray-200 text-gray-600 border-b border-gray-200"}`}>{v.badge}</div>
                <img src={v.img} alt={v.title} className="w-14 h-14 rounded-md mb-2 object-cover border border-gray-200" />
                <div className="font-bold text-[12px] leading-tight text-center px-1 mb-1">{v.title.replace("ZenFuel ", "").replace("NeuroFuel ", "").replace("GutFuel ", "").replace("FURY ", "")}</div>
                
                <div className="flex flex-col items-center mt-auto w-full border-t border-gray-200 pt-2 mt-2">
                  <div className="text-sm font-bold text-black">$\{(isSubscription ? v.price * 0.8 : v.price).toFixed(2)}</div>
                  <div className="text-[10px] text-gray-400 line-through">${v.comparePrice}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Subscription Widget */}
          <div className="mt-8 flex flex-col gap-3">
            <label className={`border rounded-md p-4 cursor-pointer flex items-start gap-4 transition-all ${!isSubscription ? "border-gray-300 bg-gray-50" : "border-gray-200 bg-white"}`}>
              <input type="radio" checked={!isSubscription} onChange={() => setIsSubscription(false)} className="mt-1 accent-[#4ca735]" />
              <div className="flex-1">
                <div className="font-bold text-sm">One time Purchase</div>
                <div className="text-xs text-gray-400 line-through">${currentVariantInfo.comparePrice}</div>
              </div>
              <div className="font-bold text-base">${currentVariantInfo.price.toFixed(2)}</div>
            </label>

            <label className={`border rounded-md p-4 cursor-pointer flex items-start gap-4 transition-all relative pt-7 ${isSubscription ? "border-[#4ca735] bg-gray-50" : "border-gray-200 bg-white"}`}>
              <div className={`absolute top-0 left-0 w-full text-center py-1.5 text-[10px] font-bold uppercase ${isSubscription ? "bg-[#4ca735] text-white" : "bg-gray-200 text-gray-500"}`}>SUBSCRIBE & SAVE 20%</div>
              <input type="radio" checked={isSubscription} onChange={() => setIsSubscription(true)} className="mt-1 accent-[#4ca735]" />
              <div className="flex-1">
                <div className="font-bold text-sm">Peak Performance Auto-Delivery</div>
                <div className="text-sm text-gray-500 mt-1">Delivered Every 30 Days</div>
                {isSubscription && (
                  <div className="flex flex-col gap-2 mt-4 text-xs font-medium border-t border-gray-200 pt-3 text-gray-600">
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4ca735]"/> Loyalty rewards</div>
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4ca735]"/> Cancel anytime</div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end">
                <div className="font-bold text-base text-[#4ca735]">${finalPrice.toFixed(2)}</div>
                <div className="text-[11px] font-bold text-gray-400 line-through">${currentVariantInfo.price}</div>
              </div>
            </label>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#4ca735] hover:bg-[#3d862a] text-white rounded-md py-4 mt-6 text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(76,167,53,0.39)] active:scale-[0.98]"
          >
            <ShoppingBag size={20} />
            <span className="uppercase tracking-wide">Add To Cart - <span className="line-through text-xs ml-2 opacity-70">${currentVariantInfo.comparePrice}</span> <span className="ml-1">${finalPrice.toFixed(2)}</span></span>
          </button>

          {/* Delivery & Badges */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm mb-4 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <div className="w-3 h-3 rounded-full bg-[#4ca735] shadow-[0_0_8px_rgba(76,167,53,0.5)] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
              <span className="text-gray-600">Fast Shipping. Arrives by <strong>Sunday, May 24th</strong></span>
            </div>
            
            <div className="flex gap-2 justify-center flex-wrap opacity-60 filter grayscale">
              <CreditCard size={24} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
