'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWithIcon } from './ui/SectionWithIcon';
import { titleFont } from '@/config';
import {
  RocketIcon,
  SpeakerModerateIcon,
  MobileIcon,
} from '@radix-ui/react-icons';

export const Offer = () => {
  const t = useTranslations();
  const title = t('offersTitle');
  const offers = t.raw('offers') as SectionWithIcon[];

  const iconMap: Record<IconOfferKey, JSX.Element> = {
    RocketIcon: <RocketIcon className="h-10 w-10 mb-4" />,
    SpeakerModerateIcon: <SpeakerModerateIcon className="h-10 w-10 mb-4" />,
    MobileIcon: <MobileIcon className="h-10 w-10 mb-4" />,
  };

  const offersWithIcons = offers.map((offer) => ({
    ...offer,
    icon: iconMap[offer.icon as IconOfferKey], // Asigna el ícono correspondiente según la clave
  }));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="offer"
      className="space-y-16"
      aria-labelledby="offer-heading"
    >
      <h2
        id="offer-heading"
        className={`${titleFont.className} text-blue-700 dark:text-white drop-shadow-blue dark:drop-shadow-text text-5xl font-semibold text-center`}
      >
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8" role="list">
        <SectionWithIcon
          sections={offersWithIcons}
          className="bg-violet-800 bg-opacity-95 dark:bg-opacity-50 backdrop-blur-md border-violet-400 dark:border-violet-600"
        />
      </div>
    </motion.section>
  );
};
