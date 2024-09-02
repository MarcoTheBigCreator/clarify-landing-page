import { SectionInfo } from './SectionInfo';
import { SectionsInfo } from '@/locales';

export const SectionsInfoGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center" role="list">
      {SectionsInfo.map((section, index) => (
        <SectionInfo
          key={index}
          title={section.title}
          description={section.description}
          className={section.className}
          aria-setsize={SectionsInfo.length}
          aria-posinset={index + 1}
        />
      ))}
    </div>
  );
};
