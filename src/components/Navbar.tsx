import { useState } from "react";

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
    <nav style={{
      background: 'linear-gradient(180deg, #0d0d14 0%, #12121a 100%)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.25)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(201, 168, 76, 0.1)',
    }} className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{
          background: 'linear-gradient(135deg, #c9a84c 0%, #f0c860 50%, #a07830 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.05em',
        }}>MY PORTFOLIO</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          {["home", "about", "skills", "services", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                style={{ color: '#b8bec7', transition: 'color 0.3s, text-shadow 0.3s' }}
                className="hover:text-yellow-300 capitalize"
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#f0c860';
                  (e.target as HTMLElement).style.textShadow = '0 0 12px rgba(201,168,76,0.6)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#b8bec7';
                  (e.target as HTMLElement).style.textShadow = 'none';
                }}
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
            style={{ color: '#c9a84c' }}
            className="focus:outline-none"
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
        <div className="md:hidden" style={{ background: '#0f0f17', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  style={{ color: '#b8bec7', display: 'block' }}
                  className="px-3 py-2 rounded-lg text-base font-medium capitalize hover:bg-yellow-900/20 transition duration-200"
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
