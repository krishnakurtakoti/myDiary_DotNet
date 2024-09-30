// Accordion.tsx
"use client"; // Add this at the top

import React from "react";
import "./ItzamiAccordian.css";

interface AccordionProps {
  title: string;
  content: React.ReactNode; // Use ReactNode to allow for any valid JSX content
  index: number;
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, index, openIndex, toggleAccordion }) => {
  return (
    <div className="itzami-accordionItem">
      <h1
        className={`itzami-accordionTitle ${openIndex === index ? "itzami-is-open" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        {title}
      </h1>
      <div className={`itzami-accordionContent ${openIndex === index ? "itzami-show" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
