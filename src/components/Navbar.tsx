'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cross1Icon,
  DividerVerticalIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import { titleFont } from '@/config';
import { Logo } from './ui/Logo';
import { ThemeSwitch } from './ui/ThemeSwitch';
import { LanguageButton } from './ui/LanguageButton';
import Link from 'next/link';

export const Navbar = () => {
  const t = useTranslations();
  const navbar = t.raw('navbar') as NavbarItem[];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="px-4 py-2 bg-blue-800 bg-opacity-95 text-white dark:bg-opacity-50 backdrop-blur-md fixed w-full z-20"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${titleFont.className} text-4xl font-bold flex items-center `}
        >
          <Link
            href="/"
            className="flex items-center group hover:text-violet-300 dark:hover:text-violet-400"
          >
            <Logo.Icon className="h-20 w-30 pb-4 mr-2" aria-hidden="true" />
            Clarify
          </Link>
        </motion.h1>
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-4">
            {navbar.map((navbarItem: NavbarItem, index) => (
              <motion.li
                key={navbarItem.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                role="listitem"
              >
                <a
                  href={navbarItem.link}
                  className="hover:text-violet-300 dark:hover:text-violet-400 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-violet-500"
                  rel="noreferrer"
                >
                  {navbarItem.name}
                </a>
              </motion.li>
            ))}

            {/* Theme and Dark mode */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + navbar.length * 0.1 }}
              role="listitem"
            >
              <DividerVerticalIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + navbar.length * 0.1 }}
              role="listitem"
            >
              <ThemeSwitch />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + navbar.length * 0.1 }}
              role="listitem"
            >
              <LanguageButton />
            </motion.li>
          </ul>
        </nav>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus-visible:ring focus-visible:ring-violet-500"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <Cross1Icon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
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
            id="mobile-menu"
            aria-label="Mobile menu"
          >
            <ul className="flex flex-col space-y-2" role="list">
              {navbar.map((navbarItem: NavbarItem) => (
                <motion.li
                  key={navbarItem.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  role="listitem"
                >
                  <a
                    href={navbarItem.link}
                    className="block py-2 px-4 hover:bg-violet-700 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-violet-500"
                    onClick={toggleMenu}
                    rel="noreferrer"
                  >
                    {navbarItem.name}
                  </a>
                </motion.li>
              ))}

              {/* Theme and Dark mode */}
              <hr />
              <div className="ml-3 py-4 flex space-x-5">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  role="listitem"
                  className="group"
                  onClick={toggleMenu}
                >
                  <ThemeSwitch />
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  role="listitem"
                  className="group"
                  onClick={toggleMenu}
                >
                  <LanguageButton />
                </motion.li>
              </div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
