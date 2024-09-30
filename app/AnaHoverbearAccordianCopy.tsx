"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import Accordion from "./DefaultAccordian";

interface MilanJovanovicAccordionProps {
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
}

const AnaHoverbearAccordionCopy: React.FC<MilanJovanovicAccordionProps> = ({ openIndex, toggleAccordion }) => {
  // const [openIndex, setOpenIndex] = useState(null);

  // const toggleAccordion = (index : any) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <Accordion
    title=" Ana, Hoverbear 🐻"
    content={
    <div className="itzami-accordionContainer">
     


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
                          <p>We&#39;ll explore creating some basic ones using SQL, then create an extension that defines aggregates in Rust using <a rel="noopener" target="_blank" href="https://github.com/zombodb/pgx"><code>pgx</code></a> 0.3.0&#39;s new aggregate support.</p>

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
    } index={0}
    openIndex={openIndex}
    toggleAccordion={toggleAccordion}
    />
  );
};

export default AnaHoverbearAccordionCopy;
