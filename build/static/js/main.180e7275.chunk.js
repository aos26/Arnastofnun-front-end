(this.webpackJsonparnastofnun=this.webpackJsonparnastofnun||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/game-logo.6cc74d3a.png"},46:function(e,a,t){e.exports=t.p+"static/media/sam-logo.e0f7f8a8.png"},49:function(e,a,t){e.exports=t(81)},54:function(e,a,t){},55:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),i=(t(54),t(55),t(3)),s=t(18),o=t(4),m=t(24),u=t.n(m),d=t(42),g=t(22),f=t(25),p=t.n(f);function v(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}function E(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}var b=t(19),h=t(10),N=t(15),k=t(13);var O=t(86),j=t(87),y="/spagetti_backend";var x=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),f=g[0],p=g[1],v=Object(n.useState)(!1),E=Object(i.a)(v,2),b=E[0],h=E[1];return Object(n.useEffect)((function(){var e=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(e,(function(e){e.addEventListener("submit",(function(a){!1===e.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}))})),r.a.createElement("div",null,b?r.a.createElement("div",{className:"gameoverContainer"},r.a.createElement("h2",null,"Stig vistu\xf0!")):r.a.createElement("form",{className:"needs-validation",noValidate:!0,onSubmit:function(a){var t=document.getElementsByClassName("needs-validation"),n={name:l,school:f,className:m,score:e.score},r=JSON.stringify(n);console.log(n),Array.prototype.filter.call(t,(function(e){e.classList.add("was-validated")})),(l||m||f)&&fetch(y+"/HighScore/",{method:"POST",headers:{"Content-Type":"application/json"},body:r}).then((function(e){console.log(e),e.ok&&h(!0)})),a.preventDefault(),a.stopPropagation()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nameInput"},"Nafn"),r.a.createElement("input",{type:"text",className:"form-control",id:"nameInput",placeholder:"",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Vinsamlegast sl\xe1\xf0u inn nafn.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"classInput"},"Bekkur"),r.a.createElement("input",{type:"text",className:"form-control",id:"classInput",placeholder:"",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Vinsamlegast sl\xe1\xf0u inn bekk.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"my-1 mr-2",htmlFor:"schoolInput"},"Sk\xf3li"),r.a.createElement("input",{type:"text",className:"form-control",id:"schoolInput",placeholder:"",onChange:function(e){return p(e.target.value)},required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Vinsamlegast sl\xe1\xf0u inn sk\xf3la.")),r.a.createElement("button",{className:"btn btn-success btn-lg mt-1",type:"submit"},"Vista stig")))};function w(e){return r.a.createElement("div",{className:"container centerGameOver"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"gameoverContainer"},r.a.createElement("h1",null,"T\xedmi b\xfainn!"),r.a.createElement("h2",null,"\xde\xfa f\xe9kkst ",e.score," stig"),r.a.createElement("h3",{style:{color:"#d4af37",marginTop:"30px"}},r.a.createElement(N.a,{icon:k.c,size:"4x"}))),r.a.createElement("div",null,r.a.createElement(x,{score:e.score})),r.a.createElement("div",{className:"gameoverContainer"},r.a.createElement("a",{href:"/game",className:"btn buttonGreen btn-lg"},"Spila aftur?")),r.a.createElement("div",{className:"gameoverContainer shareContainer"},r.a.createElement(O.a,{url:"https://krakkar.arnastofnun.is/spagetti/",quote:"\xc9g f\xe9kk "+e.score+" stig!",hashtag:"#\xe1rnastofnun"},r.a.createElement(j.a,{round:!1,size:"48px"}))))))}function S(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),m=o[0],f=o[1],O=Object(n.useState)(0),j=Object(i.a)(O,2),x=j[0],S=j[1],I=Object(n.useState)(0),R=Object(i.a)(I,2),B=R[0],M=R[1],C=Object(n.useState)(0),H=Object(i.a)(C,2),A=H[0],P=H[1],D=Object(n.useState)([]),V=Object(i.a)(D,2),J=V[0],T=V[1],L=Object(n.useState)(!1),W=Object(i.a)(L,2),q=W[0],F=W[1],z=Object(n.useState)(180),G=Object(i.a)(z,2),U=G[0],$=G[1],_=Object(n.useState)([[]]),K=Object(i.a)(_,2),Q=K[0],X=K[1],Y=Object(n.useState)(!1),Z=Object(i.a)(Y,2),ee=Z[0],ae=Z[1],te=Object(n.useState)(!1),ne=Object(i.a)(te,2),re=ne[0],le=ne[1];function ce(){return(ce=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.get(y+"/words/5").then((function(e){var a=e.data.map((function(e){return e}));a.forEach((function(e){e.isRight=null})),c([a,[],[],[],[],[]]);var t=JSON.parse(JSON.stringify(a));f(v(t)),T([!1,!1,!1,!1,!1])})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){F(!0),p.a.get(y+"/words/5").then((function(e){var a=e.data.map((function(e){return e}));a.forEach((function(e){e.isRight=null})),c([a,[],[],[],[],[]]);var t=JSON.parse(JSON.stringify(a));f(v(t)),T([!1,!1,!1,!1,!1]),F(!1),window.innerHeight<window.innerWidth&&ae(!0)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){if(!q){if(U<0)return le(!0),void X([]);var e=setInterval((function(){$(U-1),document.getElementById("timeBackground").style.opacity=U/180;var e=function(e){var a={};if(e>0){var t=e%3600,n=t%60;a={m:Math.floor(t/60),s:Math.ceil(n)}}return a}(U),a=[];Object.keys(e).forEach((function(t){a.push(r.a.createElement("span",{key:t},e[t]?"s"===!t?e[t]:e[t]<10?"0"+e[t]:e[t]:"00"," ","m"===t?" : ":""))})),X(a)}),1e3);return function(){return clearInterval(e)}}}),[U]),window.addEventListener("resize",(function(){window.innerHeight<window.innerWidth?ae(!0):ae(!1)}),!1),r.a.createElement("div",{className:"main-content"},re?r.a.createElement(w,{score:A,right:x,wrong:B}):!ee&&h.isMobile?r.a.createElement("div",null,r.a.createElement("div",{className:"container mx-auto mt-5"},r.a.createElement("h3",null,"Vinsamlegast sn\xfa\xf0u s\xedmanum \xe1 hli\xf0."))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",{className:"scoreBoard",id:"scoreBoardId"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,r.a.createElement("strong",null,"R\xe9tt sv\xf6r")," ",x)),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,r.a.createElement("strong",null,"R\xf6ng sv\xf6r")," ",B)),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null," ",r.a.createElement("strong",null,"T\xedmi")," ",Q.length?Q:"b\xfainn!")))),r.a.createElement("div",{className:"titleBoard"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Or\xf0")),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Sk\xfdringar")))),r.a.createElement("div",{className:"row gameBoard"},q?r.a.createElement("div",{className:"loadingDiv"},"S\xe6ki or\xf0in ",r.a.createElement(N.a,{icon:k.b,spin:!0})):null,r.a.createElement(b.a,{onDragEnd:function(e){var a=e.source,t=e.destination;if(t){var n=+a.droppableId,r=+t.droppableId,s=Array.from(l[n]).splice(a.index,1),o=Object(i.a)(s,1)[0],u=t.droppableId-1,d=m[u];if(n===r){var f=function(e,a,t){var n=Array.from(e),r=n.splice(a,1),l=Object(i.a)(r,1)[0];return n.splice(t,0,l),n}(l[n],a.index,t.index),p=Object(g.a)(l);p[n]=f,c(p)}else{if(o.id===d.id){o.isRight=!0,S(x+1),P(A+100);var v=function(e,a,t,n){var r=Array.from(e),l=Array.from(a),c=r.splice(t.index,1),s=Object(i.a)(c,1)[0];l.splice(n.index,0,s);var o={};return o[t.droppableId]=r,o[n.droppableId]=l,o}(l[n],l[r],a,t),E=Object(g.a)(l);E[n]=v[n],E[r]=v[r],c(E)}else{if(M(B+1),A>0)P(A-50);var b=Object(g.a)(J);b[r-1]=!0,d.isRight=!1,T(b)}var h=B+x+1;h%5===0&&h>=5&&function(){ce.apply(this,arguments)}()}}}},r.a.createElement("div",{className:"col questions"},l.map((function(e,a){return 0!==a?r.a.createElement(b.c,{key:a,droppableId:"".concat(a),isDropDisabled:1===e.length||!!J[a-1]},(function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef,style:(l=n.isDraggingOver,c=h.isMobile,{background:l?"#379571":null,padding:c?5:15,width:"100%",minWidth:c?250:300,maxWidth:l&&c||c?250:300,minHeight:c?100:120,height:c?100:120,maxHeight:c?100:120,marginBottom:c?10:20,borderRadius:3})},t.droppableProps,{className:J[t.droppableProps["data-rbd-droppable-id"]-1]?"wrong":"board"}),r.a.createElement("div",{style:{marginTop:-5}},t.droppableProps["data-rbd-droppable-id"],". ",m[a-1]?m[a-1].ord:""),e.map((function(e,a){return r.a.createElement("div",{id:e.id,key:e.id,className:"card"+(e.isRight?" right":""),style:{minHeight:e.isRight?"65px":"",maxHeight:e.isRight?"65px":""}},r.a.createElement("p",null,E(e.texti)))})),t.placeholder);var l,c})):null}))),r.a.createElement("div",{className:"col skyringar"},l.map((function(e,a){return 0===a?r.a.createElement(b.c,{key:a,droppableId:"".concat(a)},(function(a,t){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps),e.map((function(e,a){return r.a.createElement(b.b,{key:e.id,draggableId:e.id.toString(),index:a},(function(a,t){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps),r.a.createElement("div",{id:"board-0",className:"board"},r.a.createElement("div",{id:e.id,key:e.id,className:"card"},r.a.createElement("p",null,E(e.texti)))))}))})),a.placeholder)})):null}))))))))}var I=t(45),R=t.n(I),B=t(46),M=t.n(B);function C(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"w-100 text-center",style:{marginLeft:"10px"}},r.a.createElement("img",{className:"game-logo",src:R.a}),r.a.createElement("br",null),r.a.createElement("a",{href:"http://arnastofnun.is"},r.a.createElement("img",{className:"sam-logo",src:M.a}))))}function H(){return r.a.createElement("div",{className:"d-flex h-100 justify-content-center align-items-center"},r.a.createElement("div",null,r.a.createElement("div",{className:"menuItem"},r.a.createElement(s.b,{to:"/game",class:"btn btn-info btn-lg"},"Spila")),r.a.createElement("div",{className:"menuItem"},r.a.createElement(s.b,{to:"/about",class:"btn btn-info btn-lg"},"Um leikinn"))))}function A(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"app-background red-blue"}),r.a.createElement("div",{className:"app-background",id:"timeBackground",style:{opacity:1}}))}var P=t(47),D=t(85);function V(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col",style:{marginTop:h.isMobile?30:100,marginLeft:h.isMobile?0:100,marginRight:h.isMobile?0:100}},r.a.createElement("div",null,r.a.createElement("h2",null,"Markmi\xf0 leiksins"),r.a.createElement("p",null,"Svara\xf0u eins m\xf6rgum or\xf0sk\xfdringum og \xfe\xfa getur \xfeanga\xf0 til t\xedminn rennur \xfat me\xf0 \xfev\xed a\xf0 draga or\xf0sk\xfdringu \xed d\xe1lk sem samsvarar r\xe9ttu or\xf0i.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Hvernig \xe1 a\xf0 spila"),r.a.createElement("p",null,"Vinstra megin \xe1 s\xed\xf0unni birtist d\xe1lkur me\xf0 or\xf0um og h\xe6gra megin birtist d\xe1lkur me\xf0 or\xf0sk\xfdringum. \xc1 milli \xfeeirra birtist t\xf3mur d\xe1lkur. Drag\xf0u or\xf0sk\xfdringu yfir \xed mi\xf0ju d\xe1lkinn \xed reitinn me\xf0 s\xf6mu t\xf6lu og or\xf0i\xf0 sem sk\xfdringin \xe1 vi\xf0 til \xfeess a\xf0 vinna inn stig. Ef dregi\xf0 er a\xf0 vitlausu or\xf0i er ekki h\xe6gt a\xf0 giska \xe1 sk\xfdringu a\xf0 \xfev\xed or\xf0i aftur. Fimm or\xf0 og or\xf0sk\xfdringar birtast \xed senn. Haldi\xf0 er utan um r\xe9tt og r\xf6ng sv\xf6r og m\xe1 sj\xe1 fj\xf6lda \xfeeirra fyrir ofan d\xe1lkana. \xdeegar b\xfai\xf0 er a\xf0 giska \xe1 \xf6ll fimm or\xf0in birtast fimm n\xfd or\xf0 \xfeanga\xf0 til t\xedminn rennur \xfat.")),r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/",class:"btn buttonGreen btn-lg"},"Aftur \xe1 fors\xed\xf0u"))))))}var J=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(!0),t=Object(i.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){c("/"==e.current.history.location.pathname),e.current.history.listen((function(e){c("/"==e.pathname)}))})),r.a.createElement(D.a,{backend:P.a},r.a.createElement(s.a,{ref:e,basename:"/spagetti/"},r.a.createElement("div",{className:"App h-100"+(l?" front":"")},r.a.createElement(A,null),r.a.createElement("div",{className:"mx-auto h-100"},r.a.createElement("div",{className:"row d-flex h-100"},r.a.createElement("div",{className:"col-12 h-sm-100"+(l?" col-md-6":(h.isMobile," col-md-2"))},r.a.createElement(C,null)),r.a.createElement("div",{className:"col-12"+(l?" col-md-6 h-sm-100":(h.isMobile," col-md-10"))},r.a.createElement(o.a,{path:"/game",exact:!0,component:function(){return r.a.createElement(S,null)}}),r.a.createElement(o.a,{path:"/",exact:!0,component:H}),r.a.createElement(o.a,{path:"/about",exact:!0,component:V})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.180e7275.chunk.js.map