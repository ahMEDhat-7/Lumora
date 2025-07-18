import { useEffect, useState } from "react";
import { Loader2, AlertCircle, Lightbulb  } from "lucide-react";

const PAGE_SIZE = 3;

const Preview = () => {
  const [ideas, setIdeas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  
  const filteredIdeas = ideas.filter((idea) => {
    const searchWord = search.toLowerCase();
    const match = idea.idea.toLowerCase().includes(searchWord);
    return match;
  });
  
  const totalPages = Math.ceil(filteredIdeas.length / PAGE_SIZE);

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

  const pagedIdeas = filteredIdeas.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="h-screen flex justify-center p-3">
      <section className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-7xl w-full flex flex-col">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800">All Ideas</h2>
          <div className="absolute right-1/3 w-full max-w-md">
            <input
              type="text"
              placeholder="Search ideas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="animate-spin h-8 w-8 text-purple-600 mb-2" />
              <span className="text-gray-600">Loading ideas...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-10 w-10 text-red-400 mb-2" />
              <span className="text-red-500">{error}</span>
            </div>
          ) : filteredIdeas.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pagedIdeas.map((idea, idx) => (
                <li
                  key={idx}
                  className="flex flex-col gap-2 p-4 bg-white rounded-lg border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer relative group"
                  style={{ minWidth: '250px', maxWidth: '100%' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                    <span className="font-medium text-gray-800">{idea.idea || idea.text || 'Untitled Idea'}</span>
                  </div>
                  {Array.isArray(idea.sections) && idea.sections.length > 0 && ( 
                    <ul className="flex flex-col gap-1 ml-4 list-disc text-gray-600">
                      {idea.sections.map((section: any, sidx: number) => (
                        <li key={sidx}>
                          {section.title ? (
                            <span className="font-semibold text-purple-700">{section.title}</span>
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
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Lightbulb className="h-16 w-16 mb-2 opacity-60 text-purple-400" />
              <p className="text-gray-600 italic">
                {ideas.length === 0 
                  ? "No ideas to display yet.\nStart by submitting your first idea!"
                  : `No ideas found matching "${search}"`
                }
              </p>
            </div>
          )}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-3 gap-2 flex-none">
            <button
              className="px-4 py-2 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 disabled:opacity-50 transition-colors"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="px-3 py-2 text-gray-600">Page {page} of {totalPages}</span>
            <button
              className="px-4 py-2 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 disabled:opacity-50 transition-colors"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Preview;