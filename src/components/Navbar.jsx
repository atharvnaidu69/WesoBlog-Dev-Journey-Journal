import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-charcoal-800 shadow-sm">
      {/* <nav className="bg-white dark:bg-gray-900 shadow-sm"> // This uses Tailwind default color, not custom */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Weso.journey
          </Link>

          {/* Navigation Links + Toggle */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 dark:text-white hover:underline"
            >
              About
            </Link>

            {/* Dark Mode Toggle */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full dark:bg-gray-600 relative">
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-5' : ''
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
