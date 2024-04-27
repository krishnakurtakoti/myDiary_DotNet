import React from 'react';

export const AlexanderMorgan_minbpe_speedups_ipynb1: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    text = "Ｕｎｉｃｏｄｅ! 🅤🅝🅘🅒🅞🅓🅔‽ 🇺‌🇳‌🇮‌🇨‌🇴‌🇩‌🇪! 😄 The very name strikes fear and awe into 
    the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software
     (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse,
      and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports,
       and notes can be more than a little intimidating. I don’t blame programmers for still finding 
       the whole thing mysterious, even 30 years after Unicode’s inception."
    tokens = text.encode("utf-8") # raw bytes
    tokens = [*map(int, tokens)] # convert to a list of integers in range 0..255 for convenience
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
