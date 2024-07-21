import React from 'react';

const SGugger_MathMLComponent_1: React.FC = () => {
    const mathMLCode = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>N</mi>
    </math>
    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default SGugger_MathMLComponent_1;
