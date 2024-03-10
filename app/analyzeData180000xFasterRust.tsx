import React from 'react';

export const AnalyzeData180000xFasterRust: React.FC = () => {
    return (
        <pre>
            <code>
            {`
           [
            {
              "user": "5ea2c2e3-4dc8-4a5a-93ec-18d3d9197374",
              "question": "7d42b17d-77ff-4e0a-9a4d-354ddd7bbc57",
              "score": 1
            },
            {
              "user": "b7746016-fdbf-4f8a-9f84-05fde7b9c07a",
              "question": "7d42b17d-77ff-4e0a-9a4d-354ddd7bbc57",
              "score": 0
            },  
            /* ... more data ... */
           ]


            PsuedoCode: 
            func k_corrset($data, $k):
                $all_qs = all questions in $data
                for all $k-sized subsets $qs within $all_qs:
                    $us = all users that answered every question in $qs
                    $qs_totals = the total score on $qs of each user in $us
                    $grand_totals = the grand score on $all_qs of each user in $us
                    $r = correlation($qs_totals, $grand_totals)
                return $qs with maximum $r  

            Python Baseline:

                from itertools import combinations
                import pandas as pd
                from pandas import IndexSlice as islice
                
                def k_corrset(data, K):
                    all_qs = data.question.unique()
                    q_to_score = data.set_index(['question', 'user'])
                    all_grand_totals = data.groupby('user').score.sum().rename('grand_total')
                
                    corrs = []
                    for qs in combinations(all_qs, K):
                        qs_data = q_to_score.loc[islice[qs,:],:].swaplevel()
                        answered_all = qs_data.groupby(level=[0]).size() == K
                        answered_all = answered_all[answered_all].index
                        qs_totals = qs_data.loc[islice[answered_all,:]] /
                            .groupby(level=[0]).sum().rename(columns={'score': 'qs'})
                        r = qs_totals.join(all_grand_totals).corr().qs.grand_total
                        corrs.append({'qs': qs, 'r': r})
                    corrs = pd.DataFrame(corrs)
                
                    return corrs.sort_values('r', ascending=False).iloc[0].qs
                
                data = pd.read_json('scores.json')
                print(k_corrset(data, K=5))

            `}
            </code>
        </pre>
    );
};