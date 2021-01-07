(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Ik5D:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),i=t("7vrA"),s=t("wx14"),n=t("zLVn"),o=t("TSYQ"),c=t.n(o),m=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,o=e.type,m=void 0===o?"valid":o,d=e.tooltip,u=void 0!==d&&d,b=Object(n.a)(e,["as","className","type","tooltip"]);return r.a.createElement(l,Object(s.a)({},b,{ref:a,className:c()(i,m+"-"+(u?"tooltip":"feedback"))}))})));m.displayName="Feedback";var d=m,u=r.a.createContext({controlId:void 0}),b=t("vUet"),f=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.type,f=void 0===d?"checkbox":d,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,N=void 0!==x&&x,O=e.isStatic,E=e.as,j=void 0===E?"input":E,y=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(l.useContext)(u),h=P.controlId,I=P.custom?[o,"custom-control-input"]:[i,"form-check-input"],w=I[0],C=I[1];return i=Object(b.a)(w,C),r.a.createElement(j,Object(s.a)({},y,{ref:a,type:f,id:t||h,className:c()(m,i,p&&"is-valid",N&&"is-invalid",O&&"position-static")}))}));f.displayName="FormCheckInput";var v=f,p=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(u),v=f.controlId,p=f.custom?[i,"custom-control-label"]:[t,"form-check-label"],x=p[0],N=p[1];return t=Object(b.a)(x,N),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:c()(o,t)}))}));p.displayName="FormCheckLabel";var x=p,N=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,f=void 0!==m&&m,p=e.disabled,N=void 0!==p&&p,O=e.isValid,E=void 0!==O&&O,j=e.isInvalid,y=void 0!==j&&j,P=e.feedbackTooltip,h=void 0!==P&&P,I=e.feedback,w=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,T=e.label,L=e.children,V=e.custom,A=e.as,S=void 0===A?"input":A,z=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||V,q=G?[o,"custom-control"]:[i,"form-check"],J=q[0],K=q[1];i=Object(b.a)(J,K);var M=Object(l.useContext)(u).controlId,Y=Object(l.useMemo)((function(){return{controlId:t||M,custom:G}}),[M,G,t]),U=G||null!=T&&!1!==T&&!L,Q=r.a.createElement(v,Object(s.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:E,isInvalid:y,isStatic:!U,disabled:N,as:S}));return r.a.createElement(u.Provider,{value:Y},r.a.createElement("div",{style:C,className:c()(w,i,G&&"custom-"+R,f&&i+"-inline")},L||r.a.createElement(r.a.Fragment,null,Q,U&&r.a.createElement(x,{title:k},T),(E||y)&&r.a.createElement(d,{type:E?"valid":"invalid",tooltip:h},I))))}));N.displayName="FormCheck",N.Input=v,N.Label=x;var O=N,E=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,x=void 0===p?"input":p,N=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(l.useContext)(u),E=O.controlId,j=O.custom?[o,"custom-file-input"]:[i,"form-control-file"],y=j[0],P=j[1];return i=Object(b.a)(y,P),r.a.createElement(x,Object(s.a)({},N,{ref:a,id:t||E,type:"file",lang:v,className:c()(m,i,d&&"is-valid",f&&"is-invalid")}))}));E.displayName="FormFileInput";var j=E,y=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(u),v=f.controlId,p=f.custom?[i,"custom-file-label"]:[t,"form-file-label"],x=p[0],N=p[1];return t=Object(b.a)(x,N),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:c()(o,t),"data-browse":d["data-browse"]}))}));y.displayName="FormFileLabel";var P=y,h=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,m=e.disabled,f=void 0!==m&&m,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,N=void 0!==x&&x,O=e.feedbackTooltip,E=void 0!==O&&O,y=e.feedback,h=e.className,I=e.style,w=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,T=void 0===R?"div":R,L=e.inputAs,V=void 0===L?"input":L,A=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=F?[o,"custom"]:[i,"form-file"],z=S[0],G=S[1];i=Object(b.a)(z,G);var q=Object(l.useContext)(u).controlId,J=Object(l.useMemo)((function(){return{controlId:t||q,custom:F}}),[q,F,t]),K=null!=w&&!1!==w&&!C,M=r.a.createElement(j,Object(s.a)({},A,{ref:a,isValid:p,isInvalid:N,disabled:f,as:V,lang:k}));return r.a.createElement(u.Provider,{value:J},r.a.createElement(T,{style:I,className:c()(h,i,F&&"custom-file")},C||r.a.createElement(r.a.Fragment,null,F?r.a.createElement(r.a.Fragment,null,M,K&&r.a.createElement(P,{"data-browse":g},w)):r.a.createElement(r.a.Fragment,null,K&&r.a.createElement(P,null,w),M),(p||N)&&r.a.createElement(d,{type:p?"valid":"invalid",tooltip:E},y))))}));h.displayName="FormFile",h.Input=j,h.Label=P;var I=h,w=(t("2W6z"),r.a.forwardRef((function(e,a){var t,i,o=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,f=e.size,v=e.htmlSize,p=e.id,x=e.className,N=e.isValid,O=void 0!==N&&N,E=e.isInvalid,j=void 0!==E&&E,y=e.plaintext,P=e.readOnly,h=e.custom,I=e.as,w=void 0===I?"input":I,C=Object(n.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(l.useContext)(u).controlId,k=h?[m,"custom"]:[o,"form-control"],g=k[0],R=k[1];if(o=Object(b.a)(g,R),y)(i={})[o+"-plaintext"]=!0,t=i;else if("file"===d){var T;(T={})[o+"-file"]=!0,t=T}else if("range"===d){var L;(L={})[o+"-range"]=!0,t=L}else if("select"===w&&h){var V;(V={})[o+"-select"]=!0,V[o+"-select-"+f]=f,t=V}else{var A;(A={})[o]=!0,A[o+"-"+f]=f,t=A}return r.a.createElement(w,Object(s.a)({},C,{type:d,size:v,ref:a,readOnly:P,id:p||F,className:c()(x,t,O&&"is-valid",j&&"is-invalid")}))})));w.displayName="FormControl";var C=Object.assign(w,{Feedback:d}),F=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,m=e.controlId,d=e.as,f=void 0===d?"div":d,v=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(b.a)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:m}}),[m]);return r.a.createElement(u.Provider,{value:p},r.a.createElement(f,Object(s.a)({},v,{ref:a,className:c()(i,t)}),o))}));F.displayName="FormGroup";var k=F,g=t("JI6e"),R=r.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,m=e.column,d=e.srOnly,f=e.className,v=e.htmlFor,p=Object(n.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(l.useContext)(u).controlId;o=Object(b.a)(o,"form-label");var N="col-form-label";"string"==typeof m&&(N=N+" "+N+"-"+m);var O=c()(f,o,d&&"sr-only",m&&N);return v=v||x,m?r.a.createElement(g.a,Object(s.a)({as:"label",className:O,htmlFor:v},p)):r.a.createElement(i,Object(s.a)({ref:a,className:O,htmlFor:v},p))}));R.displayName="FormLabel",R.defaultProps={column:!1,srOnly:!1};var T=R,L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,o=void 0===i?"small":i,m=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(b.a)(t,"form-text"),r.a.createElement(o,Object(s.a)({},d,{ref:a,className:c()(l,t,m&&"text-muted")}))}));L.displayName="FormText";var V=L,A=r.a.forwardRef((function(e,a){return r.a.createElement(O,Object(s.a)({},e,{ref:a,type:"switch"}))}));A.displayName="Switch",A.Input=O.Input,A.Label=O.Label;var S=A,z=t("YdCC"),G=Object(z.a)("form-row"),q=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(b.a)(t,"form"),r.a.createElement(d,Object(s.a)({},u,{ref:a,className:c()(i,o&&"was-validated",l&&t+"-inline")}))}));q.displayName="Form",q.defaultProps={inline:!1},q.Row=G,q.Group=k,q.Control=C,q.Check=O,q.File=I,q.Switch=S,q.Label=T,q.Text=V;var J=q,K=t("cWnB"),M=t("3Z9Z");a.a=function(){return r.a.createElement(i.a,{style:{marginTop:"2rem"}},r.a.createElement(M.a,null,r.a.createElement(g.a,{xs:12,md:{span:6,offset:3}},r.a.createElement("h4",null,"AYO MULAI PERCAKAPAN"),r.a.createElement(J,{action:"https://formsubmit.co/b9c481a8f1d3f397b40f33c1e2ad394c",method:"POST"},r.a.createElement(J.Group,{controlId:"Name"},r.a.createElement(J.Label,null,"Nama"),r.a.createElement(J.Control,{type:"text",placeholder:"Nama Anda",name:"Name",required:!0})),r.a.createElement(J.Group,{controlId:"Email"},r.a.createElement(J.Label,null,"Alamat Email"),r.a.createElement(J.Control,{type:"email",placeholder:"Email Anda",name:"Email",required:!0}),r.a.createElement(J.Text,{className:"text-muted"},"Kami tidak akan pernah membagikan email Anda dengan orang lain.")),r.a.createElement(J.Group,{controlId:"Telepon"},r.a.createElement(J.Label,null,"Telepon"),r.a.createElement(J.Control,{type:"tel",placeholder:"Nomor Telepon Anda",name:"Telepon",pattern:"[0-9]{6,12}",required:!0})),r.a.createElement(J.Group,{controlId:"Textarea"},r.a.createElement(J.Label,null,"Pesan"),r.a.createElement(J.Control,{as:"textarea",rows:3,name:"Textarea"})),r.a.createElement("input",{type:"hidden",name:"_next",value:"https://suyono-sutiman.github.io/LandingpageRealine/"}),r.a.createElement("input",{type:"hidden",name:"_captcha",value:"false"}),r.a.createElement(K.a,{variant:"warning",type:"submit"},"Kirim")))))}},xXt2:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),i=t("q1tI"),s=t.n(i),n=t("TSYQ"),o=t.n(n),c=t("vUet"),m=s.a.forwardRef((function(e,a){var t,i=e.as,n=void 0===i?"div":i,m=e.className,d=e.fluid,u=e.bsPrefix,b=Object(r.a)(e,["as","className","fluid","bsPrefix"]),f=((t={})[u=Object(c.a)(u,"jumbotron")]=!0,t[u+"-fluid"]=d,t);return s.a.createElement(n,Object(l.a)({ref:a},b,{className:o()(m,f)}))}));m.defaultProps={fluid:!1},m.displayName="Jumbotron",a.a=m}}]);
//# sourceMappingURL=4a3730057d94831447d431d46c47fc89e39ec766-823eb28a085f5e798ab7.js.map