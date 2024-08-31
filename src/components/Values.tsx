'use client';

import { motion } from 'framer-motion';
import { titleFont } from '@/config';
import { SectionWithImage } from './ui/SectionWithImage';
import { values } from '@/locales';

export const Values = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="values"
      className="space-y-16"
    >
      <h2
        className={`${titleFont.className} text-5xl font-semibold text-center drop-shadow-text`}
      >
        Valores
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SectionWithImage sections={values} />
      </div>
    </motion.section>
  );
};
