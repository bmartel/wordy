if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>c(e,o),f={module:{uri:o},exports:s,require:d};i[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"8cbbf73af6ca3e44b7a848ecf3fa58f0"},{url:"wordy.es.js",revision:"ce55c58873bcdc16d03abeb40691ae1f"},{url:"favicon.svg",revision:"212f0a10c5c35901b108de9cbe03449d"},{url:"favicon.ico",revision:"8ddec83f05190032151676d079c63cb4"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"safari-pinned-tab.svg",revision:"aa595d95df606bfe5f69b1dfd943cc4d"},{url:"apple-touch-icon.png",revision:"7c76519f5e48cedbef000b1fec7b17b0"},{url:"pwa-192x192.png",revision:"9ee3fc35b121e5320da94db111d2ebc9"},{url:"pwa-512x512.png",revision:"cb3e10d42149bcdcb229d3ef7d413694"},{url:"manifest.webmanifest",revision:"c9ce0b18541a1a2a96daa481bb6a2272"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
