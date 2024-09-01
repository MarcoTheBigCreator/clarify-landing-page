import {
  AccessibilityIcon,
  CheckCircledIcon,
  HeartIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

export const values = [
  {
    icon: <AccessibilityIcon className="h-10 w-10 mb-4" />,
    title: 'Inclusión',
    description:
      'Promovemos la inclusión en toda nuestro desarrollo, asegurándonos de que nuestras soluciones sean accesibles para todos.',
  },
  {
    icon: <HeartIcon className="h-10 w-10 mb-4" />,
    title: 'Empatía',
    description:
      'Nos ponemos en el lugar de nuestros usuarios para entender sus necesidades y crear soluciones que realmente marquen la diferencia.',
  },
  {
    icon: <CheckCircledIcon className="h-10 w-10 mb-4" />,
    title: 'Responsabilidad',
    description:
      'Asumimos el compromiso de crear tecnología accesible y segura que impacte positivamente la vida de las personas con discapacidad visual.',
  },
  {
    icon: <PersonIcon className="h-10 w-10 mb-4" />,
    title: 'Colaboración',
    description:
      'Creemos en el poder del trabajo en equipo y en la diversidad de ideas para crear soluciones más efectivas e inclusivas.',
  },
];
