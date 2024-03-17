import React from 'react';

export const MikeHadlowWritingDotnetServicesForKubernetes1
: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    > docker build -t greetings-service:0.0.1 --build-args build_number=1.0.0 .
    `.split('-').map((part, index, array) => (
        index === array.length - 1 ? part : (
            <React.Fragment key={index}>
                {part}
                <span style={pinkHyphenStyle}>-</span>
            </React.Fragment>
        )
    ));

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
};



