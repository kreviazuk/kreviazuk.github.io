webpackJsonp([1],{0:function(t,e){},"3aiD":function(t,e){},"8jgV":function(t,e){},KBro:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/xf8"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var a=n("C7Lr")({name:"App"},s,!1,function(t){n("KBro")},null,null).exports,o=n("AoK/"),i=n.n(o),u=(n("8jgV"),n("KGCO")),h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(t){n("3aiD")},"data-v-3b884edb",null).exports;var c=n("9r/T"),l={name:"QA",data:function(){return{chats:[],query:"",voiceTab:!1,keybordHeight:""}},mounted:function(){this.getHistory(),this.getHeight()},methods:{getHeight:function(){var t=location.search;if(-1!=t.indexOf("?")){var e=t.substr(1);strs=e.split("="),this.data.keybordHeight=strs[1]}},switchTab:function(){this.voiceTab=!this.voiceTab},goBottom:function(){},goInput:function(){Object(c.setTimeout)(function(){document.querySelector("#queryInput").scrollIntoView(!0)},200)},getDate:function(t){return new Date(t)},detectPhoneEmail:function(t){var e=t.replace(/(\d{3})\d{4}(\d{4})/g,function(t,e){return'<a href="tel:'+t+'">'+t+"</a>"}).replace(/(\w+?@\w+?\x2E.+)/g,function(t,e){return'<a href="mailto:'+t+'">'+t+"</a>"});return(e=e.replace(/\n/g,"<br>")).replace(/\r\n/g,"<br>")},submit:function(t){t.preventDefault(),this.$options.methods.sendQuery()},getHistory:function(){var t={apiKey:this.$route.query.apiKey,consumerId:this.$route.query.jobId,getAutoChat:!0,getKefuChat:!1,kefuId:"知了",num:26,start:1};this.$http.post("/zhiliao_kefu/v1/history/chat",t).then(function(t){if(200==t.status){var e=this;this.chats=t.body.result.recordList.map(function(t){if(t.Content){var n=void 0;return"Server2Consumer"==t.MsgPath&&"news"!=t.MsgType?n=e.$options.methods.detectPhoneEmail(t.Content):(n=t.Content.replace(/\r\n/g,"<br>"),console.log(n),n=n.replace(/\n/g,"<br>")),{ApiKey:"b7a02c73bb447368677a3378eac3ba76",UserId:"suxiaoyan",ConsumerId:"访客91722040",MsgType:t.MsgType,MsgSrc:t.MsgSrc,CreateTime:t.CreateTime,Content:n,MsgPath:t.MsgPath}}return t}),this.$nextTick(function(){this.goBottom()})}else o.Toast.text({message:t.status+"请求出错"})})},sendQuery:function(){if(this.query){var t={ApiKey:"b7a02c73bb447368677a3378eac3ba76",UserId:"suxiaoyan",ConsumerId:"访客91722040",MsgType:"text",MsgSrc:"page",CreateTime:parseInt((new Date).getTime()/1e3),Content:this.query,MsgPath:"Consumer2Server"};return this.chats.push(t),this.$nextTick(function(){this.goBottom(),this.query=""}),this.$http.post("/zhiliao_kefu/v1/consumer/api/question",t).then(function(t){if(200==t.status){var e=t.body;"Server2Consumer"==e.MsgPath&&"news"!=e.MsgType&&(e.Content=this.$options.methods.detectPhoneEmail(e.Content)),this.chats.push(e),this.$nextTick(function(){this.goBottom()})}else o.Toast.text({message:t.status+"请求出错"})}),!1}o.Toast.text({message:"请填写内容"})}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"qa-background"},[e("div",[this._v(this._s(this.keybordHeight))])])])},staticRenderFns:[]};var f=n("C7Lr")(l,v,!1,function(t){n("yDNQ")},"data-v-6ed7da34",null).exports;r.default.use(u.a);var p=new u.a({routes:[{path:"/",name:"QA",component:f},{path:"/QA",name:"QA",component:f}]}),g=n("OolZ");r.default.use(i.a),r.default.use(g.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:p,components:{App:a},template:"<App/>"})},yDNQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a7178c531b4351b4ffa6.js.map