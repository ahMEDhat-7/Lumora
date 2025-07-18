import { useState, useEffect, useRef } from 'react';

interface Section {
  title: string;
  content: string;
}

interface WebPreviewProps {
  sections?: Section[];
  idea?: string;
}

const defaultSections: Section[] = [];

const WebPreview = ({ sections = [] }: WebPreviewProps) => {
  const [displaySections, setDisplaySections] = useState<Section[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sections || sections.length === 0) {
      setDisplaySections(defaultSections);
      return;
    }
    const first = sections[0] as unknown;
    if (typeof first === 'string') {
      setDisplaySections((sections as unknown as string[]).map(title => ({ title, content: '' })));
    } else {
      setDisplaySections(sections as Section[]);
    }
  }, [sections]);

  const handleNavClick = (idx: number) => {
    setActiveIndex(idx);
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-2">
      <nav className="flex gap-2 mb-4 border-b pb-2">
        {displaySections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => handleNavClick(idx)}
            className={`px-4 py-2 rounded-t-lg font-semibold transition-colors whitespace-nowrap ${activeIndex === idx
              ? 'bg-blue-600 text-white shadow border-blue-600'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-100 border-transparent'
              } border-b-2 focus:outline-none`}
          >
            {section.title}
          </button>
        ))}
      </nav>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {activeIndex !== null && displaySections[activeIndex] && (
          <section
            key={displaySections[activeIndex].title}
            className={`w-[300px] h-[400px] flex flex-col p-6 rounded-lg border shadow-sm transition ${{
              0: 'bg-gray-50',
              1: 'bg-white',
            }[activeIndex % 2] || 'bg-white'} border-blue-500 ring-2 ring-blue-300`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{displaySections[activeIndex].title}</h2>
            <div className="prose flex-grow">
              <p className="text-gray-600">{displaySections[activeIndex].content}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default WebPreview;
