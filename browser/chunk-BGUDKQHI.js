import{a as Ve,b as Le,c as Fe}from"./chunk-ZWV2KMBP.js";import"./chunk-EKPTY2PE.js";import{A as Ne,F as Oe,a as Ie,e as Ce,f as we,l as Ee,t as Te,u as be,v as Pe,x as ke,y as De}from"./chunk-3XMFGL7I.js";import{b as Me}from"./chunk-BRGWQJYK.js";import"./chunk-I5CLGLS5.js";import"./chunk-VR272TB5.js";import{b as Se}from"./chunk-E27WRCEQ.js";import{a as ye,b as xe}from"./chunk-FL3AVRJI.js";import{$a as J,$b as he,A as p,B as l,Fa as _,Fb as me,Ga as G,Ha as H,Hb as se,Ia as $,J as n,K as t,Ka as f,Kb as ce,L as u,Ma as z,Mb as pe,Nb as de,O as C,Oa as j,P as x,Pa as Q,Q as h,S as L,Sa as U,T as F,Ta as Z,U as q,Ub as ue,Va as X,Vb as ge,W as c,Wa as Y,Wb as fe,X as A,Y as E,_b as _e,ab as K,ac as ve,db as W,eb as ee,jb as te,kb as ie,m as w,ma as R,n as v,na as B,o as y,pb as ne,qb as oe,rb as re,t as s,wb as le,x as V,xb as ae}from"./chunk-36II4WRS.js";import"./chunk-HTSKCE6I.js";import"./chunk-7KGURMOZ.js";import"./chunk-G2NBWZGV.js";import"./chunk-5ZMMP3RU.js";import"./chunk-NOFUNQAN.js";import"./chunk-TIZDWYJD.js";import"./chunk-GF5ML23A.js";import"./chunk-G3CV3VGG.js";import"./chunk-JX3TYZ34.js";import"./chunk-RUY5SX76.js";import"./chunk-NIOQNOHM.js";import"./chunk-4U6PRYVA.js";import"./chunk-BE36LD5W.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{a as O,b as M,f as I}from"./chunk-RW4GY4BD.js";var qe=["filePicker"];function Ae(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Please enter your name"),t()())}function Re(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Please enter a valid email address"),t()())}function Be(e,a){e&1&&(n(0,"ion-text",45),c(1," * Please enter your Phone Number "),t())}function Ge(e,a){e&1&&(n(0,"ion-text",45),c(1," * Please enter a valid Phone Number "),t())}function He(e,a){if(e&1&&(n(0,"ion-text",42),p(1,Be,2,0,"ion-text",44)(2,Ge,2,0,"ion-text",44),t()),e&2){let m,o=h();s(),l("ngIf",o.form.get("phone").hasError("required")),s(),l("ngIf",!((m=o.form.get("phone"))!=null&&m.hasError("required"))&&(o.form.get("phone").hasError("minlength")||o.form.get("phone").hasError("maxlength")))}}function $e(e,a){e&1&&(n(0,"ion-text",45),c(1," * Please enter your password "),t())}function ze(e,a){e&1&&(n(0,"ion-text",45),c(1," * Please enter a password of atleast 8 characters long "),t())}function je(e,a){if(e&1&&(n(0,"ion-text",42),p(1,$e,2,0,"ion-text",44)(2,ze,2,0,"ion-text",44),t()),e&2){let m=h();s(),l("ngIf",m.form.get("password").hasError("required")),s(),l("ngIf",!m.form.get("password").hasError("required")&&m.form.get("password").hasError("minlength"))}}function Qe(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Please enter your name"),t()())}function Ue(e,a){e&1&&u(0,"ion-datetime",46),e&2&&l("showDefaultButtons",!0)}function Ze(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Select Opening Time"),t()())}function Xe(e,a){e&1&&u(0,"ion-datetime",47),e&2&&l("showDefaultButtons",!0)}function Ye(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Select Closing Time"),t()())}function Je(e,a){if(e&1&&(n(0,"ion-select-option",48),c(1),t()),e&2){let m=a.$implicit;l("value",m.id),s(),A(m==null?null:m.name)}}function Ke(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Select City"),t()())}function We(e,a){if(e&1&&(n(0,"p",49),c(1),t()),e&2){let m=h();s(),E(" ",m.location==null?null:m.location.address," ")}}function et(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Please enter price for two persons"),t()())}function tt(e,a){e&1&&(n(0,"ion-text",42)(1,"p",43),c(2,"* Please enter Expected Delivery Time"),t()())}function it(e,a){if(e&1){let m=C();n(0,"div",50),x("click",function(){v(m);let r=h();return y(r.changeImage())}),u(1,"ion-icon",51),n(2,"p"),c(3,"Upload Cover Image Here"),t()()}}function nt(e,a){if(e&1){let m=C();n(0,"div",52),x("click",function(){v(m);let r=h();return y(r.changeImage())}),u(1,"ion-img",53),t()}if(e&2){let m=h();s(),l("src",m.coverImage)}}function ot(e,a){if(e&1&&(n(0,"p"),c(1),t()),e&2){let m=h();s(),E(" Categories: ",m.getArrayAsString(m.categories)," ")}}function rt(e,a){if(e&1&&(n(0,"p"),c(1),t()),e&2){let m=h();s(),E(" Cuisines: ",m.getArrayAsString(m.cuisines)," ")}}function lt(e,a){if(e&1){let m=C();n(0,"ion-button",54),x("click",function(){v(m);let r=h();return y(r.onSubmit())}),c(1," Register "),t()}if(e&2){let m=h();l("disabled",!m.form.valid)}}function at(e,a){if(e&1&&(n(0,"ion-button",55),u(1,"ion-spinner",56),t()),e&2){let m=h();l("disabled",!m.form.valid)}}var wt=(()=>{let a=class a{constructor(){this.isLoading=!1,this.cities=[],this.location={},this.isCuisine=!1,this.cuisines=[],this.categories=[],this.profileService=w(Me),this.authService=w(Se),this.global=w(xe),Ie({callOutline:Ce,keyOutline:Te,mailOutline:ke,personOutline:De,cloudUploadOutline:Ee,searchOutline:Ne,cashOutline:we,timeOutline:Oe,locateOutline:be,locationOutline:Pe})}ngOnInit(){return I(this,null,function*(){this.initForm(),yield this.getCities()})}initForm(){this.form=new $({name:new f("",{validators:[_.required]}),email:new f("",{validators:[_.required]}),phone:new f("",{validators:[_.required,_.minLength(10),_.maxLength(10)]}),password:new f("",{validators:[_.minLength(8)]}),restaurant_name:new f("",{validators:[_.required]}),description:new f("",{validators:[]}),openTime:new f(null,{validators:[_.required]}),closeTime:new f(null,{validators:[_.required]}),city_id:new f("",{validators:[_.required]}),price:new f("",{validators:[_.required]}),delivery_time:new f("",{validators:[_.required]}),isCuisine:new f(!1,{validators:[]}),category:new f("",{validators:[]})}),this.isLoading=!1}toIsoDateTime(o){let r=o.getFullYear(),i=(o.getMonth()+1).toString().padStart(2,"0"),d=o.getDate().toString().padStart(2,"0"),g=o.getHours().toString().padStart(2,"0"),S=o.getMinutes().toString().padStart(2,"0");return`${r}-${i}-${d}T${g}:${S}:00.000`}formatDate(o){let r,i=Intl.DateTimeFormat().resolvedOptions().timeZone;o?r=new Date(o):r=new Date;let d=Le(r,i);return Ve(d,"yyyy-MM-dd HH:mm:ssXXX",{timeZone:i})}getCities(){return I(this,null,function*(){try{this.cities=yield this.profileService.getCities()}catch(o){console.log(o),this.global.errorToast()}})}searchLocation(){return I(this,null,function*(){try{let o={component:Fe},r=yield this.global.createModal(o);r&&(console.log(r),this.location=r)}catch(o){console.log(o)}})}addCategory(){var r,i,d;if(this.category=(r=this.form.get("category"))==null?void 0:r.value,this.isCuisine=(i=this.form.get("isCuisine"))==null?void 0:i.value,console.log(this.category),((d=this.category)==null?void 0:d.trim())=="")return;if(console.log(this.isCuisine),this.categories.find(g=>g==this.category)){this.global.errorToast("Category already added");return}this.categories.push(this.category),this.isCuisine&&this.cuisines.push(this.category)}clearCategory(){this.categories=[],this.cuisines=[]}getArrayAsString(o){return o.join(", ")}preview(o){console.log(o);let r=o.target.files;if(r.length==0||r[0].type.match(/image\/*/)==null)return;let d=r[0];this.cover_file=d;let g=new FileReader;g.onload=S=>{console.log("result: ",g.result),this.coverImage=g.result},g.readAsDataURL(d)}changeImage(){this.filePickerRef.nativeElement.click()}onSubmit(){return I(this,null,function*(){if(this.form.valid){if(!this.coverImage||this.coverImage==""){this.global.errorToast("Please provide a cover image");return}try{this.isLoading=!0,console.log(this.form.value);let o=M(O({},this.form.value),{openTime:this.formatDate(this.form.value.openTime),closeTime:this.formatDate(this.form.value.closeTime),address:this.location.address,imageFile:this.cover_file,cuisines:this.cuisines,categories:this.categories});console.log("restaurant: ",o);let r=yield this.authService.register(o);console.log(r),this.global.successToast("Restaurant Registered Successfully"),this.isLoading=!1,this.form.reset(),this.global.navigateByUrl(ye.TABS)}catch(o){console.log(o),this.isLoading=!1,this.global.errorToast()}}})}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=V({type:a,selectors:[["app-signup"]],viewQuery:function(r,i){if(r&1&&L(qe,5),r&2){let d;F(d=q())&&(i.filePickerRef=d.first)}},decls:91,vars:21,consts:[["filePicker",""],["slot","start"],["defaultHref","/login"],[3,"formGroup"],["lines","none",1,"ion-margin-horizontal"],[1,"ion-margin-vertical"],["name","person-outline","slot","start","color","medium"],["type","text","formControlName","name","placeholder","Owner Name"],["color","danger",4,"ngIf"],[1,"ion-margin-bottom"],["name","mail-outline","slot","start","color","medium"],["type","email","formControlName","email","placeholder","Email"],["name","call-outline","slot","start","color","medium"],["type","tel","formControlName","phone","placeholder","Phone","minlength","10","maxlength","10"],["name","key-outline","slot","start","color","medium"],["type","password","formControlName","password","placeholder","New Password","minlength","8"],["type","text","formControlName","restaurant_name","placeholder","Restaurant Name"],["type","text","formControlName","description","placeholder","Description"],["slot","end","datetime","opentime"],[3,"keepContentsMounted"],["slot","end","datetime","closetime"],["label","Select City","formControlName","city_id","interface","popover"],[3,"value",4,"ngFor","ngForOf"],["class","ion-text-wrap",4,"ngIf"],["fill","clear","color","primary","size","small",3,"click"],["slot","icon-only","name","search-outline"],["name","cash-outline","slot","start","color","medium"],["type","number","formControlName","price","placeholder","Price for Two"],["name","time-outline","slot","start","color","medium"],["type","number","formControlName","delivery_time","placeholder","Expected Delivery Time"],["class","itemImage",3,"click",4,"ngIf"],["type","file","accept","image/jpeg;image/png",3,"change"],["class","itemImage imageDiv",3,"click",4,"ngIf"],[1,"ion-margin-top"],["name","category","formControlName","category","placeholder","Enter New Category","type","text"],["mode","md","color","success","formControlName","isCuisine"],["type","button","size","small","color","primary",3,"click"],["type","button","size","small","color","danger",3,"click"],[4,"ngIf"],[1,"ion-text-center","ion-margin"],["expand","block","type","submit","color","primary",3,"disabled","click",4,"ngIf"],["color","primary",3,"disabled",4,"ngIf"],["color","danger"],[1,"errorMsg"],["class","error",4,"ngIf"],[1,"error"],["id","opentime","presentation","time","hourCycle","h12","formControlName","openTime",3,"showDefaultButtons"],["id","closetime","presentation","time","hourCycle","h12","formControlName","closeTime",3,"showDefaultButtons"],[3,"value"],[1,"ion-text-wrap"],[1,"itemImage",3,"click"],["name","cloud-upload-outline","color","primary"],[1,"itemImage","imageDiv",3,"click"],[3,"src"],["expand","block","type","submit","color","primary",3,"click","disabled"],["color","primary",3,"disabled"],["name","circles"]],template:function(r,i){if(r&1){let d=C();n(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),c(3,"Register"),t(),n(4,"ion-buttons",1),u(5,"ion-back-button",2),t()()(),n(6,"ion-content")(7,"form",3)(8,"ion-list",4)(9,"div",5)(10,"ion-item"),u(11,"ion-icon",6)(12,"ion-input",7),t(),p(13,Ae,3,0,"ion-text",8),t(),n(14,"div",9)(15,"ion-item"),u(16,"ion-icon",10)(17,"ion-input",11),t(),p(18,Re,3,0,"ion-text",8),t(),n(19,"div",9)(20,"ion-item"),u(21,"ion-icon",12)(22,"ion-input",13),t(),p(23,He,3,2,"ion-text",8),t(),n(24,"div",9)(25,"ion-item"),u(26,"ion-icon",14)(27,"ion-input",15),t(),p(28,je,3,2,"ion-text",8),t(),n(29,"div",5)(30,"ion-item"),u(31,"ion-icon",6)(32,"ion-input",16),t(),p(33,Qe,3,0,"ion-text",8),t(),n(34,"div",9)(35,"ion-item"),u(36,"ion-textarea",17),t()(),n(37,"div",9)(38,"ion-item")(39,"ion-label"),c(40,"Open Time"),t(),u(41,"ion-datetime-button",18),n(42,"ion-modal",19),p(43,Ue,1,1,"ng-template"),t()(),p(44,Ze,3,0,"ion-text",8),t(),n(45,"div",9)(46,"ion-item")(47,"ion-label"),c(48,"Close Time"),t(),u(49,"ion-datetime-button",20),n(50,"ion-modal",19),p(51,Xe,1,1,"ng-template"),t()(),p(52,Ye,3,0,"ion-text",8),t(),n(53,"div",9)(54,"ion-item")(55,"ion-select",21),p(56,Je,2,2,"ion-select-option",22),t()(),p(57,Ke,3,0,"ion-text",8),t(),n(58,"div",9)(59,"ion-item")(60,"ion-label"),c(61," Address "),p(62,We,2,1,"p",23),t(),n(63,"ion-button",24),x("click",function(){return v(d),y(i.searchLocation())}),u(64,"ion-icon",25),t()()(),n(65,"div",9)(66,"ion-item"),u(67,"ion-icon",26)(68,"ion-input",27),t(),p(69,et,3,0,"ion-text",8),t(),n(70,"div",9)(71,"ion-item"),u(72,"ion-icon",28)(73,"ion-input",29),t(),p(74,tt,3,0,"ion-text",8),t(),p(75,it,4,0,"div",30),n(76,"input",31,0),x("change",function(S){return v(d),y(i.preview(S))}),t(),p(78,nt,2,1,"div",32),n(79,"ion-item",33),u(80,"ion-input",34)(81,"ion-toggle",35),t(),n(82,"ion-button",36),x("click",function(){return v(d),y(i.addCategory())}),c(83,"ADD"),t(),n(84,"ion-button",37),x("click",function(){return v(d),y(i.clearCategory())}),c(85,"CLEAR"),t(),p(86,ot,2,1,"p",38)(87,rt,2,1,"p",38),t(),n(88,"div",39),p(89,lt,2,1,"ion-button",40)(90,at,2,1,"ion-button",41),t()()()}if(r&2){let d,g,S,T,b,P,k,D,N;s(7),l("formGroup",i.form),s(6),l("ngIf",!((d=i.form.get("name"))!=null&&d.valid)&&i.form.get("name").touched),s(5),l("ngIf",!((g=i.form.get("email"))!=null&&g.valid)&&i.form.get("email").touched),s(5),l("ngIf",!((S=i.form.get("phone"))!=null&&S.valid)&&i.form.get("phone").touched),s(5),l("ngIf",!i.form.get("password").valid&&i.form.get("password").touched),s(5),l("ngIf",!((T=i.form.get("name"))!=null&&T.valid)&&i.form.get("name").touched),s(9),l("keepContentsMounted",!0),s(2),l("ngIf",!((b=i.form.get("openTime"))!=null&&b.valid)&&i.form.get("openTime").touched),s(6),l("keepContentsMounted",!0),s(2),l("ngIf",!((P=i.form.get("closeTime"))!=null&&P.valid)&&i.form.get("closeTime").touched),s(4),l("ngForOf",i.cities),s(),l("ngIf",!((k=i.form.get("city_id"))!=null&&k.valid)&&i.form.get("city_id").touched),s(5),l("ngIf",i.location&&(i.location==null?null:i.location.address)),s(7),l("ngIf",!((D=i.form.get("price"))!=null&&D.valid)&&i.form.get("price").touched),s(5),l("ngIf",!((N=i.form.get("delivery_time"))!=null&&N.valid)&&i.form.get("delivery_time").touched),s(),l("ngIf",!i.coverImage||i.coverImage==""),s(3),l("ngIf",i.coverImage&&i.coverImage!=""),s(8),l("ngIf",(i.categories==null?null:i.categories.length)>0),s(),l("ngIf",(i.cuisines==null?null:i.cuisines.length)>0),s(2),l("ngIf",!i.isLoading),s(),l("ngIf",i.isLoading)}},dependencies:[oe,J,ee,ae,he,ie,K,ue,le,ge,re,fe,ve,ce,se,W,te,ne,pe,de,_e,me,B,R,Y,z,G,H,U,Z,j,Q,X],styles:["img[_ngcontent-%COMP%]{height:10vh;width:10vh}ion-item[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:5px}.itemImage[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:5px;text-align:center;margin-top:1vh;padding:5vh}.imageDiv[_ngcontent-%COMP%]{height:200px}ion-img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover}input[type=file][_ngcontent-%COMP%]{display:none}"]});let e=a;return e})();export{wt as SignupPage};
