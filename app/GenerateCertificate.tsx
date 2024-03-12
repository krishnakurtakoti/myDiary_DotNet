import React from 'react';

export const GenerateCertificate: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {`
            > openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
               -keyout localhost.key \\
               -out localhost.crt \\
               -config localhost.conf`.split('-').map((part, index, array) => (
                   index === array.length - 1 ? part : <span key={index}>{part}-</span>
               ))}
            </code>
        </pre>
    );
};
