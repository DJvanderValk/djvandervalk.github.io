/*! For license information please see 856.bundle.js.LICENSE.txt */
(globalThis.webpackChunkresume_react=globalThis.webpackChunkresume_react||[]).push([[856],{7856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,m=Object.seal,f=Object.create,p="undefined"!=typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=x(Array.prototype.forEach),b=x(Array.prototype.pop),T=x(Array.prototype.push),v=x(String.prototype.toLowerCase),N=x(String.prototype.toString),E=x(String.prototype.match),A=x(String.prototype.replace),w=x(String.prototype.indexOf),S=x(String.prototype.trim),_=x(RegExp.prototype.test),k=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function L(e,t,n){n=n||v,i&&i(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(l(t)||(t[r]=a),o=a)}e[o]=!0}return e}function O(e){var t,n=f(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var D=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=u(["#text"]),z=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=m(/<%[\w\W]*|[\w\W]*%>/gm),q=m(/\${[\w\W]*}/gm),Y=m(/^data-[\-\w.\u00B7-\uFFFF]/),$=m(/^aria-[\-\w]+$/),K=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=m(/^(?:\w+script|data):/i),X=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=m(/^html$/i),J=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),o=function(e){return t(e)};if(o.version="2.4.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,m=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,x=n.trustedTypes,Q=m.prototype,ee=C(Q,"cloneNode"),te=C(Q,"nextSibling"),ne=C(Q,"childNodes"),re=C(Q,"parentNode");if("function"==typeof c){var oe=i.createElement("template");oe.content&&oe.content.ownerDocument&&(i=oe.content.ownerDocument)}var ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(x,a),ie=ae?ae.createHTML(""):"",le=i,ce=le.implementation,se=le.createNodeIterator,ue=le.createDocumentFragment,me=le.getElementsByTagName,fe=a.importNode,pe={};try{pe=O(i).documentMode?i.documentMode:{}}catch(e){}var de={};o.isSupported="function"==typeof re&&ce&&void 0!==ce.createHTMLDocument&&9!==pe;var he,ge,ye=G,be=W,Te=q,ve=Y,Ne=$,Ee=V,Ae=X,we=K,Se=null,_e=L({},[].concat(r(D),r(R),r(M),r(F),r(H))),ke=null,xe=L({},[].concat(r(z),r(P),r(B),r(j))),Le=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Ce=null,De=!0,Re=!0,Me=!1,Ie=!0,Fe=!1,Ue=!1,He=!1,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!0,We=!1,qe=!0,Ye=!1,$e={},Ke=null,Ve=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,Ze=L({},["audio","video","img","source","image","track"]),Je=null,Qe=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,at=null,it=L({},[et,tt,nt],N),lt=["application/xhtml+xml","text/html"],ct=null,st=i.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},mt=function(t){ct&&ct===t||(t&&"object"===e(t)||(t={}),t=O(t),he=he=-1===lt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,ge="application/xhtml+xml"===he?N:v,Se="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,ge):_e,ke="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,ge):xe,at="ALLOWED_NAMESPACES"in t?L({},t.ALLOWED_NAMESPACES,N):it,Je="ADD_URI_SAFE_ATTR"in t?L(O(Qe),t.ADD_URI_SAFE_ATTR,ge):Qe,Xe="ADD_DATA_URI_TAGS"in t?L(O(Ze),t.ADD_DATA_URI_TAGS,ge):Ze,Ke="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,ge):Ve,Oe="FORBID_TAGS"in t?L({},t.FORBID_TAGS,ge):{},Ce="FORBID_ATTR"in t?L({},t.FORBID_ATTR,ge):{},$e="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Me=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Fe=t.SAFE_FOR_TEMPLATES||!1,Ue=t.WHOLE_DOCUMENT||!1,Pe=t.RETURN_DOM||!1,Be=t.RETURN_DOM_FRAGMENT||!1,je=t.RETURN_TRUSTED_TYPE||!1,ze=t.FORCE_BODY||!1,Ge=!1!==t.SANITIZE_DOM,We=t.SANITIZE_NAMED_PROPS||!1,qe=!1!==t.KEEP_CONTENT,Ye=t.IN_PLACE||!1,we=t.ALLOWED_URI_REGEXP||we,rt=t.NAMESPACE||nt,Le=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Le.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Le.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Le.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Re=!1),Be&&(Pe=!0),$e&&(Se=L({},r(H)),ke=[],!0===$e.html&&(L(Se,D),L(ke,z)),!0===$e.svg&&(L(Se,R),L(ke,P),L(ke,j)),!0===$e.svgFilters&&(L(Se,M),L(ke,P),L(ke,j)),!0===$e.mathMl&&(L(Se,F),L(ke,B),L(ke,j))),t.ADD_TAGS&&(Se===_e&&(Se=O(Se)),L(Se,t.ADD_TAGS,ge)),t.ADD_ATTR&&(ke===xe&&(ke=O(ke)),L(ke,t.ADD_ATTR,ge)),t.ADD_URI_SAFE_ATTR&&L(Je,t.ADD_URI_SAFE_ATTR,ge),t.FORBID_CONTENTS&&(Ke===Ve&&(Ke=O(Ke)),L(Ke,t.FORBID_CONTENTS,ge)),qe&&(Se["#text"]=!0),Ue&&L(Se,["html","head","body"]),Se.table&&(L(Se,["tbody"]),delete Oe.tbody),u&&u(t),ct=t)},ft=L({},["mi","mo","mn","ms","mtext"]),pt=L({},["foreignobject","desc","title","annotation-xml"]),dt=L({},["title","style","font","a","script"]),ht=L({},R);L(ht,M),L(ht,I);var gt=L({},F);L(gt,U);var yt=function(e){T(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},bt=function(e,t){try{T(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(Pe||Be)try{yt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Tt=function(e){var t,n;if(ze)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&rt===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(rt===nt)try{t=(new g).parseFromString(o,he)}catch(e){}if(!t||!t.documentElement){t=ce.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?ie:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),rt===nt?me.call(t,Ue?"html":"body")[0]:Ue?t.documentElement:a},vt=function(e){return se.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},Nt=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Et=function(e,t,n){de[e]&&y(de[e],(function(e){e.call(o,t,n,ct)}))},At=function(e){var t,n;if(Et("beforeSanitizeElements",e,null),(n=e)instanceof h&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof d)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return yt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return yt(e),!0;var r=ge(e.nodeName);if(Et("uponSanitizeElement",e,{tagName:r,allowedTags:Se}),e.hasChildNodes()&&!Nt(e.firstElementChild)&&(!Nt(e.content)||!Nt(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return yt(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return yt(e),!0;if(!Se[r]||Oe[r]){if(!Oe[r]&&St(r)){if(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,r))return!1;if(Le.tagNameCheck instanceof Function&&Le.tagNameCheck(r))return!1}if(qe&&!Ke[r]){var a=re(e)||e.parentNode,i=ne(e)||e.childNodes;if(i&&a)for(var l=i.length-1;l>=0;--l)a.insertBefore(ee(i[l],!0),te(e))}return yt(e),!0}return e instanceof m&&!function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var n=v(e.tagName),r=v(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||ft[r]):Boolean(ht[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&pt[r]:Boolean(gt[n]):e.namespaceURI===nt?!(t.namespaceURI===tt&&!pt[r])&&!(t.namespaceURI===et&&!ft[r])&&!gt[n]&&(dt[n]||!ht[n]):!("application/xhtml+xml"!==he||!at[e.namespaceURI]))}(e)?(yt(e),!0):"noscript"!==r&&"noembed"!==r||!_(/<\/no(script|embed)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=A(t,ye," "),t=A(t,be," "),t=A(t,Te," "),e.textContent!==t&&(T(o.removed,{element:e.cloneNode()}),e.textContent=t)),Et("afterSanitizeElements",e,null),!1):(yt(e),!0)},wt=function(e,t,n){if(Ge&&("id"===t||"name"===t)&&(n in i||n in st))return!1;if(Re&&!Ce[t]&&_(ve,t));else if(De&&_(Ne,t));else if(!ke[t]||Ce[t]){if(!(St(e)&&(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,e)||Le.tagNameCheck instanceof Function&&Le.tagNameCheck(e))&&(Le.attributeNameCheck instanceof RegExp&&_(Le.attributeNameCheck,t)||Le.attributeNameCheck instanceof Function&&Le.attributeNameCheck(t))||"is"===t&&Le.allowCustomizedBuiltInElements&&(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,n)||Le.tagNameCheck instanceof Function&&Le.tagNameCheck(n))))return!1}else if(Je[t]);else if(_(we,A(n,Ae,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Xe[e])if(Me&&!_(Ee,A(n,Ae,"")));else if(n)return!1;return!0},St=function(e){return e.indexOf("-")>0},_t=function(t){var n,r,a,i;Et("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(r="value"===u?n.value:S(n.value),a=ge(u),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,Et("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(bt(u,t),c.keepAttr))if(Ie||!_(/\/>/i,r)){Fe&&(r=A(r,ye," "),r=A(r,be," "),r=A(r,Te," "));var f=ge(t.nodeName);if(wt(f,a,r)){if(!We||"id"!==a&&"name"!==a||(bt(u,t),r="user-content-"+r),ae&&"object"===e(x)&&"function"==typeof x.getAttributeType)if(m);else switch(x.getAttributeType(f,a)){case"TrustedHTML":r=ae.createHTML(r);break;case"TrustedScriptURL":r=ae.createScriptURL(r)}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),b(o.removed)}catch(e){}}}else bt(u,t)}Et("afterSanitizeAttributes",t,null)}},kt=function e(t){var n,r=vt(t);for(Et("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Et("uponSanitizeShadowNode",n,null),At(n)||(n.content instanceof l&&e(n.content),_t(n));Et("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ot=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!Nt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(Nt(t))return n.toStaticHTML(t.outerHTML)}return t}if(He||mt(f),o.removed=[],"string"==typeof t&&(Ye=!1),Ye){if(t.nodeName){var p=ge(t.nodeName);if(!Se[p]||Oe[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(r=Tt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!Pe&&!Fe&&!Ue&&-1===t.indexOf("<"))return ae&&je?ae.createHTML(t):t;if(!(r=Tt(t)))return Pe?null:je?ie:""}r&&ze&&yt(r.firstChild);for(var d=vt(Ye?t:r);c=d.nextNode();)3===c.nodeType&&c===u||At(c)||(c.content instanceof l&&kt(c.content),_t(c),u=c);if(u=null,Ye)return t;if(Pe){if(Be)for(m=ue.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return(ke.shadowroot||ke.shadowrootmod)&&(m=fe.call(a,m,!0)),m}var h=Ue?r.outerHTML:r.innerHTML;return Ue&&Se["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&_(Z,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),Fe&&(h=A(h,ye," "),h=A(h,be," "),h=A(h,Te," ")),ae&&je?ae.createHTML(h):h},o.setConfig=function(e){mt(e),He=!0},o.clearConfig=function(){ct=null,He=!1},o.isValidAttribute=function(e,t,n){ct||mt({});var r=ge(e),o=ge(t);return wt(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],T(de[e],t))},o.removeHook=function(e){if(de[e])return b(de[e])},o.removeHooks=function(e){de[e]&&(de[e]=[])},o.removeAllHooks=function(){de={}},o}()}()}}]);
//# sourceMappingURL=856.bundle.js.map