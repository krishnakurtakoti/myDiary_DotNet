import React from 'react';

export const VerifyCertificateIsTrusted: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {`
            > openssl verify localhost.crt

            localhost.crt: OK`.split('-').map((part, index, array) => (
                   index === array.length - 1 ? part : <span key={index}>{part}-</span>
               ))}
            </code>
        </pre>
    );
};
