(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-swipe-action-swipe-action"],{"040b":function(t,i,e){"use strict";e.r(i);var n=e("ce17"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"09f8":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-swipeout-wrap"},[e("v-uni-view",{staticClass:"tui-swipeout-item",class:[t.isShowBtn?"swipe-action-show":""],style:{transform:"translate("+t.position.pageX+"px,0)"},on:{touchstart:function(i){i=t.$handleEvent(i),t.handlerTouchstart(i)},touchmove:function(i){i=t.$handleEvent(i),t.handlerTouchmove(i)},touchend:function(i){i=t.$handleEvent(i),t.handlerTouchend(i)}}},[e("v-uni-view",{staticClass:"tui-swipeout-content"},[t._t("content")],2),t.actions.length>0?e("v-uni-view",{staticClass:"tui-swipeout-button-right-group",on:{touchend:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.loop(i)}}},t._l(t.actions,function(i,n){return e("v-uni-view",{key:n,staticClass:"tui-swipeout-button-right-item",style:{background:i.background||"#f7f7f7",color:i.color,width:i.width+"px"},attrs:{"data-index":n},on:{click:function(i){i=t.$handleEvent(i),t.handlerButton(i)}}},[i.icon?e("v-uni-image",{style:{width:t.px(i.imgWidth),height:t.px(i.imgHeight)},attrs:{src:i.icon}}):t._e(),e("v-uni-text",{style:{fontSize:t.px(i.fontsize)}},[t._v(t._s(i.name))])],1)}),1):t._e(),0===t.actions.length?e("v-uni-view",{staticClass:"tui-swipeout-button-right-group",style:{width:t.operateWidth+"px",right:"-"+t.operateWidth+"px"},on:{touchend:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.loop(i)},click:function(i){i=t.$handleEvent(i),t.handlerParentButton(i)}}},[t._t("button")],2):t._e()],1),t.isShowBtn&&t.showMask?e("v-uni-view",{staticClass:"swipe-action_mask",on:{touchmove:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.closeButtonGroup(i)},click:function(i){i=t.$handleEvent(i),t.closeButtonGroup(i)}}}):t._e()],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},2093:function(t,i,e){"use strict";e.r(i);var n=e("09f8"),a=e("040b");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("3f75");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"d6099f92",null);i["default"]=r.exports},"20b9":function(t,i,e){var n=e("3162");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("67838f46",n,!0,{sourceMap:!1,shadowMode:!1})},"210a":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},t._l(t.dataList,function(i,n){return e("tui-swipe-action",{key:n,attrs:{actions:t.actions,params:i},on:{click:function(i){i=t.$handleEvent(i),t.handlerButton(i)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"list-item"},[e("v-uni-image",{staticClass:"item-img",attrs:{src:"../../static/images/news/"+i.img+".jpg"}}),e("v-uni-view",{staticClass:"item-box"},[e("v-uni-view",{staticClass:"item-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"item-time"},[t._v("2019-06-01")])],1)],1)]},proxy:!0}],null,!0)})}),1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"30bd":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".tui-swipeout-wrap[data-v-d6099f92]{background:#fff;position:relative;overflow:hidden}.swipe-action-show[data-v-d6099f92]{position:relative;z-index:99999}.tui-swipeout-item[data-v-d6099f92]{width:100%;\n\t/* padding: 15px 20px; */-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;-o-transition:transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;font-size:14px}.tui-swipeout-content[data-v-d6099f92]{white-space:nowrap;overflow:hidden}.tui-swipeout-button-right-group[data-v-d6099f92]{position:absolute;right:-100%;top:0;height:100%;z-index:1;width:100%}.tui-swipeout-button-right-item[data-v-d6099f92]{height:100%;float:left;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.swipe-action_mask[data-v-d6099f92]{display:block;opacity:0;position:fixed;z-index:999;top:0;left:0;width:100%;height:100%}",""])},3162:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".container[data-v-012cc7cc]{background:#fff;padding-bottom:env(safe-area-inset-bottom)}.list-item[data-v-012cc7cc]{padding:%?30?% %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:item;-webkit-align-items:item;-ms-flex-align:item;align-items:item}.item-img[data-v-012cc7cc]{height:%?120?%;width:%?120?%;margin-right:%?20?%;display:block}.item-box[data-v-012cc7cc]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:70%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.item-title[data-v-012cc7cc]{font-size:%?32?%;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.item-time[data-v-012cc7cc]{color:#999;font-size:%?24?%}",""])},"3f75":function(t,i,e){"use strict";var n=e("5f04"),a=e.n(n);a.a},"40e7":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("2093"));function a(t){return t&&t.__esModule?t:{default:t}}var o={components:{tuiSwipeAction:n.default},data:function(){return{dataList:[{id:1,title:"20余省公务员省考笔试放榜 作弊者特别惨",img:"avatar_1"},{id:2,title:"钢票网与恒丰银行正式签订资金存管协议",img:"avatar_2"},{id:3,title:"你的信息被出卖了吗？卖50条个人信息能判3年",img:"avatar_1"},{id:4,title:"杨振宁：我跟翁帆说我准备活到100岁",img:1},{id:5,title:"现实版孙连城：天津正局级干部因不作为被免职",img:"avatar_1"},{id:6,title:"勒索病毒还未收场 内幕已经足够惊人",img:"avatar_2"},{id:7,title:"普京弹钢琴又圈粉 国家领导人们都有哪些才艺？",img:2},{id:8,title:"特朗普“海选”FBI局长 一天面试8个",img:1},{id:9,title:"经济下行压力是否进一步扩大？官方回应经济热点",img:4},{id:10,title:"上海一家三口住9平米房间27年 儿子踩冰箱上床",img:"avatar_2"},{id:11,title:"英国曼彻斯特发生爆炸 事发地正举行演唱会",img:1},{id:12,title:"美国会表决通过新驻华大使 月底有望赴华",img:"avatar_1"}],actions:[{name:"删除",color:"#fff",fontsize:30,width:80,background:"#ed3f14"},{name:"修改",color:"#fff",fontsize:30,width:80,background:"#ff7900"},{name:"收藏",width:80,color:"#80848f",fontsize:30}]}},methods:{handlerButton:function(t){var i=t.index,e=t.item,n=["删除","修改","收藏"][i];this.tui.toast("您点击了【"+n+"】按钮，列表id："+e.id)}}};i.default=o},"4d39":function(t,i,e){"use strict";e.r(i);var n=e("40e7"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},5010:function(t,i,e){"use strict";e.r(i);var n=e("210a"),a=e("4d39");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("a3e9");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"012cc7cc",null);i["default"]=r.exports},"5f04":function(t,i,e){var n=e("30bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("708da0f0",n,!0,{sourceMap:!1,shadowMode:!1})},a3e9:function(t,i,e){"use strict";var n=e("20b9"),a=e.n(n);a.a},ce17:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiSwipeAction",props:{actions:{type:Array,default:function(){return[]}},closable:{type:Boolean,default:!0},showMask:{type:Boolean,default:!0},operateWidth:{type:Number,default:80},params:{type:Object,default:function(){return{}}}},watch:{actions:function(t,i){this.updateButtonSize()}},data:function(){return{tStart:{pageX:0,pageY:0},limitMove:0,position:{pageX:0,pageY:0},isShowBtn:!1}},mounted:function(){this.updateButtonSize()},onReady:function(){this.updateButtonSize()},methods:{swipeDirection:function(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"},loop:function(){},updateButtonSize:function(){var t=this.actions;if(t.length>0){uni.createSelectorQuery().in(this);var i=0;t.forEach(function(t){i+=t.width||0}),this.limitMove=i}else this.limitMove=this.operateWidth},handlerTouchstart:function(t){var i=t.touches?t.touches[0]:{},e=this.tStart;if(i)for(var n in e)i[n]&&(e[n]=i[n])},swipper:function(t){var i=this.tStart,e={pageX:t.pageX-i.pageX,pageY:t.pageY-i.pageY};this.limitMove<Math.abs(e.pageX)&&(e.pageX=-this.limitMove),this.position=e},handlerTouchmove:function(t){var i=this.tStart,e=t.touches?t.touches[0]:{};if(e){var n=this.swipeDirection(i.pageX,e.pageX,i.pageY,e.pageY);"Left"===n&&this.swipper(e)}},handlerTouchend:function(t){var i=this.tStart,e=t.changedTouches?t.changedTouches[0]:{};if(e){var n=this.swipeDirection(i.pageX,e.pageX,i.pageY,e.pageY),a={pageX:e.pageX-i.pageX,pageY:e.pageY-i.pageY};Math.abs(a.pageX)>=40&&"Left"===n?(a.pageX=a.pageX<0?-this.limitMove:this.limitMove,this.isShowBtn=!0):a.pageX=0,this.position=a}},handlerButton:function(t){this.closable&&this.closeButtonGroup();var i=t.currentTarget.dataset;this.$emit("click",{index:Number(i.index),item:this.params})},closeButtonGroup:function(){this.position={pageX:0,pageY:0},this.isShowBtn=!1},handlerParentButton:function(t){this.closable&&this.closeButtonGroup()},px:function(t){return uni.upx2px(t)+"px"}}};i.default=n}}]);