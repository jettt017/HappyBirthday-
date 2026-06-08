import React from 'react';
import { motion } from 'motion/react';
import SpecialWishCard from './interactive/SpecialWishCard';
import AchievementCard from './interactive/AchievementCard';
import ScratchRevealCard from './interactive/ScratchRevealCard';
import InteractiveGiftBox from './interactive/InteractiveGiftBox';

interface InteractiveCardsProps {
  name: string;
}

export default function InteractiveCards({ name }: InteractiveCardsProps) {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Sector Header */}
      <div className="text-center mb-12">
        <span className="font-display font-semibold text-xs tracking-[0.3em] text-rose-500 uppercase block mb-3">
          Surprise Discoveries
        </span>
        <h2 className="font-display text-2xl md:text-3.5xl text-stone-800 font-bold tracking-tight mb-4">
          Tap, Scratch & Open the Moments
        </h2>
        <div className="w-16 h-1 px-8 border-b-2 border-rose-300/30 mx-auto" />
        <p className="font-sans text-stone-500 text-xs md:text-sm max-w-md mx-auto mt-4 leading-relaxed">
          Uncover the layers of your digital gift package by interacting with each of the customized panels below.
        </p>
      </div>

      {/* Grid Layout (2x2 on tablets/desktops, single column on phone screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
        
        {/* Moment 1: Special Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <SpecialWishCard name={name} />
        </motion.div>

        {/* Moment 2: Scratch Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <ScratchRevealCard />
        </motion.div>

        {/* Moment 3: Gift Box Unboxing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <InteractiveGiftBox />
        </motion.div>

        {/* Moment 4: Birthday Feats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <AchievementCard />
        </motion.div>

      </div>
    </section>
  );
}
