
// CompositionRoot.tsx
import React from 'react';

export const TlsSecurityItem: React.FC = () => {
    return (
        <pre>
            <code>
            {`
            <configuration>
              <runtime>
                <AppContextSwitchOverrides value="Switch.System.Net.DontEnableSystemDefaultTlsVersions=false"/>
              </runtime>
            </configuration>
            `}
            </code>
        </pre>
    );
};