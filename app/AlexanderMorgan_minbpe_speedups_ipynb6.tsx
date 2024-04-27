import React from 'react';

export const AlexanderMorgan_minbpe_speedups_ipynb6: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    def merge2(ids, pair, idx):
    newids = []
    i = 0
    stop = len(ids) - 1
    while i < stop:
        # if the pair matches, replace it
        if ids[i] == pair[0] and ids[i+1] == pair[1]:
            newids.append(idx)
            i += 2
        else:
            newids.append(ids[i])
            i += 1
    if i == stop:   # if the last pair was not replaced, append the last token
        newids.append(ids[-1])
    return newids
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
