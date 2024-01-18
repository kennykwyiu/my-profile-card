import { useState } from "react";
import "./AccordianComponent.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function AccordianComponent() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurOpen] = useState(null);

  return (
    <div className="accordian">
      {data.map((question, index) => (
        <AccordianItem
          currOpen={currOpen}
          onOpen={setCurOpen}
          key={question.title}
          num={index}
          title={question.title}
        >
          {question.text}
        </AccordianItem>
      ))}
      <AccordianItem
        currOpen={currOpen}
        onOpen={setCurOpen}
        key="title 1 - testing"
        num={22}
        title="title 1 - testing"
      >
        <p>"title 1 - testing"</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ num, title, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
    // setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle()}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
