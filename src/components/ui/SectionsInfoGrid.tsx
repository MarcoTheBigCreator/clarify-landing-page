import { useTranslations } from 'next-intl';
import { SectionInfo } from './SectionInfo';

export const SectionsInfoGrid = () => {
  const t = useTranslations();
  const sectionsInfo = t.raw('sectionsInfo') as SectionInfo[];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center" role="list">
      {sectionsInfo.map((section, index) => (
        <SectionInfo
          key={index}
          title={section.title}
          description={section.description}
          differentBackground={section.differentBackground}
          aria-setsize={sectionsInfo.length}
          aria-posinset={index + 1}
        />
      ))}
    </div>
  );
};
