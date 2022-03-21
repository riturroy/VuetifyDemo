"use strict";(self["webpackChunkdemo_vuetify_app"]=self["webpackChunkdemo_vuetify_app"]||[]).push([[443],{11330:function(t,e,i){i.r(e),i.d(e,{default:function(){return at}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("v-row",{staticClass:"mt-8"},[i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.openDialog}},"v-btn",o,!1),n),[t._v(" Open Dialog ")])]}}])},[i("span",[t._v(" Open Dialog")])])],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.openConfirmationPopup}},"v-btn",o,!1),n),[t._v(" Open Confirmation Popup ")])]}}])},[i("span",[t._v(" Open Confirmation Popup")])])],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.showSuccessAlert}},"v-btn",o,!1),n),[t._v(" Show Success Alert ")]),i("v-btn",t._g(t._b({staticStyle:{"margin-left":"16px"},attrs:{color:"primary",dark:""},on:{click:t.showWarningAlert}},"v-btn",o,!1),n),[t._v(" Show Warning Alert ")]),i("v-btn",t._g(t._b({staticStyle:{"margin-left":"16px"},attrs:{color:"primary",dark:""},on:{click:t.showFailureAlert}},"v-btn",o,!1),n),[t._v(" Show Failure Alert ")])]}}])},[i("span",[t._v("Show Alert")])])],1)],1),i("custom-alert",{ref:"alert",attrs:{message:t.alertMessage,type:t.alertType}}),i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,content:t.dialogContent},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[i("template",{slot:"progress"},[i("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),i("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),i("v-card-title",[t._v("Cafe Badilico")]),i("v-card-text",[i("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[i("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),i("div",{staticClass:"grey--text ms-4"},[t._v(" 4.5 (413) ")])],1),i("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" $ • Italian, Cafe ")]),i("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),i("v-divider",{staticClass:"mx-4"}),i("v-card-title",[t._v("Tonight's availability")])],2)]},proxy:!0},{key:"action-buttons",fn:function(){return[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onCancel}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onSave}},[t._v(" Save ")])]},proxy:!0}])}),i("confirmation-dialog",{ref:"confirmationDialog",attrs:{title:t.confirmDialogTitle,content:t.confirmDialogContent,"yes-text":"Yes!"}})],1)},o=[],r=i(20144),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{border:"top",dismissible:"",type:t.type,value:t.alert,transition:"scale-transition"}},[t._v(" "+t._s(t.message)+" ")])},a=[],l={props:{message:String,type:String},data:function(){return{alert:!1}},methods:{show:function(){var t=this;this.alert=!0,setTimeout((function(){t.alert=!1}),4e3)}}},c=l,h=i(1001),u=i(43453),d=i.n(u),v=i(4367),f=i(23796),p=(i(26699),i(55648)),g=i(98119),m=i(70172),y=i(2936),b=i(48085),_=r.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),C=i(73325),x=i(71824),S=(0,C.Z)(p.Z,y.Z,_).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:(0,f.Z)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(g.Z,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(m.Z,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(m.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=(0,v.Z)((0,v.Z)({},p.Z.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||b.Z.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&(0,x.fK)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),Z=(0,h.Z)(c,s,a,!1,null,"12b3aed4",null),k=Z.exports;d()(Z,{VAlert:S});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.dialog,scrollable:"","max-width":"60%",persistent:""}},[i("v-card",[i("v-card-title",[t._v(t._s(t.title))]),i("v-card-text",{staticStyle:{"max-height":"70vh"}},[t._v(" "+t._s(t.content)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onConfirm}},[t._v(" "+t._s(t.yesText)+" ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onCancel}},[t._v(" "+t._s(t.noText)+" ")])],1)],1)],1)},$=[],I={props:{title:String,content:String,yesText:{type:String,default:"Ok"},noText:{type:String,default:"Cancel"}},methods:{show:function(){this.dialog=!0},hide:function(){this.dialog=!1},onConfirm:function(){this.dialog=!1},onCancel:function(){this.dialog=!1}},data:function(){return{dialog:!1}}},T=I,B=i(63150),A=i(32371),V=i(37118),D=i(4497),H=i(99762),E=(0,h.Z)(T,w,$,!1,null,null,null),L=E.exports;d()(E,{VBtn:B.Z,VCard:A.Z,VCardActions:V.h7,VCardText:V.ZB,VCardTitle:V.EB,VDialog:D.Z,VSpacer:H.Z});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.dialog,scrollable:"","max-width":"60%",persistent:""}},[i("v-card",[i("v-card-title",[t._v(t._s(t.title))]),i("v-divider"),i("v-card-text",{staticStyle:{"min-height":"300px","max-height":"70vh"}},[t._t("content")],2),i("v-divider"),i("v-card-actions",[t._t("action-buttons")],2)],1)],1)},M=[],O={props:{title:String,content:String},methods:{show:function(){this.dialog=!0},hide:function(){this.dialog=!1}},data:function(){return{dialog:!1}}},N=O,P=i(11418),W=(0,h.Z)(N,F,M,!1,null,null,null),z=W.exports;d()(W,{VCard:A.Z,VCardActions:V.h7,VCardText:V.ZB,VCardTitle:V.EB,VDialog:D.Z,VDivider:P.Z});var R=r.Z.extend({name:"AboutMe",components:{CustomAlert:k,CustomDialog:z,ConfirmationDialog:L},data:function(){return{alertMessage:"This is a custom alert!!",alertType:"error",dialogTitle:"Dialog title",dialogContent:"Dialog Content",confirmDialogTitle:"Confirm Dialog",confirmDialogContent:"Are you sure want to perform this action?"}},methods:{openDialog:function(){this.$refs.dialog.show()},openConfirmationPopup:function(){this.$refs.confirmationDialog.show()},showSuccessAlert:function(){this.alertType="success";var t=this.$refs.alert;t.show()},showFailureAlert:function(){this.alertType="error";var t=this.$refs.alert;t.show()},showWarningAlert:function(){this.alertType="warning";var t=this.$refs.alert;t.show()},onCancel:function(){this.$refs.dialog.hide()},onSave:function(){this.$refs.dialog.hide()}}}),Y=R,X=i(82102),j=i(97047),q=i(57003),K=(i(9653),i(37268),i(21249),i(46952)),G=i(44561),J=i(19131),Q=i(89155),U=i(4589),tt=(0,C.Z)(K.Z,G.Z,Q.Z,J.Z,b.Z).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,i=t.large,n=t.light,o=t.medium,r=t.small,s=t.size,a=t.xLarge,l=t.xSmall;return{dark:e,large:i,light:n,medium:o,size:s,small:r,xLarge:a,xSmall:l}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(i){if(!e.readonly){var n=e.genHoverIndex(i,t);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){var i=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var i=this;this.runDelay("open",(function(){i.hoverIndex=i.genHoverIndex(t,e)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(t){var e=this,i=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(i);var n={click:i.click};return this.hover&&(n.mouseenter=function(i){return e.onMouseEnter(i,t)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(i){return e.onMouseEnter(i,t)})),this.$createElement(m.Z,this.setTextColor(this.getColor(i),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(i)])}},render:function(t){var e=this,i=(0,U.MT)(Number(this.length)).map((function(t){return e.genItem(t)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},i)}}),et=i(62877),it=i(25795),nt=i(65907),ot=i(5936),rt=(0,C.Z)(K.Z,G.Z,nt.Z,ot.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-i.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,U.kb)(this.maxWidth),minWidth:(0,U.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,U.sp)(this,"activator",!0)&&(0,x.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=it.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===U.Do.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},(0,f.Z)(t,this.contentClass,!0),(0,f.Z)(t,"menuable__content__active",this.isActive),(0,f.Z)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),st=(0,h.Z)(Y,n,o,!1,null,null,null),at=st.exports;d()(st,{VBtn:B.Z,VCard:A.Z,VCardText:V.ZB,VCardTitle:V.EB,VCol:X.Z,VDivider:P.Z,VImg:j.Z,VProgressLinear:q.Z,VRating:tt,VRow:et.Z,VSpacer:H.Z,VTooltip:rt})}}]);
//# sourceMappingURL=about-legacy.07168075.js.map