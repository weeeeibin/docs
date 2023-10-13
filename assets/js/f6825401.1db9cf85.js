"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},s="\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023",i={unversionedId:"js2023",id:"js2023",title:"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023",description:"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02",source:"@site/docs/js2023.md",sourceDirName:".",slug:"/js2023",permalink:"/docs/markdown/js2023",draft:!1,editUrl:"https://github.com/weeeeibin/docs/blob/main/docs/js2023.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2020",permalink:"/docs/markdown/js2020"}},l={},c=[{value:"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02",id:"react-hooks\u548cclass\u6709\u4ec0\u4e48\u5dee\u5f02",level:3},{value:"\u5e38\u7528\u7684Hooks Api",id:"\u5e38\u7528\u7684hooks-api",level:3},{value:"Redux\u7684\u597d\u5904\u5728\u54ea\u91cc",id:"redux\u7684\u597d\u5904\u5728\u54ea\u91cc",level:3},{value:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296",id:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u7aef\u9762\u8bd5\u9898js-2023"},"\u524d\u7aef\u9762\u8bd5\u9898(JS) 2023"),(0,o.kt)("h3",{id:"react-hooks\u548cclass\u6709\u4ec0\u4e48\u5dee\u5f02"},"React Hooks\u548cClass\u6709\u4ec0\u4e48\u5dee\u5f02"),(0,o.kt)("p",null,"Class\u62e5\u6709\u975e\u5e38\u6e05\u6670\u7684\u751f\u547d\u5468\u671f\uff0c\u4ee5\u53ca\u5185\u90e8\u72b6\u6001\uff0c\u4f7f\u5f97\u4e00\u4e2a\u7ec4\u4ef6\u7684\u4ee3\u7801\u66f4\u4e3a\u805a\u5408\uff0c\u4f46\u662f\u4e0e\u4e4b\u800c\u6765\u7684\u7f3a\u70b9\u4fbf\u662f\uff1a\u590d\u6742\u7684this\u6307\u5411\u95ee\u9898\u3001\u7ec4\u4ef6\u72b6\u6001\u96be\u4ee5\u590d\u7528\u3001\u4ee3\u7801\u590d\u6742\u5ea6\u9ad8\uff0c\u903b\u8f91\u8fc7\u4e8e\u6df7\u5408\u3002"),(0,o.kt)("p",null,"Hooks\u7684\u4f18\u52bf\u4fbf\u662f\uff1a\u51fd\u6570\u5f0f\u5199\u6cd5\u7b80\u5355\u660e\u4e86\uff0c\u4e14\u6613\u4e8e\u89e3\u8026\u5408\uff0c\u6613\u4e8e\u590d\u7528\u3001\u4e0d\u9700\u8981\u518d\u5728\u5404\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u653e\u7f6e\u5927\u91cf\u4e0d\u76f8\u5173\u7684\u903b\u8f91\uff0c\u6216\u8005\u540c\u4e00\u903b\u8f91\u9700\u8981\u5206\u6563\u5728\u5404\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u5e38\u7528\u7684hooks-api"},"\u5e38\u7528\u7684Hooks Api"),(0,o.kt)("p",null,"useRef\u3001useMemo\u3001useEffect\u3001useState\u3001useReducer\u3001useContext\u3001useLayoutEffect"),(0,o.kt)("h3",{id:"redux\u7684\u597d\u5904\u5728\u54ea\u91cc"},"Redux\u7684\u597d\u5904\u5728\u54ea\u91cc"),(0,o.kt)("p",null,"\u5355\u4e00\u6570\u636e\u6e90\uff1aRedux \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u4e00\u7684\u3001\u53ef\u9884\u6d4b\u7684\u72b6\u6001\u6811\uff0c\u4f7f\u5f97\u6240\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u90fd\u96c6\u4e2d\u5728\u4e00\u4e2a\u5730\u65b9\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u4f7f\u5f97\u72b6\u6001\u7ba1\u7406\u66f4\u52a0\u53ef\u9760\u548c\u53ef\u63a7\uff0c\u65b9\u4fbf\u8fdb\u884c\u72b6\u6001\u7684\u8ddf\u8e2a\u548c\u8c03\u8bd5\uff0c\u540c\u65f6\u4e5f\u80fd\u591f\u907f\u514d\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u7684\u4e0d\u4e00\u81f4\u6027\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u65b9\u4fbf\u8fdb\u884c\u72b6\u6001\u5171\u4eab\uff1aRedux \u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5171\u4eab\u72b6\u6001\uff0c\u4ece\u800c\u53ef\u4ee5\u7b80\u5316\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u548c\u6570\u636e\u4f20\u9012\u3002"),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296"},"\u4ec0\u4e48\u662f\u622a\u6d41\u9632\u6296"),(0,o.kt)("p",null,"\u8282\u6d41\uff1a\u9650\u5236\u4e00\u4e2a\u52a8\u4f5c\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u80fd\u6267\u884c\u4e00\u6b21\u3002\n\u4e00\u822c\u4f7f\u7528\u573a\u666f\uff1ascroll\u4e8b\u4ef6\u3001input\u6846\u5b9e\u65f6\u641c\u7d22\u5e76\u53d1\u9001"),(0,o.kt)("p",null,"\u9632\u6296\uff1a\u5f53\u4e00\u4e2a\u52a8\u4f5c\u8fde\u7eed\u89e6\u53d1\uff0c\u53ea\u6267\u884c\u6700\u540e\u4e00\u6b21\u3002\n\u4e00\u822c\u4f7f\u7528\u573a\u666f\uff1a\u767b\u5f55\u3001\u53d1\u77ed\u4fe1\u7b49\u6309\u94ae\u907f\u514d\u7528\u6237\u70b9\u51fb\u592a\u5feb\uff0c\u4ee5\u81f4\u4e8e\u53d1\u9001\u4e86\u591a\u6b21\u8bf7\u6c42\uff0c\u9700\u8981\u9632\u6296\n\u8c03\u6574\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u65f6\uff0cresize \u6b21\u6570\u8fc7\u4e8e\u9891\u7e41\uff0c\u9020\u6210\u8ba1\u7b97\u8fc7\u591a\uff0c\u6b64\u65f6\u9700\u8981\u4e00\u6b21\u5230\u4f4d\uff0c\u5c31\u7528\u5230\u4e86\u9632\u6296"))}d.isMDXComponent=!0}}]);