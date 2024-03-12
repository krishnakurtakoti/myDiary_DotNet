import React from 'react';

export const VerifyCurrentlyNotTrustedCertificate: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {`
            > openssl verify localhost.crt

            CN = localhost
            error 18 at 0 depth lookup: self signed certificate
            error localhost1.crt: verification failed`.split('-').map((part, index, array) => (
                   index === array.length - 1 ? part : <span key={index}>{part}-</span>
               ))}
            </code>
        </pre>
    );
};
