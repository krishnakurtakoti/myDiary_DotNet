import React from 'react';

const SGugger_MathMLComponent_3: React.FC = () => {
    const mathMLCode = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msub>
      <mi>y</mi>
      <mrow class="MJX-TeXAtom-ORD">
        <mn>1</mn>
      </mrow>
    </msub>
    <mo>,</mo>
    <mo>&#x2026;<!-- … --></mo>
    <mo>,</mo>
    <msub>
      <mi>y</mi>
      <mrow class="MJX-TeXAtom-ORD">
        <mi>N</mi>
      </mrow>
    </msub>
  </math>
    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default SGugger_MathMLComponent_3;
