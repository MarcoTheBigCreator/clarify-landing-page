'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
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
      className="px-4 py-2 bg-blue-800 bg-opacity-50 backdrop-blur-md fixed w-full z-20"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${titleFont.className} text-4xl font-bold flex items-center `}
        >
          <Logo.Icon className="h-20 w-30 pb-4 mr-2" aria-hidden="true" />
          Clarify
        </motion.h1>
        <nav className="hidden md:block" aria-label="Main navigation">
          {/* Etiqueta aria para navegación principal */}
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
                  className="hover:text-violet-400 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-violet-500"
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
              {' '}
              {/* Rol de lista para semántica correcta */}
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
