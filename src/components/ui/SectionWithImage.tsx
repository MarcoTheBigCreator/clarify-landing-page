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

export const SectionWithImage = ({
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
        >
          <Card
            className={cn(
              'bg-blue-800 bg-opacity-50 backdrop-blur-md border-blue-600',
              className
            )}
          >
            <CardContent className="p-6 text-center flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                {section.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
              <p className="text-gray-200">{section.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </>
  );
};