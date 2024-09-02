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
      className="bg-blue-800 dark:bg-blue-900 py-6 px-4 mt-14"
      role="contentinfo"
    >
      <div className="container mx-auto text-center">
        <p className="text-blue-200" aria-label="Clarify. All rights reserved.">
          {t('description')}
        </p>
      </div>
    </motion.footer>
  );
};
