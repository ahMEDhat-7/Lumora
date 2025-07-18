

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-50">
          <Link to="/" className="flex items-center gap-7">
            <img src="/stunningLogo.gif" alt="Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-2xl font-semibold tracking-tight hover:text-fuchsia-700 transition-colors duration-300">Lumora</h1>
          </Link>
        </div>
        <div>
          <Link
            to="/ideas"
            className="bg-blue-600 text-white px-4 py-2 rounded-3xl font-medium text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            role="button"
            tabIndex={0}
          >
            My Ideas
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;