(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),o=n(5),u=n(6),i={counter:0},l=n(13),s=n(14),m=n(17),E=n(15),p=n(18),d=(n(28),n(29),n(16)),b=function(e){var t=e.extraClass,n=e.size,c=e.icon,a=e.text,o=e.onClick,u=n?"c-button--".concat(n):"",i=t||"",l=c||"";return r.a.createElement("button",{className:"c-button ".concat(u," ").concat(i),onClick:o},l?r.a.createElement(d.a,{icon:l,className:"c-button__icon"}):"",a)},f=(n(33),Object(u.b)(function(e){return{counter:e.counter}},function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})},reset:function(){return e({type:"RESET"})}}})(function(e){return r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__number"},e.counter),r.a.createElement("div",{className:"counter__grid"},r.a.createElement(b,{text:"-",onClick:e.decrement}),r.a.createElement(b,{text:"+",onClick:e.increment}),r.a.createElement(b,{extraClass:"c-button--crimson counter__reset",text:"Reset",onClick:e.reset})))})),N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"l-container"},r.a.createElement("span",{className:"app__icon",role:"img","aria-label":"app icons"},"\ud83d\udc46\ud83c\udffb\ud83d\udc4c\ud83c\udffb\ud83d\udc47\ud83c\udffb"),r.a.createElement("h1",{className:"app__title"},"Redux counter"),r.a.createElement("p",{className:"app__description"},"Si\xe9ntete libre de jugar con el contador constru\xeddo con redux y react"),r.a.createElement(f,null))}}]),t}(c.Component),_=(n(34),Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return{counter:e.counter+1};case"DECREMENT":return{counter:e.counter-1};case"RESET":return{counter:0};default:return e}}));Object(a.render)(r.a.createElement(u.a,{store:_},r.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ef9e8067.chunk.js.map