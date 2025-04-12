import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(`${import.meta.env.BASE_URL}click.mp3`); // Adjust the path as necessary
    audio.play();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Portfolio</div>
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {["home", "about", "skills", "services", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-purple-400 hover:text-purple-300 transition duration-200 capitalize"
                onClick={playClickSound}
              >
                {section}
              </a>
            )
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["home", "about", "skills", "services", "project", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-400 hover:text-purple-300 hover:bg-gray-700 transition duration-200"
                  onClick={() => {
                    playClickSound();
                    setIsOpen(false);
                  }}
                >
                  {section}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
