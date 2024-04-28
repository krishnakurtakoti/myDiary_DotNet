import React from 'react';

export const MuellerzBlogWeek1ComputationalLinearAlgebra5: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    def loss(N):
    y = 0
    for x in range(N):
      y += (targ(x) - activ(x)) ** 2
    return y/N
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
