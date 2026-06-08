import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RotateCcw, Moon, Sun, Compass, Crown, Star } from 'lucide-react';

interface TarotCardType {
  id: string;
  numeral: string;
  name: string;
  tagline: string;
  symbol: string;
  colorTheme: string;
  borderTheme: string;
  glowTheme: string;
  icon: React.ReactNode;
  reading: string;
}

interface SpecialWishCardProps {
  name: string;
}

export default function SpecialWishCard({ name }: SpecialWishCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentTarot, setCurrentTarot] = useState<TarotCardType | null>(null);

  const positiveTarotCards: TarotCardType[] = [
    {
      id: 'the-star',
      numeral: 'XVII',
      name: 'THE STAR',
      tagline: 'Hope • Inspiration • Serenity',
      symbol: '✨',
      colorTheme: 'from-blue-950 via-indigo-900 to-slate-900 text-amber-200',
      borderTheme: 'border-blue-300/40',
      glowTheme: 'shadow-blue-500/20',
      icon: <Star className="w-8 h-8 text-amber-300 animate-pulse" />,
      reading: `The celestial skies clear to guide you, ${name || 'Jiyaaa'}. This year brings beautiful hope, fresh creative inspiration, quiet healing, and magical alignments that fall perfectly into place.`
    },
    {
      id: 'the-sun',
      numeral: 'XIX',
      name: 'THE SUN',
      tagline: 'Vitality • Abundance • Joy',
      symbol: '☀️',
      colorTheme: 'from-amber-950 via-rose-900 to-stone-900 text-amber-100',
      borderTheme: 'border-amber-300/40',
      glowTheme: 'shadow-amber-500/20',
      icon: <Sun className="w-8 h-8 text-amber-400 animate-spin-slow" />,
      reading: `The universe pours down its ultimate warmth upon you, ${name || 'Jiyaaa'}. Expect brilliant smiles, warm clarity, creative breakthroughs, and boundless radiant energy that inspires everyone you meet.`
    },
    {
      id: 'the-world',
      numeral: 'XXI',
      name: 'THE WORLD',
      tagline: 'Fulfillment • Harmony • Wholeness',
      symbol: '🌍',
      colorTheme: 'from-emerald-950 via-teal-900 to-slate-900 text-emerald-200',
      borderTheme: 'border-emerald-300/40',
      glowTheme: 'shadow-emerald-500/20',
      icon: <Compass className="w-8 h-8 text-teal-300" />,
      reading: `Everything is coming full circle in beautiful harmony for ${name || 'Jiyaaa'}. Enjoy deep inner peace, celebrate the major milestones you have reached, and welcome grand new cycles of success.`
    },
    {
      id: 'the-empress',
      numeral: 'III',
      name: 'THE EMPRESS',
      tagline: 'Creativity • Warmth • Grace',
      symbol: '👑',
      colorTheme: 'from-purple-950 via-rose-900 to-stone-900 text-rose-200',
      borderTheme: 'border-rose-300/40',
      glowTheme: 'shadow-rose-500/20',
      icon: <Crown className="w-8 h-8 text-rose-300" />,
      reading: `Your beautiful dreams and projects will blossom beautifully, ${name || 'Jiyaaa'}. Supported by organic growth, high art, cozy comfort, and sweet affection from friends who treasure you.`
    }
  ];

  // Set initial random card on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * positiveTarotCards.length);
    setCurrentTarot(positiveTarotCards[randomIndex]);
  }, [name]);

  const drawNewCard = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering card flip
    if (!currentTarot) return;
    
    // Pick another card that is not the current one
    const remaining = positiveTarotCards.filter(c => c.id !== currentTarot.id);
    const randomIndex = Math.floor(Math.random() * remaining.length);
    setCurrentTarot(remaining[randomIndex]);
  };

  if (!currentTarot) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Perspective Card Wrapper */}
      <div 
        className="w-full max-w-sm h-96 cursor-pointer select-none relative group mt-2" 
        style={{ perspective: '1200px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* FRONT SIDE - Celestial Tarot Card Back */}
          <div 
            className="absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between border-2 border-amber-200/50 shadow-xl overflow-hidden backface-hidden"
            style={{ 
              backfaceVisibility: 'hidden',
              background: 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)'
            }}
          >
            {/* Shimmering celestial stars background accents */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fef3c7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Elegant double border design */}
            <div className="absolute inset-3 border border-amber-300/25 rounded-[1.25rem] pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-amber-400/15 rounded-[1.1rem] pointer-events-none" />

            {/* Top border decor */}
            <div className="flex justify-between items-start relative z-10">
              <span className="text-amber-200/40 font-mono text-[9px] tracking-widest uppercase">Major Arcana</span>
              <Moon className="w-4 h-4 text-amber-300/50 animate-pulse" />
            </div>

            {/* Middle Mystery Ritual Seal Layout */}
            <div className="text-center py-4 relative z-10 flex flex-col items-center">
              {/* Spinning Sacred geometry border element */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-5">
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed border-amber-300/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-double border-amber-400/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  animate={{ 
                    scale: [0.95, 1.05, 0.95],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-300/40 flex items-center justify-center"
                >
                  <Sparkles className="w-6 h-6 text-amber-200" />
                </motion.div>
              </div>

              <h3 className="font-serif italic font-semibold text-lg text-amber-100 tracking-wider mb-2">
                Tarot Redemption
              </h3>
              <p className="font-sans text-amber-200/60 text-[10px] px-8 leading-relaxed max-w-[280px]">
                A positive birthday tarot archetype has aligned specifically for your new cycle.
              </p>
            </div>

            {/* Bottom action bar */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 text-amber-300/90 text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 py-2 rounded-xl border border-amber-400/20">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Tap to Draw & Reveal</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </div>
          </div>

          {/* BACK SIDE - Revealed Positive Tarot Card */}
          <div 
            className={`absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between border-2 ${currentTarot.borderTheme} shadow-2xl backface-hidden overflow-hidden`}
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* The individual background color theme gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${currentTarot.colorTheme} opacity-100 pointer-events-none z-0`} />
            <div className={`absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0`} />
            
            {/* Elegant double border design inside */}
            <div className="absolute inset-3 border border-white/10 rounded-[1.25rem] pointer-events-none z-10" />
            <div className="absolute inset-4 border border-dashed border-white/5 rounded-[1.1rem] pointer-events-none z-10" />

            {/* Top row metadata */}
            <div className="flex justify-between items-center relative z-10">
              <span className="text-white/40 font-mono text-[9px] tracking-widest uppercase">REVEALED ARCHETYPE</span>
              <span className="text-amber-200 font-serif font-bold text-xs tracking-wider">{currentTarot.numeral}</span>
            </div>

            {/* Card Content Display */}
            <div className="text-center my-auto px-2 relative z-10">
              {/* Outer emblem layer */}
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 relative">
                <div className="absolute inset-0 rounded-full bg-amber-400/5 blur-md" />
                {currentTarot.icon}
              </div>

              {/* Title group */}
              <h4 className="font-serif tracking-[0.15em] font-bold text-xl text-white mb-1">
                {currentTarot.name}
              </h4>
              <span className="inline-block font-sans font-bold text-[9px] uppercase tracking-widest text-amber-200/90 bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-4">
                {currentTarot.tagline}
              </span>

              {/* Magical reading block */}
              <p className="font-sans text-xs text-stone-200 leading-relaxed px-2 line-clamp-5 select-text">
                {currentTarot.reading}
              </p>
            </div>

            {/* Bottom draw again & flip instructions */}
            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-white/40 text-[9px] relative z-10">
              <button 
                onClick={drawNewCard}
                className="flex items-center gap-1.5 hover:text-amber-200 transition-all cursor-pointer font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 px-2 py-1 rounded-md border border-white/10"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Draw Another Joy</span>
              </button>
              <span className="font-serif italic text-white/50">Tap card to close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
