import Image from "next/image";
import Tag
 from "./Tag";
import { CompositionRoot } from "./CompositionRoot";
import { HaraldCoppoolsePullDataInOneSqlQueryLinq1 } from "./HaraldCoppoolsePullDataInOneSqlQueryLinq1";
import { HaraldCoppoolsePullDataInOneSqlQueryLinq2 } from "./HaraldCoppoolsePullDataInOneSqlQueryLinq2";
import { TlsSecurityItem } from "./TlsSecurityItem";
import { TlsSecurityItem1 } from "./TlsSecurityItem1";
import { ReadReplicaRails } from "./ReadReplicaRails";
import { AnalyzeData180000xFasterRust } from "./analyzeData180000xFasterRust";
import { OpenSSLConfgurationFile } from "./OpenSSLConfgurationFile";
import { GenerateCertificate } from "./GenerateCertificate";
import { VerifyCurrentlyNotTrustedCertificate } from "./VerifyCurrentlyNotTrustedCertificate";
import { AddToOurTrustedCertificate } from "./AddToOurTrustedCertificate";
import { VerifyCertificateIsTrusted } from "./VerifyCertificateIsTrusted";
import { PKCS12certificate } from "./PKCS12certificate";

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


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#for-net-framework-35---452-and-not-wcf" style={{ textDecoration: 'underline' }}>Upgrade .NET version of XXX Server Components</a>
            </p>
            	
            <span className="bold">Extra: </span>


            <p className="font-size: 28px;">
              To support TLS 1.2 capabilities, the recommendation to upgrade the app to .NET Framework 4.7 or a later version.
            </p>
            <p className="font-size: 28px;">
              We only upgrade XXX Server components with .NET 4.7.2 and XXX Agent still on .NET 4.5.2
            </p>
            <h4 className="bold">
              Technical Description
            </h4>
            <p className="font-size: 28px;">
              XXX Management Service, XXX Management Tool and Configuration Loader Component will be targeted to .NET 4.7.2 from 4.5.2
            </p>
            <p className="font-size: 28px;">
              All associated Query/3rd party open source will be updated with the right version and the targeting framework.
            </p>

            <h4 className="bold">
            For .NET Framework 3.5 - 4.5.2 and not WCF
            </h4>

            <p>
              We recommend you upgrade your app to .NET Framework 4.7 or a later version. If you cannot upgrade, take the following steps:
            </p>

              <p>
                <ol>
                  <li>
                  <span className="bold">1. </span>  Set the values of <a href="https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#schusestrongcrypto" style={{ textDecoration: 'underline' }}>SchUseStrongCrypto</a> and <a href="https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#systemdefaulttlsversions" style={{ textDecoration: 'underline' }}>SystemDefaultTlsVersions</a> registry entries to 1. See <a href="https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#configure-security-via-the-windows-registry" style={{ textDecoration: 'underline' }}>Configuring security via the Windows Registry.</a>               
                 .NET Framework 3.5 supports the <span className="greyBackground">SchUseStrongCrypto</span> flag only when an explicit TLS value is passed.
                  </li>
                  <li>
                  <span className="bold">2. </span>   If you&#39;re running on .NET Framework 3.5, you need to install a hot patch so that TLS 1.2 can be specified by your program:
                  </li>
                </ol>
            
              </p>
              <p>
           
              </p>
   
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Upgrade NET Framework .NET 4.7.2 from 4.5.2" />
        </div>
      </div>

      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://domburf.medium.com/enabling-tls-1-2-on-your-net-application-5e4663d18a96" style={{ textDecoration: 'underline' }}>Enabling TLS 1.2 on your .NET application by Dominic Burford</a>
                <i className="bi bi-calendar-date flex">12/12/2019</i>
            </p>
            <p>
            I recently came across an issue with several of our ASP.NET WebAPI services which were consuming a third-party set of APIs. These third-party APIs were configured to disable any requests from clients that were using  <span className="bold">TLS 1.0/1.1</span>. Unfortunately, this included our own APIs. All requests to the third-party API were returning empty responses. After some discussion with one of the developers of the third-party APIs, he suggested the issue may be related to <span className="bold">TLS 1.2</span> not being supported as he had seen the issue before.
            </p>
   
            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
              Claps: 25
            </p>
              <div className="quote-container">
                <p className="quote">
                  The Transport Layer Security (TLS) protocol is an industry standard designed to help protect the privacy of information communicated over the Internet. TLS 1.2 is a standard that provides security improvements over previous versions. TLS 1.2 will eventually be replaced by the newest released standard TLS 1.3 which is faster and has improved security.
                </p>
              </div>
              <p>    
                <a href="https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#for-net-framework-35---452-and-not-wcf" style={{ textDecoration: 'underline' }}>- Transport Layer Security (TLS) best practices with the .NET Framework | Microsoft Docs</a>
              </p>
              <p>    
                I was able to run the third-party APIs from our local test environment, but not when I ran them from our staging / production environments which were hosted on Azure. I had to make several changes, including code changes to the ASP.NET WebAPI services and changes to our Azure hosting environments.
              </p>
              <p>
                As many current servers are moving towards <span className="bold">TLS 1.2/1.3</span> and removing support for <span className="bold">TLS 1.0 /1.1</span>, connectivity issues between newer servers and older (legacy) .NET applications are becoming more common. Installing a newer version of the .NET Framework onto your development environment is not the answer. The solution is down to the version of the .NET Framework used for compiling your project. This is what actually matters when it comes to selecting the supported <span className="bold">TLS</span> version during the <span className="bold">TLS</span> handshake.
              </p>
              <p>
                In this article I will describe the changes I have made to our Azure hosting (where our ASP.NET WebAPIs are hosted) and the code changes which enabled <span className="bold">TLS 1.2</span> support.
              </p>
              <h2 className="step bold">Upgrading our Azure hosting to support TLS 1.2</h2>
              <p>
                More accurately the changes I have made to our Azure hosting have removed support for earlier versions of <span className="bold">TLS</span> i.e. <span className="bold">TLS 1.0/1.1</span>. Although this change was not strictly necessary to fix the problem I was experiencing, it was appropriate in terms of tightening up the security of our ASP.NET WebAPIs and to ensure that our own APIs can only be accessed by clients that support <span className="bold">TLS 1.2</span>. This is quite simply achieved by opening the Azure portal and navigating to the App Service hosting. From there the <span className="italics">TLS/SSL</span> Settings blade can be selected.
              </p>

              <p className="font-size: 28px;">
              I have set this to TLS 1.2 for both our staging and production environments. This sets the minimum TLS version. Therefore our hosting environments will no longer accept requests from earlier versions of TLS.
              </p>
              <h2 className="step bold">Code changes to support TLS 1.2</h2>
              <p>
                Depending on what version of .NET Framework your project uses will dictate the possible solutions available to you. If your project compiles against .NET Framework &gt;= 4.7 then you are already good to go. Applications developed in .NET Framework 4.7 or greater automatically default to whatever the operating system they run on considers safe (which currently is TLS 1.2 and will later include TLS 1.3).
              </p>
              
              <p>
              If your application has been developed in a version of the .NET Framework prior to 4.7 then you have two options.
              </p>
              <p>
              Recompile your application using .NET Framework 4.7 or greater
              - If recompiling your application is not something you can do then you can update your .config file by adding the following.
              </p>
              <div className="greyBackground">
                <span  style={{ padding: '.75em 1em' }}>Code: </span> 
                <TlsSecurityItem/>
              </div>
              <p>
                Also make sure you have the following set in your .config file.
              </p>
              <div className="greyBackground">
                <span  style={{ padding: '.75em 1em' }}>Code: </span> 
                <TlsSecurityItem1/>
              </div>
             <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="TLS 1.2, .NET application" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.fearofoblivion.com/setting-up-asp-net-dev-certs-for-both-wsl-and-windows" style={{ textDecoration: 'underline' }}>Setting up ASP.NET Core dev certs for both WSL and Windows</a>
                <i className="bi bi-calendar-date flex">04/05/2021</i>
            </p>
            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
            For those of you who haven&#39;t read the old post, here is some background information. If you ever want to do your ASP.NET Core development using both WSL (using the Remote - WSL extension) and Windows, you will soon realize that there are some inherent issues with the local development certs… Mainly that ASP.NET Core sets up one development certificate in Windows, and one in Linux. And neither environment trusts the other. Not to mention that Linux doesn&#39;t even trust its own cert, making server to server communication hard in Linux.
            </p>
            <p>
            Unfortunately, the tools provided by dotnet doesn&#39;t quite seem to do the trick when trying to get mutual trust to work. I&#39;m not sure why, but at least on my machine, any cert that is generated by dotnet has problems when it comes to being able to trust it in Linux. So because of this, there are a few hoops we need to jump through to get this to work…
            </p>


            <p className="font-size: 28px;">
            <strong> Note:</strong> My guess is that Linux requires a CA to issue the cert to be able to trust it. However, the cert generated by .NET is not a properly issued cert with a CA as this has some inherent dangers… Dangers I will ignore on my development box, and try to mitigate by keeping my cert VERY safe
            </p>
            <p className="font-size: 28px;">
            In the previous post, there were quite a few steps involved in getting it to work. However, it can be simplified a bit at least…and made to work…
            </p>
           
            <h2 className="step bold">Dev certs in Linux</h2>
            <p className="font-size: 28px;">
              When you install the .NET SDK, an ASP.NET developer certificate is generated and configured for use by ASP.NET. However, it doesn&#39;t seem like that cert is being properly trusted by Linux, causing server to server communication to fail. Because of this, we need to generate our own self-signed cert. Luckily, this isn&#39;t too hard with the help of Google…
            </p>
            <p className="font-size: 28px;">
            The first step is to create an OpenSSL configuration file that looks like this
            </p>
           
            <p className="greyBackground">
              <OpenSSLConfgurationFile />
            </p>

            <p className="font-size: 28px;">
            <strong> Note:</strong> This config creates a certificate that is both a CA and an SSL cert. The reason for this is that Linux needs a CA cert to be able to trust it.
            </p>

            <p className="font-size: 28px;">
            Once we have our OpenSSL configuration, we can go ahead and generate our certificate by running

            </p>
            <p className="greyBackground">
              <GenerateCertificate />
            </p>
            
            <p className="font-size: 28px;">
            This generates a key pair based on the configuration file we just created.
            </p>
            <p className="font-size: 28px;">
            Just for the sake of it, we can verify that it currently isn&#39;t trusted, by running
            </p>
            
            <p className="greyBackground">
              <VerifyCurrentlyNotTrustedCertificate />
            </p>
            

            <p className="font-size: 28px;">
            To trust the cert, we need to copy it to /usr/local/share/ca-certificates, and add it to our trusted CA:s. Like this
            </p>
  
              <p>
              <AddToOurTrustedCertificate />
              </p>

              <p className="font-size: 28px;">
                After that, we should be able to verify that the cert is trusted by running openssl verify again
              </p>

            
              <p>
              <VerifyCertificateIsTrusted />
              </p>

              <p className="font-size: 28px;">
              The last step is to make sure that ASP.NET Core uses this certificate when SSL is turned on. This is easily done by running the dotnet dev-certs command. However, this command expects a PKCS12 certificate. So before we can do that, we need to convert our key pair into a PKCS12 cert using OpenSSL
              </p>
            
              <p>
              <PKCS12certificate />
              </p>

              <p className="font-size: 28px;">
              Once we have out PFX-file, we can finally tell ASP.NET to use it by running
              </p>

              

              <p className="font-size-16">
                  <strong>Remember:</strong> Make sure it is a secure password! If anyone should get their hands on this cert, it could be used to launch a malicious attack against your machine. So keeping it safe is VERY important! And also make sure that the key pair is stored in a safe place.
              </p>

                      <p className="font-size: 28px;">
                      Ok, that&#39;s it from the Linux side…
                     </p>

                     <h2 className="step bold">Dev certs in Windows</h2>
            <p className="font-size: 28px;">
            When you install the .NET Core SDK on Windows, it creates a development HTTPS certificate for you automatically just like it does in Linux. All you have to do is run dotnet dev-certs https --trust to trust it and you are good to go! However, in this case we want to replace that cert with the cert we just created…
            </p>
            <p className="font-size: 28px;">
            The first step in doing this, is to get hold of the PFX file we just generated. On my machine, I copy it to a user specific folder by running the following command in WSL
            </p>
          
        
            
            <p className="font-size: 28px;">
            Author of Blog: 
            <a href="https://github.com/ChrisKlug" style={{ textDecoration: 'underline' }}> Chris Klug
              </a>
            </p>
             
            <p className="font-size: 28px;">
           
            </p>
            <p className="font-size: 28px;">
            If you have any comments or questions, feel free to reach out at <a href="https://twitter.com/ZeroKoll" style={{ textDecoration: 'underline' }}>@ZeroKoll! 
              </a>
            </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Setting up ASP.NET Core dev certs for both WSL and Windows" />
        </div>
      </div>








      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://www.sciencedirect.com/science/article/pii/S221421262200196X" style={{ textDecoration: 'underline' }}>SEAF: A Scalable, Efficient, and Application-independent Framework for container security detection - ScienceDirect </a>
                <i className="bi bi-calendar-date flex">__/12/2022</i>
            </p>
            	
            <span className="bold">Extra: </span>

            <p className="font-size: 28px;">
              Author links open overlay panelLibo Chen a, Yihang Xia b, Zhenbang Ma c, Ruijie Zhao a, Yanhao Wang c, Yue Liu d, Wenqi Sun a, Zhi Xue a
            </p>
    
              <p className="font-size: 28px;">
                Citations: 6
              </p>
              
   
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Docker Security Detection" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://github.com/wilsonmar" style={{ textDecoration: 'underline' }}>wilsonmar (Wilson Mar) (github.com)</a> followed <a href="https://github.com/spotakash" style={{ textDecoration: 'underline' }}>@spotakash</a>
                
                <i className="bi bi-calendar-date flex">24/10/2021</i>
            </p>
            <h4 className="bold">
            <a href="https://github.com/spotakash/crosstenantazure" style={{ textDecoration: 'underline' }}>Azure Cross Tenant Access (Authentication, Authorization, Private Communication).</a>
            </h4>
            <span className="bold">Extra: </span>          
              <p className="font-size: 28px;">
                There are two idependent Azure tenants, across which we shall try to build authentication, authorization. Subsequently, we shall have secure private connectivity between both tenant so that communication does not traverse through internet and remain private.
              </p>
    

            <p>
                <ol>
                  <li>
                  <span className="bold">1. Source Tenant: </span>  Tenant which is Central Identity Store. This identity store (Azure AD) will create and store Service Principals. In Source Tenant, We are processing data residing in Destination tenant.
                  </li>
                  <li>
                  <span className="bold">2. Destination Tenant:</span>  Tenant where data is coming in and residing. Data from this tenant can not move out. It is data store.
                  </li>
                </ol>           
              </p>
                <p>Note: <a href="https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals?tabs=browser" style={{ textDecoration: 'underline' }}>Have understanding in Azure Active Diretory what is Application Registration, Enterprise Application (Service Pricipal)</a>                   
                </p>


                <p>

                <ol className="">
                  <span className="bold">Requirements: </span>  
                  <li>
                  <span className="article-post">1.  </span> Systems, running in Source Tenant, should be able to reach Destination Tenant.
                  </li>
                  <li>
                  <span className="article-post">2. </span> While doing so, proper secured authentication and authorization should be performed.
                  </li>
                  <li>
                  <span className="article-post">3. </span> For authentication in Destination Tenant, no guest account access should be used.
                  </li>
                  <li>
                  <span className="article-post">4. </span> Request should not traverse through Internet and traffic should remain total private.
                  </li>
                  <li>
                  <span className="article-post">5. </span> Source and Destination tenant can not have any sort of Virtual Network Peering or Mesh Private Connectivity between them.
                  </li>
                  <li>
                  <span className="article-post">6. </span> All requests at Source Tenant and Destination on Identity, Connectivity and Data Layer should be logged in loganalytics for compliance purpose.
                  </li>
                  <li>
                  <span className="article-post">7. </span> No Private IP hardcoding should be used in any system. Proper FQDNs based DNS resolution happen while accessing/processing data.

                  </li>
                </ol>           
              </p>

              <p>

                <ol className="">
                  <span className="bold">Solution: </span>  
                  <li>
                  <span className="article-post">1.  </span> Use Multi-tenant Azure AD Service Principal (Enterprise Application) to authenticate across Source and Destination Tenants.
                  </li>
                  <li>
                  <span className="article-post">2. </span> Use Cross Tenant Private Endpoint to access resources over Private Network (Microsoft Backbone Network), without having any Virtual Network Peering or Mesh Private Connectivity
                  </li>
                  <li>
                  <span className="article-post">3. </span> Centralized Azure Private DNS Zone for DNS Resoluation for Cross Tenant DNS resolution to Private Endpoint
                  </li>
                </ol>           
                </p>

              <p>
                <img src="https://raw.githubusercontent.com/spotakash/crosstenantazure/main/Images/Cross-Tenant-Access-Azure.jpg" alt="Cross Tenant Access in Azure"></img>
              </p>

              <p>

                  <ol>
                  <span className="bold">Pre-Requirements: </span>  
                    <li>
                    <span className="article-post">1.  </span> Source and Destination Tenant Administrative Rights to create Application under Application Registration
                    </li>
                    <li>
                    <span className="article-post">2. </span> Have a virtual network with subnet (ideally) to be used for Private Endpoint, in Source Tenant.
                    </li>
                    <li>
                    <span className="article-post">3. </span> Source and Destination Tenant Administratibe Rights to create cross tenant Private Endpoint Request (at Source Tenant) And Approval (at Destination Tenant)
                    </li>
                    <li>
                    <span className="article-post">4. </span> Sufficient IAM Role to assign IAM to Service Principal (created above) on Azure resource example: Storage/DB/Redis/AKS etc. (at Destination Tenant).
                      <p>
                        <ol>
                        <li>
                          <span className="article-post-sub">4a.  </span> Atleast, Azure Resource Manager Reader role
                        </li>
                        <li>
                          <span className="article-post-sub">4b.  </span> For Storage Access (example), data access role, such as Storage Blob Data Contributor
                        </li>
                        <li>
                          <span className="article-post-sub">4c.  </span> Define your IAM strategy accordingly. Treat both Control Plane and Data Plane permission <a href="https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal" style={{ textDecoration: 'underline' }}>Good Azure Document to Refer.</a>                   
                        </li>
                        </ol>
                      </p>
                    </li>
                    <li>
                    <span className="article-post">5. </span> If using existing Centralized Azure Private DNZ Zone (in our case we are using), atleast Private DNZ Zone Contributor to allow you to create DNS Record for Existing Private Endpoint
                    </li>
                  </ol>           
                </p>

                <h2 className="step bold">Technical Steps</h2>
                  <div className="step">Create Cross Tenant Application</div>
                  <div className="step">Source Tenant Service Principal Creation</div>
                  <p>

                      <ol>

                        <li>
                        <span className="article-post">1.  </span> Have Service Principal in Source Tenant Identity Store (AAD)
                        <p className="greyBackground">
                          az ad sp create-for-rbac -n &#34;cross-tenant-app&#34;
                        </p>
                        </li>
                        <li>
                        <span className="article-post">2. </span> Retrieving and verifying details
                          <p>
                            <ol>
                            <li>
                              <span className="article-post-sub">2.1.  </span> Note down Application ID and Secret generated in Source Tenant
                            </li>
                            <li>
                              <span className="article-post-sub">2.2.  </span>  Verify Application ID Listed in Application Registration (as <span className="bold">Application (client) ID</span>) and &#39;Enteprise Application&#39; (as <span className="bold">Application ID</span>).
                            </li>

                            </ol>
                          </p>
                        </li>
                        <li>
                          <span className="article-post-sub">3. </span>Go to Application Registration/Authentication and Enable for ApplicationID &#39;Accounts in any organizational directory (<span className="bold">Any Azure AD directory - Multitenant</span>)  
                        </li>
                 
                        <li>
                        <span className="article-post">4. </span> By doing these steps, a multi-tenant Service Principal has been created in Source Tenant.
                        </li>
                      </ol>           
                  </p>

              <p className="font-size: 28px;">
                Stars: 10
              </p>               
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Azure Active Diretory, Application Registration, Enterprise Application (Service Pricipal)" />
        </div>
      </div>

      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://twitter.com/bibryam/status/1728319357854343367" style={{ textDecoration: 'underline' }}>Sidecar Proxy Pattern - The Basis Of Service Mesh by Ivan Velichko</a>
            
            </p>
            <p>
                <a href="https://iximiuz.com/en/posts/service-proxy-pod-sidecar-oh-my/" style={{ textDecoration: 'underline' }}>Sidecar Proxy Pattern - The Basis Of Service Mesh</a>
                <i className="bi bi-calendar-date flex">07/08/2021</i>
            </p>
            <p>
                <img src="https://pbs.twimg.com/media/F_XJTR2W8AA8Lz1?format=jpg&name=4096x4096" alt="bibryam status 1728319357854343367"></img>
              </p>
       
            <p className="font-size: 28px;">
              <a href="https://iximiuz.com/en/posts/service-proxy-pod-sidecar-oh-my/" style={{ textDecoration: 'underline' }}>Sidecar Proxy Pattern - The Basis Of Service Mesh by @iximiuz  
              </a>
            </p>
            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
            Heart: 347
            </p>

            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Sidecar Proxy Pattern, Service Mesh" />
        </div>
      </div>

      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://github.com/connor11528" style={{ textDecoration: 'underline' }}>Connor Leechconnor11528</a> followed <a href="https://github.com/goodgravy" style={{ textDecoration: 'underline' }}>James Bradygoodgravy</a>              
                <i className="bi bi-calendar-date flex">18/03/2021</i>
            </p>
            	
            <span className="bold">Extra: </span>
            <h2 className="step bold">About</h2>
            <p className="font-size: 28px;">
              Redirect ActiveRecord (Rails) reads to replica databases while ensuring all writes go to the primary database.
            </p>
            <div className="step">Status</div>
              <p className="font-size: 28px;">
              This is a slight modification of Rocket Job&#39;s original library, simply renaming it from <span className="greyBackgroundPadding">active_record_slave</span> to <span className="greyBackgroundPadding">active_record_replica</span>.
                </p>
                <p className="font-size: 28px;">
                In order to more clearly distinguish the library from  <span className="greyBackgroundPadding">active_record_slave</span>, we also incremented the major version – it is, however, functionally equivalent.
                </p>
              <div className="step">Introduction</div>
                <p className="font-size: 28px;">
                <span className="greyBackgroundPadding">active_record_replica</span> redirects all database reads to replica instances while ensuring that all writes go to the primary database. <span className="greyBackgroundPadding">active_record_replica</span> ensures that any reads that are performed within a database transaction are by default directed to the primary database to ensure data consistency.
                </p>
              <div className="step">Status</div>
                <p className="font-size: 28px;">
                  Production Ready. Actively used in large production environments.
                </p>
                
                <p>

                      <ol>
                          <p>
                            <li>
                          <span className="article-post">1.1  </span> Redirecting reads to a single replica database.

                          </li>
                          <li>
                          <span className="article-post">1.2  </span> Works with any database driver that works with ActiveRecord.
                          </li>
                          </p>

                        <li>
                        <span className="article-post">2. </span> Supports all Rails 3, 4, or 5 read apis.
                          <p>
                            <ol>
                            <li>
                              <span className="article-post-sub">2.1.  </span>Including dynamic finders, AREL, and ActiveRecord::Base.select.
                            </li>
                            <li>
                              <span className="article-post-sub">2.2.  </span> <span className="bold">NOTE:</span> In Rails 3 and 4, QueryCache is only enabled for BaseConnection by default. In Rails 5, it&#39;s enabled for all connections. <a href="https://github.com/rails/rails/pull/28869" style={{ textDecoration: 'underline' }}>(PR)</a>
                            </li>

                            </ol>
                          </p>
                        </li>

                              <p>
                                    <li>
                                    <span className="article-post">3. </span> Transaction aware
                                      <p>
                                        <ol>
                                        <li>
                                          <span className="article-post-sub">3.1.  </span> Detects when a query is inside of a transaction and sends those reads to the primary by default.
                                        </li>
                                        <li>
                                          <span className="article-post-sub">3.2.  </span> Can be configured to send reads in a transaction to replica databases.
                                        </li>

                                        </ol>
                                      </p>
                                  </li>
                              </p>

                          <p>
                            <li>
                            <span className="article-post-sub">4. </span>Lightweight footprint.
                          </li>
                          </p>

                        <p>
                          <li>
                          <span className="article-post">5. </span> No overhead whatsoever when a replica is not configured.
                          </li>
                        </p>
                 
                        <p>
                          <li>
                          <span className="article-post">6. </span> Negligible overhead when redirecting reads to the replica.
                          </li>
                        </p>


                        <p>
                          <li>
                          <span className="article-post">7. </span> Connection Pools to both databases are retained and maintained independently by ActiveRecord.
                          </li>
                        </p>

                        
                        <li>
                        <span className="article-post">8. </span> The primary and replica databases do not have to be of the same type.
                          <p>
                            <ol>
                            <li>
                              <span className="article-post-sub">8.1.  </span>For example Oracle could be the primary with MySQL as the replica database.
                            </li>

                            </ol>
                          </p>
                        </li>


                        <li>
                        <span className="article-post">9. </span>Debug logs include a prefix of Replica:  to indicate which SQL statements are going to the replica database.
                        </li>
                      </ol>           
                  </p>

              <div className="greyBackground">
                <span  style={{ padding: '.75em 1em' }}>Code: </span> 
                <ReadReplicaRails/>
              </div>
                
              <p className="font-size: 28px;">
                Stars: 160
              </p>
              
   
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Redirect ActiveRecord (Rails) reads to replica databases, write to Primary database" />
        </div>
      </div>


      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://ntietz.com/blog/rsa-deceptively-simple/" style={{ textDecoration: 'underline' }}>RSA is deceptively simple (and fun)</a>
                <i className="bi bi-calendar-date flex">15/01/2024</i>
            </p>
            <p>
              While reading  <a href="https://www.manning.com/books/real-world-cryptography" style={{ textDecoration: 'underline' }}>Real-World Cryptography 
              </a>, I came across the  <a href="https://en.wikipedia.org/wiki/Adaptive_chosen-ciphertext_attack" style={{ textDecoration: 'underline' }}>&#34;million message attack&#34;. 
              </a> This is an attack that Daniel Bleichenbacher demonstrated in 1998, which effectively broke RSA with a particular encoding function called PKCS #1. It was only mentioned briefly, so I dug in and decided to try to understand the attack, eventually to implement it.
            </p>
            <p>
              Most crypto libraries do not ship with a vulnerable implementation of this, for good reason. It&#39;s been broken! And if I implement the full attack against a real implementation, it would also come with using realistic key size.
            </p>
       
            <p className="font-size: 28px;">
              Instead, I decided to implement RSA myself so that I could implement a weak encoding scheme so I could implement the Bleichenbacher attack! So far, I have an implementation of RSA and of PKCS (the vulnerable one). The basics of RSA took an hour to implement, then what felt like days to debug. And now it (seemingly) works! The attack will follow soon, with any luck.
            </p>

            <h2 className="step bold">What&#39;s RSA, anyway?</h2>

            <p className="font-size: 28px;">
              RSA is a public-key cryptosystem, in contrast to symmetric key cryptosystems. With symmetric keys, the sender and the recipient both share a key and use the same key to encrypt and decrypt the message. In contrast, public-key cryptosystems have a key pair, a public and a private key. The public key can be used to encrypt messages and the private key to decrypt them<sup>1</sup>.
            </p>
            <p className="font-size: 28px;">
              One of the drawbacks of a symmetric key system is that you have to share the key. This means you have to use a different secure channel to transmit the key, and then both parties need to be really careful to keep it a secret. This isn&#39;t manageable for a system with a lot of participants, like the internet!
            </p>
            <p className="font-size: 28px;">
            But symmetric key encryption is often very fast, and we have some of the operations for it even  <a href="https://en.wikipedia.org/wiki/AES_instruction_set" style={{ textDecoration: 'underline' }}>baked into hardware.</a> It would be nice to use it where we can for that efficiency.
            </p>


            <p className="font-size: 28px;">
              In contrast, with public-key cryptography, you can freely share the public key, and anyone can then use that to encrypt a message to you. This means you do not need a separate secure channel to share the key! (Although this ignores the whole problem of validating that the key comes from the right person, so you&#39;re not having your connection spoofed by an interloper.) And this is great! This is what RSA gives us, but the computations for RSA are slow and the messages you can send are also small.
            </p>

            <p className="font-size: 28px;">
              In practice, RSA was used (regrettably, sometimes still is) to establish a secure connection and perform a key exchange, and then the keys you exchange let you use symmetric key encryption. You probably 
              <a href="https://blog.trailofbits.com/2019/07/08/fuck-rsa/" style={{ textDecoration: 'underline' }}> shouldn&#39;t use RSA.</a> Modern alternatives exist that are better, like Curve25519 and other forms of elliptic-curve cryptography.
            </p>

            <p className="font-size: 28px;">
              But for worse, we run into RSA, and it&#39;s also a fun historical artifact! It&#39;s worth understanding in, and hey, implementing it is just plain fun.
            </p>

            <h2 className="step bold">The basics of RSA</h2>

              <p>
                  <a href="https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29" style={{ textDecoration: 'underline' }}>RSA </a>is a nicely elegant cryptosystem. Its security is based on the difficulty of factoring the product of large prime numbers, and in its purest form it has no known breaks<sup>2</sup>.However, as mentioned above, depending on how data is encoded, particular uses of it can be broken.
              </p>

              <p className="font-size: 28px;">
                The basic operations of it are straightforward to express. There are three components:
              </p>                       
              <p>

                <ol>
                    <p>
                      <li>
                    <span className="article-post">1.  </span> Generating keys

                    </li>
                    <li>
                    <span className="article-post">2.  </span> Encrypting and decrypting!
                    </li>

                    <li>
                    <span className="article-post">3.  </span>  Encoding messages
                    </li>
                    </p>
                </ol>           
              </p>

              <p className="font-size: 28px;">
                We&#39;ll go through each of those, starting with generating keys.
              </p>  

              <h2 className="step bold">Generating your keys</h2>
              <p className="font-size: 28px;">
                First of all, what even is a key? We know that it&#39;s used to encrypt or decrypt a message, but what is inside it?
              </p>  
              <p>
                For RSA, a key comprises two numbers. One of these is called the <span className="bold">exponent</span> and one is the <span className="bold">modulus</span>. A key could be <span className="bold">(exp=3, mod=3233)</span>, for example. It&#39;s really just this pair of numbers<sup>3</sup>.
              </p>

              <p className="font-size: 28px;">
                The reason the pieces of it are called the exponent and modulus is because of how we use them! RSA relies on 
                <a href="https://en.wikipedia.org/wiki/Modular_arithmetic" style={{ textDecoration: 'underline' }}>modular arithmetic </a>
                 (like clock math, if you&#39;re not familiar). These are the exponents and modulus for the encryption or decryption operations which we&#39;ll see later.
              </p>  
            
              <p className="font-size: 28px;">
              To generate a key, you follow a short procedure.
              </p>  

              <p>

                <ol>
                    <p>
                      <li>
                    <span className="article-post">1.  </span> First, pick two prime numbers which we&#39;ll call p and q. Then we compute <span className="bold">n = p * q.</span>

                    </li>
                    <li>
                    <span className="article-post">2.  </span> Compute a number <span className="bold">t = lcm(p-1, q-1).</span> This is the totient, and we use this as our modulus for generating the keys but then never again.
                    </li>

                    <li>
                    <span className="article-post">3.  </span>  Pick the public exponent, which we&#39;ll call <span className="bold">e.</span> The requirement is that it shares no factors with t and is greater than 2. One simple way is to start with 3, but go up through the primes until you find one coprime with t. Choosing 65537 is also quite common, since it&#39;s small enough to be efficient for encryption but large enough to avoid some particular attacks.
                    </li>

                    <li>
                    <span className="article-post">4.  </span>  Calculate the private exponent, which we&#39;ll call <span className="bold">d.</span> We compute this as <span className="bold">d = e^-1 mod t,</span> or the inverse of <span className="bold">e</span> in our modulus.
                    </li>

                    </p>
                </ol>           
              </p>


              <p className="font-size: 28px;">
                Now you have<span className="bold">d</span> and <span className="bold">e</span>, the private and public exponents, and you have n, the modulus. Bundle those up into two tuples and you have your keys!
              </p> 



              <p className="font-size: 28px;">
                Let&#39;s work an example quickly to see how it ends up. For our primes, we can choose <span className="bold">p = 17 </span>and <span className="bold">q = 29</span>. So then <span className="bold">n = 493</span>.
              </p>

              <p className="font-size: 28px;">
                Now we find <span className="bold">t = lcm(17 - 1, 29 - 1) = lcm(16, 28) = 112 </span>. We&#39;ll choose e = 3, which works since 2 &lt; 3 and gcd(3, 112) = 1 so we know they share no factors. Now we compute <sub>4</sub> <span className="bold">d = e<sup>-1</sup> = 3<sup>-1</sup> = 75 mod 112.</span>   And then we have our keys!
              </p>


              <p className="font-size: 28px;">
                Our public key is (exp=3, mod=493), and our private key is (exp=75, mod=493). We&#39;ll use these again in our examples on encrypting and decrypting!
              </p> 






            <span className="bold">Extra: </span>

            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="RSA, symmetric key encryption, public-key cryptography" />
        </div>
      </div>




      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://twitter.com/pim_brouwers/status/1731747678004941061" style={{ textDecoration: 'underline' }}>A reverse proxy as a configurable package on top of Kestrel</a>
            
            </p>
            <p className="font-size: 28px;">
            Sign me up! Maybe I live under a rock, but I feel like this deserves a ton more attention.
            </p>
            <p>
            About 
            </p>             
            <p className="font-size: 28px;">
              <a href="https://github.com/microsoft/reverse-proxy" style={{ textDecoration: 'underline' }}>A toolkit for developing high-performance HTTP reverse proxy applications.   
              </a>
            </p>
            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
            Stars: 7.6k 
            </p>
             
            <p className="font-size: 28px;">
            One popular Author,  <a href="https://twitter.com/mjovanovictech" style={{ textDecoration: 'underline' }}>Milan Jovanović @mjovanovictech
              </a>,  Practical .NET and Software Architecture Tips | Microsoft MVP   
            </p>

            <p className="quote">
                <a href="https://twitter.com/mjovanovictech/status/1731790455249973524" style={{ textDecoration: 'underline' }}>It&#39;s so cool! I wrote an article about it a few months ago. I used it for load balancing, and it was a breeze to set up.  
                  </a>
            </p>
            <p className="font-size: 28px;">
             Link to the article:
            </p>
            <p className="font-size: 28px;">
              <a href="https://www.milanjovanovic.tech/blog/implementing-an-api-gateway-for-microservices-with-yarp" style={{ textDecoration: 'underline' }}>https://www.milanjovanovic.tech/blog/implementing-an-api-gateway-for-microservices-with-yarp 
              </a>
            </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="toolkit for  high-performance HTTP reverse proxy by Microsoft" />
        </div>
      </div>




      <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
        <div className="col-sm-12">
            <p className="font-size: 28px;">
                <a href="https://willcrichton.net/notes/k-corrset/" style={{ textDecoration: 'underline' }}>Analyzing Data 180,000x Faster with Rust</a>
                <i className="bi bi-calendar-date flex">20/10/2023</i>
            </p>
            <p className="font-size: 28px;">
              This note documents one of my recent adventures in performance optimization with Rust. By following along, hopefully you&#39;ll learn something about how to write fast Rust.
            </p>
            <p>
            Here&#39;s the context: imagine you have data from an online exam where a set of users answered a set of questions. The raw data looks like this:
            </p>
              

            <p className="greyBackground">
              <AnalyzeData180000xFasterRust />
            </p>

            <p className="font-size: 28px;">
              Note that each user only answered a subset of all possible questions, and all scores are either 0 or 1.
            </p>
            <p className="font-size: 28px;">
            Here&#39;s the problem: given a size  <span className="italics">k</span>, which set of <span className="italics">k</span> questions has the highest correlation with overall performance? We&#39;ll call this the <span className="bold">k-CorrSet problem</span>. A simple brute-force algorithm for solving the k-CorrSet problem looks like this pseudocode:
            </p>
            
            <p className="font-size: 28px;">
              We are going to implement several variations on this algorithm to see how fast we can make it.
            </p>
  
                      <p><strong>Can you explain in depth on this?</strong></p>
          <p>The algorithm iterates through all possible k-sized subsets of questions, calculates the correlation between the scores on that subset and the grand scores on all questions, and returns the subset with the maximum correlation.</p>

          <p><strong>ChatGPT:</strong></p>
          <p><strong>Certainly! Let&#39;s break down the key steps of the algorithm that iterates through all possible k-sized subsets of questions, calculates the correlation, and returns the subset with the maximum correlation.</strong></p>
          <p><strong>Here&#39;s a more detailed explanation:</strong></p>

          <ol>
            <li>
              <p><span className="article-post">1.  </span> <strong>Generate all k-sized subsets of questions:</strong></p>
              <p>The algorithm starts by obtaining all possible questions from the given dataset. Then, it iterates through all k-sized subsets of these questions. For example, if k is 3, it would consider all possible combinations of 3 questions out of the total set of questions.</p>
            </li>
            <li>
              <p><span className="article-post">2.  </span><strong>Identify users who answered every question in the subset:</strong></p>
              <p>For each k-sized subset of questions, the algorithm identifies all users who answered every question in that subset. This is important because the correlation calculation requires data from users who answered all questions in the subset.</p>
            </li>
            <li>
              <p><span className="article-post">3.  </span><strong>Calculate total scores on the subset for each user:</strong></p>
              <p>Once the algorithm has the subset of questions and the corresponding users, it calculates the total score on that subset for each user. It sums up the scores of each user for the questions in the subset.</p>
            </li>
            <li>
              <p><span className="article-post">4.  </span><strong>Calculate the grand total scores on all questions for each user:</strong></p>
              <p>Simultaneously, the algorithm calculates the grand total scores on all questions for each user. This involves summing up the scores of each user for all questions, not just the subset.</p>
            </li>
            <li>
              <p><span className="article-post">5.  </span><strong>Calculate the correlation between subset scores and grand total scores:</strong></p>
              <p>With the total scores on the subset and the grand total scores for each user, the algorithm calculates the correlation between these two sets of scores. The correlation coefficient is a measure of the linear relationship between two sets of data. It ranges from -1 to 1, where -1 indicates a perfect negative correlation, 1 indicates a perfect positive correlation, and 0 indicates no correlation.</p>
              <p>The correlation calculation could use statistical methods such as Pearson correlation coefficient, which measures the linear correlation between two variables. The formula for Pearson correlation is:</p>
              <p>𝑟 = ∑ (𝑥𝑖 − 𝑥¯)(𝑦𝑖 − 𝑦¯ ) / √ ∑ (𝑥𝑖 − 𝑥¯ )^2 ∑ (𝑦 − 𝑦¯ )^2</p>
              <p>Where:</p>
              <p>𝑥𝑖xi and 𝑦𝑖yi are the individual scores of the users on the subset and grand total, respectively.</p>
              <p>𝑥¯xˉ and 𝑦¯yˉ are the means of the scores on the subset and grand total, respectively.</p>
            </li>
            <li>
              <p><span className="article-post">6.  </span><strong>Return the subset with the maximum correlation:</strong></p>
              <p>After calculating the correlation for each k-sized subset, the algorithm identifies the subset with the maximum correlation coefficient and returns it as the result. This subset is considered to have the highest correlation with overall performance.</p>
            </li>
          </ol>

          <p><strong>Note:</strong></p>
          <p>The described algorithm is a brute-force approach, meaning it considers all possible subsets and calculates correlations for each. While it provides a straightforward solution to the k-CorrSet problem, it might be computationally expensive for large datasets. The author&#39;s exploration in Rust likely involves optimizing this algorithm or exploring alternative approaches to improve its efficiency.</p>


            <span className="bold">Extra: </span>
            <p className="font-size: 28px;">
            Stars: 42 
            </p>
             
            <p className="font-size: 28px;">
             Link to the article:
            </p>
            <p className="font-size: 28px;">
              <a href="https://willcrichton.net/notes/k-corrset/" style={{ textDecoration: 'underline' }}>Analyzing Data 180,000x Faster with Rust
              </a>
            </p>
            <p>Extra_End</p>
        </div>
        <div className="tags">
            <span className="bold">Tags: </span> 
            <Tag value="Performance optimization with Rust" />
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
