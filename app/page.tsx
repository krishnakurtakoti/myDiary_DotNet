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
