import React from 'react';

const SampleComponent = () => {
  return (
    <div className="row pr-2">
      <div className="col-sm-12">
        <h3>In this article</h3>
        <ul>
          <li>
            <a href="#video-section" style={{ textDecoration: 'underline' }}>
              Install Git, Clone a project (Windows)
            </a>
          </li>
        </ul>
       
        <div id="video-section">
          {/* You can add any content related to the video here */}
          <h4>Video Details</h4>
          <p>This section can include additional information about the video or its content.</p>
          <p style={{ fontSize: '28px' }}>
            Following this video &quot;Install Git, Clone a project (Windows)&quot;{' '}
            <a
                href="https://www.youtube.com/watch?v=Jge57UHvYto&list=WL&index=3"
                style={{ textDecoration: 'underline' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.youtube.com/watch?v=Jge57UHvYto&list=WL&index=3
            </a>{' '}
            for Git Installation on Windows 10 worked for me.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SampleComponent;
