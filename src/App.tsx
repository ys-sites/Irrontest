/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import StatBar from "./components/StatBar";
import MultiColumn from "./components/MultiColumn";
import HeroBenefits from "./components/HeroBenefits";
import InteractiveHotspot from "./components/InteractiveHotspot";
import UsVsThem from "./components/UsVsThem";
import AnimatedProgress from "./components/AnimatedProgress";
import FaqAccordion from "./components/FaqAccordion";
import ContactFooter from "./components/ContactFooter";
import SlideOutCart from "./components/SlideOutCart";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-white text-black font-sans antialiased overflow-x-hidden selection:bg-[#4ca735] selection:text-white">
          <AnnouncementBar />
          <Header />
          
          <main>
            <ProductSection />
            <Testimonials />
            <StatBar />
            <MultiColumn />
            <HeroBenefits />
            <InteractiveHotspot />
            <UsVsThem />
            <AnimatedProgress />
            <FaqAccordion />
          </main>

          <ContactFooter />
          <SlideOutCart />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
