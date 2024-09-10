import React, { useState } from "react";
import "./BalasubramaniumCVXRStyles.css";

export const BrainPedersonTelemetryClient: React.FC = () => {
    return (
        <div className="BalasubramaniumCVXR-container">
           
            <pre className="BalasubramaniumCVXR-pre">
                <code>
                    {`
using System;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Metrics;
 
namespace MyCode
{
  public class BaseProcessor
  {
    private readonly TelemetryClient _telemetryClient;
     
    private BaseProcessor()
    {
      string instrumentationKey = "somekey"
      var telemetryConfiguration = new TelemetryConfiguration { InstrumentationKey = instrumentationKey };
      // This is a no-go. I should not create a new instance for every BaseProcessor
      _telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
  }
}
`.split('-').map((part, index, array) => (
                        index === array.length - 1 ? part : <span key={index}>{part}-</span>
                    ))}
                </code>
            </pre>
        </div>
    );
};
