(function(window){var svgSprite='<svg><symbol id="icon-wodedamaijihuo" viewBox="0 0 1024 1024"><path d="M512 558.545455c-141.963636 0-256-125.44-256-279.272728S370.036364 0 512 0s256 125.44 256 279.272727-114.036364 279.272727-256 279.272728zM93.090909 826.181818A197.818182 197.818182 0 0 1 290.909091 628.363636h442.181818a197.818182 197.818182 0 1 1 0 395.636364h-442.181818A198.050909 198.050909 0 0 1 93.090909 826.181818z"  ></path></symbol><symbol id="icon-damailogo" viewBox="0 0 1024 1024"><path d="M270.719027 301.237004v-79.519085a103.140931 103.140931 0 0 0-206.281861 0L63.501647 512.898098a392.917831 392.917831 0 0 1 207.21738-211.661094z"  ></path><path d="M938.913221 586.336312a114.601034 114.601034 0 0 0-160.441448-23.387967l-2.104917 1.637158 1.871037-438.290486a126.061138 126.061138 0 1 0-252.122275 0v185.232692a363.448994 363.448994 0 1 0 94.955143 654.863053 113.431636 113.431636 0 0 0 23.387966-13.565021l272.703685-206.047981a114.601034 114.601034 0 0 0 21.750809-160.441448z m-514.535256 239.960532a166.288439 166.288439 0 1 1 166.990078-165.5868 166.288439 166.288439 0 0 1-166.522319 165.5868z"  ></path></symbol><symbol id="icon-faxian-yanjing" viewBox="0 0 1024 1024"><path d="M512 896C182.4 896 46.4 630.4 11.2 548.8c-9.6-24-9.6-49.6 0-73.6C46.4 393.6 182.4 128 512 128c328 0 465.6 265.6 500.8 347.2 9.6 24 9.6 49.6 0 73.6C977.6 630.4 840 896 512 896zM70.4 499.2c-3.2 8-3.2 16 0 24C100.8 596.8 222.4 832 512 832s411.2-235.2 441.6-307.2c3.2-8 3.2-16 0-24C923.2 427.2 801.6 192 512 192S100.8 427.2 70.4 499.2zM512 672c-88 0-160-72-160-160s72-160 160-160 160 72 160 160-72 160-160 160z m0-256c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)