import Image from "next/image";
import Tag
 from "./Tag";
import { CompositionRoot } from "./CompositionRoot";
import { HaraldCoppoolsePullDataInOneSqlQueryLinq1 } from "./HaraldCoppoolsePullDataInOneSqlQueryLinq1";
import { HaraldCoppoolsePullDataInOneSqlQueryLinq2 } from "./HaraldCoppoolsePullDataInOneSqlQueryLinq2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="row pr-2">
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                Following this video  &quot;Install Git, Clone a project (Windows)&quot; <a href="https://www.youtube.com/watch?v=Jge57UHvYto&list=WL&index=3" style={{ textDecoration: 'underline' }}>https://www.youtube.com/watch?v=Jge57UHvYto&list=WL&index=3</a> for Git Installation on Windows10 worked for me.
            </p>
        </div>
      </div>



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


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.tpeczek.com/2019/10/alternative-approach-to-httpclient-in.html" style={{ textDecoration: 'underline' }}>https://www.tpeczek.com/2019/10/alternative-approach-to-httpclient-in.html</a>
            </p>
            <p className="font-size: 28px;">
                Alternative approach to HttpClient in AZURE Functions 2.0 revisited – move to dependency injection
            </p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span>
            <Tag value="IHttpClientFactory" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://github.com/tpeczek" style={{ textDecoration: 'underline' }}>https://github.com/tpeczek</a>
            </p>
            <p className="font-size: 28px;">
              Hi there 👋, I&quot;m Tomasz Pęczek
            </p>
            <p className="font-size: 28px;">
              Software Developer & Architect • Blogger • Speaker • OSS Contributor • Microsoft MVP
            </p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.youtube.com/watch?v=OcCKmodXW-Q" style={{ textDecoration: 'underline' }}>https://www.youtube.com/watch?v=OcCKmodXW-Q</a>
            </p>
            	

            <p className="font-size: 28px;">
            Likes: 254
            </p>
            <p className="font-size: 28px;">
            <a href="http://danpatrascu.com/" style={{ textDecoration: 'underline' }}>http://danpatrascu.com/</a>,
            <a href="https://github.com/danpdc/aspNetCoreBeginners" style={{ textDecoration: 'underline' }}>  https://github.com/danpdc/aspNetCoreBeginners</a>,
            </p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Authorization" />
        </div>
      </div>



      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
              <span>
                <a href="https://www.youtube.com/watch?v=OcCKmodXW-Q" style={{ textDecoration: 'underline' }}>https://www.youtube.com/watch?v=OcCKmodXW-Q</a>
                <i className="bi bi-calendar-date flex">30/05/23</i>
              </span>
              <p className="bold">
                Asp.Net Core Authorization Made Easy
              </p>

            <p>
              <a href="http://danpatrascu.com/" style={{ textDecoration: 'underline' }}>http://danpatrascu.com/</a>
            </p>
              <p>
              <a href="	https://github.com/danpdc/aspNetCoreBeginners" style={{ textDecoration: 'underline' }}>	https://github.com/danpdc/aspNetCoreBeginners</a>
              </p>
            <div className="subscribe">
                <span className="bold">Codewrinkles:  23.2k subscribers </span> 
            </div>
        </div>
   
        <p className="font-size: 28px;">
            Likes: 254
            </p>
        <div className="tags">
            <span className="bold">Tags: </span>
            <Tag value="Authorization" />
        </div>
      </div>






      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://blog.joaograssi.com/posts/2021/asp-net-core-deep-dive-policy-based-authorization/" style={{ textDecoration: 'underline' }}>https://blog.joaograssi.com/posts/2021/asp-net-core-deep-dive-policy-based-authorization/</a>
            </p>
            	

            <p className="font-size: 28px;">
            Stars: 82
            </p>
            <p className="font-size: 28px;">
            <a href="https://github.com/joaopgrassi/authz-custom-middleware/tree/posts/policy-based-deep-dive" style={{ textDecoration: 'underline' }}>https://github.com/joaopgrassi/authz-custom-middleware/tree/posts/policy-based-deep-dive </a>,
            </p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Authorization" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
              <span>
                <a href="https://www.youtube.com/watch?v=EQFyRQp9G58&list=PL2E-vlKoo_v3c3dl3oGiAo_CAfs07I8J7&index=2" style={{ textDecoration: 'underline' }}>ASP.Net Core tutorial for beginners(2): Project Structure, application layers and first controller</a>
                <i className="bi bi-calendar-date flex">9/11/21</i>
              </span>
            <p className="font-size: 28px;">
            This second lesson of the “ASP.Net Core for beginners” course is almost entirely hands on. We will satrt implementing our API, by first setting up our project structure according to a layered architecture. We will implement our first endpoints and we will then talk about dependency injection.
            </p>


            <div className="subscribe">
                <span className="bold">Codewrinkles:  23.2k subscribers </span> 
            </div>
        </div>
        <p className="bold">
        Create class library for DAL, Domain, Services, project for WebAPI.
        </p>
        <div className="tags">
            <span className="bold">Tags: </span>
            <Tag value="" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.codeproject.com/Articles/1162957/Dependency-Injection-to-The-Core" style={{ textDecoration: 'underline' }}>https://www.codeproject.com/Articles/1162957/Dependency-Injection-to-The-Core</a>
            </p>
            <p className="font-size: 28px;">
              We can go further and build a <span style={{ color: 'red' }}>composition root</span> where we can do this kind of type initializations. The composition root is a simple class which will get called when the application is first initialized. In that class, we can resolve the specific types for our abstractions.
            </p>
            <p className="font-size: 28px;">
            As you can see here, we have configured our HTTPRequest in such a way that if someone requests the <span style={{ color: 'red' }}>TodoControllerwe</span> will instantiate a new instance of <span style={{ color: 'red' }}>TodoRepository</span> and pass it to the controller&#39;s constructor. Likewise, we can change it to<span style={{ color: 'red' }}>TodoCSVRepository or TodoInMemoryepository</span> whenever we feel like. Now we have a single place to do all our dirty works of type initializations. In Web API projects we have to register this composition root in the <span style={{ color: 'red' }}>Global.asax.cs</span> file like this, 
            </p>
        </div>
        <div>
        <span className="bold" style={{ padding: '.75em 1em' }}>Code: </span> 
          <CompositionRoot />
        </div>
            <p className="font-size: 28px;" style={{ padding: '.75em 1em' }}>
                One thing to remember here is, a composition root implementation varies from framework to framework. Here we are working with Web API so this won’t work for MVC (may work) and WPF applications. You have to find a way to implement those but don’t worry because the internet has a lot of code snippets that can ease up your task of creating a composition root for a specific framework. Tell you what, I learned how to make a composition root like this for Web API projects after reading a blog from <span style={{ color: 'red' }}>Mark Seeman</span>. Here is the link for it,
            </p>
            <p className="font-size: 28px;">
                <a href="http://blog.ploeh.dk/2012/09/28/DependencyInjectionandLifetimeManagementwithASP.NETWebAPI/" style={{ textDecoration: 'underline' }}>http://blog.ploeh.dk/2012/09/28/DependencyInjectionandLifetimeManagementwithASP.NETWebAPI/</a>
            </p>
            <p className="font-size: 28px;">
              That’s good since we have to deal with resolving tiny dependencies for this small project of ours. What if we have a large project where hundreds of dependencies are scattered around? In that cases, composition root won’t be a good idea. That is why in enterprise level, we use a well-known IoC (Inversion of Control) container to make our job easy. IoC containers can resolve dependencies recursively and they are also pretty much easy to configure. They allows us to work with dependency injection lifecycle easily.
              There are many IoC containers available and most of them do the same things somewhat differently. Let’s use one of them in our current project. Let’s pick Autofac which has a great documentation online. Here is the link where you can know all about the Autofac integration related stuff with Web API projects,
            </p>
            <p className="font-size: 28px;">
                <a href="http://autofac.readthedocs.io/en/latest/integration/webapi.html" style={{ textDecoration: 'underline' }}>http://autofac.readthedocs.io/en/latest/integration/webapi.html</a>
            </p>
            
            <div className="tags">
            <span className="bold">Extra: </span>
            <p>From this article, I explored a new blog site of this Author: <span style={{ color: 'red' }}>Mark Seeman</span>	 <a href="https://blog.ploeh.dk/" style={{ textDecoration: 'underline' }}>https://blog.ploeh.dk/</a>	</p>
            <p>Extra_End</p>
        </div>


        <div className="tags">
            <span className="bold">Tags: </span>
            <Tag value="Dependency-Injection" />
        </div>
      </div>

      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://stackoverflow.com/users/2281790/harald-coppoolse" style={{ textDecoration: 'underline' }}>https://stackoverflow.com/users/2281790/harald-coppoolse</a>
            </p>
            <p className="font-size: 28px;">
            About
            </p>
            <p className="font-size: 28px;">          
                Taught by  <span className="bold">Professor Dijkstra</span>, so I&#39;m conditioned like a Maslov dog to make software how it &#34;ought&#34; to be done, not for fast hacks, which sometimes is a drawback, except if you&#39;re working in projects with a lot of people that need to keep working for years and years continuously changing it.

            </p>
            <div>
              Learned to use C# nine years ago after using C++ for over 25 years.
              <ul>
                <li>&#34;Finally a language that is well designed&#34;.</li>
                <li>Hurray! Never have to use a macro again</li>
              </ul>
            </div>

        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="" />
        </div>
      </div>


      
      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://stackoverflow.com/questions/53811620/pull-data-from-multiple-tables-in-one-sql-query-using-linq-and-entity-framework" style={{ textDecoration: 'underline' }}>https://stackoverflow.com/questions/53811620/pull-data-from-multiple-tables-in-one-sql-query-using-linq-and-entity-framework</a>
            </p>


            <p className="bold font-size: 28px;" style={{ padding: '.75em 1em' }}>
                Pull data from multiple tables in one SQL query using LINQ and Entity Framework(Core)
            </p>
            <p className="font-size: 28px;">
              Answerd by: <a href="https://stackoverflow.com/users/2281790/harald-coppoolse" style={{ textDecoration: 'underline' }}>https://stackoverflow.com/users/2281790/harald-coppoolse</a>
            </p>
            <p className="font-size: 28px;">
              I wanted to grab the 10 latest transactions and 10 latest customers in one LINQ query
            </p>
            <p className="font-size: 28px;">
              It is a bit unclear what you want. I doubt that you want one sequence with a mix of Customers and Transactions. I guess that you want the 10 newest Customers, each with their last 10 Transactions?
            </p>

            <p className="font-size: 28px;">
              I wonder why you would deviate from the <a href="https://www.entityframeworktutorial.net/code-first/code-first-conventions.aspx" style={{ textDecoration: 'underline' }}>entity framework code first</a> conventions. If your class Customer represents a row in your database, then surely it doesn&#39;t have a <span className="angle-braces">HashSet &lt;Transaction&gt;</span>?
            </p>

            <p className="font-size: 28px;">
              A one-to-many of a Customer with his Transactions should be modeled as follows: 
            </p>




            <div>
              <span className="bold" style={{ padding: '.75em 1em' }}>Code: </span> 
              <HaraldCoppoolsePullDataInOneSqlQueryLinq1 />
            </div>
            
            <p className="font-size: 28px;">
            This is all that entity framework needs to know to detect the tables you want to create, to detect your one-to-many relationship, and to detect the primary keys and foreign keys. Only if you want different names of tables or columns, you&#39;ll need attributes and/or fluent API
