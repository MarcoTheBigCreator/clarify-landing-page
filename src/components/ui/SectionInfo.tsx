'use client';

import { titleFont } from '@/config';
import { cn } from '@/lib';
import { motion } from 'framer-motion';

export const SectionInfo = ({
  title,
  description,
  differentBackground,
}: SectionInfo) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn('space-y-8 p-6', {
        'bg-violet-800 bg-opacity-90 dark:bg-opacity-50 rounded-lg backdrop-blur-md':
          differentBackground,
      })}
      role="listitem"
    >
      <h3
        className={cn(
          `${titleFont.className} text-5xl font-semibold text-blue-700 drop-shadow-blue dark:drop-shadow-text dark:text-white`,
          {
            'text-white drop-shadow-text': differentBackground,
          }
        )}
        aria-live="polite"
      >
        {title}
      </h3>
      <p
        className={cn('text-lg text-zinc-700 dark:text-gray-200', {
          'text-zinc-300': differentBackground,
        })}
      >
        {description}
      </p>
    </motion.div>
  );
};
