import React from 'react';

export const AmitMishraCumulativeDistributonPlotsForFrequencyDataInR: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    library(dplyr)
    library(ggplot2)
    running_log <- data.frame(person_id=1:10000, 
                            num_active_days=rpois(10000, lambda=15)) %>% 
    transmute(num_active_days=ifelse(num_active_days<=30, num_active_days, 30))
    tbl_df(running_log)
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
