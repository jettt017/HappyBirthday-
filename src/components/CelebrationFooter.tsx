import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, RefreshCw, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Candle {
  id: number;
  isLit: boolean;
  xOffset: number; // offset across the cake top
}

export default function CelebrationFooter() {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, isLit: true, xOffset: -30 },
    { id: 2, isLit: true, xOffset: -15 },
    { id: 3, isLit: true, xOffset: 0 },
    { id: 4, isLit: true, xOffset: 15 },
    { id: 5, isLit: true, xOffset: 30 },
  ]);
  const [allExtinguished, setAllExtinguished] = useState(false);
  const [showWishConfirmation, setShowWishConfirmation] = useState(false);

  const litCount = candles.filter((c) => c.isLit).length;

  const handleBlowCandle = (id: number) => {
    setCandles((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isLit: false } : c))
    );

    // Minor feedback pop
    confetti({
      particleCount: 15,
      angle: 90,
      spread: 25,
      origin: { y: 0.8 },
      colors: ['#fce4c4', '#ffffff', '#fffbeb']
    });
  };

  useEffect(() => {
    if (litCount === 0 && !allExtinguished) {
      setAllExtinguished(true);
      setShowWishConfirmation(true);

      // Perform a long, majestic fireworks-style celebration!
      const end = Date.now() + 3.5 * 1000;
      const interval = setInterval(() => {
        if (Date.now() > end) {
          return clearInterval(interval);
        }

        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          colors: ['#f4a4a4', '#f7dba7', '#d7c9ed', '#f2c0a2', '#fab9b9']
        });
      }, 200);
    }
  }, [litCount]);

  const handleRelight = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, isLit: true })));
    setAllExtinguished(false);
    setShowWishConfirmation(false);
  };

  return (
    <footer className="py-20 px-6 bg-gradient-to-t from-rose-50/50 via-[#fdfaf5]/30 to-transparent relative overflow-hidden text-center select-none">
      
      {/* Soft Background Warm Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-100/30 blur-3xl rounded-full pointer-events-none" />

      {/* Main Virtual Cake Stage */}
      <div className="max-w-md mx-auto mb-16 relative">
        <span className="font-display font-semibold text-xs tracking-[0.3em] text-amber-500 uppercase block mb-3">
          The Birthday Tradition
        </span>
        <h3 className="font-display text-2xl font-bold text-stone-800 tracking-tight mb-2">
          Make a Silent Wish
        </h3>
        <p className="font-sans text-stone-400 text-xs px-6 mb-12">
          {litCount > 0 
            ? "Tap each flickering candle flame to blow them out and cast your secret dream." 
            : "All candles are soft, and your wish has been sent to the stars! ⭐"}
        </p>

        {/* Visual Multi-Layer Cake Wrapper */}
        <div className="w-56 h-64 mx-auto relative flex flex-col justify-end">
          
          {/* Glowing candles row */}
          <div className="absolute inset-x-0 bottom-[140px] flex justify-center items-end h-28 pointer-events-auto">
            {candles.map((candle) => (
              <div
                key={`candle-${candle.id}`}
                className="absolute origin-bottom cursor-pointer select-none"
                style={{ transform: `translateX(${candle.xOffset}px)` }}
                onClick={() => candle.isLit && handleBlowCandle(candle.id)}
              >
                {/* Candle Flame (only renders if isLit) */}
                <AnimatePresence>
                  {candle.isLit && (
                    <motion.div
                      className="w-4 h-7 mx-auto relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Innermost glow */}
                      <motion.div
                        animate={{
                          scaleY: [1, 1.15, 0.9, 1.1, 1],
                          scaleX: [1, 0.9, 1.1, 0.95, 1],
                          y: [0, -1, 0, 1, 0]
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="w-2.5 h-5 bg-gradient-to-t from-red-500 via-amber-400 to-amber-100 rounded-full mx-auto shadow-md"
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.9))'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Wax Candle stick */}
                <div 
                  className={`w-1.5 h-12 ${
                    candle.isLit 
                      ? 'bg-gradient-to-b from-rose-200 to-rose-300' 
                      : 'bg-stone-300'
                  } rounded-t-sm mx-auto shadow-inner relative`}
                >
                  {/* Decorative stripes on candles */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.4)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.4)_75%,transparent_75%,transparent)] bg-[size:8px_8px] rounded-t-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* LAYER 2 CAKE (Top narrow layer) */}
          <div className="w-32 h-16 bg-[#faeeee] border-2 border-stone-100/60 rounded-t-2xl mx-auto shadow-sm relative z-10">
            {/* Soft dripping cream details */}
            <div className="absolute top-[14px] inset-x-0 h-4 bg-[#f8e0e0] rounded-b-xl flex justify-around">
              <div className="w-3 h-2.5 bg-[#f8e0e0] rounded-full" />
              <div className="w-3 h-3 bg-[#f8e0e0] rounded-full" />
              <div className="w-3.5 h-4 bg-[#f8e0e0] rounded-full" />
              <div className="w-3 h-3 bg-[#f8e0e0] rounded-full" />
              <div className="w-3 h-2 bg-[#f8e0e0] rounded-full" />
            </div>
            
            {/* Strawberry toppings */}
            <div className="absolute -top-3.5 inset-x-0 h-4 flex justify-around px-2">
              <span className="text-sm filter drop-shadow-sm">🍓</span>
              <span className="text-sm filter drop-shadow-sm">🍓</span>
              <span className="text-sm filter drop-shadow-sm">🍓</span>
            </div>
          </div>

          {/* LAYER 1 CAKE (Main wide layer) */}
          <div className="w-48 h-20 bg-white border-2 border-stone-100/60 rounded-t-3xl shadow-md relative z-0">
            {/* White dripping cream */}
            <div className="absolute top-[16px] inset-x-0 h-4 bg-[#faeeee] rounded-b-xl flex justify-around px-1">
              <div className="w-4 h-3 bg-[#faeeee] rounded-full" />
              <div className="w-4.5 h-4 bg-[#faeeee] rounded-full" />
              <div className="w-4 h-2.5 bg-[#faeeee] rounded-full" />
              <div className="w-4 h-3.5 bg-[#faeeee] rounded-full" />
              <div className="w-4 h-2 bg-[#faeeee] rounded-full" />
            </div>

            {/* Sprinkles scatter */}
            <div className="absolute top-7 inset-x-0 flex justify-around px-4">
              <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
              <span className="w-1 h-2 bg-rose-400 rounded-full rotate-45" />
              <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full" />
              <span className="w-2 h-1 bg-emerald-300 rounded-full -rotate-12" />
              <span className="w-1 h-2.5 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Gorgeous Ceramic Plate */}
          <div className="w-56 h-3 bg-gradient-to-r from-stone-200 to-stone-100 border border-stone-350/50 rounded-full shadow-md mx-auto relative -bottom-1" />
        </div>
      </div>

      {/* Birthday Star Confirmation Modal */}
      <AnimatePresence>
        {showWishConfirmation && (
          <motion.div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-md flex items-center justify-center p-6 z-50 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-sm bg-white rounded-3xl p-8 border border-amber-100 text-center shadow-2xl relative"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-white">
                <Star className="w-7 h-7 text-amber-600 fill-amber-500" />
              </div>

              <h4 className="font-display font-bold text-xl text-stone-800 tracking-tight mb-3">
                Your Wish is Sent
              </h4>
              <p className="font-sans text-stone-500 text-xs md:text-sm leading-relaxed mb-6">
                May your hearts wander safely, your dreams shine bright, and may the stars align to grant the silent request of your soul today.
              </p>

              <button
                id="btn-close-wish-modal"
                onClick={() => setShowWishConfirmation(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-400 via-peach-400 to-amber-300 hover:from-rose-500 hover:to-amber-400 text-white font-medium shadow-md shadow-rose-200/40 hover:shadow-lg hover:shadow-rose-300/40 transition-all font-playful font-semibold text-xs tracking-wider uppercase cursor-pointer"
              >
                Let It Be
              </button>

              <button
                id="btn-relight-candles"
                onClick={handleRelight}
                className="mt-3.5 text-[10px] text-stone-400 font-bold uppercase tracking-widest hover:text-stone-600 flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Light Candles Again</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outer Heartfelt Text & Sign-off with customized Made by gani watermark */}
      <div className="mt-12 mb-8 max-w-sm mx-auto border-t border-stone-200/50 pt-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-rose-400 inline-block mb-3"
        >
          <Heart className="w-6 h-6 fill-rose-400" />
        </motion.div>
        
        <p className="font-serif italic text-base text-stone-600 leading-relaxed mb-6">
          “May this next year of life be soft to you, filled with pure discovery, quiet mornings, and warm memories that hold you close.”
        </p>
        
        <p className="font-sans text-stone-400 text-[10px] font-bold tracking-widest uppercase">
          All is well, Happy Birthday
        </p>

        {/* Custom Watermark: Made with love by Gani */}
        <div className="mt-8 pt-4 border-t border-dashed border-stone-200/45 flex flex-col items-center justify-center gap-1">
          <span className="font-sans text-[9px] font-semibold text-stone-400/80 tracking-[0.18em] uppercase">
            Crafted with warmth
          </span>
          <span className="font-serif italic text-sm text-stone-500 flex items-center gap-1 select-text">
            Made by <strong className="font-bold text-rose-400 not-italic font-sans text-xs tracking-wider uppercase bg-rose-50/70 border border-rose-100/40 px-2 py-0.5 rounded-md">gani</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
