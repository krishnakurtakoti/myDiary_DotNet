import React from 'react';

export const MuellerzBlogWeek1ComputationalLinearAlgebra6: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    def grad(N, w, b):
    y = 0
    for x in range(N):
      y += (targ(x) - actf(x)) ** 2
    return y/N
  
  def actf(x, w, b):
    y = 0
    for i in range(abs(x)):
      y += (w[i] * x[i] + b)
    return max(0, y)
    `.split(' ').map((part, index, array) => (
        index === array.length - 1 ? part : (
            <React.Fragment key={index}>
                {part}
                <span style={pinkHyphenStyle}> </span>
            </React.Fragment>
        )
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <pre style={{ backgroundColor: 'lightgrey', color: 'black', display: 'inline-block' }}>
                <code>
                    {codeSnippet}
                </code>
            </pre>
        </div>
    );
};
