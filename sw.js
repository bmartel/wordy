if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const r=e=>n(e,o),a={module:{uri:o},exports:t,require:r};s[o]=Promise.all(i.map((e=>a[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-de2c942e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/config.d171c315.js",revision:null},{url:"assets/index.5d9af79d.js",revision:null},{url:"assets/vendor.8e6c5f1b.js",revision:null},{url:"index.html",revision:"b879b75af1fba3ecf48213aeab364ba1"},{url:"favicon.svg",revision:"212f0a10c5c35901b108de9cbe03449d"},{url:"favicon.ico",revision:"8ddec83f05190032151676d079c63cb4"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"safari-pinned-tab.svg",revision:"aa595d95df606bfe5f69b1dfd943cc4d"},{url:"apple-touch-icon.png",revision:"7c76519f5e48cedbef000b1fec7b17b0"},{url:"pwa-192x192.png",revision:"9ee3fc35b121e5320da94db111d2ebc9"},{url:"pwa-512x512.png",revision:"cb3e10d42149bcdcb229d3ef7d413694"},{url:"manifest.webmanifest",revision:"c9ce0b18541a1a2a96daa481bb6a2272"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
