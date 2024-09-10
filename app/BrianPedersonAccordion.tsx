"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import Tag from "./Tag";
import { BrainPedersonTelemetryClient } from "./BrainPedersonTelemetryClient";

const BrainPedersonAccordion = () => {
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
          C# Azure TelemetryClient will leak memory if not implemented as a singleton
          </h1>
    
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >


        { <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                <div className="col-sm-12">

                <span>
                  <a href="https://briancaos.wordpress.com/2020/05/07/c-azure-telemetryclient-will-leak-memory-if-not-implemented-as-a-singleton/" style={{ textDecoration: 'underline' }}>C# Azure TelemetryClient will leak memory if not implemented as a singleton</a>
                  <i className="bi bi-calendar-date flex">07/05/20</i>
                </span>
                <p>I noticed that my classic .net web application would leak memory after I implemented metrics for some background tasks.</p>
                <img src="https://briancaos.wordpress.com/wp-content/uploads/2020/05/telemetryclient.png"></img>
                <p>Further investigation showed that my <em>MetricAggregationManager</em> would not release its memory.</p>
                
                <p>Since one of the major changes was the implementation of a <a href="https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics" target="_blank" rel="noopener">TelemetryClient</a>, and since the memory not being released was from the <em>Microsoft.ApplicationInsights.Metrics</em> namespace, I concluded that the problem lies within the creation of the <strong>TelemetryClient</strong>:</p>
                
                <p><BrainPedersonTelemetryClient /></p>
                <p>The code above will create a new <strong>TelemetryClient</strong> for each creation of my base class. The <strong>TelemetryClient</strong> will collect metrics and store those in memory until either a set time or number of metrics are met, and then dump the metrics to Application Insights.</p>
                </div>
                <div className="tags">
                    <span className="bold">Tags: </span> 
                    <Tag value="C# Azure TelemetryClient will leak memory if not implemented as a singleton" />
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

export default BrainPedersonAccordion;
