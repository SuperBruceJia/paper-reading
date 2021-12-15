(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4105],{"4HNs":function(e,t,n){"use strict"
n.r(t)
var a=n("ik22")
var i=n("ouhR")
var o=n.n(i)
var c=n("3PZ/")
n("dhbk")
let s=window.ENV.page_view_update_url
s&&o()(()=>{let e=0
a["a"].interaction_contexts={}
if(s){let t=0
const n=300
o()(document).bind("page_view_update_url_received",(e,t)=>{s=t})
let i
o()(document).bind("page_view_update",(a,c)=>{const d={}
if(c||e>10&&t<n){d.interaction_seconds=e
o.a.ajaxJSON(s,"PUT",d,null,(e,t)=>{422===t.status&&clearInterval(i)})
e=0}})
i=setInterval(()=>{o()(document).triggerHandler("page_view_update")},1e3*n)
window.addEventListener("unload",()=>{if(e>30){const t=new FormData
t.append("interaction_seconds",e)
t.append("_method","put")
t.append("authenticity_token",Object(c["a"])())
t.append("utf8","&#x2713")
navigator.sendBeacon(s,t)}},false)
let d=false
o()(document).bind("mousemove keypress mousedown focus",()=>{d=true})
setInterval(()=>{if(d){e++
a["a"]&&a["a"].interaction_context&&a["a"].interaction_contexts&&(a["a"].interaction_contexts[a["a"].interaction_context]=(a["a"].interaction_contexts[a["a"].interaction_context]||0)+1)
d=false
if(t>=n){t=0
o()(document).triggerHandler("page_view_update")}t=0}else t++},1e3)}})}}])

//# sourceMappingURL=4105-c-718cc98b07.js.map