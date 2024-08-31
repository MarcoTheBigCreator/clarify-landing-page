'use client';

import { motion } from 'framer-motion';

interface SectionInfoProps {
  title: string;
  description: string;
}

export const SectionInfo = ({ title, description }: SectionInfoProps) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-lg text-blue-200">{description}</p>
    </motion.div>
  );
};
