var $navplateSetup={active:"small",clone:!1,close:"close",reveal:"left",type:"slide"},navplate=function(e,t){var n=this;t=t||!1,n.options={active:t.active||$navplateSetup.active,clone:t.clone||$navplateSetup.clone,close:t.close||$navplateSetup.close,type:t.type||$navplateSetup.type,reveal:t.reveal||$navplateSetup.reveal};var a=function(e,t){var n=e.createElement("div");n.id="web-overlay";var a={navOverlay:n},l={body:e.getElementsByTagName("body")[0],html:e.getElementsByTagName("html")[0]},c=function(e,t){var n=e.className;null===n.match(new RegExp("\\b"+t+"\\b","g"))&&(e.className=""===n?t:n+" "+t)},o=function(e){e.removeAttribute("class")},s=function(e,t){e.className.indexOf(t)>-1&&(e.className=e.className.split(" ").filter(function(e){return e!=t}).toString().replace(/,/g," "),""===e.className&&o(e))},v=function(e,t,n){null!=e&&"undefined"!=typeof e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)},i=function(e){return null===e||void 0===typeof e?!1:!0},r=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},p=function(){return"ontouchstart"in window||"onmsgesturechange"in window};return{classAdd:c,classClear:o,classRemove:s,element:l,eventAdd:v,exists:i,hasClass:r,html:a,isTouch:p}}(document,n.options),l=e.charAt(0).toString();if("#"===l)new navplateComponent(document.getElementById(e.substring(1)),n.options,a);else for(var c=document.querySelectorAll(e),o=c.length-1;o>=0;o--)new navplateComponent(c[o],n.options,a)},navplateComponent=function(e,t,n){function a(){if(n.isTouch()||n.classAdd(n.element.html,"navplate-no-touch"),n.exists(document.getElementById("web-overlay"))||n.element.body.appendChild(n.html.navOverlay),n.classAdd(o,"navplate-trigger active-"+t.active),t.clone===!0){var e=v.cloneNode(!0);n.classAdd(e,"navplate clone type-"+t.type+" reveal-"+t.reveal+" active-"+t.active),n.element.body.appendChild(e),v=e}else n.classAdd(v,"navplate type-"+t.type+" reveal-"+t.reveal+" active-"+t.active);if("fullscreen"==t.type){var a=document.createElement("a");a.className="navplate-close",a.innerHTML=t.close,v.appendChild(a)}}function l(){var e=v.querySelectorAll("a"),a=v.querySelectorAll("a.navplate-close");o.onclick=function(e){e.preventDefault(),n.hasClass(v,"nav-display")?c():(n.classAdd(v,"nav-display"),n.classAdd(n.element.html,"navplate-reveal navplate-type-"+t.type))},document.getElementById("web-overlay").onclick=function(){c()};for(var l=e.length-1;l>=0;l--)e[l].onclick=function(){c()};for(var l=a.length-1;l>=0;l--)a[l].onclick=function(){c()}}function c(){n.classRemove(document.querySelector(".navplate.nav-display"),"nav-display"),n.classRemove(n.element.html,"navplate-reveal"),n.classRemove(n.element.html,"navplate-type-"+t.type)}if(n.exists(e)){var o=e,s=o.getAttribute("data-nav-link"),v=document.querySelector(s);a(),l()}};