import React from 'react';

export const PKHuongNapaFFT3_1
: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    CL-USER> (napa-fft:fft '(0 1 2 3 4 5 6 7))
    #(#C(28.0d0 0.0d0) #C(-4.0d0 9.65685424949238d0) #C(-4.0d0 4.0d0)
      #C(-4.0d0 1.6568542494923806d0) #C(-4.0d0 0.0d0)
      #C(-4.0d0 -1.6568542494923806d0) #C(-4.0d0 -4.0d0)
      #C(-4.0d0 -9.65685424949238d0))
    
    ;; the same, but bit reversed
    CL-USER> (napa-fft:fft '(0 1 2 3 4 5 6 7) :in-order nil)
    #(#C(28.0d0 0.0d0) #C(-4.0d0 0.0d0) #C(-4.0d0 4.0d0) #C(-4.0d0 -4.0d0)
      #C(-4.0d0 9.65685424949238d0) #C(-4.0d0 -1.6568542494923806d0)
      #C(-4.0d0 1.6568542494923806d0) #C(-4.0d0 -9.65685424949238d0))
    
    ;; :scale nil is the default
    CL-USER> (napa-fft:fft '(0 1 2 3) :scale nil)
    #(#C(6.0d0 0.0d0) #C(-2.0d0 2.0d0) #C(-2.0d0 0.0d0) #C(-2.0d0 -2.0d0))
    
    ;; the same, but scaled by 1/4
    CL-USER> (napa-fft:fft '(0 1 2 3) :scale t)
    #(#C(1.5d0 0.0d0) #C(-0.5d0 0.5d0) #C(-0.5d0 0.0d0) #C(-0.5d0 -0.5d0))
    
    ;; again, scaled by 1/sqrt(4) = 1/2
    CL-USER> (napa-fft:fft '(0 1 2 3 5 6 7 8) :size 4 :scale :sqrt)
    #(#C(3.0d0 0.0d0) #C(-1.0d0 1.0d0) #C(-1.0d0 0.0d0) #C(-1.0d0 -1.0d0))
    `.split('-').map((part, index, array) => (
        index === array.length - 1 ? part : (
            <React.Fragment key={index}>
                {part}
                <span style={pinkHyphenStyle}>-</span>
            </React.Fragment>
        )
    ));

    return (
        <pre style={{ backgroundColor: 'white', color: 'black' }}>
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
};



