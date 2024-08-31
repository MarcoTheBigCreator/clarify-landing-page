'use client';

import { useState } from 'react';
import Link from 'next/link';
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

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO',
    image: '/placeholder.svg?height=200&width=200',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=200&width=200',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    image: '/placeholder.svg?height=200&width=200',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
];

export const Team = () => {
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
      id="who-we-are"
      className="space-y-16"
    >
      <h2 className="text-4xl font-semibold text-center">Who Are We?</h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-blue-200">
        We are a dedicated team of developers and accessibility experts
        committed to making the digital world more inclusive for visually
        impaired individuals.
      </p>
      <div className="flex items-center justify-center space-x-4">
        {/* Back Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prevMember}
            className="bg-bg-800 bg-opacity-50 hover:bg-blue-700"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </Button>
        </motion.div>

        {/* Members Cards */}
        <div className="flex items-center space-x-4 bg-red-500">
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
                  transition={{ duration: 0.3 }}
                  className={`${offset === 0 ? 'z-10' : 'z-0'}`}
                >
                  <Card
                    className={`w-64 bg-blue-800 bg-opacity-50 backdrop-blur-md border-blue-600 ${
                      offset !== 0 ? 'hidden md:block' : ''
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-blue-500"
                      />
                      <h3 className="font-semibold text-xl">{member.name}</h3>
                      <p className="text-blue-300">{member.role}</p>
                      {offset === 0 && (
                        <div className="flex justify-center space-x-4 mt-4">
                          <Link
                            href={member.github}
                            className="hover:text-blue-400 transition-colors"
                          >
                            <GitHubLogoIcon className="h-6 w-6" />
                          </Link>
                          <Link
                            href={member.linkedin}
                            className="hover:text-blue-400 transition-colors"
                          >
                            <LinkedInLogoIcon className="h-6 w-6" />
                          </Link>
                          <Link
                            href={member.twitter}
                            className="hover:text-blue-400 transition-colors"
                          >
                            <InstagramLogoIcon className="h-6 w-6" />
                          </Link>
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
            className="bg-blue-800 bg-opacity-50 hover:bg-blue-700"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
