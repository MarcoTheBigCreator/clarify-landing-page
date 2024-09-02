'use client';

import { useRouter } from 'next/navigation';

interface LanguageButtonProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

export const LanguageButton = ({ icon, text, href }: LanguageButtonProps) => {
  const router = useRouter();

  const onHandleLocale = (href: string) => {
    router.replace(href);
  };

  return (
    <button
      type="button"
      disabled // temporary disabled
      onClick={() => onHandleLocale(href)}
      className="focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full text-lg h-6 w-6 flex items-center justify-center disabled:cursor-not-allowed"
      aria-label={`Cambiar idioma a ${text}`}
      aria-disabled="true" // Añadir si está deshabilitado temporalmente
    >
      {icon && (
        <span className="mr-1" aria-hidden="true">
          {icon}
        </span>
      )}
      {text}
    </button>
  );
};
