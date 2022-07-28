"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"Blog Submission",description:"Instructions for how to submit a blog post to DevLake Blog\n"},r=void 0,l={unversionedId:"make-contribution/BlogSubmission",id:"make-contribution/BlogSubmission",title:"Blog Submission",description:"Instructions for how to submit a blog post to DevLake Blog\n",source:"@site/community/make-contribution/BlogSubmission.md",sourceDirName:"make-contribution",slug:"/make-contribution/BlogSubmission",permalink:"/zh/community/make-contribution/BlogSubmission",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Blog Submission",description:"Instructions for how to submit a blog post to DevLake Blog\n"},sidebar:"communitySidebar",previous:{title:"How to Make Contributions?",permalink:"/zh/community/"},next:{title:"Contributing to Issues",permalink:"/zh/community/make-contribution/fix-or-create-issues"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Steps - English",id:"steps---english",level:2},{value:"Steps - Chinese(Simplified)",id:"steps---chinesesimplified",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thank you for contributing to DevLake blog! We can't wait to hear your voice! "),(0,a.kt)("p",null,"Because DevLake only accepts blog posts submitted through PRs, we want to make this process as painless as poissble by putting together this instruction."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The DevLake website maintains blog posts in two languages, English and Chinese(simplified), so ",(0,a.kt)("strong",{parentName:"p"},"we prefer that you submit your blog posts in both languages"),". However, if you are only familiar with one language, you can submit your blog posts in one language--either English or Chinese--but please put the same files in both directories of the two languages. We will help you with the translation based on our current work capacity. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"English blog directory:")," blog/your-blog-post"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Chinnese blog directory:")," i18n/zh/docusaurus-plugin-content-blog/your-blog-post"),(0,a.kt)("p",null,"Notice: No matter if you are submitting blog posts in one or two languages, please follow both the English and Chinese instructions as follows:"),(0,a.kt)("h2",{id:"steps---english"},"Steps - English"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you are submitting for the first time please add your author info by going into the ",(0,a.kt)("inlineCode",{parentName:"li"},"blog")," directory, find the file named ",(0,a.kt)("inlineCode",{parentName:"li"},"authors.yml")," and add your author info in the format of:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"warren:\n  name: Warren Chen\n  title: DevLake Contributor\n  url: https://github.com/warren830\n  image_url: https://github.com/warren830.png\n")),(0,a.kt)("p",null,"If you are not submitting for the first time, please skip this step and go to Step No.2."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory, create a folder for a single blog post and name it in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd-your-blog-post-title"),", so that all blog posts will be arranged in the order of time automatically.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside this folder, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown"),"file and name it ",(0,a.kt)("inlineCode",{parentName:"p"},"index.md"),". All of your blog post content goes into this file. If you use any images in your blog post, please also place the image files in the same folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the beginning of ",(0,a.kt)("inlineCode",{parentName:"p"},"index.md"),", please add the following information to help with the SEO:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nslug: your-blog-post-title\ntitle: Your Blog Post Title\nauthors: warren\ntags: [DevLake, ants, deadlock]\n---\n")),(0,a.kt)("p",null,"Please make sure that the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," match the author info you entered in ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"For better viewing experience, only a truncated section of each blog post will be displayed as a summary on the Blog page's overview. So please place ",(0,a.kt)("inlineCode",{parentName:"li"},"\x3c!--truncate--\x3e")," at an appropriate place in your ",(0,a.kt)("inlineCode",{parentName:"li"},"index.md"),". (We recommend putting it after approximately 300 words, but it is flexible as long as you think it make sense.) For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nslug: truncation-example\ntitle: Truncation Example\nauthors: yumeng\ntags: [DevLake, blog]\n---\n\nAll these will be part of the blog post summary.\n\nEven this.\n\n\x3c!--truncate--\x3e\n\nBut anything from here on down will not be.\n\nNot this.\n\nOr this.\n")),(0,a.kt)("h2",{id:"steps---chinesesimplified"},"Steps - Chinese(Simplified)"),(0,a.kt)("p",null,"The steps for submitting the Chinese version of your blog post are very similar to those of English, but in a different directory with a few tweaks."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you are submitting for the first time please add your author info by going into the ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n/zh/docusaurus-plugin-content-blog")," directory, find the file named ",(0,a.kt)("inlineCode",{parentName:"li"},"authors.yml")," and add your author info in the format of:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"warren:\n  name: \u9648\u6620\u521d\n  title: DevLake\u8d21\u732e\u8005\n  url: https://github.com/warren830\n  image_url: https://github.com/warren830.png\n")),(0,a.kt)("p",null,"If you are not submitting for the first time, please skip this step and go to Step No.2."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/zh/docusaurus-plugin-content-blog")," directory, create a folder for a single blog post and ",(0,a.kt)("strong",{parentName:"p"},"name it with the exact the name of the blog post folder that you have used for the English submission"),", so that the two files for two languages can match automatically.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside this folder, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown"),"file and name it ",(0,a.kt)("inlineCode",{parentName:"p"},"index.md"),". All of your blog post content goes into this file. If you use any images in your blog post, please also place the image files in the same folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the beginning of ",(0,a.kt)("inlineCode",{parentName:"p"},"index.md"),", please add the following information to help with the SEO:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nslug: your-blog-post-title\ntitle: \u4f60\u7684\u6587\u7ae0\u9898\u76ee\nauthors: warren\ntags: [DevLake, ants, deadlock]\n---\n")),(0,a.kt)("p",null,"Please make sure that the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," match the author info you entered in ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"For better viewing experience, only a truncated section of each blog post will be displayed as a summary on the Blog page's overview. So please place ",(0,a.kt)("inlineCode",{parentName:"li"},"\x3c!--truncate--\x3e")," at an appropriate place in your ",(0,a.kt)("inlineCode",{parentName:"li"},"index.md"),". (We recommend putting it after approximately 200 Chinese characters, but it is flexible as long as you think it make sense.) For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nslug: truncation-example\ntitle: Truncation Example\nauthors: yumeng\ntags: [DevLake, blog]\n---\n\nAll these will be part of the blog post summary.\n\nEven this.\n\n\x3c!--truncate--\x3e\n\nBut anything from here on down will not be.\n\nNot this.\n\nOr this.\n")),(0,a.kt)("p",null,"After completing the above steps, please submit a PR to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake-website"},"apache/incubator-devlake-website")," for review. Happy blogging!"))}m.isMDXComponent=!0}}]);