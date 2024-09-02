'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface LanguageButtonProps {
  icon?: React.ReactNode;
}

export const LanguageButton = ({ icon }: LanguageButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isEnglish = pathname.startsWith('/en');

  const text = isEnglish ? 'ES' : 'EN';
  const newPath = isEnglish
    ? pathname.replace(/^\/en/, '/es')
    : pathname.replace(/^\/es/, '/en');

  // Mantener el hash y parámetros de búsqueda
  const href = `${newPath}${searchParams ? '?' + searchParams.toString() : ''}${
    window.location.hash
  }`;

  const onHandleLocale = () => {
    router.replace(href);
  };

  return (
    <button
      type="button"
      onClick={onHandleLocale}
      className="focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full text-lg h-6 w-6 flex items-center justify-center disabled:cursor-not-allowed hover:text-violet-300 dark:hover:text-violet-400"
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
