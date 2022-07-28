"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Feishu",description:"Feishu Plugin\n"},a=void 0,l={unversionedId:"Plugins/feishu",id:"Plugins/feishu",title:"Feishu",description:"Feishu Plugin\n",source:"@site/docs/Plugins/feishu.md",sourceDirName:"Plugins",slug:"/Plugins/feishu",permalink:"/zh/docs/Plugins/feishu",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/feishu.md",tags:[],version:"current",frontMatter:{title:"Feishu",description:"Feishu Plugin\n"},sidebar:"docsSidebar",previous:{title:"DBT",permalink:"/zh/docs/Plugins/dbt"},next:{title:"Gitee(WIP)",permalink:"/zh/docs/Plugins/gitee"}},u={},s=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>.env</code>",id:"by-env",level:3},{value:"Collect data from Feishu",id:"collect-data-from-feishu",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Feishu meeting data through ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/home/user-identity-introduction/introduction"},"Feishu Openapi"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get app_id and app_secret from a Feishu administrator (for help on App info, please see ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal"},"official Feishu Docs"),"),\nthen set these two parameters via Dev Lake's ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("h3",{id:"by-env"},"By ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")),(0,o.kt)("p",null,"The connection aspect of the configuration screen requires the following key fields to connect to the Feishu API. As Feishu is a single-source data provider at the moment, the connection name is read-only as there is only one instance to manage. As we continue our development roadmap we may enable multi-source connections for Feishu in the future."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FEISHU_APPID=app_id\nFEISHU_APPSCRECT=app_secret\n")),(0,o.kt)("h2",{id:"collect-data-from-feishu"},"Collect data from Feishu"),(0,o.kt)("p",null,"To collect data, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "feishu",\n      "options": {\n        "numOfDaysToCollect" : 80,\n        "rateLimitPerSecond" : 5\n      }\n    }\n  ]\n]\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"numOfDaysToCollect"),": The number of days you want to collect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"rateLimitPerSecond"),": The number of requests to send(Maximum is 8)")),(0,o.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu 20211126",\n    "tasks": [[{\n      "plugin": "feishu",\n      "options": {\n        "numOfDaysToCollect" : 80,\n        "rateLimitPerSecond" : 5\n      }\n    }]]\n}\n\'\n')))}p.isMDXComponent=!0}}]);