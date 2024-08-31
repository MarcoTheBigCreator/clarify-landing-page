'use client';

import { motion } from 'framer-motion';
import {
  EyeOpenIcon,
  ChatBubbleIcon,
  SpeakerLoudIcon,
  CameraIcon,
} from '@radix-ui/react-icons';
import { Card, CardContent } from './ui/Card';

export const Values = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="values"
      className="space-y-16"
    >
      <h2 className="text-4xl font-semibold text-center">Our Values</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <EyeOpenIcon className="h-12 w-12 mb-4" />,
            title: 'Inclusivity',
            description: 'Designing with everyone in mind',
          },
          {
            icon: <ChatBubbleIcon className="h-12 w-12 mb-4" />,
            title: 'Innovation',
            description: 'Pushing the boundaries of assistive technology',
          },
          {
            icon: <SpeakerLoudIcon className="h-12 w-12 mb-4" />,
            title: 'Empathy',
            description: "Understanding our users' unique challenges",
          },
          {
            icon: <CameraIcon className="h-12 w-12 mb-4" />,
            title: 'Quality',
            description: 'Delivering reliable, user-friendly solutions',
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-blue-800 bg-opacity-50 backdrop-blur-md border-blue-600">
              <CardContent className="p-6 text-center">
                {value.icon}
                <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-blue-200">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
