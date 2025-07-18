import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface FormProps {
  idea: string;
  setIdea: (val: string) => void;
  onSuccess?: (sections: string[]) => void;
}

const Form = ({ idea, setIdea, onSuccess }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!idea.trim()) {
      setError('Please enter your idea.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error('Failed to submit idea');
      const data = await res.json();
      // Expecting data to be the full idea object
      if (onSuccess) onSuccess(data);
      setIdea('');
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
      <label className="block text-gray-700 font-semibold">Your Idea</label>
      <textarea
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[80px]"
        value={idea}
        onChange={e => setIdea(e.target.value)}
        placeholder="Describe your idea..."
        disabled={loading}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex justify-center gap-4 min-w-[500px]">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-800 transition disabled:opacity-50 flex items-center justify-center min-w-[110px]"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2 text-white" />
              Submitting...
            </>
          ) : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;