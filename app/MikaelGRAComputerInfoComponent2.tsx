import React from 'react';

export const MikaelGRAComputerInfoComponent2
: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    public class ComputerInfo
    {
       [InfluxTimestamp]
       public DateTime Timestamp { get; set; }
    
       [InfluxTag( "host" )]
       public string Host { get; set; }
    
       [InfluxTag( "region" )]
       public string Region { get; set; }
    
       [InfluxField( "cpu" )]
       public double CPU { get; set; }
    
       [InfluxField( "ram" )]
       public long RAM { get; set; }
    }
    `.split('-').map((part, index, array) => (
        index === array.length - 1 ? part : (
            <React.Fragment key={index}>
                {part}
                <span style={pinkHyphenStyle}>-</span>
            </React.Fragment>
        )
    ));

    return (
        <pre style={{ backgroundColor: 'lightgrey', color: 'black' }}>
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
};



