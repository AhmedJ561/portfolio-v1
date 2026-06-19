import { useState } from "react";
import { Info, BarChart2, PieChart } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  description: string;
  years: number; // Use a decimal to represent years
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "web",
    skills: [
      { name: "React", level: 70, description: "Frontend library", years: 0.25 },
      { name: "Node.js", level: 55, description: "Server-side runtime", years: 0.25 },
      { name: "MongoDB", level: 50, description: "NoSQL database", years: 0.1 },
      { name: "Express", level: 50, description: "Node.js framework", years: 0.25 },
      { name: "HTML/CSS", level: 95, description: "Web core tech", years: 2 },
    ],
  },
  {
    name: "mobile",
    skills: [
      { name: "Flutter", level: 50, description: "UI toolkit", years: 0.5 },
      { name: "Android (Java)", level: 70, description: "Native dev", years: 0.5 },
      { name: "Dart", level: 75, description: "Flutter language", years: 0.5 },
    ],
  },
  {
    name: "design",
    skills: [
      { name: "Blender", level: 65, description: "3D design", years: 2 },
      { name: "Canva", level: 85, description: "Design platform", years: 3 },
      { name: "Adobe Photoshop", level: 30, description: "Graphics editor", years: 2 },
      { name: "Ibis Paint", level: 75, description: "Drawing app", years: 2 },
    ],
  },
  {
    name: "languages",
    skills: [
      { name: "JavaScript", level: 80, description: "Programming language", years: 1.5 },
      { name: "Python", level: 75, description: "Scripting language", years: 2 },
      { name: "C++", level: 80, description: "Systems language", years: 3 },
      { name: "C#", level: 70, description: "Multi-paradigm", years: 2 },
      { name: "Java", level: 85, description: "OOP language", years: 1 },
    ],
  },
  {
    name: "other",
    skills: [
      { name: "Filmora", level: 80, description: "Video editing", years: 2 },
      { name: "Capcut", level: 85, description: "Video editing", years: 2 },
      { name: "ASP.NET", level: 40, description: "Web framework", years: 1 },
    ],
  },
];



const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
    <div
      className="h-full rounded-full"
      style={{
        width: `${level}%`,
        background: 'linear-gradient(90deg, #a07830, #c9a84c, #f0c860)',
        boxShadow: '0 0 8px rgba(201,168,76,0.4)',
      }}
    />
  </div>
);

const SkillCircle = ({ level }: { level: number }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - level / 100);

  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="rgba(201,168,76,0.2)"
        strokeWidth="5"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="url(#goldGrad)"
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
      />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a07830" />
          <stop offset="50%" stopColor="#f0c860" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SkillsVisualization = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [visualizationType, setVisualizationType] = useState<"bars" | "radar">("bars");

  return (
    <div
      id="skills-section"
      className="w-full min-h-screen p-8 flex flex-col items-center"
      style={{ background: 'linear-gradient(180deg, #12121a 0%, #0f0f17 100%)' }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold section-heading">
          Skills & Expertise
        </h2>
        <p style={{ color: '#9a9ab0' }} className="max-w-2xl mx-auto mt-2">
          Visual overview of my experience and toolset — hover for more info.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setVisualizationType("bars")}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition font-semibold ${
              visualizationType === "bars"
                ? "text-black"
                : ""
            }`}
            style={visualizationType === "bars" ? {
              background: 'linear-gradient(135deg, #c9a84c, #f0c860)',
              boxShadow: '0 2px 12px rgba(201,168,76,0.35)',
            } : {
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#9a9ab0',
            }}
          >
            <BarChart2 className="w-4 h-4" />
            Bar View
          </button>
          <button
            onClick={() => setVisualizationType("radar")}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition font-semibold ${
              visualizationType === "radar"
                ? "text-black"
                : ""
            }`}
            style={visualizationType === "radar" ? {
              background: 'linear-gradient(135deg, #c9a84c, #f0c860)',
              boxShadow: '0 2px 12px rgba(201,168,76,0.35)',
            } : {
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#9a9ab0',
            }}
          >
            <PieChart className="w-4 h-4" />
            Radar View
          </button>
        </div>
      </div>

      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`capitalize text-sm py-2 rounded-md font-semibold transition-all ${
                activeTab === category.name
                  ? "text-black"
                  : ""
              }`}
              style={activeTab === category.name ? {
                background: 'linear-gradient(135deg, #c9a84c, #f0c860)',
                boxShadow: '0 2px 12px rgba(201,168,76,0.3)',
              } : {
                background: 'rgba(201,168,76,0.07)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: '#9a9ab0',
              }}
            >
              {category.name === "web"
                ? "Web Dev"
                : category.name === "mobile"
                ? "Mobile Dev"
                : category.name}
            </button>
          ))}
        </div>

        {skillCategories
          .filter((cat) => cat.name === activeTab)
          .map((category) => (
            <div key={category.name} className="space-y-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl shadow-md transition-all relative group"
                  style={{ background: 'linear-gradient(135deg, #16161f 0%, #1c1c28 100%)', border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-semibold" style={{ color: '#e8e8f0' }}>{skill.name}</h3>
                      <p className="text-sm" style={{ color: '#6a6a80' }}>
                        {skill.years} {skill.years > 1 ? "years" : "year"}
                      </p>
                    </div>
                    <div className="relative">
                      <Info className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      <div className="absolute left-full ml-4 w-64 p-4 rounded-xl hidden group-hover:block z-10" style={{ background: 'rgba(16,16,24,0.95)', border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
                        <h4 className="font-semibold" style={{ color: '#c9a84c' }}>{skill.name}</h4>
                        <p className="text-sm mt-1" style={{ color: '#9a9ab0' }}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {visualizationType === "bars" ? (
                    <SkillBar level={skill.level} />
                  ) : (
                    <div className="flex justify-center">
                      <SkillCircle level={skill.level} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>

      <p className="mt-12 text-sm italic text-center" style={{ color: '#6a6a80' }}>
        Learning and evolving every step of the way ✨
      </p>
    </div>
  );
};

export default SkillsVisualization;
