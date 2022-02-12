var jt=Object.defineProperty,Gt=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var ht=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable;var pt=(t,e,a)=>e in t?jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,$=(t,e)=>{for(var a in e||(e={}))St.call(e,a)&&pt(t,a,e[a]);if(ht)for(var a of ht(e))zt.call(e,a)&&pt(t,a,e[a]);return t},vt=(t,e)=>Gt(t,Dt(e));import{v as Et,n as Rt,l as Mt,r as h,e as c,s as p,$ as n,a as v,o as Tt,t as g}from"./vendor.8e6c5f1b.js";const At=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};At();function Lt(t={}){const{immediate:e=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:s,onRegisterError:o}=t;let r;const w=async(b=!0)=>{};return"serviceWorker"in navigator&&(r=new Et("./sw.js",{scope:"./",type:"classic"}),r.addEventListener("activated",b=>{b.isUpdate?window.location.reload():i==null||i()}),r.register({immediate:e}).then(b=>{s==null||s(b)}).catch(b=>{o==null||o(b)})),w}const Nt="modulepreload",gt={},Yt="./",Wt=function(e,a){return!a||a.length===0?e():Promise.all(a.map(i=>{if(i=`${Yt}${i}`,i in gt)return;gt[i]=!0;const s=i.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Nt,s||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),s)return new Promise((w,b)=>{r.addEventListener("load",w),r.addEventListener("error",b)})})).then(()=>e())},Kt=Wt(()=>import("./config.d171c315.js"),[]);let q={};(async()=>{q=await Kt})();const z={q:"empty",w:"empty",e:"empty",r:"empty",t:"empty",y:"empty",u:"empty",i:"empty",o:"empty",p:"empty",a:"empty",s:"empty",d:"empty",f:"empty",g:"empty",h:"empty",j:"empty",k:"empty",l:"empty",z:"empty",x:"empty",c:"empty",v:"empty",b:"empty",n:"empty",m:"empty"},Ht={Enter:!0,Backspace:!0},Vt=$($({},z),Ht),mt=60*10*1e3,E=5,X=6,wt=600,Bt=750,Ut={empty:"\u2B1B",absent:"\u{1F7E6}",present:"\u{1F7E8}",correct:"\u{1F7E9}"};var I;(function(t){t[t.INVALID_CHAR_LEN=0]="INVALID_CHAR_LEN",t[t.INVALID_WORD=1]="INVALID_WORD"})(I||(I={}));let d=null;const Ft=t=>{d=t},qt=()=>{d=null},Xt=t=>{const e=document.createElement("output");return e.innerText=t,e.classList.add("toast"),e.setAttribute("role","status"),e},Zt=t=>{const e=(d==null?void 0:d.offsetHeight)||0;d==null||d.appendChild(t);const i=((d==null?void 0:d.offsetHeight)||0)-e;d==null||d.animate([{transform:`translateY(${i}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"})},Jt=t=>{const{matches:e}=window.matchMedia("(prefers-reduced-motion: no-preference)");(d==null?void 0:d.children.length)&&e?Zt(t):d==null||d.appendChild(t)},Y=t=>{const e=Xt(t);return Jt(e),new Promise(async a=>{await Promise.allSettled(e.getAnimations().map(i=>i.finished)),d==null||d.removeChild(e),a()})};function Qt(t,e,a,i){return function(){t>>>=0,e>>>=0,a>>>=0,i>>>=0;let s=t+e|0;return t=e^e>>>9,e=a+(a<<3)|0,a=a<<21|a>>>11,i=i+1|0,s=s+i|0,a=a+s|0,(s>>>0)/4294967296}}function te(t){for(var e=0,a=1779033703^t.length;e<t.length;e++)a=Math.imul(a^t.charCodeAt(e),3432918353),a=a<<13|a>>>19;return function(){return a=Math.imul(a^a>>>16,2246822507),a=Math.imul(a^a>>>13,3266489909),(a^=a>>>16)>>>0}}const ee={alg:"A256GCM",ext:!0,k:"6KWvelTztanQl8-rJ1a1f2B_VcuIZDIrjBsoUiOY-sc",key_ops:["encrypt","decrypt"],kty:"oct"};let W=null;(async()=>{W||(W=await crypto.subtle.importKey("jwk",ee,"AES-GCM",!0,["encrypt","decrypt"]))})();const se=t=>new TextEncoder().encode(t),ae=t=>new TextDecoder().decode(t),ft=async t=>{const e=se(t),a=crypto.getRandomValues(new Uint8Array(12)),i=await crypto.subtle.encrypt({name:"AES-GCM",iv:a},W,e);return[a,i]},ie=async(t,e)=>{if(!e||!t)return"";const a=await crypto.subtle.decrypt({name:"AES-GCM",iv:e},W,t);return ae(new Uint8Array(a))},re=async(t,e)=>typeof t=="string"?t:await ie(t,e),oe=async(t,e)=>typeof t=="string"?await ft(t):[e||new Uint8Array(12),t],ne=()=>Rt(),le=t=>{const e=te(t);return Qt(e(),e(),e(),e())},Z=(t,e=0)=>Array.from({length:e},t),de=()=>Z(()=>"empty",E),bt=(t="",e=void 0)=>Z(()=>({letters:t,status:"tbd",result:e||[...de()]}),X),J=bt(),yt=J[0],x=Mt.createInstance({name:"wordy"});let Q=0;const ce=async t=>{const{words:e}=q;t=t||ne(),Q||(Q=e.length);const a=le(t);return{word:e[Math.floor(a()*Q)],seed:t}},ue=async t=>{const{words:e}=q;return e.indexOf(t)>-1},xt=async t=>{const{word:e,seed:a}=await ce(t),[i,s]=await ft(e);return{id:a,guess:0,guesses:bt(),solution:s,iv:i,seed:a,letters:z,status:"idle"}},C=(async()=>{var dt,ct;const t=new URLSearchParams(location.search).get("seed")||void 0,e=await x.getItem("activeGameId");let a=await x.getItem("games")||{};const i=!!(e&&!((dt=a==null?void 0:a[e])==null?void 0:dt.end)),s=!!(t&&t in a&&((ct=a[t])==null?void 0:ct.end)),o=!s&&!i;let r=await x.getItem("stats")||{},w=i?a[e]:await xt(s?void 0:t);const b=r.lastGameId===e?"stats":await x.getItem("shown_help")?t&&i?"game-in-progress":t&&s?"seed-played":"":"help";if(b==="help"&&await x.setItem("shown_help","1"),t){const u=new URL(window.location.href);u.searchParams.delete("seed"),history.pushState({path:u.href},"",u.href)}const F=async(u,l=!0)=>{var O,S;w=$($({},a[u.id]),u),l&&!w.start&&(w.start=Date.now());const y=((O=a[u.id])==null?void 0:O.solution)||w.solution,_=((S=a[u.id])==null?void 0:S.iv)||w.iv,[P,D]=await oe(y,_);a[u.id]=vt($({},w),{solution:D,iv:P}),await x.setItem("games",a)},Ot=(u,l,y,_)=>{const P=l-X/X;return(u-u*P)*_*100*((mt-y)/mt)},It=async u=>{const l=a[u],y=r.distribution||{},_=(l.guess+(r.avgGuess||0))/2,P=l.status==="win"?(r.streak||0)+1:0,D=Math.max(P,r.maxStreak||0),O=(r.wins||0)+(l.status==="win"?1:0),S=(r.losses||0)+(l.status==="lose"?1:0),Ct=O/(O+S),ut=((l.end||0)-(l.start||0)+(r.avgDuration||0))/2;r={streak:P,lastResult:l.status==="win"?"win":"lose",lastGameId:l.id,lastGuess:l.guess,avgGuess:_,avgDuration:ut,maxStreak:D,wins:O,losses:S,rating:Ot(D,_,ut,Ct),distribution:{0:(y[0]||0)+(l.status==="win"&&l.guess===0?1:0),1:(y[1]||0)+(l.status==="win"&&l.guess===1?1:0),2:(y[2]||0)+(l.status==="win"&&l.guess===2?1:0),3:(y[3]||0)+(l.status==="win"&&l.guess===3?1:0),4:(y[4]||0)+(l.status==="win"&&l.guess===4?1:0),5:(y[5]||0)+(l.status==="win"&&l.guess===5?1:0)}},await x.setItem("stats",r)};return(!e||o)&&(await x.setItem("activeGameId",w.id),await F(w,!1)),{games:()=>a,active:()=>w,stats:()=>r,modal:b,saveGame:F,saveStats:It,generateGame:async()=>{const u=await xt();return await x.setItem("activeGameId",u.id),await F(u,!1),u}}})(),he=t=>t.map(e=>e.result.map(a=>Ut[a]).join("")).join(`
`),pe=async(t,e)=>{const a=new URL(location.href);a.searchParams.set("seed",e),t=`
${a.toString()}

${t}
    `;try{navigator.share?(await navigator.share({url:a.toString(),title:`Puzzle ${e}`,text:t}),Y("Shared puzzle result")):(await navigator.clipboard.writeText(t),Y("Copied puzzle result"))}catch(i){Y(i.message)}};var ve=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,$t=(t,e,a,i)=>{for(var s=i>1?void 0:i?ge(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&ve(e,a,s),s};let K=class extends p{constructor(){super();const t=localStorage.getItem("theme_dark");t!==null?this.dark=t==="on":(this.dark=window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme_dark",this.dark?"on":""))}updateTheme(t){this.dark=t.detail.on}connectedCallback(){super.connectedCallback(),setTimeout(()=>{Ft(this.renderRoot.querySelector(".toast-layer"))},0)}disconnectedCallback(){super.disconnectedCallback(),qt()}render(){return n`
      <section class="toast-layer"></section>
      <main @wd-dark-theme=${this.updateTheme}>
        <slot></slot>
      </main>
    `}};K.styles=h`
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
  `;$t([c({reflect:!0})],K.prototype,"dark",2);K=$t([v("wd-theme")],K);var me=Object.defineProperty,we=Object.getOwnPropertyDescriptor,tt=(t,e,a,i)=>{for(var s=i>1?void 0:i?we(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&me(e,a,s),s};const fe={backspace:'<path stroke-linecap="round" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path>',stats:'<path fill="none" stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',settings:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',help:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',refresh:'<path fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>',share:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>',x:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'},kt={sm:20,md:24,lg:28};let R=class extends p{constructor(){super(...arguments);this.name="",this.size="md"}render(){return n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${kt[this.size]}
        width=${kt[this.size]}
        viewBox="0 0 24 24"
      >
        ${Tt(fe[this.name])}
      </svg>
    `}};R.styles=h`
    :host {
      display: inline-block;
      height: 24px;
      width: 24px;
      pointer-events: none;
      user-select: none;
    }
  `;tt([c()],R.prototype,"name",2);tt([c()],R.prototype,"size",2);R=tt([v("wd-icon")],R);var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,xe=(t,e,a,i)=>{for(var s=i>1?void 0:i?ye(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&be(e,a,s),s};let et=class extends p{showHelp(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-page",{detail:{content:"help",open:!0},bubbles:!0,composed:!0}))}showStats(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-modal",{detail:{content:"stats",open:!0},bubbles:!0,composed:!0}))}showSettings(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-page",{detail:{content:"settings",open:!0},bubbles:!0,composed:!0}))}render(){return n`
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
    `}};et.styles=h`
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
  `;et=xe([v("wd-header")],et);var $e=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,H=(t,e,a,i)=>{for(var s=i>1?void 0:i?ke(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&$e(e,a,s),s};let j=class extends p{constructor(){super(...arguments);this.status="empty",this.animation="",this.letter=""}render(){return n` <div class="cell">${this.letter}</div> `}};j.styles=h`
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
      animation-duration: ${Bt}ms;
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
  `;H([c({reflect:!0})],j.prototype,"status",2);H([c({reflect:!0})],j.prototype,"animation",2);H([c()],j.prototype,"letter",2);j=H([v("wd-cell")],j);var _e=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,M=(t,e,a,i)=>{for(var s=i>1?void 0:i?Pe(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&_e(e,a,s),s};let k=class extends p{constructor(){super(...arguments);this.guess=yt.letters,this.result=yt.result,this.status="idle",this.evaluated=!1,this.revealed=!1}updated(){!this.revealed&&this.status==="reveal"&&(this.revealed=!0),this.revealed&&this.evaluated&&(this.revealed=!1)}render(){let t=this.guess.split("");t=[...t,...Z(()=>"",E-t.length)];const e=this.status==="reveal"&&!this.revealed;return n`
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
    `}};k.styles=h`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${wt}ms;
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
  `;M([c()],k.prototype,"guess",2);M([c()],k.prototype,"result",2);M([c({reflect:!0})],k.prototype,"status",2);M([c()],k.prototype,"evaluated",2);k=M([v("wd-row")],k);var Oe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,V=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ie(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Oe(e,a,s),s};let G=class extends p{constructor(){super(...arguments);this.guess=0,this.status="idle",this.guesses=J}render(){return n`
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
    `}};G.styles=h`
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
  `;V([c()],G.prototype,"guess",2);V([c()],G.prototype,"status",2);V([c()],G.prototype,"guesses",2);G=V([v("wd-board")],G);var Ce=Object.defineProperty,je=Object.getOwnPropertyDescriptor,_t=(t,e,a,i)=>{for(var s=i>1?void 0:i?je(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ce(e,a,s),s};let B=class extends p{constructor(){super(...arguments);this.letters=z}createRenderRoot(){const t=super.createRenderRoot(),e=a=>{var s;a.preventDefault();const{key:i=""}=((s=a==null?void 0:a.target)==null?void 0:s.dataset)||{};Vt[i]&&window.dispatchEvent(new KeyboardEvent("keydown",{key:i}))};return t.addEventListener("click",e),t}render(){return n`
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
    `}};B.styles=h`
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
  `;_t([c()],B.prototype,"letters",2);B=_t([v("wd-keyboard")],B);var Ge=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Se=(t,e,a,i)=>{for(var s=i>1?void 0:i?De(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ge(e,a,s),s};let st=class extends p{render(){return n`
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
    `}};st.styles=h`
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
  `;st=Se([v("wd-help")],st);var ze=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Re=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ee(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&ze(e,a,s),s};let at=class extends p{render(){return n`
      <div class="container">
        <h1>Game Already Played</h1>
        <div class="content">
          You have already played the game generated from the shared link. Each
          game is uniquely generated for the user. Upon completion (win or lose)
          you may share this game with others, and each player is allowed to
          play the shared game only once. You are not allowed to replay your own
          shared game link.
        </div>
      </div>
    `}};at.styles=h`
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
    .content {
      flex: 1;
    }
  `;at=Re([v("wd-seed-played")],at);var Me=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ae=(t,e,a,i)=>{for(var s=i>1?void 0:i?Te(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Me(e,a,s),s};let it=class extends p{render(){return n`
      <div class="container">
        <h1>Game In Progress</h1>
        <div class="content">
          You are currently in the middle of an active game. To load a game from
          a shared link, you must first complete the current game.
        </div>
      </div>
    `}};it.styles=h`
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
    .content {
      flex: 1;
    }
  `;it=Ae([v("wd-game-in-progress")],it);var Le=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,rt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ne(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Le(e,a,s),s};let T=class extends p{constructor(){super(...arguments);this.checked=!1,this.disabled=!1}render(){return n`
      <div class="container">
        <label><slot></slot></label>
        <div class="switch">
          <span class="knob"></span>
        </div>
      </div>
    `}};T.styles=h`
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
  `;rt([c({reflect:!0})],T.prototype,"checked",2);rt([c({reflect:!0})],T.prototype,"disabled",2);T=rt([v("wd-switch")],T);var Ye=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Pt=(t,e,a,i)=>{for(var s=i>1?void 0:i?We(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ye(e,a,s),s};let U=class extends p{constructor(){super(...arguments);this.darkTheme=localStorage.getItem("theme_dark")||""}toggleDarkTheme(t){t.preventDefault(),this.darkTheme=this.darkTheme==="on"?"":"on",localStorage.setItem("theme_dark",this.darkTheme),this.dispatchEvent(new CustomEvent("wd-dark-theme",{detail:{on:this.darkTheme==="on"},bubbles:!0,composed:!0}))}render(){return n`
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
    `}};U.styles=h`
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
  `;Pt([g()],U.prototype,"darkTheme",2);U=Pt([v("wd-settings")],U);var Ke=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ot=(t,e,a,i)=>{for(var s=i>1?void 0:i?He(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ke(e,a,s),s};let A=class extends p{constructor(){super(...arguments);this.stats={},this.activeGameId=""}async connectedCallback(){await super.connectedCallback();const{stats:t,active:e}=await C;this.stats=t(),this.activeGameId=e().id}newGame(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-new-game",{composed:!0,bubbles:!0}))}async share(t){t.preventDefault();const{active:e}=await C,{seed:a,guesses:i}=e();await pe(he(i),a)}get ratingGrade(){const t=this.stats.rating;return t>=0?"S":t>=-500?"A":t>=-1e3?"B":t>=-2e3?"C":t>=-5e3?"D":"E"}graphWidth(t){const e=this.stats.wins;return e?Math.max(Math.floor(this.stats.distribution[t]/e*100),7):7}render(){const t=this.stats.lastGameId||"",e=this.stats.lastGuess||0,a=this.ratingGrade;return n`
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
    `}};A.styles=h`
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
  `;ot([g()],A.prototype,"stats",2);ot([g()],A.prototype,"activeGameId",2);A=ot([v("wd-stats")],A);var Ve=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,nt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Be(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ve(e,a,s),s};let L=class extends p{constructor(){super(...arguments);this.open=!1,this.closing=!1}updated(){this.open}closePage(){this.dispatchEvent(new CustomEvent("wd-page",{detail:{open:!1},composed:!0,bubbles:!0}))}render(){return n`
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
    `}};L.styles=h`
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
  `;nt([c({reflect:!0})],L.prototype,"open",2);nt([c({reflect:!0})],L.prototype,"closing",2);L=nt([v("wd-page")],L);var Ue=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,lt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Fe(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ue(e,a,s),s};let N=class extends p{constructor(){super(...arguments);this.open=!1,this.closing=!1}closeModal(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("wd-modal",{detail:{open:!1},composed:!0,bubbles:!0}))}preventClose(t){t.preventDefault(),t.stopPropagation()}render(){return n`
      <div class="overlay" @click=${this.closeModal}>
        <div class="content" @click=${this.preventClose}>
          <slot></slot>
          <button @click=${this.closeModal} class="close-icon">
            <wd-icon name="x"></wd-icon>
          </button>
        </div>
      </div>
    `}};N.styles=h`
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
  `;lt([c({reflect:!0})],N.prototype,"open",2);lt([c({reflect:!0})],N.prototype,"closing",2);N=lt([v("wd-modal")],N);var qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,f=(t,e,a,i)=>{for(var s=i>1?void 0:i?Xe(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&qe(e,a,s),s};let m=class extends p{constructor(){super(...arguments);this.gameId="",this.seed="",this.guess=0,this.guesses=J,this.letters=z,this.solution="",this.status="idle",this.page="",this.modal="",this.toast="",this.closingPage=!1,this.closingModal=!1,this._clearTimeout=null,this._autosaveTimeout=null,this._handleKeydown=async t=>{if(!(t.isComposing||t.ctrlKey||t.altKey||this.status!=="idle"))switch(t.key){case"Escape":this.page="",this.modal="";return;case"Backspace":return this.removeLetter();case"Enter":return await this.attemptGuess();default:return this.insertLetter(t.key.toLowerCase())}}}debugMode(){return null}handleModal(t){const{open:e=!1,content:a=""}=t.detail;e?this.modal=a:(this.closingModal=!0,setTimeout(()=>{this.modal="",this.closingModal=!1},200))}handleToast(t){const{content:e=""}=t.detail;Y(e)}handlePage(t){const{open:e=!1,content:a=""}=t.detail;e?this.page=a:(this.closingPage=!0,setTimeout(()=>{this.page="",this.closingPage=!1},200))}get activeGuess(){return this.guesses[this.guess].letters}set activeGuess(t){const e=this.guesses[this.guess];e.letters=t,this.guesses=this.guesses.map((a,i)=>i===this.guess?e:a)}get activeResult(){return this.guesses[this.guess].result}set activeResult(t){const e=this.guesses[this.guess];e.result=t,this.guesses=this.guesses.map((a,i)=>i===this.guess?e:a)}set activeStatus(t){const e=this.guesses[this.guess];e.status=t,this.guesses=this.guesses.map((a,i)=>i===this.guess?e:a)}removeLetter(){this.activeGuess.length>0&&(this.activeGuess=this.activeGuess.slice(0,-1))}insertLetter(t){this.activeGuess.length<E&&t in z&&this.letters[t]!=="absent"&&(this.activeGuess+=t)}win(){this.status="win"}lose(){this.status="lose"}nextRow(){this.guess++,this.status="idle"}invalidGuess(t,e){switch(this.status="invalid",e){case I.INVALID_CHAR_LEN:this.handleToast({detail:{content:"Not enough letters!"}});break;case I.INVALID_WORD:this.handleToast({detail:{content:"Not a valid word!"}});break}this._clearTimeout=setTimeout(()=>{this.status="idle"},wt)}async validate(t){return t.length<E?{success:!1,reason:I.INVALID_CHAR_LEN}:await ue(t)?{success:!0}:{success:!1,reason:I.INVALID_WORD}}updateKeyboard(){const t=this.activeGuess,e=this.activeResult,a={};for(let i=0;i<e.length;i++)a[t.charAt(i)]=e[i];this.letters=$($({},this.letters),a)}determineResults(t){const e=this.solution,a=this.activeResult;this.status="reveal";for(let i=0;i<t.length;i++){const s=t.charAt(i),o=e.charAt(i);a[i]=o===s?"correct":e.indexOf(s)>-1?"present":"absent"}this.activeResult=a}updateGameStatus(){this._clearTimeout=setTimeout(()=>{this.updateKeyboard(),this.activeStatus="evaluated",this.activeResult.some(t=>t!=="correct")?this.guess<5?this.nextRow():this.lose():this.win()},5*300)}async attemptGuess(){this._clearTimeout&&clearTimeout(this._clearTimeout);const t=this.activeGuess,e=await this.validate(t);e.success?(this.determineResults(t),this.updateGameStatus()):this.invalidGuess(t,e.reason),this.saveGame()}async saveStats(){const{saveStats:t}=await C;await t(this.gameId)}async saveGame(){this._autosaveTimeout&&clearTimeout(this._autosaveTimeout);const{saveGame:t}=await C;this._autosaveTimeout=setTimeout(async()=>{const e=this.status==="win"||this.status==="lose"?Date.now():void 0;await t({id:this.gameId,guess:this.guess,guesses:this.guesses,letters:this.letters,solution:this.solution,seed:this.seed,status:e?this.status:"idle",end:e}),e&&(await this.saveStats(),setTimeout(()=>{this.modal="stats"},750))},5*500)}async setupGame(t){try{this.gameId=t.id,this.guess=t.guess,this.guesses=t.guesses,this.solution=await re(t.solution,t.iv),this.seed=t.seed,this.status=t.status,this.letters=t.letters}catch(e){console.log(e)}}async startNewGame(){const{generateGame:t}=await C;await this.setupGame(await t()),this.handleModal({detail:{open:!1}})}async connectedCallback(){super.connectedCallback();const{active:t,modal:e}=await C;await this.setupGame(t()),this.modal=e,window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){return n`
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
    `}};m.styles=h`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    ${h``}
  `;f([g()],m.prototype,"gameId",2);f([g()],m.prototype,"seed",2);f([g()],m.prototype,"guess",2);f([g()],m.prototype,"guesses",2);f([g()],m.prototype,"letters",2);f([g()],m.prototype,"solution",2);f([g()],m.prototype,"status",2);f([g()],m.prototype,"page",2);f([g()],m.prototype,"modal",2);f([g()],m.prototype,"toast",2);f([g()],m.prototype,"closingPage",2);f([g()],m.prototype,"closingModal",2);m=f([v("wd-app")],m);Lt({});
