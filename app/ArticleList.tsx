import React from 'react';
import Tag from './Tag';
import ShayRojanskyAccordion from './ShayRojanskyAccordion';
import { SingleMultiStageDockerKubernetes1 } from './SingleMultiStageDockerKubernetes1';
import { MikeHadlowWritingDotnetServicesForKubernetes1 } from './MikeHadlowWritingDotnetServicesForKubernetes1';
import { MikeHadlowWritingDotnetServicesForKubernetes4 } from './MikeHadlowWritingDotnetServicesForKubernetes4';
import { MikeHadlowWritingDotnetServicesForKubernetes3 } from './MikeHadlowWritingDotnetServicesForKubernetes3';
import { MikeHadlowWritingDotnetServicesForKubernetes2 } from './MikeHadlowWritingDotnetServicesForKubernetes2';

const ArticlesListComponent = () => {
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
          <li>
            <a href="#Back-to-NET-Basics" style={{ textDecoration: 'underline' }}>
            Back to .NET Basics: How to properly use HttpClient
            </a>
          </li>
          <li>
            <a href="#jimmybogard" style={{ textDecoration: 'underline' }}>
            Jimmy Bogard - Testing <strong>End-to-End Integration Testing with NServiceBus: How It Works</strong> 14/6/2020 <strong> Avoid In-Memory Databases for Tests </strong> 18/3/2020
            <strong> Integration Testing with xUnit</strong> 27/8/2019 <strong>Respawn vs SQL Server Snapshots</strong> 05/10/2017 <strong>Respawn 1.0.0 released</strong> 27/9/2017
            </a>
          </li>
          <li>
            <a href="#shayRojanskyAccordion" style={{ textDecoration: 'underline' }}>
            Shay Rojansky - Microsoft software engineer working on .NET data access and perf, member of the Entity Framework team. Lead dev of Npgsql, the PostgreSQL provider.
            <strong>Queryable PostgreSQL arrays in EF Core 8.0</strong> 2023 <strong>When &#34;UTC everywhere&#34; isn&#39;t enough - storing time zones in PostgreSQL and SQL Server</strong>
            2021 <strong>Query parameters, batching and SQL rewriting</strong> 7 minute read, 2021</a> 
          </li>
          <li>
            <a href="#robconery_github_repo" style={{ textDecoration: 'underline' }}>
            Rob Conery - A simple abstraction for working with PostgreSQL as a Document Database
            </a>
          </li>
          <li>
            <a href="#robconery_bigmachine_Postgres_archive" style={{ textDecoration: 'underline' }}>
            Rob Conery - https://bigmachine.io/posts - Postgres
            </a>
          </li>
          <li>
            <a href="#bigmachine_io_courses_sql-orbit" style={{ textDecoration: 'underline' }}>
            Rob Conery - PostgreSQL Fundamentals - You'll learn the basics of SQL and databases using PostgreSQL and you'll have the time of your life doing it. We use a real set of data: the analysis data from Cassini's flybys of Enceladus. There might actually be life up there and you're going to query the data to find out!
            </a>
          </li>
          
          <li>
            <a href="#timheuer_com_blog_deploy-dotnet-apps-with-containers-in-visual-studio-fast-and-easy" style={{ textDecoration: 'underline' }}>
            Tim Heuer - Contain your excitement for ASP.NET on Azure | 27 January 2023 | Comments | Posted in .net dotnet devops cloud azure
            </a>
          </li>
          <li>
            <a href="#Writing-NET-Application-Services-for-Kubernetes-By-Mike-Hadlow" style={{ textDecoration: 'underline' }}>
            Mike Hadlow - Writing .NET Application Services for Kubernetes By  | 24 06 2023 | Comments | Posted in .net dotnet devops kubernetes 
            </a>
          </li>       <li>
            <a href="#Mike-Hadlow" style={{ textDecoration: 'underline' }}>
            Mike Hadlow - <strong>Writing .NET Application Services for Kubernetes</strong> 24/6/2023  <strong>C#: Add event handlers dynamically using reflection</strong> 28/4/2022 <strong>Blocking XREAD From A Redis Stream Using StackExchange.Redis</strong> 18/2/2022 
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

        <div id="Back-to-NET-Basics">
          {/* You can add any content related to the video here */}
          <h4>Video Details</h4>
                <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                    <div className="col-sm-12">
                        <span>
                            <a href="https://www.mytechramblings.com/posts/dotnet-httpclient-basic-usage-scenarios/" style={{ textDecoration: 'underline' }}>https://www.mytechramblings.com/posts/dotnet-httpclient-basic-usage-scenarios/</a>
                            <i className="bi bi-calendar-date flex">3/8/23</i>
                        </span>
                        <p className="font-size: 28px;">
                            Back to .NET Basics: How to properly use HttpClient
                        </p>
                    </div>
                    <div className="tags">
                        <span className="bold">Tags: </span>
                        <Tag value="IHttpClientFactory" />
                    </div>
                </div>
        </div>





        <div id="jimmybogard">

                            <div className="jimmybogard-row pr-2" style={{ padding: '.75em 1em', background: 'var(--jimmybogard-background-color)' }}>
                    <div className="jimmybogard-col-sm-12">

                    <h1 className="article-title">About Me</h1>
                    <p>Hi, I&#39;m Jimmy Bogard. I&#39;m a software developer, architect, consultant, author, blogger, OSS maintainer, trainer, and speaker. I&#39;ve worked at startups, product companies, corporate IT shops, and consulting firms.</p>
                    <p>I started out in the software world back in 2000, building websites with FrontPage 2000 and ASP and moved on to building web apps with .NET when it released. Since then, I&#39;ve shipped systems in just about every industry.</p>

                    <p>Over the years, I&#39;ve strived to improve how I and my teams deliver value to the clients, customers, and end-users. That has led me down the path of exploring Agile, Domain-Driven Design, REST, messaging, distributed systems, and anything else I thought could help.</p>
                    <p>Along the way, I&#39;ve tried to share what I&#39;ve learned, blogging, speaking, and training. I also share OSS projects that I&#39;ve built and used along the way, including <a href="https://github.com/automapper/automapper?ref=jimmybogard.com" rel="noreferrer" style={{ textDecoration: 'underline' }}>AutoMapper</a>, <a href="https://github.com/jbogard/mediatr?ref=jimmybogard.com" rel="noreferrer" style={{ textDecoration: 'underline' }}>MediatR</a>, and <a href="https://github.com/jbogard/respawn?ref=jimmybogard.com" rel="noreferrer" style={{ textDecoration: 'underline' }}>Respawn</a>. Because of those efforts, I&#39;ve received the <a href="https://mvp.microsoft.com/en-US/mvp/profile/258878ba-3c9a-e411-93f2-9cb65495d3c4?ref=jimmybogard.com" rel="noreferrer" style={{ textDecoration: 'underline' }}>Microsoft MVP award</a> every year since 2009, and <a href="https://particular.net/champions?ref=jimmybogard.com#jimmy-bogard" rel="noreferrer" style={{ textDecoration: 'underline' }}>NServiceBus Champ</a>.</p>

                    <h1 className="post-card-title">Testing</h1>
                    <p>A collection of 6 posts</p>
                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/end-to-end-integration-testing-with-nservicebus-how-it-works/">
                        <header className="post-card-header">
                            <div className="post-card-tags">
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            End-to-End Integration Testing with NServiceBus: How It Works
                            </h1>
                        </header>
                        <div className="post-card-excerpt">In my last post, I walked through setting up end-to-end integration testing with NServiceBus, and how we can use it to black box test message endpoints similar to how the ASP.NET Core integration testing works. In this post, I want to walk through how it all works underneath the covers.
                        </div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Jul 14, 2020</time>
                        <span className="post-card-meta-length"> . 6 min read</span>
                        </footer>
                    </div>


                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/end-to-end-integration-testing-with-nservicebus/">
                        <header className="post-card-header">
                            <div className="post-card-tags">
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            End-to-End Integration Testing with NServiceBus
                            </h1>
                        </header>
                        <div className="post-card-excerpt">One of the interesting side effects of adding diagnostic events to infrastructure is that you can now &#34;listen in&#34; to what&#39;s going on in your applications for black box testing. This can be especially useful in scenarios where you&#39;re building on top of a framework that includes a lot of built-in behavior, such as ASP.NET Core and NServiceBus.
                        </div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Jul 8, 2020</time>
                        <span className="post-card-meta-length"> . 3 min read</span>
                        </footer>
                    </div>


                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/avoid-in-memory-databases-for-tests/">
                        <header className="post-card-header">
                            <div className="post-card-tags">
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            Avoid In-Memory Databases for Tests
                            </h1>
                        </header>
                        <div className="post-card-excerpt">A controversial GitHub issue came to my attention a couple of weeks ago around ditching the in-memory provider for Entity Framework Core. This seemed like a no-brainer to me - these database providers are far from trivial to maintain, even for in-memory strategies.</div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Mar 18, 2020</time>
                        <span className="post-card-meta-length"> . 6 min read</span>
                        </footer>
                    </div>


                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/integration-testing-with-xunit/">
                        <header className="post-card-header">
                            <div className="post-card-tags">
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            Integration Testing with xUnit
                            </h1>
                        </header>
                        <div className="post-card-excerpt">A few years back, I had given up on xUnit in favor of Fixie because of the flexibility that Fixie provides. The xUnit project is highly opinionated, and geared strictly towards unit tests. It&#39;s great for that.</div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Mar 18, 2020</time>
                        <span className="post-card-meta-length"> . 6 min read</span>
                        </footer>
                    </div>


                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/respawn-vs-sql-server-snapshots/">
                        <header className="post-card-header">
                            <div className="post-card-tags">
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            Respawn vs SQL Server Snapshots
                            </h1>
                        </header>
                        <div className="post-card-excerpt">One of the newer features of SQL Server is the ability to snapshot a database at a point in time, and restore it. A commenter on the Respawn announcement asked if I had looked at this feature for resetting a test database to a known point. I hadn&#39;t,</div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Oct 5, 2017</time>
                        <span className="post-card-meta-length"> . 2 min read</span>
                        </footer>
                    </div>



                    <div className="post-card-content">
                        <a className="post-card-content-link" href="https://www.jimmybogard.com/respawn-1-0-0-released/">
                        <header className="post-card-header">
                            <div className="post-card-tags"  style={{ marginBottom: '6px !important' }}>
                            <span className="post-card-primary-tag">Testing</span>
                            </div>
                            <h1 className="post-card-title">
                            Respawn 1.0.0 released
                            </h1>
                        </header>
                        <div className="post-card-excerpt">
                        Respawn is a small library to help reset your database to a known state before tests. If you&#39;re like our teams and rely on integration/subcutaneous tests as your final &#34;green&#34; test for feature complete, keeping a consistent database state can be frustrating. Respawn solves this.
                        </div>
                        </a>

                        <footer className="post-card-meta" style={{ marginBottom: '6px !important' }}>
                        <time className="post-card-meta-date" dateTime="2017-09-27">Sep 27, 2017</time>
                        <span className="post-card-meta-length"> . 1 min read</span>
                        </footer>

                    </div>

                    <p>Extra_End</p>
                    </div>

                    <div className="jimmybogard-tags">
                    <span className="jimmybogard-bold">Tags: </span> 
                    <Tag value="" />
                    </div>
                    </div>

            </div>


            <div id="shayRojanskyAccordion">

                    <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                        <div className="col-sm-12">
          
                            <div className="a row pr-2" style={{ padding: '.75em 1em' }}>

                                <ShayRojanskyAccordion />          
                            </div>
                         </div>
                    </div>
            </div>



            <div id="robconery_github_repo">


            <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                    <div className="col-sm-12">


                    <div className="col-sm-12 col-lg-4 mt-6">
                    <div className="rob-conery-card card shadow h-100">

                    <div className="Box d-flex p-3 width-full public source">
                    <div className="pinned-item-list-item-content">
                        <div className="d-flex width-full position-relative">
                        <div className="flex-1">
                            <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-repo mr-1 color-fg-muted"
                            >
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                            </svg>
                            <span data-view-component="true" className="position-relative">
                            <a
                                data-hydro-click='{"event_type":"user_profile.click","payload":{"profile_user_id":78586,"target":"PINNED_REPO","user_id":30724917,"originating_url":"https://github.com/robconery"}}'
                                data-hydro-click-hmac="1f9793af5daf9aa151c02f784c543bdb5bdb533fb74150089f7e507bc1329cd0"
                                id="42259641"
                                href="https://github.com/robconery/pg_docs_api"
                                data-view-component="true"
                                className="Link mr-1 text-bold wb-break-word"
                                aria-labelledby="tooltip-6baf9a22-427b-4407-9260-e2fbc25d7c37"
                            >
                                <span className="repo">pg_docs_api</span>
                            </a>
                            {/* <tool-tip
                                id="tooltip-6baf9a22-427b-4407-9260-e2fbc25d7c37"
                                for="42259641"
                                popover="manual"
                                data-direction="s"
                                data-type="label"
                                data-view-component="true"
                                className="sr-only position-absolute"
                                aria-hidden="true"
                                role="tooltip"
                            >
                                pg_docs_api
                            </tool-tip> */}
                            </span>
                            <span></span>
                            <span className="Label Label--attention v-align-middle mt-1 no-wrap v-align-baseline Label--inline">
                            Public archive
                            </span>
                        </div>
                        </div>

                        <p className="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
                        A simple abstraction for working with PostgreSQL as a Document Database
                        </p>
                    
                        <p className="mb-0 mt-2 f6 color-fg-muted">
                        <a href="https://github.com/robconery/pg_docs_api/stargazers" className="pinned-item-meta Link--muted">
                            <svg
                            aria-label="stars"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-star"
                            >
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                            </svg>
                            41
                        </a>
                        <a href="https://github.com/robconery/pg_docs_api/forks" className="pinned-item-meta Link--muted">
                            <svg
                            aria-label="forks"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-repo-forked"
                            >
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                            </svg>
                            8
                        </a>
                        </p>

                        <p dir="auto">I deprecated this project in favor a more streamlined approach, <a href="https://github.com/robconery/dox">which you can see here</a>.</p>

                        </div>
                    </div>

                    </div>
                    </div>

                    </div>
                    </div>


            </div>


                    <div id="robconery_bigmachine_Postgres_archive">
                                            <div className="rob-conery row pr-2" style={{ padding: '.75em 1em' }}>
                                            <div className="col-sm-12">

                                            <h2>Postgres</h2>
                                            <ul>

                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/schedules-and-timespans-in-postgresql">Using Constraints to Protect Calendar Data in PostgreSQL</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/handling-dates-and-times-properly-in-postgres">Handling Dates and Times Properly in Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/striking-gold">Striking Gold in My Archives</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/the-easiest-postgres-experience-youve-ever-seen">The Easiest Postgres Experience You&#39;ve Ever Seen</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/creating-a-full-text-search-engine-in-postgresql-2022">Creating a Full Text Search Engine in PostgreSQL, 2022</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/importing-a-csv-into-postgresql-like-a-pro">Importing a CSV Into PostgreSQL Like a Pro</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/postgresql-tools-for-the-visually-inclined">PostgreSQL Tools for the Visually Inclined</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/a-pure-postgresql-document-database-api">A Pure PostgreSQL Document Database API</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/interview-on-net-rocks-about-a-curious-moon">Interview On .NET Rocks About A Curious Moon</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/my-new-book-about-postgresql-data-and-saturn-a-curious-moon">My New Book About PostgreSQL, Data and Saturn: A Curious Moon</a>
                                                    </li>
                                                    <li>
                                                    <a href="https://bigmachine.io/postgres/my-writing-process-this-week">My Writing Process (This Week)</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/jsonb-and-postgresql">JSONB and PostgreSQL: Work Faster By Ditching Migrations</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/postgresql-document-api-part-4-complex-queries">PostgreSQL Document API Part 4: Complex Queries</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/postgresql-document-api-part-3-finding-things">PostgreSQL Document API Part 3: Finding Things</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/postgresql-document-api-part-2-full-text-search-and-bulk-save">PostgreSQL Document API Part 2: Full Text Search and Bulk Save</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/designing-a-postgresql-document-api">Designing a PostgreSQL Document API</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/membership-in-a-box-with-pg-auth">Membership In a Box with PG-Auth</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/document-storage-gymnastics-in-postgres">Document Storage Gymnastics with Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/embracing-sql-in-postgres">Embracing SQL In Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/its-time-to-get-over-that-stored-procedure-aversion-you-have">It&#39;s Time To Get Over That Stored Procedure Aversion You Have</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/inserting-using-new-record-postgres">Inserting And Using A New Record In Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/using-custom-types-with-postgres">Using Custom Types in Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/pulling-documents-from-a-relational-query-in-postgres">Pulling Documents From a Relational Query in Postgres</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/a-better-id-generator-for-postgresql">A Better ID Generator For PostgreSQL</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/using-entity-framework-6-with-postgresql">Using Entity Framework 6 with PostgreSQL</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/postgresql-rising">PostgreSQL Rising</a>
                                                    </li>
                                                    <li>
                                                    <a href="/postgres/how-to-backup-your-postgres-db-to-amazon-nightly">How To Backup Your Postgres DB To Amazon Nightly</a>
                                                    </li>
                                                </ul>



                                            </div>
                                            </div>
                    </div>

                                <div id="bigmachine_io_courses_sql-orbit">
                                    


                                        <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                                        <div className="col-l-2">


                                        <div className="col-sm-12 col-lg-4 mt-6">
                                                <div className="rob-conery-card card shadow h-100">
                                                {/* Image */}
                                                <a href="/courses/sql-orbit">
                                                    <img
                                                    src="https://bigmachine.io/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6Mjc4LCJwdXIiOiJibG9iX2lkIn19--eccb4609c8605c55d8edc14ab29c813ba9ee2fab/eyJfcmFpbHMiOnsiZGF0YSI6e30sInB1ciI6InZhcmlhdGlvbiJ9fQ==--743878b0228ee81b4587d6ab790a4e67ea599217/sql-orbit.jpg"
                                                    className="card-img-top"
                                                    alt="course image"
                                                    />
                                                </a>
                                                {/* Card body */}
                                                <div className="card-body pb-0">
                                                    {/* Title */}
                                                    <a href="https://bigmachine.io/courses/sql-orbit">
                                                    <h5 className="card-title fw-normal">PostgreSQL Fundamentals</h5>
                                                    </a>
                                                    <p className="mb-2 text-sm" style={{ fontSize: '.8em' }}>
                                                    You&#39;ll learn the basics of SQL and databases using PostgreSQL and you&#39;ll have the time of your life doing it. We use a real set of data: the analysis data from Cassini&#39;s flybys of Enceladus. There might actually be life up there and you&#39;re going to query the data to find out!
                                                    </p>
                                                </div>

                                                <div className="card-footer pt-0 pb-3">
                                                    <hr />
                                                    <div className="d-flex justify-content-between">
                                                    <span className="h6 fw-light mb-0">
                                                        <i className="far fa-clock text-danger me-2"></i>
                                                    </span>
                                                    <span className="h6 fw-light mb-0">
                                                        <i className="fas fa-table text-orange me-2"></i>28 Videos
                                                    </span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>



                                        </div>
                                        </div>
                                </div>

                                <div id="timheuer_com_blog_deploy-dotnet-apps-with-containers-in-visual-studio-fast-and-easy">

                                <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                                    <div className="col-sm-12">
                                    <h1>
                                    <a href="https://timheuer.com/blog/deploy-dotnet-apps-with-containers-in-visual-studio-fast-and-easy/" 
                                            rel="canonical" 
                                            // itemprop="url" 
                                            className="a tim-heuer-link">
                                            Contain your excitement for ASP.NET on Azure
                                            </a>
                                    </h1>
                                    
                                    <h2 id="creating-and-deploying-a-container">Creating and deploying a container<a className="heading-link" title="Bookmark link for creating-and-deploying-a-container" href="#creating-and-deploying-a-container"><i className="fa fa-link"></i></a></h2>
                                    <p>If you havent spent time working with containers, you will be likely introduced to new concepts like Docker, Dockerfile, compose, and perhaps even YAML. In creating a container, you typically need to have a definition of what your container is, and generally this will be a Dockerfile.&nbsp; A typical Docker file for a .NET Web API looks like this:</p>
                                    
                                    <h2 id="leveraging-continuous-integration-and-deployment-(ci/cd)">Leveraging continuous integration and deployment (CI/CD)<a className="heading-link" title="Bookmark link for leveraging-continuous-integration-and-deployment-(ci/cd)" href="#leveraging-continuous-integration-and-deployment-(ci/cd)"><i className="fa fa-link"></i></a></h2>
                                    <p>And the resulting workflow in an Actions YAML file in your project:</p>
                                            <div className="tags">
                                                <span className="bold">Tags: </span> 
                                                <Tag value="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="Writing-NET-Application-Services-for-Kubernetes-By-Mike-Hadlow">
                                    <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                                            <div className="col-sm-12">
                                                <p className="font-size: 28px;">
                                                    <a href="https://mikehadlow.com/posts/2022-06-24-writing-dotnet-services-for-kubernetes/" style={{ textDecoration: 'underline' }}>Writing .NET Application Services for Kubernetes By Mike Hadlow</a>
                                                    <i className="bi bi-calendar-date flex">24/06/2022</i>
                                                </p>
                                                <span className="bold">Extra: </span>
                                                <p className="font-size: 28px;">
                                                In a traditional .NET distributed application, application services (not to be confused with the Kubernetes &#39;service&#39; object) would either be written as IIS hosted web applications or Windows Services. When building .NET (micro)services to be deployed in a Kubernetes cluster pretty much every facet of the service needs to be reconsidered, not only the hosting environment but the way configuration is accessed, how logging and monitoring work, and the options for state management and memory considerations. In this post I&#39;ll bring my experience of migrating .NET applications to Kubernetes to enumerate some of the main ways that you&#39;ll need to change the way you write them.
                                                </p>
                                                <p>
                                                First some caveats. I don&#39;t intend this post to be an introduction to Kubernetes, or a justification of why you should use Kubernetes. Nor is it a tutorial on how to write distributed applications or .NET application services. It&#39;s intended audience is my past self about a year and a half ago. I would have very much appreciated a short guide on the changes I would have to make to redesign my .NET application services to take full advantage of Kubernetes.
                                                </p>
                                                <h2 className="step bold">Application Service Design</h2>
                                                <p>
                                                Some general application design guidelines:
                                                </p>
                                                <p>
                                                                <ol>
                                                                <li>
                                                                <span className="article-post-sub"> 1.  </span> Build stateless horizontally scalable services. See the <a href="https://12factor.net/" style={{ textDecoration: 'underline' }}>12 factor apps</a> guidelines.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">2.  </span>  Use Linux containers. .NET is now cross platform and runs well on Linux. Avoid the bloat and inevitable friction of Windows Containers.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">3.  </span>  Consider the container immutable. Do not change the local file system. If you need a file system, use a volume mount.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">4.  </span>  One container per pod. Although the <a href="https://learnk8s.io/sidecar-containers-patterns" style={{ textDecoration: 'underline' }}>sidecar pattern</a> is a popular one, it&#39;s perfectly reasonable to have a complete distributed application without a single sidecar in sight. Like all popular patterns, only use it if you have a real need.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">5.  </span> Every application is a console application. Processes are managed by Kubernetes. HTTP services should be standalone console based web apps using the Kestrel webserver.
                                                                </li>
                                                                </ol>
                                                            </p>



                                                            <p className="font-size: 28px;">
                                                            One of the main advantages you&#39;ll find writing application services for Kubernetes is that the platform now provides many things that you would previously have had to include in your application. As I&#39;ll describe below things such as configuration, logging, metrics, and security all become simpler to implement.
                                                            </p>

                                                            <h2 className="step bold">Building your container images</h2>

                                                            <p className="font-size: 28px;">
                                                            Kubernetes is primarily a container orchestration framework. Your applications/services need to be built and deployed as (usually Docker) containers. Microsoft have published a very good guide to building and running containerized .NET applications,<a href="https://dotnet.microsoft.com/en-us/download/e-book/microservices-architecture/pdf" style={{ textDecoration: 'underline' }}> NET Microservices Architecture for Containerized .NET Applications</a> that I&#39;recommend reading, although it doesn&#39;t cover Kubernetes the advice on creating container images and microservice architecture is very good.
                                                            </p>  

                                                            <p className="font-size: 28px;">
                                                            Although it&#39;s possible to compile your application in a traditional build server and then create the runtime container image from the compiled binaries, it&#39;s easier to combine the build and runtime in a single multi-stage docker file, that way you control the environment for both build and deployment. Here is a very simple example:
                                                            </p>



                                                    <p>
                                                    <SingleMultiStageDockerKubernetes1 />
                                                    </p>
                                                
                                                    <p className="font-size: 28px;">
                                                    As you can see there are multiple <span className="whiteBackground pinkTextOverlay">FROM</span> clauses. Each one discards the previous image so the  <span className="whiteBackground pinkTextOverlay">final</span> image is small.
                                                </p>
                                                <p className="font-size: 28px;">
                                                Note, it&#39;s quite common to see just the .csproj file copied first for the restore phase, then the rest of the <span className="whiteBackground pinkTextOverlay">src</span> contents copied for the build. This will give you smaller, more efficient, layer cacheing. Although if you are using an ephemeral build server such as GitHub Actions, there&#39;s probably little to be gained. Personally I like to keep things simple.
                                                </p>
                                                <p className="font-size: 28px;">
                                                Build the image with docker build:
                                                </p>
                                                    <p>
                                                    <MikeHadlowWritingDotnetServicesForKubernetes1 />
                                                    </p>

                                                    <p className="font-size: 28px;">
                                                    Once your container images are built, you should publish them to your internal image repository. GitHub provides a container registry as does Azure and all other cloud providers.
                                                    </p>
                                                
                                                    <h2 className="step bold">Deploying to Kubernetes</h2>

                                                    <p className="font-size: 28px;">
                                                    In the simplest case for an aspnet service you can deploy your application/service to Kubernetes by simply running a deployment specifying your image and the number of replicas you want:
                                                    </p>

                                                    <p>
                                                    <MikeHadlowWritingDotnetServicesForKubernetes2 />
                                                    </p>

                                                    <p className="font-size: 28px;">
                                                    You will also need a Kubernetes “service” to direct traffic to your pods, something like:
                                                    </p>
                                                
                                                    <p>
                                                    <MikeHadlowWritingDotnetServicesForKubernetes3 />
                                                    </p>
                                                <p>
                                                Use <span className="whiteBackground pinkTextOverlay">kubectl apply</span> to run the deployment: 
                                                </p>
                                                <p>
                                                    <MikeHadlowWritingDotnetServicesForKubernetes4 />
                                                    </p>
                                                
                                                <p>
                                                Consider using Helm to template your deployments for any but the very simplest cases. I&#39;ve also had Kustomize recommended to me, which looks a little simpler than Helm, but I&#39;ve not used it myself. 
                                                </p>

                                                <h2 className="step bold">Build and Deployment</h2>
                                                <p>
                                                Your build and deploy pipeline will look something like this:
                                                </p>
                                                            <p>
                                                                <ol>
                                                                <li>
                                                                <span className="article-post-sub"> 1.  </span><span className="whiteBackground pinkTextOverlay">docker build .</span> Build your service container image.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">2.  </span><span className="whiteBackground pinkTextOverlay">docker push ...</span> Push your image to your image repository.
                                                                </li>
                                                                <li>
                                                                <span className="article-post-sub">3.  </span><span className="whiteBackground pinkTextOverlay">kubectl apply ...</span> Execute the YAML file defining your deployment against your Kubernetes cluster.
                                                                </li>
                                                                </ol>
                                                            </p>


                                                <p className="font-size: 28px;">
                                                If you are using GitHub for source control GitHub actions are a good choice for running these steps on a successful commit or pull request merge.
                                                    </p>

                                                
                                                <p className="font-size: 28px;">
                                                Author of Blog: 
                                                <a href="https://mikehadlow.com/top/about/" style={{ textDecoration: 'underline' }}> Mike Hadlow
                                                </a>
                                                </p>
                                                
                                                <p className="font-size: 28px;">
                                            
                                                </p>
                                                <p className="font-size: 28px;">
                                                If you have any comments or questions, feel free to reach out at <a href="https://twitter.com/mikehadlow" style={{ textDecoration: 'underline' }}>@mikehadlow
                                                </a>
                                                <p className="font-size: 28px;">
                                                Software guy, blogger, author of EasyNetQ, AsmSpy and Guitar Dashboard. Technology, science, history and music geek. Lover of 70&#39;s prog rock, Tintin and Lego.
                                                </p>
                                            
                                                </p>
                                                <p>Extra_End</p>
                                            </div>
                                            <div className="tags">
                                                <span className="bold">Tags: </span> 
                                                <Tag value="Writing .NET Application Services for Kubernetes" />
                                            </div>
                                        </div>
                                </div>

                                <div id="Mike-Hadlow">

                                    
                                    <div className="custom-links  row pr-2" style={{ padding: '.75em 1em' }}>
                                    <div className="col-sm-12">
                                    <h1 className="title">Welcome To My New Blog</h1>
                                    <p>I&#39;ve been blogging since 2005 and have written hundreds of posts in that time, but my blogging output has declined somewhat over the last few years. That&#39;s partly laziness on my part, and partly because Twitter provides a much more convenient platform for the quick take, but it&#39;s also because there&#39;s too much friction in publishing a post on my long running <a href="https://www.blogger.com/about/">Google Blogger</a> site <a href="https://mikehadlow.blogspot.com/">Code Rant</a>. Google has done little to update the ancient Blogspot platform over the years and it’s showing its age. The effort required to upload and format a blog post is too high, and has effectively disincentivised me from blogging. In the last few years I’ve sometimes managed just a single post per year. So, long overdue, I&#39;ve decided to start a new blog here at <strong>mikehadlow.com</strong> using modern developer platform technologies. This is the first post.</p>
                                    <h1 className="title">Mike Hadlow</h1>
                                        <li className="mikehadlow-card">
                                        <div className="mikehadlow-card-content">
                                            <div className="mikehadlow-content">
                                            <p>
                                                <a href="https://mikehadlow.com/posts/2022-06-24-writing-dotnet-services-for-kubernetes/">
                                                <strong>Writing .NET Application Services for Kubernetes</strong>
                                                </a><br /><em>Jun 24, 2022</em>
                                            </p>
                                            <p></p>
                                            <p>
                                                In a traditional .NET distributed application, application services (not to be confused with the Kubernetes service object) would either be written as IIS hosted web applications or Windows Services. When building .NET (micro)services to be deployed in a <a href="https://kubernetes.io/">Kubernetes</a> cluster pretty much every facet of the service needs to be reconsidered, not only the hosting environment but the way configuration is accessed, how logging and monitoring work, and the options for state management and memory considerations. In this post I will bring my experience of migrating .NET applications to Kubernetes to enumerate some of the main ways that you will need to change the way you write them.
                                            </p>
                                            <p></p>
                                            <p>
                                                <a href="https://mikehadlow.com/posts/2022-06-24-writing-dotnet-services-for-kubernetes/">
                                                <em>Read more...</em>
                                                </a>
                                            </p>
                                            </div>
                                        </div>
                                        </li>

                                        <li className="mikehadlow-card">
                                        <div className="mikehadlow-card-content">
                                            <div className="mikehadlow-content">
                                            <p>
                                                <a href="https://mikehadlow.com/posts/2022-04-28-event-handlers-by-reflection/">
                                                <strong>C#: Add event handlers dynamically using reflection</strong>
                                                </a><br /><em>Apr 28, 2022</em>
                                                </p>
                                                <p></p>
                                                <p>Recently I had a situation where I needed to test a class with dozens of event handlers. Rather than manually write the repetitive code to attach the handlers I decided to cheat and use reflection. Since there wasn&#39;t anything immediately available online that I could find, I&#39;m sharing an example here to show how to do it.
                                                </p>
                                                <p></p>
                                                <p><a href="https://mikehadlow.com/posts/2022-04-28-event-handlers-by-reflection/"><em>Read more...</em></a>
                                                </p>
                                                </div>
                                                </div>
                                        </li>

                                        <li className="mikehadlow-card">
                                            <div className="mikehadlow-card-content">
                                            <div className="mikehadlow-content">
                                                <p><a href="https://mikehadlow.com/posts/2022-02-18-xread-from-a-redis-stream-using-stackexchange-redis/"><strong>Blocking XREAD From A Redis Stream Using StackExchange.Redis</strong></a><br /><em>Feb 18, 2022</em>
                                                </p>
                                                <p></p>
                                                <p>The <a href="https://github.com/StackExchange/StackExchange.Redis">StackExchange.Redis</a> NuGet package is the most popular .NET client for <a href="https://redis.io/">Redis</a>. It&#39;s stable, high-performance, with a great community and wide usage. One of it&#39;s most interesting features is the way it does network <a href="https://stackexchange.github.io/StackExchange.Redis/PipelinesMultiplexers.html#multiplexing">multiplexing</a>. This allows multi-threaded applications to use a single TCP/IP connection without blocking. Unfortunately this also means that the library does not support blocking operations such as <code>XREAD BLOCK</code>, which is important if you want to leverage <a href="https://redis.io/topics/streams-intro">Redis Streams</a> on .NET. This post offers a work-around for this.
                                                </p>
                                                <p></p>
                                                <p><a href="https://mikehadlow.com/posts/2022-02-18-xread-from-a-redis-stream-using-stackexchange-redis/"><em>Read more...</em></a></p>
                                            </div>
                                            </div>
                                        </li>

                                    </div>
                                    </div>

                                </div>

      </div>
    </div>
  );
};

export default ArticlesListComponent;
