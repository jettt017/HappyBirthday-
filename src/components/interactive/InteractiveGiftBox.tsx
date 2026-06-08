import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles, Check, ChevronRight, Share, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SurpriseCoupon } from '../../types';

export default function InteractiveGiftBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCouponIdx, setActiveCouponIdx] = useState(0);

  const coupons: SurpriseCoupon[] = [
    {
      code: 'BDAY-BRUNCH-001',
      title: 'Decadent Cafe Brunch Pass',
      description: 'Good for one indulgent breakfast/brunch at your favorite spot, fully paid and loaded with happy gossip.',
      emoji: '🥑🥞☕'
    },
    {
      code: 'BDAY-CINEMA-002',
      title: 'Movie Night Escape Voucher',
      description: 'Valid for a cinema screening of your choice, complete with a gargantuan bin of buttery popcorn and treats.',
      emoji: '🍿🥤🎬'
    },
    {
      code: 'BDAY-COZY-003',
      title: 'Tea & Hugs Treat Ticket',
      description: 'Non-refundable coupon for customized homemade tea, fresh warm cookies, and cozy laughs on a sunny afternoon.',
      emoji: '🧁🍵🍪'
    }
  ];

  const handleOpenBox = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Launch a playful confetti pop centered specifically on the gift box coordinates
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#f4a4a4', '#f7dba7', '#d7c9ed', '#f2c0a2'],
      gravity: 0.8,
      scalar: 1.2
    });
  };

  const handleNextCoupon = () => {
    setActiveCouponIdx((prev) => (prev + 1) % coupons.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-sm h-96 glass-card rounded-3xl border border-rose-100 shadow-md p-6 flex flex-col justify-between relative overflow-hidden mt-2">
        
        {/* Card Header title */}
        <div className="flex justify-between items-center pb-3 border-b border-stone-100/60 mb-2 z-10">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-amber-500" />
            <span className="font-display font-semibold text-xs uppercase tracking-widest text-stone-600">Surprise Box</span>
          </div>
          <div className="bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full text-[10px] font-semibold text-amber-600 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Unwrap to Redeem</span>
          </div>
        </div>

        {/* Gift Interaction Core */}
        <div className="flex-1 flex flex-col items-center justify-center relative p-2">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* CLOSED GIFT BOX STATE */
              <motion.div
                key="closed-box"
                className="flex flex-col items-center justify-center cursor-pointer select-none group py-4"
                onClick={handleOpenBox}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
              >
                {/* Visual 3D Gift Box Outline using SVGs */}
                <motion.div
                  animate={{
                    rotate: [0, -4, 4, -4, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-28 h-28 relative mb-4 filter drop-shadow-[0_12px_20px_rgba(244,164,164,0.3)]"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Ribbon Bow elements */}
                    <path
                      d="M28,30 C30,10 48,15 50,30 C52,15 70,10 72,30"
                      fill="none"
                      stroke="#f4a4a4"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <circle cx="50" cy="30" r="7" fill="#f4a4a4" />

                    {/* Box Lid */}
                    <rect x="15" y="32" width="70" height="15" rx="4" fill="#faeeee" stroke="#e0afaf" strokeWidth="2" />
                    
                    {/* Lid Ribbon Tie */}
                    <rect x="44" y="32" width="12" height="15" fill="#f4a4a4" />

                    {/* Box Base Body */}
                    <rect x="19" y="47" width="62" height="38" rx="2" fill="#fffcfc" stroke="#e0afaf" strokeWidth="2" />
                    
                    {/* Base Ribbon Cross */}
                    <rect x="44" y="47" width="12" height="38" fill="#f4a4a4" />
                  </svg>
                </motion.div>

                <p className="font-playful font-bold text-sm text-stone-700 tracking-wider uppercase mb-1">
                  TAP PRESENT TO OPEN
                </p>
                <p className="text-[10px] text-stone-400 font-sans text-center px-4 leading-normal">
                  A digital gift ticket prepared with affection sits nestled inside.
                </p>
              </motion.div>
            ) : (
              /* OPENED VOUCHER STATE */
              <motion.div
                key="opened-voucher"
                className="w-full h-full flex flex-col justify-center items-center py-2"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              >
                {/* The Golden Ticket Coupon Card */}
                <div className="w-full bg-gradient-to-tr from-amber-50 via-rose-50/50 to-white border-2 border-dashed border-amber-300 rounded-2xl p-4 shadow-sm text-center relative overflow-hidden flex-1 flex flex-col justify-between">
                  {/* Rounded half circles mimicking real ticket punches */}
                  <div className="absolute top-1/2 -left-2.5 w-5 h-5 bg-stone-50/100 border border-amber-200 rounded-full -translate-y-1/2 pointer-events-none" />
                  <div className="absolute top-1/2 -right-2.5 w-5 h-5 bg-stone-50/100 border border-amber-200 rounded-full -translate-y-1/2 pointer-events-none" />

                  {/* Stamp Label */}
                  <div className="flex justify-between items-center text-[9px] font-bold text-stone-400 tracking-wider">
                    <span className="font-mono">{coupons[activeCouponIdx].code}</span>
                    <span className="text-amber-500 font-display">TREAT VOUCHER</span>
                  </div>

                  {/* Coupon Title info */}
                  <div className="my-auto py-1">
                    <span className="text-3xl block filter drop-shadow-sm mb-1.5 leading-none">
                      {coupons[activeCouponIdx].emoji}
                    </span>
                    <h4 className="font-display font-medium text-sm text-stone-800 leading-tight">
                      {coupons[activeCouponIdx].title}
                    </h4>
                    <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed px-1">
                      {coupons[activeCouponIdx].description}
                    </p>
                  </div>

                  {/* Stamp of love */}
                  <div className="border-t border-dashed border-amber-200 pt-2 flex items-center justify-between text-[8px] font-bold tracking-widest text-stone-400">
                    <span>SPONSORED WITH HUGS</span>
                    <span className="text-rose-400 flex items-center gap-0.5">
                      <Heart className="w-2.5 h-2.5 fill-rose-400" /> VALID FOREVER
                    </span>
                  </div>
                </div>

                {/* Redeem buttons */}
                <div className="flex gap-2 w-full mt-3">
                  <button
                    id="btn-next-treat"
                    onClick={handleNextCoupon}
                    className="flex-1 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-[10px] font-bold uppercase tracking-wider text-stone-600 flex items-center justify-center gap-1 cursor-pointer transition-all"
                  >
                    <span>Change Treat</span>
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                  </button>

                  <button
                    id="btn-redeem-screenshot"
                    onClick={() => {
                      confetti({ particleCount: 30, spread: 30, origin: { y: 0.85 } });
                      alert("📷 Screenshot this coupon to redeem/save it with your birthday manager!");
                    }}
                    className="flex-1 py-1.5 rounded-xl bg-rose-400 hover:bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-shadow"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Redeem Pass</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-stone-100/60 flex items-center justify-center gap-1 text-stone-400 text-[10px] italic z-10">
          <span>{isOpen ? "🎁 Choose your preferred physical treat voucher!" : "💖 Waiting to be lovingly opened."}</span>
        </div>
      </div>
    </div>
  );
}
