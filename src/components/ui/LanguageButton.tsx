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
      onClick={() => onHandleLocale(href)}
      className="focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full text-lg h-6 w-6 flex items-center justify-center"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};
