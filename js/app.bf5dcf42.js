(function(e){function s(s){for(var r,u,i=s[0],o=s[1],l=s[2],c=0,m=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&m.push(a[u][0]),a[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(s);while(m.length)m.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],r=!0,i=1;i<t.length;i++){var o=t[i];0!==a[o]&&(r=!1)}r&&(n.splice(s--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},n=[];function u(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,s,t){u.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,s){if(1&s&&(e=u(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)u.d(t,r,function(s){return e[s]}.bind(null,r));return t},u.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(s,"a",s),s},u.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},u.p="/TallerNode/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var d=o;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";t("85ec")},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-wrapper"},[t("label",[e._v("Nombre: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name.fistname,expression:"user.name.fistname"}],domProps:{value:e.user.name.fistname},on:{input:function(s){s.target.composing||e.$set(e.user.name,"fistname",s.target.value)}}}),t("br"),t("label",[e._v("Apellido: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name.lastname,expression:"user.name.lastname"}],domProps:{value:e.user.name.lastname},on:{input:function(s){s.target.composing||e.$set(e.user.name,"lastname",s.target.value)}}}),t("br"),t("label",[e._v("Nombre de usuario: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{maxlength:"8"},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("br"),t("label",[e._v("Tipo de identificación: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userid.idtype,expression:"user.userid.idtype"}],domProps:{value:e.user.userid.idtype},on:{input:function(s){s.target.composing||e.$set(e.user.userid,"idtype",s.target.value)}}}),t("br"),t("label",[e._v("Número de identificación: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userid.idvalue,expression:"user.userid.idvalue"}],domProps:{value:e.user.userid.idvalue},on:{input:function(s){s.target.composing||e.$set(e.user.userid,"idvalue",s.target.value)}}}),t("br"),t("label",[e._v("Contraseña: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),t("br"),t("label",[e._v("Foto: ")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.photo,expression:"user.photo"}],domProps:{value:e.user.photo},on:{input:function(s){s.target.composing||e.$set(e.user,"photo",s.target.value)}}}),t("br"),t("label",[e._v("Activar usuario ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.state,expression:"user.state"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.user.state)?e._i(e.user.state,null)>-1:e.user.state},on:{change:function(s){var t=e.user.state,r=s.target,a=!!r.checked;if(Array.isArray(t)){var n=null,u=e._i(t,n);r.checked?u<0&&e.$set(e.user,"state",t.concat([n])):u>-1&&e.$set(e.user,"state",t.slice(0,u).concat(t.slice(u+1)))}else e.$set(e.user,"state",a)}}}),t("br"),e.editmode?t("button",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.sendEditUser}},[e._v(" Guardar ")]):t("button",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.sendChangesUser}},[e._v(" Crear ")]),t("div",[t("UserList",{on:{click:e.editUser}})],1)])},n=[],u=(t("b0c0"),new r["a"]),i=u,o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("ul",{attrs:{id:"userList"}},e._l(e.users,(function(s,r){return t("li",{key:r},[e._v(" "+e._s(s.name.fistname)+" "),t("button",{on:{click:function(t){return e.showUser(s)}}},[e._v("Ver")]),t("button",{on:{click:function(t){return e.editUser(s)}}},[e._v("Editar")]),t("button",{on:{click:function(t){return e.removeUser(s)}}},[e._v("Eliminar")])])})),0),t("div",[t("h2",[e._v("Descripcion de usuario:")]),t("label",[e._v("Nombre: ")]),e._v(" "),t("label",[e._v(" "+e._s(this.user.name.fistname)+" ")]),t("br"),t("label",[e._v("Apellido: ")]),e._v(" "),t("label",[e._v(" "+e._s(this.user.name.lastname)+" ")]),t("br"),t("label",[e._v("Nombre de usuario: ")]),e._v(" "+e._s(this.user.username)+" "),t("label"),t("br"),t("label",[e._v("Tipo de identificación: ")]),e._v(" "+e._s(this.user.userid.idtype)+" "),t("label"),t("br"),t("label",[e._v("Numero de identificación: ")]),e._v(" "+e._s(this.user.userid.idvalue)+" "),t("label"),t("br"),t("label",[e._v("Contraseña: ")]),e._v(" "),t("label",[e._v(" "+e._s(this.user.password)+" ")]),t("br"),t("label",[e._v("Activo: ")]),e._v(" "),t("label",[e._v(" "+e._s(this.user.state)+" ")]),t("br"),t("label",[e._v("Foto: ")]),e._v(" "),t("label",[e._v(" "+e._s(this.user.photo)+" ")]),t("br"),t("div",[t("img",{attrs:{src:this.user.photo}})])])])},l=[],d=t("bc3a"),c=t.n(d),m="https://tallernode-vue.herokuapp.com/users",p={data:function(){return{users:"",user:{name:{fistname:"",lastname:""},username:"",photo:"",password:"",state:"",userid:{idtype:"",idvalue:""}}}},mounted:function(){var e=this;i.$on("getUsers",(function(){c.a.get(m+"/").then((function(s){e.users=s.data}))}))},created:function(){this.getUsers()},methods:{saveEdit:function(){console.log("save")},editUser:function(e){this.$emit("click",e)},removeUser:function(e){var s=this;c.a.defaults.baseURL=m,c.a.delete(m+"/delete/"+e._id).then((function(e){e.status>=200&&e.status<300?(alert("Usuario borrado con exito!"),s.getUsers()):console.log("No pudo borrarse al usuario")}))},getUsers:function(){var e=this;c.a.get(m+"/").then((function(s){e.users=s.data}))},showUser:function(e){this.user=e}}},v=p,f=t("2877"),h=Object(f["a"])(v,o,l,!1,null,null,null),b=h.exports,_={name:"App",components:{UserList:b},data:function(){return{user:{name:{fistname:"",lastname:""},username:"",password:"",photo:"",state:!1,userid:{idtype:"",idvalue:""},id:""},editmode:!1}},methods:{sendChangesUser:function(){var e=this,s={name:{fistname:this.user.name.fistname,lastname:this.user.name.lastname},username:this.user.username,photo:this.user.photo,password:this.user.password,state:this.user.state,userid:{idtype:this.user.userid.idtype,idvalue:this.user.userid.idvalue}};c.a.defaults.baseURL="https://tallernode-vue.herokuapp.com",c.a.post("/users/create/",s).then((function(s){s.status>=200&&s.status<300?(alert("Usuario creado con exito!"),e.user.name.fistname="",e.user.name.lastname="",e.user.username="",e.user.password="",e.user.photo="",e.user.active="",e.user.userid.idtype="",e.user.userid.idvalue="",e.user.state=!1):console.log("Ocurrió un error")})),setTimeout((function(){i.$emit("getUsers")}),300)},sendEditUser:function(){var e=this,s={name:{fistname:this.user.name.fistname,lastname:this.user.name.lastname},username:this.user.username,photo:this.user.photo,password:this.user.password,state:this.user.state,userid:{idtype:this.user.userid.idtype,idvalue:this.user.userid.idvalue}};c.a.defaults.baseURL="https://tallernode-vue.herokuapp.com",c.a.put("/users/edit/".concat(this.user._id),s).then((function(s){s.status>=200&&s.status<300?(alert("Usuario editado con exito!"),e.editmode=!1,e.user.name.fistname="",e.user.name.lastname="",e.user.username="",e.user.password="",e.user.photo="",e.user.state="",e.user.userid.idtype="",e.user.userid.idvalue="",e.user._id=""):console.log("Ocurrió un error")})),setTimeout((function(){i.$emit("getUsers")}),300)},editUser:function(e){this.editmode=!0,this.user.name.fistname=e.name.fistname,this.user.name.lastname=e.name.lastname,this.user.username=e.username,this.user.password=e.password,this.user.photo=e.photo,this.user.state=e.state,this.user.userid.idtype=e.userid.idtype,this.user.userid.idvalue=e.userid.idvalue,this.user._id=e._id}}},g=_,w=(t("034f"),Object(f["a"])(g,a,n,!1,null,null,null)),y=w.exports,U=t("8c4f"),x=t("2106"),k=t.n(x),$=[{path:"/userlist",component:b}];r["a"].use(k.a,c.a),r["a"].config.productionTip=!1,r["a"].use(U["a"]);var N=new U["a"]({routes:$});new r["a"]({router:N,render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,s,t){}});
//# sourceMappingURL=app.bf5dcf42.js.map