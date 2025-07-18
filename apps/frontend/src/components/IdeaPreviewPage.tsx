import { useLocation, useNavigate } from 'react-router-dom';
import WebPreview from './WebPreview';

export default function IdeaPreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const idea = location.state?.idea;

  if (!idea) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Idea not found</h2>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full">
        <WebPreview sections={idea.sections} />
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
