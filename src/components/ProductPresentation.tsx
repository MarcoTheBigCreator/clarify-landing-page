'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ProductPreview } from './ui/ProductPreview';
import { titleFont } from '@/config';
import { ProductDescription } from './ui/ProductDescription';

export const ProductPresentation = () => {
  const t = useTranslations('meetClarify');
  const title = t('title');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="product"
      className="space-y-16"
      aria-labelledby="product-heading"
    >
      <h2
        id="product-heading"
        className={`${titleFont.className} text-blue-700 dark:text-white drop-shadow-blue dark:drop-shadow-text text-5xl flex align-middle justify-center font-semibold text-center`}
      >
        {title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Product Preview as a Mobile */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 max-w-md"
        >
          <ProductPreview />
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-20"
        >
          <ProductDescription />
        </motion.div>
      </div>
    </motion.section>
  );
};
