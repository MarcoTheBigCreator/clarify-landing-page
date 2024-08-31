import {
  AccessibilityIcon,
  CheckCircledIcon,
  HeartIcon,
  PersonIcon,
  StarIcon,
} from '@radix-ui/react-icons';

export const values = [
  {
    icon: <HeartIcon className="h-10 w-10 mb-4" />,
    title: 'Empatía',
    description:
      'Nos ponemos en el lugar de nuestros usuarios para entender sus necesidades y diseñar soluciones que realmente marquen la diferencia.',
  },
  {
    icon: <CheckCircledIcon className="h-10 w-10 mb-4" />,
    title: 'Responsabilidad',
    description:
      'Asumimos el compromiso de crear tecnología accesible y segura que impacte positivamente la vida de las personas con discapacidad visual.',
  },
  {
    icon: <StarIcon className="h-10 w-10 mb-4" />,
    title: 'Pasión',
    description:
      'Nos impulsa la pasión por la tecnología y la accesibilidad, motivándonos a superar retos y a innovar constantemente.',
  },
  {
    icon: <PersonIcon className="h-10 w-10 mb-4" />,
    title: 'Colaboración',
    description:
      'Creemos en el poder del trabajo en equipo y en la diversidad de ideas para crear soluciones más efectivas e inclusivas.',
  },
  {
    icon: <AccessibilityIcon className="h-10 w-10 mb-4" />,
    title: 'Inclusión',
    description:
      'Promovemos la inclusión en cada etapa de nuestro desarrollo, asegurándonos de que nuestras soluciones sean accesibles para todos.',
  },
];
