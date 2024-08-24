"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent1 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent1";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent2 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent2";
import { BalasubramaniumCVXRCertificate } from "./BalasubramaniumCVXR";

const ItzamiAccordion = () => {
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
            CVXR: An R Package for Disciplined Convex Optimization
          </h1>
    
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >

<header className="article-header">

      <p>Link: <a href="https://rviews.rstudio.com/2017/11/27/introduction-to-cvxr/" style={{ textDecoration: 'underline' }}>CVXR: An R Package for Disciplined Convex Optimization
              </a>
      </p>
        
    <a href="https://rviews.rstudio.com/2017/11/27/introduction-to-cvxr/">
    {/* <h1 className="article-title" >
        CVXR: An R Package for Disciplined Convex Optimization
    </h1> */}
    </a>
    
    <div className="article-meta">
      <div>
        <i className="fa fa-calendar">2017-11-27</i>
        {/* <time datetime="2017-11-27 00:00:00 +0000 UTC" itemprop="datePublished">2017-11-27</time> */}
      </div>
    </div>
</header>

          <div>by Anqi Fu, Balasubramanian Narasimhan, Stephen Boyd</div>

          <p>At long last, we are pleased to announce the release of <a href="http://CRAN.R-project.org/package=CVXR" style={{ textDecoration: 'underline' }}>CVXR</a>!</p>


          <p>First introduced at useR! 2016, <code>CVXR</code> is an R package that provides an object-oriented language for convex optimization, similar to CVX, CVXPY, YALMIP, and Convex.jl. It allows the user to formulate convex optimization problems in a natural mathematical syntax, then automatically verifies the problem&#39;s convexity with <a href="http://dcp.stanford.edu" style={{ textDecoration: 'underline' }}>disciplined convex programming (DCP)</a> and converts it into the appropriate form for a specific solver. This makes <code>CVXR</code> ideal for rapidly prototyping new statistical models. More information is available at the <a href="http://cvxr.rbind.io" style={{ textDecoration: 'underline' }}>official site</a>.</p>


          <p>This is the first of a series of blog posts about <code>CVXR</code>. In this post, we will introduce the semantics of our package and dive into a simple example, which gives users an idea of <code>CVXR</code>&#39;s power.</p>
        
          <div id="convex-optimization" className="section level2">
<h2>Convex Optimization</h2>
<p>A convex optimization problem has the form </p>
<p>
  <BalasubramaniumDisciplinedConvexOptimizationMLComponent1 />
</p>
<p>
  <BalasubramaniumDisciplinedConvexOptimizationMLComponent2 />
</p>

<p>
In CVXR, variables, expressions, objectives, and constraints are all represented by S4 objects. Users define a problem by combining constants and variables with a library of basic functions (atoms) provided by the package. When <code>solve()</code> is called, <code>CVXR</code>  converts the S4 object into a standard form, sends it to the user-specified solver, and retrieves the results. Let&#39;s see an example of this in action.
</p>
</div>
        <p>Ordinary Least Squares (OLS)</p>
        <p>We begin by generating data for an ordinary least squares problem.</p>
        <p><BalasubramaniumCVXRCertificate /></p>

        <p>Here, <code>n</code> is the number of predictors, <code>y</code> is the response, and <code>X</code> is the matrix of predictors. In <code>CVXR</code>, we first instantiate the optimization variable.</p>
          <p>Information here</p>
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

export default ItzamiAccordion;
