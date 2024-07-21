import React from 'react';

const SGugger_MathMLComponent_5_Operation: React.FC = () => {
    const mathMLCode = `
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>y</mi>
  <mo>=</mo>
  <mo>&#x2211;<!-- ∑ --></mo>
  <msub>
    <mi>w</mi>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>i</mi>
      <mo>,</mo>
      <mi>j</mi>
    </mrow>
  </msub>
  <msub>
    <mi>x</mi>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>i</mi>
      <mo>,</mo>
      <mi>j</mi>
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

export default SGugger_MathMLComponent_5_Operation;
