'use client';
import { motion } from 'framer-motion';
import {
  SpeakerModerateIcon,
  CameraIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { Card, CardContent } from './ui/Card';

export const Offer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="how-it-works"
      className="space-y-16"
    >
      <h2 className="text-4xl font-semibold text-center">How the App Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <SpeakerModerateIcon className="h-12 w-12 mb-4" />,
            title: 'Voice Commands',
            description:
              'Use simple voice commands to navigate and control the app effortlessly.',
          },
          {
            icon: <CameraIcon className="h-12 w-12 mb-4" />,
            title: 'Object Recognition',
            description:
              'Point your camera at objects to receive audio descriptions of your surroundings.',
          },
          {
            icon: <FileTextIcon className="h-12 w-12 mb-4" />,
            title: 'Text-to-Speech',
            description:
              'Convert any text into clear, natural-sounding speech for easy consumption.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-blue-800 bg-opacity-50 backdrop-blur-md border-blue-600">
              <CardContent className="p-6 text-center">
                {feature.icon}
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
