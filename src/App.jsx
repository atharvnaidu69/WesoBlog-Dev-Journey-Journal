import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
