const Services = () => {
  return (
    <div className="section flex flex-col items-center text-center">
      <h1 className="section-heading text-5xl font-extrabold tracking-wide mb-8">
        Skills & Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
          <p>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB (MERN Stack)</p>
        </div>
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Android Development</h2>
          <p>Java, XML, Android Studio</p>
        </div>
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Game Development</h2>
          <p>Exploring game development technologies</p>
        </div>
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Graphic Design</h2>
          <p>Blender, Canva, Ibis Paint, SketchUp, Adobe Photoshop</p>
        </div>
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Video Editing</h2>
          <p>Filmora, Capcut</p>
        </div>
        <div className="service-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Programming Languages</h2>
          <p>C++, C#, Java, Python, Dart</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
