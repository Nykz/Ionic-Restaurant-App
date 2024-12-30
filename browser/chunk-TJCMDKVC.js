import{b as K}from"./chunk-FL3AVRJI.js";import{$ as g,A as v,Ab as N,B as c,F as w,G as x,Ga as P,H as R,I as k,J as a,K as r,L as E,La as W,Mb as j,Nb as H,O as S,P as p,Q as u,Va as B,Vb as q,W as d,Wb as z,X as T,Xb as J,Y as O,aa as h,ba as _,db as V,eb as F,jb as L,m as C,n as b,o as y,pb as A,q as M,rb as D,t as n,x as I,xb as G}from"./chunk-36II4WRS.js";function Q(o,i){if(o&1&&(a(0,"ion-item")(1,"ion-radio",10),d(2),r()()),o&2){let l=i.$implicit;n(),c("value",l),n(),T(l)}}function U(o,i){if(o&1){let l=S();a(0,"ion-item",9)(1,"ion-input",11),_("ngModelChange",function(t){b(l);let e=u();return h(e.other,t)||(e.other=t),y(t)}),r()()}if(o&2){let l=u();n(),g("ngModel",l.other)}}var re=(()=>{let i=class i{constructor(){this.title="Cancel Reason",this.close=new M,this.reasons=[],this.global=C(K)}ngOnInit(){this.reasons=["Restaurant ran out of stock for a specific menu item.","Restaurant is unable to prepare certain dishes due to a shortage of key ingredients.","A sudden surge in orders may overwhelm the restaurant, leading to cancellations for operational efficiency.","Miscommunication regarding order details may result in cancellations.","Events such as power outages, natural disasters, or emergencies prevent the restaurant from fulfilling orders.","Other"]}closeModal(s){this.close.emit(s)}submit(){var t;if(this.reason=="Other"&&(!this.other||((t=this.other)==null?void 0:t.trim())=="")){this.global.errorToast("Please provide proper reason.");return}let s=this.reason=="Other"?this.other:this.reason;this.closeModal(s)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=I({type:i,selectors:[["app-cancel-reason"]],inputs:{title:"title"},outputs:{close:"close"},decls:16,vars:5,consts:[["color","light"],["slot","start"],["fill","clear",3,"click"],["name","arrow-back-outline","color","dark","slot","icon-only"],["slot","end"],["color","primary",3,"click","disabled"],[1,"ion-padding",3,"fullscreen"],[1,"ion-margin-bottom"],["name","reason",3,"ngModelChange","ngModel"],[1,"ion-margin-bottom","textbox"],[1,"ion-texp-wrap",3,"value"],["type","text","label","Reason","labelPlacement","floating","name","other",3,"ngModelChange","ngModel"]],template:function(t,e){t&1&&(a(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-button",2),p("click",function(){return e.closeModal()}),E(4,"ion-icon",3),r()(),a(5,"ion-buttons",4)(6,"ion-button",5),p("click",function(){return e.submit()}),d(7," SAVE "),r()(),a(8,"ion-title"),d(9),r()()(),a(10,"ion-content",6)(11,"ion-list",7)(12,"ion-radio-group",8),_("ngModelChange",function(m){return h(e.reason,m)||(e.reason=m),m}),R(13,Q,3,2,"ion-item",null,x),r()(),v(15,U,2,1,"ion-item",9),r()),t&2&&(n(6),c("disabled",!e.reason),n(3),O(" ",e.title," "),n(),c("fullscreen",!0),n(2),g("ngModel",e.reason),n(),k(e.reasons),n(2),w(e.reason=="Other"?15:-1))},dependencies:[A,H,F,j,L,V,q,G,J,N,D,z,B,P,W],styles:["ion-list[_ngcontent-%COMP%], .textbox[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:10px}ion-radio[_ngcontent-%COMP%]::part(label){white-space:normal!important}"]});let o=i;return o})();export{re as a};
