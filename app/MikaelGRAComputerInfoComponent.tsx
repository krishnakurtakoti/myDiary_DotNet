import React from 'react';

const pinkStyle = {
    color: 'rgb(216, 31, 62)'
};

const purpleStyle = {
    color: 'purple'
};

const preStyle = {
    backgroundColor: 'lightgrey',
    color: 'black',
    padding: '10px 20px', // Add padding for the border effect
    borderLeft: '3px solid pink', // Add left border
    borderBottom: '3px solid pink' // Add bottom border
};

const MikaelGRAComputerInfoComponent: React.FC = () => {
    return (
        <pre style={preStyle}>
            <code>
                <span style={pinkStyle}>private</span> ComputerInfo[] CreateTypedRowsStartingAt( DateTime start, int rows )<br />
                &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var rng =  <span style={pinkStyle}>new</span> Random();<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var regions = <span style={pinkStyle}>new</span>[] &#123; &quot;west-eu&quot;, &quot;north-eu&quot;, &quot;west-us&quot;, &quot;east-us&quot;, &quot;asia&quot; &#125;;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var hosts = <span style={pinkStyle}>new</span>[] &#123; &#34;some-host&#34;, &#34;some-other-host&#34; &#125;;<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;var timestamp = start;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var infos = <span style={pinkStyle}>new</span> ComputerInfo[ rows ];<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={pinkStyle}>for</span> ( int i = 0 ; i &lt; rows ; i++ )<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;long ram = rng.Next( int.MaxValue );<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;double cpu = rng.NextDouble();<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string region = regions[ rng.Next( regions.Length ) ];<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string host = hosts[ rng.Next( hosts.Length ) ];<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var info = <span style={pinkStyle}>new</span> ComputerInfo &#123; Timestamp = timestamp, CPU = cpu, RAM = ram, Host = host, Region = region &#125;;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;infos[ i ] = info;<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp = timestamp.AddSeconds( 1 );<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={pinkStyle}>return</span> infos;<br />
                &#125;<br />
                <br />
                <span style={pinkStyle}>public async</span> Task Should_Write_Typed_Rows_To_Database()<br />
                &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var client = <span style={pinkStyle}>new</span> InfluxClient( <span style={pinkStyle}>new</span> Uri( &#34;http://localhost:8086&#34; ) );<br />
                &nbsp;&nbsp;&nbsp;&nbsp;var infos = CreateTypedRowsStartingAt( new DateTime( 2010, 1, 1, 1, 1, 1, DateTimeKind.Utc ), 500 );<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={pinkStyle}>await</span> client.WriteAsync( &#34;mydb&#34;, &#34;myMeasurementName&#34;, infos );<br />
                &#125;
            </code>
        </pre>
    );
};

export default MikaelGRAComputerInfoComponent;
