
// CompositionRoot.tsx
import React from 'react';

export const TlsSecurityItem1: React.FC = () => {
    return (
        <pre>
            <code>
            {`
            <system.web>
              <compilation targetFramework="x.y.z" />
              <httpRuntime targetFramework="x.y.z" /> <-- this is the important one!
            </system.web>
            `}
            </code>
        </pre>
    );
};