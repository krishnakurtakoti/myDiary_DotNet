import React from 'react';

export const MikeHadlowWritingDotnetServicesForKubernetes3: React.FC = () => {
    const pinkStyle = {
        color: 'darkpink'
    };

    const purpleStyle = {
        color: 'purple'
    };
    const preStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px', // Add padding for the border effect
        borderLeft: '3px solid pink', // Add left border
        borderBottom: '3px solid pink' // Add bottom border
    };

    return (
        <pre style={preStyle}>
            <code>
                <span style={pinkStyle}>apiVersion:</span> <span style={purpleStyle}>v1</span>
                <br />
                <span style={pinkStyle}>kind:</span> <span style={purpleStyle}>Service</span>
                <br />
                <span style={pinkStyle}>metadata:</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;name:</span> <span style={purpleStyle}>greetings-service-service</span>
                <br />
                <span style={pinkStyle}>spec:</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;selector:</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app:</span> <span style={purpleStyle}>greetings-service</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;ports:</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;- name:</span> <span style={purpleStyle}>greetings-service-service-port</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;protocol:</span> <span style={purpleStyle}>TCP</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port:</span> <span style={purpleStyle}>3456</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;targetPort:</span> <span style={purpleStyle}>5432</span>
                <br />
                <span style={pinkStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nodePort:</span> <span style={purpleStyle}>30001</span>
                <br />
                <span style={pinkStyle}>type:</span> <span style={purpleStyle}>LoadBalancer</span>
            </code>
        </pre>
    );
};


