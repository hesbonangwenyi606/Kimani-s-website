import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Ltd",
    duration: "Jan 2022 – Present",
    details: [
      "Developed responsive web apps using React and Node.js",
      "Collaborated with a team to deliver projects on time",
      "Integrated REST APIs and optimized database queries",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Moringa School Projects",
    duration: "Jun 2021 – Dec 2021",
    details: [
      "Built interactive UI components for student projects",
      "Implemented animations and responsive design",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <p className="subtitle">Professional journey and roles I’ve undertaken</p>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
