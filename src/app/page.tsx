"use client";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { ContactForm } from "@/components/ui/contact-form";
import { ComparisonSection } from "@/components/ui/comparison-section";
import { BiDirectionalScroll } from "@/components/ui/bi-directional-scroll";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { BookingSection } from "@/components/sections/booking-section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const tickerWords = ["Innovative", "Creative", "Dynamic", "Efficient"];

const ScrollingTicker = () => {
  const sequence = Array(4)
    .fill(tickerWords)
    .flat()
    .map((word, i) => ({ id: `${word}-${i}`, word }));

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {sequence.map((item) => (
            <span
              key={item.id}
              className="inline-block px-8 text-2xl sm:text-3xl font-semibold text-slate-600/80"
            >
              {item.word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="flex min-h-screen flex-col items-center w-full">
        <HeroSection />
        <ScrollAnimation>
          <BiDirectionalScroll />
        </ScrollAnimation>
        <ScrollAnimation>
          <ComparisonSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <ServicesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <button
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Book a Call
          </button>
        </ScrollAnimation>
        <ScrollAnimation>
          <TrustedBrands />
        </ScrollAnimation>
        <ScrollAnimation>
          <ScrollingTicker />
        </ScrollAnimation>
        <ScrollAnimation>
          <BookingSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <ContactForm />
        </ScrollAnimation>
      </main>
    </div>
  );
}
