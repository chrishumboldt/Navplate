var $navplateDefault={selector:".navplate-trigger",active:"small",clone:!1,close:"close",reveal:"left",type:"slide"},navplate=function(e){var t=this;e=e||!1,t.options={selector:e.selector||$navplateDefault.selector,active:e.active||$navplateDefault.active,clone:e.clone||$navplateDefault.clone,close:e.close||$navplateDefault.close,type:e.type||$navplateDefault.type,reveal:e.reveal||$navplateDefault.reveal};var a=function(e,t){var a=e.createElement("div");a.id="web-overlay";var l={navOverlay:a},n={body:e.getElementsByTagName("body")[0],html:e.getElementsByTagName("html")[0]},o=function(e,t){var a=e.className;null===a.match(new RegExp("\\b"+t+"\\b","g"))&&(e.className=""===a?t:a+" "+t)},c=function(e){e.removeAttribute("class")},s=function(e,t){e.className.indexOf(t)>-1&&(e.className=e.className.split(" ").filter(function(e){return e!=t}).toString().replace(/,/g," "),""===e.className&&c(e))},r=function(e,t,a){null!=e&&"undefined"!=typeof e&&(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent?e.attachEvent("on"+t,a):e["on"+t]=a)},i=function(e){return null===e||void 0===typeof e?!1:!0},v=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},p=function(){return"ontouchstart"in window||"onmsgesturechange"in window};return{classAdd:o,classClear:c,classRemove:s,element:n,eventAdd:r,exists:i,hasClass:v,html:l,isTouch:p}}(document,t.options),l=t.options.selector.charAt(0).toString();if("#"===l&&t.options.selector.indexOf(".")<0)new navplateComponent(document.getElementById(t.options.selector.substring(1)),t.options,a);else for(var n=document.querySelectorAll(t.options.selector),o=n.length-1;o>=0;o--)new navplateComponent(n[o],t.options,a)},navplateComponent=function(e,t,a){function l(){if(a.isTouch()||a.classAdd(a.element.html,"navplate-no-touch"),a.exists(document.getElementById("web-overlay"))||a.element.body.appendChild(a.html.navOverlay),a.classAdd(c,"navplate-trigger"),t.clone===!0){var e=r.cloneNode(!0);a.classAdd(e,"navplate clone type-"+t.type+" reveal-"+t.reveal+" active-"+t.active),a.element.body.appendChild(e),r=e}else a.classAdd(r,"navplate type-"+t.type+" reveal-"+t.reveal+" active-"+t.active),setTimeout(function(){a.classAdd(r,"navplate-ready")},500);if("fullscreen"==t.type){var l=document.createElement("a");l.className="navplate-close",l.innerHTML=t.close,r.appendChild(l)}}function n(){var e=r.querySelectorAll("a"),l=r.querySelectorAll("a.navplate-close");c.onclick=function(e){if(e.preventDefault(),a.hasClass(r,"nav-display"))o();else{for(var l=document.querySelectorAll(".navplate.nav-display"),n=0,c=l.length;c>n;n++)a.classRemove(l[n],"nav-display");a.classAdd(r,"nav-display"),a.classAdd(a.element.html,"navplate-reveal navplate-type-"+t.type)}},document.getElementById("web-overlay").onclick=function(){o()};for(var n=e.length-1;n>=0;n--)e[n].onclick=function(){o()};for(var n=l.length-1;n>=0;n--)l[n].onclick=function(){o()}}function o(){a.classRemove(document.querySelector(".navplate.nav-display"),"nav-display"),a.classRemove(a.element.html,"navplate-reveal"),a.classRemove(a.element.html,"navplate-type-"+t.type)}if(a.exists(e)){var c=e,s=c.getAttribute("href"),r=document.querySelector(s);l(),n()}};