'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cross1Icon,
  EyeOpenIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import { navbar } from '@/locales';
import { titleFont } from '@/config';
import { Logo } from './ui/Logo';

interface NavbarItem {
  name: string;
  link: string;
}

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
      className="py-6 px-4 bg-blue-800 bg-opacity-50 backdrop-blur-md fixed w-full z-20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${titleFont.className} text-4xl font-bold flex items-center `}
        >
          <Logo.Icon className="h-20 w-30 pb-4 mr-2" />
          Clarify
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navbar.map((navbarItem: NavbarItem, index) => (
              <motion.li
                key={navbarItem.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={navbarItem.link}
                  className="hover:text-violet-400 transition-colors"
                >
                  {navbarItem.name}
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
              {navbar.map((navbarItem: NavbarItem) => (
                <motion.li
                  key={navbarItem.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <a
                    href={navbarItem.link}
                    className="block py-2 px-4 hover:bg-violet-700 transition-colors"
                    onClick={toggleMenu}
                  >
                    {navbarItem.name}
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
