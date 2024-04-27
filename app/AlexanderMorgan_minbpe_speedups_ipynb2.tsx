import React from 'react';

export const AlexanderMorgan_minbpe_speedups_ipynb2: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    from collections import Counter, defaultdict

    def get_stats(ids):
        counts = {}
        for pair in zip(ids, ids[1:]): # Pythonic way to iterate consecutive elements
            counts[pair] = counts.get(pair, 0) + 1
        return counts
    
    def get_stats2(ids):   # using collections.Counter
        return Counter(zip(ids, ids[1:]))
    
    def get_stats3(ids):   # using collections.defaultdict
        counts = defaultdict(int)
        for pair in zip(ids, ids[1:]):
            counts[pair] += 1   # the defaultdict makes it safe to reference a missing key, saving us the .get calls
        return counts
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
