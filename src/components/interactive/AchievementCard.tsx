import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Sparkles, Coffee, Heart, GraduationCap } from 'lucide-react';
import { BirthdayAchievement } from '../../types';

export default function AchievementCard() {
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [clickedIds, setClickedIds] = useState<number[]>([]);

  const achievements: BirthdayAchievement[] = [
    {
      icon: '☀️',
      title: 'Smile Radiation Intensity',
      value: '100% Peak Glow',
      description: 'Your smile lights up groups, dinner tables, and dark rooms effortlessly.'
    },
    {
      icon: '☕',
      title: 'Coffee-to-Brilliance Ratio',
      value: 'Optimal Efficiency',
      description: 'Remarkable speed converting warm beverages into creative plans and laughter.'
    },
    {
      icon: '❤️',
      title: 'Empathy & Warmth Rating',
      value: 'Off the Charts',
      description: 'Uncanny ability to understand friends, offer comfort, and stay wonderfully supportive.'
    },
    {
      icon: '🚀',
      title: 'Dream Momentum',
      value: 'Mach 5 Speed',
      description: 'Unstoppable drive to grow, acquire wisdom, and conquer the year with grace.'
    }
  ];

  const handleUnlock = (idx: number) => {
    if (clickedIds.includes(idx)) return;
    setClickedIds((prev) => [...prev, idx]);
    setUnlockedCount((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-sm glass-card rounded-3xl p-6 border border-amber-100/50 shadow-md flex flex-col justify-between h-96 relative overflow-hidden mt-2">
      {/* Header Stat Ring */}
      <div className="flex justify-between items-center pb-3 border-b border-stone-100/60 mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span className="font-display font-semibold text-xs uppercase tracking-widest text-stone-600">Birthday Feats</span>
        </div>
        <div className="bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-600 flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
          <span>{unlockedCount}/4 Cleared</span>
        </div>
      </div>

      {/* Grid List */}
      <div className="space-y-3 overflow-y-auto pr-1 flex-1">
        {achievements.map((ach, idx) => {
          const isClicked = clickedIds.includes(idx);
          return (
            <motion.div
              key={`ach-${idx}`}
              onClick={() => handleUnlock(idx)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3 items-start select-none relative ${
                isClicked
                  ? 'bg-emerald-50/50 border-emerald-100/70 shadow-sm'
                  : 'bg-white/40 border-stone-150/60 hover:bg-stone-50/70'
              }`}
              whileHover={{ x: isClicked ? 0 : 3 }}
            >
              <span className="text-2xl mt-0.5">{ach.icon}</span>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1.5">
                  <p className="text-xs font-bold text-stone-700 truncate">{ach.title}</p>
                  {isClicked && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider"
                    >
                      Unlocked
                    </motion.span>
                  )}
                </div>
                <p className="text-[11px] font-semibold text-rose-500 mt-0.5">{ach.value}</p>
                <p className="text-[10px] text-stone-400 leading-normal mt-0.5">{ach.description}</p>
              </div>

              {/* Shimmer prompt for unclicked */}
              {!isClicked && (
                <div className="absolute right-3 top-3 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-stone-300" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Tip footer */}
      <div className="pt-3 border-t border-stone-100/60 text-center">
        <p className="text-[10px] text-stone-400 italic">
          {unlockedCount === 4 
            ? "👑 You are certified 100% spectacular!" 
            : "Tap each milestone to unlock and claim your achievements."}
        </p>
      </div>
    </div>
  );
}
