(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/password"],{"0c44":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("8ff4"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1b44":function(e,t,n){"use strict";n.r(t);var r=n("7fa0"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"72e9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},"7fa0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),o=n("2f62"),a=n("7ded");function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,s,"next",e)}function s(e){c(a,r,o,i,s,"throw",e)}i(void 0)}))}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n("9564"),p={data:function(){return{mobile:"",password:"",code:"",type:null,logining:!1,loginByPass:!0,smsCodeBtnDisabled:!1,codeSeconds:60}},onLoad:function(e){this.type=e.type},methods:l({},(0,o.mapMutations)(["login"]),{inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},checkPhoneIsValid:function(e){var t=/^1[0-9]{10,10}$/;return!!t.test(e)||(this.$api.msg("请输入正确的手机号"),!1)},blurRePasswordChange:function(e){this.password!==e.detail.value&&this.$api.msg("两次输入的密码不一致")},getSmsCode:function(){var e=this;this.checkPhoneIsValid(this.mobile)&&this.$post(a.smsCode,{mobile:this.mobile,usage:"up-pwd"}).then((function(t){e.$api.msg("验证码发送成功, 验证码是".concat(t.data)),e.smsCodeBtnDisabled=!0;var n=59,r=setInterval((function(){0===n?(clearInterval(r),e.smsCodeBtnDisabled=!1):(e.codeSeconds=n,e.smsCodeBtnDisabled=!0,n--)}),1e3)})).catch((function(e){console.log(e)}))},blurMobileChange:function(e){this.mobile=e.detail.value},showLoginBySmsCode:function(){this.loginByPass=!this.loginByPass},navBack:function(){e.navigateBack()},toLogin:function(){e.navigateTo({url:"/pages/public/login"})},toForgetPass:function(){e.navigateTo({url:"/pages/public/password"})},toHome:function(){e.switchTab({url:"/pages/index/index"})},blurPasswordChange:function(e){this.password=e.detail.value},toUpdatePassword:function(){var t=s(r.default.mark((function t(n){var o,i,c,s,u=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=n.detail.value,o.password===o.password_repetition){t.next=4;break}return this.$api.msg("两次输入的密码不一致"),t.abrupt("return");case 4:if(i=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"},{name:"code",checkType:"notnull",checkRule:"",errorMsg:"请输入验证码"},{name:"password",checkType:"string",checkRule:"6,20",errorMsg:"密码长度为6-20位"},{name:"password_repetition",checkType:"notnull",checkRule:"",errorMsg:"请输入确认密码"}],c=d.check(o,i),c){t.next=9;break}return this.$api.msg(d.error),t.abrupt("return");case 9:s={},s.group="tinyShopWechatMq",this.$post(a.updatePassword,l({},s,{},o)).then((function(){u.$api.msg("密码重置成功"),e.navigateTo({url:"/pages/public/login"})})).catch((function(e){console.log(e)}));case 12:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()})};t.default=p}).call(this,n("543d")["default"])},"8b8c":function(e,t,n){},"8ff4":function(e,t,n){"use strict";n.r(t);var r=n("72e9"),o=n("1b44");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("bc8c");var i=n("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"7cc66313",null);t["default"]=c.exports},bc8c:function(e,t,n){"use strict";var r=n("8b8c"),o=n.n(r);o.a}},[["0c44","common/runtime","common/vendor"]]]);