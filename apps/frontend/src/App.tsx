import NavBar from './components/NavBar';
import Form from './components/Form';
import Preview from './components/Preview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  function Home() {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <main className="max-w-2xl w-full p-4 space-y-6">
          <Form />
        </main>
      </div>
    );
  }
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideas" element={<Preview />} />
        </Routes>
      </div>
    </Router>
  );
}
