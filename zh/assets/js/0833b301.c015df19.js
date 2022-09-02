"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6456],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return i?r.createElement(h,a(a({ref:t},p),{},{components:i})):r.createElement(h,a({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},35985:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:2},a=void 0,l={unversionedId:"Metrics/CycleTime",id:"Metrics/CycleTime",title:"PR Cycle Time",description:"PR Cycle Time\n",source:"@site/docs/Metrics/CycleTime.md",sourceDirName:"Metrics",slug:"/Metrics/CycleTime",permalink:"/zh/docs/Metrics/CycleTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CycleTime.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"PR Coding Time",permalink:"/zh/docs/Metrics/CodingTime"},next:{title:"PR Deploy Time",permalink:"/zh/docs/Metrics/DeployTime"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"PR Cycle Time is the sum of PR Coding Time, Pickup TIme, Review Time and Deploy Time. It is the total time from the first commit to when the PR is deployed."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("p",null,"PR Cycle Time indicate the overall speed of the delivery progress in terms of PR. "),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time"),(0,n.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time - Team View")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"You can define ",(0,n.kt)("inlineCode",{parentName:"p"},"deployment")," based on your actual practice. For a full list of ",(0,n.kt)("inlineCode",{parentName:"p"},"deployment"),"'s definitions that DevLake support, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/DeploymentFrequency"},"Deployment Frequency"),"."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on PR/MRs collected from GitHub or GitLab."),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Divide coding tasks into workable and manageable pieces;"),(0,n.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,n.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,n.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued;"),(0,n.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,n.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,n.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}u.isMDXComponent=!0}}]);