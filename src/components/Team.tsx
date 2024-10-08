'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChevronRightIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { TeamPresentation } from './ui/TeamPresentation';

export const Team = () => {
  const t = useTranslations();
  const teamMembers = t.raw('teamMembers') as TeamMember[];

  const [currentMember, setCurrentMember] = useState(0);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="team"
      className="space-y-16 mt-6 md:mt-24"
    >
      {/* Team presentation */}
      <TeamPresentation />

      <div className="flex items-center justify-center space-x-4">
        {/* Back Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prevMember}
            aria-label="Mostrar miembro anterior"
            className="bg-blue-800 bg-opacity-95 dark:bg-opacity-50 hover:bg-violet-700"
          >
            <ChevronLeftIcon className="h-8 w-8 text-white" />
          </Button>
        </motion.div>

        {/* Members Cards */}
        <div className="flex items-center space-x-4">
          <AnimatePresence initial={false}>
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentMember + offset + teamMembers.length) %
                teamMembers.length;
              const member = teamMembers[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.7,
                    scale: offset === 0 ? 1 : 0.8,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.0 }}
                  className={`${offset === 0 ? 'z-10' : 'z-0'}`}
                  aria-hidden={offset !== 0}
                >
                  <Card
                    className={`w-64 bg-blue-800 bg-opacity-95 dark:bg-opacity-50 backdrop-blur-md border-blue-400 dark:border-blue-600 ${
                      offset !== 0
                        ? 'hidden md:block'
                        : 'drop-shadow-blue dark:drop-shadow-purple'
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <Image
                        width={300}
                        height={300}
                        src={member.image}
                        alt={`${member.name} profile picture`}
                        className="w-48 h-48 rounded-full mx-auto mb-10 border-4 border-blue-500 dark:border-violet-400 object-cover"
                        placeholder="blur"
                        blurDataURL={member.image}
                      />
                      <h3 className="font-semibold text-xl text-white">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 dark:text-violet-400">
                        {member.role}
                      </p>
                      {offset === 0 && (
                        <div className="flex justify-center space-x-4 mt-6">
                          {member.github && (
                            <Link
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-violet-400 dark:hover:text-violet-500 transition-colors text-white"
                              aria-label={`Perfil de GitHub de ${member.name}`}
                            >
                              <GitHubLogoIcon className="h-6 w-6" />
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-violet-400 dark:hover:text-violet-500 transition-colors text-white"
                              aria-label={`Perfil de LinkedIn de ${member.name}`}
                            >
                              <LinkedInLogoIcon className="h-6 w-6" />
                            </Link>
                          )}
                          {member.instagram && (
                            <Link
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-violet-400 dark:hover:text-violet-500 transition-colors text-white"
                              aria-label={`Perfil de Instagram de ${member.name}`}
                            >
                              <InstagramLogoIcon className="h-6 w-6" />
                            </Link>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMember}
            aria-label="Mostrar siguiente miembro"
            className="bg-blue-800 bg-opacity-95 dark:bg-opacity-50 hover:bg-violet-700"
          >
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
