var $navplateDefault={selector:".navplate-trigger",active:"small",clone:!1,close:"close",reveal:"left",type:"slide"},navplate=function(e){var t=this;e=e||!1,t.options={selector:e.selector||$navplateDefault.selector,active:e.active||$navplateDefault.active,clone:e.clone||$navplateDefault.clone,close:e.close||$navplateDefault.close,type:e.type||$navplateDefault.type,reveal:e.reveal||$navplateDefault.reveal};var l=function(e,t){var l=e.createElement("div");l.id="web-overlay";var a={navOverlay:l},n={body:e.getElementsByTagName("body")[0],html:e.getElementsByTagName("html")[0]},o=function(e,t){var l=e.className;null===l.match(new RegExp("\\b"+t+"\\b","g"))&&(e.className=""===l?t:l+" "+t)},c=function(e){e.removeAttribute("class")},s=function(e,t){e.className.indexOf(t)>-1&&(e.className=e.className.split(" ").filter(function(e){return e!=t}).toString().replace(/,/g," "),""===e.className&&c(e))},v=function(e,t,l){null!=e&&"undefined"!=typeof e&&(e.addEventListener?e.addEventListener(t,l,!1):e.attachEvent?e.attachEvent("on"+t,l):e["on"+t]=l)},i=function(e,t,l){null!=e&&"undefined"!=typeof e&&(e.removeEventListener?e.removeEventListener(t,l,!1):e.detachEvent?e.detachEvent("on"+t,l):e["on"+t]=l)},r=function(e){return null===e||void 0===typeof e?!1:!0},p=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},d=function(){return"ontouchstart"in window||"onmsgesturechange"in window};return{classAdd:o,classClear:c,classRemove:s,element:n,eventAdd:v,eventRemove:i,exists:r,hasClass:p,html:a,isTouch:d}}(document,t.options),a=t.options.selector.charAt(0).toString();if("#"===a&&t.options.selector.indexOf(".")<0)new navplateComponent(document.getElementById(t.options.selector.substring(1)),t.options,l);else for(var n=document.querySelectorAll(t.options.selector),o=n.length-1;o>=0;o--)new navplateComponent(n[o],t.options,l)},navplateComponent=function(e,t,l){function a(){if(l.isTouch()||l.classAdd(l.element.html,"navplate-no-touch"),l.exists(document.getElementById("web-overlay"))||l.element.body.appendChild(l.html.navOverlay),l.classAdd(s,"navplate-trigger"),t.clone===!0){var e=i.cloneNode(!0);l.classAdd(e,"navplate clone type-"+t.type+" reveal-"+t.reveal+" active-"+t.active),l.element.body.appendChild(e),i=e}else l.classAdd(i,"navplate type-"+t.type+" reveal-"+t.reveal+" active-"+t.active),setTimeout(function(){l.classAdd(i,"navplate-ready")},500);if("fullscreen"==t.type){var a=document.createElement("a");a.className="navplate-close",a.innerHTML=t.close,i.appendChild(a)}if("contextual"==t.type){var n=document.createElement("ul"),o=document.createElement("li"),a=document.createElement("a");a.className="navplate-close",a.innerHTML=t.close,n.className="close-list",o.appendChild(a),n.appendChild(o),i.appendChild(n)}}function n(){var e=i.querySelectorAll("a"),a=i.querySelectorAll("a.navplate-close");s.onclick=function(e){if(e.preventDefault(),l.hasClass(i,"nav-display"))o();else{var a=e.clientX,n=e.clientY+l.element.body.scrollTop;c();for(var s=document.querySelectorAll(".navplate.nav-display"),v=0,r=s.length;r>v;v++)l.classRemove(s[v],"nav-display");l.classAdd(i,"nav-display"),l.classAdd(l.element.html,"navplate-reveal navplate-type-"+t.type+" navplate-overlay-active-"+t.active),"contextual"==t.type&&window.innerWidth>=700&&(i.style.top=n+20+"px",i.style.left=a+"px"),l.eventAdd(window,"resize",o),document.getElementById("web-overlay").onclick=function(){o()}}};for(var n=e.length-1;n>=0;n--)e[n].onclick=function(){o()};for(var n=a.length-1;n>=0;n--)a[n].onclick=function(){o()}}function o(){l.eventRemove(window,"resize",o),l.classRemove(document.querySelector(".navplate.nav-display"),"nav-display"),l.classRemove(l.element.html,"navplate-reveal"),i.removeAttribute("style"),c()}function c(){l.classRemove(l.element.html,"navplate-type-slide"),l.classRemove(l.element.html,"navplate-type-fullscreen"),l.classRemove(l.element.html,"navplate-type-contextual"),l.classRemove(l.element.html,"navplate-overlay-active-small"),l.classRemove(l.element.html,"navplate-overlay-active-always"),l.classRemove(l.element.html,"navplate-overlay-active-large")}if(l.exists(e)){var s=e,v=s.getAttribute("href"),i=document.querySelector(v);a(),n()}};