// ParentComponent.tsx
"use client"; // Add this at the top

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import MilanJovanovicAccordion from "./MilanJovanovicAccordion";
import AnaHoverbearAccordionCopy from "./AnaHoverbearAccordianCopy";
// import AnaHoverbearAccordion from "./AnaHoverbearAccordion";

const ParentAccordianControlComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandAll = () => {
    setOpenIndex(0); // Adjust based on how many accordions you have
  };

  return (
    <div className="itzami-accordionContainer">
      <h1>Accordion</h1>
      <button onClick={expandAll}>Expand All</button>
      <button className="btn btn-primary" onClick={expandAll}>
          Expand All
        </button>

      <MilanJovanovicAccordion openIndex={openIndex} toggleAccordion={toggleAccordion} />
      { <AnaHoverbearAccordionCopy openIndex={openIndex} toggleAccordion={toggleAccordion} /> }
    </div>
  );
};

export default ParentAccordianControlComponent;
