(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0846"],{LbP3:function(e,t,i){"use strict";var o=i("oUff");i.n(o).a},ZySA:function(e,t,i){"use strict";var o=i("P2sY"),n=i.n(o),s=(i("jUE0"),{bind:function(e,t){e.addEventListener("click",function(i){var o=n()({},t.value),s=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},o),r=s.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var a=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(a.width,a.height)+"px",r.appendChild(l)),s.type){case"center":l.style.top=a.height/2-l.offsetHeight/2+"px",l.style.left=a.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(i.pageY-a.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(i.pageX-a.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=s.color,l.className="waves-ripple z-active",!1}},!1)}}),r=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(r)),s.install=r;t.a=s},c11S:function(e,t,i){"use strict";var o=i("gTgX");i.n(o).a},gTgX:function(e,t,i){},jUE0:function(e,t,i){},ntYl:function(e,t,i){"use strict";i.r(t);var o=i("ZySA"),n=i("t3Un");var s={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()},methods:{randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},randomColor:function(e,t){return"rgb("+this.randomNum(e,t)+","+this.randomNum(e,t)+","+this.randomNum(e,t)+")"},drawPic:function(){var e=document.getElementById("s-canvas").getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var t=0;t<this.identifyCode.length;t++)this.drawText(e,this.identifyCode[t],t);this.drawLine(e),this.drawDot(e)},drawText:function(e,t,i){e.fillStyle=this.randomColor(this.colorMin,this.colorMax),e.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var o=(i+1)*(this.contentWidth/(this.identifyCode.length+1)),n=this.randomNum(this.fontSizeMax,this.contentHeight-5),s=this.randomNum(-45,45);e.translate(o,n),e.rotate(s*Math.PI/180),e.fillText(t,0,0),e.rotate(-s*Math.PI/180),e.translate(-o,-n)},drawLine:function(e){for(var t=0;t<8;t++)e.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),e.beginPath(),e.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.stroke()},drawDot:function(e){for(var t=0;t<100;t++)e.fillStyle=this.randomColor(0,255),e.beginPath(),e.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),e.fill()}}},r=i("KHd+"),a=Object(r.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"s-canvas"},[t("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},[],!1,null,null,null);a.options.__file="identify.vue";var l=a.exports,d={name:"Login",directives:{waves:o.a},components:{SIdentify:l},data:function(){var e=this;return{identifyCodes:"1234567890",identifyCode:"",inputIdentifyCode:"",loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空！"}],password:[{required:!0,trigger:"blur",message:"密码不能为空！"}]},temp:{username:null,password:null,checkPass:null,phone:null,mail:null},formRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",validator:function(t,i,o){""===i?o(new Error("请输入密码")):(""!==e.checkPass&&e.$refs.registerForm.validateField("checkPass"),o())}}],checkPass:[{required:!0,validator:function(t,i,o){""===i?o(new Error("请再次输入密码")):i!==e.temp.password?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]},loading:!1,pwdType:"password",redirect:void 0,registerFormVisiable:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(e,t){for(var i=0;i<t;i++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)},showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;this.identifyCode===this.inputIdentifyCode?this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,e.$router.push({path:e.redirect||"/"})}).catch(function(){e.loading=!1})}):this.$notify.error({title:"错误",message:"验证码输入错误"})},resetTemp:function(){this.temp={username:void 0,password:void 0,phone:"",mail:""}},handleRegister:function(){var e=this;this.resetTemp(),this.registerFormVisiable=!0,this.$nextTick(function(){e.$refs.registerForm.clearValidate()})},registerUser:function(){var e=this;this.$refs.registerForm.validate(function(t){t&&function(e){return Object(n.a)({url:"/user/register",method:"post",data:e})}(e.temp).then(function(t){e.registerFormVisiable=!1,"00"===t.data.code?e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}):"01"===t.data.code&&e.$notify({title:"失败",message:"用户名已存在",type:"warning",duration:2e3})}).catch(function(){e.$notify.error({title:"失败",message:"请检查您的网络",duration:2e3})})})}}},c=(i("c11S"),i("LbP3"),Object(r.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"login-container"},[i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[i("h3",{staticClass:"title"},[e._v("Face++人脸识别体验平台")]),e._v(" "),i("el-form-item",{attrs:{prop:"username"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),i("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),i("el-input",{attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"密码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),i("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[i("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{placeholder:"验证码"},model:{value:e.inputIdentifyCode,callback:function(t){e.inputIdentifyCode=t},expression:"inputIdentifyCode"}})],1),e._v(" "),i("div",{staticClass:"code-wrapper"},[i("div",{staticClass:"code",on:{click:e.refreshCode}},[i("s-identify",{attrs:{"identify-code":e.identifyCode}})],1)]),e._v(" "),i("el-form-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n          登陆\n        ")])],1),e._v(" "),i("el-form-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"success"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("\n          注册\n        ")])],1)],1)],1),e._v(" "),i("div",{staticClass:"register"},[i("el-dialog",{attrs:{visible:e.registerFormVisiable,"show-close":!1,title:"注册用户",width:"370px"},on:{"update:visible":function(t){e.registerFormVisiable=t}}},[i("el-form",{ref:"registerForm",staticStyle:{width:"100%"},attrs:{rules:e.formRules,model:e.temp,"label-position":"left","label-width":"100px","status-icon":""}},[i("el-form-item",{attrs:{label:"用户名",prop:"username"}},[i("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{attrs:{type:"password"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[i("el-input",{attrs:{type:"password"},model:{value:e.temp.checkPass,callback:function(t){e.$set(e.temp,"checkPass",t)},expression:"temp.checkPass"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"电话",prop:"phone"}},[i("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{model:{value:e.temp.mail,callback:function(t){e.$set(e.temp,"mail",t)},expression:"temp.mail"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.registerFormVisiable=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.registerUser}},[e._v("注册")])],1)],1)],1)])},[],!1,null,"136b8a25",null));c.options.__file="index.vue";t.default=c.exports},oUff:function(e,t,i){}}]);