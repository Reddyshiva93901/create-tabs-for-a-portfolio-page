import React, { useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the description for Project 1.",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the description for Project 2.",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the description for Project 3.",
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="App">
      <h1>Portfolio</h1>
      <div className="Tabs">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`TabButton ${activeTab === project.id ? "Active" : ""}`}
            onClick={() => setActiveTab(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="Content">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`TabContent ${activeTab === project.id ? "Active" : ""}`}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
