import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
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
      <Skill skill="Java" emoji="👍" color="#123456" />
      <Skill skill="Spring Boot" emoji="🤖" color="orangered" />
      <Skill skill="JavaScript" emoji="🐽" color="yellow" />
      <Skill skill="React" emoji="🤩" color="orange" />
      <Skill skill="HTML+CSS" emoji="👻" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
