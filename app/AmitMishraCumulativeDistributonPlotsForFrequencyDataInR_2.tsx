import React from 'react';

export const AmitMishraCumulativeDistributonPlotsForFrequencyDataInR_2: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    ## Source: local data frame [10,000 x 1]
    ## 
    ##    num_active_days
    ## 1               14
    ## 2               12
    ## 3               13
    ## 4               12
    ## 5               17
    ## 6               18
    ## 7               16
    ## 8               18
    ## 9               16
    ## 10              11
    ## ..             ...
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
