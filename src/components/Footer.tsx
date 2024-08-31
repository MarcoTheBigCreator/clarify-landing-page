'use client';

import { motion } from 'framer-motion';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-blue-900 py-6 px-4 mt-24"
    >
      <div className="container mx-auto text-center">
        <p className="text-blue-300">
          &copy; 2023 BlindAssist App. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15 }}
            href="https://github.com/karelycode/Clarify"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-blue-300 hover:text-violet-400 transition-colors"
          >
            <GitHubLogoIcon className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};
