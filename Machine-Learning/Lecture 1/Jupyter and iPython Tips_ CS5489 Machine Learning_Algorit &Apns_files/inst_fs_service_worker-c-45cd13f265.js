(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3740],{RGX7:function(e,r,n){"use strict"
n.r(r)
n.d(r,"getBrowser",(function(){return t}))
function t(){const e=navigator.userAgent
let r
let n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[]
if(/trident/i.test(n[1])){r=/\brv[ :]+(\d+)/g.exec(e)||[]
return{name:"IE",version:r[1]||""}}if("Chrome"===n[1]){r=e.match(/\bOPR|Edge\/(\d+)/)
if(null!=r)return{name:"Opera",version:r[1]}}n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"]
null!=(r=e.match(/version\/(\d+)/i))&&n.splice(1,1,r[1])
return{name:n[0],version:n[1]}}},"u+KF":function(e,r,n){"use strict"
n.r(r)
var t=n("RGX7")
var i=n("3lLS")
var o=n.n(i)
o()(()=>{const e=Object(t["getBrowser"])(),r=e.name,n=e.version
"Safari"===r&&parseFloat(n)>=13&&"serviceWorker"in navigator&&navigator.serviceWorker.register("/inst-fs-sw.js").then(()=>{console.log("Registration succeeded. Refresh page to proxy Inst-FS requests through ServiceWorker.")}).catch((function(e){console.log("Inst-FS ServiceWorker registration failed. :(",e)}))})}}])

//# sourceMappingURL=inst_fs_service_worker-c-45cd13f265.js.map