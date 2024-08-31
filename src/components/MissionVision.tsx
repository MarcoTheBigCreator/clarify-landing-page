'use client';

import { motion } from 'framer-motion';
import { SectionInfo } from './ui/SectionInfo';

const SectionsInfo = [
  {
    title: 'Our Mission',
    description:
      'To empower visually impaired individuals by providing innovative mobile solutions that enhance their daily lives and promote independence.',
  },
  {
    title: 'Our Vision',
    description:
      'A world where technology bridges the gap between visual impairment and accessibility, ensuring equal opportunities for all.',
  },
];

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
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {SectionsInfo.map((section, index) => (
          <SectionInfo
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </motion.section>
  );
};
