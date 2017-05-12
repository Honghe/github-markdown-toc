!function(){'use strict';function c(a){for(var b=1;b<arguments.length;b+=1){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function d(a,b){b.appendChild(a)}function e(a,b,c){b.insertBefore(a,c)}function f(a){a.parentNode.removeChild(a)}function g(a,b,c){for(var d=c;d<a.length;d+=1)a[d]&&a[d].destroy(b)}function h(a){return document.createElement(a)}function i(a){return document.createTextNode(a)}function j(a,b,c){a.addEventListener(b,c,!1)}function k(a,b,c){a.removeEventListener(b,c,!1)}function l(a,b,c){a.setAttribute(b,c)}function n(a,b){return a!==b||(a&&typeof a==='object'||typeof a==='function')}function o(a,b,c,d){for(var e in b){if(!(e in c))continue;var f=c[e],g=d[e];if(n(f,g)){var h=b[e];if(!h)continue;for(var i=0;i<h.length;i+=1){var j=h[i];if(j.__calling)continue;j.__calling=!0;j.call(a,f,g);j.__calling=!1}}}}function p(a){return a?this._state[a]:this._state}function q(a,b){var c=a in this._handlers&&this._handlers[a].slice();if(!c)return;for(var d=0;d<c.length;d+=1)c[d].call(this,b)}function r(a,b,c){var d=c&&c.defer?this._observers.post:this._observers.pre;(d[a]||(d[a]=[])).push(b);(!c||c.init!==!1)&&(b.__calling=!0,b.call(this,this._state[a]),b.__calling=!1);return{cancel:function(){var c=d[a].indexOf(b);~c&&d[a].splice(c,1)}}}function s(a,b){if(a==='teardown')return this.on('destroy',b);var c=this._handlers[a]||(this._handlers[a]=[]);c.push(b);return{cancel:function(){var a=c.indexOf(b);~a&&c.splice(a,1)}}}function t(a){this._set(c({},a));this._root._flush()}function u(){if(!this._renderHooks)return;while(this._renderHooks.length)this._renderHooks.pop()()}var v={get:p,fire:q,observe:r,on:s,set:t,_flush:u},w=function(){return{methods:{onBtnClicked(){this.get('isEnabled')&&this.fire('toggle-nav')}}}}();function x(a,b){var c,m,n,o,p,q=h('div');q.className="github-markdown-toc";l(q,'aria-disabled',c=!a.isEnabled);l(q,'aria-busy',m=a.isLoading);l(q,'data-open',n=a.isOpen);var r=h('nav');d(r,q);r.id="github-markdown-toc__nav-panel";l(r,'aria-hidden',o=!a.isOpen);var s=h('ol');d(s,r);var t=a.headers,u=[];for(var v=0;v<t.length;v+=1)u[v]=y(a,t,t[v],v,b),u[v].mount(s,null);d(i("\n  "),q);var w=h('button');d(w,q);w.type="button";w.className="toggle-btn";l(w,'aria-controls',"github-markdown-toc__nav-panel");w.disabled=p=!a.isEnabled;function x(a){b.onBtnClicked()}j(w,'click',x);return{mount:function(a,b){e(q,a,b)},update:function(a,d){c!==(c=!d.isEnabled)&&l(q,'aria-disabled',c);m!==(m=d.isLoading)&&l(q,'aria-busy',m);n!==(n=d.isOpen)&&l(q,'data-open',n);o!==(o=!d.isOpen)&&l(r,'aria-hidden',o);var e=d.headers;if('headers' in a){for(var f=0;f<e.length;f+=1)u[f]?u[f].update(a,d,e,e[f],f):(u[f]=y(d,e,e[f],f,b),u[f].mount(s,null));g(u,!0,e.length);u.length=e.length}p!==(p=!d.isEnabled)&&(w.disabled=p)},destroy:function(a){g(u,!1,0);k(w,'click',x);a&&f(q)}}}function y(a,b,c,g,j){var k,m,n,o=h('li');l(o,'data-level',k=c.level);var p=h('a');d(p,o);p.href=m=c.link;var q=i(n=c.text);d(q,p);return{mount:function(a,b){e(o,a,b)},update:function(a,b,c,d,e){k!==(k=d.level)&&l(o,'data-level',k);m!==(m=d.link)&&(p.href=m);n!==(n=d.text)&&(q.data=n)},destroy:function(a){a&&f(o)}}}function z(a){a=a||{};this._state=a.data||{};this._observers={pre:Object.create(null),post:Object.create(null)};this._handlers=Object.create(null);this._root=a._root||this;this._yield=a._yield;this._torndown=!1;this._fragment=x(this._state,this);a.target&&this._fragment.mount(a.target,null)}c(z.prototype,w.methods,v);z.prototype._set=function b(a){var d=this._state;this._state=c({},d,a);o(this,this._observers.pre,a,d);this._fragment.update(a,this._state);o(this,this._observers.post,a,d)};z.prototype.teardown=z.prototype.destroy=function b(a){this.fire('destroy');this._fragment.destroy(a!==!1);this._fragment=null;this._state={};this._torndown=!0};class A{constructor(){this._handlers=new Map()}on(a,b){this._handlers.has(a)||this._handlers.set(a,new Set());this._handlers.get(a).add(b)}off(a,b){if(!this._handlers.has(a)){return !1}return this._handlers.get(a).delete(b)}emit(a,b){this._handlers.has(a)&&this._handlers.get(a).forEach(a=>a(b))}}function B(a){if(!a){return !1}let b=Object.getPrototypeOf(a);return Object.prototype.toString.call(a)==='[object Object]'&&(b===Object.getPrototypeOf({})||b===null)}function C(a){let b={};Object.entries(a).forEach(([a,c])=>{B(c)&&(b[a]=C(c))});return Object.assign({},a,b)}function D(a,...b){let c=b.map(a=>B(a)?C(a):a);return Object.assign(a,...c)}let E=Symbol('on-change');class F{constructor(a){this._dispatcher=a}dispatch(a,b){this._dispatcher.emit(a,b)}}class G extends A{constructor(a){super();this._state={};this._dispatcher=a}setState(a){this._state=D({},this._state,a);this.emit(E)}getState(){return D({},this._state)}register(a,b){this._dispatcher.on(a,b)}onChange(a){this.on(E,a)}removeChangeListener(a){return this.off(E,a)}}let H=A;class I{constructor(a){this.RELEASE=Symbol('release');this.CODE=Symbol('code');this.WIKI=Symbol('wiki');this.UNKNOWN=Symbol('unknown');let{pathname:b}=new URL(a),[,c,d,e,...f]=b.split('/');e==='releases'&&f.length===0?(this._type=this.RELEASE):e==='blob'||e==='tree'||c&&d&&!e?(this._type=this.CODE):e==='wiki'?(this._type=this.WIKI):(this._type=this.UNKNOWN)}getType(){return this._type}isReleasePage(){return this._type===this.RELEASE}isCodePage(){return this._type===this.CODE}isWikiPage(){return this._type===this.WIKI}isUnknownPage(){return this._type===this.UNKNOWN}}function J(){return new Promise(a=>{chrome.runtime.sendMessage({type:'is-js-enabled'},a)})}class K{constructor(){this._headerSelector='h1, h2, h3, h4, h5, h6';this.headers=[]}async getHeaderList(){return[]}_validateHeaders(){this.headers=this.headers.filter(a=>{return Boolean(a.textContent.trim())})}static createFromUrl(a){let b=new I(a);if(b.isReleasePage())return new L();if(b.isCodePage())return new M();if(b.isWikiPage())return new N();return new O()}}class L extends K{constructor(){super();this.headers=Array.from(document.querySelectorAll('.release-title'));this._validateHeaders()}async getHeaderList(){return this.headers.map(a=>{let{href: b}=a.querySelector('a'),c=a.textContent.trim();return{link:b,level:1,text:c}})}}class M extends K{constructor(){super();let a=document.querySelector('.markdown-body');a&&(this.headers=Array.from(a.querySelectorAll(this._headerSelector)));this._validateHeaders()}async getHeaderList(){let a=await J();return this.headers.map(b=>{let{id:c,href:d}=b.querySelector('.anchor');c=`#${c}`;d=new URL(d).hash;let e=a?d:c,f=Number(b.tagName[1]),g=b.textContent.trim();return{link:e,level:f,text:g}})}}class N extends K{constructor(){super();let a=document.querySelector('.wiki-body .markdown-body');a&&(this.headers=Array.from(a.querySelectorAll(this._headerSelector)));this._validateHeaders()}async getHeaderList(){let a=await J();return this.headers.map(b=>{let{id:c,href:d}=b.querySelector('.anchor');c=`#${c}`;d=new URL(d).hash;let e=a?d:c,f=Number(b.tagName[1]),g=b.textContent.trim();return{link:e,level:f,text:g}})}}class O extends K{}let P={START_LOADING:Symbol('start-loading'),MOVE_TO_PAGE:Symbol('move-to-page'),TOGGLE_NAV:Symbol('toggle-nav')};class Q extends F{startLoading(){this.dispatch(P.START_LOADING)}async moveToPage(){let a=K.createFromUrl(location.href),b=await a.getHeaderList(),c=Boolean(b.length),d={headers:b,isAvailable:c};this.dispatch(P.MOVE_TO_PAGE,d)}toggleNav(){this.dispatch(P.TOGGLE_NAV)}}class R extends G{constructor(a){super(a);this.setState({isLoading:!1,isOpen:!1,isEnabled:!1,headers:[]});this.register(P.START_LOADING,this.loading.bind(this));this.register(P.MOVE_TO_PAGE,this.toPage.bind(this));this.register(P.TOGGLE_NAV,this.toggleNav.bind(this))}loading(){this.setState({isLoading:!0})}toPage({isAvailable:a,headers:b}){this.setState({headers:b,isLoading:!1,isEnabled:a,isOpen:a?this.getState().isOpen:!1})}toggleNav(){this.setState({isOpen:!this.getState().isOpen})}}let S=new H(),T=new Q(S),U=new R(S),V='githubMarkdownTocOpen',W=document.body,X=document.createElement('github-markdown-toc-container'),Y=new z({data:U.getState(),target:X});W.appendChild(X);U.onChange(()=>{Y.set(U.getState())});U.onChange(()=>{let{isOpen:a}=U.getState();a?(W.dataset[V]=''):delete W.dataset[V]});Y.on('toggle-nav',T.toggleNav.bind(T));window.addEventListener('pjax:start',T.startLoading.bind(T));window.addEventListener('pjax:end',T.moveToPage.bind(T));T.moveToPage()}()
//# sourceMappingURL=index.js.map
