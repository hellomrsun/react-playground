(this["webpackJsonpsg-demo"]=this["webpackJsonpsg-demo"]||[]).push([[29],{12:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return p}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",i="APP_TOGGLE_SIDEBAR",c="APP_TOGGLE_SETTINGPANEL",l="SETTINGS_CHANGE_SETTINGS",u="TAGSVIEW_ADD_TAG",s="TAGSVIEW_DELETE_TAG",d="TAGSVIEW_EMPTY_TAGLIST",m="TAGSVIEW_CLOSE_OTHER_TAGS",p="BUG_ADD_BUG"},148:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(36);function r(e){return Object(a.a)({url:"/userInfo",method:"post",data:e})}function o(){return Object(a.a)({url:"/user/list",method:"get"})}function i(e){return Object(a.a)({url:"/user/delete",method:"post",data:e})}function c(e){return Object(a.a)({url:"/user/edit",method:"post",data:e})}function l(e){return Object(a.a)({url:"/user/validatUserID",method:"post",data:e})}function u(e){return Object(a.a)({url:"/user/add",method:"post",data:e})}},16:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return i})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return v}));var a=n(8),r=n(12),o=n(148),i=function(e){return function(t){return new Promise((function(n,a){Object(o.e)(e).then((function(e){var r=e.data;if(0===r.status){var o=r.userInfo;t(c(o)),n(r)}else{var i=r.message;a(i)}})).catch((function(e){a(e)}))}))}},c=function(e){return Object(a.a)({type:r.j},e)},l=n(36);var u=n(61),s=function(e,t){return function(n){return new Promise((function(a,o){var i;(i={username:e.trim(),password:t},Object(l.a)({url:"/login",method:"post",data:i})).then((function(e){var t=e.data;if(0===t.status){var i=t.token;n(function(e){return{type:r.k,token:e}}(i)),Object(u.c)(i),a(t)}else{var c=t.message;o(c)}})).catch((function(e){o(e)}))}))}},d=function(e){return function(t){return new Promise((function(n,a){var o;(o=e,Object(l.a)({url:"/logout",method:"post",data:o})).then((function(e){var o=e.data;if(0===o.status)t({type:r.i}),Object(u.b)(),n(o);else{var i=o.message;a(i)}})).catch((function(e){a(e)}))}))}},m=function(){return{type:r.b}},p=function(){return{type:r.a}},f=function(e){return Object(a.a)({type:r.d},e)},h=function(e){return{type:r.e,tag:e}},g=function(){return{type:r.h}},b=function(e){return{type:r.g,tag:e}},E=function(e){return{type:r.f,tag:e}},v=function(e){return{type:r.c,bug:e}}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(189),r=n.n(a),o=n(197);function i(e,t){var n=new r.a(t.target,{text:function(){return e}});n.on("success",(function(){o.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){o.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},191:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},216:function(e,t,n){e.exports=n(392)},221:function(e,t,n){},291:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},303:function(e,t,n){},309:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},36:function(e,t,n){"use strict";var a=n(185),r=n.n(a),o=n(55),i=n(393),c=n(61),l=n(16),u=r.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/sg-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASE_API,timeout:5e3});u.interceptors.request.use((function(e){return o.a.getState().user.token&&(e.headers.Authorization=Object(c.a)()),e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),403===e.response.status&&i.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=o.a.getState().user.token;o.a.dispatch(Object(l.i)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e)})),t.a=u},390:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(221),n(39)),l=n(40),u=n(50),s=n(49),d=n(6),m=n(196),p=n(15),f=n(55),h=n(44),g=n(23),b=n(16),E=n(108),v=n.n(E),O=n(410),k=n(408),j=n(400),y=n(87),C=n(17),S=n.n(C),w=n(395),T=n(113),x=n.n(T);n(286);x.a.configure({showSpinner:!1});var N=function(){return Object(a.useEffect)((function(){return x.a.start(),function(){x.a.done()}}),[]),r.a.createElement("div",{className:"app-container"},r.a.createElement(w.a,null))},P=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(38),n.e(9)]).then(n.bind(null,1269))},loading:N}),_=S()({loader:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,1248))},loading:N}),I=S()({loader:function(){return Promise.all([n.e(0),n.e(39),n.e(17)]).then(n.bind(null,1273))},loading:N}),R=S()({loader:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,1249))},loading:N}),A=S()({loader:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,1250))},loading:N}),D=S()({loader:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,1251))},loading:N}),L=S()({loader:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,1252))},loading:N}),M=S()({loader:function(){return Promise.all([n.e(0),n.e(32),n.e(24)]).then(n.bind(null,1274))},loading:N}),V=S()({loader:function(){return Promise.all([n.e(0),n.e(35),n.e(20)]).then(n.bind(null,1275))},loading:N}),U=S()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,1253))},loading:N}),H=S()({loader:function(){return Promise.all([n.e(2),n.e(18)]).then(n.bind(null,1254))},loading:N}),G=S()({loader:function(){return Promise.all([n.e(2),n.e(19)]).then(n.bind(null,1255))},loading:N}),W=S()({loader:function(){return Promise.all([n.e(2),n.e(23)]).then(n.bind(null,1256))},loading:N}),J=S()({loader:function(){return n.e(21).then(n.bind(null,1257))},loading:N}),K=S()({loader:function(){return n.e(22).then(n.bind(null,1258))},loading:N}),B=S()({loader:function(){return Promise.all([n.e(1),n.e(34),n.e(25)]).then(n.bind(null,1272))},loading:N}),z=S()({loader:function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,1259))},loading:N}),F=S()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(33),n.e(26)]).then(n.bind(null,1276))},loading:N}),q=S()({loader:function(){return Promise.all([n.e(1),n.e(28)]).then(n.bind(null,1260))},loading:N}),X=S()({loader:function(){return n.e(8).then(n.bind(null,1261))},loading:N}),Y=S()({loader:function(){return n.e(13).then(n.bind(null,1262))},loading:N}),Z=[{path:"/dashboard",component:P,roles:["admin","editor","guest"]},{path:"/doc",component:_,roles:["admin","editor","guest"]},{path:"/guide",component:I,roles:["admin","editor"]},{path:"/permission/explanation",component:R,roles:["admin"]},{path:"/permission/adminPage",component:A,roles:["admin"]},{path:"/permission/guestPage",component:D,roles:["guest"]},{path:"/permission/editorPage",component:L,roles:["editor"]},{path:"/components/richTextEditor",component:M,roles:["admin","editor"]},{path:"/components/Markdown",component:V,roles:["admin","editor"]},{path:"/components/draggable",component:U,roles:["admin","editor"]},{path:"/charts/keyboard",component:H,roles:["admin","editor"]},{path:"/charts/line",component:G,roles:["admin","editor"]},{path:"/charts/mix-chart",component:W,roles:["admin","editor"]},{path:"/nested/menu1/menu1-1",component:J,roles:["admin","editor"]},{path:"/nested/menu1/menu1-2/menu1-2-1",component:K,roles:["admin","editor"]},{path:"/table",component:B,roles:["admin","editor"]},{path:"/excel/export",component:z,roles:["admin","editor"]},{path:"/excel/upload",component:F,roles:["admin","editor"]},{path:"/zip",component:q,roles:["admin","editor"]},{path:"/clipboard",component:X,roles:["admin","editor"]},{path:"/user",component:S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,1271))},loading:N}),roles:["admin"]},{path:"/about",component:S()({loader:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,1263))},loading:N}),roles:["admin","editor","guest"]},{path:"/bug",component:S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,1264))},loading:N}),roles:["admin"]},{path:"/error/404",component:Y}],$=[{title:"Home",path:"/dashboard",icon:"home",roles:["admin","editor","guest"]},{title:"\u5f15\u5bfc\u9875",path:"/guide",icon:"key",roles:["admin","editor"]},{title:"\u6743\u9650\u6d4b\u8bd5",path:"/permission",icon:"lock",children:[{title:"\u6743\u9650\u8bf4\u660e",path:"/permission/explanation",roles:["admin"]},{title:"admin\u9875\u9762",path:"/permission/adminPage",roles:["admin"]},{title:"guest\u9875\u9762",path:"/permission/guestPage",roles:["guest"]},{title:"editor\u9875\u9762",path:"/permission/editorPage",roles:["editor"]}]},{title:"\u7ec4\u4ef6",path:"/components",icon:"appstore",roles:["admin","editor"],children:[{title:"\u5bcc\u6587\u672c",path:"/components/richTextEditor",roles:["admin","editor"]},{title:"Markdown",path:"/components/Markdown",roles:["admin","editor"]},{title:"\u62d6\u62fd\u5217\u8868",path:"/components/draggable",roles:["admin","editor"]}]},{title:"\u56fe\u8868",path:"/charts",icon:"area-chart",roles:["admin","editor"],children:[{title:"\u952e\u76d8\u56fe\u8868",path:"/charts/keyboard",roles:["admin","editor"]},{title:"\u6298\u7ebf\u56fe",path:"/charts/line",roles:["admin","editor"]},{title:"\u6df7\u5408\u56fe\u8868",path:"/charts/mix-chart",roles:["admin","editor"]}]},{title:"\u8def\u7531\u5d4c\u5957",path:"/nested",icon:"cluster",roles:["admin","editor"],children:[{title:"\u83dc\u53551",path:"/nested/menu1",children:[{title:"\u83dc\u53551-1",path:"/nested/menu1/menu1-1",roles:["admin","editor"]},{title:"\u83dc\u53551-2",path:"/nested/menu1/menu1-2",children:[{title:"\u83dc\u53551-2-1",path:"/nested/menu1/menu1-2/menu1-2-1",roles:["admin","editor"]}]}]}]},{title:"\u8868\u683c",path:"/table",icon:"table",roles:["admin","editor"]},{title:"Excel",path:"/excel",icon:"file-excel",roles:["admin","editor"],children:[{title:"\u5bfc\u51faExcel",path:"/excel/export",roles:["admin","editor"]},{title:"\u4e0a\u4f20Excel",path:"/excel/upload",roles:["admin","editor"]}]},{title:"Zip",path:"/zip",icon:"file-zip",roles:["admin","editor"]},{title:"\u526a\u8d34\u677f",path:"/clipboard",icon:"copy",roles:["admin","editor"]},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"usergroup-add",roles:["admin"]},{title:"About",path:"/about",icon:"user",roles:["admin","editor","guest"]}],Q=j.a.Content,ee=function(e,t){var n="Ant Design Pro",a=Object(y.b)(e,"path",t);return a&&(n="".concat(a.title," - Ant Design Pro")),n},te=Object(p.b)((function(e){return e.user}))(Object(g.g)((function(e){var t=e.role,n=e.location,a=n.pathname;return r.a.createElement(v.a,{title:ee($,a)},r.a.createElement(Q,{style:{height:"calc(100% - 100px)"}},r.a.createElement(O.a,null,r.a.createElement(k.a,{key:n.pathname,timeout:500,classNames:"fade",exit:!1},r.a.createElement(g.d,{location:n},r.a.createElement(g.a,{exact:!0,from:"/",to:"/dashboard"}),Z.map((function(e){return function(e){return"admin"===t||!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(g.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(g.a,{to:"/error/404"}))))))}))),ne=n(8),ae=n(393),re=n(138),oe=n(394),ie=n(401),ce=n(45),le=n(57),ue=n.n(le),se=n(197),de=n(150),me=(n(291),n(411)),pe=function(){if(!ue.a.isEnabled)return se.a.warning("you browser can not work"),!1;ue.a.toggle()},fe=function(){var e=Object(a.useState)(!1),t=Object(ce.a)(e,2),n=t[0],o=t[1],i=function(){o(ue.a.isFullscreen)};Object(a.useEffect)((function(){return ue.a.isEnabled&&ue.a.on("change",i),function(){ue.a.isEnabled&&ue.a.off("change",i)}}),[]);var c=n?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",l=n?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(de.a,{placement:"bottom",title:c},r.a.createElement(me.a,{type:l,onClick:pe})))},he=n(412),ge=(n(293),Object(p.b)(null,{toggleSettingPanel:b.j})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(de.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(he.a,{onClick:t})))}))),be=(n(294),Object(p.b)((function(e){return e.app}),{toggleSiderBar:b.k})((function(e){var t=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(he.a,{onClick:t}))}))),Ee=n(409),ve=(n(295),Object(g.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}($,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(Ee.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(Ee.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(Ee.a.Item,{key:e.path},e.title)}))))}))),Oe=(n(303),j.a.Header),ke=Object(p.b)((function(e){return Object(ne.a)(Object(ne.a)(Object(ne.a)({},e.app),e.user),e.settings)}),{logout:b.i,getUserInfo:b.g})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,i=e.getUserInfo,c=e.showSettings,l=e.fixedHeader;t&&i(t);var u=r.a.createElement(re.b,{onClick:function(e){switch(e.key){case"logout":!function(e){ae.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement(re.b.Item,{key:"dashboard"},r.a.createElement(h.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement(re.b.Item,{key:"project"},r.a.createElement("a",{target:"_blank",href:"https://github.com/NLRX-WJC/react-antd-admin-template",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement(re.b.Divider,null),r.a.createElement(re.b.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(Oe,null):null,r.a.createElement(Oe,{style:l?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:l?"fix-header":""},r.a.createElement(be,null),r.a.createElement(ve,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(fe,null),c?r.a.createElement(ge,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(oe.a,{overlay:u},r.a.createElement("div",null,r.a.createElement(ie.a,{shape:"square",size:"medium",src:n})))))))})),je=n(407),ye=n(396),Ce=n(397),Se=n(402),we=n(403),Te=n(404),xe=n(34),Ne=n(177),Pe=Object(p.b)((function(e){return Object(ne.a)(Object(ne.a)({},e.app),e.settings)}),{toggleSettingPanel:b.j,changeSetting:b.c})((function(e){var t=e.settingPanelVisible,n=e.toggleSettingPanel,o=e.changeSetting,i=e.sidebarLogo,c=e.fixedHeader,l=e.tagsView,u=Object(a.useState)(i),s=Object(ce.a)(u,2),d=s[0],m=s[1],p=Object(a.useState)(c),f=Object(ce.a)(p,2),h=f[0],g=f[1],b=Object(a.useState)(l),E=Object(ce.a)(b,2),v=E[0],O=E[1];return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(je.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:n,visible:t},r.a.createElement(ye.a,null,r.a.createElement(Ce.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(Ce.a,{span:12},r.a.createElement(Se.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:d,onChange:function(e){m(e),o({key:"sidebarLogo",value:e})}}))),r.a.createElement(we.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(Ce.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(Ce.a,{span:12},r.a.createElement(Se.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:h,onChange:function(e){g(e),o({key:"fixedHeader",value:e})}}))),r.a.createElement(we.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(Ce.a,{span:12},r.a.createElement("span",null,"\u5f00\u542f Tags-View")),r.a.createElement(Ce.a,{span:12},r.a.createElement(Se.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:v,onChange:function(e){O(e),o({key:"tagsView",value:e})}}))),r.a.createElement(we.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(Ce.a,{span:24},r.a.createElement(Te.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,style:{marginBottom:"16px"}}),r.a.createElement(xe.a,{style:{width:"100%"},icon:"copy",onClick:function(e){var t="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(d,",\n      fixedHeader: ").concat(h,",\n      tagsView: ").concat(v,",\n    }\n    ");Object(Ne.a)(t,e)}},"\u62f7\u8d1d\u914d\u7f6e")))))})),_e=n(191),Ie=n.n(_e),Re=(n(309),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:Ie.a,className:"sidebar-logo",alt:"logo"}),r.a.createElement("h1",{className:"sidebar-title"},"React Demo"))}),Ae=n(48),De=n(110),Le=n(115),Me=(n(323),re.b.SubMenu),Ve=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),o=Object(ce.a)(r,1)[0];return a.splice(n,0,o),a},Ue=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props.role;return!("admin"!==a&&n&&!n.includes(a))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(Ae.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Me,{key:a.path,title:r.a.createElement("span",null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement(re.b.Item,{key:a.path},r.a.createElement(h.b,{to:a.path},r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=Ve(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e.handleMenuSelect=function(t){var n=t.key,a=void 0===n?"/dashboard":n,r=Object(y.b)($,"path",a);e.props.addTag(r)},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes($);this.setState({menuTreeNode:e}),this.handleMenuSelect(this.state.openKey)}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(De.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(Le.a,{onDragEnd:this.onDragEnd},r.a.createElement(Le.c,{droppableId:"droppable"},(function(a,o){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(a,o){return r.a.createElement(Le.b,{key:a.key,draggableId:a.key,index:o},(function(o,i){return r.a.createElement("div",Object.assign({ref:o.innerRef},o.draggableProps,o.dragHandleProps),r.a.createElement(re.b,{mode:"inline",theme:"dark",onSelect:e.handleMenuSelect,selectedKeys:[t],defaultOpenKeys:n},a))}))})))})))))}}]),n}(a.Component),He=Object(p.b)((function(e){return e.user}),{addTag:b.b})(Object(g.g)(Ue)),Ge=j.a.Sider,We=Object(p.b)((function(e){return Object(ne.a)(Object(ne.a)({},e.app),e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(Ge,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(Re,null):null,r.a.createElement(He,null))})),Je=n(398),Ke=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tagListContainer=r.a.createRef(),e.contextMenuContainer=r.a.createRef(),e.state={left:0,top:0,menuVisible:!1},e.handleClose=function(t){var n=e.props,a=n.history,r=n.deleteTag,o=n.taglist,i=t.path,c=a.location.pathname,l=o.length;i===c&&a.push(o[l-1].path),i===o[l-1].path&&c===o[l-1].path&&(l-2>0?a.push(o[l-2].path):2===l&&a.push(o[0].path)),r(t)},e.handleClick=function(t){e.props.history.push(t)},e.openContextMenu=function(t,n){n.preventDefault();var a=n.clientX,r=n.clientY;a>e.tagListContainer.current.clientWidth-105?e.setState({left:a-105+15,top:r,menuVisible:!0,currentTag:t}):e.setState({left:a,top:r,menuVisible:!0,currentTag:t})},e.handleClickOutside=function(t){var n=e.state.menuVisible;!(e.contextMenuContainer.current&&e.contextMenuContainer.current.contains(t.target))&&n&&e.closeContextMenu()},e.handleCloseAllTags=function(){e.props.emptyTaglist(),e.props.history.push("/dashboard"),e.closeContextMenu()},e.handleCloseOtherTags=function(){var t=e.state.currentTag,n=t.path;e.props.closeOtherTags(t),e.props.history.push(n),e.closeContextMenu()},e}return Object(l.a)(n,[{key:"closeContextMenu",value:function(){this.setState({menuVisible:!1})}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state,n=t.left,a=t.top,o=t.menuVisible,i=this.props,c=i.taglist,l=i.history.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-container"}))},renderTrackVertical:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-track-vertical"}))}},r.a.createElement("ul",{className:"tags-wrap",ref:this.tagListContainer},c.map((function(t){return r.a.createElement("li",{key:t.path},r.a.createElement(Je.a,{onClose:e.handleClose.bind(null,t),closable:"/dashboard"!==t.path,color:l===t.path?"geekblue":"gold",onClick:e.handleClick.bind(null,t.path),onContextMenu:e.openContextMenu.bind(null,t)},t.title))})))),o?r.a.createElement("ul",{className:"contextmenu",style:{left:"".concat(n,"px"),top:"".concat(a,"px")},ref:this.contextMenuContainer},r.a.createElement("li",{onClick:this.handleCloseOtherTags},"\u5173\u95ed\u5176\u4ed6"),r.a.createElement("li",{onClick:this.handleCloseAllTags},"\u5173\u95ed\u6240\u6709")):null)}}]),n}(a.Component),Be=Object(g.g)(Object(p.b)((function(e){return e.tagsView}),{deleteTag:b.e,emptyTaglist:b.f,closeOtherTags:b.d})(Ke)),ze=(n(324),function(){return r.a.createElement("div",{className:"tagsView-container"},r.a.createElement(Be,null))}),Fe=Object(p.b)((function(e){return e.settings}))((function(e){var t=e.tagsView;return r.a.createElement(j.a,{style:{minHeight:"100vh"}},r.a.createElement(We,null),r.a.createElement(j.a,null,r.a.createElement(ke,null),t?r.a.createElement(ze,null):null,r.a.createElement(te,null),r.a.createElement(Pe,null)))})),qe=n(405),Xe=n(406),Ye=(n(325),qe.a.create()((function(e){var t=e.form,n=e.token,o=e.login,i=e.getUserInfo,c=t.getFieldDecorator,l=Object(a.useState)(!1),u=Object(ce.a)(l,2),s=u[0],d=u[1],m=function(e){i(e).then((function(e){})).catch((function(e){se.a.error(e)}))};return n?r.a.createElement(g.a,{to:"/dashboard"}):r.a.createElement(v.a,{title:"Login"},r.a.createElement("div",{className:"login-container"},r.a.createElement(qe.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e?console.log("\u68c0\u9a8c\u5931\u8d25!"):function(e,t){d(!0),o(e,t).then((function(e){se.a.success("Login successfully!"),m(e.token)})).catch((function(e){d(!1),se.a.error(e)}))}(t.username,t.password)}))},className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Login")),r.a.createElement(w.a,{spinning:s,tip:"Logon..."},r.a.createElement(qe.a.Item,null,c("username",{rules:[{required:!0,whitespace:!0,message:"User Name"}],initialValue:"admin"})(r.a.createElement(Xe.a,{prefix:r.a.createElement(me.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"UserName"}))),r.a.createElement(qe.a.Item,null,c("password",{rules:[{required:!0,whitespace:!0,message:"Please input password"}],initialValue:"123456"})(r.a.createElement(Xe.a,{prefix:r.a.createElement(me.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(qe.a.Item,null,r.a.createElement(xe.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Login"))))))}))),Ze=Object(p.b)((function(e){return e.user}),{login:b.h,getUserInfo:b.g})(Ye),$e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(h.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/login",component:Ze}),r.a.createElement(g.b,{path:"/",render:function(){return t?n?r.a.createElement(Fe,null):void a(t).then((function(){return r.a.createElement(Fe,null)})):r.a.createElement(g.a,{to:"/login"})}})))}}]),n}(r.a.Component),Qe=Object(p.b)((function(e){return e.user}),{getUserInfo:b.g})($e),et=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(d.b,{locale:m.a},r.a.createElement(p.a,{store:f.a},r.a.createElement(Qe,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(389),n(390);for(var tt=n(21),nt=n.n(tt),at={admin:"admin-token",guest:"guest-token",editor:"editor-token"},rt={"admin-token":{id:"admin",role:"admin",name:"User",avatar:"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",description:"\u62e5\u6709\u7cfb\u7edf\u5185\u6240\u6709\u83dc\u5355\u548c\u8def\u7531\u6743\u9650"},"editor-token":{id:"editor",role:"editor",name:"\u7f16\u8f91\u5458",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u53ef\u4ee5\u770b\u5230\u9664\u6237\u7ba1\u7406\u9875\u9762\u4e4b\u5916\u7684\u6240\u6709\u9875\u9762"},"guest-token":{id:"guest",role:"guest",name:"\u6e38\u5ba2",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u4ec5\u80fd\u770b\u5230Dashboard\u3001\u5f00\u53d1\u6587\u6863\u3001\u6743\u9650\u6d4b\u8bd5\u548c\u5173\u4e8e\u4f5c\u8005\u56db\u4e2a\u9875\u9762"}},ot=function(e){var t=JSON.parse(e.body).username,n=at[t];return n?{status:0,token:n}:{status:1,message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}},it=function(e){var t=e.body,n=rt[t];return n?{status:0,userInfo:n}:{status:1,message:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"}},ct=function(){return{status:0,users:Object.values(rt)}},lt=function(e){var t=JSON.parse(e.body).id,n=at[t];return n&&(delete at[t],delete rt[n]),{status:0}},ut=function(e){var t=JSON.parse(e.body),n=t.id,a=at[n];return a&&(rt[a]=Object(ne.a)(Object(ne.a)({},rt[a]),t)),{status:0}},st=function(e){var t=e.body;return at[t]?{status:1}:{status:0}},dt=function(e){var t=JSON.parse(e.body),n=t.id;return at[n]="".concat(n,"-token"),rt["".concat(n,"-token")]=Object(ne.a)(Object(ne.a)({},rt["guest-token"]),t),{status:0}},mt=function(e){return{status:0,data:"success"}},pt=[],ft=0;ft<20;ft++)pt.push(nt.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var ht=function(e){return{code:2e4,data:{items:pt}}},gt=[],bt=0;bt<20;bt++)gt.push(nt.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var Et=function(e){return{code:2e4,data:{items:gt}}},vt=[],Ot=0;Ot<100;Ot++)vt.push(nt.a.mock({id:Ot,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var kt=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,i=t.star,c=(n-1)*a,l=n*a,u=vt.filter((function(e){return(!i||e.star.length===i)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(c,l);return{code:2e4,data:{total:u.length,items:s}}},jt=function(e){var t=JSON.parse(e.body).id,n=vt.filter((function(e){return e.id===t})),a=vt.indexOf(n[0]);return vt.splice(a,1),{code:2e4}},yt=function(e){var t=JSON.parse(e.body),n=t.id,a=vt.filter((function(e){return e.id===n})),r=vt.indexOf(a[0]);return vt.splice(r,1,t),{code:2e4}};nt.a.mock(/\/login/,"post",ot),nt.a.mock(/\/logout/,"post",mt),nt.a.mock(/\/userInfo/,"post",it),nt.a.mock(/\/user\/list/,"get",ct),nt.a.mock(/\/user\/delete/,"post",lt),nt.a.mock(/\/user\/edit/,"post",ut),nt.a.mock(/\/user\/validatUserID/,"post",st),nt.a.mock(/\/user\/add/,"post",dt),nt.a.mock(/\/transaction\/list/,"get",ht),nt.a.mock(/\/excel\/list/,"get",Et),nt.a.mock(/\/table\/list/,"post",kt),nt.a.mock(/\/table\/delete/,"post",jt),nt.a.mock(/\/table\/edit/,"post",yt),nt.a.mock(/\/monitor/,"post",(function(e){return{status:1,message:"monitor"}}));var Ct;nt.a;["click","touchstart","mousedown","keydown","mouseover"].forEach((function(e){document.addEventListener(e,(function(e){Ct=e}),{capture:!0,passive:!0})}));var St=function(){return Ct};function wt(e){return e.reverse().filter((function(e){return e!==document&&e!==window})).map((function(e){return e.id?"".concat(e.nodeName.toLowerCase(),"#").concat(e.id):e.className&&"string"===typeof e.className?"".concat(e.nodeName.toLowerCase(),".").concat(e.className):e.nodeName.toLowerCase()})).join(" ")}var Tt=function(e){if(Array.isArray(e))return wt(e);for(var t=[];e;)t.push(e),e=e.parentNode;return wt(t)},xt=n(36);function Nt(e){return Object(xt.a)({url:"/monitor",method:"post",data:e})}var Pt=n(195),_t=n.n(Pt);function It(){return{title:document.title,url:window.location.href,timestamp:Date.now(),userAgent:_t.a.parse(navigator.userAgent).name}}var Rt=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=It(),n=Object(ne.a)(Object(ne.a)({},t),e);Nt(n),f.a.dispatch(Object(b.a)(n))}}]),e}()),At={SCRIPT:2,LINK:3,IMG:4,AUDIO:5,VIDEO:6},Dt={1:"JS_RUNTIME_ERROR",2:"SCRIPT_LOAD_ERROR",3:"CSS_LOAD_ERROR",4:"IMAGE_LOAD_ERROR",5:"AUDIO_LOAD_ERROR",6:"VIDEO_LOAD_ERROR",7:"CONSOLE_ERROR",8:"TRY_CATCH_ERROR"};window.addEventListener("error",(function(e){var t=St(),n=e.target;if(n!==window&&n.nodeName&&At[n.nodeName.toUpperCase()])Rt.send({kind:"stability",errorType:Dt[At[n.nodeName.toUpperCase()]],desc:n.baseURI+"@"+(n.src||n.href),stack:"no stack",selector:Tt(n)});else{var a=e.message,r=e.filename,o=e.lineno,i=e.colno,c=e.error;Rt.send({kind:"stability",errorType:Dt[1],desc:"".concat(a," at ").concat(r,":").concat(o,":").concat(i),stack:c&&c.stack?c.stack:"no stack",selector:t?Tt(t.path):""})}}),!0),window.addEventListener("unhandledrejection",(function(e){var t,n,a=St(),r=0,o=0,i="",c=e.reason;if("string"===typeof c)t=c;else if("object"===typeof c){if(t=c.message,c.stack){var l=c.stack.match(/at\s+(.+):(\d+):(\d+)/);n=l[1],r=l[2],o=l[3]}i=c.stack}Rt.send({kind:"stability",errorType:Dt[1],desc:"".concat(t," at ").concat(n,":").concat(r,":").concat(o),stack:i,selector:a?Tt(a.path):""})}),!0),i.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,n){"use strict";var a=n(33),r=n(184),o=n(8),i=n(12),c=n(61),l={name:"",role:"",avatar:"",token:Object(c.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(106),d={showSettings:!0,sidebarLogo:!0,fixedHeader:!1,tagsView:!0};var m=n(48),p={taglist:[]};var f={bugList:[]};var h=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.k:return Object(o.a)(Object(o.a)({},e),{},{token:t.token});case i.j:return Object(o.a)(Object(o.a)({},e),{},{name:t.name,role:t.role,avatar:t.avatar});case i.i:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(o.a)(Object(o.a)({},e),{},{sidebarCollapsed:!e.sidebarCollapsed});case i.a:return Object(o.a)(Object(o.a)({},e),{},{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.d:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,a)):e;default:return e}},tagsView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.e:var n=t.tag;return e.taglist.includes(n)?e:Object(o.a)(Object(o.a)({},e),{},{taglist:[].concat(Object(m.a)(e.taglist),[n])});case i.g:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return e!==t.tag})))});case i.h:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path})))});case i.f:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path||e===t.tag})))});default:return e}},monitor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:return{bugList:[].concat(Object(m.a)(e.bugList),[t.bug])};default:return e}}}),g=Object(a.e)(h,Object(a.a)(r.a));t.a=g},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(112),r=n.n(a);function o(){return r.a.get("Token")}function i(e){return r.a.set("Token",e)}function c(){return r.a.remove("Token")}},87:function(e,t,n){"use strict";function a(e,t,n){var a,r,o,i,c,l=function l(){var u=+new Date-i;u<t&&u>0?a=setTimeout(l,t-u):(a=null,n||(c=e.apply(o,r),a||(o=r=null)))};return function(){for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];o=this,i=+new Date;var d=n&&!a;return a||(a=setTimeout(l,t)),d&&(c=e.apply(o,u),o=u=null),c}}function r(e,t,n){var a,r=[];for(r=r.concat(e);r.length;){var o=r.shift();o.children&&o.children.length>0&&(r=o.children.concat(r)),n===o[t]&&(a=o)}return a}function o(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}))}},[[216,30,31]]]);
//# sourceMappingURL=main.a197d29e.chunk.js.map