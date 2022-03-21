"use strict";(self["webpackChunkdemo_vuetify_app"]=self["webpackChunkdemo_vuetify_app"]||[]).push([[443],{1330:function(t,e,i){i.r(e),i.d(e,{default:function(){return rt}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("v-row",{staticClass:"mt-8"},[i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.openDialog}},"v-btn",o,!1),s),[t._v(" Open Dialog ")])]}}])},[i("span",[t._v(" Open Dialog")])])],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.openConfirmationPopup}},"v-btn",o,!1),s),[t._v(" Open Confirmation Popup ")])]}}])},[i("span",[t._v(" Open Confirmation Popup")])])],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.showSuccessAlert}},"v-btn",o,!1),s),[t._v(" Show Success Alert ")]),i("v-btn",t._g(t._b({staticStyle:{"margin-left":"16px"},attrs:{color:"primary",dark:""},on:{click:t.showWarningAlert}},"v-btn",o,!1),s),[t._v(" Show Warning Alert ")]),i("v-btn",t._g(t._b({staticStyle:{"margin-left":"16px"},attrs:{color:"primary",dark:""},on:{click:t.showFailureAlert}},"v-btn",o,!1),s),[t._v(" Show Failure Alert ")])]}}])},[i("span",[t._v("Show Alert")])])],1)],1),i("custom-alert",{ref:"alert",attrs:{message:t.alertMessage,type:t.alertType}}),i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,content:t.dialogContent},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[i("template",{slot:"progress"},[i("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),i("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),i("v-card-title",[t._v("Cafe Badilico")]),i("v-card-text",[i("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[i("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),i("div",{staticClass:"grey--text ms-4"},[t._v(" 4.5 (413) ")])],1),i("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" $ • Italian, Cafe ")]),i("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),i("v-divider",{staticClass:"mx-4"}),i("v-card-title",[t._v("Tonight's availability")])],2)]},proxy:!0},{key:"action-buttons",fn:function(){return[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onCancel}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onSave}},[t._v(" Save ")])]},proxy:!0}])}),i("confirmation-dialog",{ref:"confirmationDialog",attrs:{title:t.confirmDialogTitle,content:t.confirmDialogContent,"yes-text":"Yes!"}})],1)},o=[],r=i(144),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{border:"top",dismissible:"",type:t.type,value:t.alert,transition:"scale-transition"}},[t._v(" "+t._s(t.message)+" ")])},a=[],l={props:{message:String,type:String},data(){return{alert:!1}},methods:{show(){this.alert=!0,setTimeout((()=>{this.alert=!1}),4e3)}}},c=l,h=i(1001),d=i(3453),u=i.n(d),p=i(5648),v=i(8119),g=i(172),m=i(2936),f=i(8085),y=r.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),b=i(3325),_=i(1824),C=(0,b.Z)(p.Z,m.Z,y).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(v.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(g.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(g.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...p.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||f.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,_.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),x=(0,h.Z)(c,n,a,!1,null,"12b3aed4",null),S=x.exports;u()(x,{VAlert:C});var k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.dialog,scrollable:"","max-width":"60%",persistent:""}},[i("v-card",[i("v-card-title",[t._v(t._s(t.title))]),i("v-card-text",{staticStyle:{"max-height":"70vh"}},[t._v(" "+t._s(t.content)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onConfirm}},[t._v(" "+t._s(t.yesText)+" ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onCancel}},[t._v(" "+t._s(t.noText)+" ")])],1)],1)],1)},$=[],w={props:{title:String,content:String,yesText:{type:String,default:"Ok"},noText:{type:String,default:"Cancel"}},methods:{show(){this.dialog=!0},hide(){this.dialog=!1},onConfirm(){this.dialog=!1},onCancel(){this.dialog=!1}},data(){return{dialog:!1}}},Z=w,I=i(3150),T=i(2371),B=i(7118),A=i(4497),V=i(9762),D=(0,h.Z)(Z,k,$,!1,null,null,null),H=D.exports;u()(D,{VBtn:I.Z,VCard:T.Z,VCardActions:B.h7,VCardText:B.ZB,VCardTitle:B.EB,VDialog:A.Z,VSpacer:V.Z});var E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.dialog,scrollable:"","max-width":"60%",persistent:""}},[i("v-card",[i("v-card-title",[t._v(t._s(t.title))]),i("v-divider"),i("v-card-text",{staticStyle:{"min-height":"300px","max-height":"70vh"}},[t._t("content")],2),i("v-divider"),i("v-card-actions",[t._t("action-buttons")],2)],1)],1)},L=[],F={props:{title:String,content:String},methods:{show(){this.dialog=!0},hide(){this.dialog=!1}},data(){return{dialog:!1}}},M=F,O=i(1418),N=(0,h.Z)(M,E,L,!1,null,null,null),P=N.exports;u()(N,{VCard:T.Z,VCardActions:B.h7,VCardText:B.ZB,VCardTitle:B.EB,VDialog:A.Z,VDivider:O.Z});var W=r.Z.extend({name:"AboutMe",components:{CustomAlert:S,CustomDialog:P,ConfirmationDialog:H},data(){return{alertMessage:"This is a custom alert!!",alertType:"error",dialogTitle:"Dialog title",dialogContent:"Dialog Content",confirmDialogTitle:"Confirm Dialog",confirmDialogContent:"Are you sure want to perform this action?"}},methods:{openDialog(){this.$refs.dialog.show()},openConfirmationPopup(){this.$refs.confirmationDialog.show()},showSuccessAlert(){this.alertType="success";const t=this.$refs.alert;t.show()},showFailureAlert(){this.alertType="error";const t=this.$refs.alert;t.show()},showWarningAlert(){this.alertType="warning";const t=this.$refs.alert;t.show()},onCancel(){this.$refs.dialog.hide()},onSave(){this.$refs.dialog.hide()}}}),z=W,R=i(2102),Y=i(7047),X=i(7003),j=i(6952),q=i(4561),K=i(9131),G=i(9155),J=i(4589),Q=(0,b.Z)(j.Z,q.Z,G.Z,K.Z,f.Z).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,large:e,light:i,medium:s,small:o,size:r,xLarge:n,xSmall:a}=this.$props;return{dark:t,large:e,light:i,medium:s,size:r,small:o,xLarge:n,xSmall:a}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const i=this.genHoverIndex(e,t);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let i=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",(()=>{this.hoverIndex=this.genHoverIndex(t,e)}))},onMouseLeave(){this.runDelay("close",(()=>this.hoverIndex=-1))},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const i={click:e.click};return this.hover&&(i.mouseenter=e=>this.onMouseEnter(e,t),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(g.Z,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(e)])}},render(t){const e=(0,J.MT)(Number(this.length)).map((t=>this.genItem(t)));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}}),U=i(2877),tt=i(5795),et=i(5907),it=i(5936),st=(0,b.Z)(j.Z,q.Z,et.Z,it.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||i?o=s+t.width/2-e.width/2:(this.left||this.right)&&(o=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,J.kb)(this.maxWidth),minWidth:(0,J.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,J.sp)(this,"activator",!0)&&(0,_.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=tt.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===J.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}}),ot=(0,h.Z)(z,s,o,!1,null,null,null),rt=ot.exports;u()(ot,{VBtn:I.Z,VCard:T.Z,VCardText:B.ZB,VCardTitle:B.EB,VCol:R.Z,VDivider:O.Z,VImg:Y.Z,VProgressLinear:X.Z,VRating:Q,VRow:U.Z,VSpacer:V.Z,VTooltip:st})}}]);
//# sourceMappingURL=about.f3c09bad.js.map