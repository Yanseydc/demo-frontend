"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88],{88:(U,m,n)=>{n.r(m),n.d(m,{UserFormModule:()=>c});var a=n(6019),s=n(7537),l=n(1509),e=n(3556),u=n(2403);const d=[{path:"",component:(()=>{class t{constructor(r,o){this.userService=r,this.router=o}ngOnInit(){console.log("ini");let r=localStorage.getItem("user");this.editUser=JSON.parse(r||"{}"),this.title=0!=localStorage.length?"Update User":"Create User"}userFormSubmit(r){0==localStorage.length?this.handleResponse(this.userService.newUser(r.value)):this.handleResponse(this.userService.updateUser(r.value,this.editUser.id))}handleResponse(r){r.subscribe(o=>{this.router.navigate(["/","users"])},o=>{confirm(o.message)})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(u.K),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-form"]],inputs:{title:"title"},decls:20,vars:4,consts:[[1,"userform"],[1,"title"],["ngNativeValidate","",3,"ngSubmit"],["userForm","ngForm"],[1,"form-control"],["for","firstName"],["id","firstName","type","text","ngModel","","name","firstName","required","",3,"ngModel"],["for","lastName"],["id","lastName","type","text","ngModel","","name","lastName","required","",3,"ngModel"],["for","email"],["id","email","type","email","ngModel","","name","email","required","",3,"ngModel"],["type","submit","value","Submit"]],template:function(r,o){if(1&r){const p=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3),e.qZA(),e._UZ(4,"hr"),e.qZA(),e.TgZ(5,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(p);const f=e.MAs(6);return o.userFormSubmit(f)}),e.TgZ(7,"div",4),e.TgZ(8,"label",5),e._uU(9,"First Name:"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"div",4),e.TgZ(12,"label",7),e._uU(13,"Last Name:"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",4),e.TgZ(16,"label",9),e._uU(17,"Email:"),e.qZA(),e._UZ(18,"input",10),e.qZA(),e._UZ(19,"input",11),e.qZA(),e.qZA()}2&r&&(e.xp6(3),e.Oqu(o.title),e.xp6(7),e.s9C("ngModel",o.editUser.firstName),e.xp6(4),e.s9C("ngModel",o.editUser.lastName),e.xp6(4),e.s9C("ngModel",o.editUser.email))},directives:[s.JL,s.F,s.Fj,s.JJ,s.On,s.Q7],styles:[".userform[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;flex-direction:column}form[_ngcontent-%COMP%]{text-align:center}.form-control[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;grid-gap:2rem;gap:2rem}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,s.u5,g]]}),t})()}}]);