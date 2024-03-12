import React from 'react';

export const AddToOurTrustedCertificate: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {`
           > sudo cp localhost.crt /usr/local/share/ca-certificates
           > sudo update-ca-certificates`.split('-').map((part, index, array) => (
                   index === array.length - 1 ? part : <span key={index}>{part}-</span>
               ))}
            </code>
        </pre>
    );
};
