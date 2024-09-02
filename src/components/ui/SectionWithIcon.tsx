'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './Card';
import { cn } from '@/lib';

interface section {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface SectionWithImageProps {
  sections: section[];
  className?: string;
}

export const SectionWithIcon = ({
  sections,
  className,
}: SectionWithImageProps) => {
  return (
    <>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          role="listitem"
          aria-labelledby={`section-title-${section.title}`}
        >
          <Card
            className={cn(
              'bg-blue-800 bg-opacity-95 dark:bg-opacity-50 backdrop-blur-md border-blue-400 dark:border-blue-600',
              className
            )}
          >
            <CardContent className="p-6 text-center flex flex-col items-center">
              <div
                className="text-white flex items-center justify-center mb-2"
                aria-hidden="true"
              >
                {section.icon}
              </div>
              <h3
                id={`section-title-${index}`}
                className="text-white dark:text-violet-400 font-semibold text-xl mb-2"
                aria-live="polite"
              >
                {section.title}
              </h3>
              <p className="text-zinc-200">{section.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </>
  );
};
