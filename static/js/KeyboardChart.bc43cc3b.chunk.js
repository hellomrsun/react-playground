(this["webpackJsonpsg-demo"]=this["webpackJsonpsg-demo"]||[]).push([[18],{1254:function(t,e,a){"use strict";a.r(e);var n=a(39),i=a(40),s=a(50),o=a(49),r=a(0),l=a.n(r),c=a(15),u=a(444),h=a(87),d=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={chart:null},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;Object(h.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return t.resize()}))}},{key:"componentWillReceiveProps",value:function(t){t.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var t=this.state.chart;t&&Object(h.a)(t.resize.bind(this),300)()}},{key:"dispose",value:function(){var t=this;this.state.chart&&(window.removeEventListener("resize",(function(){return t.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){for(var t=[],e=[],a=[],n=0;n<50;n++)t.push(n),e.push(5*(Math.sin(n/5)*(n/5-10)+n/6)),a.push(3*(Math.sin(n/5)*(n/5+10)+n/6));this.state.chart.setOption({backgroundColor:"#08263a",grid:{left:"5%",right:"5%"},xAxis:[{show:!1,data:t},{show:!1,data:t}],visualMap:{show:!1,min:0,max:50,dimension:0,inRange:{color:["#4a657a","#308e92","#b1cfa5","#f5d69f","#f5898b","#ef5055"]}},yAxis:{axisLine:{show:!1},axisLabel:{textStyle:{color:"#4a657a"}},splitLine:{show:!0,lineStyle:{color:"#08263f"}},axisTick:{show:!1}},series:[{name:"back",type:"bar",data:a,z:1,itemStyle:{normal:{opacity:.4,barBorderRadius:5,shadowBlur:3,shadowColor:"#111"}}},{name:"Simulate Shadow",type:"line",data:e,z:2,showSymbol:!1,animationDelay:0,animationEasing:"linear",animationDuration:1200,lineStyle:{normal:{color:"transparent"}},areaStyle:{normal:{color:"#08263a",shadowBlur:50,shadowColor:"#000"}}},{name:"front",type:"bar",data:e,xAxisIndex:1,z:3,itemStyle:{normal:{barBorderRadius:5}}}],animationEasing:"elasticOut",animationEasingUpdate:"elasticOut",animationDelay:function(t){return 20*t},animationDelayUpdate:function(t){return 20*t}})}},{key:"initChart",value:function(){var t=this;this.el&&this.setState({chart:u.a.init(this.el,"macarons")},(function(){t.setOptions()}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{style:{width:"100%",height:"calc(100vh - 100px)"},className:"app-container"},l.a.createElement("div",{style:{width:"100%",height:"100%"},ref:function(e){return t.el=e}}))}}]),a}(r.Component);e.default=Object(c.b)((function(t){return t.app}))(d)},444:function(t,e,a){"use strict";var n=a(414),i=a.n(n);a(481),a(493),a(494),a(497),a(500),a(501);a(524),e.a=i.a}}]);
//# sourceMappingURL=KeyboardChart.bc43cc3b.chunk.js.map