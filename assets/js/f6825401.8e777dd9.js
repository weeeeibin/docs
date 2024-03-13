"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:1},a="\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023",i={unversionedId:"js2023",id:"js2023",title:"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023",description:"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02",source:"@site/docs/js2023.md",sourceDirName:".",slug:"/js2023",permalink:"/docs/markdown/js2023",draft:!1,editUrl:"https://github.com/weeeeibin/docs/blob/main/docs/js2023.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2020",permalink:"/docs/markdown/js2020"}},p={},u=[{value:"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02",id:"react-hooks\u548cclass\u6709\u4ec0\u4e48\u5dee\u5f02",level:2},{value:"\u5e38\u7528\u7684Hooks Api",id:"\u5e38\u7528\u7684hooks-api",level:2},{value:"Redux\u7684\u597d\u5904\u5728\u54ea\u91cc",id:"redux\u7684\u597d\u5904\u5728\u54ea\u91cc",level:2},{value:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296",id:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296",level:2},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",level:2},{value:"\u95ed\u5305",id:"\u95ed\u5305",level:2},{value:"\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",id:"\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",level:2},{value:"React Diff\u539f\u7406\u662f\u4ec0\u4e48",id:"react-diff\u539f\u7406\u662f\u4ec0\u4e48",level:2},{value:"\u662f\u4ec0\u4e48",id:"\u662f\u4ec0\u4e48",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"tree\u5c42\u7ea7",id:"tree\u5c42\u7ea7",level:4},{value:"conponent\u5c42\u7ea7",id:"conponent\u5c42\u7ea7",level:4},{value:"element\u5c42\u7ea7",id:"element\u5c42\u7ea7",level:4},{value:"JS\u4e8b\u4ef6\u5faa\u73af\u4e4b\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",id:"js\u4e8b\u4ef6\u5faa\u73af\u4e4b\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",level:2},{value:"<strong>proto</strong> \u548c prototype\u7684\u5173\u7cfb",id:"proto-\u548c-prototype\u7684\u5173\u7cfb",level:2},{value:"instanceof\u7684\u7528\u6cd5",id:"instanceof\u7684\u7528\u6cd5",level:2},{value:"React Fiber",id:"react-fiber",level:2}],c={toc:u},s="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u7aef\u9762\u8bd5\u9898js-2023"},"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023"),(0,o.kt)("h2",{id:"react-hooks\u548cclass\u6709\u4ec0\u4e48\u5dee\u5f02"},"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02"),(0,o.kt)("p",null,"\u9488\u5bf9\u4e24\u79cdReact\u7ec4\u4ef6\uff0c\u5176\u533a\u522b\u4e3b\u8981\u5206\u6210\u4ee5\u4e0b\u51e0\u5927\u65b9\u5411\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f16\u5199\u5f62\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u5728hooks\u51fa\u6765\u4e4b\u524d\uff0c\u51fd\u6570\u7ec4\u4ef6\u5c31\u662f\u65e0\u72b6\u6001\u7ec4\u4ef6\uff0c\u4e0d\u80fd\u4fdd\u7ba1\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u4e0d\u50cf\u7c7b\u7ec4\u4ef6\u4e2d\u8c03\u7528setState"))),(0,o.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u7c7b\u7ec4\u4ef6\u652f\u6301\u751f\u547d\u5468\u671f\uff0c\u51fd\u6570\u7ec4\u4ef6\u5e76\u4e0d\u5b58\u5728\u751f\u547d\u5468\u671f\u4f46\u662f\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528useEffect\u4e5f\u80fd\u591f\u5b8c\u6210\u66ff\u4ee3\u751f\u547d\u5468\u671f\u7684\u4f5c\u7528"))),(0,o.kt)("li",{parentName:"ul"},"\u8c03\u7528\u65b9\u5f0f",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u7c7b\u7ec4\u4ef6React\u5185\u90e8\u4f1a\u5148\u5b9e\u4f8b\u5316\u7ec4\u4ef6\uff08new\u7ec4\u4ef6\uff09\u5728\u8c03\u7528render\u65b9\u6cd5\uff0c\u51fd\u6570\u7ec4\u4ef6\u5219\u662f\u6267\u884c\u51fd\u6570\u5373\u53ef")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TIPS\uff1a \u7c7b\u7ec4\u4ef6 this\u6307\u5411\u662f hooks\u7ec4\u4ef6\u6ca1\u6709\u7684")),(0,o.kt)("h2",{id:"\u5e38\u7528\u7684hooks-api"},"\u5e38\u7528\u7684Hooks Api"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hooks \u4e0d\u80fd\u5728React\u7ec4\u5efa\u4e4b\u5916\u4f7f\u7528\u4e5f\u4e0d\u80fd\u4f7f\u7528\u6761\u4ef6\u5224\u65ad\u8bed\u53e5\uff08if switch\uff09\u4f46\u53ef\u4ee5\u4f7f\u7528\u4e09\u5143\u8fd0\u7b97\u7b26\uff0c\u56e0\u4e3aHooks\u5e95\u5c42\u662f\u94fe\u8868\u7ed3\u6784\u3002")),(0,o.kt)("p",null,"useRef\u3001useMemo\u3001useEffect\u3001useState\u3001useReducer\u3001useContext\u3001useLayoutEffect"),(0,o.kt)("h2",{id:"redux\u7684\u597d\u5904\u5728\u54ea\u91cc"},"Redux\u7684\u597d\u5904\u5728\u54ea\u91cc"),(0,o.kt)("p",null,"\u5355\u4e00\u6570\u636e\u6e90\uff1aRedux \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u4e00\u7684\u3001\u53ef\u9884\u6d4b\u7684\u72b6\u6001\u6811\uff0c\u4f7f\u5f97\u6240\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u90fd\u96c6\u4e2d\u5728\u4e00\u4e2a\u5730\u65b9\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u4f7f\u5f97\u72b6\u6001\u7ba1\u7406\u66f4\u52a0\u53ef\u9760\u548c\u53ef\u63a7\uff0c\u65b9\u4fbf\u8fdb\u884c\u72b6\u6001\u7684\u8ddf\u8e2a\u548c\u8c03\u8bd5\uff0c\u540c\u65f6\u4e5f\u80fd\u591f\u907f\u514d\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u7684\u4e0d\u4e00\u81f4\u6027\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u65b9\u4fbf\u8fdb\u884c\u72b6\u6001\u5171\u4eab\uff1aRedux \u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5171\u4eab\u72b6\u6001\uff0c\u4ece\u800c\u53ef\u4ee5\u7b80\u5316\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u548c\u6570\u636e\u4f20\u9012\u3002"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296"},"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296"),(0,o.kt)("p",null,"\u8282\u6d41\uff1a\u9650\u5236\u4e00\u4e2a\u52a8\u4f5c\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u80fd\u6267\u884c\u4e00\u6b21\u3002",(0,o.kt)("br",null),"\n\u4e00\u822c\u4f7f\u7528\u573a\u666f\uff1ascroll\u4e8b\u4ef6\u3001input\u6846\u5b9e\u65f6\u641c\u7d22\u5e76\u53d1\u9001"),(0,o.kt)("p",null,"\u9632\u6296\uff1a\u5f53\u4e00\u4e2a\u52a8\u4f5c\u8fde\u7eed\u89e6\u53d1\uff0c\u53ea\u6267\u884c\u6700\u540e\u4e00\u6b21\u3002",(0,o.kt)("br",null),"\n\u4e00\u822c\u4f7f\u7528\u573a\u666f\uff1a\u767b\u5f55\u3001\u53d1\u77ed\u4fe1\u7b49\u6309\u94ae\u907f\u514d\u7528\u6237\u70b9\u51fb\u592a\u5feb\uff0c\u4ee5\u81f4\u4e8e\u53d1\u9001\u4e86\u591a\u6b21\u8bf7\u6c42\uff0c\u9700\u8981\u9632\u6296,",(0,o.kt)("br",null),"\n\u8c03\u6574\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u65f6\uff0cresize \u6b21\u6570\u8fc7\u4e8e\u9891\u7e41\uff0c\u9020\u6210\u8ba1\u7b97\u8fc7\u591a\uff0c\u6b64\u65f6\u9700\u8981\u4e00\u6b21\u5230\u4f4d\uff0c\u5c31\u7528\u5230\u4e86\u9632\u6296"),(0,o.kt)("h2",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,o.kt)("p",null,"\u5168\u5c40\u4f5c\u7528\u57df\uff1a\u76f4\u63a5\u5199\u5728 script \u6807\u7b7e\u4e2d\u7684 JavaScript \u4ee3\u7801\u90fd\u662f\u5168\u5c40\u4f5c\u7528\u57df\u3002",(0,o.kt)("br",null),"\n\u51fd\u6570\u4f5c\u7528\u57df\uff1a\u4f5c\u7528\u4e8e\u51fd\u6570\u5185\u7684\u4ee3\u7801\u73af\u5883\uff0c\u5c31\u662f\u5c40\u90e8\u4f5c\u7528\u57df\u3002"),(0,o.kt)("h2",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,o.kt)("p",null,"\u5728\u4e00\u4e2a\u65b9\u6cd5\u5185\u5f15\u7528\u4e0d\u5c5e\u4e8e\u8fd9\u4e2a\u8fd9\u4e2a\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u5f53\u65b9\u6cd5\u6267\u884c\u9000\u51fa\u540e\u53d8\u91cf\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee",(0,o.kt)("br",null),"\n\u5982\u4f55\u521b\u9020\u95ed\u5305\uff1a\u4e00\u4e2a\u5d4c\u5957\u7684\u5185\u90e8(\u5b50)\u51fd\u6570\u5f15\u7528\u4e86\u5d4c\u5957\u7684\u5916\u90e8(\u7236)\u51fd\u6570\u7684\u53d8\u91cf(\u51fd\u6570)\u65f6, \u5c31\u4ea7\u751f\u4e86\u95ed\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function fn1 () {\n    var a = 2;\n    function fn2 () { // \u6267\u884c\u51fd\u6570\u5b9a\u4e49\u540e\uff0c\u624d\u4ea7\u751f\u95ed\u5305\uff0c\u4e0d\u5fc5\u975e\u5f97\u6267\u884c\u5185\u90e8\u51fd\u6570\n        console.log(a);\n    }\n}\nfn1();\n")),(0,o.kt)("p",null,"\u4e00\u822c\u4f7f\u7528\u60c5\u51b5\uff1a\u4e3b\u8981\u7684\u4f7f\u7528\u573a\u666f\u5c31\u662f\u4e3a\u4e86\u521b\u5efa\u79c1\u6709\u7684\u53d8\u91cf\u548c\u622a\u6d41\u9632\u6296\u4e2d\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"},"\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"),(0,o.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u4e3b\u8981\u4f5c\u7528\u662f\u533a\u522b\u666e\u901a\u51fd\u6570\u7684\u4e8c\u4e49\u6027\uff0c\u666e\u901a\u51fd\u6570\u65e2\u53ef\u4ee5\u5f53\u505a\u65b9\u6cd5\u8c03\u7528\u4e5f\u53ef\u4ee5\u5f53\u505a\u6784\u9020\u51fd\u6570\u901a\u8fc7new\u521b\u5efa\u5bf9\u8c61\uff0c\u7bad\u5934\u51fd\u6570\u53ea\u80fd\u901a\u8fc7\u8c03\u7528\u65b9\u6cd5\u7684\u65b9\u5f0f\u6267\u884c\u4e0d\u80fd\u5f53\u505a\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("p",null,"this\u7684\u7ed1\u5b9a\u673a\u5236\uff1a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684this\uff0c\u5b83\u7ee7\u627f\u5916\u5c42\u4f5c\u7528\u57df\u7684this\u503c\uff0c\u8fd9\u610f\u5473\u7740\u7bad\u5934\u51fd\u6570\u4e2d\u7684this\u6307\u5411\u662f\u5728\u51fd\u6570\u5b9a\u4e49\u65f6\u786e\u5b9a\u7684\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u540e\u7eed\u4ee3\u7801\u6216\u8c03\u7528\u65b9\u5f0f\u7684\u53d8\u5316\u800c\u6539\u53d8\uff08call, apply, bind\u4f1a\u6539\u53d8\u666e\u901a\u51fd\u6570\u7684this\uff0c\u4f46\u4e0d\u4f1a\u6539\u53d8\u7bad\u5934\u51fd\u6570\u7684this\uff09\uff0c\u5982\u679c\u6ca1\u6709\u4e0a\u5c42\u51fd\u6570\u4f5c\u7528\u57df\uff0c\u5219\u6307\u5411\u9876\u90e8this\uff08\u5728\u6d4f\u89c8\u5668\u4e2d\u9876\u90e8this\u5219\u662fwindow\uff09\u3002"),(0,o.kt)("p",null,"arguments\u5bf9\u8c61\u7684\u4f7f\u7528\uff1a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments\u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528\u5269\u4f59\u53c2\u6570(rest parameters)\u6765\u8bbf\u95ee\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\u3002"),(0,o.kt)("h2",{id:"react-diff\u539f\u7406\u662f\u4ec0\u4e48"},"React Diff\u539f\u7406\u662f\u4ec0\u4e48"),(0,o.kt)("h3",{id:"\u662f\u4ec0\u4e48"},"\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"React\u901a\u8fc7\u5f15\u5165Virtual DOM\u7684\u6982\u5ff5\uff0c\u6781\u5927\u5730\u907f\u514d\u65e0\u6548\u7684Dom\u64cd\u4f5c\uff0c\u4f7f\u6211\u4eec\u7684\u9875\u9762\u7684\u6784\u5efa\u6548\u7387\u63d0\u5230\u4e86\u6781\u5927\u7684\u63d0\u5347\uff0c\u800cdiff\u7b97\u6cd5\u5c31\u662f\u66f4\u9ad8\u6548\u5730\u901a\u8fc7\u5bf9\u6bd4\u65b0\u65e7Virtual DOM\u6765\u627e\u51fa\u771f\u6b63\u7684Dom\u53d8\u5316\u4e4b\u5904\uff0c\u4f20\u7edfdiff\u7b97\u6cd5\u901a\u8fc7\u5faa\u73af\u9012\u5f52\u5bf9\u8282\u70b9\u8fdb\u884c\u4f9d\u6b21\u5bf9\u6bd4\uff0c\u6548\u7387\u4f4e\u4e0b\uff0creact\u5c06\u7b97\u6cd5\u8fdb\u884c\u4e00\u4e2a\u4f18\u5316\u3002"),(0,o.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("p",null,"react\u4e2ddiff\u7b97\u6cd5\u4e3b\u8981\u9075\u5faa\u4e09\u4e2a\u5c42\u7ea7\u7684\u7b56\u7565\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tree\u5c42\u7ea7"),(0,o.kt)("li",{parentName:"ul"},"conponent \u5c42\u7ea7"),(0,o.kt)("li",{parentName:"ul"},"element \u5c42\u7ea7")),(0,o.kt)("h4",{id:"tree\u5c42\u7ea7"},"tree\u5c42\u7ea7"),(0,o.kt)("p",null,"DOM\u8282\u70b9\u8de8\u5c42\u7ea7\u7684\u64cd\u4f5c\u4e0d\u505a\u4f18\u5316\uff0c\u53ea\u4f1a\u5bf9\u76f8\u540c\u5c42\u7ea7\u7684\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83,\u53ea\u6709\u5220\u9664\u3001\u521b\u5efa\u64cd\u4f5c\uff0c\u6ca1\u6709\u79fb\u52a8\u64cd\u4f5c\u3002"),(0,o.kt)("h4",{id:"conponent\u5c42\u7ea7"},"conponent\u5c42\u7ea7"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u540c\u4e00\u4e2a\u7c7b\u7684\u7ec4\u4ef6\uff0c\u5219\u4f1a\u7ee7\u7eed\u5f80\u4e0bdiff\u8fd0\u7b97\uff0c\u5982\u679c\u4e0d\u662f\u4e00\u4e2a\u7c7b\u7684\u7ec4\u4ef6\uff0c\u90a3\u4e48\u76f4\u63a5\u5220\u9664\u8fd9\u4e2a\u7ec4\u4ef6\u4e0b\u7684\u6240\u6709\u5b50\u8282\u70b9\uff0c\u521b\u5efa\u65b0\u7684\u3002"),(0,o.kt)("h4",{id:"element\u5c42\u7ea7"},"element\u5c42\u7ea7"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6bd4\u8f83\u540c\u4e00\u5c42\u7ea7\u7684\u8282\u70b9\u4eec\uff0c\u6bcf\u4e2a\u8282\u70b9\u5728\u5bf9\u5e94\u7684\u5c42\u7ea7\u7528\u552f\u4e00\u7684key\u4f5c\u4e3a\u6807\u8bc6\uff0c\u63d0\u4f9b\u4e86 3 \u79cd\u8282\u70b9\u64cd\u4f5c\uff0c\u5206\u522b\u4e3a INSERT_MARKUP(\u63d2\u5165)\u3001MOVE_EXISTING (\u79fb\u52a8)\u548c REMOVE_NODE (\u5220\u9664)",(0,o.kt)("br",null),"\n\u901a\u8fc7key\u53ef\u4ee5\u51c6\u786e\u5730\u53d1\u73b0\u65b0\u65e7\u96c6\u5408\u4e2d\u7684\u8282\u70b9\u90fd\u662f\u76f8\u540c\u7684\u8282\u70b9\uff0c\u56e0\u6b64\u65e0\u9700\u8fdb\u884c\u8282\u70b9\u5220\u9664\u548c\u521b\u5efa\uff0c\u53ea\u9700\u8981\u5c06\u65e7\u96c6\u5408\u4e2d\u8282\u70b9\u7684\u4f4d\u7f6e\u8fdb\u884c\u79fb\u52a8\uff0c\u66f4\u65b0\u4e3a\u65b0\u96c6\u5408\u4e2d\u8282\u70b9\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e8b\u9879\n\u5bf9\u4e8e\u7b80\u5355\u5217\u8868\u6e32\u67d3\u800c\u8a00,\u7531\u4e8edom\u8282\u70b9\u7684\u79fb\u52a8\u64cd\u4f5c\u5f00\u9500\u662f\u6bd4\u8f83\u6602\u8d35\u7684\uff0c\u6ca1\u6709key\u7684\u60c5\u51b5\u4e0b\u8981\u6bd4\u6709key\u7684\u6027\u80fd\u66f4\u597d")),(0,o.kt)("h2",{id:"js\u4e8b\u4ef6\u5faa\u73af\u4e4b\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1"},"JS\u4e8b\u4ef6\u5faa\u73af\u4e4b\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6873424205791100942"},"\u5177\u4f53\u4ee3\u7801\u5206\u6790\u770b\u8fd9\u91cc")),(0,o.kt)("h3",{parentName:"blockquote",id:"\u4efb\u52a1\u961f\u5217"},"\u4efb\u52a1\u961f\u5217"),(0,o.kt)("p",{parentName:"blockquote"},"\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u4e5f\u5206\u4e3a\u4e24\u79cd\uff0c\u5206\u522b\u662f\uff1a\u5b8f\u4efb\u52a1\uff08Macro-take\uff09\u548c\u5fae\u4efb\u52a1\uff08Micro-take\uff09",(0,o.kt)("br",null),"\n\u5b8f\u4efb\u52a1\uff1ascript(JS \u6574\u4f53\u4ee3\u7801)\u3001setTimeout\u3001setInterval\u3001setImmediate\u3001I/O\u3001UI \u4ea4\u4e92",(0,o.kt)("br",null),"\n\u5fae\u4efb\u52a1\uff1aPromise(\u91cd\u70b9\u5173\u6ce8)\u3001process.nextTick(Node.js)\u3001MutaionObserver")),(0,o.kt)("p",null,"\u4efb\u52a1\u961f\u5217\u7684\u6267\u884c\u8fc7\u7a0b\u662f\uff1a\u5148\u6267\u884c\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff0c\u6267\u884c\u8fc7\u7a0b\u4e2d\u5982\u679c\u4ea7\u51fa\u65b0\u7684\u5b8f/\u5fae\u4efb\u52a1\uff0c\u5c31\u5c06\u4ed6\u4eec\u63a8\u5165\u76f8\u5e94\u7684\u4efb\u52a1\u961f\u5217\uff0c\u4e4b\u540e\u5728\u6267\u884c\u4e00\u961f\u5fae\u4efb\u52a1\uff0c\u4e4b\u540e\u518d\u6267\u884c\u5b8f\u4efb\u52a1\uff0c\u5982\u6b64\u5faa\u73af\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52bec546cf0748f9b89f5ca537d77baa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:null})),(0,o.kt)("h2",{id:"proto-\u548c-prototype\u7684\u5173\u7cfb"},(0,o.kt)("strong",{parentName:"h2"},"proto")," \u548c prototype\u7684\u5173\u7cfb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"proto"),"\u6307\u5411\u7684\u662f\u5176\u539f\u578b\u7684prototype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function F(){ \n\n}\n\n//\u4e3a\u539f\u578b\u4e2d\u6dfb\u52a0test()\u65b9\u6cd5\nF.prototype.test = function(){\n    console.log('\u8fd9\u91cc\u662f\u4e3a\u539f\u578b\u4e2d\u6dfb\u52a0\u7684\u65b9\u6cd5')\n}\n\n//\u6bcf\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a__proto__\u5c5e\u6027\uff0c\u79f0\u4e4b\u4e3a\u9690\u5f0f\u539f\u578b\nvar f = new F() \n//\u521b\u5efa\u5b9e\u4f8b\u5bf9\u8c61\u65f6\uff0c\u5185\u90e8\u4ea7\u751f\u8bed\u53e5: this.__proto__ = F.prototype\n\n//\u5b9e\u4f8b\u5bf9\u8c61\u7684\u9690\u5f0f\u539f\u578b\u7684\u503c\u548c\u5176\u6784\u9020\u51fd\u6570\u663e\u5f0f\u539f\u578b\u7684\u503c\u6240\u5bf9\u5e94\nconsole.log(f.__proto__ === F.prototype) // true\n\n")),(0,o.kt)("h2",{id:"instanceof\u7684\u7528\u6cd5"},"instanceof\u7684\u7528\u6cd5"),(0,o.kt)("p",null,"\u5b98\u65b9\u56de\u7b54\uff1a\u7528\u6765\u68c0\u6d4b constructor.prototype \u662f\u5426\u5b58\u5728\u4e8e\u53c2\u6570 object \u7684\u539f\u578b\u94fe\u4e0a\u3002"),(0,o.kt)("p",null,"\u5927\u767d\u8bdd\uff1a\u7528\u6765\u68c0\u6d4b\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u4ece\u67d0\u4e9b\u539f\u578b\u4e0a\u521b\u5efa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[] instanceof Array === true\n")),(0,o.kt)("h2",{id:"react-fiber"},"React Fiber"),(0,o.kt)("p",null,"React Fiber\u662f\u4e00\u4e2a\u7c7b\u4f3c\u53cc\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u7684\u6d4f\u89c8\u5668API\uff1arequestAnimationFrame \u6765\u5904\u7406\u4f18\u5148\u7ea7\u8f83\u9ad8\u7684\u66f4\u65b0,\u4f7f\u7528 requestIdleCallback \u5904\u7406\u4f18\u5148\u7ea7\u8f83\u4f4e\u7684\u66f4\u65b0\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/36c03f1ce93a"},"\u5177\u4f53\u770b\u8fd9\u91cc"))))}k.isMDXComponent=!0}}]);