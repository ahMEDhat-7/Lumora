import { useEffect, useState } from "react";
import { Loader2, AlertCircle, Lightbulb  } from "lucide-react";

const PAGE_SIZE = 6;

const Preview = () => {
  const [ideas, setIdeas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ideas.length / PAGE_SIZE);

  useEffect(() => {
    const getIdeas = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch('/api/ideas');
        if (!response.ok) throw new Error('Failed to fetch ideas');
        const data = await response.json();
        setIdeas(Array.isArray(data) ? data : (Array.isArray(data.idea) ? data.idea : []));
      } catch (error) {
        setError('Could not load ideas. Please try again later.');
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    getIdeas();
  }, []);

  const pagedIdeas = ideas.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Ideas</h2>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="animate-spin h-8 w-8 text-blue-600 mb-2" />
          <span className="text-gray-500">Loading ideas...</span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-10 w-10 text-red-400 mb-2" />
          <span className="text-red-500">{error}</span>
        </div>
      ) : ideas && ideas.length > 0 ? (
        <>
          <ul className="flex flex-wrap gap-6">
            {pagedIdeas.map((idea, idx) => (
              <li
                key={idx}
                className="w-full sm:w-[48%] lg:w-[31%] flex flex-col gap-2 p-4 bg-gray-50 rounded border border-gray-200 shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer relative group"
                style={{ minWidth: '250px', maxWidth: '100%' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="h-5 w-5 text-blue-400" />
                  <span className="font-medium text-gray-800">{idea.idea || idea.text || 'Untitled Idea'}</span>
                </div>
                {Array.isArray(idea.sections) && idea.sections.length > 0 && ( 
                  <ul className="flex flex-col gap-1 ml-4 list-disc text-gray-600">
                    {idea.sections.map((section: any, sidx: number) => (
                      <li key={sidx}>
                        {section.title ? (
                          <span className="font-semibold text-blue-700">{section.title}</span>
                        ) : null}
                        {section.title ? ': ' : ''}
                        {section.content || (typeof section === 'string' ? section : '')}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              <button
                className="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="px-2 py-1 text-gray-600">Page {page} of {totalPages}</span>
              <button
                className="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <Lightbulb className="h-16 w-16 mb-2 opacity-60 text-blue-400" />
          <p className="text-gray-500 italic">No ideas to display yet.<br/>Start by submitting your first idea!</p>
        </div>
      )}
    </section>
  );
};

export default Preview;