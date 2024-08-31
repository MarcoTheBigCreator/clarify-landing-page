'use client';

import { motion } from 'framer-motion';
import { ProductPreview } from './ui/ProductPreview';
import { titleFont } from '@/config';
import { ProductDescription } from './ui/ProductDescription';

export const ProductPresentation = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="product"
      className="space-y-16"
    >
      <h2
        className={`${titleFont.className} text-5xl font-semibold text-center drop-shadow-text`}
      >
        Conoce Clarify
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
