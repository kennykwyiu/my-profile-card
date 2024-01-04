import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="828a7b88-8569-4458-82f2-310bb4205395.png"
      alt="Kenny Yiu"
    />
  );
}

function Intro() {
  return (
    <duv>
      <h1>Kenny Yiu</h1>
      <p>
        I am a self-motivated and dedicated person with great passion developing
        innovative applications. I am a problem-solving lover and capable of
        catching up with the latest tech knowledge in the market.
      </p>
    </duv>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}

      {/* <Skill skill="Java" emoji="👍" color="#123456" />
      <Skill skill="Spring Boot" emoji="🤖" color="orangered" />
      <Skill skill="JavaScript" emoji="🐽" color="yellow" />
      <Skill skill="React" emoji="🤩" color="orange" />
      <Skill skill="HTML+CSS" emoji="👻" color="green" /> */}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" && "👶"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
