import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gift, Heart, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WishTone } from '../types';

interface IntroScreenProps {
  onUnwrap: (name: string, tone: WishTone) => void;
}

export default function IntroScreen({ onUnwrap }: IntroScreenProps) {
  const name = 'Jiyaaa';
  const [isUnwrapping, setIsUnwrapping] = useState(false);

  const handleUnwrap = () => {
    if (!name.trim()) return;
    setIsUnwrapping(true);

    // Trigger high-fidelity confetti blowout
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = window.setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confetti burst from primary focus points
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Single mega burst in center
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f4a4a4', '#f7dba7', '#d7c9ed', '#f2c0a2', '#fab9b9'],
    });

    // Stagger transition slightly to allow confetti burst to flower out
    setTimeout(() => {
      // Force 'playful' tone as requested by the user
      onUnwrap(name, 'playful');
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 overflow-hidden bg-[#fdfaf5]">
      {/* Decorative Warm Ambient Glow Spots */}
      <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full ambient-glow-rose -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full ambient-glow-gold translate-x-1/4 translate-y-1/4" />

      {/* Main Cinematic Card Container */}
      <motion.div
        className="w-full max-w-md glass-card rounded-3xl p-8 md:p-10 text-center relative z-10 border border-amber-100/50"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isUnwrapping ? { 
          scale: [1, 1.05, 0.9], 
          opacity: [1, 1, 0],
          y: [0, -10, 40] 
        } : { 
          opacity: 1, 
          y: 0, 
          scale: 1 
        }}
        transition={{
          isUnwrapping: { duration: 1.1, ease: 'easeInOut' },
          default: { duration: 0.8, ease: 'easeOut' }
        }}
      >
        {/* Ribbon Invitation Label */}
        <span className="font-display inline-block font-semibold text-[10px] tracking-[0.25em] text-rose-500 uppercase bg-rose-50 border border-rose-100 px-4 py-1.5 rounded-full mb-6">
          I hope you like it
        </span>

        {/* Surprise Letter / Box Header Element */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-100 via-rose-100 to-violet-100 mb-6 shadow-sm border border-white">
          <motion.div
            animate={{ 
              rotate: [0, -6, 6, -6, 0],
              scale: [1, 1.05, 0.98, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          >
            <Gift className="w-10 h-10 text-rose-400" />
          </motion.div>
          <motion.div 
            className="absolute -top-1 -right-1"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
          </motion.div>
        </div>

        {/* Intro Typographic Greeting */}
        <h1 className="font-display text-3xl md:text-4xl text-stone-800 font-bold tracking-tight mb-3">
          Happy Birthday
        </h1>
        <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          A bespoke virtual gift package and heartfelt celebration have been prepared. Open your card below to discover the magical moments inside!
        </p>

        {/* Elegant Pre-Filled Card Invitation Details */}
        <div className="space-y-4 text-center mb-8 bg-gradient-to-b from-stone-50/50 to-white/20 p-5 rounded-2xl border border-stone-100 shadow-inner">
          <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            Specially Dedicated To
          </span>
          
          <h2 className="py-2 font-serif italic text-3xl text-rose-500 font-bold tracking-wide select-none">
            Jiyaaa
          </h2>

          <span className="block text-[10px] italic text-rose-400 font-medium">
            ✨ Stardust, Confetti, & Joy Loaded ✨
          </span>
        </div>

        {/* Action Button - Let's Open */}
        <button
          id="btn-unwrap"
          disabled={isUnwrapping}
          onClick={handleUnwrap}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-400 via-peach-400 to-amber-300 hover:from-rose-500 hover:to-amber-400 text-white font-medium shadow-md shadow-rose-200/40 hover:shadow-lg hover:shadow-rose-300/40 relative overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
        >
          {isUnwrapping ? (
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="font-playful tracking-wider uppercase text-sm"
            >
              Unboxing surprise...
            </motion.span>
          ) : (
            <>
              <Gift className="w-5 h-5" />
              <span className="font-playful font-bold tracking-wider text-sm uppercase">Let's Open</span>
              <Sparkles className="w-4 h-4" />
            </>
          )}
        </button>
      </motion.div>

      {/* Minimal Footer Credits */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-400 text-xs font-medium uppercase tracking-widest pointer-events-none">
        Crafted For Someone Wonderful
      </p>
    </div>
  );
}

