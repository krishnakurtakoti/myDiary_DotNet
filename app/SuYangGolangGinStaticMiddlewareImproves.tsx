import React from 'react';

const SuYangGolangGinStaticMiddlewareImproves = () => {
  return (
    <div style={{ backgroundColor: '#272822', padding: '10px', borderRadius: '5px' }}>
      <pre /* tabIndex="0" */ 
      style={{ color: '#f8f8f2', overflow: 'auto' }}> 
        <code className="language-go">
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#66d9ef' }}>func</span> <span style={{ color: '#a6e22e' }}>main</span>() {'{'}

            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#a6e22e' }}>router</span> <span style={{ color: '#f92672' }}>:=</span> <span style={{ color: '#a6e22e' }}>gin</span>.<span style={{ color: '#a6e22e' }}>Default</span>()
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#a6e22e' }}>router</span>.<span style={{ color: '#a6e22e' }}>Static</span>(<span style={{ color: '#e6db74' }}>&#34;</span><span style={{ color: '#e6db74' }}>/assets</span><span style={{ color: '#e6db74' }}>&#34;</span>, <span style={{ color: '#e6db74' }}>&#34;./assets&#34;</span>)
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#a6e22e' }}>router</span>.<span style={{ color: '#a6e22e' }}>StaticFS</span>(<span style={{ color: '#e6db74' }}>&#34;</span><span style={{ color: '#e6db74' }}>/more_static</span><span style={{ color: '#e6db74' }}>&#34;</span>, <span style={{ color: '#a6e22e' }}>http</span>.<span style={{ color: '#a6e22e' }}>Dir</span>(<span style={{ color: '#e6db74' }}>&#34;my_file_system&#34;</span>))
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#a6e22e' }}>router</span>.<span style={{ color: '#a6e22e' }}>StaticFile</span>(<span style={{ color: '#e6db74' }}>&#34;</span><span style={{ color: '#e6db74' }}>/favicon.ico</span><span style={{ color: '#e6db74' }}>&#34;</span>, <span style={{ color: '#e6db74' }}>&#34;./resources/favicon.ico&#34;</span>)
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
            <span>
              {/* Listen and serve on 0.0.0.0:8080 */}
            </span>
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <span style={{ color: '#a6e22e' }}>router</span>.<span style={{ color: '#a6e22e' }}>Run</span>(<span style={{ color: '#e6db74' }}>&#34;:8080&#34;</span>)
            </span>
          </span>
          <span style={{ display: 'flex' }}>
            <span>{'}'}</span>
          </span>
        </code>
      </pre>
    </div>
  );
};

export default SuYangGolangGinStaticMiddlewareImproves;
