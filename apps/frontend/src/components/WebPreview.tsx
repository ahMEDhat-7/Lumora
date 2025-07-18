import { useState, useEffect } from 'react';

interface Section {
  title: string;
  content: string;
}

interface WebPreviewProps {
  sections?: Section[];
}

const WebPreview = ({ sections = [] }: WebPreviewProps) => {
  // Dummy sections if none provided
  const [displaySections, setDisplaySections] = useState<Section[]>([
    { title: 'Hero', content: 'Welcome to our amazing platform' },
    { title: 'About', content: 'Learn more about what we do' },
    { title: 'Contact', content: 'Get in touch with us' }
  ]);

  useEffect(() => {
    if (sections.length > 0) {
      setDisplaySections(sections);
    }
  }, [sections]);

  return (
    <div className="bg-white p-4">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {displaySections.map((section, index) => (
          <section
            key={section.title}
            className={`flex-shrink-0 w-[300px] h-[400px] flex flex-col p-6 rounded-lg ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } border border-gray-200 shadow-sm`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
            <div className="prose flex-grow">
              <p className="text-gray-600">{section.content}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WebPreview;
