import NavBar from './components/NavBar';
import Form from './components/Form';
import Preview from './components/Preview';
import IdeaPreviewPage from './components/IdeaPreviewPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


export default function App() {
  // const [allowed, setAllowed] = useState<boolean>(true);
  // useEffect(() => {
  //   const isPC = () => {
  //     const ua = navigator.userAgent;
  //     const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  //     return !isMobile && window.innerWidth > 1000;
  //   };
  //   setAllowed(isPC());
  // }, []);
  // if (!allowed) {
  //   return (
  //     <div className="h-screen flex items-center justify-center bg-gray-100">
  //       <div className="bg-white p-8 rounded-lg shadow text-center">
  //         <h2 className="text-2xl font-bold mb-4 text-red-600">Only PC's can access website</h2>
  //       </div>
  //     </div>
  //   );
  // }
  function Home() {
    const [idea, setIdea] = useState('');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
        <main className="w-full max-w-5xl p-4 flex gap-6 items-start justify-center">
          <div className="flex-1 min-w-[320px] flex items-center justify-center">
            <Form
              idea={idea}
              setIdea={setIdea}
            />
          </div>
        </main>
      </div>
    );
  }
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideas" element={<Preview />} />
          <Route path="/ideas/:id/preview" element={<IdeaPreviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}
