import{h as C,i as w,j as h,k as F,l as k,d as l,c as u,m as d,n as y,a as t,r as j,o as x,q as E,_ as A,F as _,s as p,w as B,v as D,b,t as m,p as S,e as I}from"./index.1d4f861d.js";const L=C({name:"IconUser",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:s=>["butt","round","square"].includes(s)},strokeLinejoin:{type:String,default:"miter",validator:s=>["arcs","bevel","miter","miter-clip","round"].includes(s)},spin:Boolean},setup(s){const e=w("icon"),o=h(()=>[e,`${e}-user`,{[`${e}-spin`]:s.spin}]),a=h(()=>{if(s.size)return{fontSize:k(s.size)?`${s.size}px`:s.size}});return{cls:o,sizeStyle:a}}}),z=["stroke-width","stroke-linecap","stroke-linejoin"],H=t("path",{d:"M7 37c0-4.97 4.03-8 9-8h16c4.97 0 9 3.03 9 8v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3Z"},null,-1),U=t("circle",{cx:"24",cy:"15",r:"8"},null,-1),N=[H,U];function M(s,e,o,a,c,n){return l(),u("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:d(s.cls),style:y(s.sizeStyle),"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},N,14,z)}var f=F(L,[["render",M]]);const V=Object.assign(f,{install:(s,e)=>{var o;const a=(o=e==null?void 0:e.iconPrefix)!=null?o:"";s.component(a+f.name,f)}}),O={name:"AppTopNav",components:{IconUser:V},data(){return{isSearchFocus:!1,placeholder:"\u63A2\u7D22\u7A00\u571F\u6398\u91D1",isCenterUnfold:!1,list:[{list0:[{items:["\u9996\u9875","\u6CB8\u70B9","\u8BFE\u7A0B","\u76F4\u64AD","\u6D3B\u52A8","\u5546\u57CE","APP","\u63D2\u4EF6"],currentIndex:0}],list1:[{items:["\u7EFC\u5408","\u5173\u6CE8","\u540E\u7AEF","\u524D\u7AEF","Android","IOS","\u4EBA\u5DE5\u667A\u80FD","\u5F00\u53D1\u5DE5\u5177","\u4EE3\u7801\u4EBA\u751F","\u6807\u7B7E\u7BA1\u7406"],currentIndex:0}]}]}},methods:{searchFocusinHandler(){this.isSearchFocus=!0,this.placeholder="\u641C\u7D22\u6587\u7AE0/\u5C0F\u518C/\u6807\u7B7E/\u7528\u6237"},searchFocusoutHandler(){this.isSearchFocus=!1,this.placeholder="\u63A2\u7D22\u7A00\u571F\u6398\u91D1"},unfoldOrFoldList(){this.isCenterUnfold=!this.isCenterUnfold},clickChangeColor(s,e){this.list[0]["list"+s.toString()][0].currentIndex=e}},setup(){let s=j(!0),e=0;function o(){const a=document.body.scrollTop||document.documentElement.scrollTop;console.log(a-e),s.value=a-e<=0,e=a}return x(()=>{window.addEventListener("scroll",o,!1)}),E(()=>{window.removeEventListener("scroll",o,!1)}),{isVisible:s}}};const v=s=>(S("data-v-fc40f16f"),s=s(),I(),s),P={class:"app-top-nav"},T={class:"container-1"},Z=v(()=>t("div",{class:"logo"},[t("a",{href:""},[t("img",{class:"logo-img",src:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg",alt:"\u7A00\u571F\u6398\u91D1"})])],-1)),q={class:"nav-item"},W=["onClick"],$={class:"search"},G=["placeholder"],J={class:"search-icon"},K=["src"],Q={class:"title-box"},R=v(()=>t("button",{class:"title"},"\u521B\u4F5C\u8005\u4E2D\u5FC3",-1)),X=v(()=>t("svg",{"data-v-61b102b0":"",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"triangle"},[t("path",{"data-v-61b102b0":"",d:"M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z",fill:"white"})],-1)),Y=[X],ss={class:"items-box"},ts=b('<div class="item" data-v-fc40f16f><img class="icon" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg" alt="" data-v-fc40f16f><div class="title" data-v-fc40f16f><a href="http://localhost:5173/#/post/new" target="_blank" style="color:#515767;font-weight:normal;" data-v-fc40f16f>\u5199\u6587\u7AE0</a></div></div><div class="item" data-v-fc40f16f><img class="icon" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg" alt="" data-v-fc40f16f><div class="title" data-v-fc40f16f>\u53D1\u6CB8\u70B9</div></div><div class="item" data-v-fc40f16f><img class="icon" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/01c75d281edffa91cacfb93189c940b4.svg" alt="" data-v-fc40f16f><div class="title" data-v-fc40f16f>\u5199\u4EE3\u7801</div></div>',3),es=[ts],as=b('<div class="member" data-v-fc40f16f><img class="icon" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="" data-v-fc40f16f><div class="title" data-v-fc40f16f>\u4F1A\u5458</div></div><a class="notify" href="#" data-v-fc40f16f><svg class="notify-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fc40f16f><path d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" stroke-width="1.5" stroke-linecap="round" data-v-925bf8d6="" data-v-fc40f16f></path><path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-925bf8d6="" data-v-fc40f16f></path><path d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" stroke-linecap="round" stroke-linejoin="round" data-v-fc40f16f></path></svg></a><li class="avatar" data-v-fc40f16f><div class data-v-fc40f16f><a href="http://localhost:5173/#/login" target="_blank" style="display:flex;" data-v-fc40f16f><img src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image" alt="\u65FA\u5D3D\u7684\u5934\u50CF" class="avatar-img" data-v-248050e4="" data-v-3aafff8a="" data-v-925bf8d6="" loading="lazy" data-v-fc40f16f></a></div></li>',3),cs={class:"container-2"},is={class:"nav-list"},os=["onClick"];function ns(s,e,o,a,c,n){return l(),u("nav",P,[t("div",{class:d(["container",{visible:a.isVisible}])},[t("div",T,[Z,t("ul",null,[(l(!0),u(_,null,p(c.list[0].list0[0].items,(i,r)=>(l(),u("li",q,[t("a",{href:"#",class:d([c.list[0].list0[0].currentIndex===r?"active":""]),onClick:g=>n.clickChangeColor(0,r)},m(i),11,W)]))),256))]),t("div",{class:d(["search-and-creatorcenter",c.isSearchFocus?"focus":""])},[t("div",$,[t("input",{onFocusout:e[0]||(e[0]=(...i)=>n.searchFocusoutHandler&&n.searchFocusoutHandler(...i)),onFocusin:e[1]||(e[1]=(...i)=>n.searchFocusinHandler&&n.searchFocusinHandler(...i)),placeholder:c.placeholder,type:"text",class:"input"},null,40,G),t("div",J,[t("img",{src:c.isSearchFocus?"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg":"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg",alt:"\u641C\u7D22"},null,8,K)])]),t("div",{class:d(["creator-center",c.isCenterUnfold?"unfold":""])},[t("div",Q,[R,t("div",{class:"button",onClick:e[2]||(e[2]=(...i)=>n.unfoldOrFoldList&&n.unfoldOrFoldList(...i))},Y)]),B(t("div",ss,es,512),[[D,c.isCenterUnfold]])],2)],2),as]),t("div",cs,[t("div",is,[(l(!0),u(_,null,p(c.list[0].list1[0].items,(i,r)=>(l(),u("a",{href:"#",class:d(["nav-item-second",c.list[0].list1[0].currentIndex===r?"active":"",i==="\u6807\u7B7E\u7BA1\u7406"?"right":""]),onClick:g=>n.clickChangeColor(1,r)},m(i),11,os))),256))])])],2)])}const us=A(O,[["render",ns],["__scopeId","data-v-fc40f16f"]]);export{us as _};
