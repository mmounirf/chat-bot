(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(9),c=n.n(o),i=(n(17),n(11)),r=n(1),m=n(5),l=n(4),u=n(2),f=n(3),p=(n(19),n(21),n(23),n(7)),h=n.n(p),d=function(e){return s.a.createElement("div",{className:"message-container from-".concat(e.from)},s.a.createElement("p",{className:"message-content"},e.message),s.a.createElement("span",{className:"message-time"},h()(e.timestamp).fromNow()))},g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"conversation-container"},this.props.messages.map(function(e){return s.a.createElement(d,{from:e.from,message:e.content,timestamp:e.timestamp,key:e.id})}))}}]),t}(a.Component),b=(n(26),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={message:""},n.handleChange=function(e){n.setState({message:e.target.value,from:"client"})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message-input-container"},s.a.createElement("input",{type:"text",placeholder:"Your Message",onChange:this.handleChange}),s.a.createElement("button",{onClick:this.props.messageContent.bind(this,{from:"client",content:this.state.message,timestamp:h()().toISOString(),id:h()().unix()})},"Send"))}}]),t}(a.Component)),v=n(10),w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={messages:[]},n.client=new v.a({accessToken:"c61614b13f724f8f97e9854d29093d7b"}),n.addMessage=function(e,t,a,s){var o=Object(i.a)(n.state.messages);o.push({from:e,content:t,timestamp:a,id:s}),n.setState({messages:o})},n.newMessage=function(e){n.addMessage(e.from,e.content,e.timestamp,e.id),n.client.textRequest(e.content).then(function(e){n.addMessage("bot",e.result.fulfillment.speech,e.timestamp,e.id)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.client.textRequest("hello").then(function(t){e.addMessage("bot",t.result.fulfillment.speech,t.timestamp,t.id)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,{messages:this.state.messages}),s.a.createElement(b,{messageContent:this.newMessage}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.5424fee8.chunk.js.map