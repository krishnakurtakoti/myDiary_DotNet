import React from 'react';

const BalasubramaniumDisciplinedConvexOptimizationMLComponent1: React.FC = () => {
    const mathMLCode = `
       <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="left left" rowspacing="4pt" columnspacing="1em">
    <mtr>
      <mtd>
        <munder>
          <mstyle displaystyle="false" scriptlevel="0">
            <mtext>minimize</mtext>
          </mstyle>
          <mi>v</mi>
        </munder>
      </mtd>
      <mtd>
        <msub>
          <mi>f</mi>
          <mn>0</mn>
        </msub>
        <mo stretchy="false">(</mo>
        <mi>v</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mstyle displaystyle="false" scriptlevel="0">
          <mtext>subject to</mtext>
        </mstyle>
      </mtd>
      <mtd>
        <msub>
          <mi>f</mi>
          <mi>i</mi>
        </msub>
        <mo stretchy="false">(</mo>
        <mi>v</mi>
        <mo stretchy="false">)</mo>
        <mo>&#x2264;<!-- ≤ --></mo>
        <mn>0</mn>
        <mo>,</mo>
        <mspace width="1em" />
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
        <mo>,</mo>
        <mo>&#x2026;<!-- … --></mo>
        <mo>,</mo>
        <mi>M</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd />
      <mtd>
        <msub>
          <mi>g</mi>
          <mi>i</mi>
        </msub>
        <mo stretchy="false">(</mo>
        <mi>v</mi>
        <mo stretchy="false">)</mo>
        <mo>=</mo>
        <mn>0</mn>
        <mo>,</mo>
        <mspace width="1em" />
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
        <mo>,</mo>
        <mo>&#x2026;<!-- … --></mo>
        <mo>,</mo>
        <mi>P</mi>
      </mtd>
    </mtr>
  </mtable>
</math>
    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default BalasubramaniumDisciplinedConvexOptimizationMLComponent1;
