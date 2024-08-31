import {
  SpeakerModerateIcon,
  RocketIcon,
  MobileIcon,
} from '@radix-ui/react-icons';

export const offers = [
  {
    icon: <RocketIcon className="h-10 w-10 mb-4" />,
    title: 'Detección a través de AI',
    description:
      'Utilizamos inteligencia artificial avanzada para identificar y describir el entorno de manera precisa y en tiempo real.',
  },
  {
    icon: <SpeakerModerateIcon className="h-10 w-10 mb-4" />,
    title: 'Retroalimentación por voz',
    description:
      'Brindamos información clara y detallada mediante retroalimentación por voz, facilitando la interacción y la navegación.',
  },
  {
    icon: <MobileIcon className="h-10 w-10 mb-4" />,
    title: 'Interfaz intuitiva y funcional',
    description:
      'Ofrecemos una interfaz fácil de usar y accesible, diseñada para simplificar la experiencia del usuario desde el primer momento.',
  },
];
