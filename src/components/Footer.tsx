'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-primary-600 dark:bg-primary-700 py-6 px-4 mt-14"
      role="contentinfo"
    >
      <div className="container mx-auto text-center">
        <p className="text-white" aria-label={t('description')}>
          {t('description')}
        </p>
      </div>
    </motion.footer>
  );
};
