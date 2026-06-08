import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Info } from 'lucide-react';

export default function ScratchRevealCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  const secretWish = "“Keep some room in your heart for the unimaginable. May your paths stretch wide, your burdens weigh light, and your laughter guide you home.”";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high density displays (retina) smoothly
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Style the scratch overlay gradient (Rose Gold / Champagne Stardust theme)
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#f9d6d6'); // Pearl Blush
    gradient.addColorStop(0.5, '#fce4c4'); // Soft Gold
    gradient.addColorStop(1, '#ebdcfc'); // Pastel Violet
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw little decorative sparkles over the canvas cover
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 40; i++) {
      const sx = Math.random() * rect.width;
      const sy = Math.random() * rect.height;
      const sSize = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(sx, sy, sSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Write premium instruction typography on the stardust sheet
    ctx.fillStyle = '#655750';
    ctx.font = '500 12px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ WIPE AWAY THE STARDUST ✨', rect.width / 2, rect.height / 2 - 8);
    
    ctx.fillStyle = '#897c76';
    ctx.font = 'italic 400 10px "Inter", sans-serif';
    ctx.fillText('Swipe or drag to reveal starlight wish', rect.width / 2, rect.height / 2 + 12);

    // Track resize
    const handleResize = () => {
      // Retain progress if resized but for birthday card, a static layout is perfect
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Drawing event helpers
  const getCoordinates = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    // Check if TouchEvent or MouseEvent
    if ('touches' in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const draw = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing || isScratched) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    // Apply scratching style: destination-out makes canvas transparent
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Small performance check to evaluate remaining pixels once in a while
    checkScratchPercentage();
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width;
    const height = canvas.height;

    try {
      const imgData = ctx.getImageData(0, 0, width, height);
      const pixels = imgData.data;
      let transparentCount = 0;

      // Sample every 32nd pixel to keep calculation fast and feather-light
      for (let i = 3; i < pixels.length; i += 32) {
        if (pixels[i] === 0) {
          transparentCount++;
        }
      }

      const totalSamples = pixels.length / 32;
      const percent = (transparentCount / totalSamples) * 100;
      setScratchPercent(percent);

      // If scratched more than 40%, automatically dissolve the remainder
      if (percent > 40) {
        setIsScratched(true);
      }
    } catch (err) {
      // Fallback
    }
  };

  const startScratching = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
  };

  const stopScratching = () => {
    setIsDrawing(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Scratch Card container, constrained matching bento aspects */}
      <div 
        ref={containerRef}
        className="w-full max-w-sm h-96 glass-card rounded-3xl border border-amber-100/50 shadow-md flex flex-col justify-between p-6 relative overflow-hidden mt-2"
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-3 border-b border-stone-100/60 mb-2">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-rose-400" />
            <span className="font-display font-semibold text-xs uppercase tracking-widest text-stone-600">Hidden Secrets</span>
          </div>
          <div className="bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full text-[10px] font-semibold text-rose-600 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-rose-400" />
            <span>Scratch to Reveal</span>
          </div>
        </div>

        {/* Message Panel Area (Sitting under the canvas) */}
        <div className="flex-1 flex flex-col justify-center items-center relative py-4 px-2">
          {/* Heartfelt hidden quote */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={(isScratched || scratchPercent > 5) ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-3xl text-center block">✨📖✨</span>
              <p className="font-serif italic text-base md:text-lg text-stone-700 leading-relaxed px-2 font-medium">
                {secretWish}
              </p>
              <p className="text-[10px] font-sans font-bold tracking-widest text-amber-500 uppercase">
                With Deep Affection • The Cosmos
              </p>
            </motion.div>
          </div>

          {/* HTML5 Canvas overlay (Dissolves with a clean fade when isScratched = true) */}
          <AnimatePresence>
            {!isScratched && (
              <motion.canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full rounded-2xl cursor-crosshair touch-none z-20 shadow-inner"
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                onMouseDown={startScratching}
                onMouseMove={(e) => draw(e.nativeEvent)}
                onMouseUp={stopScratching}
                onMouseLeave={stopScratching}
                onTouchStart={startScratching}
                onTouchMove={(e) => draw(e.nativeEvent)}
                onTouchEnd={stopScratching}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Scratch Card Footer info */}
        <div className="pt-3 border-t border-stone-100/60 flex items-center justify-center gap-1 text-stone-400 text-[10px] italic">
          <Info className="w-3.5 h-3.5 text-stone-300" />
          <span>{isScratched ? "🌟 Message fully uncovered!" : `Sweeping stardust... (${Math.floor(scratchPercent)}%)`}</span>
        </div>
      </div>
    </div>
  );
}
