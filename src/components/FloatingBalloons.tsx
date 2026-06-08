import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Balloon {
  id: number;
  color: string;
  size: number; // width in pixels
  left: number; // percentage
  delay: number;
  duration: number;
}

interface Sparkle {
  id: number;
  top: number; // percentage
  left: number; // percentage
  size: number;
  delay: number;
}

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Aesthetic warm color palette
  const balloonColors = [
    'rgba(244, 164, 164, 0.75)', // Rose Gold
    'rgba(247, 219, 167, 0.75)', // Champagne Pearl
    'rgba(215, 201, 237, 0.75)', // Soft Lilac
    'rgba(242, 192, 162, 0.75)', // Peach Blossom
    'rgba(250, 185, 185, 0.75)', // Warm Rose Cream
  ];

  useEffect(() => {
    // Generate initial set of floating balloons
    const initialBalloons = Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      color: balloonColors[i % balloonColors.length],
      size: Math.floor(Math.random() * 25) + 40, // 40px to 65px width
      left: 5 + i * 11 + Math.random() * 4, // Spread smoothly across screen
      delay: Math.random() * 3,
      duration: Math.random() * 12 + 18, // 18s to 30s slow float
    }));
    setBalloons(initialBalloons);

    // Generate static subtle glowing sparkles
    const initialSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      size: Math.random() * 5 + 3, // 3px to 8px
      delay: Math.random() * 4,
    }));
    setSparkles(initialSparkles);
  }, []);

  const popBalloon = (id: number) => {
    // Softly remove balloon when clicked, simulating a pop
    setBalloons((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sparkles background layer */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute bg-amber-200/40 rounded-full"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: sparkle.size,
            height: sparkle.size,
            filter: 'blur(1px)',
            boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)',
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Repeating floating balloons layer (only interactive if showSurprise is true) */}
      <AnimatePresence>
        {balloons.map((balloon) => (
          <motion.div
            key={`balloon-${balloon.id}`}
            className="absolute bottom-[-150px] pointer-events-auto cursor-pointer select-none"
            style={{
              left: `${balloon.left}%`,
              width: balloon.size,
              height: balloon.size * 1.25,
            }}
            initial={{ y: 0 }}
            animate={{
              y: '-120vh',
              x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
            }}
            transition={{
              y: {
                duration: balloon.duration,
                repeat: Infinity,
                delay: balloon.delay,
                ease: 'linear',
              },
              x: {
                duration: balloon.duration / 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: Math.random() > 0.5 ? 5 : -5,
              transition: { duration: 0.3 },
            }}
            onClick={() => popBalloon(balloon.id)}
          >
            {/* Balloon SVG representation */}
            <svg
              viewBox="0 0 100 125"
              fill={balloon.color}
              className="w-full h-full drop-shadow-[0_8px_16px_rgba(44,39,36,0.06)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Balloon Body */}
              <path d="M50,0 C15,0 0,25 0,55 C0,80 20,105 50,105 C80,105 100,80 100,55 C100,25 85,0 50,0 Z" />
              {/* Highlight Reflextion */}
              <path
                d="M30,12 C18,18 10,32 10,48 C10,50 14,50 14,48 C14,35 21,22 32,16 C34,15 32,11 30,12 Z"
                fill="rgba(255, 255, 255, 0.4)"
              />
              {/* Knot bottom */}
              <polygon points="50,102 44,115 56,115" />
              {/* Ribbon line */}
              <path
                d="M50,115 Q45,130 55,145 T45,160"
                stroke="rgba(44, 39, 36, 0.15)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
