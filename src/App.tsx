import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Volume2, VolumeX, Music, Heart } from 'lucide-react';
import IntroScreen from './components/IntroScreen';
import FloatingBalloons from './components/FloatingBalloons';
import BirthdayWishes from './components/BirthdayWishes';
import InteractiveCards from './components/InteractiveCards';
import CelebrationFooter from './components/CelebrationFooter';
import { WishTone } from './types';

export default function App() {
  const [name, setName] = useState('Jiyaaa');
  const [tone, setTone] = useState<WishTone>('playful');
  const [showSurprise, setShowSurprise] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleUnwrap = (recipientName: string, selectedTone: WishTone) => {
    setName(recipientName || 'Jiyaaa');
    setTone(selectedTone);
    setShowSurprise(true);
    // Enable background audio stream immediately on unwrapping action
    setIsAudioPlaying(true);
  };

  const toggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };

  const resetCelebration = () => {
    setShowSurprise(false);
    setIsAudioPlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-700 relative selection:bg-rose-100 selection:text-rose-700 overflow-x-hidden">
      
      {/* PERSISTENT CINEMATIC AUDIO & CONTROL HUB */}
      {showSurprise && (
        <motion.div 
          className="fixed top-5 inset-x-0 max-w-5xl mx-auto px-6 flex justify-between items-center z-50 pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Logo / Reset */}
          <button
            id="btn-reset-personalize"
            onClick={resetCelebration}
            className="pointer-events-auto bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200/50 shadow-sm text-xs font-bold font-playful uppercase tracking-wider text-stone-500 flex items-center gap-1.5 hover:bg-white hover:text-stone-800 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>

          {/* Master Vibe Changer & Audio controls */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Quiet ambient piano player */}
            <button
              id="btn-toggle-audio"
              onClick={toggleAudio}
              className={`bg-white/70 backdrop-blur-md p-2.5 rounded-full border border-stone-200/50 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:bg-white ${
                isAudioPlaying ? 'text-rose-400 border-rose-100' : 'text-stone-400'
              }`}
            >
              {isAudioPlaying ? (
                <div className="relative">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-1 -right-1 text-[8px]"
                  >
                    🎵
                  </motion.div>
                </div>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>
      )}

      {/* HIDDEN YOUTUBE BACKGROUND PLAYER */}
      {showSurprise && isAudioPlaying && (
        <iframe
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
          src="https://www.youtube.com/embed/57jZJ2QpKRg?autoplay=1&mute=0&loop=1&playlist=57jZJ2QpKRg"
          allow="autoplay; encrypted-media"
          title="Birthday Background Stream"
        />
      )}

      {/* RENDER BODY STATE */}
      <AnimatePresence mode="wait">
        {!showSurprise ? (
          /* STEP 1: INITIAL UNBOXING PORTAL SCREEN */
          <motion.div
            key="portal-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IntroScreen onUnwrap={handleUnwrap} />
          </motion.div>
        ) : (
          /* STEP 2: IMMERSIVE CELEBRATION MAIN WRAPPER */
          <motion.div
            key="celebration-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Interactive floating balloons rendering background layer */}
            <FloatingBalloons />

            {/* Smooth Scroll Content blocks */}
            <main className="relative z-10 pt-28 space-y-12">
              
              {/* Warm decorative background highlights inside the main page body */}
              <div className="absolute top-[8%] left-[10%] w-[350px] h-[350px] rounded-full ambient-glow-rose pointer-events-none" />
              <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full ambient-glow-violet pointer-events-none" />
              
              {/* Typewriter message segment */}
              <BirthdayWishes name={name} tone={tone} />

              {/* Bento styled Interactive moments container */}
              <InteractiveCards name={name} />

              {/* Candle blowout, virtual cake, wish confirmation & warm signoff */}
              <CelebrationFooter />

            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
