import React from 'react';

export const MuellerzBlogWeek1ComputationalLinearAlgebra3: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    dem = np.array([[6, 5, 3, 1],
        [3,6,2,2],
        [3,4,3,1]])
 
 p = np.array([[1.5, 1],
        [2., 2.5],
        [5., 4.5],
        [16., 17.]])
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
