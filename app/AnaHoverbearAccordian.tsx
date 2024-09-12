"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent1 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent1";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent2 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent2";
import { BalasubramaniumCVXRCertificate } from "./BalasubramaniumCVXR";
import MikaelGRAComputerInfoComponent from "./MikaelGRAComputerInfoComponent";
import { MikaelGRAComputerInfoComponent2 } from "./MikaelGRAComputerInfoComponent2";

const AnaHoverbearAccordion = () => {
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
             Ana, Hoverbear 🐻
          </h1>
    <h3><p>I&#39;ve been involved with by checking the rest of this site, as well as my <a rel="noopener" target="_blank" href="https://github.com/hoverbear/">Github profile</a>. Things like Rust, distributed consensus, storage, networking, automation, operations, WASM, and embedded are within my interests.</p></h3>
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >


<p>
        <a id="main-link" href="https://hoverbear.org">
                        Ana, Hoverbear 🐻
                    </a>
            </p>

            <nav id="tree">
                <ul>
                    <li>
                        <a href="https://hoverbear.org/about/">
                            Ana, Hoverbear 🐻
                        </a>&nbsp;

                    </li><li>
                        <a href="https://hoverbear.org/blog/">
                            Articles
                        </a>&nbsp;
                    </li></ul><ul>
                    </ul>
            </nav>
<p>You may know of me because of my background in technology, but there is much more that defines me. I love going hiking, road tripping, and camping with our Golden Retriever, <a rel="noopener" target="_blank" href="https://twitter.com/nami_num_nums"><em>Nami</em></a>. I&#39;m also an avid video gamer and a lover of cooking. You can get an idea of the projects I&#ve been involved with by checking the rest of this site, as well as my <a rel="noopener" target="_blank" href="https://github.com/hoverbear/">Github profile</a>. Things like Rust, distributed consensus, storage, networking, automation, operations, WASM, and embedded are within my interests.</p>
          <div className="ana-hoverbear">
                    <section>
                            <h2 className="post-title"><a href="https://hoverbear.org/blog/postgresql-aggregates-with-rust/">PostgreSQL Aggregates with Rust</a></h2>
                            <h5 className="description">Writing custom Aggregates for statistical or analytical purposes.</h5>
                            <div className="excerpt">
                              <p>Reaching for something like <code>SUM(vals)</code> or <code>AVG(vals)</code> is a common habit when using PostgreSQL. These <a rel="noopener" target="_blank" href="https://www.postgresql.org/docs/current/functions-aggregate.html">aggregate functions</a> offer users an easy, efficient way to compute results from a set of inputs.</p>
                          <p>How do they work? What makes them different than a function? How do we make one? What kinds of other uses exist?</p>
                          <p>We'll explore creating some basic ones using SQL, then create an extension that defines aggregates in Rust using <a rel="noopener" target="_blank" href="https://github.com/zombodb/pgx"><code>pgx</code></a> 0.3.0's new aggregate support.</p>

                              <a className="continue-reading" href="https://hoverbear.org/blog/postgresql-aggregates-with-rust/#continue-reading">Continue reading...</a>
                            </div>

                            <div className="post-meta"><div className="posted-on">
                                <time 
                                // datetime=" 2022-02-09 00:00"
                                >2022-02-09</time>
                              </div><div className="reading-time">
                                21 min
                              </div>
                              <div className="tags"><a href="https://hoverbear.org/tags/rust">Rust</a>&nbsp;and&nbsp;<a href="https://hoverbear.org/tags/postgresql">PostgreSQL</a></div>
                            </div>
                      </section>

          </div>
            



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

export default AnaHoverbearAccordion;
