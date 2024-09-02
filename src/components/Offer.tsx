'use client';
import { motion } from 'framer-motion';
import { SectionWithImage } from './ui/SectionWithImage';
import { offers } from '@/locales';
import { titleFont } from '@/config';

export const Offer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="offer"
      className="space-y-16"
      aria-labelledby="offer-heading"
    >
      <h2
        id="offer-heading"
        className={`${titleFont.className} text-5xl font-semibold text-center drop-shadow-text`}
      >
        ¿Qué Ofrecemos?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <SectionWithImage
          sections={offers}
          className="bg-violet-800 bg-opacity-50 backdrop-blur-md border-violet-600"
        />
      </div>
    </motion.section>
  );
};
