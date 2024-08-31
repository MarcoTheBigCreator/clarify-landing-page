'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cross1Icon,
  EyeOpenIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="py-6 px-4 bg-red-800 bg-opacity-50 backdrop-blur-md fixed w-full z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold flex items-center"
        >
          <EyeOpenIcon className="mr-2" /> BlindAssist App
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {['About', 'Mission', 'Features', 'Demo'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <Cross1Icon className="h-6 w-6" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-2">
              {['About', 'Mission', 'Features', 'Demo'].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-4 hover:bg-blue-700 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
