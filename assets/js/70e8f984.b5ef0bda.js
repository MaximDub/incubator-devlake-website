"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3303],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>b});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(i),b=o,h=m["".concat(s,".").concat(b)]||m[b]||c[b]||r;return i?n.createElement(h,a(a({ref:t},d),{},{components:i})):n.createElement(h,a({ref:t},d))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},16422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const r={sidebar_position:8,title:"Engineering Metrics",linkTitle:"Engineering Metrics",tags:[],description:"The definition, values and data required for the 20+ engineering metrics supported by DevLake.\n"},a=void 0,l={unversionedId:"EngineeringMetrics",id:"EngineeringMetrics",title:"Engineering Metrics",description:"The definition, values and data required for the 20+ engineering metrics supported by DevLake.\n",source:"@site/docs/EngineeringMetrics.md",sourceDirName:".",slug:"/EngineeringMetrics",permalink:"/docs/EngineeringMetrics",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/EngineeringMetrics.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Engineering Metrics",linkTitle:"Engineering Metrics",tags:[],description:"The definition, values and data required for the 20+ engineering metrics supported by DevLake.\n"},sidebar:"docsSidebar",previous:{title:"Domain Layer Schema",permalink:"/docs/DataModels/DevLakeDomainLayerSchema"},next:{title:"DBT",permalink:"/docs/Plugins/dbt"}},s={},u=[],d={toc:u};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("b",null,"Category")),(0,o.kt)("th",null,(0,o.kt)("b",null,"Metric Name")),(0,o.kt)("th",null,(0,o.kt)("b",null,"Definition")),(0,o.kt)("th",null,(0,o.kt)("b",null,"Data Required")),(0,o.kt)("th",{style:{width:"70%"}},(0,o.kt)("b",null,"Use Scenarios and Recommended Practices")),(0,o.kt)("th",null,(0,o.kt)("b",null,"Value\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"10"},"Delivery Velocity"),(0,o.kt)("td",null,"Requirement Count"),(0,o.kt)("td",null,'Number of issues in type "Requirement"'),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc"),(0,o.kt)("td",{rowspan:"2"},"1. Analyze the number of requirements and delivery rate of different time cycles to find the stability and trend of the development process.",(0,o.kt)("br",null),"2. Analyze and compare the number of requirements delivered and delivery rate of each project/team, and compare the scale of requirements of different projects.",(0,o.kt)("br",null),"3. Based on historical data, establish a baseline of the delivery capacity of a single iteration (optimistic, probable and pessimistic values) to provide a reference for iteration estimation.",(0,o.kt)("br",null),"4. Drill down to analyze the number and percentage of requirements in different phases of SDLC. Analyze rationality and identify the requirements stuck in the backlog."),(0,o.kt)("td",{rowspan:"2"},"1. Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources.",(0,o.kt)("br",null),"2. Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Requirement Delivery Rate"),(0,o.kt)("td",null,"Ratio of delivered requirements to all requirements"),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Requirement Lead Time"),(0,o.kt)("td",null,'Lead time of issues with type "Requirement"'),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc"),(0,o.kt)("td",null,"1. Analyze the trend of requirement lead time to observe if it has improved over time.",(0,o.kt)("br",null),"2. Analyze and compare the requirement lead time of each project/team to identify key projects with abnormal lead time.",(0,o.kt)("br",null),"3. Drill down to analyze a requirement's staying time in different phases of SDLC. Analyze the bottleneck of delivery velocity and improve the workflow."),(0,o.kt)("td",null,"1. Analyze key projects and critical points, identify good/to-be-improved practices that affect requirement lead time, and reduce the risk of delays",(0,o.kt)("br",null),"2. Focus on the end-to-end velocity of value delivery process; coordinate different parts of R&D to avoid efficiency shafts; make targeted improvements to bottlenecks.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Requirement Granularity"),(0,o.kt)("td",null,"Number of story points associated with an issue"),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc"),(0,o.kt)("td",null,"1. Analyze the story points/requirement lead time of requirements to evaluate whether the ticket size, ie. requirement complexity is optimal.",(0,o.kt)("br",null),"2. Compare the estimated requirement granularity with the actual situation and evaluate whether the difference is reasonable by combining more microscopic workload metrics (e.g. lines of code/code equivalents)"),(0,o.kt)("td",null,"1. Promote product teams to split requirements carefully, improve requirements quality, help developers understand requirements clearly, deliver efficiently and with high quality, and improve the project management capability of the team.",(0,o.kt)("br",null),"2. Establish a data-supported workload estimation model to help R&D teams calibrate their estimation methods and more accurately assess the granularity of requirements, which is useful to achieve better issue planning in project management.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Commit Count"),(0,o.kt)("td",null,"Number of Commits"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitextractor/README.md"},"Git"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," commits"),(0,o.kt)("td",null,"1. Identify the main reasons for the unusual number of commits and the possible impact on the number of commits through comparison",(0,o.kt)("br",null),"2. Evaluate whether the number of commits is reasonable in conjunction with more microscopic workload metrics (e.g. lines of code/code equivalents)"),(0,o.kt)("td",null,"1. Identify potential bottlenecks that may affect output",(0,o.kt)("br",null),"2. Encourage R&D practices of small step submissions and develop excellent coding habits")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Added Lines of Code"),(0,o.kt)("td",null,"Accumulated number of added lines of code"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitextractor/README.md"},"Git"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," commits"),(0,o.kt)("td",{rowspan:"2"},"1. From the project/team dimension, observe the accumulated change in Added lines to assess the team activity and code growth rate",(0,o.kt)("br",null),"2. From version cycle dimension, observe the active time distribution of code changes, and evaluate the effectiveness of project development model.",(0,o.kt)("br",null),"3. From the member dimension, observe the trend and stability of code output of each member, and identify the key points that affect code output by comparison."),(0,o.kt)("td",{rowspan:"2"},"1. identify potential bottlenecks that may affect the output",(0,o.kt)("br",null),"2. Encourage the team to implement a development model that matches the business requirements; develop excellent coding habits")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Deleted Lines of Code"),(0,o.kt)("td",null,"Accumulated number of deleted lines of code"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitextractor/README.md"},"Git"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," commits")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Pull Request Review Time"),(0,o.kt)("td",null,"Time from Pull/Merge created time until merged"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc"),(0,o.kt)("td",null,"1. Observe the mean and distribution of code review time from the project/team/individual dimension to assess the rationality of the review time"),(0,o.kt)("td",null,"1. Take inventory of project/team code review resources to avoid lack of resources and backlog of review sessions, resulting in long waiting time",(0,o.kt)("br",null),"2. Encourage teams to implement an efficient and responsive code review mechanism")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Bug Age"),(0,o.kt)("td",null,'Lead time of issues in type "Bug"'),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc"),(0,o.kt)("td",{rowspan:"2"},"1. Observe the trend of bug age and locate the key reasons.",(0,o.kt)("br",null),"2. According to the severity level, type (business, functional classification), affected module, source of bugs, count and observe the length of bug and incident age."),(0,o.kt)("td",{rowspan:"2"},"1. Help the team to establish an effective hierarchical response mechanism for bugs and incidents. Focus on the resolution of important problems in the backlog.",(0,o.kt)("br",null),"2. Improve team's and individual's bug/incident fixing efficiency. Identify good/to-be-improved practices that affect bug age or incident age")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Incident Age"),(0,o.kt)("td",null,'Lead time of issues in type "Incident"'),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"8"},"Delivery Quality"),(0,o.kt)("td",null,"Pull Request Count"),(0,o.kt)("td",null,"Number of Pull/Merge Requests"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc"),(0,o.kt)("td",{rowspan:"3"},"1. From the developer dimension, we evaluate the code quality of developers by combining the task complexity with the metrics related to the number of review passes and review rounds.",(0,o.kt)("br",null),"2. From the reviewer dimension, we observe the reviewer's review style by taking into account the task complexity, the number of passes and the number of review rounds.",(0,o.kt)("br",null),"3. From the project/team dimension, we combine the project phase and team task complexity to aggregate the metrics related to the number of review passes and review rounds, and identify the modules with abnormal code review process and possible quality risks."),(0,o.kt)("td",{rowspan:"3"},"1. Code review metrics are process indicators to provide quick feedback on developers' code quality",(0,o.kt)("br",null),"2. Promote the team to establish a unified coding specification and standardize the code review criteria",(0,o.kt)("br",null),"3. Identify modules with low-quality risks in advance, optimize practices, and precipitate into reusable knowledge and tools to avoid technical debt accumulation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Pull Request Pass Rate"),(0,o.kt)("td",null,"Ratio of Pull/Merge Review requests to merged"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Pull Request Review Rounds"),(0,o.kt)("td",null,"Number of cycles of commits followed by comments/final merge"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Pull Request Review Count"),(0,o.kt)("td",null,"Number of Pull/Merge Reviewers"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc"),(0,o.kt)("td",null,"1. As a secondary indicator, assess the cost of labor invested in the code review process"),(0,o.kt)("td",null,"1. Take inventory of project/team code review resources to avoid long waits for review sessions due to insufficient resource input")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Bug Count"),(0,o.kt)("td",null,"Number of bugs found during testing"),(0,o.kt)("td",null,"Issue/Task Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jira/README.md"},"Jira issues"),", ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub issues"),", etc"),(0,o.kt)("td",{rowspan:"4"},"1. From the project or team dimension, observe the statistics on the total number of defects, the distribution of the number of defects in each severity level/type/owner, the cumulative trend of defects, and the change trend of the defect rate in thousands of lines, etc.",(0,o.kt)("br",null),"2. From version cycle dimension, observe the statistics on the cumulative trend of the number of defects/defect rate, which can be used to determine whether the growth rate of defects is slowing down, showing a flat convergence trend, and is an important reference for judging the stability of software version quality",(0,o.kt)("br",null),"3. From the time dimension, analyze the trend of the number of test defects, defect rate to locate the key items/key points",(0,o.kt)("br",null),"4. Evaluate whether the software quality and test plan are reasonable by referring to CMMI standard values"),(0,o.kt)("td",{rowspan:"4"},"1. Defect drill-down analysis to inform the development of design and code review strategies and to improve the internal QA process",(0,o.kt)("br",null),"2. Assist teams to locate projects/modules with higher defect severity and density, and clean up technical debts",(0,o.kt)("br",null),"3. Analyze critical points, identify good/to-be-improved practices that affect defect count or defect rate, to reduce the amount of future defects")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Incident Count"),(0,o.kt)("td",null,"Number of Incidents found after shipping"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Bugs Count per 1k Lines of Code"),(0,o.kt)("td",null,"Amount of bugs per 1,000 lines of code"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Incidents Count per 1k Lines of Code"),(0,o.kt)("td",null,"Amount of incidents per 1,000 lines of code"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Delivery Cost"),(0,o.kt)("td",null,"Commit Author Count"),(0,o.kt)("td",null,"Number of Contributors who have committed code"),(0,o.kt)("td",null,"Source Code Management entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitextractor/README.md"},"Git"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/github/README.md"},"GitHub"),"/",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLab")," commits"),(0,o.kt)("td",null,"1. As a secondary indicator, this helps assess the labor cost of participating in coding"),(0,o.kt)("td",null,"1. Take inventory of project/team R&D resource inputs, assess input-output ratio, and rationalize resource deployment")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"3"},"Delivery Capability"),(0,o.kt)("td",null,"Build Count"),(0,o.kt)("td",null,"The number of builds started"),(0,o.kt)("td",null,"CI/CD entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jenkins/README.md"},"Jenkins")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLabCI")," MRs, etc"),(0,o.kt)("td",{rowspan:"3"},"1. From the project dimension, compare the number of builds and success rate by combining the project phase and the complexity of tasks",(0,o.kt)("br",null),"2. From the time dimension, analyze the trend of the number of builds and success rate to see if it has improved over time"),(0,o.kt)("td",{rowspan:"3"},"1. As a process indicator, it reflects the value flow efficiency of upstream production and research links",(0,o.kt)("br",null),"2. Identify excellent/to-be-improved practices that impact the build, and drive the team to precipitate reusable tools and mechanisms to build infrastructure for fast and high-frequency delivery")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Build Duration"),(0,o.kt)("td",null,"The duration of successful builds"),(0,o.kt)("td",null,"CI/CD entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jenkins/README.md"},"Jenkins")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLabCI")," MRs, etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Build Success Rate"),(0,o.kt)("td",null,"The percentage of successful builds"),(0,o.kt)("td",null,"CI/CD entities: ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/jenkins/README.md"},"Jenkins")," PRs, ",(0,o.kt)("a",{href:"https://github.com/merico-dev/lake/blob/main/plugins/gitlab/README.md"},"GitLabCI")," MRs, etc"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}c.isMDXComponent=!0}}]);