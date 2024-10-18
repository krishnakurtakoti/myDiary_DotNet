import React from 'react';
// import './CodeHighlighter.css'; // Assuming you have a CSS file for additional styling

const ScottHanselmanCodeHighlighter = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <div id="highlighter_641962" className="syntaxhighlighter nogutter csharp">
        <table 
        //border="0" cellPadding="0" cellSpacing="0"
        >
          <tbody>
            <tr>
              <td className="codeScottHanselman">
                <div className="container">
                  <div className="line number1 index0 alt2">
                    <code className="csharp keyword">public</code>{' '}
                    <code className="csharp keyword">static</code>{' '}
                    <code className="csharp keyword">void</code>{' '}
                    <code className="csharp plain">Main(</code>
                    <code className="csharp keyword">string</code>
                    <code className="csharp plain">[] args)</code>
                  </div>
                  <div className="line number2 index1 alt1">
                    <code className="csharp plain">{'{'}</code>
                  </div>
                  <div className="line number3 index2 alt2">
                    <code className="csharp spaces">&nbsp;&nbsp;</code>
                    <code className="csharp plain">CreateHostBuilder(args).Build().Run();</code>
                  </div>
                  <div className="line number4 index3 alt1">
                    <code className="csharp plain">{'}'}</code>
                  </div>
                  <div className="line number5 index4 alt2">&nbsp;</div>
                  <div className="line number6 index5 alt1">
                    <code className="csharp keyword">public</code>{' '}
                    <code className="csharp keyword">static</code>{' '}
                    <code className="csharp plain">IHostBuilder CreateHostBuilder(</code>
                    <code className="csharp keyword">string</code>
                    <code className="csharp plain">[] args) =&gt;</code>
                  </div>
                  <div className="line number7 index6 alt2">
                    <code className="csharp spaces">&nbsp;&nbsp;</code>
                    <code className="csharp plain">Host.CreateDefaultBuilder(args).</code>
                  </div>
                  <div className="line number8 index7 alt1">
                    <code className="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code className="csharp plain">ConfigureWebHostDefaults(WebHostBuilder =&gt; WebHostBuilder.UseStartup&lt;Startup&gt;());</code>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScottHanselmanCodeHighlighter;
