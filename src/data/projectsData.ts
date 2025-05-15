import { Project } from "../types/Project";
import chatflowImage from "../assets/chatflow.png";
import noteImage from "../assets/note.png"; // Import the note image
import weatherImage from "../assets/weather.png"; // Import the weather image

export const projects: Project[] = [
  {
    id: "1",
    title: "ChatFlow",
    category: "mobile",
    image: `${chatflowImage}`,
    githubUrl: "https://github.com/AhmedJ561/ChatFlow",
    demoUrl: "https://youtube.com/shorts/0nbugsEB-4E?si=b7573FBIj0zbb0xb",
    description: "A simple chat app semester project",
    technologies: ["Android Studio", "XML", "Java", "Firebase"],
  },
  {
    id: "2",
    title: "Note App",
    category: "mobile",
    image: `${noteImage}`,
    githubUrl: "https://github.com/AhmedJ561/NoteApp",
    demoUrl: "https://youtube.com/shorts/D5QPZI3EJWo?si=5WVQMcZYkO5_IEQV",
    description: "A simple practice note app",
    technologies: ["Flutter", "Isar Database"],
  },
  {
    id: "3",
    title: "Weather App",
    category: "mobile",
    image: `${weatherImage}`,
    githubUrl: "https://github.com/AhmedJ561/WeatherApp",
    demoUrl: "https://youtu.be/bqRpCX4-mZU?si=NB6EdtfR-5TPc-xO",
    description: "Weather App using open weather API",
    technologies: ["Flutter", "Open Weather API"],
  },
  // Add more projects as needed
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "game", name: "Game Development" },
  { id: "ai", name: "AI Projects" },
];
