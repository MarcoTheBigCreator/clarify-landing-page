'use client';

import { useLocale } from 'next-intl';

interface LanguageButtonProps {
  icon?: React.ReactNode;
}

export const LanguageButton = ({ icon }: LanguageButtonProps) => {
  const isEnglish = useLocale() === 'en';
  const text = isEnglish ? 'ES' : 'EN';

  const onHandleLocale = () => {
    const url = new URL(window.location.href);
    url.pathname = url.pathname.replace(
      /^\/(en|es)(?=\/|$)/,
      isEnglish ? '/es' : '/en'
    );
    window.location.assign(url.pathname + url.search + url.hash);
  };

  return (
    <button
      type="button"
      onClick={onHandleLocale}
      className="focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full text-lg h-6 w-6 flex items-center justify-center disabled:cursor-not-allowed hover:text-violet-500 dark:hover:text-violet-500"
      aria-label={`Cambiar idioma a ${text}`}
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