The major differences between my classes and yours, is that the one-to-many relation is represented by <span className="angle-braces">virtual properties</span>. The HashSet is an ICollection. After all, your Transactions table is a collection of rows, not a HashSet
            </p>
            <p className="font-size: 28px;">
            In entity framework the columns of your tables are represented by non-virtual properties; the virtual properties represent the relations between the tables (one-to-many, many-to-many, ...)
            </p>
            <p>
            Quite a lot of people tend to (group-)join tables, when they are using entity framework. However, life is much easier if you use the virtual properties
            </p>
            <p>
              Back to your question
            </p>
            <p>
            I want (some properties of) the 10 newest Customers, each with (several properties of) their 10 latest Transactions
            </p>
            <div>
              <span className="bold" style={{ padding: '.75em 1em' }}>Code: </span> 
              <HaraldCoppoolsePullDataInOneSqlQueryLinq2 />
            </div>
            <p>
              Entity framework knows the one-to-many relationship and recognizes that a group-join is needed for this.
            </p>
            <p>One of the slower parts of your query is the transfer of the selected data from the DBMS to your local process. Hence it is wise to limit the selected data to the data you actually plan to use. If Customer with Id 4 has 1000 Transactions, it would be a waste to transfer the foreign key for every Transaction, because you know it has value 4.
            </p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Entity-Framework" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.entityframeworktutorial.net/code-first/code-first-conventions.aspx" style={{ textDecoration: 'underline' }}>https://www.entityframeworktutorial.net/code-first/code-first-conventions.aspx</a>
            </p>
            	
            <span className="bold">Extra: </span>
            <p>These EF 6.x Code-First conventions are defined in the <span className="angle-braces">System.Data.Entity.ModelConfiguration.Conventions</span> namespace.
	          </p>
           

            <p className="font-size: 28px;">
            The following table lists default code first conventions:
            </p>
 
            <table>
                      <tr>
                        <th>Default Convention For</th>
                        <th>Description</th>
                        
                      </tr>
                      <tr>
                      <td>Schema</td>
                      <td>EF creates all the DB objects into the dbo schema.</td>
                      </tr>
                      <tr>
                        <td>Table Name</td>         
                        <td>By default, EF will create a DB table with the entity class name suffixed by &#39;s&#39; e.g. Student domain class (entity) would map to the Students table.</td>
                      </tr>
                      <tr>
                        <td>Primary key Name</td>
                        <td>
                          <ol>
                            <li>Id</li>
                            <li>&lt;Entity Class Name&gt; + &#34;Id&#34; (case insensitive)</li>
                          </ol>
                          EF will create a primary key column for the property named Id or <span className="angle-braces">&lt;Entity Class Name&gt;</span> + &#34;Id&#34; (case insensitive).
  
                        </td>
                        
                      </tr>
                      <tr>
                        <td>Foreign key property Name</td>
                        <td>
                          By default EF will look for the foreign key property with the same name as the principal entity primary key name.
                          If the foreign key property does not exist, then EF will create an FK column in the Db table with &lt;Dependent Navigation Property Name&gt; + &#34;_&#34; + &lt;Principal Entity Primary Key Property Name&gt;
                          e.g. EF will create Grade_GradeId foreign key column in the Students table if the Student entity does not contain foreign key property for Grade.
                        </td>
                        <td></td>
                      </tr>
        </table>

            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Entity-Framework" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://github.com/dotnet/EntityFramework.Docs/blob/main/entity-framework/core/modeling/relationships/one-to-many.md" style={{ textDecoration: 'underline' }}>https://github.com/dotnet/EntityFramework.Docs/blob/main/entity-framework/core/modeling/relationships/one-to-many.md</a>
            </p>
            	
            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
            <a href="https://github.com/dotnet/EntityFramework.Docs" style={{ textDecoration: 'underline' }}>https://github.com/dotnet/EntityFramework.Docs</a>
            </p>

            <p className="font-size: 28px;">
            Stars: 1.5k
            </p>
            <p className="font-size: 28px;">
            title: One-to-many relationships - EF Core description: How to configure <span className="angle-braces">one-to-many relationships</span> between entity types when using Entity Framework Core author: ajcvickers ms.date: 03/30/2023 uid: core/modeling/relationships/one-to-many
            </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Entity-Framework" />
        </div>
      </div>



      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://codeblog.jonskeet.uk/2019/03/" style={{ textDecoration: 'underline' }}>https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet/</a>
                <i className="bi bi-calendar-date flex">27/3/2019</i>
            </p>
            	
            <span className="bold">Extra: </span>


            <h5 className="font-size: 28px; bold">
              STORING UTC IS NOT A SILVER BULLET
            </h5>
            <p className="font-size: 28px;">
            Note: this is a pretty long post. If you are not interested in the details, the conclusion at the bottom is intended to be read in a standalone fashion. There is also a related blog post by  <span className="angle-braces"> Lau Taarnskov <a href="https://www.creativedeletion.com/2015/03/19/persisting_future_datetimes.html" style={{ textDecoration: 'underline' }}>https://www.creativedeletion.com/2015/03/19/persisting_future_datetimes.html</a></span> - if you find this one difficult to read for whatever reason, maybe give that a try. 

            </p>

            <p>
            When I read Stack Overflow questions involving time zones, there &#39;s almost always someone giving the advice to only ever store UTC. Convert to UTC as soon as you can, and convert back to a target time zone as late as you can, for display purposes, and you &#39;ll never have a time zone issue again, they say.
            </p>

            <p className="font-size: 28px;">
              This blog post is intended to provide a counterpoint to that advice. I&#39;m certainly not saying storing UTC is always the wrong thing to do, but it s not always the right thing to do either.
              Note on simplifications: this blog post does not go into supporting non-Gregorian calendar systems, or leap seconds. Hopefully developers writing applications which need to support either of those are already aware of their requirements.
            </p>
            <h4 className="bold">
              Background: EU time zone rule changes
            </h4>
            <p>
            The timing of this blog post is due to recent European Parliament proceedings that look like they will probably end the clocks changing twice a year into “summer time” or “winter time” within EU member states. The precise details are yet to be finalized and are unimportant to the bigger point, but for the purpose of this blog post I&#39;ll assume that each member state has to decide whether they will “spring forward” one last time on March 28th 2021, then staying in permanent “summer time”, or “fall back” one last time on October 31st 2021, then staying in permanent “winter time”. So from November 1st 2021 onwards, the UTC offset of each country will be fixed – but there may be countries which currently always have the same offset as each other, and will have different offsets from some point in 2021. (For example, France could use winter time and Germany could use summer time.)
            </p>
            <p>
            The larger point is that time zone rules change, and that applications should expect that they will change. This isn&#39;t a corner case, it&#39;s the normal way things work. There are usually multiple sets of rule changes (as released by IANA) each year. At least in the European changes, we&#39;re likely to have a long notice period. That often isn&#39;t the case – sometimes we don&#39;t find out about rule changes until a few days before they happen.
            </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="NodaTime" />, 
            <Tag value="Coordinated Universal Time/UTC" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://github.com/wesdoyle" style={{ textDecoration: 'underline' }}>wesdoyle</a> followed  <i className="bi bi-calendar-date flex">04/01/2024</i> <a href="https://github.com/roji" style={{ textDecoration: 'underline' }}>Shay Rojansky roji</a>, Principal software engineer working on .NET data access and perf, member of the Entity Framework team at Microsoft. Lead dev of Npgsql, the PostgreSQL provider.
             
            </p>
            	<p>
                <a href="https://www.roji.org/storing-timezones-in-the-db" style={{ textDecoration: 'underline' }}>When “UTC everywhere” isn&#39;t enough - storing time zones in PostgreSQL and SQL Server - Shay Rojansky&#39;s Blog (roji.org) </a>
                <i className="bi bi-calendar-date flex">27/3/2019</i>
              </p>
            <span className="bold">Extra: </span>


            <h5 className="font-size: 28px; bold" >
              When “UTC everywhere” isn&#39;t enough
            </h5>
            <p className="font-size: 28px;">
            I&#39;ve been dealing a lot with timestamps, timezones and database recently - especially on PostgreSQL <a href="https://www.roji.org/postgresql-dotnet-timestamp-mapping" style={{ textDecoration: 'underline' }}>(see this blog post)</a>, but also in general. Recently, on the Entity Framework Core community standup, <a href="https://www.youtube.com/watch?v=ZLJLfImuFqM&list=PLdo4fOcmZ0oX-DBuRG4u58ZTAJgBAeQ-t&index=3" style={{ textDecoration: 'underline' }}>we also hosted <span className="angle-braces">Jon Skeet </span></a> and chatted about NodaTime, timestamps, time zones, UTC and how they all relate to databases - I highly recommend watching that!
            </p>

            <p>
            Now, a lot has been said about “UTC everywhere”; according to this pattern, all date/time representations in your system should always be in UTC, and if you get a local timestamp externally (e.g. from a user), you convert it to UTC as early as possible. The idea is to quickly clear away all the icky timezone-related problems, and to have a UTC-only nirvana from that point on. While this works well for many cases - e.g. when you just want to record when something happened in the global timeline - it is not a silver bullet, and you should think carefully about it. Jon Skeet already explained this better than I could, so go read his  <a href="https://www.roji.org/storing-timezones-in-the-db" style={{ textDecoration: 'underline' }}>blog post on this</a>. As a very short tl;dr, time zone conversion rules may change after the moment you perform the conversion, so the user-provided local timestamp (and time zone) may start converting to a <em>different</em> UTC timestamp at some point! As a result, for events which take place on a specific time in a specific time zone, it&#39;s better to store the local timestamp and the time zone (not offset!).
            </p>

            <p className="font-size: 28px;">
              So let&#39;s continue Jon&#39;s blog post, and see how to actually perform that on two real databases - PostgreSQL and SQL Server. Following Jon&#39;s preferred option, we want to store the following in the database:
            </p>
            <p>
              <ol>
                <li> <span className="bold">1. </span>The user-provided local timestamp.</li>
                <li><span className="bold">2. </span>The user-provided time zone ID. This is not an offset, but rather a daylight savings-aware time zone, represented as a string.</li>
                <li><span className="bold">3. </span>A UTC timestamp that&#39;s computed (or generated) from the above two values. This can be used to order the rows by their occurrence on the global timeline, and can even be indexed.</li>
              </ol>
            </p>

            <p>           
              In <span className="angle-braces">Jon&#39;s  <a href="https://nodatime.org/" style={{ textDecoration: 'underline' }}>NodaTime library</a>, the <a href="https://nodatime.org/3.0.x/api/NodaTime.ZonedDateTime.html" style={{ textDecoration: 'underline' }}>ZonedDateTime type</a></span> precisely represents the first two values above. Unfortunately, databases typically don&#39;t have such a type; SQL Server does have <span className="whiteBackground">datetimeoffset</span>, but an offset is not a time zone (it isn&#39;t daylight savings-aware). So we must use separate columns to represent the data above.
            </p>
            <h4>
              PostgreSQL
            </h4>

              <p>
              PostgreSQL conveniently has a type called timestamp without time zone for local timestamps in an unspecified time zone, and a badly-named type called timestamp with time zone, for UTC timestamps (no time zone is actually persisted); those are perfect for our two timestamps. We also want the UTC timestamp to be generated from the two other values, so we’ll set up a PostgreSQL generated column (called computed column by EF Core) to do that. Here&#39;s the minimal EF Core model and context, using <span className="angle-braces">the NodaTime plugin:</span>
              </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="NodaTime" />, 
            <Tag value="Coordinated Universal Time/UTC" />
        </div>
      </div>



      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">20/1/24</span>
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
