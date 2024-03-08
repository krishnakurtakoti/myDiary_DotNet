import React from 'react';

export const ReadReplicaRails: React.FC = () => {
    return (
        <pre>
            <code>
            {`
            # Read from the replica database
            r = Role.where(name: 'manager').first
            r.description = 'Manager'
            
            # Save changes back to the primary database
            r.save!
 
            Example showing how reads within a transaction go to the primary

            Role.transaction do
            r = Role.where(name: 'manager').first
            r.description = 'Manager'
            r.save!
            end
            `}
            </code>
        </pre>
    );
};