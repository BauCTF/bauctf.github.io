(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4yNf":function(t,e,s){"use strict";var i=s("I+eb"),a=s("4zBA"),n=s("HYAF"),l=s("WSbT"),c=s("V37c"),r=a("".slice),o=Math.max,u=Math.min;i({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var s,i,a=c(n(this)),d=a.length,v=l(t);return v===1/0&&(v=0),v<0&&(v=o(d+v,0)),(s=void 0===e?d:l(e))<=0||s===1/0||v>=(i=u(v+s,d))?"":r(a,v,i)}})},O8KY:function(t,e,s){"use strict";s("o5Le")},gdVl:function(t,e,s){"use strict";var i=s("ewvW"),a=s("I8vh"),n=s("B/qT");t.exports=function(t){for(var e=i(this),s=n(e),l=arguments.length,c=a(l>1?arguments[1]:void 0,s),r=l>2?arguments[2]:void 0,o=void 0===r?s:a(r,s);o>c;)e[c++]=t;return e}},"mV/G":function(t,e,s){"use strict";s.r(e);s("yyme"),s("4yNf"),s("vDqi");var i=s("L2JU"),a={name:"challenges",data:function(){return{isActive:Array(21).fill(0),flag:Array(21).fill("")}},computed:Object(i.b)(["signedIn","challenges","categories"]),methods:{collapse:function(t){this.isActive[t]?(this.$refs.challenge[t].classList.remove("active"),this.$refs.buttons[t].classList.remove("collapsed")):(this.$refs.challenge[t].classList.add("active"),this.$refs.buttons[t].classList.add("collapsed")),this.isActive[t]=1-this.isActive[t]},submit:function(t,e){if("{"!=this.flag[t][4]||"}"!=this.flag[t].substr(-1))return alert("invalid flag format");this.$store.dispatch("submit",{id:e,flag:this.flag[t]})}},mounted:function(){this.signedIn&&this.$store.dispatch("challenges");var t=document.createElement("script");t.setAttribute("src","/js/particles.min.js"),document.body.appendChild(t);var e=document.createElement("script");e.setAttribute("src","/js/triangle.js"),document.body.appendChild(e)},created:function(){this.signedIn||this.$router.push({path:"/login"})}},n=(s("O8KY"),s("KHd+")),l=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{stickable:!0}},[s("div",{attrs:{id:"particles-js"}}),t.signedIn?s("div",{staticClass:"main-challenges"},[0===t.challenges.length?s("div",[s("p",[t._v("No Challenges Available")])]):t._e(),t._l(t.challenges,(function(e,i){return s("div",{key:i,staticClass:"challenge"},[s("button",{ref:"buttons",refInFor:!0,staticClass:"collapsible",on:{click:function(e){return t.collapse(i)}}},[s("div",{staticClass:"challenge-name"},[s("h2",[t._v(t._s(e.title))]),e.solved?s("h4",[t._v("Solved")]):t._e()]),s("div",{staticClass:"challenge-info"},[s("h4",[t._v(t._s(e.score)+" Points")]),s("div",{staticClass:"cat"},[s("h4",[t._v(t._s(t.categories[e.category]))])])])]),s("div",{ref:"challenge",refInFor:!0,staticClass:"content"},[s("div",{staticClass:"challenge-body"},[s("p",[t._v(t._s(e.body))])]),s("div",{staticClass:"attach"},[s("a",{attrs:{href:e.link,target:"_blank"}},[t._v("[♦link]")])]),s("div",{staticClass:"submit"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.flag[i],expression:"flag[index]"}],staticClass:"ctf",attrs:{type:"text",placeholder:"KCTF{...}"},domProps:{value:t.flag[i]},on:{input:function(e){e.target.composing||t.$set(t.flag,i,e.target.value)}}}),s("button",{staticClass:"button",on:{click:function(s){return t.submit(i,e.id)}}},[t._v("Submit")])])])])}))],2):s("div",{staticClass:"login"},[s("h1",[t._v("\n      Login\n      "),s("br"),t._v("To\n      "),s("br"),t._v("Continue\n      "),s("br"),t._v("...\n    ")])])])}),[],!1,null,"0589e514",null);e.default=l.exports},o5Le:function(t,e,s){},yyme:function(t,e,s){var i=s("I+eb"),a=s("gdVl"),n=s("RNIs");i({target:"Array",proto:!0},{fill:a}),n("fill")}}]);