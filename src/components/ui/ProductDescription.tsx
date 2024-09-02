import { useTranslations } from 'next-intl';

export const ProductDescription = () => {
  const t = useTranslations('meetClarify');
  const productDescription = t.raw('info') as ProductDescription[];

  return (
    <>
      {productDescription.map((item) => (
        <div key={item.question}>
          <h3 className="text-2xl font-semibold text-violet-700 dark:text-violet-500">
            {item.question}
          </h3>
          <p className="text-zinc-700 dark:text-gray-200 mt-4 text-lg">
            {item.answer}
          </p>
        </div>
      ))}
    </>
  );
};
