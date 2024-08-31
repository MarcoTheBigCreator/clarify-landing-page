'use client';

import { titleFont } from '@/config';
import { cn } from '@/lib';
import { motion } from 'framer-motion';

interface SectionInfoProps {
  key: number;
  title: string;
  description: string;
  className?: string;
}

export const SectionInfo = ({
  key,
  title,
  description,
  className,
}: SectionInfoProps) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn('space-y-8 p-6', className)}
    >
      <h2 className={`${titleFont.className} text-5xl font-semibold`}>
        {title}
      </h2>
      <p className="text-lg text-gray-200">{description}</p>
    </motion.div>
  );
};
