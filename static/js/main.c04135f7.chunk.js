(this["webpackJsonpteams-ui"]=this["webpackJsonpteams-ui"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/icon.b5d56f8d.png"},46:function(e,t,a){e.exports=a(69)},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),c=(a(51),a(52),a(13)),l=a(14),o=a(16),u=a(15),m=a(33),h=a(18),d=a(20),p=a(26),g=a.n(p);a(53),a(55);g.a.initializeApp({apiKey:"AIzaSyADjSvD59x-xPFvLQOlfBJQ0HyPrh9O_Hc",authDomain:"ses2b-group2.firebaseapp.com",databaseURL:"https://ses2b-group2.firebaseio.com"});var v=g.a.auth,f=g.a.database(),E=(a(57),a(40)),b=a.n(E),w=a(4),N=a.n(w),y=a(8);function S(e,t,a){return v().createUserWithEmailAndPassword(e,t).then(Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=v().currentUser).sendEmailVerification(),e.next=4,f.ref("users/"+t.uid).set({name:a,email:t.email});case 4:case"end":return e.stop()}}),e)}))))}function x(e,t){return v().signInWithEmailAndPassword(e,t)}function k(){var e=new v.GoogleAuthProvider;return v().signInWithPopup(e).then(Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v().currentUser,e.next=3,f.ref("users/"+t.uid).set({email:t.email});case 3:case"end":return e.stop()}}),e)}))))}function O(){var e=new v.GithubAuthProvider;return v().signInWithPopup(e).then(Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v().currentUser,e.next=3,f.ref("users/"+t.uid).set({email:t.email});case 3:case"end":return e.stop()}}),e)}))))}function C(){return v().signOut()}var j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("div",{className:"nav"},r.a.createElement("img",{src:b.a,alt:"Chat Bubble"}),r.a.createElement("div",null,"Chat App")),r.a.createElement("div",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/chat"},"Chat")),this.props.authenticated?"":r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login"},"Login")),this.props.authenticated?r.a.createElement("li",null,r.a.createElement(d.b,{to:"/profile"},"Profile")):"",this.props.authenticated?r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login",onClick:C},"SignOut")):"")))}}]),a}(n.Component),_=a(42),P=a(7),I=a(96),D=a(19),L=a(23),U=(a(65),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={error:null,loginError:null,signupError:null,forgotpwError:null,email:"",password:"",newpass:"",username:"",showForgot:!1},e.handleChange=e.handleChange.bind(Object(P.a)(e)),e.handleSignIn=e.handleSignIn.bind(Object(P.a)(e)),e.handleSignUp=e.handleSignUp.bind(Object(P.a)(e)),e.handleForgotPass=e.handleForgotPass.bind(Object(P.a)(e)),e.handleUpdatePass=e.handleUpdatePass.bind(Object(P.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(P.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(P.a)(e)),e.onLogin=e.onLogin.bind(Object(P.a)(e)),e.onRegister=e.onRegister.bind(Object(P.a)(e)),e.onForgot=e.onForgot.bind(Object(P.a)(e)),e}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleSignIn",value:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loginError:""}),e.prev=2,e.next=5,x(this.state.email,this.state.password);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({loginError:e.t0.message});case 10:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleUpdatePass",value:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({forgotpwError:""}),e.prev=2,e.next=5,x(this.state.email,this.state.password).then(Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t=this.state.newpass,v().currentuser().updatePassword(t);case 2:case"end":return e.stop()}var t}),e,this)}))));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({forgotpwError:e.t0.message});case 10:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleForgotPass",value:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({forgotpwError:""}),e.prev=2,e.next=5,a=this.state.email,v().sendPasswordResetEmail(a).then((function(){console.log("Email Sent")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({forgotpwError:e.t0.message});case 10:case"end":return e.stop()}var a}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSignUp",value:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({signupError:""}),e.prev=2,e.next=5,S(this.state.email,this.state.password,this.state.username);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({signupError:e.t0.message});case 10:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({loginError:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({loginError:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"onLogin",value:function(){var e=this;document.getElementById("container").classList.remove("right-panel-active"),setTimeout((function(){e.setState({showForgot:!1})}),500)}},{key:"onRegister",value:function(){document.getElementById("container").classList.add("right-panel-active"),this.setState({showForgot:!1})}},{key:"onForgot",value:function(){document.getElementById("container").classList.add("right-panel-active"),this.setState({showForgot:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"bg"}),r.a.createElement("div",{id:"container",className:"login-container"},this.state.showForgot?r.a.createElement("div",{className:"form-container sign-up-container forgot"},r.a.createElement("form",{style:{height:"auto"},autoComplete:"off",onSubmit:this.handleForgotPass},r.a.createElement("h1",null,"Forgot Password"),r.a.createElement("div",{className:"input-wrap"},r.a.createElement(I.a,{required:!0,id:"standard-required",label:"Email",name:"email",onChange:this.handleChange,InputProps:{value:this.state.email}}),this.state.forgotpwError?r.a.createElement("p",{className:"text-danger"},this.state.forgotpwError):null,r.a.createElement("button",{type:"submit",style:{padding:0},className:"ghost"},"Reset Password")))):r.a.createElement("div",{className:"form-container sign-up-container"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{className:"input-wrap"},r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSignUp},r.a.createElement(I.a,{id:"standard",label:"Username",name:"username",onChange:this.handleChange,InputProps:{value:this.state.username}}),r.a.createElement(I.a,{required:!0,id:"standard-required",label:"Email",name:"email",onChange:this.handleChange,InputProps:{value:this.state.email}}),r.a.createElement(I.a,{required:!0,id:"standard-required",label:"Password",type:"password",name:"password",onChange:this.handleChange,InputProps:{value:this.state.password}}),this.state.signupError?r.a.createElement("p",{className:"text-danger"},this.state.signupError):null,r.a.createElement("button",{type:"submit",className:"ghost"},"Register"))),r.a.createElement("div",{className:"icons"},r.a.createElement(D.a,{icon:L.a,size:"2x",onClick:this.githubSignIn}),r.a.createElement(D.a,{icon:L.b,size:"2x",onClick:this.googleSignIn}))),r.a.createElement("div",{className:"form-container sign-in-container"},r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSignIn},r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",{className:"input-wrap"},r.a.createElement(I.a,{id:"standard-required",label:"Email",name:"email",onChange:this.handleChange,InputProps:{value:this.state.email}}),r.a.createElement(I.a,{id:"standard-required",label:"Password",type:"password",name:"password",onChange:this.handleChange,InputProps:{value:this.state.password}}),r.a.createElement("span",{style:{display:"block",textAlign:"left"},onClick:this.onForgot},"Forgot Password?"),this.state.loginError?r.a.createElement("p",{className:"text-danger"},this.state.loginError):null,r.a.createElement("button",{type:"submit",className:"ghost"},"Login"),r.a.createElement("div",{className:"icons"},r.a.createElement(D.a,{icon:L.a,size:"2x",onClick:this.githubSignIn}),r.a.createElement(D.a,{icon:L.b,size:"2x",onClick:this.googleSignIn}))))),r.a.createElement("div",{className:"overlay-container"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-panel overlay-left"},r.a.createElement("h1",null,this.state.showForgot?"Remember password?":"Already have an account?"),r.a.createElement("button",{onClick:this.onLogin,className:"ghost"},"Sign In")),r.a.createElement("div",{className:"overlay-panel overlay-right"},r.a.createElement("h1",null,"Don't have an account?"),r.a.createElement("button",{onClick:this.onRegister,className:"ghost"},"Sign Up"))))))}}]),a}(n.Component)),A=a(32),F=(a(66),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:v().currentUser,chats:[],users:new Map,content:"",readError:null,writeError:null,loadingChats:!1},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(P.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0});try{f.ref("chats").on("value",(function(e){var a=[];e.forEach((function(e){a.push(e.val())})),a.sort((function(e,t){return e.timestamp-t.timestamp})),t.setState({chats:a}),t.setState({loadingChats:!1})}))}catch(a){this.setState({readError:a.message,loadingChats:!1})}try{f.ref("users").on("value",(function(e){var a=new Map;e.forEach((function(e){a.set(e.key,e.val())})),t.setState({users:a})}))}catch(a){this.setState({readError:a.message})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.ref("users").off("value"),f.ref("chats").off("value");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),e.prev=2,e.next=5,f.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid});case 5:this.setState({content:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({writeError:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"chat",className:""},r.a.createElement("div",{className:"messaging"},r.a.createElement("div",{className:"inbox_msg"},r.a.createElement("div",{className:"inbox_people"},r.a.createElement("div",{className:"headind_srch"},r.a.createElement("div",{className:"recent_heading"},r.a.createElement("h4",null,"Recent")),r.a.createElement("div",{className:"srch_bar"},r.a.createElement("div",{className:"stylish-input-group"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search"}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("button",{type:"button"}," ",r.a.createElement(D.a,{icon:A.b,"aria-hidden":"true"})," "))))),r.a.createElement("div",{className:"inbox_chat"},r.a.createElement("div",{className:"chat_list active_chat"},r.a.createElement("div",{className:"chat_people"},r.a.createElement("div",{className:"chat_img"}," ",r.a.createElement("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"group-no"})," "),r.a.createElement("div",{className:"chat_ib"},r.a.createElement("h5",null,"Group 1 ",r.a.createElement("span",{className:"chat_date"},"Dec 25")),r.a.createElement("p",null,"Description / Last Message")))),r.a.createElement("div",{className:"chat_list"},r.a.createElement("div",{className:"chat_people"},r.a.createElement("div",{className:"chat_img"}," ",r.a.createElement("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"group-no"})," "),r.a.createElement("div",{className:"chat_ib"},r.a.createElement("h5",null,"Group 2 ",r.a.createElement("span",{className:"chat_date"},"Dec 25")),r.a.createElement("p",null,"Description / Last Message ")))))),r.a.createElement("div",{className:"mesgs"},this.state.loadingChats?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",r.a.createElement("div",{className:"msg_history"},r.a.createElement("div",{className:"msg-top"},r.a.createElement("strong",{className:"text-info"},"Group 1")),r.a.createElement("div",{className:"msg-mid"},this.state.chats.map((function(t){return r.a.createElement("div",{key:t.timestamp,className:e.state.user.uid===t.uid?"outgoing_msg":"incoming_msg"},e.state.user.uid===t.uid?"":r.a.createElement("div",{className:"incoming_msg_img"}," ",r.a.createElement("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})," "),e.state.user.uid===t.uid?r.a.createElement("div",{className:"sent_msg"},r.a.createElement("p",null,t.content),r.a.createElement("span",{className:"time_date"},e.formatTime(t.timestamp))):r.a.createElement("div",{className:"received_msg"},r.a.createElement("div",{className:"received_withd_msg"},r.a.createElement("div",{className:"name-header"},e.state.users.has(t.uid)?void 0===e.state.users.get(t.uid).name?e.state.users.get(t.uid).email:e.state.users.get(t.uid).name:"Anonymous"),r.a.createElement("p",null,t.content),r.a.createElement("span",{className:"time_date"},e.formatTime(t.timestamp)))))}))),r.a.createElement("form",{onKeyDown:this._handleKeyDown,onSubmit:this.handleSubmit,className:"type_msg"},r.a.createElement("textarea",{type:"text",placeholder:"Type a message",className:"form-control write_msg",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"msg_send_btn",type:"submit"},r.a.createElement(D.a,{icon:A.a,"aria-hidden":"true"}))))))))}}]),a}(n.Component)),M=(a(67),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:v().currentUser,email:null,username:null,readError:null,writeError:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({readError:null});try{f.ref("users/".concat(this.state.user.uid)).once("value",(function(t){e.setState({email:t.val().email,username:t.val().name?t.val().name:null})}))}catch(t){this.setState({readError:t.message})}}},{key:"render",value:function(){return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("div",{className:"name-icon"},"D"),r.a.createElement("h1",null,"Welcome,"," ",null!=this.state.username?this.state.username:this.state.email),r.a.createElement("h2",null,"Manage your information to make Chat App work better for you"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"inner-heading"},"Profile"),r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,"PHOTO"),r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Add a photo to personalise your account")),r.a.createElement("div",{className:"icon"},"D",r.a.createElement("div",{className:"photo"},r.a.createElement("svg",{"data-v-d223ba98":"","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"camera",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-camera fa-w-16",style:{fontSize:"17px"}},r.a.createElement("path",{"data-v-d223ba98":"",fill:"currentColor",d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z",className:""}))))),r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,"EMAIL"),r.a.createElement("div",{className:"content"},this.state.email),r.a.createElement("div",{className:"popup"},r.a.createElement("svg",{"data-v-d223ba98":"","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-pen fa-w-16"},r.a.createElement("path",{"data-v-d223ba98":"",fill:"currentColor",d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",className:""})))),r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,"USERNAME"),r.a.createElement("div",{className:"content"},null!=this.state.username?this.state.username:this.state.email),r.a.createElement("div",{className:"popup"},r.a.createElement("svg",{"data-v-d223ba98":"","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-pen fa-w-16"},r.a.createElement("path",{"data-v-d223ba98":"",fill:"currentColor",d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",className:""})))),r.a.createElement("div",{className:"info",style:{borderBottom:"none"}},r.a.createElement("h3",null,"PASSWORD"),r.a.createElement("div",{className:"content",type:"password"},"************"),r.a.createElement("div",{className:"popup"},r.a.createElement("svg",{style:{width:"20px",fontSize:"20px",height:"20px"},"data-v-d223ba98":"","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-arrow-right fa-w-14"},r.a.createElement("path",{"data-v-d223ba98":"",fill:"currentColor",d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",className:""})))))))}}]),a}(n.Component));a(68);function z(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/chat"})}}))}function B(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"/teams-ui"},r.a.createElement(j,{authenticated:this.state.authenticated}),r.a.createElement(h.d,null,r.a.createElement(B,{path:"/chat",authenticated:this.state.authenticated,component:F}),r.a.createElement(z,{path:"/login",authenticated:this.state.authenticated,component:U}),r.a.createElement(B,{path:"/profile",authenticated:this.state.authenticated,component:M}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.c04135f7.chunk.js.map