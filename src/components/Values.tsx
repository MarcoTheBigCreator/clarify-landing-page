'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { titleFont } from '@/config';
import { SectionWithIcon } from './ui/SectionWithIcon';
import {
  AccessibilityIcon,
  HeartIcon,
  CheckCircledIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

export const Values = () => {
  const t = useTranslations();
  const title = t('valuesTitle');
  const values = t.raw('values') as SectionWithIcon[];

  const iconMap: Record<IconValueKey, JSX.Element> = {
    AccessibilityIcon: <AccessibilityIcon className="h-10 w-10 mb-4" />,
    HeartIcon: <HeartIcon className="h-10 w-10 mb-4" />,
    CheckCircledIcon: <CheckCircledIcon className="h-10 w-10 mb-4" />,
    PersonIcon: <PersonIcon className="h-10 w-10 mb-4" />,
  };

  const valuesWithIcons = values.map((value) => ({
    ...value,
    icon: iconMap[value.icon as IconValueKey], // Asigna el ícono correspondiente según la clave
  }));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="values"
      className="space-y-16"
      aria-labelledby="values-title"
    >
      <h2
        id="values-title"
        className={`${titleFont.className} text-blue-700 dark:text-white drop-shadow-blue dark:drop-shadow-text text-5xl font-semibold text-center`}
      >
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
        <SectionWithIcon sections={valuesWithIcons} />
      </div>
    </motion.section>
  );
};
