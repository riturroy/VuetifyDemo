if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>i(e,r),f={module:{uri:r},exports:t,require:u};s[r]=Promise.all(o.map((e=>f[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"demo-vuetify-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/VuetifyDemo/css/app.521daba9.css",revision:null},{url:"/VuetifyDemo/css/chunk-vendors.50021132.css",revision:null},{url:"/VuetifyDemo/index.html",revision:"68853e55afcdff2f1b85cbb31efdac8e"},{url:"/VuetifyDemo/js/about.5ce6f110.js",revision:null},{url:"/VuetifyDemo/js/app.23d5cfb9.js",revision:null},{url:"/VuetifyDemo/js/chunk-vendors.1de6e3d2.js",revision:null},{url:"/VuetifyDemo/manifest.json",revision:"ce88ff9e7c9d63243f4958dff79119ae"},{url:"/VuetifyDemo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map