(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/warning.6dfaa2f9.svg"},29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),u=(a(34),a(28)),l=a(2),s=a(3),i=a.n(s),m=a(7),p=a(1),b=a(25),f=a.n(b).a.create({baseURL:"http://".concat("172.16.1.145",":").concat("3333","/api")}),d=(a(53),function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",null,e.title),e.children))}),v=a(9),O=(a(54),function(e){var t=e.name,a=e.label,n=Object(v.a)(e,["name","label"]);return r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({type:"text",id:t},n)))}),j=(a(55),function(e){var t=e.name,a=e.label,n=Object(v.a)(e,["name","label"]);return r.a.createElement("div",{className:"textarea-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("textarea",Object.assign({id:t},n)))}),E=a(26),g=a.n(E);a(56);var h=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(p.a)(o,2),l=u[0],s=u[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),E=v[0],h=v[1],x=Object(n.useState)(""),y=Object(p.a)(x,2),S=y[0],k=y[1],w=Object(n.useState)(""),_=Object(p.a)(w,2),C=_[0],q=_[1],B=Object(n.useState)(""),D=Object(p.a)(B,2),I=D[0],N=D[1],R=Object(n.useState)(""),M=Object(p.a)(R,2),T=M[0],P=M[1],A=Object(n.useState)(""),F=Object(p.a)(A,2),J=F[0],L=F[1],Q=Object(n.useState)(""),U=Object(p.a)(Q,2),z=U[0],G=U[1],H=Object(n.useState)(""),K=Object(p.a)(H,2),V=K[0],W=K[1],X=Object(n.useState)(""),Y=Object(p.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),ce=Object(p.a)(re,2),oe=ce[0],ue=ce[1],le=Object(n.useState)(""),se=Object(p.a)(le,2),ie=se[0],me=se[1],pe=Object(n.useState)(""),be=Object(p.a)(pe,2),fe=be[0],de=be[1],ve=Object(n.useState)(""),Oe=Object(p.a)(ve,2),je=Oe[0],Ee=Oe[1],ge=Object(n.useState)(""),he=Object(p.a)(ge,2),xe=he[0],ye=he[1],Se=Object(n.useState)(""),ke=Object(p.a)(Se,2),we=ke[0],_e=ke[1],Ce=Object(n.useState)(""),qe=Object(p.a)(Ce,2),Be=qe[0],De=qe[1],Ie=Object(n.useState)(""),Ne=Object(p.a)(Ie,2),Re=Ne[0],Me=Ne[1],Te=Object(n.useState)(""),Pe=Object(p.a)(Te,2),Ae=Pe[0],Fe=Pe[1],Je=Object(n.useState)(""),Le=Object(p.a)(Je,2),Qe=Le[0],Ue=Le[1],ze=Object(n.useState)(""),Ge=Object(p.a)(ze,2),He=Ge[0],Ke=Ge[1],Ve=function(e){return"212"===e};function We(){return(We=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s("turno1"===a||"turno2"===a||"Turno1"===a||"Turno2"===a?"":"Turno inv\xe1lido");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xe(){return(Xe=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return e.next=3,f.get("/consulta_centro/".concat(E));case 3:t=e.sent,t.data.map((function(e){return e.COD_RED}))[0]>0?(k(""),q(""),N(""),P(""),Ve(E)?(document.getElementById("cod_barras").type="number",Ue(1)):(document.getElementById("cod_barras").type="text",Ue(""))):k("Centro de custo invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(){return(Ye=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ve(E)){e.next=9;break}if(!C){e.next=9;break}return e.next=4,f.get("/consulta_codbarras/".concat(C));case 4:t=e.sent,a=t.data[0].map((function(e){return e.ID})),n=t.data[1].map((function(e){return e.message})),a[0]>0?N():N("C\xf3digo de barras n\xe3o encontrado."),n[0]?P(n[0]):P();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(){return(Ze=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=6;break}return e.next=3,f.get("/consulta_processo/".concat(J));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),G(a[0]),W("")):W("Processo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(){return($e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z){e.next=6;break}return e.next=3,f.get("/consulta_etapa/".concat(Z));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),ne(a[0]),ue("")):ue("Etapa informada \xe9 invalida.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(){return(et=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ie){e.next=6;break}return e.next=3,f.get("/consulta_reparo/".concat(ie));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),de(a[0]),Ee("")):Ee("Reparo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(){return(tt=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!xe){e.next=6;break}return e.next=3,f.get("/consulta_causa/".concat(xe));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),_e(a[0]),De("")):De("Causa informada \xe9 invalida.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function at(){return(at=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Re){e.next=6;break}return e.next=3,f.get("/consulta_motivo/".concat(Re));case 3:t=e.sent,(a=t.data.map((function(e){return e.ID})))[0]>0?(console.log(a[0]),Fe("")):Fe("Motivo informado \xe9 invalido.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nt(){return(nt=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(l||S||I||V||oe||je||Be||Ae)){e.next=5;break}alert("Oops, verifique os erros apontados na tela!"),e.next=19;break;case 5:return e.next=7,f.post("/gravar_retrabalho",{cod_turno:a,cod_centro:E,cod_barras:C,processo:z,etapa:ae,reparo:fe,causa:we,motivo:Re,quantidade:Qe,observacao:He});case 7:n=e.sent,console.log(n),q(""),L(""),$(""),me(""),ye(""),Me(""),P(""),Ve(E)||Ue(""),Ke(""),alert("Sucesso, Retrabalho registrado!");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"page-apontretrab-form",className:"container"},r.a.createElement(d,{title:"Apontamento de Retrabalhos"}),r.a.createElement("main",null,r.a.createElement("form",{onSubmit:function(e){return nt.apply(this,arguments)},autocomplete:"off"},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"group"},r.a.createElement("div",null,r.a.createElement(O,{type:"text",required:!0,name:"cod_turno",label:"Turno",value:a,onChange:function(e){c(e.target.value)},onBlur:function(){return We.apply(this,arguments)}}),l&&r.a.createElement("spam",null,l)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"cod_centro",label:"Centro de custo",value:E,onChange:function(e){h(e.target.value)},onBlur:function(){return Xe.apply(this,arguments)}}),S&&r.a.createElement("spam",null,S))),r.a.createElement(O,{id:"cod_barras",type:"number",required:!0,name:"cod_barras",label:"C\xf3digo de Barras",value:C,onChange:function(e){q(e.target.value)},onBlur:function(){return Ye.apply(this,arguments)}}),I&&r.a.createElement("spam",null,I),T&&r.a.createElement("spam",null,T),r.a.createElement("div",{className:"group"},r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"processo",label:"Processo - Maquina",value:J,onChange:function(e){L(e.target.value)},onBlur:function(){return Ze.apply(this,arguments)}}),V&&r.a.createElement("spam",null,V)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"etapa",label:"Etapa",value:Z,onChange:function(e){$(e.target.value)},onBlur:function(){return $e.apply(this,arguments)}}),oe&&r.a.createElement("spam",null,oe)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"reparo",label:"Reparo",value:ie,onChange:function(e){me(e.target.value)},onBlur:function(){return et.apply(this,arguments)}}),je&&r.a.createElement("spam",null,je)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"causa",label:"Causa",value:xe,onChange:function(e){ye(e.target.value)},onBlur:function(){return tt.apply(this,arguments)}}),Be&&r.a.createElement("spam",null,Be)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"motivo",label:"Motivo",value:Re,onChange:function(e){Me(e.target.value)},onBlur:function(){return at.apply(this,arguments)}}),Ae&&r.a.createElement("spam",null,Ae)),r.a.createElement("div",null,r.a.createElement(O,{type:"number",required:!0,name:"quantidade",label:"Quantidade",value:Qe,onChange:function(e){Ue(e.target.value)}}))),r.a.createElement(j,{type:"number",name:"observacao",label:"Observa\xe7\xe3o",value:He,onChange:function(e){Ke(e.target.value)}})),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("img",{src:g.a,alt:"Aviso importante"}),"Preencha todos os campos do formul\xe1rio!"),r.a.createElement("button",{type:"submit"},"Registrar o retrabalho agora")))))};function x(){return r.a.createElement(u.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:h,exact:!0})))}var y=function(){return r.a.createElement(x,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6f03e09d.chunk.js.map