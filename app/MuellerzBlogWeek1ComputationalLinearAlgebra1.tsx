import React from 'react';

export const MuellerzBlogWeek1ComputationalLinearAlgebra1: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    import numpy as np

    i = np.array([[.85,.1,.05,0]])
    mat = np.array([[.9,.07,.02,.01],
                    [0,.93,.05,.02],
                    [0,0,.85,.15],
                    [0,0,0,1]])
    
    res = mat.T @ i.T
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
