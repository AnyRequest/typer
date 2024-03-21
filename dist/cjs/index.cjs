(()=>{"use strict";var e={d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function s(e,t){for(const i of Object.keys(t))"string"==typeof e[i]||"number"==typeof e[i]||"boolean"==typeof e[i]||e[i]instanceof Array?e[i]=t[i]:s(e[i],t[i])}function i(e,t,s){const i=document.createElement(e);return i.innerHTML=t,s&&i.setAttribute(s.name,s.value),i}function n({blink:e,blinkTime:t=1,content:s="",color:i="#56565656",dir:n="vertical",size:r=1,distance:o=.1},h,a=!1){const c=e?`animation: cursor-blink ${t}s steps(2) infinite;`:"animation: none";return a?`[typoz-node-builder-name${h?`="${h}"`:""}]::before { content: '　'; display: inline-block; height: 1em; width: 1px; user-select: none; pointer-events: none; color: transparent; background-color: transparent; } [typoz-node-builder-name${h?`="${h}"`:""}] { } [typoz-node-builder-name${h?`="${h}"`:""}]>[typoz-cursor]::after { box-sizing: content-box; display: inline-block; content: "${s}"; width: 0px; height: 1em; overflow: hidden; box-shadow: 0 0 0 ${2.5*r}px ${i}; margin-left: ${o}em; margin-right: -${o}em; line-height: inherit;  ${c} }`:`[typoz-name${h?`="${h}"`:""}]::before { content: '　'; display: inline-block; height: 1em; width: 1px; user-select: none; pointer-events: none; color: transparent; background-color: transparent; } [typoz-name${h?`="${h}"`:""}] { } [typoz-name${h?`="${h}"`:""}]::after { display: inline-block; content: "${s}"; ${{vertical:`height: ${r}em; width: 0px; box-shadow: 0 0 0 ${2.5*r}px ${i}; margin-left: ${o}em;`,horizontal:`width: ${.6*r}em; height: calc(${.35*r}em * 0.35); /* margin-left: ${o}em; */`}[n]} line-height: inherit; overflow: hidden; background-color: ${i}; ${c} }`}function r(e){return document.querySelector(e)}function o(e){if(document.head.querySelector("[typoz-styles]"))document.head.querySelector("[typoz-styles]").innerHTML+=e;else{const t=i("style",e);t.setAttribute("typoz-styles",""),document.head.append(t)}}function h(e){return JSON.parse(JSON.stringify(e))}function a(){return"xyxyxx-xyyx-xxy-xxyyxxyxyyxy1xxyyxyxxx0xxyyy".replace(/x|y/g,(e=>{const t=e=>e[Math.floor(Math.random()*e.length)];switch(e){case"x":return t("abcdefghijklmnopqrstuvwxyz");case"y":return t("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")}}))}e.r(t),e.d(t,{KoreanParser:()=>p,Parser:()=>u,Typoz:()=>f,default:()=>w,version:()=>m});const c=(e,t)=>{t?console.warn(`this method is deprecated since version ${e}, please use "${t}" method`):console.warn(`this method is deprecated since version ${e}.`)};class d{static id=0;id;name;typingList=[];config;element;isStarted=!1;injectStyle;order=0;stop=!1;play;constructor(e,t,s){this.id=++d.id,this.element=e,this.name=a(),this.config=t,this.typingList=s.filter((e=>e&&e.length>0&&e[0].length>0&&e[0][0].length>0)),this.setup()}orderUp(){this.order=(this.order+1)%this.typingList.length||0}setup(){Object.freeze(this.typingList),Object.freeze(this.config),this.element.innerHTML="",this.element.setAttribute("typoz-id",""+this.id),this.element.setAttribute("typoz-name",this.name),this.element.setAttribute("typoz-processed",""),this.injectStyle=n(this.config.style.cursor,this.name)}copyCurrent(){try{return JSON.parse(JSON.stringify(this.typingList[this.order]))}catch(e){return console.error("TypeNode was destroyed. [name: "+this.name+"]",e),[]}}resume(){this.play(!0),this.stop=!1}pause(){this.stop=!0}clear(){this.isStarted=!1}destroy(){this.pause(),this.clear(),this.element.innerHTML=this.element.typings[0],delete this.element.typings,delete this.element.typozConfig,this.typingList=[]}wait(e=0){return new Promise((t=>{this.stop?this.play=t:setTimeout((()=>{t(!0)}),1e3*e)}))}run(){this.isStarted=!0,this.render()}renderEraseDivide(e){return new Promise((t=>{const s=[...this.element.innerText].map((e=>i("span",e).outerHTML));let n=s.length,r=e.pop();const o=setInterval((async()=>{if(this.stop&&await this.wait(),0===r.length){if(0===e.length)return clearInterval(o),this.element.innerText="",void t(!0);r=e.pop(),n-=1,this.element.innerHTML="",this.element.innerHTML=s.slice(0,n).join("")}else this.element.innerHTML=[...s.slice(0,n-1),i("span",r.pop()).outerHTML].join("")}),1/this.config.speed.erase*100)}))}renderWriteDivide(e){return new Promise((t=>{let s=0;const n=[];let r=e.shift();const o=setInterval((async()=>{this.stop&&await this.wait(),0===r.length?0===e.length?(clearInterval(o),this.element.innerHTML=n.join(""),t(!0)):(r=e.shift(),s+=1):(n[s]=i("span",r.shift()).outerHTML,this.element.innerHTML=n.join(""))}),1/this.config.speed.write*100)}))}renderErase(e){return new Promise((t=>{let s=this.element.innerText.length;const i=this.element.innerText;let n=e.pop();const r=setInterval((async()=>{if(this.stop&&await this.wait(),0===n.length){if(0===e.length)return clearInterval(r),this.element.innerText="",void t(!0);n=e.pop(),s-=1,this.element.innerText=i.slice(0,s)}else this.element.innerText=i.slice(0,s-1)+n.pop()}),1/this.config.speed.erase*100)}))}renderWrite(e){return new Promise((t=>{let s=0;const i=[];let n=e.shift();const r=setInterval((async()=>{this.stop&&await this.wait(),0===n.length?0===e.length?(clearInterval(r),this.element.innerText=i.join(""),t(!0)):(n=e.shift(),s+=1):(i[s]=n.shift(),this.element.innerText=i.join(""))}),1/this.config.speed.write*100)}))}async render(){!1!==this.isStarted&&(this.orderUp(),this.config.mode.divide?(await this.renderWriteDivide([...this.copyCurrent()]),await this.wait(this.config.delay),this.config.mode.erase&&(await this.renderEraseDivide([...this.copyCurrent()]),await this.wait(this.config.delay))):(await this.renderWrite([...this.copyCurrent()]),this.config.mode.erase&&(await this.renderErase([...this.copyCurrent()]),await this.wait(this.config.delay))),this.isStarted&&this.render())}}class l{}class p{onset=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];nucleus=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];coda=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];gapLetterWithWord=18816;startKorPoint=12593;startKorWordPoint=44032;changeOnsetPoint=this.coda.length*this.nucleus.length;korInitializePoint(e){if(!this.isKorean(e))throw new TypeError("required only korean.");return e.charCodeAt(0)-this.startKorWordPoint}onsetIndex(e){return Math.floor(this.korInitializePoint(e)/this.changeOnsetPoint)}nucleusIndex(e){return Math.floor(this.korInitializePoint(e)/this.coda.length%this.nucleus.length)}codeIndex(e){return Math.floor(this.korInitializePoint(e)%this.coda.length)}getOnset(e){return this.onset[this.onsetIndex(e)]}getNucleus(e){return this.nucleus[this.nucleusIndex(e)]}getCoda(e){return this.coda[this.codeIndex(e)]}isKorean(e){return!!String(e).match(/[ㄱ-ㅎ가-힣]/g)}wordToLetters(e){return this.wordToLettersWithEmpty(e).filter((e=>e))}wordToLettersWithEmpty(e){return[this.getOnset(e),this.getNucleus(e),this.getCoda(e)]}getOnsetIndex(e){return this.onset.indexOf(e)}getNucleusIndex(e){return this.nucleus.indexOf(e)}getCodaIndex(e){return this.coda.indexOf(e)}getOnsetCode(e){return this.getOnsetIndex(e)*this.changeOnsetPoint}getNucleusCode(e){return this.getNucleusIndex(e)%this.nucleus.length*this.coda.length}getCodaCode(e){return this.getCodaIndex(e)%this.coda.length}getWordCode(e){let t=0;return e[0]&&(t+=this.getOnsetCode(e[0])),e[1]&&(t+=this.getNucleusCode(e[1])),e[2]&&(t+=this.getCodaCode(e[2])),t+this.startKorWordPoint}lettersToWord(e){const t=this.getWordCode(e),s=String.fromCharCode(t);return 1===e.length?e[0]:s}}class u extends l{koreanParser;constructor(){super(),this.koreanParser=new p}wordToLetters(e){return this.wordToLettersWithEmpty(e).filter((e=>e))}wordToLettersWithEmpty(e){return[e,"",""]}categorizing(e){const t=[];for(const s of e.trim())if(this.koreanParser.isKorean(s)){const e=this.koreanParser.wordToLetters(s);t.push(e)}else{const e=this.wordToLetters(s);t.push(e)}return t}categorizingWithEmpty(e){const t=[];for(const s of e)if(this.koreanParser.isKorean(s)){const e=this.koreanParser.wordToLettersWithEmpty(s);t.push(e)}else{const e=this.wordToLettersWithEmpty(s);t.push(e)}return t}getTypingFlow(e){return e.map((e=>{const t=[];if(e.some(this.koreanParser.isKorean))for(let s=1;s<=e.length;s++){const i=e.slice(0,s),n=this.koreanParser.lettersToWord(i);t.push(n)}else t.push(...e);return t}))}parse(e){if(""!==e){const t=this.categorizing(e);return this.getTypingFlow(t)}return[]}}const y={autoRender:!0,mode:{erase:!0,realTyping:!1,divide:!0},speed:{write:1,erase:5},delay:3,nodes:[],querySelector:".typoz",style:{cursor:{blink:!0,blinkTime:1,content:"",color:"#56565656",dir:"vertical",size:1,distance:.1}}};class g{static instance(e){return new g(e)}static id=0;parser;id;name;_config=y;typeNode;originContent;taskQueue=[];pointer=0;content=[];stop=!1;pauseSignal=!1;resumeResolver;pausePromise;constructor(e){this.parser=e}pauseRender(){this.pauseSignal=!0,this.pausePromise=new Promise((e=>{this.resumeResolver=e}))}resumeRender(){this.resumeResolver(!0),this.pauseSignal=!1,this.resumeResolver=void 0,this.pausePromise=void 0}wait(e){return new Promise((t=>{setTimeout((()=>{t(e)}),e)}))}select(e){const t=r(e);return g.id+=1,this.id=g.id,this.typeNode=t,this.originContent=t.innerHTML,this.name=a(),this}conf(e=y){return c("0.0.19","config"),e&&s(this._config,e),o(n(this._config.style.cursor,this.name,!0)),this.typeNode.setAttribute("typoz-node-builder-id",""+this.id),this.typeNode.setAttribute("typoz-node-builder-name",this.name),this.typeNode.setAttribute("typoz-node-builder",""),this.typeNode.setAttribute("typoz-processed",""),this.typeNode.innerHTML="",this}config(e=y){return e&&s(this._config,e),o(n(this._config.style.cursor,this.name,!0)),this.typeNode.setAttribute("typoz-node-builder-id",""+this.id),this.typeNode.setAttribute("typoz-node-builder-name",this.name),this.typeNode.setAttribute("typoz-node-builder",""),this.typeNode.setAttribute("typoz-processed",""),this.typeNode.innerHTML="",this}getCurrentRenderContentLength(){return c("0.0.19"),this.content.length}cursorUpdate(e){this.pointer+e>=0&&this.pointer+e<=this.content.length&&(this.pointer+=e)}pause(e){return this.addTask((async()=>await this.wait(1e3*e))),this}commonWrite(e){this.addTask((async()=>(this.content=this.content.slice(0,this.pointer).concat(e).concat(this.content.slice(this.pointer)),this.cursorUpdate(1),this.renderContent(),await this.wait(1/this._config.speed.write*100))))}addplace(e,t){return this.addTask((async()=>(this.content=this.content.slice(0,this.pointer).concat(t).concat(this.content.slice(this.pointer)),this.cursorUpdate(e),this.renderContent(),await this.wait(1/this._config.speed.write*100)))),this}replace(e,t){return this.addTask((async()=>(this.content.splice(this.pointer,1,t),this.cursorUpdate(e),this.renderContent(),await this.wait(1/this._config.speed.write*100)))),this}write(e,t){for(const s of e)if(this.parser.koreanParser.isKorean(s)){const e=this.parser.categorizing(s),i=this.parser.getTypingFlow(e)[0];for(let e=0;e<i.length;e++){const s=i[e];0===e?this.addTask((async()=>(this.content=this.content.slice(0,this.pointer).concat(s).concat(this.content.slice(this.pointer)),this.renderContent(),await this.wait(t?1/t*100:1/this._config.speed.write*100)))):this.addTask((async()=>(this.content.splice(this.pointer,1,s),this.renderContent(),await this.wait(t?1/t*100:1/this._config.speed.write*100))))}this.addTask((async()=>(this.cursorUpdate(1),this.renderContent(),await this.wait(t?1/t*100:1/this._config.speed.write*100))))}else this.commonWrite(s);return this}erase(e=1,t){for(let s=0;s<e;s++)this.addTask((async()=>(this.cursorUpdate(-1),this.content.splice(this.pointer,1),this.renderContent(),await this.wait(t?1/t*100:1/(this._config.speed.erase/2)*100))));return this}allErase(e){return this.addTask((async()=>{for(;this.content.length>0;)this.cursorUpdate(-1),this.content.pop(),this.renderContent(),await this.wait(e?1/(e/2)/5*100:1/(this._config.speed.erase/2)/5*100);return e?1/(e/2)/5*100:1/(this._config.speed.erase/2)/5*100})),this}move(e,t){const s=Math.abs(e),i=Math.floor(Math.abs(e)/e);for(let e=0;e<s;e++)this.addTask((async()=>(this.cursorUpdate(i),this.renderContent(),await this.wait(t?1/t*100:100*this._config.delay))));return this}addTask(e){this.taskQueue.push(e)}async run(){for(const e of this.taskQueue){if(this.stop)break;this.pauseSignal&&await this.pausePromise,await e()}}async forever(e=!1){for(const e of this.taskQueue){if(this.stop)return;this.pauseSignal&&await this.pausePromise,await e()}if(await this.wait(1e3*this._config.delay),e)this.pointer=0,this.content=[],this.renderContent();else{for(;this.content.length>0;)this.cursorUpdate(-1),this.content.pop(),this.renderContent(),await this.wait(1/(this._config.speed.erase/2)/5*100);await this.wait(1e3*this._config.delay)}this.forever(e)}renderContent(){this.typeNode.innerHTML=this.content.map(((e,t)=>i("span",e,t===this.pointer-1?{name:"typoz-cursor",value:""}:void 0).outerHTML)).join("")}destroy(){this.stop=!0,this.taskQueue=[],this.typeNode.innerHTML=this.originContent,delete this.typeNode.typings,delete this.typeNode.typozConfig}}class f{defaultConfig=y;parser;createBuilder(){const e=g.instance(this.parser);return this.typeBuilderNodes.push(e),e}node(){c("0.1.0","createBuilder");const e=g.instance(this.parser);return this.typeBuilderNodes.push(e),e}config;typeNodes=[];typeBuilderNodes=[];constructor(){this.parser=new u}initialize(){this.config=h(this.defaultConfig)}destroy(){this.config=h(this.defaultConfig),d.id=0,g.id=0;for(const e of this.typeNodes)e.destroy();for(const e of this.typeBuilderNodes)e.destroy();this.typeNodes=[],this.typeBuilderNodes=[],document.head.querySelectorAll("[typoz-styles]").forEach((e=>{e?.remove?.()}))}globalConfig(e=y){e&&s(this.config,e),this.config.autoRender&&this.render()}convert(e){return this.parser.parse(e)}bulkConvert(e){const t=[];for(const s of e)t.push(this.convert(s));return t}resume(e){if(null!=e&&"string"==typeof e){const t=this.typeNodes.find((t=>t.name===e));t&&t.resume();const s=this.typeBuilderNodes.find((t=>t.name===e));s&&s.resumeRender()}else{for(const e of this.typeNodes)e.resume();for(const e of this.typeBuilderNodes)e.resumeRender()}}pause(e){if(null!=e&&"string"==typeof e){const t=this.typeNodes.find((t=>t.name===e));t&&t.pause();const s=this.typeBuilderNodes.find((t=>t.name===e));s&&s.resumeRender()}else{for(const e of this.typeNodes)e.pause();for(const e of this.typeBuilderNodes)e.pauseRender()}}defaultRender(){const e=(t=this.config.querySelector,document.querySelectorAll([].concat(t).join(",")));var t;for(const t of[...new Set(e)]){const e=t.innerText.trim();""!==e&&(Object.hasOwn(t,"typings")||(t.typings=[]),t.typings.push(e.trim()));const s=this.convert(e),i=new d(t,t.typozConfig||JSON.parse(JSON.stringify(this.config)),[s]);this.typeNodes.push(i)}}manualRender(e){for(const t of[...new Set(e)]){const e=t.innerText.trim();""!==e&&(Object.hasOwn(t,"typings")||(t.typings=[]),t.typings.push(e.trim()));const s=this.convert(e),i=new d(t,t.typozConfig||JSON.parse(JSON.stringify(this.config)),[s]);this.typeNodes.push(i)}}getConfigNodes(){return this.config.nodes.length>0?this.config.nodes.reduce(((e,{select:t,words:i,config:n})=>{const o=r(t);if(o){if(o.setAttribute,!Object.hasOwn(o,"typozConfig")){const e=JSON.parse(JSON.stringify(this.config));s(e,n||this.config),o.typozConfig=e}const t=function(e){return e.innerText.trim()}(o);""!==t&&(Object.hasOwn(o,"typings")||(o.typings=[]),o.typings.push(t.trim())),i?.length>0&&o.typings.push(...i.map((e=>e.trim()))),e.push(o)}else console.error(new SyntaxError("not found element. select: "+t,{cause:t}));return e}),[]):[]}nodesRender(){const e=this.getConfigNodes();for(const t of[...new Set(e)]){const e=[t.innerText.trim()];t.typings?.length>0&&e.push(...t.typings);const s=new d(t,t.typozConfig||JSON.parse(JSON.stringify(this.defaultConfig)),this.bulkConvert([...new Set(e)]));this.typeNodes.includes(s)||this.typeNodes.push(s)}}render(e){let t="@keyframes cursor-blink { 100% { opacity: 0; } }";t+=n(this.config.style.cursor),this.defaultRender(),this.manualRender(e),this.nodesRender();for(const e of this.typeNodes)t+=e.injectStyle+"\n",e.run();o(t)}}const{version:m}={version:"0.1.0"},w=f;exports.KoreanParser=t.KoreanParser,exports.Parser=t.Parser,exports.Typoz=t.Typoz,exports.default=t.default,exports.version=t.version,Object.defineProperty(exports,"__esModule",{value:!0})})();