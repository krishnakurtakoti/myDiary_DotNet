import React from 'react';

export const MikeHadlowWritingDotnetServicesForKubernetes4: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    > kubectl apply -f greetings-service-deployment.yaml
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



