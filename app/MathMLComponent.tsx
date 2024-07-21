import React from 'react';

const MathMLComponent: React.FC = () => {
    const mathMLCode = `
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <msub>
            <mi>y</mi>
            <mrow class="MJX-TeXAtom-ORD">
              <mi>i</mi>
            </mrow>
          </msub>
          <mo>=</mo>
          <mfrac>
            <msup>
              <mrow class="MJX-TeXAtom-ORD">
                <mi mathvariant="normal">e</mi>
              </mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <msub>
                  <mi>z</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
              </mrow>
            </msup>
            <mrow>
              <msup>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi mathvariant="normal">e</mi>
                </mrow>
                <mrow class="MJX-TeXAtom-ORD">
                  <msub>
                    <mi>z</mi>
                    <mrow class="MJX-TeXAtom-ORD">
                      <mn>1</mn>
                    </mrow>
                  </msub>
                </mrow>
              </msup>
              <mo>+</mo>
              <mo>&#x22EF;</mo>
              <mo>+</mo>
              <msup>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi mathvariant="normal">e</mi>
                </mrow>
                <mrow class="MJX-TeXAtom-ORD">
                  <msub>
                    <mi>z</mi>
                    <mrow class="MJX-TeXAtom-ORD">
                      <mi>N</mi>
                    </mrow>
                  </msub>
                </mrow>
              </msup>
            </mrow>
          </mfrac>
          <mo>=</mo>
          <mfrac>
            <msup>
              <mrow class="MJX-TeXAtom-ORD">
                <mi mathvariant="normal">e</mi>
              </mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <msub>
                  <mi>z</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
              </mrow>
            </msup>
            <mrow>
              <munderover>
                <mo>&#x2211;</mo>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                  <mo>=</mo>
                  <mn>1</mn>
                </mrow>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>N</mi>
                </mrow>
              </munderover>
              <msup>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi mathvariant="normal">e</mi>
                </mrow>
                <mrow class="MJX-TeXAtom-ORD">
                  <msub>
                    <mi>z</mi>
                    <mrow class="MJX-TeXAtom-ORD">
                      <mi>k</mi>
                    </mrow>
                  </msub>
                </mrow>
              </msup>
            </mrow>
          </mfrac>
          <mo>.</mo>
        </math>
    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default MathMLComponent;
