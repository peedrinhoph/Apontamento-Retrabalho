(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/warning.6dfaa2f9.svg"},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),u=a.n(c),o=(a(33),a(27)),l=a(2),s=a(3),i=a.n(s),p=a(7),m=a(1),b=a(25),f=a.n(b).a.create({baseURL:"http://".concat("172.16.1.145",":").concat("3333","/api")}),d=(a(52),function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",null,e.title),e.children))}),v=a(9),O=(a(53),function(e){var t=e.name,a=e.label,n=Object(v.a)(e,["name","label"]);return r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({type:"text",id:t},n)))}),j=(a(54),function(e){var t=e.name,a=e.label,n=Object(v.a)(e,["name","label"]);return r.a.createElement("div",{className:"textarea-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("textarea",Object.assign({id:t},n)))});a(55),a(56);var E=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),o=Object(m.a)(u,2),l=o[0],s=o[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),E=v[0],h=v[1],g=Object(n.useState)(""),y=Object(m.a)(g,2),x=y[0],S=y[1],w=Object(n.useState)(""),k=Object(m.a)(w,2),C=k[0],_=k[1],q=Object(n.useState)(""),B=Object(m.a)(q,2),R=B[0],D=B[1],I=Object(n.useState)(""),N=Object(m.a)(I,2),T=N[0],A=N[1],M=Object(n.useState)(""),P=Object(m.a)(M,2),U=P[0],F=P[1],J=Object(n.useState)(""),K=Object(m.a)(J,2),L=K[0],G=K[1],H=Object(n.useState)(""),Q=Object(m.a)(H,2),z=Q[0],V=Q[1],W=Object(n.useState)(""),X=Object(m.a)(W,2),Y=X[0],Z=X[1],$=Object(n.useState)(""),ee=Object(m.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(m.a)(ne,2),ce=re[0],ue=re[1],oe=Object(n.useState)(""),le=Object(m.a)(oe,2),se=le[0],ie=le[1],pe=Object(n.useState)(""),me=Object(m.a)(pe,2),be=me[0],fe=me[1],de=Object(n.useState)(""),ve=Object(m.a)(de,2),Oe=ve[0],je=ve[1],Ee=Object(n.useState)(""),he=Object(m.a)(Ee,2),ge=he[0],ye=he[1],xe=Object(n.useState)(""),Se=Object(m.a)(xe,2),we=Se[0],ke=Se[1],Ce=Object(n.useState)(""),_e=Object(m.a)(Ce,2),qe=_e[0],Be=_e[1],Re=Object(n.useState)(""),De=Object(m.a)(Re,2),Ie=De[0],Ne=De[1],Te=Object(n.useState)(""),Ae=Object(m.a)(Te,2),Me=Ae[0],Pe=Ae[1],Ue=Object(n.useState)(""),Fe=Object(m.a)(Ue,2),Je=Fe[0],Ke=Fe[1],Le=Object(n.useState)(""),Ge=Object(m.a)(Le,2),He=Ge[0],Qe=Ge[1],ze=function(e){return"212"===e};function Ve(){return(Ve=Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s("turno1"===a||"turno2"===a||"TURNO1"===a||"TURNO2"===a?"":"Turno inv\xe1lido");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function We(){return(We=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return e.next=3,f.get("/consulta_centro/".concat(E));case 3:t=e.sent,t.data.map((function(e){return e.COD_RED}))[0]>0?(S(""),_(""),D(""),A(""),ze(E)?(document.getElementById("cod_barras").type="number",Ke(1)):(document.getElementById("cod_barras").type="text",Ke(""))):S("Centro de custo invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xe(){return(Xe=Object(p.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ze(E)){e.next=9;break}if(!C){e.next=9;break}return e.next=4,f.get("/consulta_codbarras/".concat(C));case 4:t=e.sent,a=t.data[0].map((function(e){return e.ID})),n=t.data[1].map((function(e){return e.message})),a[0]>0?D():D("C\xf3digo de barras n\xe3o encontrado."),n[0]?A(n[0]):A();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(){return(Ye=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U){e.next=6;break}return e.next=3,f.get("/consulta_processo/".concat(U));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),G(a[0]),V("")):V("Processo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(){return(Ze=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y){e.next=6;break}return e.next=3,f.get("/consulta_etapa/".concat(Y));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),ae(a[0]),ue("")):ue("Etapa informada \xe9 invalida.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(){return($e=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!se){e.next=6;break}return e.next=3,f.get("/consulta_reparo/".concat(se));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),fe(a[0]),je("")):je("Reparo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(){return(et=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ge){e.next=6;break}return e.next=3,f.get("/consulta_causa/".concat(ge));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),ke(a[0]),Be("")):Be("Causa informada \xe9 invalida.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(){return(tt=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ie){e.next=6;break}return e.next=3,f.get("/consulta_motivo/".concat(Ie));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),Pe("")):Pe("Motivo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function at(){return(at=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(l||x||R||z||ce||Oe||qe||Me)){e.next=5;break}alert("Oops, verifique os erros apontados na tela!"),e.next=19;break;case 5:return e.next=7,f.post("/gravar_retrabalho",{cod_turno:a,cod_centro:E,cod_barras:C,processo:L,etapa:te,reparo:be,causa:we,motivo:Ie,quantidade:Je,observacao:He});case 7:n=e.sent,console.log(n),_(""),F(""),Z(""),ie(""),ye(""),Ne(""),A(""),ze(E)||Ke(""),Qe(""),alert("Sucesso, Retrabalho registrado!");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"page-apontretrab-form",className:"container"},r.a.createElement(d,{title:"Apontamento de Retrabalhos"}),r.a.createElement("main",null,r.a.createElement("form",{onSubmit:function(e){return at.apply(this,arguments)},autocomplete:"off",acceptCharset:"UTF-8"},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"group"},r.a.createElement("div",null,r.a.createElement(O,{type:"text",required:!0,name:"cod_turno",label:"Turno",value:a,onChange:function(e){c(e.target.value)},onBlur:function(){return Ve.apply(this,arguments)}}),l&&r.a.createElement("spam",null,l)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"cod_centro",label:"Centro de custo",value:E,onChange:function(e){h(e.target.value)},onBlur:function(){return We.apply(this,arguments)}}),x&&r.a.createElement("spam",null,x))),r.a.createElement(O,{id:"cod_barras",type:"number",required:!0,name:"cod_barras",label:"C\xf3digo de Barras",value:C,onChange:function(e){_(e.target.value)},onBlur:function(){return Xe.apply(this,arguments)}}),R&&r.a.createElement("spam",null,R),T&&r.a.createElement("spam",null,T),r.a.createElement("div",{className:"group"},r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"processo",label:"Processo - Maquina",value:U,onChange:function(e){F(e.target.value)},onBlur:function(){return Ye.apply(this,arguments)}}),z&&r.a.createElement("spam",null,z)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"etapa",label:"Etapa",value:Y,onChange:function(e){Z(e.target.value)},onBlur:function(){return Ze.apply(this,arguments)}}),ce&&r.a.createElement("spam",null,ce)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"reparo",label:"Reparo",value:se,onChange:function(e){ie(e.target.value)},onBlur:function(){return $e.apply(this,arguments)}}),Oe&&r.a.createElement("spam",null,Oe)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"causa",label:"Causa",value:ge,onChange:function(e){ye(e.target.value)},onBlur:function(){return et.apply(this,arguments)}}),qe&&r.a.createElement("spam",null,qe)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"motivo",label:"Motivo",value:Ie,onChange:function(e){Ne(e.target.value)},onBlur:function(){return tt.apply(this,arguments)},onKeyPress:function(e){13===e.which&&e.preventDefault()}}),Me&&r.a.createElement("spam",null,Me)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"quantidade",label:"Quantidade",value:Je,onChange:function(e){Ke(e.target.value)},onKeyPress:function(e){13===e.which&&e.preventDefault()}}))),r.a.createElement(j,{type:"number",name:"observacao",label:"Observa\xe7\xe3o",value:He,onChange:function(e){Qe(e.target.value)}})),r.a.createElement("footer",null,r.a.createElement("button",{type:"submit"},"REGISTRAR O RETRABALHO")))))};function h(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:E,exact:!0})))}var g=function(){return r.a.createElement(h,null)};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ece1d650.chunk.js.map