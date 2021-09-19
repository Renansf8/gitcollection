(this.webpackJsonpgitcollection=this.webpackJsonpgitcollection||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,s,l=t(0),p=t.n(l),b=t(34),d=t.n(b),u=t(17),x=t(3),j=t(21),h=t.n(j),f=t(43),g=t(35),m=t(15),O=t(42),v=t(36),w=t.n(v).a.create({baseURL:"https://api.github.com"}),k=t(8),y=t(9),S=t(41),z=y.c.h1(r||(r=Object(k.a)(["\n  color: #3a3a3a;\n  font-size: 48px;\n  line-height: 56px;\n  margin-bottom: 64px;\n  margin-top: 40px;\n  max-width: 450px;\n"]))),C=y.c.form(o||(o=Object(k.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 2px solid #fff;\n    border-radius: 8px 0 0 8px;\n    color: #3a3a3a;\n    border-right: 0;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  button {\n    width: 160px;\n    background-color: #0000cc;\n    border-radius: 0 8px 8px 0;\n    border: 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.hasError&&Object(y.b)(a||(a=Object(k.a)(["\n        border-color: #c53030;\n      "])))}),Object(S.a)(.2,"#0000cc")),I=y.c.div(c||(c=Object(k.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(6px);\n    }\n\n    // coloca esse estilos apenas a partir da segunda tag a\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #0000cc;\n    }\n  }\n"]))),_=y.c.span(i||(i=Object(k.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]))),E=t(2),J=function(){var n=Object(l.useState)((function(){var n=localStorage.getItem("@GitCollection:repositories");return n?JSON.parse(n):[]})),e=Object(m.a)(n,2),t=e[0],r=e[1],o=Object(l.useState)(""),a=Object(m.a)(o,2),c=a[0],i=a[1],s=Object(l.useState)(""),p=Object(m.a)(s,2),b=p[0],d=p[1],x=Object(l.useState)(""),j=Object(m.a)(x,2),v=j[0],k=j[1],y=Object(l.useRef)(null);Object(l.useEffect)((function(){localStorage.setItem("@GitCollection:repositories",JSON.stringify(t))}),[t]);var S=function(){var n=Object(g.a)(h.a.mark((function n(){var e,o,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=3;break}return d("Informe o username/repository"),n.abrupt("return");case 3:return n.prev=3,n.next=6,w.get("repos/".concat(c));case 6:o=n.sent,a=o.data,r([].concat(Object(f.a)(t),[a])),null===(e=y.current)||void 0===e||e.reset(),i(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),k("Informe um reposit\xf3rio v\xe1lido");case 16:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(){return n.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z,{children:"Cat\xe1logo de reposit\xf3rios do github"}),Object(E.jsxs)(C,{ref:y,hasError:!!b,children:[Object(E.jsx)("input",{placeholder:"username/repository_name",onChange:function(n){i(n.target.value),d(""),k("")}}),Object(E.jsx)("button",{type:"button",onClick:S,children:"Buscar"})]}),b&&Object(E.jsx)(_,{children:b}),v&&Object(E.jsx)(_,{children:v}),Object(E.jsx)(I,{children:t.map((function(n){return Object(E.jsxs)(u.b,{to:"/repositories/".concat(n.full_name),children:[Object(E.jsx)("img",{src:n.owner.avatar_url,alt:n.owner.login}),Object(E.jsxs)("div",{children:[Object(E.jsx)("strong",{children:n.full_name}),Object(E.jsx)("p",{children:n.description})]}),Object(E.jsx)(O.a,{size:20})]},n.full_name)}))})]})},R=function(){return Object(E.jsx)(u.a,{children:Object(E.jsx)(x.c,{children:Object(E.jsx)(x.a,{exact:!0,path:"/gitcollection",component:J})})})},B=t.p+"static/media/background.a0394ab9.svg",F=Object(y.a)(s||(s=Object(k.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: #f0f0f5 url(",') no-repeat top;\n    background-size: 800px;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  border-style, input, textarea, select, button, h1, h2, h3, h4, h5, h6 {\n    font: 400 1rem "Raleway", sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 2.5rem 1.25rem;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n'])),B),G=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(R,{}),Object(E.jsx)(F,{})]})};d.a.render(Object(E.jsx)(p.a.StrictMode,{children:Object(E.jsx)(G,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.7df51013.chunk.js.map