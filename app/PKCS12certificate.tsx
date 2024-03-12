import React from 'react';

export const PKCS12certificate: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {`
          openssl pkcs12 -export -out localhost.pfx -inkey localhost.key -in localhost.crt`.split('-').map((part, index, array) => (
                   index === array.length - 1 ? part : <span key={index}>{part}-</span>
               ))}
            </code>
        </pre>
    );
};
