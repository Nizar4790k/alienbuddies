(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(3),a=n.n(s),i=(n(13),n(14),n(4)),o=n(5),l=n(7),h=n(6),d=function(e){return Object(c.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?set=set2&200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.aliens;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchField;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search alien",onChange:t})})},b=(n(15),function(e){return Object(c.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"},children:e.children})}),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={aliens:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({aliens:t})}))}},{key:"render",value:function(){var e=this.state,t=e.aliens,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"AlienBuddies"}),Object(c.jsx)(u,{searchChange:this.onSearchChange}),Object(c.jsx)(b,{children:Object(c.jsx)(j,{aliens:r})})]}):Object(c.jsx)("h1",{children:"Loading"})}}]),n}(r.Component);a.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f7dba63a.chunk.js.map