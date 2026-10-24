/* ES5 recovery boot: remains usable even when the application module cannot run. */
(function(w,d){
 function ready(fn){if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',fn);else fn()}
 function show(){ready(function(){var panel=d.getElementById('startup-recovery');if(panel){panel.hidden=false;panel.setAttribute('aria-hidden','false')}var helper=d.getElementById('startup-help');if(helper)helper.hidden=false})}
 function restore(){try{var params=new URLSearchParams(w.location.search),path=params.get('__path');if(!path&&w.location.search.charAt(1)==='/')path=w.location.search.slice(1).replace(/~and~/g,'&');if(path&&/^\/(?!\/)/.test(path)&&!/[\r\n\\]/.test(path)){var u=new URL(path,w.location.origin);if(u.origin===w.location.origin)w.history.replaceState(null,'',u.pathname+u.search+u.hash)}}catch(e){}}
 restore();
 if(/Instagram|FBAN|FBAV/i.test(w.navigator.userAgent)||/[?&]leve=1(?:&|$)/.test(w.location.search))d.documentElement.setAttribute('data-runtime-lite','true');
 function check(){var r=d.getElementById('root');if(!r||!r.textContent.replace(/\s/g,''))show()}
 w.addEventListener('error',function(e){if(e.target&&e.target.tagName==='SCRIPT')show();else setTimeout(check,80)},true);
 w.addEventListener('unhandledrejection',function(){setTimeout(check,80)});
 w.addEventListener('vite:preloadError',function(e){if(e.preventDefault)e.preventDefault();show()});
 ready(function(){var links=d.querySelectorAll('[data-startup-retry]');for(var i=0;i<links.length;i++)links[i].onclick=function(e){if(e)e.preventDefault();try{var u=new URL(w.location.href);u.searchParams.set('leve','1');u.searchParams.set('_r',String(Date.now()));w.location.replace(u.href)}catch(x){w.location.reload()}};setTimeout(function(){var h=d.getElementById('startup-help');if(h)h.hidden=false},12000)});
}(window,document));
