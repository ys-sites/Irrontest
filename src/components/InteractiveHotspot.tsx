import ShinyText from "./ShinyText";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function InteractiveHotspot() {
  const { language } = useLanguage();
  const t = translations[language].hotspot;

  return (
    <section className="bg-gray-50 py-16 md:py-24 text-center border-y border-gray-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-black text-3xl md:text-[42px] font-bold leading-tight mb-8 font-display tracking-tight uppercase">
          <span className="text-black"><ShinyText text={t.headingPart1} disabled={false} speed={2} color="#000000" shineColor="#4ca735" /></span><br/>
          <span className="text-[#4ca735] block mt-2">
            <ShinyText text={t.headingPart2} disabled={false} speed={2} color="#4ca735" shineColor="#000000" />
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-[#4ca735]/50 transition-colors shadow-sm">
              <h3 className="text-black text-xl lg:text-2xl font-bold mb-3 flex items-center gap-3 tracking-wide uppercase">{t.item1Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{t.item1Text}</p>
              <div className="text-amber-600 font-medium text-sm italic border-l-2 border-[#4ca735] pl-3">"{t.item1Review}"</div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-2xl border-2 border-[#4ca735] relative overflow-hidden shadow-md">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ca735]/10 rounded-bl-full pointer-events-none"></div>
              <h3 className="text-black text-xl lg:text-2xl font-bold mb-3 flex items-center gap-3 tracking-wide uppercase">{t.item2Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{t.item2Text}</p>
              <div className="text-amber-600 font-medium text-sm italic border-l-2 border-[#4ca735] pl-3">"{t.item2Review}"</div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-[#4ca735]/50 transition-colors shadow-sm">
              <h3 className="text-black text-xl lg:text-2xl font-bold mb-3 flex items-center gap-3 tracking-wide uppercase">{t.item3Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{t.item3Text}</p>
              <div className="text-amber-600 font-medium text-sm italic border-l-2 border-[#4ca735] pl-3">"{t.item3Review}"</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 relative order-1 md:order-2 min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1100&auto=format&fit=crop" alt="Ingredients" className="absolute inset-0 w-full h-full object-cover filter hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            {/* Simulated Hotspots purely for visuals */}
            <div className="absolute top-[20%] right-[15%] flex items-center gap-2 z-20 group">
              <div className="bg-[#4ca735] w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer shadow-[0_0_15px_#4ca735] group-hover:scale-110 transition-transform font-bold">+</div>
              <span className="bg-white text-black px-3 py-1.5 rounded-md text-xs font-bold shadow-lg uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Ashwagandha</span>
            </div>
            
            <div className="absolute top-[60%] left-[20%] flex items-center gap-2 z-20 group">
              <div className="bg-[#4ca735] w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer shadow-[0_0_15px_#4ca735] group-hover:scale-110 transition-transform font-bold">+</div>
              <span className="bg-white text-black px-3 py-1.5 rounded-md text-xs font-bold shadow-lg uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Lion's Mane</span>
            </div>

            <div className="absolute bottom-[20%] right-[30%] flex items-center gap-2 z-20 group">
              <div className="bg-[#4ca735] w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer shadow-[0_0_15px_#4ca735] group-hover:scale-110 transition-transform font-bold">+</div>
              <span className="bg-white text-black px-3 py-1.5 rounded-md text-xs font-bold shadow-lg uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Creapure®</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
