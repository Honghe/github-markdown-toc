(function p(v,E,k){function O(S,D){if(!E[S]){if(!v[S]){var j="function"==typeof require&&require;if(!D&&j)return j(S,!0);if(w)return w(S,!0);var L=new Error("Cannot find module '"+S+"'");throw L.code="MODULE_NOT_FOUND",L}var C=E[S]={exports:{}};v[S][0].call(C.exports,function(P){var A=v[S][1][P];return O(A?A:P)},C,C.exports,p,v,E,k)}return E[S].exports}for(var w="function"==typeof require&&require,N=0;N<k.length;N++)O(k[N]);return O})({1:[function(p,v){(function(k){"use strict";function O(J,Q){if(J===Q)return 0;for(var X=J.length,Y=Q.length,Z=0,$=Math.min(X,Y);Z<$;++Z)if(J[Z]!==Q[Z]){X=J[Z],Y=Q[Z];break}return X<Y?-1:Y<X?1:0}function w(J){return k.Buffer&&"function"==typeof k.Buffer.isBuffer?k.Buffer.isBuffer(J):!!(null!=J&&J._isBuffer)}function N(J){return Object.prototype.toString.call(J)}function S(J){return!w(J)&&!("function"!=typeof k.ArrayBuffer)&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(J):!!J&&(!!(J instanceof DataView)||J.buffer&&J.buffer instanceof ArrayBuffer))}function D(J){if(U.isFunction(J)){if(K)return J.name;var Q=J.toString(),X=Q.match(R);return X&&X[1]}}function j(J,Q){return"string"==typeof J?J.length<Q?J:J.slice(0,Q):J}function L(J){if(K||!U.isFunction(J))return U.inspect(J);var Q=D(J),X=Q?": "+Q:"";return"[Function"+X+"]"}function C(J){return j(L(J.actual),128)+" "+J.operator+" "+j(L(J.expected),128)}function P(J,Q,X,Y,Z){throw new I.AssertionError({message:X,actual:J,expected:Q,operator:Y,stackStartFunction:Z})}function A(J,Q){J||P(J,!0,Q,"==",I.ok)}function M(J,Q,X,Y){if(J===Q)return!0;if(w(J)&&w(Q))return 0===O(J,Q);if(U.isDate(J)&&U.isDate(Q))return J.getTime()===Q.getTime();if(U.isRegExp(J)&&U.isRegExp(Q))return J.source===Q.source&&J.global===Q.global&&J.multiline===Q.multiline&&J.lastIndex===Q.lastIndex&&J.ignoreCase===Q.ignoreCase;if((null===J||"object"!=typeof J)&&(null===Q||"object"!=typeof Q))return X?J==Q:J==Q;if(S(J)&&S(Q)&&N(J)===N(Q)&&!(J instanceof Float32Array||J instanceof Float64Array))return 0===O(new Uint8Array(J.buffer),new Uint8Array(Q.buffer));if(w(J)!==w(Q))return!1;Y=Y||{actual:[],expected:[]};var Z=Y.actual.indexOf(J);return-1!==Z&&Z===Y.expected.indexOf(Q)||(Y.actual.push(J),Y.expected.push(Q),T(J,Q,X,Y))}function q(J){return"[object Arguments]"==Object.prototype.toString.call(J)}function T(J,Q,X,Y){if(null===J||J===void 0||null===Q||Q===void 0)return!1;if(U.isPrimitive(J)||U.isPrimitive(Q))return J===Q;if(X&&Object.getPrototypeOf(J)!==Object.getPrototypeOf(Q))return!1;var Z=q(J),$=q(Q);if(Z&&!$||!Z&&$)return!1;if(Z)return J=B.call(J),Q=B.call(Q),M(J,Q,X);var ee=W(J),te=W(Q),ne,se;if(ee.length!==te.length)return!1;for(ee.sort(),te.sort(),se=ee.length-1;0<=se;se--)if(ee[se]!==te[se])return!1;for(se=ee.length-1;0<=se;se--)if(ne=ee[se],!M(J[ne],Q[ne],X,Y))return!1;return!0}function F(J,Q,X){M(J,Q,!0)&&P(J,Q,X,"notDeepStrictEqual",F)}function V(J,Q){if(!J||!Q)return!1;if("[object RegExp]"==Object.prototype.toString.call(Q))return Q.test(J);try{if(J instanceof Q)return!0}catch(X){}return!Error.isPrototypeOf(Q)&&!0===Q.call({},J)}function z(J){var Q;try{J()}catch(X){Q=X}return Q}function G(J,Q,X,Y){var Z;if("function"!=typeof Q)throw new TypeError("\"block\" argument must be a function");"string"==typeof X&&(Y=X,X=null),Z=z(Q),Y=(X&&X.name?" ("+X.name+").":".")+(Y?" "+Y:"."),J&&!Z&&P(Z,X,"Missing expected exception"+Y);var $="string"==typeof Y,ee=!J&&U.isError(Z),te=!J&&Z&&!X;if((ee&&$&&V(Z,X)||te)&&P(Z,X,"Got unwanted exception"+Y),J&&Z&&X&&!V(Z,X)||!J&&Z)throw Z}var U=p("util/"),H=Object.prototype.hasOwnProperty,B=Array.prototype.slice,K=function(){return"foo"===function(){}.name}(),I=v.exports=A,R=/\s*function\s+([^\(\s]*)\s*/;I.AssertionError=function(Q){this.name="AssertionError",this.actual=Q.actual,this.expected=Q.expected,this.operator=Q.operator,Q.message?(this.message=Q.message,this.generatedMessage=!1):(this.message=C(this),this.generatedMessage=!0);var X=Q.stackStartFunction||P;if(Error.captureStackTrace)Error.captureStackTrace(this,X);else{var Y=new Error;if(Y.stack){var Z=Y.stack,$=D(X),ee=Z.indexOf("\n"+$);if(0<=ee){var te=Z.indexOf("\n",ee+1);Z=Z.substring(te+1)}this.stack=Z}}},U.inherits(I.AssertionError,Error),I.fail=P,I.ok=A,I.equal=function(Q,X,Y){Q!=X&&P(Q,X,Y,"==",I.equal)},I.notEqual=function(Q,X,Y){Q==X&&P(Q,X,Y,"!=",I.notEqual)},I.deepEqual=function(Q,X,Y){M(Q,X,!1)||P(Q,X,Y,"deepEqual",I.deepEqual)},I.deepStrictEqual=function(Q,X,Y){M(Q,X,!0)||P(Q,X,Y,"deepStrictEqual",I.deepStrictEqual)},I.notDeepEqual=function(Q,X,Y){M(Q,X,!1)&&P(Q,X,Y,"notDeepEqual",I.notDeepEqual)},I.notDeepStrictEqual=F,I.strictEqual=function(Q,X,Y){Q!==X&&P(Q,X,Y,"===",I.strictEqual)},I.notStrictEqual=function(Q,X,Y){Q===X&&P(Q,X,Y,"!==",I.notStrictEqual)},I.throws=function(J,Q,X){G(!0,J,Q,X)},I.doesNotThrow=function(J,Q,X){G(!1,J,Q,X)},I.ifError=function(J){if(J)throw J};var W=Object.keys||function(J){var Q=[];for(var X in J)H.call(J,X)&&Q.push(X);return Q}}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{"util/":15}],2:[function(p,v){function k(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function O(D){return"function"==typeof D}function w(D){return"number"==typeof D}function N(D){return"object"==typeof D&&null!==D}function S(D){return void 0===D}v.exports=k,k.EventEmitter=k,k.prototype._events=void 0,k.prototype._maxListeners=void 0,k.defaultMaxListeners=10,k.prototype.setMaxListeners=function(D){if(!w(D)||0>D||isNaN(D))throw TypeError("n must be a positive number");return this._maxListeners=D,this},k.prototype.emit=function(D){var j,L,C,P,A,M;if(this._events||(this._events={}),"error"===D&&(!this._events.error||N(this._events.error)&&!this._events.error.length))if(j=arguments[1],j instanceof Error)throw j;else{var q=new Error("Uncaught, unspecified \"error\" event. ("+j+")");throw q.context=j,q}if(L=this._events[D],S(L))return!1;if(O(L))switch(arguments.length){case 1:L.call(this);break;case 2:L.call(this,arguments[1]);break;case 3:L.call(this,arguments[1],arguments[2]);break;default:P=Array.prototype.slice.call(arguments,1),L.apply(this,P);}else if(N(L))for(P=Array.prototype.slice.call(arguments,1),M=L.slice(),C=M.length,A=0;A<C;A++)M[A].apply(this,P);return!0},k.prototype.addListener=function(D,j){var L;if(!O(j))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",D,O(j.listener)?j.listener:j),this._events[D]?N(this._events[D])?this._events[D].push(j):this._events[D]=[this._events[D],j]:this._events[D]=j,N(this._events[D])&&!this._events[D].warned&&(L=S(this._maxListeners)?k.defaultMaxListeners:this._maxListeners,L&&0<L&&this._events[D].length>L&&(this._events[D].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[D].length),"function"==typeof console.trace&&console.trace())),this},k.prototype.on=k.prototype.addListener,k.prototype.once=function(D,j){function L(){this.removeListener(D,L),C||(C=!0,j.apply(this,arguments))}if(!O(j))throw TypeError("listener must be a function");var C=!1;return L.listener=j,this.on(D,L),this},k.prototype.removeListener=function(D,j){var L,C,P,A;if(!O(j))throw TypeError("listener must be a function");if(!this._events||!this._events[D])return this;if(L=this._events[D],P=L.length,C=-1,L===j||O(L.listener)&&L.listener===j)delete this._events[D],this._events.removeListener&&this.emit("removeListener",D,j);else if(N(L)){for(A=P;0<A--;)if(L[A]===j||L[A].listener&&L[A].listener===j){C=A;break}if(0>C)return this;1===L.length?(L.length=0,delete this._events[D]):L.splice(C,1),this._events.removeListener&&this.emit("removeListener",D,j)}return this},k.prototype.removeAllListeners=function(D){var j,L;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[D]&&delete this._events[D],this;if(0===arguments.length){for(j in this._events)"removeListener"!==j&&this.removeAllListeners(j);return this.removeAllListeners("removeListener"),this._events={},this}if(L=this._events[D],O(L))this.removeListener(D,L);else if(L)for(;L.length;)this.removeListener(D,L[L.length-1]);return delete this._events[D],this},k.prototype.listeners=function(D){var j;return j=this._events&&this._events[D]?O(this._events[D])?[this._events[D]]:this._events[D].slice():[],j},k.prototype.listenerCount=function(D){if(this._events){var j=this._events[D];if(O(j))return 1;if(j)return j.length}return 0},k.listenerCount=function(D,j){return D.listenerCount(j)}},{}],3:[function(p,v){(function(k){"use strict";v.exports=function(w,N,S,D,j,L,C,P){if("production"!==k.env.NODE_ENV&&void 0===N)throw new Error("invariant requires an error message argument");if(!w){var A;if(void 0===N)A=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var M=[S,D,j,L,C,P],q=0;A=new Error("Invariant Violation: "+N.replace(/%s/g,function(){return M[q++]}))}throw A.framesToPop=1,A}}}).call(this,p("_process"))},{_process:12}],4:[function(p,v){v.exports.Dispatcher=p("./lib/Dispatcher")},{"./lib/Dispatcher":5}],5:[function(p,v,E){(function(k){"use strict";function O(D,j){if(!(D instanceof j))throw new TypeError("Cannot call a class as a function")}E.__esModule=!0;var w=p("fbjs/lib/invariant"),S=function(){function D(){O(this,D),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return D.prototype.register=function(L){var C="ID_"+this._lastID++;return this._callbacks[C]=L,C},D.prototype.unregister=function(L){this._callbacks[L]?void 0:"production"===k.env.NODE_ENV?w(!1):w(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",L),delete this._callbacks[L]},D.prototype.waitFor=function(L){this._isDispatching?void 0:"production"===k.env.NODE_ENV?w(!1):w(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var P,C=0;C<L.length;C++){if(P=L[C],this._isPending[P]){this._isHandled[P]?void 0:"production"===k.env.NODE_ENV?w(!1):w(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",P);continue}this._callbacks[P]?void 0:"production"===k.env.NODE_ENV?w(!1):w(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",P),this._invokeCallback(P)}},D.prototype.dispatch=function(L){this._isDispatching?"production"===k.env.NODE_ENV?w(!1):w(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."):void 0,this._startDispatching(L);try{for(var C in this._callbacks)this._isPending[C]||this._invokeCallback(C)}finally{this._stopDispatching()}},D.prototype.isDispatching=function(){return this._isDispatching},D.prototype._invokeCallback=function(L){this._isPending[L]=!0,this._callbacks[L](this._pendingPayload),this._isHandled[L]=!0},D.prototype._startDispatching=function(L){for(var C in this._callbacks)this._isPending[C]=!1,this._isHandled[C]=!1;this._pendingPayload=L,this._isDispatching=!0},D.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},D}();v.exports=S}).call(this,p("_process"))},{_process:12,"fbjs/lib/invariant":3}],6:[function(p,v){"use strict";v.exports={Store:p("./material-store"),StoreGroup:p("./material-store-group"),Action:p("./material-action"),Context:p("./material-context")}},{"./material-action":7,"./material-context":8,"./material-store":10,"./material-store-group":9}],7:[function(p,v,E){(function(k){"use strict";function O(N,S){if(!(N instanceof S))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(E,"__esModule",{value:!0});E["default"]=function N(S){O(this,N),"production"!==k.env.NODE_ENV&&(p("assert")("undefined"!=typeof S,"Constructor arguments is undefined.\n                Please `new "+this.constructor.name+"(context)`\n                "),p("assert")("undefined"!=typeof S.dispatch,"Constructor arguments was unexpected object.\n                Please `new "+this.constructor.name+"(context)`\n                ")),this.dispatch=S.dispatch.bind(S)},v.exports=E["default"]}).call(this,p("_process"))},{_process:12,assert:1}],8:[function(p,v,E){(function(k){"use strict";function w(P,A){if(!(P instanceof A))throw new TypeError("Cannot call a class as a function")}function N(P,A){if("function"!=typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function, not "+typeof A);P.prototype=Object.create(A&&A.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(P,A):P.__proto__=A)}Object.defineProperty(E,"__esModule",{value:!0});var S=p("flux"),D=p("events"),j=p("./material-store.js"),L=function(P){return P&&P.__esModule?P:{"default":P}}(j),C=function(P){function A(){w(this,A),P.call(this),this.dispatcher=new S.Dispatcher,this._stores=[]}return N(A,P),A.prototype._registerStore=function(q){if("production"!==k.env.NODE_ENV&&p("assert")(q instanceof L["default"],"The store'"+q+" is not instance of material-store.\nimport {Store} from \"material-flux\"class UserStore extends Store{ ... }"),!(0<=this._stores.indexOf(q))){var T=this.dispatcher.register(q.handler.bind(q));q._waitFor=this.waitFor.bind(this),q._token=T,this._stores.push(q)}},A.prototype.dispatch=function(q){for(var T=arguments.length,F=Array(1<T?T-1:0),V=1;V<T;V++)F[V-1]=arguments[V];this.dispatcher.dispatch({eventKey:q,args:F}),this.emit("dispatch",{eventKey:q,args:F})},A.prototype.waitFor=function(q){Array.isArray(q)||(q=[q]);var F=q.map(function(z){return z instanceof L["default"]?z._token:z});this.dispatcher.waitFor(F)},A}(D.EventEmitter);E["default"]=C,v.exports=E["default"]}).call(this,p("_process"))},{"./material-store.js":10,_process:12,assert:1,events:2,flux:4}],9:[function(p,v,E){(function(k){"use strict";function w(L,C){if(!(L instanceof C))throw new TypeError("Cannot call a class as a function")}function N(L){(0,D["default"])(L&&L.length,"Must provide at least one store to FluxStoreGroup");var C=L[0].context.dispatcher;return"production"!==k.env.NODE_ENV&&L.forEach(function(P){(0,D["default"])(P.context.dispatcher===C,"All stores in a FluxStoreGroup must use the same dispatcher")}),C}Object.defineProperty(E,"__esModule",{value:!0});var S=p("assert"),D=function(L){return L&&L.__esModule?L:{"default":L}}(S),j=function(){function L(C,P){var A=this;w(this,L),this._dispatcher=N(C);var M=C.map(function(q){return(0,D["default"])(q._token,q.constructor.name+" never register key.\nclass "+q.constructor.name+" extends Store {\n    constructor(..args){\n        super(..args);\n        // Needed!\n        this.register(key, handler);\n    }\n}\n            "),q._token});this._dispatchToken=this._dispatcher.register(function(){A._dispatcher.waitFor(M),P()})}return L.prototype.release=function(){this._dispatcher.unregister(this._dispatchToken)},L}();E["default"]=j,v.exports=E["default"]}).call(this,p("_process"))},{_process:12,assert:1}],10:[function(p,v,E){(function(k){"use strict";function w(C,P){if(!(C instanceof P))throw new TypeError("Cannot call a class as a function")}function N(C,P){if("function"!=typeof P&&null!==P)throw new TypeError("Super expression must either be null or a function, not "+typeof P);C.prototype=Object.create(P&&P.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(C,P):C.__proto__=P)}Object.defineProperty(E,"__esModule",{value:!0});var S=p("events"),D=p("object-assign"),j=function(C){return C&&C.__esModule?C:{"default":C}}(D),L=function(C){function P(A){w(this,P),C.call(this),"production"!==k.env.NODE_ENV&&p("assert")("undefined"!=typeof A,"Constructor arguments is undefined.\n                Please `new "+this.constructor.name+"(context)`\n                "),this.context=A,this.state=void 0,this._handlers={}}return N(P,C),P.prototype.register=function(M,q){"production"!==k.env.NODE_ENV&&(p("assert")("undefined"!=typeof this.context,"Failed register event handler to store.\n                 \""+this.constructor.name+"\" has not context.\n                 Please `new "+this.constructor.name+"(context)`"),p("assert")("undefined"!=typeof M,"register Error: \"eventKey\" is undefined.\n                Failed register event handler to store with eventKey.\n                Please register(eventKey, handler);\n                ")),"function"!=typeof q||(this._handlers[M]=q.bind(this),this.context._registerStore(this))},P.prototype.handler=function(M){var q=M.args,T=M.eventKey;if("function"==typeof this._handlers[T]){var A=this._handlers[T];A.apply(this,q)}},P.prototype.onChange=function(M){return this.on("change",M),this.removeChangeListener.bind(this,M)},P.prototype.removeChangeListener=function(M){this.removeListener("change",M)},P.prototype.removeAllChangeListeners=function(){this.removeAllListeners("change")},P.prototype.waitFor=function(M){this._waitFor(M)},P.prototype.getState=function(){return(0,j["default"])({},this.state)},P.prototype.setState=function(M){"undefined"==typeof this.state&&(this.state={}),this.state=(0,j["default"])({},this.state,M),this.emitChange()},P.prototype.emitChange=function(){this.emit("change")},P}(S.EventEmitter);E["default"]=L,v.exports=E["default"]}).call(this,p("_process"))},{_process:12,assert:1,events:2,"object-assign":11}],11:[function(p,v){"use strict";function k(D){if(null===D||D===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(D)}var w=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;v.exports=function(){try{if(!Object.assign)return!1;var D=new String("abc");if(D[5]="de","5"===Object.getOwnPropertyNames(D)[0])return!1;for(var j={},L=0;10>L;L++)j["_"+String.fromCharCode(L)]=L;var C=Object.getOwnPropertyNames(j).map(function(A){return j[A]});if("0123456789"!==C.join(""))return!1;var P={};return"abcdefghijklmnopqrst".split("").forEach(function(A){P[A]=A}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},P)).join("")}catch(A){return!1}}()?Object.assign:function(D){for(var L,P,C=k(D),A=1;A<arguments.length;A++){for(var M in L=Object(arguments[A]),L)N.call(L,M)&&(C[M]=L[M]);if(w){P=w(L);for(var q=0;q<P.length;q++)S.call(L,P[q])&&(C[P[q]]=L[P[q]])}}return C}},{}],12:[function(p,v){function k(){throw new Error("setTimeout has not been defined")}function O(){throw new Error("clearTimeout has not been defined")}function w(V){if(P===setTimeout)return setTimeout(V,0);if((P===k||!P)&&setTimeout)return P=setTimeout,setTimeout(V,0);try{return P(V,0)}catch(z){try{return P.call(null,V,0)}catch(G){return P.call(this,V,0)}}}function N(V){if(A===clearTimeout)return clearTimeout(V);if((A===O||!A)&&clearTimeout)return A=clearTimeout,clearTimeout(V);try{return A(V)}catch(z){try{return A.call(null,V)}catch(G){return A.call(this,V)}}}function S(){q&&T&&(q=!1,T.length?M=T.concat(M):F=-1,M.length&&D())}function D(){if(!q){var V=w(S);q=!0;for(var z=M.length;z;){for(T=M,M=[];++F<z;)T&&T[F].run();F=-1,z=M.length}T=null,q=!1,N(V)}}function j(V,z){this.fun=V,this.array=z}function L(){}var C=v.exports={},P,A;(function(){try{P="function"==typeof setTimeout?setTimeout:k}catch(V){P=k}try{A="function"==typeof clearTimeout?clearTimeout:O}catch(V){A=O}})();var M=[],q=!1,T,F=-1;C.nextTick=function(V){var z=Array(arguments.length-1);if(1<arguments.length)for(var G=1;G<arguments.length;G++)z[G-1]=arguments[G];M.push(new j(V,z)),1!==M.length||q||w(D)},j.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=L,C.addListener=L,C.once=L,C.off=L,C.removeListener=L,C.removeAllListeners=L,C.emit=L,C.binding=function(){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(){throw new Error("process.chdir is not supported")},C.umask=function(){return 0}},{}],13:[function(p,v){v.exports="function"==typeof Object.create?function(O,w){O.super_=w,O.prototype=Object.create(w.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}:function(O,w){O.super_=w;var N=function(){};N.prototype=w.prototype,O.prototype=new N,O.prototype.constructor=O}},{}],14:[function(p,v){v.exports=function(O){return O&&"object"==typeof O&&"function"==typeof O.copy&&"function"==typeof O.fill&&"function"==typeof O.readUInt8}},{}],15:[function(p,v,E){(function(k,O){function w(se,ae){var oe={seen:[],stylize:S};return 3<=arguments.length&&(oe.depth=arguments[2]),4<=arguments.length&&(oe.colors=arguments[3]),T(ae)?oe.showHidden=ae:ae&&E._extend(oe,ae),H(oe.showHidden)&&(oe.showHidden=!1),H(oe.depth)&&(oe.depth=2),H(oe.colors)&&(oe.colors=!1),H(oe.customInspect)&&(oe.customInspect=!0),oe.colors&&(oe.stylize=N),j(oe,se,oe.depth)}function N(se,ae){var oe=w.styles[ae];return oe?"\x1B["+w.colors[oe][0]+"m"+se+"\x1B["+w.colors[oe][1]+"m":se}function S(se){return se}function D(se){var ae={};return se.forEach(function(oe){ae[oe]=!0}),ae}function j(se,ae,oe){if(se.customInspect&&ae&&W(ae.inspect)&&ae.inspect!==E.inspect&&!(ae.constructor&&ae.constructor.prototype===ae)){var ie=ae.inspect(oe,se);return G(ie)||(ie=j(se,ie,oe)),ie}var le=L(se,ae);if(le)return le;var pe=Object.keys(ae),ce=D(pe);if(se.showHidden&&(pe=Object.getOwnPropertyNames(ae)),R(ae)&&(0<=pe.indexOf("message")||0<=pe.indexOf("description")))return C(ae);if(0===pe.length){if(W(ae)){var de=ae.name?": "+ae.name:"";return se.stylize("[Function"+de+"]","special")}if(B(ae))return se.stylize(RegExp.prototype.toString.call(ae),"regexp");if(I(ae))return se.stylize(Date.prototype.toString.call(ae),"date");if(R(ae))return C(ae)}var ue="",fe=!1,ge=["{","}"];if(q(ae)&&(fe=!0,ge=["[","]"]),W(ae)){var _e=ae.name?": "+ae.name:"";ue=" [Function"+_e+"]"}if(B(ae)&&(ue=" "+RegExp.prototype.toString.call(ae)),I(ae)&&(ue=" "+Date.prototype.toUTCString.call(ae)),R(ae)&&(ue=" "+C(ae)),0===pe.length&&(!fe||0==ae.length))return ge[0]+ue+ge[1];if(0>oe)return B(ae)?se.stylize(RegExp.prototype.toString.call(ae),"regexp"):se.stylize("[Object]","special");se.seen.push(ae);var he;return he=fe?P(se,ae,oe,ce,pe):pe.map(function(ye){return A(se,ae,oe,ce,ye,fe)}),se.seen.pop(),M(he,ue,ge)}function L(se,ae){if(H(ae))return se.stylize("undefined","undefined");if(G(ae)){var oe="'"+JSON.stringify(ae).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,"\"")+"'";return se.stylize(oe,"string")}return z(ae)?se.stylize(""+ae,"number"):T(ae)?se.stylize(""+ae,"boolean"):F(ae)?se.stylize("null","null"):void 0}function C(se){return"["+Error.prototype.toString.call(se)+"]"}function P(se,ae,oe,ie,le){for(var pe=[],ce=0,de=ae.length;ce<de;++ce)Z(ae,ce+"")?pe.push(A(se,ae,oe,ie,ce+"",!0)):pe.push("");return le.forEach(function(ue){ue.match(/^\d+$/)||pe.push(A(se,ae,oe,ie,ue,!0))}),pe}function A(se,ae,oe,ie,le,pe){var ce,de,ue;if(ue=Object.getOwnPropertyDescriptor(ae,le)||{value:ae[le]},ue.get?ue.set?de=se.stylize("[Getter/Setter]","special"):de=se.stylize("[Getter]","special"):ue.set&&(de=se.stylize("[Setter]","special")),Z(ie,le)||(ce="["+le+"]"),de||(0>se.seen.indexOf(ue.value)?(de=F(oe)?j(se,ue.value,null):j(se,ue.value,oe-1),-1<de.indexOf("\n")&&(pe?de=de.split("\n").map(function(fe){return"  "+fe}).join("\n").substr(2):de="\n"+de.split("\n").map(function(fe){return"   "+fe}).join("\n"))):de=se.stylize("[Circular]","special")),H(ce)){if(pe&&le.match(/^\d+$/))return de;ce=JSON.stringify(""+le),ce.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(ce=ce.substr(1,ce.length-2),ce=se.stylize(ce,"name")):(ce=ce.replace(/'/g,"\\'").replace(/\\"/g,"\"").replace(/(^"|"$)/g,"'"),ce=se.stylize(ce,"string"))}return ce+": "+de}function M(se,ae,oe){var ie=0,le=se.reduce(function(pe,ce){return ie++,0<=ce.indexOf("\n")&&ie++,pe+ce.replace(/\u001b\[\d\d?m/g,"").length+1},0);return 60<le?oe[0]+(""===ae?"":ae+"\n ")+" "+se.join(",\n  ")+" "+oe[1]:oe[0]+ae+" "+se.join(", ")+" "+oe[1]}function q(se){return Array.isArray(se)}function T(se){return"boolean"==typeof se}function F(se){return null===se}function z(se){return"number"==typeof se}function G(se){return"string"==typeof se}function H(se){return void 0===se}function B(se){return K(se)&&"[object RegExp]"===Q(se)}function K(se){return"object"==typeof se&&null!==se}function I(se){return K(se)&&"[object Date]"===Q(se)}function R(se){return K(se)&&("[object Error]"===Q(se)||se instanceof Error)}function W(se){return"function"==typeof se}function Q(se){return Object.prototype.toString.call(se)}function X(se){return 10>se?"0"+se.toString(10):se.toString(10)}function Y(){var se=new Date,ae=[X(se.getHours()),X(se.getMinutes()),X(se.getSeconds())].join(":");return[se.getDate(),ne[se.getMonth()],ae].join(" ")}function Z(se,ae){return Object.prototype.hasOwnProperty.call(se,ae)}var $=/%[sdj%]/g;E.format=function(se){if(!G(se)){for(var ae=[],oe=0;oe<arguments.length;oe++)ae.push(w(arguments[oe]));return ae.join(" ")}for(var oe=1,ie=arguments,le=ie.length,pe=(se+"").replace($,function(de){if("%%"===de)return"%";if(oe>=le)return de;switch(de){case"%s":return ie[oe++]+"";case"%d":return+ie[oe++];case"%j":try{return JSON.stringify(ie[oe++])}catch(ue){return"[Circular]"}default:return de;}}),ce=ie[oe];oe<le;ce=ie[++oe])pe+=F(ce)||!K(ce)?" "+ce:" "+w(ce);return pe},E.deprecate=function(se,ae){if(H(O.process))return function(){return E.deprecate(se,ae).apply(this,arguments)};if(!0===k.noDeprecation)return se;var ie=!1;return function(){if(!ie){if(k.throwDeprecation)throw new Error(ae);else k.traceDeprecation?console.trace(ae):console.error(ae);ie=!0}return se.apply(this,arguments)}};var ee={},te;E.debuglog=function(se){if(H(te)&&(te=k.env.NODE_DEBUG||""),se=se.toUpperCase(),!ee[se])if(new RegExp("\\b"+se+"\\b","i").test(te)){var ae=k.pid;ee[se]=function(){var oe=E.format.apply(E,arguments);console.error("%s %d: %s",se,ae,oe)}}else ee[se]=function(){};return ee[se]},E.inspect=w,w.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},w.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},E.isArray=q,E.isBoolean=T,E.isNull=F,E.isNullOrUndefined=function(se){return null==se},E.isNumber=z,E.isString=G,E.isSymbol=function(se){return"symbol"==typeof se},E.isUndefined=H,E.isRegExp=B,E.isObject=K,E.isDate=I,E.isError=R,E.isFunction=W,E.isPrimitive=function(se){return null===se||"boolean"==typeof se||"number"==typeof se||"string"==typeof se||"symbol"==typeof se||"undefined"==typeof se},E.isBuffer=p("./support/isBuffer");var ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];E.log=function(){console.log("%s - %s",Y(),E.format.apply(E,arguments))},E.inherits=p("inherits"),E._extend=function(se,ae){if(!ae||!K(ae))return se;for(var oe=Object.keys(ae),ie=oe.length;ie--;)se[oe[ie]]=ae[oe[ie]];return se}}).call(this,p("_process"),"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{"./support/isBuffer":14,_process:12,inherits:13}],16:[function(p,v){v.exports={MOVE_TO_PAGE:Symbol("move-to-page"),MOVE_TO_UNKNOWN:Symbol("move-to-unknown"),TOGGLE_NAV:Symbol("toggle-nav")}},{}],17:[function(p,v){const k=p("./action-type.js"),{Action:O}=p("material-flux"),w=p("./check-js-enabled.js");v.exports=class extends O{async moveToPage(S){let D="release"===S?this.fetchReleaseHeader():"code"===S?await this.fetchMarkdownHeader():[];const j=!!D.length,L={headers:D,isAvailable:j};this.dispatch(k.MOVE_TO_PAGE,L)}moveToUnknown(){this.dispatch(k.MOVE_TO_UNKNOWN)}toggleNav(){this.dispatch(k.TOGGLE_NAV)}fetchReleaseHeader(){const S=document.querySelectorAll(".release-title");return S?Array.from(S).map((D)=>{const{href:j}=D.querySelector("a"),C=D.textContent.trim();return{link:j,tag:"lv1",text:C}}):[]}async fetchMarkdownHeader(){const S=await w(),D=document.querySelector(".markdown-body");if(!D)return[];const j=D.querySelectorAll("h1, h2, h3, h4, h5, h6");return Array.from(j).map((L)=>{let{id:C,href:P}=L.querySelector(".anchor");C=`#${C}`,P=new URL(P).hash;const A=S?P:C,M=L.tagName.replace("H","lv"),q=L.textContent.trim();return{link:A,tag:M,text:q}})}}},{"./action-type.js":16,"./check-js-enabled.js":19,"material-flux":6}],18:[function(p,v){"use strict";function k(V,z){function G(){z.onBtnClicked()}var U=S("div");U.className="github-markdown-toc";var H=!V.isEnabled;N(U,"data-disabled",H);var B=V.isOpen;N(U,"data-open",B);var K=S("nav");L(K,U);var I=S("ol");L(I,K);var R=C();L(R,I);for(var W=V.headers,J=[],Q=0;Q<W.length;Q+=1)J[Q]=O(V,W,W[Q],Q,z),J[Q].mount(R.parentNode,R);L(A("\r\n  "),U);var X=S("button");return X.type="button",M(X,"click",G),X.className="toggle-btn",L(X,U),L(A("\r\n  "),U),{mount:function(Y,Z){j(U,Y,Z)},update:function(Y,Z){var $;($=!Z.isEnabled)!=H&&(H=$,N(U,"data-disabled",H)),($=Z.isOpen)!==B&&(B=$,N(U,"data-open",B));for(var ee=Z.headers,te=0;te<ee.length;te+=1)J[te]?J[te].update(Y,Z,ee,ee[te],te):(J[te]=O(Z,ee,ee[te],te,z),J[te].mount(R.parentNode,R));P(J,!0,ee.length),J.length=ee.length},teardown:function(Y){P(J,!1),q(X,"click",G),Y&&D(U)}}}function O(V,z,G){var B=S("li"),K=G.tag;B.className=K;var I=S("a"),R=G.link;I.href=R,L(I,B);var W=G.text,J=A(W);return L(J,I),{mount:function(Q,X){j(B,Q,X)},update:function(Q,X,Y,Z){var ee;(ee=Z.tag)!==K&&(K=ee,B.className=K),(ee=Z.link)!==R&&(R=ee,I.href=R),(ee=Z.text)!==W&&(J.data=W=ee)},teardown:function(Q){Q&&D(B)}}}function w(V){V=V||{},this._state=V.data||{},this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=V._root,this._yield=V._yield,this._torndown=!1,this._fragment=k(this._state,this),V.target&&this._fragment.mount(V.target,null)}function N(V,z,G){V.setAttribute(z,G)}function S(V){return document.createElement(V)}function D(V){V.parentNode.removeChild(V)}function j(V,z,G){z.insertBefore(V,G)}function L(V,z){z.appendChild(V)}function C(){return document.createComment("")}function P(V,z,G){for(var U=G||0;U<V.length;U+=1)V[U].teardown(z)}function A(V){return document.createTextNode(V)}function M(V,z,G){V.addEventListener(z,G,!1)}function q(V,z,G){V.removeEventListener(z,G,!1)}function T(V,z,G,U){for(var H in z)if(H in G){var B=G[H],K=U[H];if(B!==K||"object"==typeof B){var I=z[H];if(I)for(var W,R=0;R<I.length;R+=1)W=I[R],W.__calling||(W.__calling=!0,W.call(V,B,K),W.__calling=!1)}}}var F=function(){return{methods:{onBtnClicked(){this.get("isEnabled")&&this.fire("toggle-nav")}}}}();w.prototype=F.methods,w.prototype.get=function(z){return z?this._state[z]:this._state},w.prototype.fire=function(z,G){var U=z in this._handlers&&this._handlers[z].slice();if(U)for(var H=0;H<U.length;H+=1)U[H].call(this,G)},w.prototype.observe=function(z,G,U){var H=U&&U.defer?this._observers.pre:this._observers.post;return(H[z]||(H[z]=[])).push(G),U&&!1===U.init||(G.__calling=!0,G.call(this,this._state[z]),G.__calling=!1),{cancel:function(){var B=H[z].indexOf(G);~B&&H[z].splice(B,1)}}},w.prototype.on=function(z,G){var U=this._handlers[z]||(this._handlers[z]=[]);return U.push(G),{cancel:function(){var H=U.indexOf(G);~H&&U.splice(H,1)}}},w.prototype.set=function(z){this._set(z),(this._root||this)._flush()},w.prototype._flush=function(){if(this._renderHooks)for(;this._renderHooks.length;){var z=this._renderHooks.pop();z.fn.call(z.context)}},w.prototype._set=function(z){var G=this._state;this._state=Object.assign({},G,z),T(this,this._observers.pre,z,G),this._fragment&&this._fragment.update(z,this._state),T(this,this._observers.post,z,G)},w.prototype.teardown=w.prototype.destroy=function(z){this.fire("teardown"),this._fragment.teardown(!1!==z),this._fragment=null,this._state={},this._torndown=!0};var T=function(z,G,U,H){for(var B in G)if(B in U){var K=U[B],I=H[B];if(K!==I||"object"==typeof K){var R=G[B];if(R)for(var J,W=0;W<R.length;W+=1)J=R[W],J.__calling||(J.__calling=!0,J.call(z,K,I),J.__calling=!1)}}};v.exports=w},{}],19:[function(p,v){v.exports=function(){return new Promise((O)=>{chrome.runtime.sendMessage({type:"is-js-enabled"},O)})}},{}],20:[function(p,v){v.exports=function(O){const{pathname:w}=new URL(O),[,N,S,...D]=w.split("/");if("releases"===D[0]&&1===D.length)return"release";return"blob"===D[0]||"tree"===D[0]||N&&S&&!D.length?"code":"unknown"}},{}],21:[function(p,v){const k=p("./action.js"),O=p("./store.js"),{Context:w}=p("material-flux");v.exports=class extends w{constructor(){super(),this.action=new k(this),this.store=new O(this)}}},{"./action.js":17,"./store.js":23,"material-flux":6}],22:[function(p){"use strict";function k(){const P=N(location.href);"unknown"===P?S.action.moveToUnknown():S.action.moveToPage(P)}const O=p("./app.html"),w=p("./context.js"),N=p("./check-page-type.js"),S=new w,D="githubMarkdownTocOpen",j=document.body,L=document.createElement("github-markdown-toc-container"),C=new O({data:S.store.getState(),target:L});j.appendChild(L),S.store.onChange(()=>{C.set(S.store.getState())}),S.store.onChange(()=>{const{isOpen:P}=S.store.getState();P?j.dataset[D]="":delete j.dataset[D]}),C.on("toggle-nav",S.action.toggleNav.bind(S.action)),window.addEventListener("pjax:end",k),k()},{"./app.html":18,"./check-page-type.js":20,"./context.js":21}],23:[function(p,v){const{Store:k}=p("material-flux"),O=p("./action-type.js");v.exports=class extends k{constructor(N){super(N),this.state={context:N,isOpen:!1,isEnabled:!1,headers:[]},this.register(O.MOVE_TO_PAGE,this.toPage),this.register(O.MOVE_TO_UNKNOWN,this.toUnknown),this.register(O.TOGGLE_NAV,this.toggleNav)}toPage({isAvailable:N,headers:S}){this.setState({headers:S,isEnabled:N,isOpen:!!N&&this.state.isOpen})}toUnknown(){this.setState({isEnabled:!1,isOpen:!1})}toggleNav(){this.setState({isOpen:!this.state.isOpen})}}},{"./action-type.js":16,"material-flux":6}]},{},[22]);