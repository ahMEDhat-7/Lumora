import NavBar from './components/NavBar';
import Form from './components/Form';
import Preview from './components/Preview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  function Home() {
    return (
      <div className="h-full flex items-center justify-center">
        <main className="max-w-2xl w-full p-4">
          <Form />
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
          </Routes>
      </div>
    </Router>
  );
}
