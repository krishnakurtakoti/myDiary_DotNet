"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent1 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent1";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent2 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent2";
import { BalasubramaniumCVXRCertificate } from "./BalasubramaniumCVXR";
import MikaelGRAComputerInfoComponent from "./MikaelGRAComputerInfoComponent";
import { MikaelGRAComputerInfoComponent2 } from "./MikaelGRAComputerInfoComponent2";
import Tag from "./Tag";
import RedditRSharpSingletonScopedTransient from "./RedditRSharpSingletonScopedTransient";

const MilanJovanovicAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="itzami-accordionContainer">
      <h1>Accordion</h1>

      <div className="itzami-accordionItem">
     
          <h1
            className={`itzami-accordionTitle ${
              openIndex === 0 ? "itzami-is-open" : ""
            }`}
            onClick={() => toggleAccordion(0)}
          >
           r/csharp Can someone explain when to use Singleton, Scoped and Transient with some real life examples?
          </h1>
    
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >


        { <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                <div className="col-sm-12">
                  <p>
                    <a href="https://www.reddit.com/r/csharp/comments/1acwtar/can_someone_explain_when_to_use_singleton_scoped/" style={{ textDecoration: 'underline' }}> https://www.reddit.com/r/csharp/comments/1acwtar/can_someone_explain_when_to_use_singleton_scoped/</a>
                   
                    </p>
                      <RedditRSharpSingletonScopedTransient />
                </div>
                <div className="tags">
                    <span className="bold">Tags: </span> 
                    <Tag value="" />
                </div>
              </div> }

        </div>
      </div>

      {/* <div className="itzami-accordionItem">
        <h2
          className={`itzami-accordionTitle ${
            openIndex === 1 ? "itzami-is-open" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          Tab 2
        </h2>
        <div
          className={`itzami-accordionContent ${
            openIndex === 1 ? "itzami-show" : ""
          }`}
        >
          <p>Information here</p>
        </div>
      </div> */}

      {/* <div className="itzami-accordionItem">
        <h2
          className={`itzami-accordionTitle ${
            openIndex === 2 ? "itzami-is-open" : ""
          }`}
          onClick={() => toggleAccordion(2)}
        >
          Tab 3
        </h2>
        <div
          className={`itzami-accordionContent ${
            openIndex === 2 ? "itzami-show" : ""
          }`}
        >
          <p>Information here</p>
        </div>
      </div> */}
    </div>
  );
};

export default MilanJovanovicAccordion;
