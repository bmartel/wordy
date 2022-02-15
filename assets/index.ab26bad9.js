var Nt=Object.defineProperty,Yt=Object.defineProperties;var Wt=Object.getOwnPropertyDescriptors;var bt=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable;var yt=(t,e,a)=>e in t?Nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,x=(t,e)=>{for(var a in e||(e={}))Ht.call(e,a)&&yt(t,a,e[a]);if(bt)for(var a of bt(e))Kt.call(e,a)&&yt(t,a,e[a]);return t},J=(t,e)=>Yt(t,Wt(e));import{v as Vt,n as Bt,l as Ut,r as u,e as h,s as p,$ as n,a as v,o as Ft,t as w}from"./vendor.8e6c5f1b.js";const qt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};qt();function Xt(t={}){const{immediate:e=!1,onNeedRefresh:a,onOfflineReady:r,onRegistered:s,onRegisterError:o}=t;let i;const f=async(g=!0)=>{};return"serviceWorker"in navigator&&(i=new Vt("./sw.js",{scope:"./",type:"classic"}),i.addEventListener("activated",g=>{g.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:e}).then(g=>{s==null||s(g)}).catch(g=>{o==null||o(g)})),f}const Zt="modulepreload",xt={},Jt="./",Qt=function(e,a){return!a||a.length===0?e():Promise.all(a.map(r=>{if(r=`${Jt}${r}`,r in xt)return;xt[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Zt,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((f,g)=>{i.addEventListener("load",f),i.addEventListener("error",g)})})).then(()=>e())},te=Qt(()=>import("./config.d171c315.js"),[]);let Q={};(async()=>{Q=await te})();const M={q:"empty",w:"empty",e:"empty",r:"empty",t:"empty",y:"empty",u:"empty",i:"empty",o:"empty",p:"empty",a:"empty",s:"empty",d:"empty",f:"empty",g:"empty",h:"empty",j:"empty",k:"empty",l:"empty",z:"empty",x:"empty",c:"empty",v:"empty",b:"empty",n:"empty",m:"empty"},ee={Enter:!0,Backspace:!0},se=x(x({},M),ee),kt=60*10*1e3,$=5,Y=6,$t=600,_t=750,ae={empty:"\u2B1B",absent:"\u{1F7E6}",present:"\u{1F7E8}",correct:"\u{1F7E9}"};var z;(function(t){t[t.INVALID_CHAR_LEN=0]="INVALID_CHAR_LEN",t[t.INVALID_WORD=1]="INVALID_WORD"})(z||(z={}));let d=null;const re=t=>{d=t},oe=()=>{d=null},ie=t=>{const e=document.createElement("output");return e.innerText=t,e.classList.add("toast"),e.setAttribute("role","status"),e},ne=t=>{const e=(d==null?void 0:d.offsetHeight)||0;d==null||d.appendChild(t);const r=((d==null?void 0:d.offsetHeight)||0)-e;d==null||d.animate([{transform:`translateY(${r}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"})},le=t=>{const{matches:e}=window.matchMedia("(prefers-reduced-motion: no-preference)");(d==null?void 0:d.children.length)&&e?ne(t):d==null||d.appendChild(t)},W=t=>{const e=ie(t);return le(e),new Promise(async a=>{await Promise.allSettled(e.getAnimations().map(r=>r.finished)),d==null||d.removeChild(e),a()})};function de(t,e,a,r){return function(){t>>>=0,e>>>=0,a>>>=0,r>>>=0;let s=t+e|0;return t=e^e>>>9,e=a+(a<<3)|0,a=a<<21|a>>>11,r=r+1|0,s=s+r|0,a=a+s|0,(s>>>0)/4294967296}}function ce(t){for(var e=0,a=1779033703^t.length;e<t.length;e++)a=Math.imul(a^t.charCodeAt(e),3432918353),a=a<<13|a>>>19;return function(){return a=Math.imul(a^a>>>16,2246822507),a=Math.imul(a^a>>>13,3266489909),(a^=a>>>16)>>>0}}const he={alg:"A256GCM",ext:!0,k:"6KWvelTztanQl8-rJ1a1f2B_VcuIZDIrjBsoUiOY-sc",key_ops:["encrypt","decrypt"],kty:"oct"};let H=null;(async()=>{H||(H=await crypto.subtle.importKey("jwk",he,"AES-GCM",!0,["encrypt","decrypt"]))})();const ue=t=>new TextEncoder().encode(t),pe=t=>new TextDecoder().decode(t),Pt=async t=>{const e=ue(t),a=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:a},H,e);return[a,r]},ve=async(t,e)=>{if(!e||!t)return"";const a=await crypto.subtle.decrypt({name:"AES-GCM",iv:e},H,t);return pe(new Uint8Array(a))},ge=async(t,e)=>typeof t=="string"?t:await ve(t,e),we=async(t,e)=>typeof t=="string"?await Pt(t):[e||new Uint8Array(12),t],fe=()=>Bt(),me=t=>{const e=ce(t);return de(e(),e(),e(),e())},tt=(t,e=0)=>Array.from({length:e},t),be=()=>tt(()=>"empty",$),Ot=(t="",e=void 0)=>tt(()=>({letters:t,status:"tbd",result:e||[...be()]}),Y),et=Ot(),jt=et[0],k=Ut.createInstance({name:"wordy"});let st=0;const ye=async t=>{const{words:e}=Q;t=t||fe(),st||(st=e.length);const a=me(t);return{word:e[Math.floor(a()*st)],seed:t}},xe=async t=>{const{words:e}=Q;return e.indexOf(t)>-1},Ct=async t=>{const{word:e,seed:a}=await ye(t),[r,s]=await Pt(e);return{id:a,guess:0,guesses:Ot(),solution:s,iv:r,seed:a,letters:M,status:"idle"}},_=(async()=>{var vt,gt,wt,ft;const t=new URLSearchParams(location.search).get("seed")||void 0,e=await k.getItem("activeGameId")||"";let a=await k.getItem("games")||{};const r=!!(e&&((vt=a==null?void 0:a[e])==null?void 0:vt.start)&&!((gt=a==null?void 0:a[e])==null?void 0:gt.end)),s=!!(t&&t in a&&((wt=a[t])==null?void 0:wt.end)),o=!!(e&&e in a&&!((ft=a[e])==null?void 0:ft.end)),i=!s&&!r;let f=await k.getItem("stats")||{},g=r||!t&&o?a[e]:await Ct(s?void 0:t);const pt=t&&r?"game-in-progress":t&&s?"seed-played":e&&f.lastGameId===e?"stats":await k.getItem("shown_help")?"":"help";if(pt==="help"&&await k.setItem("shown_help","1"),t){const c=new URL(window.location.href);c.searchParams.delete("seed"),history.pushState({path:c.href},"",c.href)}const Z=async(c,l=!0)=>{var C,S;g=x(x({},a[c.id]),c),l&&!g.start&&(g.start=Date.now());const y=((C=a[c.id])==null?void 0:C.solution)||g.solution,O=((S=a[c.id])==null?void 0:S.iv)||g.iv,[j,G]=await we(y,O);a[c.id]=J(x({},g),{solution:G,iv:j}),await k.setItem("games",a)},Tt=(c,l,y,O)=>{const j=l-Y/Y;return(c-c*j)*O*100*((kt-y)/kt)},At=async c=>{const l=a[c],y=f.distribution||{},O=(l.guess+(f.avgGuess||0))/2,j=l.status==="win"?(f.streak||0)+1:0,G=Math.max(j,f.maxStreak||0),C=(f.wins||0)+(l.status==="win"?1:0),S=(f.losses||0)+(l.status==="lose"?1:0),Lt=C/(C+S),mt=((l.end||0)-(l.start||0)+(f.avgDuration||0))/2;f={streak:j,lastResult:l.status==="win"?"win":"lose",lastGameId:l.id,lastGuess:l.guess,avgGuess:O,avgDuration:mt,maxStreak:G,wins:C,losses:S,rating:Tt(G,O,mt,Lt),distribution:{0:(y[0]||0)+(l.status==="win"&&l.guess===0?1:0),1:(y[1]||0)+(l.status==="win"&&l.guess===1?1:0),2:(y[2]||0)+(l.status==="win"&&l.guess===2?1:0),3:(y[3]||0)+(l.status==="win"&&l.guess===3?1:0),4:(y[4]||0)+(l.status==="win"&&l.guess===4?1:0),5:(y[5]||0)+(l.status==="win"&&l.guess===5?1:0)}},await k.setItem("stats",f)};return(!e||i)&&(await k.setItem("activeGameId",g.id),await Z(g,!1)),{games:()=>a,active:()=>g,stats:()=>f,history:()=>Object.values(a).filter(c=>!!c.end).sort((c,l)=>l.end-c.end),modal:pt,saveGame:Z,saveStats:At,generateGame:async()=>{const c=await Ct();return await k.setItem("activeGameId",c.id),await Z(c,!1),c}}})(),zt=t=>t.map(e=>e.result.map(a=>ae[a]).join("")).join(`
`),It=async(t,e)=>{const a=new URL(location.href);a.searchParams.set("seed",e);try{navigator.share?(await navigator.share({url:a.toString(),title:`Puzzle ${e}`,text:t}),W("Shared puzzle result")):(t=`
${a.toString()}

${t}
    `,await navigator.clipboard.writeText(t),W("Copied puzzle result"))}catch(r){W(r.message)}};var ke=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Dt=(t,e,a,r)=>{for(var s=r>1?void 0:r?$e(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&ke(e,a,s),s};let K=class extends p{constructor(){super();const t=localStorage.getItem("theme_dark");t!==null?this.dark=t==="on":(this.dark=window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme_dark",this.dark?"on":""))}updateTheme(t){this.dark=t.detail.on}connectedCallback(){super.connectedCallback(),setTimeout(()=>{re(this.renderRoot.querySelector(".toast-layer"))},0)}disconnectedCallback(){super.disconnectedCallback(),oe()}render(){return n`
      <section class="toast-layer"></section>
      <main @wd-dark-theme=${this.updateTheme}>
        <slot></slot>
      </main>
    `}};K.styles=u`
    :host {
      display: block;
      box-sizing: border-box;
      --color-tone-1: #d7e9f8;
      --color-tone-2: #81a8d5;
      --color-tone-3: #577bac;
      --color-tone-4: #345787;
      --color-tone-5: #213d6d;
      --color-tone-6: #142a5a;
      --color-tone-7: #060f1a;

      --green: #6aaa64;
      --darkendGreen: #538d4e;
      --yellow: #c9b458;
      --darkendYellow: #b39200;
      --red: #fd5731;
      --white: #fff;
      --black: #000;

      --color-present: var(--yellow);
      --color-correct: var(--green);
      --color-absent: var(--color-tone-3);
      --color-error: var(--red);
      --cell-text-color: var(--color-tone-7);
      --key-text-color: var(--color-tone-7);
      --key-evaluated-text-color: var(--white);
      --key-bg: var(--color-tone-1);
      --key-bg-present: var(--color-present);
      --key-bg-correct: var(--color-correct);
      --key-bg-absent: var(--color-absent);
      --modal-content-color: var(--color-tone-7);
      --modal-content-bg: var(--white);
      --toast-content-color: var(--black);
      --toast-content-bg: var(--white);
      --shadow-color: rgba(0, 0, 0, 0.16);
      --overlay-bg: rgba(255, 255, 255, 0.7);

      --wd-background-color: var(--white);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-5);
      --wd-switch-bg: var(--color-tone-2);
      --wd-border-color: var(--color-tone-1);
      --wd-border-color-emphasis: var(--color-tone-2);
      --wd-icon-color: var(--color-tone-7);
      --wd-share-color: var(--color-tone-6);
      --wd-share-bg: var(--color-tone-1);
      --wd-fireworks-base-color: #fff9a3;

      --wd-max-width: 500px;
      --wd-header-height: 50px;
      --wd-keyboard-height: 200px;
      --wd-board-font-size: 32px;
    }
    :host([dark="true"]) {
      --color-present: var(--darkendYellow);
      --color-correct: var(--darkendGreen);
      --color-absent: var(--color-tone-6);
      --cell-text-color: var(--white);
      --key-text-color: var(--white);
      --key-evaluated-text-color: var(--white);
      --key-bg: var(--color-tone-3);
      --key-bg-present: var(--color-present);
      --key-bg-correct: var(--color-correct);
      --key-bg-absent: var(--color-absent);
      --modal-content-bg: var(--color-tone-7);
      --modal-content-color: var(--color-tone-1);
      --toast-content-color: var(--white);
      --toast-content-bg: var(--black);
      --shadow-color: rgba(215, 233, 248, 0.13);
      --overlay-bg: rgba(0, 0, 0, 0.7);

      --wd-background-color: var(--color-tone-7);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-2);
      --wd-switch-bg: var(--color-tone-5);
      --wd-border-color: var(--color-tone-6);
      --wd-border-color-emphasis: var(--color-tone-4);
      --wd-icon-color: var(--color-tone-1);
      --wd-share-color: var(--color-tone-1);
      --wd-share-bg: var(--color-tone-6);
      --wd-fireworks-base-color: var(--white);
    }
    @media (max-height: 600px) {
      :host {
        --wd-board-font-size: 28px;
      }
    }
    @media (max-height: 500px) {
      :host {
        --wd-board-font-size: 24px;
      }
    }
    main {
      height: 100%;
      background-color: var(--wd-background-color);
      color: var(--wd-color);
    }
    .toast-layer {
      position: fixed;
      z-index: 1;
      inset-block-end: 0;
      inset-inline: 0;
      padding-block-end: 25vh;
      display: grid;
      justify-items: center;
      justify-content: center;
      gap: 1vh;
      pointer-events: none;
    }
    .toast {
      --_duration: 3s;
      --_travel-distance: 0;
      color: var(--toast-content-color);
      background-color: var(--toast-content-bg);
      will-change: transform;
      animation: fade-in 0.3s ease, slide-in 0.3s ease,
        fade-out 0.3s ease var(--_duration);
      max-inline-size: min(25ch, 90vw);
      padding-block: 0.5ch;
      padding-inline: 1ch;
      border-radius: 5px;
      font-size: 1.25rem;
      box-shadow: var(--shadow-color) 0px 1px 4px;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
    }
    @keyframes fade-out {
      to {
        opacity: 0;
      }
    }
    @keyframes slide-in {
      from {
        transform: translateY(var(--_travel-distance, 10px));
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      .toast {
        --_travel-distance: 5vh;
      }
    }
  `;Dt([h({reflect:!0})],K.prototype,"dark",2);K=Dt([v("wd-theme")],K);var _e=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,at=(t,e,a,r)=>{for(var s=r>1?void 0:r?Pe(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&_e(e,a,s),s};const Oe={puzzle:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>',backspace:'<path stroke-linecap="round" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path>',stats:'<path fill="none" stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',settings:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',help:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',refresh:'<path fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>',share:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>',x:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>',circlex:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>',circlecheck:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'},Gt={sm:20,md:24,lg:28};let R=class extends p{constructor(){super(...arguments);this.name="",this.size="md"}render(){return n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${Gt[this.size]}
        width=${Gt[this.size]}
        viewBox="0 0 24 24"
      >
        ${Ft(Oe[this.name])}
      </svg>
    `}};R.styles=u`
    :host {
      display: inline-block;
      height: 24px;
      width: 24px;
      pointer-events: none;
      user-select: none;
    }
  `;at([h()],R.prototype,"name",2);at([h()],R.prototype,"size",2);R=at([v("wd-icon")],R);var je=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,ze=(t,e,a,r)=>{for(var s=r>1?void 0:r?Ce(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&je(e,a,s),s};let rt=class extends p{showOverlay(t,e,a){t.preventDefault(),this.dispatchEvent(new CustomEvent(`wd-${e}`,{detail:J(x({},a),{open:!0}),bubbles:!0,composed:!0}))}showHelp(t){this.showOverlay(t,"page",{content:"help"})}showStats(t){this.showOverlay(t,"modal",{content:"stats"})}showSettings(t){this.showOverlay(t,"page",{content:"settings"})}showHistory(t){this.showOverlay(t,"page",{content:"history"})}render(){return n`
      <header>
        <div class="menu">
          <button
            @click=${this.showHelp}
            id="help-button"
            class="icon"
            aria-label="help"
          >
            <wd-icon name="help"></wd-icon>
          </button>
          <button
            @click=${this.showHistory}
            id="statistics-button"
            class="icon"
            aria-label="statistics"
          >
            <wd-icon name="puzzle"></wd-icon>
          </button>
        </div>
        <div class="title">🟨🟩🟨🟩🟩</div>
        <div class="menu">
          <button
            @click=${this.showStats}
            id="statistics-button"
            class="icon"
            aria-label="statistics"
          >
            <wd-icon name="stats"></wd-icon>
          </button>
          <button
            @click=${this.showSettings}
            id="settings-button"
            class="icon"
            aria-label="settings"
          >
            <wd-icon name="settings"></wd-icon>
          </button>
        </div>
      </header>
    `}};rt.styles=u`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--wd-header-height);
      color: var(--wd-icon-color);
      border-bottom: 1px solid var(--wd-border-color);
      gap: 4px;
      padding-inline: 2px;
    }
    .title {
      font-weight: 400;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: 0.1em;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      pointer-events: none;
    }
    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }
  `;rt=ze([v("wd-header")],rt);var Ie=Object.defineProperty,De=Object.getOwnPropertyDescriptor,V=(t,e,a,r)=>{for(var s=r>1?void 0:r?De(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ie(e,a,s),s};let I=class extends p{constructor(){super(...arguments);this.status="empty",this.animation="",this.letter=""}render(){return n` <div class="cell">${this.letter}</div> `}};I.styles=u`
    :host {
      display: inline-block;
    }
    .cell {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--cell-text-color);
      text-transform: uppercase;
      user-select: none;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
      border: 2px solid transparent;
      will-change: color, background-color, border-color;
      transition-property: color, background-color, border-color;
      transition-duration: 0ms;
      transition-delay: var(--transition-delay, 150ms);
      transition-timing-function: ease-out;
    }
    .cell::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .cell {
      border-color: var(--wd-border-color);
    }
    :host([status="tbd"]) > .cell {
      background-color: var(--wd-background-color);
      border-color: var(--wd-border-color-emphasis);
    }
    :host([status="correct"]) > .cell {
      background-color: var(--color-correct);
      color: var(--key-evaluated-text-color);
    }
    :host([status="present"]) > .cell {
      background-color: var(--color-present);
      color: var(--key-evaluated-text-color);
    }
    :host([status="absent"]) > .cell {
      background-color: var(--color-absent);
      color: var(--key-evaluated-text-color);
    }
    :host([animation="pop"]) > .cell {
      animation-name: PopIn;
      animation-duration: 100ms;
    }
    :host([animation="bounce"]) > .cell {
      animation-name: Bounce;
      animation-duration: ${_t}ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }

    @keyframes Bounce {
      0%,
      20% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      50% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(-15px);
      }
      80% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes PopIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }

      40% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    :host([animation="flip"]) > .cell {
      animation-name: Flip;
      animation-duration: 300ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }
    @keyframes Flip {
      0% {
        transform: rotateY(0);
      }
      50% {
        transform: rotateY(-90deg);
      }
      100% {
        transform: rotateY(0);
      }
    }
  `;V([h({reflect:!0})],I.prototype,"status",2);V([h({reflect:!0})],I.prototype,"animation",2);V([h()],I.prototype,"letter",2);I=V([v("wd-cell")],I);var Ge=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,E=(t,e,a,r)=>{for(var s=r>1?void 0:r?Se(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ge(e,a,s),s};let P=class extends p{constructor(){super(...arguments);this.guess=jt.letters,this.result=jt.result,this.status="idle",this.evaluated=!1,this.revealed=!1}updated(){!this.revealed&&this.status==="reveal"&&(this.revealed=!0),this.revealed&&this.evaluated&&(this.revealed=!1)}render(){let t=this.guess.split("");t=[...t,...tt(()=>"",$-t.length)];const e=this.status==="reveal"&&!this.revealed;return n`
      <div class="row">
        <wd-cell
          style="--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"150ms":"0ms"};"
          .letter=${t[0]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[0]:t[0]!==""?"tbd":"empty"}
          .animation=${t[0]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:${this.status==="win"&&this.revealed?"150ms":"300ms"};--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"450ms":"0ms"};"
          .letter=${t[1]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[1]:t[1]!==""?"tbd":"empty"}
          .animation=${t[1]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:${this.status==="win"&&this.revealed?"300ms":"600ms"};--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"750ms":"0ms"};"
          .letter=${t[2]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[2]:t[2]!==""?"tbd":"empty"}
          .animation=${t[2]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:${this.status==="win"&&this.revealed?"450ms":"900ms"};--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"1050ms":"0ms"};"
          .letter=${t[3]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[3]:t[3]!==""?"tbd":"empty"}
          .animation=${t[3]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:${this.status==="win"&&this.revealed?"600ms":"1200ms"};--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"1350ms":"0ms"};"
          .letter=${t[4]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[4]:t[4]!==""?"tbd":"empty"}
          .animation=${t[4]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
      </div>
    `}};P.styles=u`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${$t}ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(${$}, 1fr);
      grid-gap: 5px;
    }
    @keyframes Shake {
      10%,
      90% {
        transform: translateX(-1px);
      }

      20%,
      80% {
        transform: translateX(2px);
      }

      30%,
      50%,
      70% {
        transform: translateX(-4px);
      }

      40%,
      60% {
        transform: translateX(4px);
      }
    }
  `;E([h()],P.prototype,"guess",2);E([h()],P.prototype,"result",2);E([h({reflect:!0})],P.prototype,"status",2);E([h()],P.prototype,"evaluated",2);P=E([v("wd-row")],P);var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,B=(t,e,a,r)=>{for(var s=r>1?void 0:r?Re(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Me(e,a,s),s};let D=class extends p{constructor(){super(...arguments);this.guess=0,this.status="idle",this.guesses=et}render(){return n`
      <div class="board">
        <wd-row
          .guess=${this.guesses[0].letters}
          .result=${this.guesses[0].result}
          .status=${this.guess===0?this.status:this.guesses[0].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[0].status==="evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[1].letters}
          .result=${this.guesses[1].result}
          .status=${this.guess===1?this.status:this.guesses[1].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[1].status==="evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[2].letters}
          .result=${this.guesses[2].result}
          .status=${this.guess===2?this.status:this.guesses[2].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[2].status==="evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[3].letters}
          .result=${this.guesses[3].result}
          .status=${this.guess===3?this.status:this.guesses[3].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[3].status==="evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[4].letters}
          .result=${this.guesses[4].result}
          .status=${this.guess===4?this.status:this.guesses[4].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[4].status==="evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[5].letters}
          .result=${this.guesses[5].result}
          .status=${this.guess===5?this.status:this.guesses[5].status==="evaluated"?"reveal":void 0}
          .evaluated=${this.guesses[5].status==="evaluated"}
        ></wd-row>
      </div>
    `}};D.styles=u`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
      box-sizing: border-box;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
    }
    .board {
      width: 10.9375em;
      height: 13.125em;
      display: grid;
      grid-template-rows: repeat(${$}, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;B([h()],D.prototype,"guess",2);B([h()],D.prototype,"status",2);B([h()],D.prototype,"guesses",2);D=B([v("wd-board")],D);var Ee=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,St=(t,e,a,r)=>{for(var s=r>1?void 0:r?Te(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ee(e,a,s),s};let U=class extends p{constructor(){super(...arguments);this.letters=M}createRenderRoot(){const t=super.createRenderRoot(),e=a=>{var s;a.preventDefault();const{key:r=""}=((s=a==null?void 0:a.target)==null?void 0:s.dataset)||{};se[r]&&window.dispatchEvent(new KeyboardEvent("keydown",{key:r}))};return t.addEventListener("click",e),t}render(){return n`
      <div id="keyboard">
        <div class="row">
          <button title="Q" data-key="q" data-state=${this.letters.q}>q</button>
          <button title="W" data-key="w" data-state=${this.letters.w}>w</button>
          <button title="E" data-key="e" data-state=${this.letters.e}>e</button>
          <button title="R" data-key="r" data-state=${this.letters.r}>r</button>
          <button title="T" data-key="t" data-state=${this.letters.t}>t</button>
          <button title="Y" data-key="y" data-state=${this.letters.y}>y</button>
          <button title="U" data-key="u" data-state=${this.letters.u}>u</button>
          <button title="I" data-key="i" data-state=${this.letters.i}>i</button>
          <button title="O" data-key="o" data-state=${this.letters.o}>o</button>
          <button title="P" data-key="p" data-state=${this.letters.p}>p</button>
        </div>
        <div class="row">
          <div class="spacer half"></div>
          <button title="A" data-key="a" data-state=${this.letters.a}>a</button>
          <button title="S" data-key="s" data-state=${this.letters.s}>s</button>
          <button title="D" data-key="d" data-state=${this.letters.d}>d</button>
          <button title="F" data-key="f" data-state=${this.letters.f}>f</button>
          <button title="G" data-key="g" data-state=${this.letters.g}>g</button>
          <button title="H" data-key="h" data-state=${this.letters.h}>h</button>
          <button title="J" data-key="j" data-state=${this.letters.j}>j</button>
          <button title="K" data-key="k" data-state=${this.letters.k}>k</button>
          <button title="L" data-key="l" data-state=${this.letters.l}>l</button>
          <div class="spacer half"></div>
        </div>
        <div class="row">
          <button title="Enter" data-key="Enter" class="one-and-a-half">
            enter
          </button>
          <button title="Z" data-key="z" data-state=${this.letters.z}>z</button>
          <button title="X" data-key="x" data-state=${this.letters.x}>x</button>
          <button title="C" data-key="c" data-state=${this.letters.c}>c</button>
          <button title="V" data-key="v" data-state=${this.letters.v}>v</button>
          <button title="B" data-key="b" data-state=${this.letters.b}>b</button>
          <button title="N" data-key="n" data-state=${this.letters.n}>n</button>
          <button title="M" data-key="m" data-state=${this.letters.m}>m</button>
          <button
            title="Backspace"
            data-key="Backspace"
            class="one-and-a-half"
            role="button"
            aria-label="backspace"
          >
            <wd-icon name="backspace" size="lg"></wd-icon>
          </button>
        </div>
      </div>
    `}};U.styles=u`
    :host {
      height: var(--keyboard-height);
    }
    #keyboard {
      margin: 0 8px;
      user-select: none;
    }

    .sr-only {
      displ
    }
    .row {
      display: flex;
      width: 100%;
      margin: 0 auto 8px;
      touch-action: manipulation;
    }

    button {
      font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    }

    button:focus {
      outline: none;
    }

    button.fade {
      transition: background-color 0.1s ease, color 0.1s ease;
    }

    button:last-of-type {
      margin: 0;
    }

    .half {
      flex: 0.5;
    }

    .one {
      flex: 1;
    }

    .one-and-a-half {
      flex: 1.5;
      font-size: 12px;
    }

    .two {
      flex: 2;
    }

    wd-icon[name="backspace"] {
      height: 28px;
      width: 28px;
    }

    button[data-state="correct"] {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="present"] {
      background-color: var(--key-bg-present);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="absent"] {
      background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
    }
  `;St([h()],U.prototype,"letters",2);U=St([v("wd-keyboard")],U);var Ae=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Ne=(t,e,a,r)=>{for(var s=r>1?void 0:r?Le(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ae(e,a,s),s};let ot=class extends p{render(){return n`
      <section>
        <div class="instructions">
          <p>Guess the <strong>WORD</strong> in 6 tries.</p>
          <p>
            Each guess must be a valid 5 letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the cells will change to show how
            close your guess was to the word.
          </p>
          <p>
            Revealed letters which are not found within the hidden word cannot
            be used in further guesses.
          </p>
          <div class="examples">
            <p><strong>Examples</strong></p>
            <div class="example">
              <div class="row">
                <wd-cell letter="b" status="correct" animation="flip"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="i"></wd-cell>
                <wd-cell letter="n"></wd-cell>
                <wd-cell letter="g"></wd-cell>
              </div>
              <p>
                The letter <strong>B</strong> is in the word and in the correct
                spot.
              </p>
            </div>
            <div class="example">
              <div class="row">
                <wd-cell letter="w"></wd-cell>
                <wd-cell letter="o" status="present" animation="flip"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="d"></wd-cell>
                <wd-cell letter="y"></wd-cell>
              </div>
              <p>
                The letter <strong>O</strong> is in the word but in the wrong
                spot.
              </p>
            </div>
            <div class="example">
              <div class="row">
                <wd-cell letter="b"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="a"></wd-cell>
                <wd-cell letter="i" status="absent" animation="flip"></wd-cell>
                <wd-cell letter="n"></wd-cell>
              </div>
              <p>
                The letter <strong>I</strong> is not in the word in any spot.
              </p>
            </div>
          </div>
          <p>
            <strong>Solve the word to continue playing!<strong>
          </p>
        </div>
      </section>
    `}};ot.styles=u`
    :host {
      color: var(--modal-content-color);
    }

    .instructions {
      font-size: 14px;
    }

    .examples {
      border-bottom: 1px solid var(--wd-border-color);
      border-top: 1px solid var(--wd-border-color);
    }

    .example {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    wd-cell {
      width: 40px;
      height: 40px;
    }

    :host([page]) section {
      padding: 16px;
      padding-top: 0px;
    }
  `;ot=Ne([v("wd-help")],ot);var Ye=Object.defineProperty,We=Object.getOwnPropertyDescriptor,He=(t,e,a,r)=>{for(var s=r>1?void 0:r?We(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ye(e,a,s),s};let it=class extends p{render(){return n`
      <div class="container">
        <h1>Game Already Played</h1>
        <div class="content">
          <p>
            You have already played the game generated from the shared link.
            Each game is uniquely generated for the user.
          </p>
          <p>
            Upon completion (win or lose) you may share this game with others,
            and each player is allowed to play the shared game only once.
          </p>
          <p>You are not allowed to replay your own shared game link.</p>
        </div>
      </div>
    `}};it.styles=u`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 0;
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      margin: 12px 0;
    }
    .content {
      flex: 1;
    }
  `;it=He([v("wd-seed-played")],it);var Ke=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Be=(t,e,a,r)=>{for(var s=r>1?void 0:r?Ve(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ke(e,a,s),s};let nt=class extends p{render(){return n`
      <div class="container">
        <h1>Game In Progress</h1>
        <div class="content">
          <p>
            You are currently in the middle of an active game. To load a game
            from a shared link, you must first complete the current game.
          </p>
        </div>
      </div>
    `}};nt.styles=u`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 0;
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      margin: 12px 0;
    }
    .content {
      flex: 1;
    }
  `;nt=Be([v("wd-game-in-progress")],nt);var Ue=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,lt=(t,e,a,r)=>{for(var s=r>1?void 0:r?Fe(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ue(e,a,s),s};let T=class extends p{constructor(){super(...arguments);this.checked=!1,this.disabled=!1}render(){return n`
      <div class="container">
        <label><slot></slot></label>
        <div class="switch">
          <span class="knob"></span>
        </div>
      </div>
    `}};T.styles=u`
    .container {
      display: flex;
      justify-content: space-between;
    }
    .switch {
      height: 20px;
      width: 32px;
      vertical-align: middle;
      background: var(--wd-switch-bg);
      border-radius: 999px;
      display: block;
      position: relative;
    }
    .knob {
      display: block;
      position: absolute;
      left: 2px;
      top: 2px;
      height: calc(100% - 4px);
      width: 50%;
      border-radius: 8px;
      background: var(--white);
      transform: translateX(0);
      transition: transform 0.3s;
    }
    :host([checked="true"]) .switch {
      background: var(--color-correct);
    }
    :host([checked="true"]) .knob {
      transform: translateX(calc(100% - 4px));
    }
    :host([disabled="true"]) .switch {
      opacity: 0.5;
    }
  `;lt([h({reflect:!0})],T.prototype,"checked",2);lt([h({reflect:!0})],T.prototype,"disabled",2);T=lt([v("wd-switch")],T);var qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Mt=(t,e,a,r)=>{for(var s=r>1?void 0:r?Xe(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&qe(e,a,s),s};let F=class extends p{constructor(){super(...arguments);this.darkTheme=localStorage.getItem("theme_dark")||""}toggleDarkTheme(t){t.preventDefault(),this.darkTheme=this.darkTheme==="on"?"":"on",localStorage.setItem("theme_dark",this.darkTheme),this.dispatchEvent(new CustomEvent("wd-dark-theme",{detail:{on:this.darkTheme==="on"},bubbles:!0,composed:!0}))}render(){return n`
      <div class="sections">
        <section>
          <div class="setting">
            <div class="text">
              <div class="title">Dark Theme</div>
            </div>
            <div class="control">
              <wd-switch
                @click=${this.toggleDarkTheme}
                id="dark-theme"
                name="dark-theme"
                .checked=${this.darkTheme==="on"}
              ></wd-switch>
            </div>
          </div>
        </section>
      </div>
    `}};F.styles=u`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      box-sizing: border-box;
      overflow: hidden;
    }
    .setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--wd-border-color);
      padding: 16px 0;
    }

    a,
    a:visited {
      color: var(--wd-color-faded);
    }

    .title {
      font-size: 18px;
    }
    .text {
      padding-right: 8px;
    }
    .description {
      font-size: 12px;
      color: var(--wd-color-faded);
    }

    #footnote {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      color: var(--wd-color-faded);
      font-size: 12px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    #privacy-policy,
    #copyright {
      text-align: left;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .setting {
        padding: 16px;
      }
    }
  `;Mt([w()],F.prototype,"darkTheme",2);F=Mt([v("wd-settings")],F);var Ze=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Qe=(t,e,a,r)=>{for(var s=r>1?void 0:r?Je(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&Ze(e,a,s),s};let dt=class extends p{render(){return n`
      <div class="overlay">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    `}};dt.styles=u`
    .overlay > .before,
    .overlay > .after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      box-shadow: 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color);
      animation: 1.25s bang ease-out infinite backwards,
        1.25s gravity ease-in infinite backwards,
        6.25s position linear infinite backwards;
      will-change: margin, transform, opacity, box-shadow;
    }
    .overlay > .after {
      animation-delay: 1.5s, 1.5s, 1.5s;
      animation-duration: 1.5s, 1.5s, 7.5s;
    }

    @keyframes bang {
      to {
        box-shadow: 18px -277.6666666667px #bf00ff,
          8px -315.6666666667px #005eff, 89px -69.6666666667px #0073ff,
          46px 54.3333333333px #ff6600, 238px -135.6666666667px #e1ff00,
          -234px 34.3333333333px #ff00a6, -62px 68.3333333333px #ff005e,
          95px -60.6666666667px #ff2200, -240px 49.3333333333px #ff4400,
          242px -312.6666666667px #00ff37, 47px -67.6666666667px #00ff6f,
          -49px -131.6666666667px #1a00ff, -184px 23.3333333333px #005eff,
          -173px -330.6666666667px #d900ff, 216px -130.6666666667px #ff0062,
          192px -154.6666666667px #2600ff, -113px 56.3333333333px #0900ff,
          169px -244.6666666667px #007bff, 87px -332.6666666667px #0044ff,
          167px -407.6666666667px #9900ff, -214px -163.6666666667px #4000ff,
          195px -262.6666666667px #ff006a, 26px -36.6666666667px #00ffe1,
          -219px -225.6666666667px #00ffc4, -168px -277.6666666667px #55ff00,
          35px -371.6666666667px blue, 110px -358.6666666667px #00ffe6,
          -225px -105.6666666667px #00ff09, 150px -171.6666666667px #00ff77,
          213px -90.6666666667px #ff00dd, 39px 0.3333333333px #22ff00,
          168px 5.3333333333px #001eff, -128px -357.6666666667px #9500ff,
          -79px -155.6666666667px #00fff7, -66px -260.6666666667px fuchsia,
          -142px -274.6666666667px #ffb700, -64px 24.3333333333px #00fff7,
          -41px -312.6666666667px #1aff00, 183px -94.6666666667px #3700ff,
          -218px -64.6666666667px #ff00a2, -172px -181.6666666667px #008cff,
          -37px -350.6666666667px #ff7700, 219px -415.6666666667px #ae00ff,
          -245px 59.3333333333px #2600ff, 83px -188.6666666667px #00ffe1,
          45px -363.6666666667px #ff0011, 155px 32.3333333333px #00ffcc,
          -224px -245.6666666667px #ff0400, -83px -337.6666666667px #00ffae,
          58px -401.6666666667px #a6ff00, -129px -84.6666666667px #0066ff;
      }
    }
    @keyframes gravity {
      to {
        transform: translateY(200px);
        opacity: 0;
      }
    }
    @keyframes position {
      0%,
      19.9% {
        margin-top: 10%;
        margin-left: 40%;
      }
      20%,
      39.9% {
        margin-top: 40%;
        margin-left: 30%;
      }
      40%,
      59.9% {
        margin-top: 20%;
        margin-left: 70%;
      }
      60%,
      79.9% {
        margin-top: 30%;
        margin-left: 20%;
      }
      80%,
      99.9% {
        margin-top: 30%;
        margin-left: 80%;
      }
    }
  `;dt=Qe([v("wd-fireworks")],dt);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ct=(t,e,a,r)=>{for(var s=r>1?void 0:r?es(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&ts(e,a,s),s};let A=class extends p{constructor(){super(...arguments);this.stats={},this.activeGameId="",this.winResult=!1}async connectedCallback(){await super.connectedCallback();const{stats:t,active:e}=await _;this.stats=t(),this.activeGameId=e().id,this.winResult=this.stats.lastGameId===this.activeGameId&&this.stats.lastResult==="win"}newGame(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-new-game",{composed:!0,bubbles:!0}))}async share(t){t.preventDefault();const{active:e}=await _,{seed:a,guesses:r}=e();await It(zt(r),a)}get ratingGrade(){const t=this.stats.rating;return t>=0?"S":t>=-500?"A":t>=-1e3?"B":t>=-2e3?"C":t>=-5e3?"D":"E"}graphWidth(t){const e=this.stats.wins;return e?Math.max(Math.floor(this.stats.distribution[t]/e*100),7):7}render(){const t=this.stats.lastGameId||"",e=this.stats.lastGuess||0,a=this.ratingGrade;return n`
      ${this.winResult?n`<wd-fireworks></wd-fireworks>`:""}
      <div class="container">
        <h1>Statistics</h1>
        <div id="statistics">
          <div class="statistic-container tile-container">
            <div
              class="statistic statistic-tile ${a==="S"?"s-tile":a==="A"?"a-tile":""}"
            >
              ${a}
            </div>
            <div class="label">Rating</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">
              ${this.stats.wins!==void 0&&this.stats.losses!==void 0?Math.floor(this.stats.wins/(this.stats.wins+this.stats.losses)*100):0}
            </div>
            <div class="label">Win %</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">${this.stats.streak||0}</div>
            <div class="label">Current Streak</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">${this.stats.maxStreak||0}</div>
            <div class="label">Max Streak</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">
              ${this.stats.wins||0+this.stats.losses||0}
            </div>
            <div class="label">Played</div>
          </div>
        </div>
        <h1>Guess Distribution</h1>
        <div id="guess-distribution">
          ${t?n`
                <div class="graph-container">
                  <div class="guess">1</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[0]>0?"align-right":""} ${t===this.activeGameId&&e===0?"highlight":""}"
                      style="width: ${this.graphWidth(0)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[0]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">2</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[1]>0?"align-right":""} ${t===this.activeGameId&&e===1?"highlight":""}"
                      style="width: ${this.graphWidth(1)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[1]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">3</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[2]>0?"align-right":""} ${t===this.activeGameId&&e===2?"highlight":""}"
                      style="width: ${this.graphWidth(2)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[2]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">4</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[3]>0?"align-right":""} ${t===this.activeGameId&&e===3?"highlight":""}"
                      style="width: ${this.graphWidth(3)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[3]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">5</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[4]>0?"align-right":""} ${t===this.activeGameId&&e===4?"highlight":""}"
                      style="width: ${this.graphWidth(4)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[4]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">6</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[5]>0?"align-right":""} ${t===this.activeGameId&&e===5?"highlight":""}"
                      style="width: ${this.graphWidth(5)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[5]}
                      </div>
                    </div>
                  </div>
                </div>
              `:n` <div class="no-data">No Data</div> `}
        </div>
        ${t===this.activeGameId?n`<div class="footer">
          <div class="refresh">
            <button id="refresh-button" @click=${this.newGame}>
              Next <wd-icon name="refresh"></wd-icon>
            </button>
          </div>
          <div class="divider"></div>
          <div class="share">
            <button id="share-button" @click=${this.share}>
              Share <wd-icon name="share"></wd-icon>
            </button>
          </div>
        </div>
      </div>`:null}
      </div>
    `}};A.styles=u`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }

    #statistics {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .statistic-container {
      flex: 1;
    }
    .statistic-tile {
      color: var(--key-evaluated-text-color);
      aspect-ratio: 1;
      font-weight: 700 !important;
      letter-spacing: -0.05em !important;
      flex-shrink: 0;
      flex-grow: 0;
      background-color: var(--color-absent);
    }
    .s-tile {
      background-color: var(--color-correct);
    }
    .a-tile {
      background-color: var(--color-present);
    }

    .statistic-container.tile-container {
      margin-right: 4px;
    }

    .statistic-container .statistic {
      height: 54px;
      font-size: 36px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.05em;
      font-variant-numeric: proportional-nums;
    }

    .statistic.timer {
      font-variant-numeric: initial;
    }
    .statistic-container .label {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    #guess-distribution {
      width: 80%;
    }

    .graph-container {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      font-size: 14px;
      line-height: 20px;
    }

    .graph-container .graph {
      width: 100%;
      height: 100%;
      padding-left: 4px;
    }

    .graph-container .graph .graph-bar {
      height: 100%;
      width: 0%;
      position: relative;
      background-color: var(--color-absent);
      display: flex;
      justify-content: center;
    }

    .graph-container .graph .graph-bar.highlight {
      background-color: var(--color-correct);
    }

    .graph-container .graph .graph-bar.align-right {
      justify-content: flex-end;
      padding-right: 8px;
    }

    .graph-container .graph .num-guesses {
      font-weight: bold;
      color: var(--white);
    }

    #statistics,
    #guess-distribution {
      padding-bottom: 10px;
    }

    .footer {
      display: flex;
      width: 100%;
      gap: 1rem;
      margin-top: 2rem;
    }

    .refresh {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 4px;
      width: 50%;
    }
    .divider {
      display: block;
      height: 48px;
      width: 1px;
      flex-shrink: 0;
      background-color: var(--wd-border-color);
    }
    .share {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 4px;
      width: 50%;
    }

    .no-data {
      text-align: center;
    }
    button#refresh-button {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      width: 90%;
      font-size: 16px;
      height: 48px;
      -webkit-filter: brightness(100%);
    }
    button#refresh-button:hover {
      opacity: 0.9;
    }
    button#refresh-button wd-icon {
      width: 24px;
      height: 24px;
      padding-left: 8px;
    }

    button#share-button {
      background-color: var(--wd-share-bg);
      color: var(--wd-share-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      width: 90%;
      font-size: 16px;
      height: 48px;
      -webkit-filter: brightness(100%);
    }
    button#share-button:hover {
      opacity: 0.9;
    }
    button#share-button wd-icon {
      width: 24px;
      height: 24px;
      padding-left: 8px;
    }
  `;ct([w()],A.prototype,"stats",2);ct([w()],A.prototype,"activeGameId",2);A=ct([v("wd-stats")],A);var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,Rt=(t,e,a,r)=>{for(var s=r>1?void 0:r?as(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&ss(e,a,s),s};let q=class extends p{constructor(){super(...arguments);this.game=null}async share(){!this.game||await It(zt(this.game.guesses),this.game.seed)}get duration(){if(!this.game)return"";let t=(this.game.end-this.game.start)/1e3;return t<1?"< 1s":t<60?`${Math.floor(t)}s`:t/60<60?`${Math.floor(t/60)}m`:t/360<24?`${Math.floor(t/360)}h`:`${Math.floor(t/360/24)}d`}render(){return this.game===null||!this.game.end?null:n`
      <div class="guess-grid">
        ${this.game.guesses.map(t=>t.result.map(e=>n`<div class="guess-grid-item ${e}"></div>`))}
      </div>
      <div class="results">
        <div class="result">
          <wd-icon
            class="status ${this.game.status==="win"?"circlecheck":"circlex"}"
            name=${this.game.status==="win"?"circlecheck":"circlex"}
          ></wd-icon>
          <h3>${this.game.seed||null}</h3>
          <button class="share" @click=${this.share}>
            <wd-icon name="share" size="sm"></wd-icon>
          </button>
        </div>
        <div class="stats">
          <span>${this.duration}</span>
          <time datetime="${this.game.start}"
            >${new Intl.DateTimeFormat().format(new Date(this.game.start))}</time
          >
        </div>
      </div>
    `}};q.styles=u`
    :host {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      flex: 1;
      gap: 1rem;
    }
    .guess-grid {
      box-sizing: border-box;
      display: grid;
      grid-template-rows: repeat(${Y}, 1fr);
      grid-template-columns: repeat(${$}, 1fr);
      grid-gap: 1px;
      padding: 1px;
      box-sizing: border-box;
      width: 100%;
      max-width: 80px;
      flex-shrink: 0;
    }
    .guess-grid-item {
      box-sizing: border-box;
      aspect-ratio: 1;
      border-radius: 1px;
      overflow: hidden;
    }
    .guess-grid-item.present {
      background-color: var(--color-present);
    }
    .guess-grid-item.absent {
      background-color: var(--color-absent);
    }
    .guess-grid-item.correct {
      background-color: var(--color-correct);
    }
    .guess-grid-item.empty {
      background-color: var(--color-absent);
    }
    .results {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      justify-content: space-around;
      gap: 1rem;
      overflow: hidden;
    }
    .result {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }
    h3 {
      font-size: 1rem;
      margin: 0;
      font-weight: 700;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .stats {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      justify-content: flex-end;
      gap: 0.25rem;
    }
    .status {
      flex-shrink: 0;
      height: 32px;
      width: 32px;
      overflow: hidden;
      padding: 4px;
      border-radius: 9999px;
      color: var(--key-evaluated-text-color);
      box-sizing: border-box;
    }
    .circlecheck {
      background-color: var(--color-correct);
    }
    .circlex {
      background-color: var(--color-error);
    }
    button.share {
      box-sizing: border-box;
      flex-shrink: 0;
      background-color: transparent;
      color: var(--wd-share-color);
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
      height: 32px;
      width: 32px;
      -webkit-filter: brightness(100%);
      opacity: 0.7;
      transition: opacity 0.2s ease-out, backround-color 0.2s ease-out;
    }
    button.share:hover {
      background-color: var(--wd-share-bg);
      opacity: 1;
    }
    button.share wd-icon {
      width: 20px;
      height: 20px;
    }
    time {
      font-size: 0.9rem;
      opacity: 0.7;
    }
  `;Rt([h()],q.prototype,"game",2);q=Rt([v("wd-history-item")],q);var rs=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Et=(t,e,a,r)=>{for(var s=r>1?void 0:r?os(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&rs(e,a,s),s};let X=class extends p{constructor(){super(...arguments);this.history=[]}async connectedCallback(){super.connectedCallback();const{history:t}=await _;this.history=t()}render(){return n`
      ${this.history.map(t=>n` <wd-history-item .game=${t}></wd-history-item> `)}
    `}};X.styles=u`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      gap: 1rem;
      padding: 1rem 0.5rem;
      box-sizing: border-box;
      overflow: hidden;
    }
  `;Et([w()],X.prototype,"history",2);X=Et([v("wd-history")],X);var is=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,ht=(t,e,a,r)=>{for(var s=r>1?void 0:r?ns(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&is(e,a,s),s};let L=class extends p{constructor(){super(...arguments);this.open=!1,this.closing=!1}updated(){this.open}closePage(){this.dispatchEvent(new CustomEvent("wd-page",{detail:{open:!1},composed:!0,bubbles:!0}))}render(){return n`
      <div class="overlay">
        <div class="content">
          <header>
            <h1><slot></slot></h1>
            <button @click=${this.closePage} class="close-icon">
              <wd-icon name="x"></wd-icon>
            </button>
          </header>
          <div class="content-container">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `}};L.styles=u`
    :host {
      box-sizing: border-box;
    }
    .overlay {
      box-sizing: border-box;
      display: none;
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      background-color: var(--wd-background-color);
      will-change: opacity, transform;
      animation: SlideIn 100ms linear;
      z-index: 2000;
    }

    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
      opacity: 1;
    }

    :host([closing="true"]) .overlay {
      animation: SlideOut 250ms ease-out;
    }

    .content {
      position: relative;
      color: var(--modal-content-color);
      padding: 0 32px;
      max-width: var(--wd-max-width);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .content-container {
      box-sizing: border-box;
      flex: 1;
      overflow-y: auto;
    }

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .content {
        max-width: 100%;
        padding: 0;
      }
      wd-icon {
        padding: 0 16px;
      }
    }

    @keyframes SlideIn {
      0% {
        transform: translateY(10vh);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes SlideOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateY(12vh);
      }
    }
  `;ht([h({reflect:!0})],L.prototype,"open",2);ht([h({reflect:!0})],L.prototype,"closing",2);L=ht([v("wd-page")],L);var ls=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,ut=(t,e,a,r)=>{for(var s=r>1?void 0:r?ds(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&ls(e,a,s),s};let N=class extends p{constructor(){super(...arguments);this.open=!1,this.closing=!1}closeModal(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-modal",{detail:{open:!1},composed:!0,bubbles:!0}))}preventClose(t){t.preventDefault(),t.stopPropagation()}render(){return n`
      <div class="overlay" @click=${this.closeModal}>
        <div class="content" @click=${this.preventClose}>
          <slot></slot>
          <button @click=${this.closeModal} class="close-icon">
            <wd-icon name="x"></wd-icon>
          </button>
        </div>
      </div>
    `}};N.styles=u`
    .overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--overlay-bg);
      z-index: 3000;
      will-change: transform, opacity;
    }
    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
      opacity: 1;
    }
    :host([closing="true"]) .content {
      animation: SlideOut 250ms;
    }

    .content {
      position: relative;
      border-radius: 8px;
      border: 1px solid var(--wd-border-color);
      background-color: var(--modal-content-bg);
      color: var(--modal-content-color);
      box-shadow: 0 4px 23px 0 var(--shadow-color);
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      animation: SlideIn 200ms;
      max-width: var(--wd-max-width);
      padding: 16px;
      box-sizing: border-box;
      will-change: transform, opacity;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }

    @keyframes SlideIn {
      0% {
        transform: translateY(10vh);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes SlideOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateY(6vh);
      }
    }
  `;ut([h({reflect:!0})],N.prototype,"open",2);ut([h({reflect:!0})],N.prototype,"closing",2);N=ut([v("wd-modal")],N);var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,b=(t,e,a,r)=>{for(var s=r>1?void 0:r?hs(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&cs(e,a,s),s};let m=class extends p{constructor(){super(...arguments);this.gameId="",this.seed="",this.guess=0,this.guesses=et,this.letters=M,this.solution="",this.status="idle",this.page="",this.modal="",this.toast="",this.closingPage=!1,this.closingModal=!1,this._clearTimeout=null,this._autosaveTimeout=null,this._handleKeydown=async t=>{if(!(t.isComposing||t.ctrlKey||t.altKey||this.status!=="idle"))switch(t.key){case"Escape":this.page="",this.modal="";return;case"Backspace":return this.removeLetter();case"Enter":return await this.attemptGuess();default:return this.insertLetter(t.key.toLowerCase())}}}debugMode(){return null}handleModal(t){const{open:e=!1,content:a=""}=t.detail;e?this.modal=a:(this.closingModal=!0,setTimeout(()=>{this.modal="",this.closingModal=!1},200))}handleToast(t){const{content:e=""}=t.detail;W(e)}handlePage(t){const{open:e=!1,content:a=""}=t.detail;e?this.page=a:(this.closingPage=!0,setTimeout(()=>{this.page="",this.closingPage=!1},200))}get activeGuess(){return this.guesses[this.guess].letters}set activeGuess(t){const e=this.guesses[this.guess];e.letters=t,this.guesses=this.guesses.map((a,r)=>r===this.guess?e:a)}get activeResult(){return this.guesses[this.guess].result}set activeResult(t){const e=this.guesses[this.guess];e.result=t,this.guesses=this.guesses.map((a,r)=>r===this.guess?e:a)}set activeStatus(t){const e=this.guesses[this.guess];e.status=t,this.guesses=this.guesses.map((a,r)=>r===this.guess?e:a)}removeLetter(){this.activeGuess.length>0&&(this.activeGuess=this.activeGuess.slice(0,-1))}insertLetter(t){this.activeGuess.length<$&&t in M&&this.letters[t]!=="absent"&&(this.activeGuess+=t)}win(){this.status="win"}lose(){this.status="lose"}nextRow(){this.guess++,this.status="idle"}invalidGuess(t,e){switch(this.status="invalid",e){case z.INVALID_CHAR_LEN:this.handleToast({detail:{content:"Not enough letters!"}});break;case z.INVALID_WORD:this.handleToast({detail:{content:"Not a valid word!"}});break}this._clearTimeout=setTimeout(()=>{this.status="idle"},$t)}async validate(t){return t.length<$?{success:!1,reason:z.INVALID_CHAR_LEN}:await xe(t)?{success:!0}:{success:!1,reason:z.INVALID_WORD}}updateKeyboard(){const t=this.activeGuess,e=this.activeResult,a={};for(let r=0;r<e.length;r++)a[t.charAt(r)]=e[r];this.letters=x(x({},this.letters),a)}determineResults(t){const e=this.solution,a=this.activeResult;this.status="reveal";for(let r=0;r<t.length;r++){const s=t.charAt(r),o=e.charAt(r);a[r]=o===s?"correct":e.indexOf(s)>-1?"present":"absent"}this.activeResult=a}updateGameStatus(){this._clearTimeout=setTimeout(()=>{this.updateKeyboard(),this.activeStatus="evaluated",this.activeResult.some(t=>t!=="correct")?this.guess<5?this.nextRow():this.lose():this.win()},5*300)}async attemptGuess(){this._clearTimeout&&clearTimeout(this._clearTimeout);const t=this.activeGuess,e=await this.validate(t);e.success?(this.determineResults(t),this.updateGameStatus()):this.invalidGuess(t,e.reason),this.saveGame()}async saveStats(){const{saveStats:t}=await _;await t(this.gameId)}async saveGame(){this._autosaveTimeout&&clearTimeout(this._autosaveTimeout);const{saveGame:t}=await _;this._autosaveTimeout=setTimeout(async()=>{const e=this.status==="win"||this.status==="lose"?Date.now():void 0;await t({id:this.gameId,guess:this.guess,guesses:this.guesses,letters:this.letters,solution:this.solution,seed:this.seed,status:e?this.status:"idle",end:e}),e&&(await this.saveStats(),setTimeout(()=>{this.modal="stats"},_t))},5*500)}async setupGame(t){try{this.gameId=t.id,this.guess=t.guess,this.guesses=t.guesses,this.solution=await ge(t.solution,t.iv),this.seed=t.seed,this.status=t.status,this.letters=t.letters}catch(e){console.log(e)}}async startNewGame(){const{generateGame:t}=await _;await this.setupGame(await t()),this.handleModal({detail:{open:!1}})}async connectedCallback(){super.connectedCallback();const{active:t,modal:e}=await _;await this.setupGame(t()),this.modal=e,window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown)}render(){return n`
      <wd-header
        @wd-modal=${this.handleModal}
        @wd-page=${this.handlePage}
      ></wd-header>
      <wd-board
        .guesses=${this.guesses}
        .guess=${this.guess}
        .status=${this.status}
      ></wd-board>
      <wd-keyboard .letters=${this.letters}></wd-keyboard>
      ${this.closingPage||this.page?n`<wd-page
            .open=${!this.closingPage&&this.page!==""}
            .closing=${this.closingPage}
            @wd-page=${this.handlePage}
          >
            ${this.page==="help"?n`<span>How To Play</span>
                  <wd-help page slot="content"></wd-help>`:null}
            ${this.page==="settings"?n`<span>Settings</span>
                  <wd-settings page slot="content"></wd-settings>`:null}
            ${this.page==="history"?n`<span>History</span
                  ><wd-history page slot="content"></wd-history>`:null}
          </wd-page>`:""}
      ${this.closingModal||this.modal?n`<wd-modal
            .open=${!this.closingModal&&this.modal!==""}
            .closing=${this.closingModal}
            @wd-modal=${this.handleModal}
          >
            ${this.modal==="help"?n`<wd-help></wd-help>`:null}
            ${this.modal==="game-in-progress"?n`<wd-game-in-progress></wd-game-in-progress>`:null}
            ${this.modal==="seed-played"?n`<wd-seed-played></wd-seed-played>`:null}
            ${this.modal==="stats"?n`<wd-stats @wd-new-game=${this.startNewGame}></wd-stats>`:null}
          </wd-modal>`:null}
      ${this.debugMode()}
    `}};m.styles=u`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    ${u``}
  `;b([w()],m.prototype,"gameId",2);b([w()],m.prototype,"seed",2);b([w()],m.prototype,"guess",2);b([w()],m.prototype,"guesses",2);b([w()],m.prototype,"letters",2);b([w()],m.prototype,"solution",2);b([w()],m.prototype,"status",2);b([w()],m.prototype,"page",2);b([w()],m.prototype,"modal",2);b([w()],m.prototype,"toast",2);b([w()],m.prototype,"closingPage",2);b([w()],m.prototype,"closingModal",2);m=b([v("wd-app")],m);Xt({});
