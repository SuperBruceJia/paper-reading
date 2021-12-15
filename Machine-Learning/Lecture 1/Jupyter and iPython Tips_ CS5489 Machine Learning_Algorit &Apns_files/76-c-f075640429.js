(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[76],{Nx6n:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i("ouhR")
var s=i.n(n)
i("Opnj")
const o=s.a.ui.menu.prototype,a=o.refresh
s.a.extend(o,{refresh(){a.call(this)
const e=this
const t=this.element.find("li.ui-menu-item")
let i=false
this.element.bind("click.menu",(function(e){new RegExp(/^a$/i).test(e.target.tagName)||e.preventDefault()}))
let n=0
this.element.find("input[type='checkbox'], input[type='radio']").each((function(){const e=s()(this).closest("label")
if(e.length){s()(this).insertBefore(e)
s()(this).attr("id")||s()(this).attr("id","ui-input-"+n++)
e.attr("for",s()(this).attr("id"))}}))
this.element.bind("menufocus",(function(e){const t=s()(e.target).find("a.ui-state-focus").children("input[type='text']")
t.length&&t[0].focus()}))
this.element.bind("popupopen",(function(t){const i=s()(t.target).find("input[type=radio][checked]").closest(".ui-menu-item")
i.length&&setTimeout((function(){e.focus(t,i)}),0)})).bind("menublur",(function(e){const t=s()(e.target).find("input[type='text']:focus")
t.length&&t[0].blur()}))
t.children("a").each((function(e,t){const n=s()(t),o=n.parent()
if(n.children().is("input[type='checkbox'], input[type='radio']")){n.closest("ul").addClass("ui-menu-icons")
if(n.children("input[type='checkbox']").is(":checked")){n.prepend('<span class="ui-icon ui-icon-check"></span>')
o.attr({role:"menuitemcheckbox","aria-checked":"true"})}else if(n.children("input[type='radio']").is(":checked")){n.prepend('<span class="ui-icon ui-icon-radio-on"></span>')
o.attr({role:"menuitemradio","aria-checked":"true"})}else if(n.children("input[type='radio']").length){n.prepend('<span class="ui-icon ui-icon-radio-off"></span>')
o.attr({role:"menuitemradio","aria-checked":"false"})}else o.attr({role:"menuitemcheckbox","aria-checked":"false"})
n.children().is("input[type='radio']")&&o.attr("radio-group",n.children("input[type='radio']").attr("name"))
if(o.prev().length&&!o.prev().children("a").length){o.prev().addClass("ui-state-disabled").html("<span class='ui-menu-input-group'>"+o.prev().html()+"</span>").bind("click.menu",(function(e){return false})).after("<li><hr /></li>")
i=true}else o.prev().length&&!o.prev().children("a").children().is("input[type='checkbox'], input[type='radio']")&&o.before("<li><hr /></li>")
if(i&&o.next().length&&!o.next().children("a").children().is("input[type='checkbox'], input[type='radio']")){o.after("<li><hr /></li>")
i=false}else o.next().length&&!o.next().children("a").children().is("input[type='checkbox'], input[type='radio']")&&o.after("<li><hr /></li>")
n.children("input[type='checkbox'], input[type='radio']").hide()}}))
t.bind("keydown.menu",(function(t){if(t.keyCode===s.a.ui.keyCode.SPACE){if(e.active.children("a").children().is("input[type='checkbox'], input[type='radio']")){e.select(t)
t.stopImmediatePropagation()}t.preventDefault()}}))
t.find("input[type='text']").bind("keydown",(function(t){t.stopPropagation()
if(t.keyCode===s.a.ui.keyCode.UP){e.element.trigger("focus")
this.blur()
e.focus(t,s()(this).closest(".ui-menu-item").prev())}if(t.keyCode===s.a.ui.keyCode.DOWN){e.element.trigger("focus")
this.blur()
e.focus(t,s()(this).closest(".ui-menu-item").next())}})).bind("click",(function(e){e.stopPropagation()}))},select(e){const t={item:this.active||s()(e.target).closest(".ui-menu-item")}
if(t.item.children("a").children().is("input[type='checkbox']"))if("false"===t.item.attr("aria-checked")){t.item.children("a").prepend('<span class="ui-icon ui-icon-check"></span>')
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='checkbox']").prop("checked","checked").trigger("change")}else if("true"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-check").remove()
t.item.attr("aria-checked","false")
t.item.children("a").children("input[type='checkbox']").removeAttr("checked").trigger("change")}if(t.item.children("a").children().is("input[type='radio']")&&"false"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-radio-off").toggleClass("ui-icon-radio-on ui-icon-radio-off")
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='radio']").prop("checked","checked").trigger("change")
t.item.siblings("[radio-group="+s()(t.item).attr("radio-group")+"]").each((function(){s()(this).attr("aria-checked","false")
s()(this).children("a").children("span.ui-icon-radio-on").toggleClass("ui-icon-radio-on ui-icon-radio-off")
s()(this).children("a").children("input[type='radio']").removeAttr("checked")}))}t.item.children("a").children().is("input[type='checkbox'], input[type='radio']")||this.collapseAll()
this._trigger("select",e,t)}})
i("YLvb")
i("MIhX")
i("dJId")
i("Stu1")
var r=0,u=false
s.a.widget("ui.popup",{version:"@VERSION",options:{position:{my:"left top",at:"left bottom"},managed:false,expandOnFocus:false,show:{effect:"slideDown",duration:0},hide:{effect:"fadeOut",duration:0}},_create:function(){this.options.trigger||(this.options.trigger=this.element.prev())
if(!this.element.attr("id")){this.element.attr("id","ui-popup-"+r++)
this.generatedId=true}if(!this.element.attr("role")&&!this.options.managed){this.element.attr("role","dialog")
this.generatedRole=true}this.options.trigger.attr("aria-haspopup","true").attr("aria-owns",this.element.attr("id"))
this.element.addClass("ui-popup")
this._beforeClose()
this.element.hide()
var e=function(e){var t=false
s()(e.target).is("input")&&(t=true)
if(this.isOpen){u=true
this.close()
return}this.open(e)
clearTimeout(this.closeTimer)
this._delay((function(){t||this.focusPopup()}),1)}
this._on(this.options.trigger,{keydown:function(e){switch(e.keyCode){case s.a.ui.keyCode.TAB:this.element.hide()
this.close(e)
break
case s.a.ui.keyCode.ESCAPE:this.isOpen&&this.close(e)
break
case s.a.ui.keyCode.SPACE:case s.a.ui.keyCode.DOWN:case s.a.ui.keyCode.UP:e.preventDefault()
clearTimeout(this.closeTimer)
this._delay((function(){this.open(e)
this.focusPopup(e)}),1)}},mouseup:function(e){this.mouseClickTimer=window.setTimeout(function(){delete this.mouseClickTimer}.bind(this),0)},click:function(t){t.stopPropagation()
t.preventDefault()
this.mouseClickTimer||e.call(this,t)},mousedown:e})
this.options.expandOnFocus&&this._on(this.options.trigger,{focus:function(e){u||this._delay((function(){this.isOpen||this.open(e)}),1)
this._delay((function(){u=false}),100)},blur:function(e){u=false}})
this.options.managed||this._on({keydown:function(e){if(e.keyCode!==s.a.ui.keyCode.TAB)return
var t=s()(":tabbable",this.element),i=t.first(),n=t.last()
if(e.target!==n[0]||e.shiftKey){if(e.target===i[0]&&e.shiftKey){n.focus(1)
e.preventDefault()}}else{i.focus(1)
e.preventDefault()}}})
this._on({focusout:function(e){this.closeTimer=this._delay((function(){this.close(e)}),150)},focusin:function(e){clearTimeout(this.closeTimer)},mouseup:function(e){clearTimeout(this.closeTimer)}})
this._on({keyup:function(e){if(e.keyCode===s.a.ui.keyCode.ESCAPE&&this.element.is(":visible")){this.close(e)
this.focusTrigger()}}})
this._on(this.document,{click:function(e){this.isOpen&&!s()(e.target).closest(this.element.add(this.options.trigger)).length&&this.close(e)}})},_destroy:function(){this.element.show().removeClass("ui-popup").removeAttr("aria-hidden").removeAttr("aria-expanded").unbind("keypress.ui-popup")
this.options.trigger.removeAttr("aria-haspopup").removeAttr("aria-owns")
this.generatedId&&this.element.removeAttr("id")
this.generatedRole&&this.element.removeAttr("role")},open:function(e){var t=s.a.extend({},{of:this.options.trigger},this.options.position)
this._show(this.element,this.options.show)
this.element.attr("aria-hidden","false").attr("aria-expanded","true").position(t)
this.options.trigger.attr("tabindex",-1)
this.isOpen=true
this._trigger("open",e)},focusPopup:function(e){if(!this.options.managed){var t=this.element.find(":tabbable")
this.removeTabIndex=false
if(!t.length){if(!this.element.is(":tabbable")){this.element.attr("tabindex","0")
this.removeTabIndex=true}t=t.add(this.element[0])}t.first().focus(1)}this._trigger("focusPopup",e)},focusTrigger:function(e){u=true
this.options.trigger.focus()
this._trigger("focusTrigger",e)},close:function(e){this._beforeClose()
this._hide(this.element,this.options.hide)
this.options.trigger.attr("tabindex",0)
this.removeTabIndex&&this.element.removeAttr("tabindex")
this.isOpen=false
this._trigger("close",e)},_beforeClose:function(){this.element.attr("aria-hidden","true").attr("aria-expanded","false")}})
class c{constructor(e,t){["onOpen","select","onClose","close","keepButtonActive"].forEach(e=>this[e]=this[e].bind(this))
this.$trigger=s()(e).data("kyleMenu",this)
this.$ariaMenuWrapper=this.$trigger.parent()
this.opts=s.a.extend(true,{},c.defaults,t)
if(!this.opts.noButton){this.opts.buttonOpts.addDropArrow&&this.$trigger.append('<i class="icon-mini-arrow-down"></i>')
this.$trigger.button(this.opts.buttonOpts)
this.$trigger.bind("mouseleave.button",this.keepButtonActive)}this.$menu=this.$trigger.next().menu(this.opts.menuOpts).popup(this.opts.popupOpts).addClass("ui-kyle-menu use-css-transitions-for-show-hide")
if(this.opts.appendMenuTo){this.$menu.on({keydown:e=>{if(e.keyCode===s.a.ui.keyCode.TAB){let t
t=e.shiftKey?{which:s.a.ui.keyCode.TAB,shiftKey:true}:{which:s.a.ui.keyCode.TAB}
const i=s.a.Event("keydown",t)
this.$trigger.focus().trigger(i)}}})
const e=this.$menu.data("popup")
const t=e.open
const i=this
e.open=function(){i.$menu.appendTo(i.opts.appendMenuTo)
return t.apply(this,arguments)}
this.$placeholder=s()('<span style="display:none;">').insertAfter(this.$menu)
this.$menu.bind("click",(...e)=>this.$placeholder.trigger(...e))}this.opts.notifyMenuActiveOnParent&&(this.$notifyParent=this.$trigger.closest(this.opts.notifyMenuActiveOnParent))
this.$menu.on({menuselect:this.select,popupopen:this.onOpen,popupclose:this.onClose})}onOpen(e){this.$ariaMenuWrapper.attr("role","application")
this.adjustCarat(e)
this.$menu.addClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.addClass("menu_active")}open(){this.$menu.popup("open")}select(e,t){let i
if("click"!==(e.originalEvent&&e.originalEvent.type)&&(i=s()(t.item).find("a"))){e.preventDefault()
const t=i[0]
const n=document.createEvent("MouseEvent")
n.initEvent("click",true,true)
t.dispatchEvent(n)}this.close()}onClose(){this.opts.appendMenuTo&&this.$menu.insertBefore(this.$placeholder)
this.$trigger.removeClass("ui-state-active")
this.$ariaMenuWrapper.removeAttr("role")
this.$menu.removeClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.removeClass("menu_active")
this.opts.returnFocusTo&&!this.opts.returnFocusTo.prop("disabled")&&requestAnimationFrame(()=>{document.body===document.activeElement&&this.opts.returnFocusTo.focus()})}close(){this.$menu.hasClass("ui-state-open")&&this.$menu.popup("close").removeClass("ui-state-open")}keepButtonActive(){this.$menu.is(".ui-state-open")&&this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")}adjustCarat(e){this.$carat&&this.$carat.remove()
this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")
const t=this.$trigger.outerWidth()
const i=this.$trigger.offset().left
const n=this.$menu[0].getBoundingClientRect()
const o=this.$trigger[0].getBoundingClientRect()
const a=n.top+n.height<o.top
const r=n.height-2
const u=e.pageX||i+t/2
const c=i-this.$menu.offset().left
const h=u-this.$trigger.offset().left
const l=Math.min(Math.max(6,h),t-6)+c
this.$carat=s()('<span class="ui-menu-carat"><span /></span>').css("left",l)
a&&this.$carat.css("top",r).css("transform","rotateX(180deg)")
this.$carat.prependTo(this.$menu)}}c.defaults={popupOpts:{position:{my:"center top",at:"center bottom",offset:"0 10px",within:"#main",collision:"flipfit"}},buttonOpts:{addDropArrow:true}}
s.a.fn.kyleMenu=function(e){return this.each((function(){s()(this).data().kyleMenu||new c(this,e)}))}},Opnj:function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
i("MIhX")
i("dJId")
function o(){return[].some.call(s()(this).parents().andSelf(),(function(e){return"none"==s.a.css(e,"display")}))}var a=false
s.a.widget("ui.menu",{version:"@VERSION",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,s.a.proxy((function(e){this.options.disabled&&e.preventDefault()}),this))
this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(e){var t=s()(e.target)
if(!a&&t.closest(".ui-menu-item").not(".ui-state-disabled").length){a=true
this.select(e)
this.element.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||this.element.focus()}},"mouseenter .ui-menu-item":function(e){var t=s()(e.currentTarget)
t.siblings().children(".ui-state-active").removeClass("ui-state-active")
this.focus(e,t)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e){var t=this.active||this.element.children(".ui-menu-item").not(o).eq(0)
t.length&&this.focus(e,t)},blur:function(e){this._delay((function(){s.a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)}))},keydown:"_keydown"})
this.refresh()
this._on(this.document,{click:function(e){s()(e.target).closest(".ui-menu").length||this.collapseAll(e)
a=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show()
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each((function(){var e=s()(this)
e.data("ui-menu-submenu-carat")&&e.remove()}))
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var t,i,n,a,r,u=true
function c(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(e.keyCode){case s.a.ui.keyCode.PAGE_UP:this.previousPage(e)
break
case s.a.ui.keyCode.PAGE_DOWN:this.nextPage(e)
break
case s.a.ui.keyCode.HOME:this._move("first","first",e)
break
case s.a.ui.keyCode.END:this._move("last","last",e)
break
case s.a.ui.keyCode.UP:this.previous(e)
break
case s.a.ui.keyCode.DOWN:this.next(e)
break
case s.a.ui.keyCode.LEFT:this.collapse(e)
break
case s.a.ui.keyCode.RIGHT:this.active.is(".ui-state-disabled")||this.expand(e)
break
case s.a.ui.keyCode.ENTER:case s.a.ui.keyCode.SPACE:this._activate(e)
break
case s.a.ui.keyCode.ESCAPE:this.collapse(e)
break
default:u=false
i=this.previousFilter||""
n=String.fromCharCode(e.keyCode)
a=false
clearTimeout(this.filterTimer)
n===i?a=true:n=i+n
r=new RegExp("^"+c(n),"i")
t=this.activeMenu.children(".ui-menu-item").filter((function(){return r.test(s()(this).children("a").not(o).text())}))
t=a&&-1!==t.index(this.active.next())?this.active.nextAll(".ui-menu-item"):t
if(!t.length){n=String.fromCharCode(e.keyCode)
r=new RegExp("^"+c(n),"i")
t=this.activeMenu.children(".ui-menu-item").filter((function(){return r.test(s()(this).children("a").not(o).text())}))}if(t.length){this.focus(e,t)
if(t.length>1){this.previousFilter=n
this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)}else delete this.previousFilter}else delete this.previousFilter}if(u){e.stopPropagation()
e.preventDefault()}},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var e,t=this.options.icons.submenu,i=this.element.find(this.options.menus+":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"})
e=i.add(this.element)
e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()})
e.children(":not(.ui-menu-item)").each((function(){var e=s()(this);/[^\-—–\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}))
e.children(".ui-state-disabled").attr("aria-disabled","true")
i.each((function(){var e=s()(this),i=e.prev("a"),n=s()("<span>").addClass("ui-menu-icon ui-icon "+t).data("ui-menu-submenu-carat",true)
i.attr("aria-haspopup","true").prepend(n)
e.attr("aria-labelledby",i.attr("id"))}))},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var i,n
this.blur(e,e&&"focus"===e.type)
this._scrollIntoView(t)
this.active=t.first()
n=this.active.children("a:visible").addClass("ui-state-focus")
this.options.role&&this.element.attr("aria-activedescendant",n.attr("id"))
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active")
e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay)
i=t.children(".ui-menu")
i.length&&/^mouse/.test(e.type)&&this._startOpening(i)
this.activeMenu=t.parent()
this._trigger("focus",e,{item:t})},_scrollIntoView:function(e){var t,i,n,o,a,r
if(this._hasScroll()){t=parseFloat(s.a.css(this.activeMenu[0],"borderTopWidth"))||0
i=parseFloat(s.a.css(this.activeMenu[0],"paddingTop"))||0
n=e.offset().top-this.activeMenu.offset().top-t-i
o=this.activeMenu.scrollTop()
a=this.activeMenu.height()
r=e.height()
n<0?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r)}},blur:function(e,t){t||clearTimeout(this.timer)
if(!this.active)return
this.active.children("a").removeClass("ui-state-focus")
this.active=null
this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer)
if("true"!==e.attr("aria-hidden"))return
this.timer=this._delay((function(){this._close()
this._open(e)}),this.delay)},_open:function(e){var t=s.a.extend({of:this.active},this.options.position)
clearTimeout(this.timer)
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true")
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(t)},collapseAll:function(e,t){clearTimeout(this.timer)
this.timer=this._delay((function(){var i=t?this.element:s()(e&&e.target).closest(this.element.find(".ui-menu"))
i.length||(i=this.element)
this._close(i)
this.blur(e)
this.activeMenu=i}),this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element)
e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
if(t&&t.length){this._close()
this.focus(e,t)}},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").not(o).first()
if(t&&t.length){this._open(t.parent())
this._delay((function(){this.focus(e,t)}))}},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").not(o).length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").not(o).length},_move:function(e,t,i){var n
this.active&&(n="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").not(o).eq(-1):this.active[e+"All"](".ui-menu-item").not(o).eq(0))
n&&n.length&&this.active||(n=this.activeMenu.children(".ui-menu-item").not(o)[t]())
this.focus(i,n)},nextPage:function(e){var t,i,n
if(!this.active){this.next(e)
return}if(this.isLastItem())return
if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.nextAll(".ui-menu-item").not(o).each((function(){t=s()(this)
return t.offset().top-i-n<0}))
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(o)[this.active?"last":"first"]())},previousPage:function(e){var t,i,n
if(!this.active){this.next(e)
return}if(this.isFirstItem())return
if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.prevAll(".ui-menu-item").not(o).each((function(){t=s()(this)
return t.offset().top-i+n>0}))
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(o).first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){var t={item:this.active||s()(e.target).closest(".ui-menu-item")}
t.item.has(".ui-menu").length||this.collapseAll(e,true)
this._trigger("select",e,t)}})}}])

//# sourceMappingURL=76-c-f075640429.js.map