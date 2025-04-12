const Navbar = () => {
  const playClickSound = () => {
    const audio = new Audio(`${import.meta.env.BASE_URL}click.mp3`); // Adjust the path as necessary
    audio.play();
  };

  return (
    <nav className="bg-background shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent">Portfolio</div>
        <div className="space-x-6 text-lg font-medium">
          {["home", "about", "skills", "services", "project", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-primary hover:text-purple-400 transition duration-200 capitalize"
                onClick={playClickSound}
              >
                {section}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
