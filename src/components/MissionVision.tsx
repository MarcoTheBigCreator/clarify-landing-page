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
    >
      <SectionsInfoGrid />
    </motion.section>
  );
};
