'use client';

import { motion } from 'framer-motion';
import { SectionsInfoGrid } from './ui/SectionsInfoGrid';

export const MissionVision = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="mission"
      className="space-y-16"
      aria-labelledby="mission-vision-title"
    >
      <h2 id="mission-vision-title" className="sr-only">
        Misión y Visión
      </h2>
      <SectionsInfoGrid />
    </motion.section>
  );
};
