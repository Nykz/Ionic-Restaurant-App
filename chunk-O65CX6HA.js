import{a as O}from"./chunk-KD2NF24Q.js";import{a as ne}from"./chunk-UX7P3H4G.js";import{a as Y,b as Z,c as ee,m as te,r as ie}from"./chunk-3XMFGL7I.js";import{b as oe}from"./chunk-BRGWQJYK.js";import"./chunk-E27WRCEQ.js";import{b as L}from"./chunk-FL3AVRJI.js";import{$a as z,A as p,B as s,Fa as B,Ga as V,Gb as Q,Ha as G,Hb as U,Ia as j,J as a,K as r,Ka as A,Kb as W,L as m,Ma as H,Mb as w,Nb as P,O as h,Oa as R,P as f,Pa as $,Q as d,Vb as F,W as u,Wa as q,Wb as X,X as M,Y as N,cb as J,db as I,eb as S,jb as x,ma as D,n as _,na as v,o as b,pb as E,rb as T,t as c,u as g,wb as K,x as C,xb as k}from"./chunk-36II4WRS.js";import"./chunk-HTSKCE6I.js";import"./chunk-7KGURMOZ.js";import"./chunk-G2NBWZGV.js";import"./chunk-5ZMMP3RU.js";import"./chunk-NOFUNQAN.js";import"./chunk-TIZDWYJD.js";import"./chunk-GF5ML23A.js";import"./chunk-G3CV3VGG.js";import"./chunk-JX3TYZ34.js";import"./chunk-RUY5SX76.js";import"./chunk-NIOQNOHM.js";import"./chunk-4U6PRYVA.js";import"./chunk-BE36LD5W.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{f as y}from"./chunk-RW4GY4BD.js";function me(e,o){e&1&&(a(0,"ion-text",13)(1,"p",14),u(2,"* Please enter your name"),r()())}function de(e,o){if(e&1){let l=h();a(0,"ion-button",15),f("click",function(){_(l);let i=d();return b(i.onSubmit())}),u(1," Save "),r()}if(e&2){let l=d();s("disabled",!l.form.valid)}}function ge(e,o){if(e&1&&(a(0,"ion-button",16),m(1,"ion-spinner",17),r()),e&2){let l=d();s("disabled",!l.form.valid)}}var re=(()=>{let o=class o{constructor(t,i){this.global=t,this.categoryService=i,this.isLoading=!1}ngOnInit(){this.initForm()}initForm(){var t;console.log("profile: ",this.category),this.form=new j({name:new A((t=this.category)!=null&&t.name?this.category.name:"",{validators:[B.required]})})}onSubmit(){return y(this,null,function*(){var t;if(this.form.valid)try{this.isLoading=!0;let i="Category added successfully";(t=this.category)!=null&&t.name?(yield this.categoryService.updateCategory(this.category,this.form.value),i="Category updated successfully"):yield this.categoryService.addCategory(this.form.value),this.global.successToast(i),this.global.modalDismiss(),this.isLoading=!1}catch(i){console.log(i),this.isLoading=!1,this.global.errorToast()}})}};o.\u0275fac=function(i){return new(i||o)(g(L),g(O))},o.\u0275cmp=C({type:o,selectors:[["app-edit-category"]],inputs:{category:"category"},decls:17,vars:5,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],["fill","clear",3,"click"],["slot","icon-only","name","arrow-back-outline"],[3,"formGroup"],["lines","none",1,"ion-margin"],[1,"ion-margin-bottom"],["type","text","formControlName","name","placeholder","Name"],["color","danger",4,"ngIf"],[1,"ion-text-center"],["type","submit","color","primary",3,"disabled","click",4,"ngIf"],["color","primary",3,"disabled",4,"ngIf"],["color","danger"],[1,"errorMsg"],["type","submit","color","primary",3,"click","disabled"],["color","primary",3,"disabled"],["name","circles"]],template:function(i,n){i&1&&(a(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),f("click",function(){return n.global.modalDismiss()}),m(4,"ion-icon",4),r()(),a(5,"ion-title"),u(6),r()()(),a(7,"ion-content")(8,"form",5)(9,"ion-list",6)(10,"div",7)(11,"ion-item"),m(12,"ion-input",8),r(),p(13,me,3,0,"ion-text",9),r(),a(14,"div",10),p(15,de,2,1,"ion-button",11)(16,ge,2,1,"ion-button",12),r()()()()),i&2&&(c(6),N("",n.category!=null&&n.category.name?"Edit ":"Add "," Category"),c(2),s("formGroup",n.form),c(5),s("ngIf",!n.form.get("name").valid&&n.form.get("name").touched),c(2),s("ngIf",!n.isLoading),c(),s("ngIf",n.isLoading))},dependencies:[X,E,P,S,I,F,w,x,k,T,W,U,v,q,H,V,G,R,$],styles:["ion-item[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:5px}"]});let e=o;return e})();function pe(e,o){if(e&1&&m(0,"app-empty-screen",7),e&2){let l=d();s("model",l.model)}}function ue(e,o){e&1&&(a(0,"ion-item",9)(1,"ion-avatar",0),m(2,"ion-skeleton-text",10),r(),a(3,"ion-label")(4,"h4"),m(5,"ion-skeleton-text",11),r()()())}function fe(e,o){if(e&1&&(a(0,"ion-list"),p(1,ue,6,0,"ion-item",8),r()),e&2){let l=d();c(),s("ngForOf",l.dummy)}}function ye(e,o){if(e&1){let l=h();a(0,"ion-item",13)(1,"ion-avatar",0),m(2,"ion-icon",14),r(),a(3,"ion-label"),u(4),r(),a(5,"ion-button",15),f("click",function(){let i=_(l).$implicit,n=d(2);return b(n.editCategory(i))}),m(6,"ion-icon",16),r()()}if(e&2){let l=o.$implicit;c(4),M(l==null?null:l.name)}}function _e(e,o){if(e&1&&(a(0,"ion-list"),p(1,ye,7,1,"ion-item",12),r()),e&2){let l=d();c(),s("ngForOf",l.categories)}}var Le=(()=>{let o=class o{constructor(t,i,n){this.categoryService=t,this.global=i,this.profileService=n,this.dummy=Array(10),this.isLoading=!1,this.categories=[],this.model={icon:"grid-outline",title:"No Categories added yet"},Y({create:te,add:Z,gridOutline:ie,arrowBackOutline:ee})}ngOnInit(){this.categorySub=this.categoryService.categories.subscribe({next:t=>{console.log("category data: ",t),this.categories=t},error:t=>{console.log(t)}}),this.getData()}getData(){return y(this,null,function*(){try{this.isLoading=!0;let t=yield this.profileService.getProfile();yield this.categoryService.getRestaurantCategories(t==null?void 0:t.id),this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),this.global.errorToast()}})}editCategory(t){return y(this,null,function*(){let i={component:re,componentProps:{category:t||{}},cssClass:"category-modal",swipeToClose:!0},n=yield this.global.createModal(i)})}ngOnDestroy(){this.categorySub&&this.categorySub.unsubscribe(),this.categoryService.reset()}};o.\u0275fac=function(i){return new(i||o)(g(O),g(L),g(oe))},o.\u0275cmp=C({type:o,selectors:[["app-category"]],decls:13,vars:3,consts:[["slot","start"],["defaultHref","/tabs/account"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","add"],[3,"model",4,"ngIf"],[4,"ngIf"],[3,"model"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["animated",""],[2,"width","50%"],["lines","none","class","borderBottomSmall",4,"ngFor","ngForOf"],["lines","none",1,"borderBottomSmall"],["name","grid-outline"],["slot","end","fill","clear",3,"click"],["name","create","slot","icon-only"]],template:function(i,n){i&1&&(a(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),m(3,"ion-back-button",1),r(),a(4,"ion-buttons",2)(5,"ion-button",3),f("click",function(){return n.editCategory()}),m(6,"ion-icon",4),r()(),a(7,"ion-title"),u(8,"Categories"),r()()(),a(9,"ion-content"),p(10,pe,1,1,"app-empty-screen",5)(11,fe,2,1,"ion-list",6)(12,_e,2,1,"ion-list",6),r()),i&2&&(c(10),s("ngIf",!n.isLoading&&(n.categories==null?null:n.categories.length)==0),c(),s("ngIf",n.isLoading),c(),s("ngIf",!n.isLoading&&(n.categories==null?null:n.categories.length)>0))},dependencies:[E,P,S,I,F,w,x,k,T,Q,K,J,z,v,D,ne],styles:["ion-item[_ngcontent-%COMP%]{padding-bottom:5px}ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1rem}"]});let e=o;return e})();export{Le as CategoryPage};