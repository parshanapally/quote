(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(4),o=a(5),l=a(6),c=a(8),r=a(7),u=a(9),m=function(){return fetch("https://calm-everglades-77663.herokuapp.com/quote").then(function(e){return e.json()})},v=(a(16),a(1)),h=a.n(v),d=function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Motivational ",n.a.createElement("span",null,"Quotes")," "),n.a.createElement("div",{className:"quote-container"},e.quotes[0].motivation[Math.floor(Math.random()*(e.quotes.length-1))].quote))};d.protoTypes={quotes:h.a.array.isRequired};var p=d,q=(a(19),function(e){return n.a.createElement("div",{className:"tab-container"},n.a.createElement("div",{className:"tab-links"},[{className:"homeDiv",text:"Home"},{className:"motivationalDiv",text:"Motivational"},{className:"humorDiv",text:"Humor"},{className:"positiveDiv",text:"Positive"},{className:"leadershipDiv",text:"Leadership"},{className:"wisdomDiv",text:"Wisdom"}].map(function(t){return n.a.createElement("div",{onClick:e.handleClick,className:t.className},t.text)})))}),N=a(2),E=a.n(N),f=(a(20),function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Humor ",n.a.createElement("span",null,"Quotes")," "),n.a.createElement("div",{className:"quote-container"},e.quotes[1].humor[Math.floor(Math.random()*(e.quotes.length-1))].quote))});f.protoTypes={quotes:h.a.array.isRequired};var g=f,y=(a(21),function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Positive ",n.a.createElement("span",null,"Quotes")),n.a.createElement("div",{className:"quote-container"},e.quotes[2].positive[Math.floor(Math.random()*(e.quotes.length-1))].quote))});y.protoTypes={quotes:h.a.array.isRequired};var k=y,D=(a(22),function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Leadership ",n.a.createElement("span",null,"Quotes")),n.a.createElement("div",{className:"quote-container"},e.quotes[3].leadership[Math.floor(Math.random()*(e.quotes.length-1))].quote))});D.protoTypes={quotes:h.a.array.isRequired};var A=D,w=(a(23),function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Wisdom ",n.a.createElement("span",null,"Quotes")),n.a.createElement("div",{className:"quote-container"},e.quotes[4].wisdom[Math.floor(Math.random()*(e.quotes.length-1))].quote))});w.protoTypes={quotes:h.a.array.isRequired};var M=w,L=(a(24),function(e){return n.a.createElement("div",{className:e.className},n.a.createElement("h1",null,"Daily Dose of ",n.a.createElement("span",null,"Quotes")),n.a.createElement("p",null,"Need something to get you through the day?"))}),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(n)))).state={filteredQuotes:[],quotes:[],isActive:"home",doneLoading:!1},a.handleClick=function(e){"motivationalDiv"===e.target.className?a.setState({isActive:"motivational"}):"humorDiv"===e.target.className?a.setState({isActive:"humor"}):"positiveDiv"===e.target.className?a.setState({isActive:"positive"}):"leadershipDiv"===e.target.className?a.setState({isActive:"leadership"}):"wisdomDiv"===e.target.className?a.setState({isActive:"wisdom"}):"homeDiv"===e.target.className&&a.setState({isActive:"home"})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;return m().then(function(t){e.setState({quotes:t,doneLoading:!0})})}},{key:"render",value:function(){return n.a.createElement("div",null,this.state.doneLoading?n.a.createElement(s.Fragment,null," ",n.a.createElement(L,{className:E()("homeLink",{active:"home"===this.state.isActive})}),n.a.createElement(p,{className:E()("motivationalLink",{active:"motivational"===this.state.isActive}),quotes:this.state.quotes}),n.a.createElement(g,{className:E()("humorLink",{active:"humor"===this.state.isActive}),quotes:this.state.quotes}),n.a.createElement(k,{className:E()("positiveLink",{active:"positive"===this.state.isActive}),quotes:this.state.quotes}),n.a.createElement(A,{className:E()("leadershipLink",{active:"leadership"===this.state.isActive}),quotes:this.state.quotes}),n.a.createElement(M,{className:E()("wisdomLink",{active:"wisdom"===this.state.isActive}),quotes:this.state.quotes})):n.a.createElement("div",{className:"container"}),n.a.createElement(q,{state:this.state.filteredQuotes,handleClick:this.handleClick}))}}]),t}(s.Component);Object(i.render)(n.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5ca7d6a6.chunk.js.map