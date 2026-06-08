import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { WishTone } from '../types';

interface BirthdayWishesProps {
  name: string;
  tone: WishTone;
}

export default function BirthdayWishes({ name, tone }: BirthdayWishesProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const wishes: Record<WishTone, string> = {
    heartfelt: `To a truly beautiful soul, ${name}...\n\nToday, we pause the world to celebrate the incredible person you are. Your presence is a quiet comfort, and your kindness is a gentle light that softens the rough edges of life. Thank you for the genuine smiles, the infinite warmth, and for simply being you.\n\nAs you step into another magnificent year, may your days be painted with peace, your heart comforted by deep love, and your path cleared for all of your biggest dreams to reach fruition. You deserve the very best.`,
    
    playful: `Happy Birthday, ${name}! 🎉🌟\n\nIt is officially the anniversary of you making the world 10x cooler just by existing! Science tells us that birthdays are incredibly good for you—the more you have, the longer you live. Who knew?\n\nHere’s to another phenomenal year of laughter, caffeine-fueled brilliance, happy-go-lucky adventures, and eating a completely irresponsible amount of cake. Keep shining, you ultimate superstar!`,
    
    poetical: `A toast to the turning of another golden ring, ${name}...\n\nLike a starlit harbor or the resonance of a beautiful sonnet, you bring a quiet poetry to the world around you. Your journey remains a canvas of grace, resilient dreams, and gentle truth. \n\nAs you embark on this next voyage beneath the birthday sun, may your sails catch winds of pure inspiration, and may your horizon glow with the bright promise of joy. Let today be a beautiful pause to honor the magic in your existence.`
  };

  const fullText = wishes[tone];

  useEffect(() => {
    // Reset typing on name or tone changes
    setDisplayText('');
    setCurrentIndex(0);
  }, [tone, name]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, fullText[currentIndex] === '\n' ? 300 : 25); // Slightly pause on carriage returns for professional rhythm
      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center relative">
      {/* Absolute Decorative Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-200/25 blur-3xl rounded-full pointer-events-none" />

      {/* Decorative Star Accents */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="text-amber-400"
        >
          <Star className="w-5 h-5 fill-amber-300" />
        </motion.div>
        
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-stone-300/60" />
        <span className="font-display font-medium text-xs tracking-[0.3em] text-stone-400 uppercase">
          A Message For You
        </span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-stone-300/60" />

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, -180, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          className="text-rose-400"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Title */}
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-800 font-bold tracking-tight mb-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Happy Birthday, <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-violet-500 bg-clip-text text-transparent font-serif italic font-normal">{name}</span>!
      </motion.h2>

      {/* The Styled Message Paper with Typewriter */}
      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-sm"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Subtle Watermark Quotes */}
        <Quote className="absolute top-6 left-6 w-16 h-16 text-stone-200/30 -rotate-12 pointer-events-none" />
        <Quote className="absolute bottom-6 right-6 w-16 h-16 text-stone-200/30 rotate-180 pointer-events-none" />

        {/* Pinned top accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-rose-300 via-amber-300 to-violet-300 rounded-b-full shadow-inner" />

        <div className="relative z-10">
          <p className="font-serif italic text-lg md:text-xl text-stone-700 leading-relaxed whitespace-pre-wrap min-h-[160px]">
            {displayText}
            {currentIndex < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2.5 h-5 bg-rose-400 ml-1 translate-y-0.5"
              />
            )}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
