(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[5],{UCAh:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a}))
var n=r("17x9")
var o=r.n(n)
var i=r("AdN2")
var a={placement:o.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:o.a.oneOfType([i["a"],o.a.func]),constrain:o.a.oneOfType([i["a"],o.a.func,o.a.oneOf(["window","scroll-parent","parent","none"])])}},jsCG:function(t,e,r){"use strict"
r.d(e,"a",(function(){return ie}))
var n=r("VTBJ")
var o=r("vuIU")
var i=r("1OyB")
var a=r("Ji7U")
var d=r("LK+K")
r("DEX3")
var s=r("q1tI")
var c=r.n(s)
var l=r("17x9")
var h=r.n(l)
var m=r("3zPy")
var f=r.n(m)
var p=r("ODXe")
var u=r("QF4Q")
var g=r("gCYW")
var b=r("DUTp")
var _=r("i/8D")
var E=r("IPIv")
function K(t){var e=[]
if(!_["a"])return e
var r=Object(u["a"])(t)
if(r){var n=Object(E["a"])(r)||{}
var o=n.position
if("fixed"===o)return[r.ownerDocument]
var i=r
while(i&&1===i.nodeType&&(i=i.parentNode)){var a=void 0
try{a=Object(E["a"])(i)}catch(t){}if("undefined"===typeof a||null===a){e.push(i)
return e}var d=a,s=d.overflow,c=d.overflowX,l=d.overflowY;/(auto|scroll|overlay)/.test(s+l+c)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(a.position)>=0)&&e.push(i)}e.push(r.ownerDocument.body)
r.ownerDocument!==document&&e.push(r.ownerDocument.defaultView)}return e}function q(t){var e=[]
if(!_["a"])return e
var r=Object(u["a"])(t)
if(r){var n=r
while((n=n.parentNode)&&n&&1===n.nodeType&&"BODY"!==n.tagName){var o=Object(E["a"])(n)
var i=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("-moz-transform")||o.getPropertyValue("-ms-transform")||o.getPropertyValue("-o-transform")||o.getPropertyValue("transform")||"none"
var a="none"===i||"matrix(1, 0, 0, 1, 0, 0)"===i
"static"===o.position&&a||e.push(n)}e.push(Object(b["a"])(r).body)}return e}var v=r("gpCx")
var w=r("k72m")
function O(t,e,r){if(!t||"offscreen"===r.placement){var n=!r.container&&t
return{placement:r.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:n?"none":null}}}var o=new y(t,e,r)
return{placement:o.placement,style:o.style}}var j=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(i["a"])(this,t)
this.node=Object(u["a"])(e)
"string"===typeof r?this.placement=B(r):Array.isArray(r)?this.placement=r:this.placement=["bottom","center"]
this.rect=Object(g["a"])(this.node)
this._offset=T(n,this.size)}Object(o["a"])(t,[{key:"calculateOffset",value:function(t){var e={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var r=Object(p["a"])(t,2),n=r[0],o=r[1]
if(["start","end"].indexOf(n)>=0){var i=[o,n]
n=i[0]
o=i[1]}var a=0
var d=0
"undefined"!==typeof e[n]&&(a=e[n])
"undefined"!==typeof e[o]&&(d=e[o])
return k([T({top:a,left:d},this.size),C(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(t){return Object(b["a"])(this.node).body===t?0:t.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return Object(w["b"])(this.placement)}},{key:"scrollParentsOffset",get:function(){var t=K(this.node)
var e=0
var r=0
for(var n=1;n<t.length;n++){var o=t[n]
var i=t[n-1]
e+=this.normalizeScrollTop(o)-this.normalizeScrollTop(i)
r+=o.scrollLeft-i.scrollLeft}return{top:e,left:r}}},{key:"positionedParentsOffset",get:function(){var t=q(this.node)
var e=Object(b["a"])(this.node)
var r=t.length>1?0:Object(g["a"])(e.documentElement).top
var n=0
var o=0
for(var i=1;i<t.length;i++){var a=Object(g["a"])(t[i])
var d=Object(g["a"])(t[i-1])
r+=d.top-a.top
n+=d.left-a.left
if(t[i]===e.body){r+=a.top
n+=a.left}o+=this.normalizeScrollTop(t[i])}r+=o
return{top:r,left:n}}}])
return t}()
var y=function(){function t(e,r,n){Object(i["a"])(this,t)
this.options=n||{}
var o=this.options,a=o.container,d=o.constrain,s=o.placement,c=o.over
if(!e||"offscreen"===s)return
this.container=a||Object(b["a"])(e).body
this.element=new j(e,s,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new j(r||this.container,c?this.element.placement:this.element.mirroredPlacement)
"window"===d?this.constrainTo(Object(v["a"])(e)):"scroll-parent"===d?this.constrainTo(K(this.target.node)[0]):"parent"===d?this.constrainTo(this.container):"function"===typeof d?this.constrainTo(Object(u["a"])(d.call(null))):"object"===typeof d&&this.constrainTo(Object(u["a"])(d))}Object(o["a"])(t,[{key:"overflow",value:function(t){var e=Object(v["a"])(t)
var r=Object(g["a"])(t)
var n=Object(g["a"])(e)
var o=k([this.target.position,this.offset])
var i={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=o.left+i.left
var d=o.left+this.element.width+i.left
var s=o.top+i.top
var c=o.top+this.element.height+i.top
"bottom"===this.element.placement[0]?s-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(c+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(d+=this.element.width-this.target.width)
"top"===this.element.placement[1]?s-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(c+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(d+=this.element.width+this.target.width)
var l=t===e?r:{top:n.top+r.top,bottom:r.top+r.height,left:n.left+r.left,right:r.left+r.width}
return{top:s<l.top?l.top-s:0,bottom:c>l.bottom?c-l.bottom:0,left:a<l.left?l.left-a:0,right:d>l.right?d-l.right:0}}},{key:"constrainTo",value:function(t){if(!t)return
var e=this.overflow(t)
var r={top:e.top>0,bottom:e.bottom>0,left:e.left>0,right:e.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(r.left&&r.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(r.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(r.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(r.top&&r.bottom){if(e.bottom<e.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(e.bottom>e.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(r.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(r.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(r.top&&r.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(r.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(r.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(r.left&&r.right){if(e.left>e.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(e.left<e.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(r.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(r.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var t=this.target.calculateOffset(this.element.placement),e=t.top,r=t.left
var n=k([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:e-n.top,left:r-n.left}}},{key:"placement",get:function(){return S(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var t=Object(v["a"])(this.target.node)
var e=k([this.target.position,this.offset]),r=e.left,n=e.top
if(_["a"]&&t.matchMedia){var o=t.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||t.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!o){r=Math.round(r)
n=Math.round(n)}}return{left:r,top:n}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return t}()
function k(t){return t.reduce((function(t,e){return{top:t.top+e.top,left:t.left+e.left}}),{top:0,left:0})}function C(t,e){var r=t.top,n=t.left
"bottom"===e[0]&&(r=0-parseFloat(r,10))
"end"===e[0]&&(n=0-parseFloat(n,10))
return{top:r,left:n}}function T(t,e){var r=t.left,n=t.top
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*e.width:parseFloat(r,10)
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*e.height:parseFloat(n,10)
return{top:n,left:r}}function P(t){var e=Object(p["a"])(t,2),r=e[0],n=e[1]
if("center"===r||"stretch"===r){var o=[n,r]
r=o[0]
n=o[1]}return[r,n]}function B(t){var e=t.split(" ")
1===e.length&&(e=[t,"center"])
return P(e)}function S(t){return t.join(" ")}var z=r("rePB")
var M=r("TSYQ")
var A=r.n(M)
var F=r("J2CL")
var W=r("AdN2")
var R=r("nAyT")
var D=r("Ff2n")
var x=r("4Awi")
var L=r("sQ3t")
var I=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}Object(o["a"])(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=Object(D["a"])(t,["children"])
return Object(L["a"])(e,r)}}])
r.displayName="ComponentIdentifier"
return r}(s["Component"])
I.propTypes={children:h.a.node}
I.defaultProps={children:null}
I.pick=function(t,e){var r
c.a.Children.forEach(e,(function(e){Object(x["a"])(e,[t])&&(r=e)}))
return r}
var H=r("II2N")
var V=r("E+IV")
var Y=r("ISHz")
function N(t,e){var r=Object(u["a"])(t)
var n=[]
var o=Object(g["a"])(r)||{}
var i=false
function a(){if(false===i){var t=Object(g["a"])(r)||{}
var d=t.top!==o.top||t.left!==o.left||t.right!==o.right||t.bottom!==o.bottom||t.width!==o.width||t.height!==o.height
d&&"function"===typeof e&&e(t)
o=t
n.push(Object(Y["a"])(a))}}a()
return{remove:function(){i=true
n.forEach((function(t){return t.cancel()}))}}}var X=r("BTe1")
var U=r("MObU")
var Q=r.n(U)
var Z=r("0mOT")
var G=r("eGSd")
var J=r("oXx0")
var $=r("3Zzb")
var tt=r("UCAh")
var et=function(t){var e=t.stacking
return{zIndex:e.topmost}}
var rt,nt,ot,it,at,dt,st,ct,lt,ht,mt,ft,pt,ut,gt,bt
var _t={componentId:"eGKPI",template:function(t){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(t.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var Et=(rt=Object(R["a"])("8.0.0",null,"Use Position's `renderTarget` prop instead."),nt=Object(J["a"])(),rt(ot=nt(ot=(at=it=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}return r}(I),it.displayName="PositionTarget",it.locatorAttribute="data-position-target",at))||ot)||ot)
var Kt=(dt=Object(R["a"])("8.0.0",null,"Use Posiition's `children` instead."),st=Object(J["a"])(),dt(ct=st(ct=(ht=lt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}return r}(I),lt.displayName="PositionContent",lt.propTypes={children:h.a.node,placement:tt["a"].placement},lt.locatorAttribute="data-position-content",ht))||ct)||ct)
var qt=(mt=Object(R["a"])("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),ft=Object(J["a"])(),pt=Object(F["l"])(et,_t),mt(ut=ft(ut=pt(ut=(bt=gt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(t){var o
Object(i["a"])(this,r)
o=e.call(this,t)
o._timeouts=[]
o.handlePortalOpen=function(){o.position();(o.props.shouldTrackPosition||o.props.trackPosition)&&o.startTracking()
o._timeouts.push(setTimeout((function(){o.state.positioned&&"function"===typeof o.props.onPositioned&&o.props.onPositioned({top:o.state.style.top,left:o.state.style.left,placement:o.state.placement})}),0))}
o.position=function(){o.setState(Object(n["a"])({positioned:true},o.calculatePosition(o.props)))}
o.state=Object(n["a"])({positioned:false},o.calculatePosition(t))
o.position=Object(G["a"])(o.position,0,{leading:false,trailing:true})
o._id=o.props.id||Object(X["a"])("Position")
return o}Object(o["a"])(r,[{key:"shouldComponentUpdate",value:function(t,e,r){return!Q()(this.state,e)||!Object(Z["a"])(this.props,t)||!Object(Z["a"])(this.context,r)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(t,e){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==t.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==t.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var r=this.state,n=r.style,o=r.placement
n&&e.style&&(o!==e.placement||n.top!==e.style.top||n.left!==e.style.left)&&this.props.onPositionChanged({top:n.top,left:n.left,placement:o})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(t){return clearTimeout(t)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(t){this.toggleLocatorAttribute(Object(u["a"])(this._content),r.contentLocatorAttribute,t)
this.toggleLocatorAttribute(Object(u["a"])(this._target),r.targetLocatorAttribute,t)}},{key:"toggleLocatorAttribute",value:function(t,e,r){if(t&&t.hasAttribute){r&&!t.hasAttribute(e)&&t.setAttribute(e,this._id)
!r&&t.hasAttribute(e)&&t.removeAttribute(e)}}},{key:"calculatePosition",value:function(t){return O(this._content,this._target,{placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY,constrain:t.constrain,container:t.mountNode,over:t.shouldPositionOverTarget||t.over})}},{key:"startTracking",value:function(){this._listener=this._listener||N(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var t=this
var e=I.pick(r.Content,this.props.children)
e||(e=Object(L["a"])(this.props.children))
if(e){var o
e=Object(H["a"])(e,Object(z["a"])({ref:function(e){t._content=e},style:Object(n["a"])({},e.props.style,{},this.state.style),className:A()((o={},Object(z["a"])(o,_t.root,true),Object(z["a"])(o,e.props.className,e.props.className),o))},r.contentLocatorAttribute,this._id))
e=c.a.createElement($["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},e)}return e}},{key:"renderTarget",value:function(){var t=this
var e=I.pick(r.Target,this.props.children)
e||(e=Object(V["a"])(this.props.renderTarget))
if(e)return Object(H["a"])(e,Object(z["a"])({ref:function(e){t._target=e}},r.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Object(V["a"])(this.props.target)}},{key:"render",value:function(){var t=Object(z["a"])({},r.locatorAttribute,this._id)
return c.a.createElement("span",t,this.renderTarget(),this.renderContent())}}])
r.displayName="Position"
return r}(s["Component"]),gt.Target=Et,gt.Content=Kt,gt.locatorAttribute="data-position",gt.targetLocatorAttribute="data-position-target",gt.contentLocatorAttribute="data-position-content",gt.propTypes={renderTarget:h.a.oneOfType([h.a.node,h.a.func]),target:h.a.oneOfType([W["a"],h.a.func]),placement:tt["a"].placement,mountNode:tt["a"].mountNode,insertAt:h.a.oneOf(["bottom","top"]),constrain:tt["a"].constrain,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),id:h.a.string,shouldTrackPosition:h.a.bool,shouldPositionOverTarget:h.a.bool,onPositionChanged:h.a.func,onPositioned:h.a.func,children:h.a.node,trackPosition:h.a.bool,over:h.a.bool},gt.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(t){},onPositionChanged:function(t){},children:null},bt))||ut)||ut)||ut)
var vt=r("jtGx")
var wt=r("n12J")
function Ot(t){var e=t.colors,r=t.borders
return{arrowSize:"0.5rem",arrowBorderWidth:r.widthSmall,arrowBackgroundColor:e.white,arrowBorderColor:e.tiara,arrowBackgroundColorInverse:e.licorice,arrowBorderColorInverse:"transparent"}}var jt,yt,kt,Ct
var Tt={componentId:"dqmEK",template:function(t){return"\n\n.dqmEK_ftAV{box-sizing:border-box;min-height:calc(".concat(t.arrowSize||"inherit","*2)}\n\n.dqmEK_caGd{position:relative}\n\n.dqmEK_eBFr,.dqmEK_bQpq,.dqmEK_cLEU,.dqmEK_bcHE,.dqmEK_dRPE{-webkit-padding-end:0;-webkit-padding-start:").concat(t.arrowSize||"inherit",";padding-inline-end:0;padding-inline-start:").concat(t.arrowSize||"inherit","}\n\n[dir=ltr] .dqmEK_eBFr,[dir=ltr] .dqmEK_bQpq,[dir=ltr] .dqmEK_cLEU,[dir=ltr] .dqmEK_bcHE,[dir=ltr] .dqmEK_dRPE{padding-left:").concat(t.arrowSize||"inherit",";padding-right:0}\n\n[dir=rtl] .dqmEK_eBFr,[dir=rtl] .dqmEK_bQpq,[dir=rtl] .dqmEK_cLEU,[dir=rtl] .dqmEK_bcHE,[dir=rtl] .dqmEK_dRPE{padding-left:0;padding-right:").concat(t.arrowSize||"inherit","}\n\n.dqmEK_bhzm,.dqmEK_bxia,.dqmEK_buog,.dqmEK_ctrk,.dqmEK_dHQY{-webkit-padding-end:").concat(t.arrowSize||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(t.arrowSize||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .dqmEK_bhzm,[dir=ltr] .dqmEK_bxia,[dir=ltr] .dqmEK_buog,[dir=ltr] .dqmEK_ctrk,[dir=ltr] .dqmEK_dHQY{padding-left:0;padding-right:").concat(t.arrowSize||"inherit","}\n\n[dir=rtl] .dqmEK_bhzm,[dir=rtl] .dqmEK_bxia,[dir=rtl] .dqmEK_buog,[dir=rtl] .dqmEK_ctrk,[dir=rtl] .dqmEK_dHQY{padding-left:").concat(t.arrowSize||"inherit",";padding-right:0}\n\n.dqmEK_bgun,.dqmEK_cOtA,.dqmEK_cFhg,.dqmEK_fjSW{padding-top:").concat(t.arrowSize||"inherit","}\n\n.dqmEK_dLYh,.dqmEK_dqZD,.dqmEK_dNlp,.dqmEK_svmP{padding-bottom:").concat(t.arrowSize||"inherit",'}\n\n.dqmEK_bFHc{left:-999em;position:absolute}\n\n.dqmEK_fAVq,.dqmEK_fAVq:after{border-style:solid;box-sizing:border-box;content:"";display:block;height:0;pointer-events:none;position:absolute;width:0}\n\n.dqmEK_fAVq{border-width:calc(').concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",");display:block}\n\n.dqmEK_fAVq:after{border-width:").concat(t.arrowSize||"inherit","}\n\n.dqmEK_fBgc,.dqmEK_fBgc:after{border-color:").concat(t.arrowBorderColor||"inherit","}\n\n.dqmEK_ejeM,.dqmEK_ejeM:after{border-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV,.dqmEK_tpPI,.dqmEK_dOuW,.dqmEK_borX,.dqmEK_igtb{border-bottom-color:transparent;border-inline-end-color:").concat(t.arrowBorderColor||"inherit",";border-inline-end-width:").concat(t.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:100%;inset-inline-start:auto;margin-top:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_cLQV,[dir=ltr] .dqmEK_tpPI,[dir=ltr] .dqmEK_dOuW,[dir=ltr] .dqmEK_borX,[dir=ltr] .dqmEK_igtb{border-left-color:transparent;border-left-width:0;border-right-color:").concat(t.arrowBorderColor||"inherit",";border-right-width:").concat(t.arrowSize||"inherit",";left:auto;right:100%}\n\n[dir=rtl] .dqmEK_cLQV,[dir=rtl] .dqmEK_tpPI,[dir=rtl] .dqmEK_dOuW,[dir=rtl] .dqmEK_borX,[dir=rtl] .dqmEK_igtb{border-left-color:").concat(t.arrowBorderColor||"inherit",";border-left-width:").concat(t.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n.dqmEK_cLQV:after,.dqmEK_dOuW:after,.dqmEK_borX:after,.dqmEK_igtb:after,.dqmEK_tpPI:after{border-bottom-color:transparent;border-inline-end-color:").concat(t.arrowBackgroundColor||"inherit",";border-inline-end-width:").concat(t.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:auto;inset-inline-start:").concat(t.arrowBorderWidth||"inherit",";margin-top:calc(-1*").concat(t.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_cLQV:after,[dir=ltr] .dqmEK_dOuW:after,[dir=ltr] .dqmEK_borX:after,[dir=ltr] .dqmEK_igtb:after,[dir=ltr] .dqmEK_tpPI:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(t.arrowBackgroundColor||"inherit",";border-right-width:").concat(t.arrowSize||"inherit",";left:").concat(t.arrowBorderWidth||"inherit",";right:auto}\n\n[dir=rtl] .dqmEK_cLQV:after,[dir=rtl] .dqmEK_dOuW:after,[dir=rtl] .dqmEK_borX:after,[dir=rtl] .dqmEK_igtb:after,[dir=rtl] .dqmEK_tpPI:after{border-left-color:").concat(t.arrowBackgroundColor||"inherit",";border-left-width:").concat(t.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(t.arrowBorderWidth||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM,.dqmEK_dOuW.dqmEK_ejeM,.dqmEK_borX.dqmEK_ejeM,.dqmEK_igtb.dqmEK_ejeM,.dqmEK_tpPI.dqmEK_ejeM{border-inline-end-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM,[dir=ltr] .dqmEK_borX.dqmEK_ejeM,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM{border-right-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM,[dir=rtl] .dqmEK_borX.dqmEK_ejeM,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM{border-left-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM:after,.dqmEK_dOuW.dqmEK_ejeM:after,.dqmEK_borX.dqmEK_ejeM:after,.dqmEK_igtb.dqmEK_ejeM:after,.dqmEK_tpPI.dqmEK_ejeM:after{border-inline-end-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=ltr] .dqmEK_borX.dqmEK_ejeM:after,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM:after,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM:after{border-right-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=rtl] .dqmEK_borX.dqmEK_ejeM:after,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM:after,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM:after{border-left-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_eiYi,.dqmEK_evPF,.dqmEK_fzfv,.dqmEK_fnqe,.dqmEK_dOsT{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(t.arrowBorderColor||"inherit",";border-inline-start-width:").concat(t.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:auto;inset-inline-start:100%;margin-top:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_eiYi,[dir=ltr] .dqmEK_evPF,[dir=ltr] .dqmEK_fzfv,[dir=ltr] .dqmEK_fnqe,[dir=ltr] .dqmEK_dOsT{border-left-color:").concat(t.arrowBorderColor||"inherit",";border-left-width:").concat(t.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n[dir=rtl] .dqmEK_eiYi,[dir=rtl] .dqmEK_evPF,[dir=rtl] .dqmEK_fzfv,[dir=rtl] .dqmEK_fnqe,[dir=rtl] .dqmEK_dOsT{border-left-color:transparent;border-left-width:0;border-right-color:").concat(t.arrowBorderColor||"inherit",";border-right-width:").concat(t.arrowSize||"inherit",";left:auto;right:100%}\n\n.dqmEK_eiYi:after,.dqmEK_fzfv:after,.dqmEK_fnqe:after,.dqmEK_dOsT:after,.dqmEK_evPF:after{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(t.arrowBackgroundColor||"inherit",";border-inline-start-width:").concat(t.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:").concat(t.arrowBorderWidth||"inherit",";inset-inline-start:auto;margin-top:calc(-1*").concat(t.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_eiYi:after,[dir=ltr] .dqmEK_fzfv:after,[dir=ltr] .dqmEK_fnqe:after,[dir=ltr] .dqmEK_dOsT:after,[dir=ltr] .dqmEK_evPF:after{border-left-color:").concat(t.arrowBackgroundColor||"inherit",";border-left-width:").concat(t.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(t.arrowBorderWidth||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi:after,[dir=rtl] .dqmEK_fzfv:after,[dir=rtl] .dqmEK_fnqe:after,[dir=rtl] .dqmEK_dOsT:after,[dir=rtl] .dqmEK_evPF:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(t.arrowBackgroundColor||"inherit",";border-right-width:").concat(t.arrowSize||"inherit",";left:").concat(t.arrowBorderWidth||"inherit",";right:auto}\n\n.dqmEK_eiYi.dqmEK_ejeM,.dqmEK_fzfv.dqmEK_ejeM,.dqmEK_fnqe.dqmEK_ejeM,.dqmEK_dOsT.dqmEK_ejeM,.dqmEK_evPF.dqmEK_ejeM{border-inline-start-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM{border-left-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM{border-right-color:").concat(t.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_eiYi.dqmEK_ejeM:after,.dqmEK_fzfv.dqmEK_ejeM:after,.dqmEK_fnqe.dqmEK_ejeM:after,.dqmEK_dOsT.dqmEK_ejeM:after,.dqmEK_evPF.dqmEK_ejeM:after{border-inline-start-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM:after{border-left-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM:after{border-right-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_dHiK,.dqmEK_dBdm,.dqmEK_ePhw,.dqmEK_bDBw{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;bottom:100%;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","))}\n\n[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm,[dir=ltr] .dqmEK_ePhw,[dir=ltr] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm,[dir=rtl] .dqmEK_ePhw,[dir=rtl] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","))}\n\n.dqmEK_dBdm:after,.dqmEK_ePhw:after,.dqmEK_bDBw:after,.dqmEK_dHiK:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(t.arrowSize||"inherit",");border-bottom-color:").concat(t.arrowBackgroundColor||"inherit",";border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;margin-inline-end:0;margin-inline-start:calc(-1*").concat(t.arrowSize||"inherit",");top:").concat(t.arrowBorderWidth||"inherit","}\n\n[dir=ltr] .dqmEK_dBdm:after,[dir=ltr] .dqmEK_ePhw:after,[dir=ltr] .dqmEK_bDBw:after,[dir=ltr] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(t.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_dBdm:after,[dir=rtl] .dqmEK_ePhw:after,[dir=rtl] .dqmEK_bDBw:after,[dir=rtl] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(t.arrowSize||"inherit",")}\n\n.dqmEK_dBdm.dqmEK_ejeM:after,.dqmEK_ePhw.dqmEK_ejeM:after,.dqmEK_bDBw.dqmEK_ejeM:after,.dqmEK_dHiK.dqmEK_ejeM:after{border-bottom-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_ZLAk,.dqmEK_ftdy{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));top:100%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit","))}\n\n.dqmEK_edfl:after,.dqmEK_ZLAk:after,.dqmEK_ftdy:after,.dqmEK_cjte:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(t.arrowSize||"inherit",");border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:").concat(t.arrowBackgroundColor||"inherit",";bottom:").concat(t.arrowBorderWidth||"inherit",";margin-inline-end:0;margin-inline-start:calc(-1*").concat(t.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_edfl:after,[dir=ltr] .dqmEK_ZLAk:after,[dir=ltr] .dqmEK_ftdy:after,[dir=ltr] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(t.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_edfl:after,[dir=rtl] .dqmEK_ZLAk:after,[dir=rtl] .dqmEK_ftdy:after,[dir=rtl] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(t.arrowSize||"inherit",")}\n\n.dqmEK_edfl.dqmEK_ejeM:after,.dqmEK_ZLAk.dqmEK_ejeM:after,.dqmEK_ftdy.dqmEK_ejeM:after,.dqmEK_cjte.dqmEK_ejeM:after{border-top-color:").concat(t.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_dHiK,.dqmEK_dBdm{inset-inline-start:50%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm{left:50%}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm{right:50%}\n\n.dqmEK_ftdy,.dqmEK_bDBw{inset-inline-end:auto;inset-inline-start:calc((").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ftdy,[dir=ltr] .dqmEK_bDBw{left:calc((").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ftdy,[dir=rtl] .dqmEK_bDBw{left:auto;right:calc((").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_ZLAk,.dqmEK_ePhw{inset-inline-end:auto;inset-inline-start:calc(100% - (").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ePhw{left:calc(100% - (").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ePhw{left:auto;right:calc(100% - (").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_dOsT,.dqmEK_igtb{top:calc((").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_fzfv,.dqmEK_dOuW{top:calc(100% - (").concat(t.arrowSize||"inherit"," + ").concat(t.arrowBorderWidth||"inherit",")*2)}")},contextViewRoot:"dqmEK_ftAV",content:"dqmEK_caGd","placement--center-end":"dqmEK_eBFr","placement--end":"dqmEK_bQpq","placement--end-bottom":"dqmEK_cLEU","placement--end-center":"dqmEK_bcHE","placement--end-top":"dqmEK_dRPE","placement--center-start":"dqmEK_bhzm","placement--start":"dqmEK_bxia","placement--start-bottom":"dqmEK_buog","placement--start-center":"dqmEK_ctrk","placement--start-top":"dqmEK_dHQY","placement--bottom":"dqmEK_bgun","placement--bottom-center":"dqmEK_cOtA","placement--bottom-end":"dqmEK_cFhg","placement--bottom-start":"dqmEK_fjSW","placement--top":"dqmEK_dLYh","placement--top-center":"dqmEK_dqZD","placement--top-end":"dqmEK_dNlp","placement--top-start":"dqmEK_svmP","placement--offscreen":"dqmEK_bFHc",arrow:"dqmEK_fAVq","arrow--default":"dqmEK_fBgc","arrow--inverse":"dqmEK_ejeM","arrow--center-start":"dqmEK_cLQV","arrow--start":"dqmEK_tpPI","arrow--start-bottom":"dqmEK_dOuW","arrow--start-center":"dqmEK_borX","arrow--start-top":"dqmEK_igtb","arrow--center-end":"dqmEK_eiYi","arrow--end":"dqmEK_evPF","arrow--end-bottom":"dqmEK_fzfv","arrow--end-center":"dqmEK_fnqe","arrow--end-top":"dqmEK_dOsT","arrow--top":"dqmEK_dHiK","arrow--top-center":"dqmEK_dBdm","arrow--top-end":"dqmEK_ePhw","arrow--top-start":"dqmEK_bDBw","arrow--bottom":"dqmEK_cjte","arrow--bottom-center":"dqmEK_edfl","arrow--bottom-end":"dqmEK_ZLAk","arrow--bottom-start":"dqmEK_ftdy"}
var Pt=(jt=Object(F["l"])(Ot,Tt),jt(yt=(Ct=kt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}Object(o["a"])(r,[{key:"render",value:function(){var t,e
var n=this.props,o=n.as,i=n.background,a=n.children,d=n.debug,s=n.elementRef,l=n.height,h=n.width,m=n.maxHeight,f=n.maxWidth,p=n.minHeight,u=n.minWidth,g=n.margin,b=n.padding,_=n.placement,E=n.shadow,K=n.stacking,q=n.style,v=n.textAlign
var w=(t={},Object(z["a"])(t,Tt.contextViewRoot,true),Object(z["a"])(t,Tt["placement--".concat(_.replace(" ","-"))],true),t)
return c.a.createElement(wt["a"],Object.assign({},Object(vt["a"])(this.props,r.propTypes),{style:q,className:A()(w),borderWidth:"none",display:"inline-block",as:o,withVisualDebug:d,elementRef:s,margin:g,stacking:K}),c.a.createElement(wt["a"],{className:Tt.content,display:"block",borderRadius:"medium",borderWidth:"small",borderColor:"default"===i?"primary":"transparent",background:"default"===i?"primary":"primary-inverse",withVisualDebug:d,height:l,width:h,maxHeight:m,maxWidth:f,minHeight:p,minWidth:u,padding:b,shadow:E,textAlign:v},c.a.createElement("span",{className:A()((e={},Object(z["a"])(e,Tt.arrow,true),Object(z["a"])(e,Tt["arrow--".concat(i)],i),Object(z["a"])(e,Tt["arrow--".concat(this.mirroredPlacement)],true),e))}),a))}},{key:"mirroredPlacement",get:function(){return Object(w["b"])(this.props.placement,"-")}}])
r.displayName="ContextView"
return r}(s["Component"]),kt.propTypes={as:h.a.elementType,elementRef:h.a.func,margin:F["c"].spacing,padding:F["c"].spacing,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxHeight:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minHeight:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,textAlign:h.a.oneOf(["start","center","end"]),shadow:F["c"].shadow,stacking:F["c"].stacking,background:h.a.oneOf(["default","inverse"]),placement:tt["a"].placement,debug:h.a.bool},kt.defaultProps={as:"span",elementRef:function(t){},debug:false,width:"auto",height:"auto",children:null,textAlign:"start",background:"default",shadow:"resting",placement:"center end",margin:void 0,padding:void 0,stacking:void 0,maxWidth:void 0,minWidth:void 0,maxHeight:void 0,minHeight:void 0},Ct))||yt)
var Bt=r("KgFQ")
var St=r("TjLr")
var zt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){var t
Object(i["a"])(this,r)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
t=e.call.apply(e,[this].concat(o))
t._raf=[]
t._focusRegion=null
t.getRef=function(e){t._root=e}
return t}Object(o["a"])(r,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(t){var e=this.props.open
e&&!t.open?this.open():!e&&t.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(t){return t.cancel()}))
this._raf=[]}},{key:"open",value:function(){var t=this
var e=this.props,r=(e.open,e.contentElement,Object(D["a"])(e,["open","contentElement"]))
this._raf.push(Object(Y["a"])((function(){setTimeout((function(){t._focusRegion=St["a"].activateRegion(t.contentElement,Object(n["a"])({},r))}),0)})))}},{key:"close",value:function(){this._focusRegion&&St["a"].blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&St["a"].focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var t=Object(Bt["a"])(r,this.props)
return this.props.open?c.a.createElement(t,Object.assign({},Object(vt["a"])(this.props,r.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var t=Object(u["a"])(this.props.contentElement)
t||(t=Object(u["a"])(this._root))
return t}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&St["a"].isFocused(this.contentElement,this._focusRegion.id)}}])
r.displayName="Dialog"
return r}(s["Component"])
zt.propTypes={children:h.a.node,as:h.a.elementType,display:h.a.oneOf(["auto","block","inline-block"]),label:h.a.string,open:h.a.bool,onBlur:h.a.func,onDismiss:h.a.func,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),contentElement:h.a.oneOfType([h.a.element,h.a.func]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),shouldContainFocus:h.a.oneOfType([h.a.bool,h.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,shouldFocusOnOpen:h.a.bool}
zt.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(t){},onDismiss:function(t){}}
var Mt=r("FOOe")
var At=r("K7t/")
var Ft=r("EgqM")
function Wt(t,e){var r=e.currentTarget
var n=e.relatedTarget||e.nativeEvent.toElement
n&&(n===r||Object(Ft["a"])(r,n))||t(e)}var Rt=r("HMVb")
var Dt=r("9yTY")
var xt=r("lxKu")
var Lt,It,Ht,Vt,Yt,Nt,Xt,Ut,Qt,Zt,Gt,Jt,$t,te,ee,re
var ne=(Lt=Object(R["a"])("8.0.0",null,"Use Popover's `renderTrigger` prop instead."),It=Object(J["a"])(),Lt(Ht=It(Ht=(Yt=Vt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}return r}(I),Vt.displayName="PopoverTrigger",Yt))||Ht)||Ht)
var oe=(Nt=Object(R["a"])("8.0.0",null,"Use Popover's `children` instead."),Xt=Object(J["a"])(),Nt(Ut=Xt(Ut=(Zt=Qt=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(){Object(i["a"])(this,r)
return e.apply(this,arguments)}return r}(I),Qt.displayName="PopoverContent",Zt))||Ut)||Ut)
var ie=(Gt=Object(R["a"])("8.0.0",{show:"isShowingContent",defaultShow:"defaultIsShowingContent",variant:"color",label:"screenReaderLabel",trackPosition:"shouldTrackPosition",alignArrow:"shouldAlignArrow",onShow:"onShowContent",onDismiss:"onHideContent",onToggle:"onShowContent/onHideContent"}),Jt=Object(J["a"])(),$t=Object(Mt["a"])(),Gt(te=Jt(te=$t(te=(re=ee=function(t){Object(a["a"])(r,t)
var e=Object(d["a"])(r)
function r(t){var o
Object(i["a"])(this,r)
o=e.call(this,t)
o.show=function(t){"undefined"===typeof o.props.isShowingContent&&"undefined"===typeof o.props.show&&o.setState({isShowingContent:true})
o.props.onShowContent(t)
"function"===typeof o.props.onToggle&&o.props.onToggle(true)}
o.hide=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var r=o.props,n=r.onHideContent,i=r.isShowingContent,a=r.show,d=r.onToggle,s=r.onDismiss
if("undefined"===typeof i&&"undefined"===typeof a)o.setState((function(r){var o=r.isShowingContent
if(o){n(t,{documentClick:e})
"function"===typeof s&&s(t,e)}return{isShowingContent:false}}))
else if(i||a){n(t,{documentClick:e})
"function"===typeof s&&s(t,e)}"function"===typeof d&&d(false)}
o.toggle=function(t){o.shown?o.hide(t):o.show(t)}
o.handleDialogDismiss=function(){var t
if(!o.props.shouldReturnFocus&&o.props.shouldFocusContentOnTriggerBlur){var e=Object(u["a"])(o._trigger)
e&&"function"===typeof e.focus&&e.focus()}(t=o).hide.apply(t,arguments)}
o.handleDialogBlur=function(t){if(t.keyCode===f.a.codes.tab&&t.shiftKey&&o.props.shouldFocusContentOnTriggerBlur)return
o.hide(t)}
o.handleTriggerKeyDown=function(t){if(!o.props.shouldFocusContentOnTriggerBlur)return
if(t.keyCode===f.a.codes.tab&&!t.shiftKey){t.preventDefault()
o._raf.push(Object(Y["a"])((function(){o._dialog&&o._dialog.focus()})))}}
o.handleTriggerKeyUp=function(t){if(t.keyCode===f.a.codes.esc&&o.shown&&o.isTooltip){t.preventDefault()
o.hide(t)}}
o.handleTriggerBlur=function(t){o.props.on.indexOf("focus")>-1&&o._raf.push(Object(Y["a"])((function(){Object(At["a"])(o._view)||o.hide(t)})))}
o.handlePositioned=function(t){var e=t.placement
o.setState(Object(n["a"])({placement:e},o.computeOffsets(e)))
o.props.onPositioned(t)
"function"===typeof o.props.onShow&&o.props.onShow(t)}
o.handlePositionChanged=function(t){var e=t.placement
o.setState(Object(n["a"])({placement:e},o.computeOffsets(e)))
o.props.onPositionChanged(t)}
o.state={placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY}
"undefined"===typeof t.isShowingContent&&"undefined"===typeof t.show&&(o.state.isShowingContent=t.defaultIsShowingContent||t.defaultShow)
o._id=o.props.id||Object(X["a"])("Popover")
o._raf=[]
o._handleMouseOver=Wt.bind(null,(function(t){o.show(t)}))
o._handleMouseOut=Wt.bind(null,(function(t){o.hide(t)}))
return o}Object(o["a"])(r,[{key:"componentDidMount",value:function(){if(this.isTooltip){this._focusRegion=new xt["a"](this._contentElement,{shouldCloseOnEscape:false,shouldCloseOnDocumentClick:true,onDismiss:this.hide})
this.shown&&this._focusRegion.activate()}}},{key:"componentWillUnmount",value:function(){this._raf.forEach((function(t){return t.cancel()}))
this._raf=[]
if(this._focusRegion){this._focusRegion.deactivate()
this._focusRegion.blur()}}},{key:"shouldComponentUpdate",value:function(t,e){return!Object(Z["a"])(this.props,t)||!Object(Z["a"])(this.state,e)}},{key:"componentDidUpdate",value:function(t,e){if(this._focusRegion&&this.isTooltip){if(!t.isShowingContent&&this.props.isShowingContent||!e.isShowingContent&&this.state.isShowingContent){this._focusRegion.activate()
this._focusRegion.focus()}(t.isShowingContent&&!this.props.isShowingContent||e.isShowingContent&&!this.state.isShowingContent)&&this._focusRegion.deactivate()}}},{key:"computeOffsets",value:function(t){var e=this.props,r=e.offsetX,n=e.offsetY
if((this.props.shouldAlignArrow||this.props.alignArrow)&&this._view){var o=B(t)[1]
var i=this._view.theme,a=i.arrowSize,d=i.arrowBorderWidth
var s=2*(Object(Rt["a"])(a)+Object(Rt["a"])(d))
"start"===o?r=s:"end"===o?r=-s:"top"===o?n=s:"bottom"===o&&(n=-s)}return{offsetX:r,offsetY:n}}},{key:"renderTrigger",value:function(){var t=this
var e=I.pick(r.Trigger,this.props.children)
e||(e=Object(V["a"])(this.props.renderTrigger))
if(e){var n=this.props,o=n.on,i=n.shouldContainFocus
var a
var d
var s
var c
var l
o.indexOf("click")>-1&&(a=function(e){t.toggle(e)})
if(o.indexOf("hover")>-1){c=this._handleMouseOver
s=this._handleMouseOut}o.indexOf("focus")>-1&&(d=function(e){t.show(e)})
l=i?this.shown?"true":"false":null
e=Object(H["a"])(e,{ref:function(e){return t._trigger=e},"aria-expanded":l,"data-popover-trigger":true,onKeyDown:Object(Dt["a"])(this.handleTriggerKeyDown,this.props.onKeyDown),onKeyUp:Object(Dt["a"])(this.handleTriggerKeyUp,this.props.onKeyUp),onClick:Object(Dt["a"])(a,this.props.onClick),onBlur:Object(Dt["a"])(this.handleTriggerBlur,this.props.onBlur),onFocus:Object(Dt["a"])(d,this.props.onFocus),onMouseOut:Object(Dt["a"])(s,this.props.onMouseOut),onMouseOver:Object(Dt["a"])(c,this.props.onMouseOver)})}return e}},{key:"renderContent",value:function(){var t=this
var e=I.pick(r.Content,this.props.children)
e||(e=Object(V["a"])(this.props.children))
this.shown&&!this.isTooltip&&(e=c.a.createElement(zt,{open:this.shown,label:this.props.screenReaderLabel||this.props.label,ref:function(e){return t._dialog=e},display:"block",onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,liveRegion:this.props.liveRegion,defaultFocusElement:this.props.defaultFocusElement,shouldContainFocus:this.props.shouldContainFocus,shouldReturnFocus:this.props.shouldReturnFocus,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur,shouldCloseOnDocumentClick:this.props.shouldCloseOnDocumentClick,shouldCloseOnEscape:this.props.shouldCloseOnEscape},e))
if(this.shown||this.props.shouldRenderOffscreen){var o
var i=this.props.variant
i=i?"inverse"===i?"primary-inverse":"primary":this.props.color
var a={ref:function(e){return t._view=e},elementRef:function(e){t._contentElement=e
t.props.contentRef(e)},background:i,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var d=this.state.placement
if(this.props.withArrow){o=Pt
a=Object(n["a"])({},a,{background:"primary"===i?"default":"inverse",placement:this.rtl?Object(w["a"])(d," "):d})}else{o=wt["a"]
a=Object(n["a"])({},a,{borderWidth:"small",borderRadius:"medium"},"primary-inverse"===i&&{borderColor:"transparent"})}this.isTooltip&&(a=Object(n["a"])({},a,{style:{pointerEvents:"none"}}))
return c.a.createElement(o,a,e)}return null}},{key:"render",value:function(){var t=this.positionProps
return this.props.positionTarget?c.a.createElement("span",null,this.renderTrigger(),c.a.createElement(qt,t,this.renderContent())):c.a.createElement(qt,Object.assign({},t,{renderTarget:this.renderTrigger()}),this.renderContent())}},{key:"isTooltip",get:function(){return this.props.shouldRenderOffscreen&&!this.props.shouldReturnFocus&&!this.props.shouldContainFocus&&!this.props.shouldFocusContentOnTriggerBlur}},{key:"placement",get:function(){var t=this.props.placement
this.rtl&&(t=Object(w["a"])(t," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":t}},{key:"positionProps",get:function(){return{offsetX:this.state.offsetX,offsetY:this.state.offsetY,shouldTrackPosition:(this.props.shouldTrackPosition||this.props.trackPosition)&&this.shown,insertAt:this.props.insertAt,placement:this.placement,constrain:this.props.constrain,onPositioned:this.handlePositioned,onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,mountNode:this.props.mountNode,id:this._id}}},{key:"shown",get:function(){return"undefined"===typeof this.props.isShowingContent&&"undefined"===typeof this.props.show?this.state.isShowingContent:this.props.isShowingContent||this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}}])
r.displayName="Popover"
return r}(s["Component"]),ee.Trigger=ne,ee.Content=oe,ee.propTypes={isShowingContent:h.a.bool,defaultIsShowingContent:h.a.bool,on:h.a.oneOfType([h.a.oneOf(["click","hover","focus"]),h.a.arrayOf(h.a.oneOf(["click","hover","focus"]))]),withArrow:h.a.bool,color:h.a.oneOf(["primary","primary-inverse"]),placement:tt["a"].placement,shadow:F["c"].shadow,stacking:F["c"].stacking,contentRef:h.a.func,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),screenReaderLabel:h.a.string,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),constrain:tt["a"].constrain,positionTarget:h.a.oneOfType([W["a"],h.a.func]),mountNode:tt["a"].mountNode,insertAt:h.a.oneOf(["bottom","top"]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),id:h.a.string,shouldAlignArrow:h.a.bool,shouldTrackPosition:h.a.bool,shouldRenderOffscreen:h.a.bool,shouldContainFocus:h.a.bool,shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,shouldFocusContentOnTriggerBlur:h.a.bool,onShowContent:h.a.func,onHideContent:h.a.func,onPositioned:h.a.func,onPositionChanged:h.a.func,onClick:h.a.func,onFocus:h.a.func,onBlur:h.a.func,onKeyDown:h.a.func,onKeyUp:h.a.func,onMouseOver:h.a.func,onMouseOut:h.a.func,renderTrigger:h.a.oneOfType([h.a.node,h.a.func]),children:h.a.oneOfType([h.a.node,h.a.func]),show:h.a.bool,defaultShow:h.a.bool,variant:h.a.oneOf(["default","inverse"]),alignArrow:h.a.bool,label:h.a.string,trackPosition:h.a.bool,onShow:h.a.func,onDismiss:h.a.func,onToggle:h.a.func},ee.defaultProps={isShowingContent:void 0,defaultIsShowingContent:false,placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,color:"primary",on:["hover","focus"],contentRef:function(t){},withArrow:true,constrain:"window",defaultFocusElement:void 0,screenReaderLabel:void 0,mountNode:void 0,insertAt:"bottom",liveRegion:void 0,positionTarget:void 0,id:void 0,shouldAlignArrow:false,shouldTrackPosition:true,shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,onShowContent:function(t){},onHideContent:function(t,e){e.documentClick},onClick:function(t){},onFocus:function(t){},onBlur:function(t){},onMouseOver:function(t){},onMouseOut:function(t){},onKeyDown:function(t){},onKeyUp:function(t){},onPositioned:function(t){},onPositionChanged:function(t){},renderTrigger:null,children:null},re))||te)||te)||te)}}])

//# sourceMappingURL=5-c-6aa506df4f.js.map