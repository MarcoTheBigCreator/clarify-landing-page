'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-blue-900 py-6 px-4 mt-14"
      role="contentinfo"
    >
      <div className="container mx-auto text-center">
        <p className="text-blue-300" aria-label="Clarify. All rights reserved.">
          &copy; Clarify. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
