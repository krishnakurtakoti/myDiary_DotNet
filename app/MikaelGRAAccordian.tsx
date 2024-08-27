"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent1 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent1";
import BalasubramaniumDisciplinedConvexOptimizationMLComponent2 from "./BalasubramaniumDisciplinedConvexOptimizationMLComponent2";
import { BalasubramaniumCVXRCertificate } from "./BalasubramaniumCVXR";
import MikaelGRAComputerInfoComponent from "./MikaelGRAComputerInfoComponent";
import { MikaelGRAComputerInfoComponent2 } from "./MikaelGRAComputerInfoComponent2";

const MikaelGRAAccordion = () => {
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
            InfluxDB Client for .NET
          </h1>
    
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >


<p>
            This library makes it easy to be a client for InfluxDB on .NET!
            </p>

            <p>
            This library makes it easy to be a client for InfluxDB on .NET!The basic idea behind the library is that it should be able to turn queries directly into objects of your own classes. Much like micro-ORMS such as dapper.            
            </p>

            <p>
            The goal is that we want to be able to support LINQ syntax in the future.
            </p>

            <h2 className="step bold">Installation</h2>
            <p>
            Install it through nuget with the following command.
            </p>


            <h2 className="step bold">Reading/Writing</h2>
            <p>
            The library exposes all HTTP operations on InfluxDB (1.0+) and can be used for reading/writing data to/from in two primary ways:
            </p>
            <h2 className="step bold">Using your Own POCO classes</h2>
            <p>
            Start by defining a class that represents a row in InfluxDB that you want to store.
            </p>
            <p>
                  <MikaelGRAComputerInfoComponent2 />
                </p>
                <p>
                  On your POCO class you must specify these things:
              </p>
                <p>
                            <ol>
                              <p>
                                <li>
                                <span className="article-post-sub"> 1.  </span> 1 property with the type DateTime, DateTime?, DateTimeOffset or DateTimeOffset? as the timestamp used in InfluxDB by adding the [InfluxTimestamp] attribute.
                              </li>
                              </p>
                            <p>
                              <li>
                                <span className="article-post-sub">2.  </span>  0-* properties with the type string, long, ulong, int, uint, short, ushort, byte, sbyte, double, float, bool, DateTime, DateTimeOffset, decimal or a user-defined enum (nullables too) with the [InfluxTag] attribute that InfluxDB will use as indexed tags. Note that all tags in InfluxDB is still stored a string. The library will simply making the conversion to the specified type automatically.
                              </li>
                            </p>
                            <p>
                              <li>
                                <span className="article-post-sub">3.  </span>  1-* properties with the type string, long, ulong, int, uint, short, ushort, byte, sbyte, double, float, bool, DateTime, DateTimeOffset, decimal or a user-defined enum (nullables too) with the [InfluxField] attribute that InfluxDB will use as fields.
                              </li>
                            </p>

                            </ol>
                          </p>

              <p>
              Once you&#39;ve defined your class, you&#39;re ready to use the InfluxClient, which is the main entry point to the API:
              </p>

              <p>
              Here&#39;s how to write to the database:
              </p>


              <p>
                  <MikaelGRAComputerInfoComponent />
                </p>



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

export default MikaelGRAAccordion;
