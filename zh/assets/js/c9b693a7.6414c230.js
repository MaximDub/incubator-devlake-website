(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6463],{54831:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),i=a(93456);const r={title:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f",sidebar_position:2,description:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f\n"},o=void 0,p={unversionedId:"DeveloperManuals/PluginImplementation",id:"DeveloperManuals/PluginImplementation",title:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f",description:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f\n",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/DeveloperManuals/PluginImplementation.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/PluginImplementation",permalink:"/zh/docs/DeveloperManuals/PluginImplementation",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/PluginImplementation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f",sidebar_position:2,description:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f\n"},sidebar:"docsSidebar",previous:{title:"Developer Setup",permalink:"/zh/docs/DeveloperManuals/DeveloperSetup"},next:{title:"DB Migration",permalink:"/zh/docs/DeveloperManuals/DBMigration"}},m={},c=[{value:"\u4ec0\u4e48\u662f\u63d2\u4ef6\uff1f",id:"\u4ec0\u4e48\u662f\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"\u63d2\u4ef6\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u4e00\u8d77\u6765\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u63d2\u4ef6",id:"\u4e00\u8d77\u6765\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u63d2\u4ef6",level:2},{value:"\u4e00\u3001 \u521b\u5efa\u65b0\u7684\u63d2\u4ef6",id:"\u4e00-\u521b\u5efa\u65b0\u7684\u63d2\u4ef6",level:3},{value:"\u4e8c\u3001 \u521b\u5efa\u6570\u636e\u6536\u96c6\u5b50\u4efb\u52a1",id:"\u4e8c-\u521b\u5efa\u6570\u636e\u6536\u96c6\u5b50\u4efb\u52a1",level:3},{value:"2.1 \u521b\u5efa Collector \u6765\u8bf7\u6c42\u6570\u636e",id:"21-\u521b\u5efa-collector-\u6765\u8bf7\u6c42\u6570\u636e",level:4},{value:"2.2 \u521b\u5efa Extractor\uff0c\u4ece rawLayer \u4e2d\u63d0\u53d6\u6570\u636e",id:"22-\u521b\u5efa-extractor\u4ece-rawlayer-\u4e2d\u63d0\u53d6\u6570\u636e",level:4},{value:"2.3 \u5b50\u4efb\u52a1 - Converter",id:"23-\u5b50\u4efb\u52a1---converter",level:4},{value:"2.4 \u52a8\u624b\u8bd5\u8bd5\u66f4\u591a\u7c7b\u578b\u7684\u8bf7\u6c42\u5427~",id:"24-\u52a8\u624b\u8bd5\u8bd5\u66f4\u591a\u7c7b\u578b\u7684\u8bf7\u6c42\u5427",level:4},{value:"2.5 \u5c06\u63d2\u4ef6\u63d0\u4ea4\u7ed9\u5f00\u6e90\u793e\u533a",id:"25-\u5c06\u63d2\u4ef6\u63d0\u4ea4\u7ed9\u5f00\u6e90\u793e\u533a",level:4}],k={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u559c\u6b22\u7684DevOps\u5de5\u5177\u8fd8\u6ca1\u6709\u88abDevLake\u652f\u6301\uff0c\u4e0d\u8981\u62c5\u5fc3\u3002\u5b9e\u73b0\u4e00\u4e2aDevLake\u63d2\u4ef6\u5e76\u4e0d\u56f0\u96be\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3DevLake\u63d2\u4ef6\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u5e76\u4e00\u8d77\u4ece\u5934\u5f00\u59cb\u5efa\u7acb\u4e00\u4e2a\u63d2\u4ef6\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u63d2\u4ef6"},"\u4ec0\u4e48\u662f\u63d2\u4ef6\uff1f"),(0,l.kt)("p",null,"DevLake\u63d2\u4ef6\u662f\u7528Go\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),"\u5305\u6784\u5efa\u7684\u5171\u4eab\u5e93\uff0c\u5728\u8fd0\u884c\u65f6\u4e0eDevLake\u6838\u5fc3\u6302\u94a9\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4e09\u79cd\u65b9\u5f0f\u6269\u5c55DevLake\u7684\u80fd\u529b\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0e\u65b0\u7684\u6570\u636e\u6e90\u96c6\u6210"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5316/\u4e30\u5bcc\u73b0\u6709\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u5c06DevLake\u6570\u636e\u5bfc\u51fa\u5230\u5176\u4ed6\u6570\u636e\u7cfb\u7edf")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"\u63d2\u4ef6\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,l.kt)("p",null,"\u4e00\u4e2a\u63d2\u4ef6\u4e3b\u8981\u5305\u62ec\u53ef\u4ee5\u7531DevLake\u6838\u5fc3\u6267\u884c\u7684\u5b50\u4efb\u52a1\u7684\u96c6\u5408\u3002\u5bf9\u4e8e\u6570\u636e\u6e90\u63d2\u4ef6\uff0c\u4e00\u4e2a\u5b50\u4efb\u52a1\u53ef\u80fd\u662f\u4ece\u6570\u636e\u6e90\u4e2d\u6536\u96c6\u4e00\u4e2a\u5b9e\u4f53\uff08\u4f8b\u5982\uff0c\u6765\u81eaJira\u7684\u95ee\u9898\uff09\u3002\u9664\u4e86\u5b50\u4efb\u52a1\uff0c\u8fd8\u6709\u4e00\u4e9b\u94a9\u5b50\uff0c\u63d2\u4ef6\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5176\u521d\u59cb\u5316\u3001\u8fc1\u79fb\u7b49\u3002\u6700\u91cd\u8981\u7684\u63a5\u53e3\u5217\u8868\u89c1\u4e0b\u6587\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_meta.go"},"PluginMeta")," \u5305\u542b\u4e00\u4e2a\u63d2\u4ef6\u6700\u5c11\u5e94\u8be5\u5b9e\u73b0\u7684\u63a5\u53e3\uff0c\u53ea\u6709\u4e24\u4e2a\u51fd\u6570\uff1b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description() \u8fd4\u56de\u63d2\u4ef6\u7684\u63cf\u8ff0"),(0,l.kt)("li",{parentName:"ul"},"RootPkgPath() \u8fd4\u56de\u63d2\u4ef6\u7684\u5305\u8def\u5f84\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_init.go"},"PluginInit")," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u521d\u59cb\u5316\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_task.go"},"PluginTask")," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u51c6\u5907\u6570\u636e\uff0c\u5176\u5728\u5b50\u4efb\u52a1\u4e4b\u524d\u6267\u884c\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_api.go"},"PluginApi")," \u5b9e\u73b0\u63d2\u4ef6\u81ea\u5b9a\u4e49\u7684API\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_db_migration.go"},"Migratable")," \u8fd4\u56de\u63d2\u4ef6\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5e93\u8fc1\u79fb\u7684\u811a\u672c\u3002")),(0,l.kt)("p",null,"\u4e0b\u56fe\u662f\u4e00\u4e2a\u63d2\u4ef6\u6267\u884c\u7684\u6d41\u7a0b\uff1a"),(0,l.kt)(i.Mermaid,{config:{theme:{light:"neutral",dark:"forest"}},chart:'flowchart TD\n    subgraph S4[Step4 Extractor \u8fd0\u884c\u6d41\u7a0b]\n    direction LR\n    D4[DevLake]\n    D4 -- "Step4.1 \u521b\u5efa\n ApiExtractor \u5e76\u6267\u884c" --\x3e E["ExtractXXXMeta.\nEntryPoint"];\n    E <-- "Step4.2 \u8bfb\u53d6raw table" --\x3e E2["RawDataSubTaskArgs\n.Table"];\n    E -- "Step4.3 \u89e3\u6790 RawData" --\x3e ApiExtractor.Extract\n    ApiExtractor.Extract -- "\u8fd4\u56de gorm \u6a21\u578b" --\x3e E\n    end\n    subgraph S3[Step3 Collector \u8fd0\u884c\u6d41\u7a0b]\n    direction LR\n    D3[DevLake]\n    D3 -- "Step3.1 \u521b\u5efa\n ApiCollector \u5e76\u6267\u884c" --\x3e C["CollectXXXMeta.\nEntryPoint"];\n    C <-- "Step3.2 \u521b\u5efaraw table" --\x3e C2["RawDataSubTaskArgs\n.RAW_BBB_TABLE"];\n    C <-- "Step3.3 \u6784\u9020\u8bf7\u6c42query" --\x3e ApiCollectorArgs.\nQuery/UrlTemplate;\n    C <-. "Step3.4 \u901a\u8fc7 ApiClient \n\u8bf7\u6c42\u5e76\u8fd4\u56deHTTP" --\x3e A1["HTTP APIs"];\n    C <-- "Step3.5 \u89e3\u6790\n\u5e76\u8fd4\u56de\u8bf7\u6c42\u7ed3\u679c" --\x3e ResponseParser;\n    end\n    subgraph S2[Step2 DevLake \u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6]\n    direction LR\n    D2[DevLake]\n    D2 <-- "Step2.1 \u5728`Init` \n\u521d\u59cb\u5316\u63d2\u4ef6" --\x3e plugin.Init;\n    D2 <-- "Step2.2 (Optional) \u8c03\u7528\n\u4e0e\u8fd4\u56de migration \u811a\u672c" --\x3e plugin.MigrationScripts;\n    D2 <-- "Step2.3 (Optional) \n\u521d\u59cb\u5316\u5e76\u8fd4\u56detaskCtx" --\x3e plugin.PrepareTaskData;\n    D2 <-- "Step2.4 \u8fd4\u56de\n \u9700\u8981\u6267\u884c\u7684\u5b50\u51fd\u6570" --\x3e plugin.SubTaskContext;\n    end\n    subgraph S1[Step1 DevLake \u7684\u8fd0\u884c]\n    direction LR\n    main -- "\u901a\u8fc7 `runner.DirectRun`\n \u79fb\u4ea4\u63a7\u5236\u6743" --\x3e D1[DevLake];\n    end\n    S1--\x3eS2--\x3eS3--\x3eS4',mdxType:"Mermaid"}),(0,l.kt)("p",null,"\u56fe\u4e2d\u4fe1\u606f\u975e\u5e38\u591a\uff0c\u5f53\u7136\u5e76\u4e0d\u671f\u671b\u9a6c\u4e0a\u5c31\u80fd\u6d88\u5316\u5b8c\uff0c\u4ec5\u4ec5\u4f5c\u4e3a\u9605\u8bfb\u540e\u6587\u7684\u53c2\u8003\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u4e00\u8d77\u6765\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u63d2\u4ef6"},"\u4e00\u8d77\u6765\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4ece\u5934\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u6536\u96c6\u63d2\u4ef6\u3002\u8981\u6536\u96c6\u7684\u6570\u636e\u662f Apache \u9879\u76ee\u7684\u6240\u6709 Committers \u548c Contributors \u4fe1\u606f\uff0c\u76ee\u7684\u662f\u68c0\u67e5\u5176\u662f\u5426\u7b7e\u7f72\u4e86 CLA\u3002\u6211\u4eec\u5c06\u901a\u8fc7:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/public/icla-info.json")," \u83b7\u53d6 Committers \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42",(0,l.kt)("inlineCode",{parentName:"li"},"\u90ae\u4ef6\u5217\u8868")," \u83b7\u53d6 Contributors \u4fe1\u606f\n\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u901a\u8fc7 Apache API \u8bf7\u6c42\u5e76\u7f13\u5b58\u6240\u6709 Committers \u7684\u4fe1\u606f\uff0c\u5e76\u63d0\u53d6\u51fa\u7ed3\u6784\u5316\u7684\u6570\u636e\u3002Contributors \u7684\u6536\u96c6\u4ec5\u505a\u4e00\u4e9b\u601d\u8def\u7684\u4ecb\u7ecd\u3002")),(0,l.kt)("h3",{id:"\u4e00-\u521b\u5efa\u65b0\u7684\u63d2\u4ef6"},"\u4e00\u3001 \u521b\u5efa\u65b0\u7684\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fddDevLake\u5df2\u7ecf\u80fd\u6b63\u786e\u542f\u52a8\u4e86\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u63d2\u4ef6\u7684\u5176\u4ed6\u4fe1\u606f:\n\u4e00\u822c\u6765\u8bf4, \u6211\u4eec\u9700\u8981\u8fd9\u51e0\u4e2a\u76ee\u5f55: ",(0,l.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"models")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"tasks"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"api")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"config-ui")," \u7b49\u5176\u4ed6\u670d\u52a1\u6240\u9700\u7684api"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"connection ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/gitlab/api/connection.go"},"example"),"\nconnection model ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/gitlab/models/connection.go"},"example"),(0,l.kt)("inlineCode",{parentName:"li"},"models")," \u4fdd\u5b58\u6570\u636e\u5e93\u6a21\u578b\u548cMigration\u811a\u672c. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"entity\ndata migrations ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/tree/main/generator/template/migrationscripts"},"template"),(0,l.kt)("inlineCode",{parentName:"li"},"tasks")," \u5305\u542b\u6240\u6709\u5b50\u4efb\u52a1",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"     - task data [template](https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/task_data.go-template)\n           - api client [template](https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/task_data_with_api_client.go-template)\n")))))),(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5982\u679c\u8fd9\u4e9b\u6982\u5ff5\u8ba9\u4f60\u611f\u5230\u8ff7\u60d1\uff0c\u4e0d\u8981\u62c5\u5fc3\uff0c\u6211\u4eec\u7a0d\u540e\u4f1a\u9010\u4e00\u89e3\u91ca\u3002")),(0,l.kt)("p",null,"DevLake \u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u5de5\u5177 Generator \u6765\u521b\u5efa\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"go run generator/main.go creat-plugin icla"),"\u6765\u6784\u5efa\u65b0\u63d2\u4ef6\uff0c\u521b\u5efa\u7684\u65f6\u5019\u4f1a\u9700\u8981\u8f93\u5165\u300c\u662f\u5426\u9700\u8981\u9ed8\u8ba4\u7684apiClient ",(0,l.kt)("inlineCode",{parentName:"p"},"with_api_client"),"\u300d\u548c\u300c\u8981\u6536\u96c6\u7684\u7f51\u7ad9",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint"),"\u300d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with_api_client"),"\u7528\u4e8e\u9009\u62e9\u662f\u5426\u9700\u8981\u901a\u8fc7api_client\u53d1\u9001HTTP APIs\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"endpoint"),"\u7528\u4e8e\u786e\u8ba4\u63d2\u4ef6\u5c06\u8bf7\u6c42\u54ea\u4e2a\u7f51\u7ad9\uff0c\u5728\u672c\u6848\u4f8b\u4e2d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/itzlFg7.png",alt:null})),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u7684\u63d2\u4ef6\u91cc\u6709\u4e09\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"api_client.go"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"task_data.go"),"\u5728\u5b50\u6587\u4ef6\u5939",(0,l.kt)("inlineCode",{parentName:"p"},"tasks/"),"\u4e2d\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/zon5waf.png",alt:"1"})),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u8bd5\u7740\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_main.go"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u6765\u542f\u52a8\u63d2\u4ef6\uff0c\u8fd0\u884c\u7ed3\u679c\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$go run plugins/icla/plugin_main.go\n[2022-06-02 18:07:30]  INFO failed to create dir logs: mkdir logs: file exists\npress `c` to send cancel signal\n[2022-06-02 18:07:30]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-02 18:07:30]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-02 18:07:30]  INFO  [icla] total step: 0\n")),(0,l.kt)("p",null,"\ud83d\ude0b \u6ca1\u6709\u62a5\u9519\uff0c\u90a3\u5c31\u662f\u6210\u529f\u5566~ ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_main.go"),"\u8fd9\u91cc\u5b9a\u4e49\u4e86\u63d2\u4ef6\uff0c\u6709\u4e00\u4e9b\u914d\u7f6e\u662f\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"task_data.go"),"\u4e2d\u3002\u8fd9\u4e24\u4e2a\u6587\u4ef6\u5c31\u6784\u6210\u4e86\u6700\u7b80\u5355\u7684\u63d2\u4ef6\uff0c\u800c\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"api_client.go"),"\u540e\u9762\u4f1a\u7528\u6765\u53d1\u9001HTTP APIs\u3002"),(0,l.kt)("h3",{id:"\u4e8c-\u521b\u5efa\u6570\u636e\u6536\u96c6\u5b50\u4efb\u52a1"},"\u4e8c\u3001 \u521b\u5efa\u6570\u636e\u6536\u96c6\u5b50\u4efb\u52a1"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u521b\u5efa\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u4e86\u89e3\u4e00\u4e0b\u5b50\u4efb\u52a1\u7684\u6267\u884c\u8fc7\u7a0b\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Apache DevLake\u4f1a\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"plugin_main.PrepareTaskData()"),"\uff0c\u51c6\u5907\u4e00\u4e9b\u5b50\u4efb\u52a1\u6240\u9700\u8981\u7684\u73af\u5883\u6570\u636e\uff0c\u672c\u9879\u4efb\u52a1\u4e2d\u9700\u8981\u521b\u5efa\u4e00\u4e2aapiClient\u3002"),(0,l.kt)("li",{parentName:"ol"},"Apache DevLake\u63a5\u7740\u4f1a\u8c03\u7528\u5b9a\u4e49\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"plugin_main.SubTaskMetas()"),"\u7684\u5b50\u4efb\u52a1\uff0c\u5b50\u4efb\u52a1\u90fd\u662f\u4e92\u76f8\u72ec\u7acb\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b8c\u6210\u6ce8\u5165\u53d1\u9001API\u8bf7\u6c42\uff0c\u5904\u7406\u6570\u636e\u7b49\u4efb\u52a1\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u5b50\u4efb\u52a1\u5fc5\u987b\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"SubTaskMeta"),"\u4e2d\u5b9a\u4e49\uff0c\u5e76\u5b9e\u73b0\u5176\u4e2d\u7684SubTaskEntryPoint\u51fd\u6570\uff0c\u5176\u7ed3\u6784\u4e3a "),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-\u53bb"},"type SubTaskEntryPoint func(c SubTaskContext) error\n")),(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u4fe1\u606f\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://devlake.apache.org/blog/how-apache-devlake-runs/"},"https://devlake.apache.org/blog/how-apache-devlake-runs/")),(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5982\u679c\u8fd9\u4e9b\u6982\u5ff5\u8ba9\u4f60\u611f\u5230\u8ff7\u60d1\uff0c\u8df3\u8fc7\u8ddf\u7740\u4e00\u6b65\u6b65\u505a\u5c31\u597d\u3002")),(0,l.kt)("h4",{id:"21-\u521b\u5efa-collector-\u6765\u8bf7\u6c42\u6570\u636e"},"2.1 \u521b\u5efa Collector \u6765\u8bf7\u6c42\u6570\u636e"),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-collector icla committer"),"\u6765\u521b\u5efa\u5b50\u4efb\u52a1\u3002Generator\u8fd0\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u65b0\u7684\u6587\u4ef6\uff0c\u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_main.go/SubTaskMetas"),"\u4e2d\u6fc0\u6d3b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/tkDuofi.png",alt:null})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Collector\u5c06\u4eceHTTP\u6216\u5176\u4ed6\u6570\u636e\u6e90\u6536\u96c6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u4fdd\u5b58\u5230rawLayer\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"httpCollector"),"\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"SubTaskEntryPoint"),"\u4e2d\uff0c\u9ed8\u8ba4\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"helper.NewApiCollector"),"\u6765\u521b\u5efa\u65b0\u7684",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/api_collector.go-template"},"ApiCollector"),"\u5bf9\u8c61\uff0c\u5e76\u8c03\u7528\u5176",(0,l.kt)("inlineCode",{parentName:"li"},"execute()"),"\u6765\u5e76\u884c\u6536\u96c6\u3002")),(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5982\u679c\u8fd9\u4e9b\u6982\u5ff5\u8ba9\u4f60\u611f\u5230\u8ff7\u60d1\uff0c\u8df3\u8fc7\u5c31\u597d\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u6ce8\u610f\u5230\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_main.go/PrepareTaskData.ApiClient"),"\u4e2d\u6709\u5f15\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"data.ApiClient"),"\uff0c\u5b83\u662fApache DevLake\u63a8\u8350\u7528\u4e8e\u4eceHTTP APIs\u8bf7\u6c42\u6570\u636e\u7684\u5de5\u5177\u3002\u8fd9\u4e2a\u5de5\u5177\u652f\u6301\u4e00\u4e9b\u5f88\u6709\u7528\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u8bf7\u6c42\u9650\u5236\u3001\u4ee3\u7406\u548c\u91cd\u8bd5\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u559c\u6b22\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"http"),"\u5e93\u6765\u4ee3\u66ff\uff0c\u53ea\u793a\u4f1a\u663e\u5f97\u66f4\u52a0\u7e41\u7410\u800c\u5df2\u3002"),(0,l.kt)("p",null,"\u56de\u5230\u6b63\u9898\uff0c\u73b0\u5728\u7684\u76ee\u6807\u662f\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"https://people.apache.org/public/icla-info.json"),"\u6536\u96c6\u6570\u636e\uff0c\u56e0\u6b64\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5df2\u7ecf\u5728\u4e4b\u524d\u4e2d\u628a",(0,l.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/"),"\u586b\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"tasks/api_client.go/ENDPOINT"),"\u4e86\uff0c\u73b0\u5728\u5728\u770b\u4e00\u773c\u786e\u8ba4\u4e0b\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/q8Zltnl.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"public/icla-info.json"),"\u586b\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"UrlTemplate"),"\uff0c\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u8fed\u4ee3\u5668\uff0c\u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"ResponseParser"),"\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"li"},'println("receive data:", res)'),"\u4ee5\u67e5\u770b\u6536\u96c6\u662f\u5426\u6210\u529f\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ToLMclH.png",alt:null})),(0,l.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728Collector\u5df2\u7ecf\u521b\u5efa\u597d\u4e86\uff0c\u518d\u6b21\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u6765\u542f\u52a8\u63d2\u4ef6\uff0c\u5982\u679c\u4e00\u5207\u987a\u5229\u7684\u8bdd\uff0c\u8f93\u51fa\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[2022-06-06 12:24:52]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-06 12:24:52]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-06 12:24:52]  INFO  [icla] total step: 1\n[2022-06-06 12:24:52]  INFO  [icla] executing subtask CollectCommitter\n[2022-06-06 12:24:52]  INFO  [icla] [CollectCommitter] start api collection\nreceive data: 0x140005763f0\n[2022-06-06 12:24:55]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 12:24:55]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 12:24:55]  INFO  [icla] finished step: 1 / 1\n")),(0,l.kt)("p",null,"\u4ece\u4ee5\u4e0a\u65e5\u5fd7\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u80fd\u6253\u5370\u51fa\u6536\u5230\u6570\u636e\u7684\u65e5\u5fd7\u4e86\uff0c\u6700\u540e\u4e00\u6b65\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ResponseParser"),"\u4e2d\u5bf9\u54cd\u5e94\u4f53\u8fdb\u884c\u89e3\u7801\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u7ed9DevLake\uff0c\u4ee5\u4fbf\u5c06\u5176\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ResponseParser: func(res *http.Response) ([]json.RawMessage, error) {\n    body := &struct {\n        LastUpdated string          `json:"last_updated"`\n        Committers  json.RawMessage `json:"committers"`\n    }{}\n    err := helper.UnmarshalResponse(res, body)\n    if err != nil {\n        return nil, err\n    }\n    println("receive data:", len(body.Committers))\n    return []json.RawMessage{body.Committers}, nil\n},\n')),(0,l.kt)("p",null,"\u518d\u6b21\u8fd0\u884c\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\uff0c\u7ed3\u679c\u5982\u4e0b\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728\u6570\u636e\u5e93\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"_raw_icla_committer"),"\u4e2d\u770b\u5230\u4e00\u6761\u65b0\u7684\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u2026\u2026\nreceive data: 272956 /* <- \u8fd9\u4e2a\u6570\u5b57\u8868\u793a\u6536\u5230\u4e86272956\u4e2aCommitter */\n[2022-06-06 13:46:57]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 13:46:57]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 13:46:57]  INFO  [icla] finished step: 1 / 1\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/aVYNMRr.png",alt:null})),(0,l.kt)("h4",{id:"22-\u521b\u5efa-extractor\u4ece-rawlayer-\u4e2d\u63d0\u53d6\u6570\u636e"},"2.2 \u521b\u5efa Extractor\uff0c\u4ece rawLayer \u4e2d\u63d0\u53d6\u6570\u636e"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Extractor\u5c06\u4ecerawLayer\u4e2d\u63d0\u53d6\u6570\u636e\u5e76\u4fdd\u5b58\u5230\u5de5\u5177db\u8868\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86\u4e00\u4e9b\u5177\u4f53\u7684\u5904\u7406\u5185\u5bb9\uff0c\u4e3b\u6d41\u7a0b\u4e0e\u91c7\u96c6\u5668\u7c7b\u4f3c\u3002"))),(0,l.kt)("p",null,"\u4eceHTTP API\u6536\u96c6\u7684\u6570\u636e\u76ee\u524d\u4ec5\u4ec5\u4fdd\u5b58\u5728\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"_raw_XXXX"),"\u4e2d\uff0c\u4f46\u5176\u4f7f\u7528\u8d77\u6765\u5374\u5f88\u4e0d\u5bb9\u6613\u3002\u56e0\u6b64\u6211\u4eec\u5c06\u7ee7\u7eed\u4ece\u5176\u4e2d\u63d0\u53d6Committer\u7684\u540d\u5b57\u3002\u76ee\u524dApache DevLake\u5efa\u8bae\u7528",(0,l.kt)("a",{parentName:"p",href:"https://gorm.io/docs/index.html"},"gorm"),"\u6765\u4fdd\u5b58\u6570\u636e\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u7528gorm\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_main.go/AutoMigrate()"),"\u4e2d\u3002"),(0,l.kt)("p",null,"plugins/icla/models/committer.go"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package models\n\nimport (\n    "github.com/apache/incubator-devlake/models/common"\n)\n\ntype IclaCommitter struct {\n    UserName     string `gorm:"primaryKey;type:varchar(255)"`\n    Name         string `gorm:"primaryKey;type:varchar(255)"`\n    common.NoPKModel\n}\n\nfunc (IclaCommitter) TableName() string {\n    return "_tool_icla_committer"\n}\n')),(0,l.kt)("p",null,"plugins/icla/plugin_main.go\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/4f0zJty.png",alt:null})),(0,l.kt)("p",null,"\u5728\u505a\u5b8c\u4ee5\u4e0a\u6b65\u9aa4\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u518d\u6b21\u8fd0\u884c\u63d2\u4ef6\uff0c\u521a\u5b9a\u4e49\u7684\u6570\u636e\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"_tool_icla_committer"),"\u4f1a\u81ea\u52a8\u521b\u5efa\uff0c\u5c31\u50cf\u4e0b\u9762\u7684\u622a\u56fe\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/7Z324IX.png",alt:null})),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-extractor icla committer"),"\u5e76\u8f93\u5165\u547d\u4ee4\u884c\u63d0\u793a\u7684\u5185\u5bb9\uff0c\u6765\u521b\u5efa\u65b0\u7684\u5b50\u4efb\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/UyDP9Um.png",alt:null})),(0,l.kt)("p",null,"\u8fd0\u884c\u5b8c\u6210\u540e\uff0c\u6765\u770b\u770b\u521a\u624d\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"committer_extractor.go"),"\u4e2d\u7684\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"extract"),"\uff0c\u5f88\u660e\u663e\u53c2\u6570\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"resData.data"),"\u662f\u539f\u59cb\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u7528json\u89e3\u7801\uff0c\u5e76\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"IclaCommitter"),"\u6a21\u578b\u6765\u4fdd\u5b58\u5b83\u4eec\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"Extract: func(resData *helper.RawData) ([]interface{}, error) {\n    names := &map[string]string{}\n    err := json.Unmarshal(resData.Data, names)\n    if err != nil {\n        return nil, err\n    }\n    extractedModels := make([]interface{}, 0)\n    for userName, name := range *names {\n        extractedModels = append(extractedModels, &models.IclaCommitter{\n            UserName: userName,\n            Name:     name,\n        })fco\n    }\n    return extractedModels, nil\n},\n")),(0,l.kt)("p",null,"\u518d\u6b21\u8fd0\u884c\u63d2\u4ef6\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[2022-06-06 15:39:40]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-06 15:39:40]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-06 15:39:40]  INFO  [icla] total step: 2\n[2022-06-06 15:39:40]  INFO  [icla] executing subtask CollectCommitter\n[2022-06-06 15:39:40]  INFO  [icla] [CollectCommitter] start api collection\nreceive data: 272956\n[2022-06-06 15:39:44]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 15:39:44]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 15:39:44]  INFO  [icla] finished step: 1 / 2\n[2022-06-06 15:39:44]  INFO  [icla] executing subtask ExtractCommitter\n[2022-06-06 15:39:46]  INFO  [icla] [ExtractCommitter] finished records: 1\n[2022-06-06 15:39:46]  INFO  [icla] finished step: 2 / 2\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6709\u4e24\u4e2a\u4efb\u52a1\u8fd0\u884c\u5b8c\u6210\uff0c\u540c\u65f6\u89c2\u5bdf\u6570\u636e\u5e93\u53d1\u73b0\uff0c\u63d0\u4ea4\u8005\u7684\u6570\u636e\u5df2\u7ecf\u4fdd\u5b58\u5728_tool_icla_committer\u4e2d\u4e86~\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/6svX0N2.png",alt:null})),(0,l.kt)("h4",{id:"23-\u5b50\u4efb\u52a1---converter"},"2.3 \u5b50\u4efb\u52a1 - Converter"),(0,l.kt)("p",null,"\u6ce8\u610f\u3002\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u5f0f\uff08\u5f00\u6e90\u6216\u81ea\u5df1\u4f7f\u7528\uff09\u3002\u56e0\u6b64 Converter \u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u6211\u4eec\u9f13\u52b1\u4f7f\u7528\u5b83\uff0c\u56e0\u4e3a Converter \u548c DomainLayer \u975e\u5e38\u6709\u52a9\u4e8e\u5efa\u7acb\u901a\u7528\u7684\u4eea\u8868\u76d8\u3002\u5173\u4e8e DomainLayer \u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/"},"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Converter \u5c06\u5904\u7406 DomainLayer \u7684\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5230 DomainLayer \u5c42\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"helper.NewDataConverter"),"\u6765\u521b\u5efa\u4e00\u4e2a DataConvertor \u7684\u5bf9\u8c61\uff0c\u7136\u540e\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"execute()"),"\u6765\u8fd0\u884c\u3002"))),(0,l.kt)("h4",{id:"24-\u52a8\u624b\u8bd5\u8bd5\u66f4\u591a\u7c7b\u578b\u7684\u8bf7\u6c42\u5427"},"2.4 \u52a8\u624b\u8bd5\u8bd5\u66f4\u591a\u7c7b\u578b\u7684\u8bf7\u6c42\u5427~"),(0,l.kt)("p",null,"\u6709\u65f6 OpenApi \u4f1a\u53d7\u5230 token \u6216\u5176\u4ed6\u4fdd\u62a4\uff0c\u53ea\u6709\u83b7\u5f97 token \u624d\u6765\u80fd\u8bbf\u95ee\u3002\u4f8b\u5982\u5728\u672c\u6848\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ea\u6709\u5728\u767b\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"private@apahce.com"),"\u540e\uff0c\u624d\u80fd\u6536\u96c6\u5230\u5173\u4e8e\u666e\u901a Contributor \u7b7e\u7f72ICLA\u7684\u6570\u636e\u3002\u4f46\u8fd9\u91cc\u53d7\u9650\u4e8e\u7bc7\u5e45\uff0c\u4ec5\u4ec5\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u6536\u96c6\u9700\u8981\u6388\u6743\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6ce8\u610f",(0,l.kt)("inlineCode",{parentName:"p"},"api_client.go"),"\u6587\u4ef6\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"NewIclaApiClient"),"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u52a0\u8f7d\u914d\u7f6e\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ICLA_TOKEN"),"\uff0c\u5b83\u8ba9\u6211\u4eec\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"ICLA_TOKEN=XXXX"),"\uff0c\u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"apiClient.SetHeaders()"),"\u4e2d\u4f7f\u7528\u5b83\u6765\u6a21\u62df\u767b\u5f55\u72b6\u6001\u3002\u4ee3\u7801\u5982\u4e0b\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/dPxooAx.png",alt:null})),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"username/password"),"\u6765\u83b7\u53d6\u6a21\u62df\u767b\u5f55\u540e\u7684token\uff0c\u8bd5\u7740\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u76f8\u5173\u7ec6\u8282\u8bf7\u770b",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake")),(0,l.kt)("h4",{id:"25-\u5c06\u63d2\u4ef6\u63d0\u4ea4\u7ed9\u5f00\u6e90\u793e\u533a"},"2.5 \u5c06\u63d2\u4ef6\u63d0\u4ea4\u7ed9\u5f00\u6e90\u793e\u533a"),(0,l.kt)("p",null,"\u606d\u559c\u4f60! \u7b2c\u4e00\u4e2a\u63d2\u4ef6\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5! \ud83c\udf96 \u6211\u4eec\u9f13\u52b1\u5f00\u6e90\u8d21\u732e~ \u63a5\u4e0b\u6765\u8fd8\u9700\u8981\u5b66\u4e60 migrationScripts \u548c domainLayers \u6765\u7f16\u5199\u89c4\u8303\u7684\u3001\u5e73\u53f0\u65e0\u5173\u7684\u4ee3\u7801\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema%EF%BC%8C%E6%88%96%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC%E4%BB%A5%E8%8E%B7%E5%BE%97%E7%83%AD%E6%83%85%E6%B4%8B%E6%BA%A2%E7%9A%84%E5%B8%AE%E5%8A%A9%E3%80%82"},"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u4ee5\u83b7\u5f97\u70ed\u60c5\u6d0b\u6ea2\u7684\u5e2e\u52a9\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/178882323-7bae0331-c458-4f34-a63d-af3975b9dd85.jpg",alt:"come on"})))}s.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function l(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=i,e.exports=l,l.id=11748}}]);