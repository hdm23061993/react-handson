(this["webpackJsonpreact-handson"]=this["webpackJsonpreact-handson"]||[]).push([[0],[,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/tictactoe.e59e2ae1.svg"},function(e,a,t){e.exports=t.p+"static/media/sudoku.33f430c2.svg"},function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/stopwatch.a09e33b2.svg"},,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(11),u=t.n(s),i=(t(22),t(2)),l=t(3),c=t(5),o=t(4),d=(t(23),t(9),t(12)),h=t.n(d),m=t(13),v=t.n(m),b=(t(24),t(14)),S=t.n(b),q=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"nav fixed-top nav-expand-md"},n.a.createElement("div",{className:"float-left"},n.a.createElement("div",{className:"button-collapse",onClick:this.props.toggleSlideOut},n.a.createElement("i",{className:"fas fa-bars"}),n.a.createElement("span",{className:"sr-only","aria-hidden":"true"},"Toggle side navigation"))),n.a.createElement("div",null,n.a.createElement("button",{className:"app-name"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),n.a.createElement("span",null,"React Hands-on"))))))}}]),t}(r.Component),f=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:this.props.objState.slideOutClassName},n.a.createElement("ul",null,n.a.createElement("li",{onClick:function(){return e.props.setActiveTab("Tic-Tac-Toe","tictactoe")}},n.a.createElement("button",null,n.a.createElement("img",{src:h.a,className:"side-nav-icon",alt:"tic-tac-toe"}),n.a.createElement("span",{className:"tictactoe"===this.props.objState.active.card?"side-nav-li-active":""},"Tic-Tac-Toe"))),n.a.createElement("li",{onClick:function(){return e.props.setActiveTab("Sudoku","sudoku")}},n.a.createElement("button",null,n.a.createElement("img",{src:v.a,className:"side-nav-icon",alt:"sudoku"}),n.a.createElement("span",{className:"sudoku"===this.props.objState.active.card?"side-nav-li-active":""},"Sudoku"))))),n.a.createElement(q,{toggleSlideOut:this.props.toggleSlideOut})))}}]),t}(r.Component),p=t(16);var k=function(e){return n.a.createElement("div",{className:e.className,onClick:e.onClick},e.value)};var N=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).resetGame=function(){r.setState({squares:Array(9).fill(null),squareClassName:Array(9).fill("square"),xIsNext:!0})},r.state={squares:Array(9).fill(null),squareClassName:Array(9).fill("square"),xIsNext:!0},r}return Object(l.a)(t,[{key:"handleClick",value:function(e){var a=this.state.squares.slice();a[e]=this.state.xIsNext?"X":"O";var t=this.state.squareClassName.slice();t[e]=this.state.xIsNext?"square X":"square O",this.setState({squares:a,squareClassName:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var a=this;return n.a.createElement(k,{className:this.state.squareClassName[e],value:this.state.squares[e],onClick:function(){return a.handleClick(e)}})}},{key:"render",value:function(){var e,a,t=function(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var r=Object(p.a)(a[t],3),n=r[0],s=r[1],u=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return a[t]}return null}(this.state.squares);return t?(e="Winner: "+this.state.squares[t.slice()[0]],a="success",this.state.squareClassName=this.state.squareClassName.map((function(e){return"square"===e?"square disabled":e}))):e=this.state.squares.slice().includes(null)?"Next player: "+(this.state.xIsNext?"X":"O"):"Draw. Nobody wins",n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"status "+a},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),n.a.createElement("div",{className:"reset"},n.a.createElement("button",{type:"button",className:"reset-button",onClick:this.resetGame},"Reset")))}}]),t}(r.Component),y=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(N,null))))}}]),t}(r.Component),O=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(y,null)}}]),t}(r.Component),j=t(6),E=t(1);var g=function(e){return n.a.createElement("div",{className:e.className,onClick:e.onClick},e.value)},C=t(15),w=t.n(C),x=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r,n,s,u;Object(i.a)(this,t);var l=(u=a.call(this,e)).generateSudoku(),c=l.sudoku,o=l.completeSudoku,d=l.isDisabled;return u.state={squares:Object(E.a)((r=[]).concat.apply(r,Object(E.a)(c))),origSudoku:Object(E.a)((n=[]).concat.apply(n,Object(E.a)(c))),completeSudoku:Object(E.a)((s=[]).concat.apply(s,Object(E.a)(o))),isDisabled:d,squareClassName:Array(81).fill("square sudoku-square"),lastSelected:null},u}return Object(l.a)(t,[{key:"renderSquare",value:function(e,a){var t=this,r=this.state.squareClassName[e];return e%9!==2&&e%9!==5||(r+=" border-right-yellow"),(e>=18&&e<=26||e>=45&&e<=53)&&(r+=" border-bottom-yellow"),this.state.isDisabled[e]&&(r+=" red disabled"),n.a.createElement(g,{className:r,value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"renderNumberPanel",value:function(e){var a=this;return n.a.createElement(g,{className:"square sudoku-square number-panel-number",value:e,onClick:function(){return a.handleNumberPanelClick(e)}})}},{key:"handleNumberPanelClick",value:function(e){var a=this.state.squares.slice();a[this.state.lastSelected]="eraser"===e?null:e;for(var t=this.state.squareClassName.slice(),r=0,n=Object(E.a)(Array(81).keys());r<n.length;r++){var s=n[r];t[s].includes("sudoku-square-blue")&&(t[s]=t[s].replace(" sudoku-square-blue","")),t[s].includes("sudoku-square-active")&&(t[s]=t[s].replace(" sudoku-square-active",""))}null!==this.state.lastSelected&&(t[this.state.lastSelected].includes("sudoku-square-active")||(t[this.state.lastSelected]+=" sudoku-square-active")),this.setState({squares:a,squareClassName:t})}},{key:"handleClick",value:function(e){for(var a=this.state.squareClassName.slice(),t=Math.floor(e/9),r=[],n=9*t;n<9*t+9;n++)r.push(n);for(var s=e%9,u=[],i=s;i<81;i+=9)u.push(i);for(var l=27*Math.floor(t/3)+3*Math.floor(s/3),c=[],o=l;o<l+27;o+=9)for(var d=o;d<o+3;d++)c.push(d);var h,m=Object(E.a)(new Set([].concat(r,u,c))),v=Object(E.a)(Array(81).keys()).filter((function(e){return!m.includes(e)})),b=Object(j.a)(v);try{for(b.s();!(h=b.n()).done;){var S=h.value;a[S].includes("sudoku-square-blue")&&(a[S]=a[S].replace(" sudoku-square-blue","")),a[S].includes("sudoku-square-active")&&(a[S]=a[S].replace(" sudoku-square-active",""))}}catch(k){b.e(k)}finally{b.f()}var q,f=Object(j.a)(m);try{for(f.s();!(q=f.n()).done;){var p=q.value;a[p].includes("sudoku-square-blue")||(a[p]+=" sudoku-square-blue")}}catch(k){f.e(k)}finally{f.f()}null!==this.state.lastSelected&&(a[this.state.lastSelected]=a[this.state.lastSelected].replace(" sudoku-square-active","")),a[e].includes("sudoku-square-active")||(a[e]+=" sudoku-square-active"),this.setState({squareClassName:a,lastSelected:e})}},{key:"resetGame",value:function(){this.setState({squares:this.state.origSudoku,lastSelected:null})}},{key:"newGame",value:function(){var e,a,t,r=this.generateSudoku(),n=r.sudoku,s=r.completeSudoku,u=r.isDisabled;this.setState({squares:Object(E.a)((e=[]).concat.apply(e,Object(E.a)(n))),origSudoku:Object(E.a)((a=[]).concat.apply(a,Object(E.a)(n))),completeSudoku:Object(E.a)((t=[]).concat.apply(t,Object(E.a)(s))),isDisabled:u,lastSelected:null})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sudoku-board"},JSON.stringify(this.state.squares)===JSON.stringify(this.state.completeSudoku)?n.a.createElement("div",{className:"status success"},"Winner"):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),n.a.createElement("div",{className:"board-row"},this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17)),n.a.createElement("div",{className:"board-row"},this.renderSquare(18),this.renderSquare(19),this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26)),n.a.createElement("div",{className:"board-row"},this.renderSquare(27),this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34),this.renderSquare(35)),n.a.createElement("div",{className:"board-row"},this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41),this.renderSquare(42),this.renderSquare(43),this.renderSquare(44)),n.a.createElement("div",{className:"board-row"},this.renderSquare(45),this.renderSquare(46),this.renderSquare(47),this.renderSquare(48),this.renderSquare(49),this.renderSquare(50),this.renderSquare(51),this.renderSquare(52),this.renderSquare(53)),n.a.createElement("div",{className:"board-row"},this.renderSquare(54),this.renderSquare(55),this.renderSquare(56),this.renderSquare(57),this.renderSquare(58),this.renderSquare(59),this.renderSquare(60),this.renderSquare(61),this.renderSquare(62)),n.a.createElement("div",{className:"board-row"},this.renderSquare(63),this.renderSquare(64),this.renderSquare(65),this.renderSquare(66),this.renderSquare(67),this.renderSquare(68),this.renderSquare(69),this.renderSquare(70),this.renderSquare(71)),n.a.createElement("div",{className:"board-row"},this.renderSquare(72),this.renderSquare(73),this.renderSquare(74),this.renderSquare(75),this.renderSquare(76),this.renderSquare(77),this.renderSquare(78),this.renderSquare(79),this.renderSquare(80))),n.a.createElement("div",{className:"board-row number-panel"},this.renderNumberPanel(1),this.renderNumberPanel(2),this.renderNumberPanel(3),this.renderNumberPanel(4),this.renderNumberPanel(5),this.renderNumberPanel(6),this.renderNumberPanel(7),this.renderNumberPanel(8),this.renderNumberPanel(9),n.a.createElement("div",{type:"button",className:"square sudoku-square eraser fas fa-eraser",onClick:function(){return e.handleNumberPanelClick("eraser")}})),n.a.createElement("div",{className:"reset"},n.a.createElement("button",{type:"button",className:"reset-button new-button",onClick:function(){return e.newGame()}},"New"),n.a.createElement("button",{type:"button",className:"reset-button",onClick:function(){return e.resetGame()}},"Reset")))}},{key:"find_empty_cell",value:function(e){for(var a=0,t=Object(E.a)(Array(9).keys());a<t.length;a++)for(var r=t[a],n=0,s=Object(E.a)(Array(9).keys());n<s.length;n++){var u=s[n];if(0===e[r][u])return{row:r,col:u}}return null}},{key:"exists_in_row",value:function(e,a,t){return e[a].includes(t)}},{key:"exists_in_col",value:function(e,a,t){var r,n=[],s=Object(j.a)(e);try{for(s.s();!(r=s.n()).done;){var u=r.value;n.push(u[a])}}catch(i){s.e(i)}finally{s.f()}return n.includes(t)}},{key:"exists_in_mini_grid",value:function(e,a,t,r){var n,s=Math.floor(t/3),u=Math.floor(a/3),i=Object(j.a)(Object(E.a)(Array(3*u+3).keys()).slice(3*u));try{for(i.s();!(n=i.n()).done;){var l,c=n.value,o=Object(j.a)(Object(E.a)(Array(3*s+3).keys()).slice(3*s));try{for(o.s();!(l=o.n()).done;){var d=l.value;if(e[c][d]===r&&d!==t)return!0}}catch(h){o.e(h)}finally{o.f()}}}catch(h){i.e(h)}finally{i.f()}return!1}},{key:"cell_is_safe",value:function(e,a,t,r){return!this.exists_in_row(e,a,r)&&!this.exists_in_col(e,t,r)&&!this.exists_in_mini_grid(e,a,t,r)}},{key:"solve",value:function(e){var a=this.find_empty_cell(e);if(!a)return!0;var t,r=a.row,n=a.col,s=Object(j.a)(Object(E.a)(Array(10).keys()).slice(1));try{for(s.s();!(t=s.n()).done;){var u=t.value;if(this.cell_is_safe(e,r,n,u)){if(e[r][n]=u,this.solve(e))return!0;e[r][n]=0}}}catch(i){s.e(i)}finally{s.f()}return!1}},{key:"generateSudoku",value:function(){var e,a=new Array(9).fill(0).map((function(){return new Array(9).fill(0)}));a[Math.floor(9*Math.random())][Math.floor(9*Math.random())]=Math.floor(8*Math.random())+1,this.solve(a);for(var t=w.a.cloneDeep(a),r=25;r>0;)a[Math.floor(9*Math.random(1))][Math.floor(9*Math.random(2))]=null,r-=1;return{sudoku:a,completeSudoku:t,isDisabled:Object(E.a)((e=[]).concat.apply(e,Object(E.a)(a))).reduce((function(e,a){return null===a?e.push(!1):e.push(!0),e}),[])}}}]),t}(r.Component),A=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,null))}}]),t}(r.Component),_=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(A,null))}}]),t}(r.Component),T=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,"Stopwatch")}}]),t}(r.Component),M=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"main",className:this.props.objState.mainSlideClassName},n.a.createElement("h1",{className:"application"},this.props.objState.active.header),n.a.createElement("div",{className:"card"},"tictactoe"===this.props.objState.active.card&&n.a.createElement(O,null),"sudoku"===this.props.objState.active.card&&n.a.createElement(_,null),"stopwatch"===this.props.objState.active.card&&n.a.createElement(T,null)))}}]),t}(r.Component),P=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).toggleSlideOut=function(){r.setState({slideOutClassName:r.state.show?"side-nav":"side-nav fixed",mainSlideClassName:r.state.show?"main full":"main",show:!r.state.show})},r.setActiveTab=function(e,a){r.setState({active:{header:e,card:a}})},r.state={show:!0,slideOutClassName:"side-nav fixed",mainSlideClassName:"main",active:{header:"Tic-Tac-Toe",card:"tictactoe"}},r}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{toggleSlideOut:this.toggleSlideOut,setActiveTab:this.setActiveTab,objState:this.state}),n.a.createElement(M,{toggleSlideOut:this.toggleSlideOut,setActiveTab:this.setActiveTab,objState:this.state}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.311ec333.chunk.js.map