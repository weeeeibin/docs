"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c",id:"\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c",title:"\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c",description:"\u5b89\u88c5ScrollMagic",source:"@site/docs/\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c.md",sourceDirName:"\u52a8\u753b",slug:"/\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c",permalink:"/docs/\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c",draft:!1,editUrl:"https://github.com/weeeeibin/docs/blob/main/docs/\u52a8\u753b/\u6eda\u52a8\u6761\u52a8\u753b\u5236\u4f5c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Yolov5 \u5907\u5fd8\u5f55",permalink:"/docs/AI/Yolov5"},next:{title:"RethinkDB",permalink:"/docs/\u6570\u636e\u5e93/rethinkdb"}},c={},p=[{value:"\u5b89\u88c5ScrollMagic",id:"\u5b89\u88c5scrollmagic",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u6f14\u793a\u754c\u9762",id:"\u6f14\u793a\u754c\u9762",level:3}],d={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5scrollmagic"},"\u5b89\u88c5ScrollMagic"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"http://scrollmagic.io/"},"ScrollMagic\u5b98\u7f51"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install scrollmagic\nnpm install gsap //\u52a8\u753b\u5e93\n\nimport ScrollMagic from 'scrollmagic';\nimport { gsap,TimelineLite, TweenLite } from 'gsap';\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'gsap.registerPlugin(TimelineLite, TweenLite); //\u6ce8\u518c\u52a8\u753b\u5e93 \u4e3b\u8981\u7528\u4e8e\u6548\u679c\u8fc7\u5ea6\nlet controller = new ScrollMagic.Controller(); //\u521b\u5efa\u63a7\u5236\u5668\nlet one = new TimelineLite(); //\u4f7f\u7528\u65f6\u95f4\u7ebf\u52a8\u753b\n\n\n//\u7ed1\u5b9a\u5173\u952e\u5e27\none.add(TweenLite.to(document.getElementById("hi_us"), 1, { opacity: 0 }));\none.add(TweenLite.to(document.getElementById("hi_cn"), 1, { opacity: 1 }));\none.add(TweenLite.to(document.getElementById("hi_cn"), 1, { opacity: 0 }));\none.add(TweenLite.to(document.getElementById("hi_jp"), 1, { opacity: 1 }));\none.add(TweenLite.to(document.getElementById("hi_jp"), 1, { opacity: 0 }));\none.add(TweenLite.to(document.getElementById("hi_kr"), 1, { opacity: 1 }));\none.add(TweenLite.to(document.getElementById("hi_kr"), 1, { opacity: 0 }));\none.add(TweenLite.to(document.getElementById("hi_ru"), 1, { opacity: 1 }));\n\none.pause(); //\u6682\u505c\u52a8\u753b\u9632\u6b62\u81ea\u52a8\u64ad\u653e\n\n//\u521b\u5efa\u573a\u666f\u5e76\u6dfb\u52a0\u5230\u63a7\u5236\u5668\nnew ScrollMagic.Scene({\n    duration: window.innerHeight * 2.5, //\u64ad\u653e\u4e00\u5e27\u9700\u8981\u7684\u8ddd\u79bb\n    triggerHook: 0, //\u89e6\u53d1\u8ddd\u79bb\n    triggerElement: "#one" //\u573a\u666fid \n}).setPin("#one").addTo(controller).on("progress", (e: any) => {\n    //\u52a8\u753b\u6267\u884c\u8fdb\u5ea6\n    one.seek(e.progress * 8) //8\u6765\u6e90\u4e8e\u5173\u952e\u5e27\u52a8\u753b\n}).on("end",() => {\n    //\u52a8\u753b\u7ed3\u675f\u89e6\u53d1\n    if(Boolean(props.location.search)){\n        let url = props.location.search.replace("?url=","")\n        window.location.href = url;\n    }\n})\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'/*------------HTML\u90e8\u5206------------*/\n<div>\n    <div className="main" id="one" style={{ height: \'100vh\' }}> \n        <div id="controller1" className="scene">\n            <p id="hi_us" style={{ fontSize: "270px" }}>Hi</p>\n            <p id="hi_cn" style={{ opacity: 0, fontSize: "180px" }}>\u4f60\u597d</p>\n            <p id="hi_jp" style={{ opacity: 0 }}>\u3053\u3093\u306b\u3061\u306f</p>\n            <p id="hi_kr" style={{ opacity: 0 }}>\uc548\ub155\ud558\uc138\uc694</p>\n            <p id="hi_ru" style={{ opacity: 0 }}>\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u044b\u0439\u0442\u0435</p>\n        </div>\n    </div>\n\n    <div className="square">\n        <p>My</p>\n        <p>WebSite</p>\n        <p style={{textAlign:"justify"}}>WeiBin.Chen</p>\n    </div>\n</div>\n')),(0,o.kt)("h3",{id:"\u6f14\u793a\u754c\u9762"},"\u6f14\u793a\u754c\u9762"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://mrmd.xyz/demo/hi?url=https://mrmd.xyz"},"DEMO"))))}u.isMDXComponent=!0}}]);