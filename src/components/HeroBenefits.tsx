import { useState } from "react";
import { Star } from "lucide-react";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function HeroBenefits() {
  const [activeTab, setActiveTab] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].heroBenefits;
  
  const content = [
    { title: t.opt1Title, text: t.opt1Text, reviewer: t.opt1Reviewer, review: t.opt1Review, img: "/Ashwagandha.jpeg" },
    { title: t.opt2Title, text: t.opt2Text, reviewer: t.opt2Reviewer, review: t.opt2Review, img: "/Lion.jpeg" },
    { title: t.opt3Title, text: t.opt3Text, reviewer: t.opt3Reviewer, review: t.opt3Review, img: "/Gut Health.jpeg" },
    { title: t.opt4Title, text: t.opt4Text, reviewer: t.opt4Reviewer, review: t.opt4Review, img: "/Creatine Formula.jpeg" }
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-200 relative z-10 overflow-hidden">
        {/* Subtle background glow based on active product */}
        <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000 ${activeTab === 0 ? 'bg-[#4ca735]' : activeTab === 1 ? 'bg-amber-500' : activeTab === 2 ? 'bg-[#f97316]' : 'bg-[#06b6d4]'}`}></div>

      <div className="max-w-[1240px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-[42px] font-bold text-black mb-2 leading-tight font-display tracking-tight uppercase flex justify-center gap-2">
          <ShinyText text={t.headingPart1} disabled={false} speed={2} color="#000000" shineColor="#4ca735" />
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-[42px] font-bold mb-10 leading-tight font-display tracking-tight uppercase text-[#4ca735]"
        >
          <ShinyText text={t.headingPart2} disabled={false} speed={2} color="#4ca735" shineColor="#000000" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-20">
          
          {/* Mobile/Tablet: Buttons on top */}
          <div className="flex lg:hidden flex-wrap justify-center gap-3 w-full mb-4">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 w-[47%] sm:w-auto ${
                  activeTab === i
                    ? "border-[#4ca735] bg-[#4ca735]/5 shadow-sm"
                    : "border-gray-200 bg-white hover:border-[#4ca735]/40"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                    activeTab === i
                      ? "bg-[#4ca735] text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-left whitespace-normal leading-tight transition-colors ${
                    activeTab === i ? "text-[#4ca735]" : "text-gray-600"
                  }`}
                >
                  {content[i].title}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop: Left Items (1 & 3) */}
          <div className="hidden lg:flex flex-col gap-12 w-1/4 items-end text-right">
            {[0, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`group flex items-center gap-4 transition-all duration-300 ${activeTab === i ? 'scale-105' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
              >
                <span className={`text-sm font-bold uppercase tracking-widest leading-tight w-32 ${activeTab === i ? "text-[#4ca735]" : "text-gray-500"}`}>
                  {content[i].title}
                </span>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl border-2 transition-all duration-300 shadow-md ${
                  activeTab === i ? "border-[#4ca735] bg-[#4ca735] text-white" : "border-gray-300 bg-white text-gray-500"
                }`}>
                  {i + 1}
                </div>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center order-first lg:order-none">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              key={`img-wrap-${activeTab}`}
              className="w-[90%] sm:w-[70%] lg:w-[85%] max-h-[55vh] lg:max-h-[65vh] flex justify-center items-center relative"
            >
               <img src={content[activeTab].img} alt={content[activeTab].title} className="w-full object-contain drop-shadow-2xl transition-all duration-700 hover:scale-105" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)" }} />
            </motion.div>
          </div>

          {/* Desktop: Right Items (2 & 4) */}
          <div className="hidden lg:flex flex-col gap-12 w-1/4 items-start text-left">
            {[1, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`group flex items-center gap-4 transition-all duration-300 ${activeTab === i ? 'scale-105' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl border-2 transition-all duration-300 shadow-md ${
                  activeTab === i ? "border-[#4ca735] bg-[#4ca735] text-white" : "border-gray-300 bg-white text-gray-500"
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm font-bold uppercase tracking-widest leading-tight w-32 ${activeTab === i ? "text-[#4ca735]" : "text-gray-500"}`}>
                  {content[i].title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-8 lg:mt-12 relative z-20">
            <h3 className="text-black text-3xl font-bold mb-2 font-display uppercase tracking-tight flex gap-2">
              <ShinyText text={content[activeTab].title} disabled={false} speed={2} color="#000000" shineColor="#4ca735" key={`title-${activeTab}`} />
            </h3>
            <BlurText 
              key={`text-${activeTab}`}
              as="p" 
              text={content[activeTab].text} 
              className="text-gray-600 text-base mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl border-l-4 border-[#4ca735] font-medium" 
              delay={30} 
            />
            
            <motion.div 
              key={`review-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full pointer-events-none"></div>
              <p className="text-gray-700 text-lg md:text-xl font-medium italic text-center mb-6 leading-relaxed">"{content[activeTab].review}"</p>
              <div className="flex items-center justify-center gap-3 pt-5 border-t border-gray-100">
                <div className="flex gap-0.5 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="font-bold text-black border-r border-gray-200 pr-3">{content[activeTab].reviewer}</div>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-500">
                  <CheckCircle size={14} className="text-[#4ca735]" />
                  Verified
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle(props: { size: number, className: string }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" className={props.className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
