import React from 'react';

export const OpenSSLConfgurationFile: React.FC = () => {
    return (
        <pre>
            <code>
            {`
            [req]
            prompt                  = no
            default_bits            = 2048
            distinguished_name      = subject
            req_extensions          = req_ext
            x509_extensions         = x509_ext
            [subject]
            commonName              = localhost
            [req_ext]
            basicConstraints        = critical, CA:true
            subjectAltName          = @alt_names
            [x509_ext]
            basicConstraints        = critical, CA:true
            keyUsage                = critical, keyCertSign, cRLSign, digitalSignature,keyEncipherment
            extendedKeyUsage        = critical, serverAuth
            subjectAltName          = critical, @alt_names
            1.3.6.1.4.1.311.84.1.1  = ASN1:UTF8String:ASP.NET Core HTTPS development certificate
            [alt_names]
            DNS.1                   = localhost
            DNS.2                   = 127.0.0.1
            `}
            </code>
        </pre>
    );
};