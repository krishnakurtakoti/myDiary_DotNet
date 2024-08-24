import React from 'react';

const BalasubramaniumDisciplinedConvexOptimizationMLComponent2: React.FC = () => {
    const mathMLCode = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <!-- Variable v -->
  <mi>v</mi>

  <!-- Convex functions: f0, f1, ..., fm -->
  <mo>:</mo>
  <mfenced separators=",">
    <msub>
      <mi>f</mi>
      <mn>0</mn>
    </msub>
    <msub>
      <mi>f</mi>
      <mn>1</mn>
    </msub>
    <mo>...</mo>
    <msub>
      <mi>f</mi>
      <mi>m</mi>
    </msub>
  </mfenced>

  <!-- Affine functions: g1, ..., gp -->
  <mo>;</mo>
  <mfenced separators=",">
    <msub>
      <mi>g</mi>
      <mn>1</mn>
    </msub>
    <mo>...</mo>
    <msub>
      <mi>g</mi>
      <mi>p</mi>
    </msub>
  </mfenced>

  <!-- Text description -->
  <mo>&#xA0;</mo>
  <mtext>where v is the variable, f0, f1, ..., fm are convex, and g1, ..., gp are affine.</mtext>
</math>

    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default BalasubramaniumDisciplinedConvexOptimizationMLComponent2;
