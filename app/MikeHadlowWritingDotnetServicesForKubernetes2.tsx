import React from 'react';

export const MikeHadlowWritingDotnetServicesForKubernetes2: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: greetings-service-deployment
      labels:
        app: greetings-service
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: greetings-service
      template:
        metadata:
          labels:
            app: greetings-service
        spec:
          containers:
          - name: greetings-service
            image: greetings-service:0.0.1
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



