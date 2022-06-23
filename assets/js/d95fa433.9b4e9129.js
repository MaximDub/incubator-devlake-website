"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5284],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:3,title:"Development Workflow"},l="Development Workflow",s={unversionedId:"make-contribution/development-workflow",id:"make-contribution/development-workflow",title:"Development Workflow",description:"This document shows the workflow of how to develop DevLake.",source:"@site/community/make-contribution/development-workflow.md",sourceDirName:"make-contribution",slug:"/make-contribution/development-workflow",permalink:"/community/make-contribution/development-workflow",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Development Workflow"},sidebar:"communitySidebar",previous:{title:"Contributing to Issues",permalink:"/community/make-contribution/fix-or-create-issues"},next:{title:"Becoming a Committer",permalink:"/community/make-contribution/contributor-growth-program"}},u={},m=[{value:"Step 1 - Clone the repo",id:"step-1---clone-the-repo",level:2},{value:"Step 2 - Keep your branch in sync",id:"step-2---keep-your-branch-in-sync",level:2},{value:"Step 3 - Coding",id:"step-3---coding",level:2},{value:"Step 4 - Commit &amp; Push",id:"step-4---commit--push",level:2},{value:"Style guides",id:"style-guides",level:3},{value:"Git Commit message",id:"git-commit-message",level:5},{value:"Commit tool",id:"commit-tool",level:5}],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-workflow"},"Development Workflow"),(0,i.kt)("p",null,"This document shows the workflow of how to develop DevLake."),(0,i.kt)("h2",{id:"step-1---clone-the-repo"},"Step 1 - Clone the repo"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create your clone locally")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ${WORKING_PATH}\ncd ${WORKING_PATH}\n# You can also use the url: git@github.com:merico-dev/lake.git\n# if your ssh configuration is proper\ngit clone https://github.com/merico-dev/lake.git\n\ncd lake\n\ngit remote add upstream https://github.com/apache/incubator-devlake.git\n# Never push to upstream locally\ngit remote set-url --push upstream no_push\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Confirm the remotes you've set is make sense")),(0,i.kt)("p",null,"Execute ",(0,i.kt)("inlineCode",{parentName:"p"},"git remote -v")," and you'll see output like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"origin  git@github.com:merico-dev/lake.git (fetch)\norigin  git@github.com:merico-dev/lake.git (push)\nupstream        https://github.com/apache/incubator-devlake.git (fetch)\nupstream        no_push (push)\n")),(0,i.kt)("h2",{id:"step-2---keep-your-branch-in-sync"},"Step 2 - Keep your branch in sync"),(0,i.kt)("p",null,"You will often need to update your local code to keep in sync with upstream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream\ngit checkout main\ngit rebase upstream/main\n")),(0,i.kt)("h2",{id:"step-3---coding"},"Step 3 - Coding"),(0,i.kt)("p",null,"First, you need to pull a new branch, the name is according to your own taste."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b feat-xxx\n")),(0,i.kt)("p",null,"Then start coding."),(0,i.kt)("h2",{id:"step-4---commit--push"},"Step 4 - Commit & Push"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git add <file>\ngit commit -s -m "some description here"\ngit push -f origin feat-xxx\n')),(0,i.kt)("h3",{id:"style-guides"},"Style guides"),(0,i.kt)("h5",{id:"git-commit-message"},"Git Commit message"),(0,i.kt)("p",null,"We follow the ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"conventional commits")," guidelines."),(0,i.kt)("h5",{id:"commit-tool"},"Commit tool"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lintingzhen/commitizen-go"},"https://github.com/lintingzhen/commitizen-go")," to author our commits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> git cz\n\ncz-cli@4.2.4, cz-conventional-changelog@3.3.0\n\n? Select the type of change that you're committing: (Use arrow keys)\n> feat:     A new feature\n  fix:      A bug fix\n  docs:     Documentation only changes\n  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\n  refactor: A code change that neither fixes a bug nor adds a feature\n  perf:     A code change that improves performance\n  test:     Adding missing tests or correcting existing tests\n(Move up and down to reveal more choices)\n? What is the scope of this change (e.g. component or file name): (press enter to skip)\n? Write a short, imperative tense description of the change (max 93 chars):\n (23) add commit message tool\n? Provide a longer description of the change: (press enter to skip)\n\n? Are there any breaking changes? No\n? Does this change affect any open issues? No\n[chore/commit_message dc34f57] chore: add commit message tool\n 5 files changed, 585 insertions(+), 4 deletions(-)\n")),(0,i.kt)("p",null,"Then you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"pr")," on GitHub."))}h.isMDXComponent=!0}}]);