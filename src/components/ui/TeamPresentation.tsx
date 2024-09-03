import { useTranslations } from 'next-intl';
import { titleFont } from '@/config';

export const TeamPresentation = () => {
  const t = useTranslations('whoWeAre');

  return (
    <>
      <h2
        className={`${titleFont.className} text-blue-700 dark:text-white drop-shadow-blue dark:drop-shadow-text text-5xl md:text-6xl font-semibold text-center`}
      >
        {t('title')}
      </h2>
      <p className="max-w-3xl mx-auto text-center text-xl text-zinc-700 dark:text-gray-200">
        {t('description')}
      </p>
    </>
  );
};
