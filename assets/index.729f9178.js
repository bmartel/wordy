var St=Object.defineProperty,zt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var gt=Object.getOwnPropertySymbols;var Rt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var mt=(t,e,s)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,$=(t,e)=>{for(var s in e||(e={}))Rt.call(e,s)&&mt(t,s,e[s]);if(gt)for(var s of gt(e))Mt.call(e,s)&&mt(t,s,e[s]);return t},wt=(t,e)=>zt(t,Et(e));import{v as Tt,n as At,l as Lt,r as p,e as c,s as v,$ as n,a as g,o as Nt,t as w}from"./vendor.8e6c5f1b.js";const Yt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};Yt();function Wt(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:i,onRegistered:a,onRegisterError:r}=t;let o;const m=async(u=!0)=>{};return"serviceWorker"in navigator&&(o=new Tt("./sw.js",{scope:"./",type:"classic"}),o.addEventListener("activated",u=>{u.isUpdate?window.location.reload():i==null||i()}),o.register({immediate:e}).then(u=>{a==null||a(u)}).catch(u=>{r==null||r(u)})),m}const Kt="modulepreload",ft={},Ht="./",Vt=function(e,s){return!s||s.length===0?e():Promise.all(s.map(i=>{if(i=`${Ht}${i}`,i in ft)return;ft[i]=!0;const a=i.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Kt,a||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),a)return new Promise((m,u)=>{o.addEventListener("load",m),o.addEventListener("error",u)})})).then(()=>e())},Bt=Vt(()=>import("./config.d171c315.js"),[]);let q={};(async()=>{q=await Bt})();const z={q:"empty",w:"empty",e:"empty",r:"empty",t:"empty",y:"empty",u:"empty",i:"empty",o:"empty",p:"empty",a:"empty",s:"empty",d:"empty",f:"empty",g:"empty",h:"empty",j:"empty",k:"empty",l:"empty",z:"empty",x:"empty",c:"empty",v:"empty",b:"empty",n:"empty",m:"empty"},Ut={Enter:!0,Backspace:!0},Ft=$($({},z),Ut),bt=60*10*1e3,E=5,X=6,yt=600,qt=750,Xt={empty:"\u2B1B",absent:"\u{1F7E6}",present:"\u{1F7E8}",correct:"\u{1F7E9}"};var I;(function(t){t[t.INVALID_CHAR_LEN=0]="INVALID_CHAR_LEN",t[t.INVALID_WORD=1]="INVALID_WORD"})(I||(I={}));let d=null;const Zt=t=>{d=t},Jt=()=>{d=null},Qt=t=>{const e=document.createElement("output");return e.innerText=t,e.classList.add("toast"),e.setAttribute("role","status"),e},te=t=>{const e=(d==null?void 0:d.offsetHeight)||0;d==null||d.appendChild(t);const i=((d==null?void 0:d.offsetHeight)||0)-e;d==null||d.animate([{transform:`translateY(${i}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"})},ee=t=>{const{matches:e}=window.matchMedia("(prefers-reduced-motion: no-preference)");(d==null?void 0:d.children.length)&&e?te(t):d==null||d.appendChild(t)},Y=t=>{const e=Qt(t);return ee(e),new Promise(async s=>{await Promise.allSettled(e.getAnimations().map(i=>i.finished)),d==null||d.removeChild(e),s()})};function se(t,e,s,i){return function(){t>>>=0,e>>>=0,s>>>=0,i>>>=0;let a=t+e|0;return t=e^e>>>9,e=s+(s<<3)|0,s=s<<21|s>>>11,i=i+1|0,a=a+i|0,s=s+a|0,(a>>>0)/4294967296}}function ae(t){for(var e=0,s=1779033703^t.length;e<t.length;e++)s=Math.imul(s^t.charCodeAt(e),3432918353),s=s<<13|s>>>19;return function(){return s=Math.imul(s^s>>>16,2246822507),s=Math.imul(s^s>>>13,3266489909),(s^=s>>>16)>>>0}}const ie={alg:"A256GCM",ext:!0,k:"6KWvelTztanQl8-rJ1a1f2B_VcuIZDIrjBsoUiOY-sc",key_ops:["encrypt","decrypt"],kty:"oct"};let W=null;(async()=>{W||(W=await crypto.subtle.importKey("jwk",ie,"AES-GCM",!0,["encrypt","decrypt"]))})();const re=t=>new TextEncoder().encode(t),oe=t=>new TextDecoder().decode(t),xt=async t=>{const e=re(t),s=crypto.getRandomValues(new Uint8Array(12)),i=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},W,e);return[s,i]},ne=async(t,e)=>{if(!e||!t)return"";const s=await crypto.subtle.decrypt({name:"AES-GCM",iv:e},W,t);return oe(new Uint8Array(s))},le=async(t,e)=>typeof t=="string"?t:await ne(t,e),de=async(t,e)=>typeof t=="string"?await xt(t):[e||new Uint8Array(12),t],ce=()=>At(),ue=t=>{const e=ae(t);return se(e(),e(),e(),e())},Z=(t,e=0)=>Array.from({length:e},t),he=()=>Z(()=>"empty",E),$t=(t="",e=void 0)=>Z(()=>({letters:t,status:"tbd",result:e||[...he()]}),X),J=$t(),kt=J[0],x=Lt.createInstance({name:"wordy"});let Q=0;const pe=async t=>{const{words:e}=q;t=t||ce(),Q||(Q=e.length);const s=ue(t);return{word:e[Math.floor(s()*Q)],seed:t}},ve=async t=>{const{words:e}=q;return e.indexOf(t)>-1},_t=async t=>{const{word:e,seed:s}=await pe(t),[i,a]=await xt(e);return{id:s,guess:0,guesses:$t(),solution:a,iv:i,seed:s,letters:z,status:"idle"}},C=(async()=>{var ct,ut,ht,pt;const t=new URLSearchParams(location.search).get("seed")||void 0,e=await x.getItem("activeGameId")||"";let s=await x.getItem("games")||{};const i=!!(e&&((ct=s==null?void 0:s[e])==null?void 0:ct.start)&&!((ut=s==null?void 0:s[e])==null?void 0:ut.end)),a=!!(t&&t in s&&((ht=s[t])==null?void 0:ht.end)),r=!!(e&&e in s&&!((pt=s[e])==null?void 0:pt.end)),o=!a&&!i;let m=await x.getItem("stats")||{},u=i||!t&&r?s[e]:await _t(a?void 0:t);const dt=t&&i?"game-in-progress":t&&a?"seed-played":e&&m.lastGameId===e?"stats":await x.getItem("shown_help")?"":"help";if(dt==="help"&&await x.setItem("shown_help","1"),t){const h=new URL(window.location.href);h.searchParams.delete("seed"),history.pushState({path:h.href},"",h.href)}const F=async(h,l=!0)=>{var O,S;u=$($({},s[h.id]),h),l&&!u.start&&(u.start=Date.now());const y=((O=s[h.id])==null?void 0:O.solution)||u.solution,_=((S=s[h.id])==null?void 0:S.iv)||u.iv,[P,D]=await de(y,_);s[h.id]=wt($({},u),{solution:D,iv:P}),await x.setItem("games",s)},jt=(h,l,y,_)=>{const P=l-X/X;return(h-h*P)*_*100*((bt-y)/bt)},Gt=async h=>{const l=s[h],y=m.distribution||{},_=(l.guess+(m.avgGuess||0))/2,P=l.status==="win"?(m.streak||0)+1:0,D=Math.max(P,m.maxStreak||0),O=(m.wins||0)+(l.status==="win"?1:0),S=(m.losses||0)+(l.status==="lose"?1:0),Dt=O/(O+S),vt=((l.end||0)-(l.start||0)+(m.avgDuration||0))/2;m={streak:P,lastResult:l.status==="win"?"win":"lose",lastGameId:l.id,lastGuess:l.guess,avgGuess:_,avgDuration:vt,maxStreak:D,wins:O,losses:S,rating:jt(D,_,vt,Dt),distribution:{0:(y[0]||0)+(l.status==="win"&&l.guess===0?1:0),1:(y[1]||0)+(l.status==="win"&&l.guess===1?1:0),2:(y[2]||0)+(l.status==="win"&&l.guess===2?1:0),3:(y[3]||0)+(l.status==="win"&&l.guess===3?1:0),4:(y[4]||0)+(l.status==="win"&&l.guess===4?1:0),5:(y[5]||0)+(l.status==="win"&&l.guess===5?1:0)}},await x.setItem("stats",m)};return(!e||o)&&(await x.setItem("activeGameId",u.id),await F(u,!1)),{games:()=>s,active:()=>u,stats:()=>m,modal:dt,saveGame:F,saveStats:Gt,generateGame:async()=>{const h=await _t();return await x.setItem("activeGameId",h.id),await F(h,!1),h}}})(),ge=t=>t.map(e=>e.result.map(s=>Xt[s]).join("")).join(`
`),me=async(t,e)=>{const s=new URL(location.href);s.searchParams.set("seed",e);try{navigator.share?(await navigator.share({url:s.toString(),title:`Puzzle ${e}`,text:t}),Y("Shared puzzle result")):(t=`
${s.toString()}

${t}
    `,await navigator.clipboard.writeText(t),Y("Copied puzzle result"))}catch(i){Y(i.message)}};var we=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,Pt=(t,e,s,i)=>{for(var a=i>1?void 0:i?fe(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&we(e,s,a),a};let K=class extends v{constructor(){super();const t=localStorage.getItem("theme_dark");t!==null?this.dark=t==="on":(this.dark=window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme_dark",this.dark?"on":""))}updateTheme(t){this.dark=t.detail.on}connectedCallback(){super.connectedCallback(),setTimeout(()=>{Zt(this.renderRoot.querySelector(".toast-layer"))},0)}disconnectedCallback(){super.disconnectedCallback(),Jt()}render(){return n`
      <section class="toast-layer"></section>
      <main @wd-dark-theme=${this.updateTheme}>
        <slot></slot>
      </main>
    `}};K.styles=p`
    :host {
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
      --lightGray: #d8d8d8;
      --gray: #86888a;
      --darkGray: #939598;
      --white: #fff;
      --black: #000;
      --orange: #f5793a;
      --blue: #85c0f9;

      --color-present: var(--yellow);
      --color-correct: var(--green);
      --color-absent: var(--color-tone-3);
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
      --overlay-bg: rgba(255, 255, 255, 0.5);

      --wd-background-color: var(--white);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-5);
      --wd-switch-bg: var(--color-tone-2);
      --wd-border-color: var(--color-tone-1);
      --wd-border-color-emphasis: var(--color-tone-2);
      --wd-icon-color: var(--color-tone-7);
      --wd-share-color: var(--color-tone-6);
      --wd-share-bg: var(--color-tone-1);

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
      --shadow-color: rgba(255, 255, 255, 0.16);
      --overlay-bg: rgba(0, 0, 0, 0.5);

      --wd-background-color: var(--color-tone-7);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-2);
      --wd-switch-bg: var(--color-tone-5);
      --wd-border-color: var(--color-tone-6);
      --wd-border-color-emphasis: var(--color-tone-4);
      --wd-icon-color: var(--color-tone-1);
      --wd-share-color: var(--color-tone-1);
      --wd-share-bg: var(--color-tone-6);
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
  `;Pt([c({reflect:!0})],K.prototype,"dark",2);K=Pt([g("wd-theme")],K);var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ye(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&be(e,s,a),a};const xe={backspace:'<path stroke-linecap="round" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path>',stats:'<path fill="none" stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',settings:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',help:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',refresh:'<path fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>',share:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>',x:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'},Ot={sm:20,md:24,lg:28};let R=class extends v{constructor(){super(...arguments);this.name="",this.size="md"}render(){return n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${Ot[this.size]}
        width=${Ot[this.size]}
        viewBox="0 0 24 24"
      >
        ${Nt(xe[this.name])}
      </svg>
    `}};R.styles=p`
    :host {
      display: inline-block;
      height: 24px;
      width: 24px;
      pointer-events: none;
      user-select: none;
    }
  `;tt([c()],R.prototype,"name",2);tt([c()],R.prototype,"size",2);R=tt([g("wd-icon")],R);var $e=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,_e=(t,e,s,i)=>{for(var a=i>1?void 0:i?ke(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&$e(e,s,a),a};let et=class extends v{showHelp(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-page",{detail:{content:"help",open:!0},bubbles:!0,composed:!0}))}showStats(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-modal",{detail:{content:"stats",open:!0},bubbles:!0,composed:!0}))}showSettings(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-page",{detail:{content:"settings",open:!0},bubbles:!0,composed:!0}))}render(){return n`
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
    `}};et.styles=p`
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
  `;et=_e([g("wd-header")],et);var Pe=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,H=(t,e,s,i)=>{for(var a=i>1?void 0:i?Oe(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Pe(e,s,a),a};let j=class extends v{constructor(){super(...arguments);this.status="empty",this.animation="",this.letter=""}render(){return n` <div class="cell">${this.letter}</div> `}};j.styles=p`
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
      animation-duration: ${qt}ms;
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
  `;H([c({reflect:!0})],j.prototype,"status",2);H([c({reflect:!0})],j.prototype,"animation",2);H([c()],j.prototype,"letter",2);j=H([g("wd-cell")],j);var Ie=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,M=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ce(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ie(e,s,a),a};let k=class extends v{constructor(){super(...arguments);this.guess=kt.letters,this.result=kt.result,this.status="idle",this.evaluated=!1,this.revealed=!1}updated(){!this.revealed&&this.status==="reveal"&&(this.revealed=!0),this.revealed&&this.evaluated&&(this.revealed=!1)}render(){let t=this.guess.split("");t=[...t,...Z(()=>"",E-t.length)];const e=this.status==="reveal"&&!this.revealed;return n`
      <div class="row">
        <wd-cell
          style="--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"150ms":"0ms"};"
          .letter=${t[0]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[0]:t[0]!==""?"tbd":"empty"}
          .animation=${t[0]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:300ms;--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"450ms":"0ms"};"
          .letter=${t[1]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[1]:t[1]!==""?"tbd":"empty"}
          .animation=${t[1]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:600ms;--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"750ms":"0ms"};"
          .letter=${t[2]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[2]:t[2]!==""?"tbd":"empty"}
          .animation=${t[2]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:900ms;--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"1050ms":"0ms"};"
          .letter=${t[3]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[3]:t[3]!==""?"tbd":"empty"}
          .animation=${t[3]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1200ms;--transition-delay:${this.evaluated&&this.status!=="win"?"0ms":e?"1350ms":"0ms"};"
          .letter=${t[4]}
          .status=${this.status==="reveal"||this.evaluated||this.status==="win"||this.revealed?this.result[4]:t[4]!==""?"tbd":"empty"}
          .animation=${t[4]!==""?this.evaluated&&this.status!=="win"?"":e?"flip":this.status==="win"?"bounce":this.revealed?"":"pop":""}
        ></wd-cell>
      </div>
    `}};k.styles=p`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${yt}ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(${E}, 1fr);
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
  `;M([c()],k.prototype,"guess",2);M([c()],k.prototype,"result",2);M([c({reflect:!0})],k.prototype,"status",2);M([c()],k.prototype,"evaluated",2);k=M([g("wd-row")],k);var je=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,V=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ge(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&je(e,s,a),a};let G=class extends v{constructor(){super(...arguments);this.guess=0,this.status="idle",this.guesses=J}render(){return n`
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
    `}};G.styles=p`
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
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;V([c()],G.prototype,"guess",2);V([c()],G.prototype,"status",2);V([c()],G.prototype,"guesses",2);G=V([g("wd-board")],G);var De=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,It=(t,e,s,i)=>{for(var a=i>1?void 0:i?Se(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&De(e,s,a),a};let B=class extends v{constructor(){super(...arguments);this.letters=z}createRenderRoot(){const t=super.createRenderRoot(),e=s=>{var a;s.preventDefault();const{key:i=""}=((a=s==null?void 0:s.target)==null?void 0:a.dataset)||{};Ft[i]&&window.dispatchEvent(new KeyboardEvent("keydown",{key:i}))};return t.addEventListener("click",e),t}render(){return n`
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
    `}};B.styles=p`
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
  `;It([c()],B.prototype,"letters",2);B=It([g("wd-keyboard")],B);var ze=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Re=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ee(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ze(e,s,a),a};let st=class extends v{render(){return n`
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
    `}};st.styles=p`
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
  `;st=Re([g("wd-help")],st);var Me=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ae=(t,e,s,i)=>{for(var a=i>1?void 0:i?Te(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Me(e,s,a),a};let at=class extends v{render(){return n`
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
    `}};at.styles=p`
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
  `;at=Ae([g("wd-seed-played")],at);var Le=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ne(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Le(e,s,a),a};let it=class extends v{render(){return n`
      <div class="container">
        <h1>Game In Progress</h1>
        <div class="content">
          <p>
            You are currently in the middle of an active game. To load a game
            from a shared link, you must first complete the current game.
          </p>
        </div>
      </div>
    `}};it.styles=p`
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
  `;it=Ye([g("wd-game-in-progress")],it);var We=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,rt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ke(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&We(e,s,a),a};let T=class extends v{constructor(){super(...arguments);this.checked=!1,this.disabled=!1}render(){return n`
      <div class="container">
        <label><slot></slot></label>
        <div class="switch">
          <span class="knob"></span>
        </div>
      </div>
    `}};T.styles=p`
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
  `;rt([c({reflect:!0})],T.prototype,"checked",2);rt([c({reflect:!0})],T.prototype,"disabled",2);T=rt([g("wd-switch")],T);var He=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ct=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ve(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&He(e,s,a),a};let U=class extends v{constructor(){super(...arguments);this.darkTheme=localStorage.getItem("theme_dark")||""}toggleDarkTheme(t){t.preventDefault(),this.darkTheme=this.darkTheme==="on"?"":"on",localStorage.setItem("theme_dark",this.darkTheme),this.dispatchEvent(new CustomEvent("wd-dark-theme",{detail:{on:this.darkTheme==="on"},bubbles:!0,composed:!0}))}render(){return n`
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
    `}};U.styles=p`
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
  `;Ct([w()],U.prototype,"darkTheme",2);U=Ct([g("wd-settings")],U);var Be=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,ot=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ue(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Be(e,s,a),a};let A=class extends v{constructor(){super(...arguments);this.stats={},this.activeGameId=""}async connectedCallback(){await super.connectedCallback();const{stats:t,active:e}=await C;this.stats=t(),this.activeGameId=e().id}newGame(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-new-game",{composed:!0,bubbles:!0}))}async share(t){t.preventDefault();const{active:e}=await C,{seed:s,guesses:i}=e();await me(ge(i),s)}get ratingGrade(){const t=this.stats.rating;return t>=0?"S":t>=-500?"A":t>=-1e3?"B":t>=-2e3?"C":t>=-5e3?"D":"E"}graphWidth(t){const e=this.stats.wins;return e?Math.max(Math.floor(this.stats.distribution[t]/e*100),7):7}render(){const t=this.stats.lastGameId||"",e=this.stats.lastGuess||0,s=this.ratingGrade;return n`
      <div class="container">
        <h1>Statistics</h1>
        <div id="statistics">
          <div class="statistic-container tile-container">
            <div
              class="statistic statistic-tile ${s==="S"?"s-tile":s==="A"?"a-tile":""}"
            >
              ${s}
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
    `}};A.styles=p`
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
      color: var(--cell-text-color);
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
  `;ot([w()],A.prototype,"stats",2);ot([w()],A.prototype,"activeGameId",2);A=ot([g("wd-stats")],A);var Fe=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,nt=(t,e,s,i)=>{for(var a=i>1?void 0:i?qe(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Fe(e,s,a),a};let L=class extends v{constructor(){super(...arguments);this.open=!1,this.closing=!1}updated(){this.open}closePage(){this.dispatchEvent(new CustomEvent("wd-page",{detail:{open:!1},composed:!0,bubbles:!0}))}render(){return n`
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
    `}};L.styles=p`
    .overlay {
      display: none;
      position: absolute;
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
    }

    .content-container {
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
  `;nt([c({reflect:!0})],L.prototype,"open",2);nt([c({reflect:!0})],L.prototype,"closing",2);L=nt([g("wd-page")],L);var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,lt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ze(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xe(e,s,a),a};let N=class extends v{constructor(){super(...arguments);this.open=!1,this.closing=!1}closeModal(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-modal",{detail:{open:!1},composed:!0,bubbles:!0}))}preventClose(t){t.preventDefault(),t.stopPropagation()}render(){return n`
      <div class="overlay" @click=${this.closeModal}>
        <div class="content" @click=${this.preventClose}>
          <slot></slot>
          <button @click=${this.closeModal} class="close-icon">
            <wd-icon name="x"></wd-icon>
          </button>
        </div>
      </div>
    `}};N.styles=p`
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
      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);
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
  `;lt([c({reflect:!0})],N.prototype,"open",2);lt([c({reflect:!0})],N.prototype,"closing",2);N=lt([g("wd-modal")],N);var Je=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,b=(t,e,s,i)=>{for(var a=i>1?void 0:i?Qe(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Je(e,s,a),a};let f=class extends v{constructor(){super(...arguments);this.gameId="",this.seed="",this.guess=0,this.guesses=J,this.letters=z,this.solution="",this.status="idle",this.page="",this.modal="",this.toast="",this.closingPage=!1,this.closingModal=!1,this._clearTimeout=null,this._autosaveTimeout=null,this._handleKeydown=async t=>{if(!(t.isComposing||t.ctrlKey||t.altKey||this.status!=="idle"))switch(t.key){case"Escape":this.page="",this.modal="";return;case"Backspace":return this.removeLetter();case"Enter":return await this.attemptGuess();default:return this.insertLetter(t.key.toLowerCase())}}}debugMode(){return null}handleModal(t){const{open:e=!1,content:s=""}=t.detail;e?this.modal=s:(this.closingModal=!0,setTimeout(()=>{this.modal="",this.closingModal=!1},200))}handleToast(t){const{content:e=""}=t.detail;Y(e)}handlePage(t){const{open:e=!1,content:s=""}=t.detail;e?this.page=s:(this.closingPage=!0,setTimeout(()=>{this.page="",this.closingPage=!1},200))}get activeGuess(){return this.guesses[this.guess].letters}set activeGuess(t){const e=this.guesses[this.guess];e.letters=t,this.guesses=this.guesses.map((s,i)=>i===this.guess?e:s)}get activeResult(){return this.guesses[this.guess].result}set activeResult(t){const e=this.guesses[this.guess];e.result=t,this.guesses=this.guesses.map((s,i)=>i===this.guess?e:s)}set activeStatus(t){const e=this.guesses[this.guess];e.status=t,this.guesses=this.guesses.map((s,i)=>i===this.guess?e:s)}removeLetter(){this.activeGuess.length>0&&(this.activeGuess=this.activeGuess.slice(0,-1))}insertLetter(t){this.activeGuess.length<E&&t in z&&this.letters[t]!=="absent"&&(this.activeGuess+=t)}win(){this.status="win"}lose(){this.status="lose"}nextRow(){this.guess++,this.status="idle"}invalidGuess(t,e){switch(this.status="invalid",e){case I.INVALID_CHAR_LEN:this.handleToast({detail:{content:"Not enough letters!"}});break;case I.INVALID_WORD:this.handleToast({detail:{content:"Not a valid word!"}});break}this._clearTimeout=setTimeout(()=>{this.status="idle"},yt)}async validate(t){return t.length<E?{success:!1,reason:I.INVALID_CHAR_LEN}:await ve(t)?{success:!0}:{success:!1,reason:I.INVALID_WORD}}updateKeyboard(){const t=this.activeGuess,e=this.activeResult,s={};for(let i=0;i<e.length;i++)s[t.charAt(i)]=e[i];this.letters=$($({},this.letters),s)}determineResults(t){const e=this.solution,s=this.activeResult;this.status="reveal";for(let i=0;i<t.length;i++){const a=t.charAt(i),r=e.charAt(i);s[i]=r===a?"correct":e.indexOf(a)>-1?"present":"absent"}this.activeResult=s}updateGameStatus(){this._clearTimeout=setTimeout(()=>{this.updateKeyboard(),this.activeStatus="evaluated",this.activeResult.some(t=>t!=="correct")?this.guess<5?this.nextRow():this.lose():this.win()},5*300)}async attemptGuess(){this._clearTimeout&&clearTimeout(this._clearTimeout);const t=this.activeGuess,e=await this.validate(t);e.success?(this.determineResults(t),this.updateGameStatus()):this.invalidGuess(t,e.reason),this.saveGame()}async saveStats(){const{saveStats:t}=await C;await t(this.gameId)}async saveGame(){this._autosaveTimeout&&clearTimeout(this._autosaveTimeout);const{saveGame:t}=await C;this._autosaveTimeout=setTimeout(async()=>{const e=this.status==="win"||this.status==="lose"?Date.now():void 0;await t({id:this.gameId,guess:this.guess,guesses:this.guesses,letters:this.letters,solution:this.solution,seed:this.seed,status:e?this.status:"idle",end:e}),e&&(await this.saveStats(),setTimeout(()=>{this.modal="stats"},750))},5*500)}async setupGame(t){try{this.gameId=t.id,this.guess=t.guess,this.guesses=t.guesses,this.solution=await le(t.solution,t.iv),this.seed=t.seed,this.status=t.status,this.letters=t.letters}catch(e){console.log(e)}}async startNewGame(){const{generateGame:t}=await C;await this.setupGame(await t()),this.handleModal({detail:{open:!1}})}async connectedCallback(){super.connectedCallback();const{active:t,modal:e}=await C;await this.setupGame(t()),this.modal=e,window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){return n`
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
          </wd-page>`:""}
      ${this.closingModal||this.modal?n`<wd-modal
            .open=${!this.closingModal&&this.modal!==""}
            .closing=${this.closingModal}
            @wd-modal=${this.handleModal}
          >
            ${this.modal==="help"?n`<wd-help></wd-help>`:null}
            ${this.modal==="game-in-progress"?n`<wd-game-in-progress></wd-game-in-progress>`:null}
            ${this.modal==="seed-played"?n`<wd-seed-played></wd-seed-played>`:null}
            ${this.modal==="help"?n`<wd-help></wd-help>`:null}
            ${this.modal==="stats"?n`<wd-stats @wd-new-game=${this.startNewGame}></wd-stats>`:null}
          </wd-modal>`:null}
      ${this.debugMode()}
    `}};f.styles=p`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    ${p``}
  `;b([w()],f.prototype,"gameId",2);b([w()],f.prototype,"seed",2);b([w()],f.prototype,"guess",2);b([w()],f.prototype,"guesses",2);b([w()],f.prototype,"letters",2);b([w()],f.prototype,"solution",2);b([w()],f.prototype,"status",2);b([w()],f.prototype,"page",2);b([w()],f.prototype,"modal",2);b([w()],f.prototype,"toast",2);b([w()],f.prototype,"closingPage",2);b([w()],f.prototype,"closingModal",2);f=b([g("wd-app")],f);Wt({});
