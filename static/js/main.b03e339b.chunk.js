(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(9),i=c(3),n=c(1),s=c(0),r=Object(n.createContext)(),l=function(e){var t=e.children,c=Object(n.useState)("light"),a=Object(i.a)(c,2),l=a[0],o=a[1];Object(n.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=c.p+"static/media/terrorflix.aba4f6fd.gif",j=c.p+"static/media/todo.908a639d.gif",d=c.p+"static/media/calculadora.dd602aea.gif",h=c.p+"static/media/gastomen.e94b285d.gif",b="#",u="AR.",m="Alysson Rychard",p="Front End Developer",O="I am a person very passionate about the technology area. I usually play and study in my spare time and I love motorcycles..",x="https://www.instagram.com/arcoofc/",f={linkedin:"https://www.linkedin.com/in/arcorreiaa/",github:"https://github.com/arcorreiaa"},v=[{name:"TerrorFlix",description:"a project where I listed the horror movies that I think are the best I watch. this project I learned to use a little bit of JQUERY and each banner from the movie is linked to its trailer on youtube",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/arcorreiaa/netflix-clone-terrorflix",livePreview:"https://arcorreiaa.github.io/netflix-clone-terrorflix/",img:o},{name:"Lista de Tarefas",description:"a simple todolist to add, list and delete. in this project I had my first contact with TypeScript and the project is responsive",stack:["TypeScript","HTML","CSS"],sourceCode:"https://github.com/arcorreiaa/todo",livePreview:"https://arcorreiaa.github.io/todo/",img:j},{name:"Calculadora Simples",description:"A calculator with just the basics. in this project I had a difficulty with JavaScript, but in the end I managed to resolve the errors and ended",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/arcorreiaa/calculadora",livePreview:"https://arcorreiaa.github.io/calculadora/",img:d},{name:"Gasto Mensal",description:"a mini expense control system made with TypeScript",stack:["HTML","CSS","TypeScript"],sourceCode:"https://github.com/arcorreiaa/gasto-mensal",livePreview:"https://arcorreiaa.github.io/gasto-mensal/",img:h}],g=["HTML","CSS","JavaScript","TypeScript","React","Node","Git","Tailwindcss","Photoshop","Bootstrap"],k="arcorreiaa@gmail.com",N=c(14),_=c.n(N),w=c(12),y=c.n(w),S=c(16),C=c.n(S),I=c(15),T=c.n(I),P=(c(26),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0],c=t.themeName,a=t.toggleTheme,l=Object(n.useState)(!1),o=Object(i.a)(l,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[v.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,g.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,k?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(s.jsx)(y.a,{}):Object(s.jsx)(_.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(T.a,{}):Object(s.jsx)(C.a,{})})]})}),E=(c(32),function(){var e=b,t=u;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(P,{})]})}),L=c(10),J=c.n(L),H=c(17),M=c.n(H),R=(c(33),function(){var e=m,t=p,c=O,a=x,i=f;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:c&&c}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(J.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})]})]})}),A=c(7),B=c.n(A),F=c(18),G=c.n(F),Y=(c(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("img",{className:"img_style",src:t.img}),Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(J.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(G.a,{})})]})}),z=(c(36),function(){return v.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:v.map((function(e){return Object(s.jsx)(Y,{project:e},B()())}))})]}):null}),D=(c(37),function(){return g.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills I Study"}),Object(s.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),Q=c(19),U=c.n(Q),q=(c(38),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),K=(c(39),function(){return k?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(k),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(c(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/arcorreiaa/",className:"link footer__link",children:"Created By Alysson Rychard"})})}),W=(c(41),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(E,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(R,{}),Object(s.jsx)(z,{}),Object(s.jsx)(D,{}),Object(s.jsx)(K,{})]}),Object(s.jsx)(q,{}),Object(s.jsx)(V,{})]})});c(42);Object(a.render)(Object(s.jsx)(l,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b03e339b.chunk.js.map