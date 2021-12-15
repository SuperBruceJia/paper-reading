(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[33],{"0FJJ":function(e,t,i){"use strict"
var s=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty
t["a"]=function(){function e(e){null==e&&(e={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.excludesSmallMatches=s(this.excludesSmallMatches,this)
this.toJSON=s(this.toJSON,this)
this.percent=s(this.percent,this)
this.words=s(this.words,this)
this.originalityReportVisibility=e.originality_report_visibility||"immediate"
this.sPaperCheck=this.normalizeBoolean(e.s_paper_check)
this.internetCheck=this.normalizeBoolean(e.internet_check)
this.excludeBiblio=this.normalizeBoolean(e.exclude_biblio)
this.excludeQuoted=this.normalizeBoolean(e.exclude_quoted)
this.journalCheck=this.normalizeBoolean(e.journal_check)
this.excludeSmallMatchesType=e.exclude_small_matches_type
this.excludeSmallMatchesValue=e.exclude_small_matches_value||0
this.submitPapersTo=!e.hasOwnProperty("submit_papers_to")||this.normalizeBoolean(e.submit_papers_to)}e.prototype.words=function(){return"words"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
e.prototype.percent=function(){return"percent"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
e.prototype.toJSON=function(){return{s_paper_check:this.sPaperCheck,originality_report_visibility:this.originalityReportVisibility,internet_check:this.internetCheck,exclude_biblio:this.excludeBiblio,exclude_quoted:this.excludeQuoted,journal_check:this.journalCheck,exclude_small_matches_type:this.excludeSmallMatchesType,exclude_small_matches_value:this.excludeSmallMatchesValue,submit_papers_to:this.submitPapersTo}}
e.prototype.excludesSmallMatches=function(){return!(null==this.excludeSmallMatchesType)}
e.prototype.present=function(){var e,t,i,s
e={}
i=this
for(t in i){if(!n.call(i,t))continue
s=i[t]
e[t]=s}e.excludesSmallMatches=this.excludesSmallMatches()
e.words=this.words()
e.percent=this.percent()
return e}
e.prototype.normalizeBoolean=function(e){return["1",true,"true",1].includes(e)}
return e}()},"4M30":function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
i.d(t,"b",(function(){return o}))
const s={}.hasOwnProperty
function n(e,t){for(const i in t)s.call(t,i)&&(e[i]=t[i])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e}function o(e,t){Object.keys(t).forEach(i=>Object.defineProperty(e,i,{get:t[i],enumerable:true,configurable:true}))
return e}},"85Cn":function(e,t,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
i("ouhR")
var a=i("ZUSV")
var u=i("XE4h")
var l=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t){for(var i in t)d.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},d={}.hasOwnProperty
t["a"]=function(e){c(t,e)
function t(){this.isSimple=l(this.isSimple,this)
this.datesJSON=l(this.datesJSON,this)
this.toJSON=l(this.toJSON,this)
this.blank=l(this.blank,this)
this.containsDefaultDueDate=l(this.containsDefaultDueDate,this)
this.getDefaultDueDate=l(this.getDefaultDueDate,this)
this.courseSectionIDs=l(this.courseSectionIDs,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.model=a["a"]
t.prototype.courseSectionIDs=function(){return this.pluck("course_section_id")}
t.prototype.comparator=function(e){return e.id}
t.prototype.getDefaultDueDate=function(){return this.detect((function(e){return e.getCourseSectionID()===u["a"].defaultDueDateSectionID}))}
t.prototype.containsDefaultDueDate=function(){return!!this.getDefaultDueDate()}
t.prototype.blank=function(){return this.select((function(e){return e.isBlank()}))}
t.prototype.toJSON=function(){var e
e=this.reject((function(e){return e.representsDefaultDueDate()}))
return r.a.map(e,(function(e){return e.toJSON().assignment_override}))}
t.prototype.datesJSON=function(){return this.map((function(e){return e.toJSON().assignment_override}))}
t.prototype.isSimple=function(){return 0===r.a.difference(this.courseSectionIDs(),[u["a"].defaultDueDateSectionID]).length}
return t}(n.a.Collection)},B9nD:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var s=i("mX+G")
var n=i.n(s)
var o=i("HGxv")
var r=i("8WeW")
Object(r["a"])(JSON.parse('{"ar":{"models_DateGroup":{"everyone_else":"أي شخص آخر"}},"ca":{"models_DateGroup":{"everyone_else":"La resta de persones"}},"cy":{"models_DateGroup":{"everyone_else":"Pawb arall"}},"da":{"models_DateGroup":{"everyone_else":"Alle andre"}},"da-x-k12":{"models_DateGroup":{"everyone_else":"Alle andre"}},"de":{"models_DateGroup":{"everyone_else":"Alle anderen"}},"el":{"models_DateGroup":{"everyone_else":"Όλοι οι άλλοι"}},"en-AU":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-AU-x-unimelb":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-CA":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-GB":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-GB-x-ukhe":{"models_DateGroup":{"everyone_else":"Everyone else"}},"es":{"models_DateGroup":{"everyone_else":"Todos los demás"}},"fa":{"models_DateGroup":{"everyone_else":"هر شخص دیگر"}},"fi":{"models_DateGroup":{"everyone_else":"Kaikki muut"}},"fr":{"models_DateGroup":{"everyone_else":"Tous les autres"}},"fr-CA":{"models_DateGroup":{"everyone_else":"Tous les autres"}},"he":{"models_DateGroup":{"everyone_else":"כל אחד אחר"}},"ht":{"models_DateGroup":{"everyone_else":"Tout lòt yo"}},"hu":{"models_DateGroup":{"everyone_else":"Mindenki más "}},"hy":{"models_DateGroup":{"everyone_else":"Մնացած յուրաքանչյուրը"}},"is":{"models_DateGroup":{"everyone_else":"Allir aðrir"}},"it":{"models_DateGroup":{"everyone_else":"Tutti gli altri"}},"ja":{"models_DateGroup":{"everyone_else":"他の全員"}},"ko":{"models_DateGroup":{"everyone_else":"다른 모든 사람"}},"mi":{"models_DateGroup":{"everyone_else":"tāngata katoa atu"}},"nb":{"models_DateGroup":{"everyone_else":"Alle andre"}},"nb-x-k12":{"models_DateGroup":{"everyone_else":"Alle andre"}},"nl":{"models_DateGroup":{"everyone_else":"Alle anderen"}},"nn":{"models_DateGroup":{"everyone_else":"Alle andre"}},"pl":{"models_DateGroup":{"everyone_else":"Wszyscy pozostali"}},"pt":{"models_DateGroup":{"everyone_else":"Todos os outros"}},"pt-BR":{"models_DateGroup":{"everyone_else":"Todos os demais"}},"ru":{"models_DateGroup":{"everyone_else":"Все остальные"}},"sv":{"models_DateGroup":{"everyone_else":"Alla andra"}},"sv-x-k12":{"models_DateGroup":{"everyone_else":"Alla andra"}},"tr":{"models_DateGroup":{"everyone_else":"Geri kalan herkes"}},"uk":{"models_DateGroup":{"everyone_else":"Всі інші"}},"zh-Hans":{"models_DateGroup":{"everyone_else":"其他所有人"}},"zh-Hant":{"models_DateGroup":{"everyone_else":"其他所有人"}}}'))
i("jQeR")
i("0sPK")
var a=o["default"].scoped("models_DateGroup")
var u=i("3H9/")
class l extends n.a.Model{dueAt(){const e=this.get("due_at")
return e?u["b"].parse(e):null}unlockAt(){const e=this.get("unlock_at")
return e?u["b"].parse(e):null}lockAt(){const e=this.get("lock_at")
return e?u["b"].parse(e):null}now(){const e=this.get("now")
return e?u["b"].parse(e):new Date}alwaysAvailable(){return!this.unlockAt()&&!this.lockAt()}pending(){const e=this.unlockAt()
return e&&e>this.now()}available(){return this.alwaysAvailable()||!this.lockAt()&&this.unlockAt()<this.now()}open(){return this.lockAt()&&!this.pending()&&!this.closed()}closed(){const e=this.lockAt()
return e&&e<this.now()}toJSON(){return{dueFor:this.get("title"),dueAt:this.dueAt(),unlockAt:this.unlockAt(),lockAt:this.lockAt(),available:this.available(),pending:this.pending(),open:this.open(),closed:this.closed()}}}l.prototype.defaults={get title(){return a.t("everyone_else","Everyone else")},due_at:null,unlock_at:null,lock_at:null}},FdVj:function(e,t,i){"use strict"
var s=i("qJBq")
var n=i.n(s)
var o=i("HGxv")
const r={_parseNumber:n.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=r._parseNumber(e.toString(),{thousands:o["default"].lookup("number.format.delimiter"),decimal:o["default"].lookup("number.format.separator")})
isNaN(t)&&(t=r._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(r.parse(e))}
t["a"]=r},GEFT:function(e,t,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
i("Y/W1")
i("ouhR")
var o=i("B9nD")
var r=function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){r(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=o["a"]
return t}(n.a.Collection)},UWiF:function(e,t,i){"use strict"
var s=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty
t["a"]=function(){function e(e){null==e&&(e={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.toJSON=s(this.toJSON,this)
this.originalityReportVisibility=e.originality_report_visibility||"immediate"
this.excludeQuoted=this.normalizeBoolean(e.exclude_quoted)
this.excludeSelfPlag=this.normalizeBoolean(e.exclude_self_plag)
this.storeInIndex=this.normalizeBoolean(e.store_in_index)}e.prototype.toJSON=function(){return{originality_report_visibility:this.originalityReportVisibility,exclude_quoted:this.excludeQuoted,exclude_self_plag:this.excludeSelfPlag,store_in_index:this.storeInIndex}}
e.prototype.present=function(){var e,t,i,s
e={}
i=this
for(t in i){if(!n.call(i,t))continue
s=i[t]
e[t]=s}return e}
e.prototype.normalizeBoolean=function(e){return["1",true,"true",1].includes(e)}
return e}()},XE4h:function(e,t,i){"use strict"
var s=i("mX+G")
var n=i("HGxv")
var o=i("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"modelsSection":{"overrides":{"everyone":"الجميع"}}},"ca":{"modelsSection":{"overrides":{"everyone":"Tothom"}}},"cy":{"modelsSection":{"overrides":{"everyone":"Pawb"}}},"da":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"da-x-k12":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"de":{"modelsSection":{"overrides":{"everyone":"Jeder"}}},"el":{"modelsSection":{"overrides":{"everyone":"Όλοι/ες"}}},"en-AU":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-AU-x-unimelb":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-CA":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-GB":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-GB-x-ukhe":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"es":{"modelsSection":{"overrides":{"everyone":"Todos"}}},"fa":{"modelsSection":{"overrides":{"everyone":"همه"}}},"fi":{"modelsSection":{"overrides":{"everyone":"Kaikki"}}},"fr":{"modelsSection":{"overrides":{"everyone":"Tout le monde"}}},"fr-CA":{"modelsSection":{"overrides":{"everyone":"Tous"}}},"he":{"modelsSection":{"overrides":{"everyone":"כל אחד"}}},"ht":{"modelsSection":{"overrides":{"everyone":"Tout Moun"}}},"hu":{"modelsSection":{"overrides":{"everyone":"Mindenki"}}},"hy":{"modelsSection":{"overrides":{"everyone":"Յուրաքանչյուրին"}}},"is":{"modelsSection":{"overrides":{"everyone":"Allir"}}},"it":{"modelsSection":{"overrides":{"everyone":"Tutti"}}},"ja":{"modelsSection":{"overrides":{"everyone":"全員"}}},"ko":{"modelsSection":{"overrides":{"everyone":"모두"}}},"mi":{"modelsSection":{"overrides":{"everyone":"tāngata katoa"}}},"nb":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"nb-x-k12":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"nl":{"modelsSection":{"overrides":{"everyone":"Iedereen"}}},"nn":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"pl":{"modelsSection":{"overrides":{"everyone":"Każdy"}}},"pt":{"modelsSection":{"overrides":{"everyone":"Todos"}}},"pt-BR":{"modelsSection":{"overrides":{"everyone":"Todo mundo"}}},"ru":{"modelsSection":{"overrides":{"everyone":"Все"}}},"sv":{"modelsSection":{"overrides":{"everyone":"Alla"}}},"sv-x-k12":{"modelsSection":{"overrides":{"everyone":"Alla"}}},"tr":{"modelsSection":{"overrides":{"everyone":"Herkes"}}},"uk":{"modelsSection":{"overrides":{"everyone":"Всі"}}},"zh-Hans":{"modelsSection":{"overrides":{"everyone":"所有人"}}},"zh-Hant":{"modelsSection":{"overrides":{"everyone":"所有人"}}}}'))
i("jQeR")
i("0sPK")
var r=n["default"].scoped("modelsSection")
var a=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var i in t)l.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},l={}.hasOwnProperty
t["a"]=function(e){u(t,e)
function t(){this.isDefaultDueDateSection=a(this.isDefaultDueDateSection,this)
return t.__super__.constructor.apply(this,arguments)}t.defaultDueDateSection=function(){return new t({id:t.defaultDueDateSectionID,name:r.t("overrides.everyone","Everyone")})}
t.defaultDueDateSectionID="0"
t.prototype.isDefaultDueDateSection=function(){return this.id===t.defaultDueDateSectionID}
return t}(s["Model"])},ZUSV:function(e,t,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
var a=i("XE4h")
var u=i("HGxv")
var l=i("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"mastery_paths_cc4096c2":"مسارات الإتقان"},"ca":{"mastery_paths_cc4096c2":"Camins cap al domini"},"cy":{"mastery_paths_cc4096c2":"Llwybrau Meistroli"},"da":{"mastery_paths_cc4096c2":"Læringsstier"},"da-x-k12":{"mastery_paths_cc4096c2":"Læringsstier"},"de":{"mastery_paths_cc4096c2":"Leistungsziel-Pfade"},"en-AU":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-AU-x-unimelb":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-CA":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-GB":{"mastery_paths_cc4096c2":"Mastery paths"},"en-GB-x-lbs":{"mastery_paths_cc4096c2":"Mastery paths"},"en-GB-x-ukhe":{"mastery_paths_cc4096c2":"Mastery paths"},"es":{"mastery_paths_cc4096c2":"Caminos de dominio"},"fa":{"mastery_paths_cc4096c2":"مسیرهای تسلط"},"fi":{"mastery_paths_cc4096c2":"Personoidut oppimispolut"},"fr":{"mastery_paths_cc4096c2":"Parcours de maîtrise"},"fr-CA":{"mastery_paths_cc4096c2":"Parcours de maîtrise"},"he":{"mastery_paths_cc4096c2":"מסלולי התמחות"},"ht":{"mastery_paths_cc4096c2":"Pakou Prensipal"},"hu":{"mastery_paths_cc4096c2":"Jártassági útvonalak"},"is":{"mastery_paths_cc4096c2":"Tileinkunarslóðir"},"it":{"mastery_paths_cc4096c2":"Percorsi di acquisizione della padronanza"},"ja":{"mastery_paths_cc4096c2":"熟達の過程"},"mi":{"mastery_paths_cc4096c2":"Mana Ara"},"nb":{"mastery_paths_cc4096c2":"Læringsstier"},"nb-x-k12":{"mastery_paths_cc4096c2":"Mål-stier"},"nl":{"mastery_paths_cc4096c2":"Meesterschapspaden"},"nn":{"mastery_paths_cc4096c2":"Meistringsstiar"},"pl":{"mastery_paths_cc4096c2":"Ścieżki biegłości"},"pt":{"mastery_paths_cc4096c2":"Circuito Principal"},"pt-BR":{"mastery_paths_cc4096c2":"Caminhos de Domínio"},"ru":{"mastery_paths_cc4096c2":"Пути усвоения"},"sl":{"mastery_paths_cc4096c2":"Napredovanja v odličnosti"},"sv":{"mastery_paths_cc4096c2":"Måluppfyllelsevägar"},"sv-x-k12":{"mastery_paths_cc4096c2":"Måluppfyllelsevägar"},"tr":{"mastery_paths_cc4096c2":"Yeterlilik Süreçleri"},"uk":{"mastery_paths_cc4096c2":"Шляхи досягнення майстерності"},"zh-Hans":{"mastery_paths_cc4096c2":"掌握路径"},"zh-Hant":{"mastery_paths_cc4096c2":"掌握歷程"}}'))
i("jQeR")
i("0sPK")
var c=u["default"].scoped("assignmentOverride")
var d=i("4M30")
var _=function(e,t){return function(){return e.apply(t,arguments)}},h=function(e,t){for(var i in t)p.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},p={}.hasOwnProperty
t["a"]=function(e){h(t,e)
function t(){this.combinedDates=_(this.combinedDates,this)
this.representsDefaultDueDate=_(this.representsDefaultDueDate,this)
this.getCourseSectionID=_(this.getCourseSectionID,this)
this.isBlank=_(this.isBlank,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={due_at_overridden:true,due_at:null,all_day:false,all_day_date:null,unlock_at_overridden:true,unlock_at:null,lock_at_overridden:true,lock_at:null}
t.conditionalRelease=Object(d["b"])({noop_id:"1"},{name:function(){return c.t("Mastery Paths")}})
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.on("change:course_section_id",this.clearID,this)}
t.prototype.clearID=function(){return this.set("id",void 0)}
t.prototype.parse=function(e){var t
t=e.assignment_override
return t}
t.prototype.toJSON=function(){return{assignment_override:t.__super__.toJSON.apply(this,arguments)}}
t.defaultDueDate=function(e){var i
null==e&&(e={})
i=r.a.extend(e,{course_section_id:a["a"].defaultDueDateSectionID})
return new t(i)}
t.prototype.isBlank=function(){return null==this.get("due_at")}
t.prototype.getCourseSectionID=function(){return this.get("course_section_id")}
t.prototype.representsDefaultDueDate=function(){return this.getCourseSectionID()===a["a"].defaultDueDateSectionID}
t.prototype.combinedDates=function(){var e
e=void 0===this.get("id")?null:this.get("id")
return""+(this.get("due_at")+this.get("unlock_at")+this.get("lock_at")+e)}
return t}(n.a.Model)},cRz0:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u}))
var s=i("ik22")
var n=i("ouhR")
var o=i.n(n)
class r{constructor(){this.enabled=s["a"].pandaPubSettings
this.subscribe=(e,t,i)=>{const n=`/${s["a"].pandaPubSettings.application_id}${e}`
this.tokens[n]=t
const r=new o.a.Deferred
r.cancel=function(){}
this.client(e=>{const t=e.subscribe(n,e=>i(e))
t.then(r.resolve,r.reject)
return r.cancel=()=>t.cancel()})
return r}
this.on=(e,t)=>this.client(i=>i.on(e,t))
this.authExtension=()=>({outgoing:(e,t)=>{"/meta/subscribe"===e.channel&&e.subscription in this.tokens&&((e.ext||(e.ext={})).auth={token:this.tokens[e.subscription]})
return t(e)}})
this.subscribe=this.subscribe.bind(this)
this.on=this.on.bind(this)
this.authExtension=this.authExtension.bind(this)
this.faye=null
this.tokens={}}client(e){this.faye&&e(this.faye)
this.faye||o.a.getScript(s["a"].pandaPubSettings.push_url+"/client.js",()=>{this.faye=new window.Faye.Client(s["a"].pandaPubSettings.push_url)
this.faye.addExtension(this.authExtension())
e(this.faye)})}}var a=new r
class u{constructor(e,t,i){this.setToken=(e,t)=>{this.channel=e
this.token=t
a.enabled&&this.running&&this.subscribe()}
this.setOnData=e=>{this.streamingCB=e}
this.start=()=>{this.lastUpdate=Date.now()
this.running=true
this.startTimeout()
a.enabled&&this.subscribe()}
this.stop=()=>{this.stopTimeout()
a.enabled&&this.unsubscribe()
this.running=false}
this.isRunning=()=>this.running
this.startTimeout=()=>this.timeout=setTimeout(this.considerPoll,this.pollInterval)
this.stopTimeout=()=>clearTimeout(this.timeout)
this.considerPoll=()=>{let e=this.pollInterval
a.enabled&&(e=this.rarePollInterval)
return Date.now()-this.lastUpdate>=e?this.pollCB(this.pollDone):this.startTimeout()}
this.pollDone=()=>{this.lastUpdate=Date.now()
this.startTimeout()}
this.subscribe=()=>{if(this.subscription)return
if(!this.channel||!this.token)return
this.subscription=a.subscribe(this.channel,this.token,e=>{this.lastUpdate=Date.now()
this.streamingCB(e)})}
this.unsubscribe=()=>{this.subscription&&this.subscription.cancel()}
this.pollInterval=e
this.rarePollInterval=t
this.pollCB=i
this.running=false
this.lastUpdate=null
o()(window).on("beforeunload",()=>{this.timeout&&this.stopTimeout()})}}},qJBq:function(e,t){(function(){var t,i,s
s=[]
t={}
e.exports=i=function(e,i,n){var o,r,a,u,l,c,d,_,h
null==n&&(n=true)
if("string"===typeof i){if(2!==i.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
h=i[0],o=i[1]}else if(Array.isArray(i)){if(2!==i.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
h=i[0],o=i[1]}else{h=(null!=i?i.thousands:void 0)||(null!=i?i.group:void 0)||t.thousands
o=(null!=i?i.decimal:void 0)||t.decimal}d=""+h+o+n
c=s[d]
if(null==c){a=n?3:1
c=s[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+h+"\\d{"+a+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")}_=e.match(c)
if(!(null!=_&&3===_.length))return NaN
u=_[1].replace(new RegExp("\\"+h,"g"),"")
r=_[2]
l=parseFloat(u+"."+r)
return l}
e.exports.setOptions=function(e){var i,s
for(i in e){s=e[i]
t[i]=s}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(s){return i(s,e,t)}}
e.exports.factoryReset()}).call(this)},tybv:function(e,t,i){"use strict"
var s=i("Y/W1")
var n=i.n(s)
function o(e,t=false){let i=n.a.isDate(e)
t&&!i&&(i=null===e)
if(!i)throw new Error(`\`${e}\` must be a Date or null`)}function r(e){if(null==e)throw new Error(`'${e}' must be an array or object`)
const t=["startDate","endDate","closeDate"]
const i=n.a.isArray(e)?e:[e]
n.a.each(i,e=>{n.a.each(t,t=>o(e[t]))})
return i}function a(e){const t=n.a.isString(e)
if(!t)throw new Error(`Grading period id \`${e}\` must be a String`)}class u{constructor(e){this.gradingPeriods=r(e)}static isAllGradingPeriods(e){a(e)
return"0"===e}get earliestValidDueDate(){const e=n.a.sortBy(this.gradingPeriods,"startDate")
const t=n.a.find(e,{isClosed:false})
return t?t.startDate:null}gradingPeriodForDueAt(e){o(e,true)
return n.a.find(this.gradingPeriods,t=>this.isDateInGradingPeriod(e,t.id,false))||null}isDateInGradingPeriod(e,t,i=true){if(i){o(e,true)
a(t)}const s=n.a.find(this.gradingPeriods,{id:t})
if(!s)throw new Error(`No grading period has id \`${t}\``)
return null===e?s.isLast:s.startDate<e&&e<=s.endDate}isDateInClosedGradingPeriod(e){const t=this.gradingPeriodForDueAt(e)
return!!t&&t.isClosed}}t["a"]=u},ygkh:function(e,t,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
var a=i("mX+G")
var u=i("2gWY")
var l=i("0FJJ")
var c=i("UWiF")
var d=i("B9nD")
var _=i("85Cn")
var h=i("GEFT")
var p=i("HGxv")
var m=i("8WeW")
Object(m["a"])(JSON.parse('{"ar":{"assignment_976578a8":"المهمة","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"لا يمكن إلغاء نشر %{name} في حال وجود عمليات إرسال لطالب","discussion_topic_dc85ad4c":"موضوع المناقشة","new_quiz_34aacba6":"اختبار جديد","page_50c4823d":"صفحة","quiz_e0dcce8f":"اختبار","student_5da6bfd1":"الطالب","students_1b8cd07b":"الطلاب"},"ca":{"assignment_976578a8":"Activitat","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"No es pot anul·lar la publicació de %{name} si hi ha entregues d\'estudiants","discussion_topic_dc85ad4c":"Tema de debat","new_quiz_34aacba6":"Qüestionari nou","page_50c4823d":"Pàgina","quiz_e0dcce8f":"Qüestionari","student_5da6bfd1":"Estudiant","students_1b8cd07b":"Estudiants"},"cy":{"assignment_976578a8":"Aseiniad","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Does dim modd dad-gyhoeddi %{name} os oes gwaith wedi’i gyflwyno gan fyfyrwyr","discussion_topic_dc85ad4c":"Pwnc Trafod","new_quiz_34aacba6":"Cwis Newydd","page_50c4823d":"Tudalen","quiz_e0dcce8f":"Cwis","student_5da6bfd1":"Myfyriwr","students_1b8cd07b":"Myfyrwyr"},"da":{"assignment_976578a8":"Opgave","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke annullere offentliggørelse af %{name}, hvis det indeholder afleveringer fra studerende","discussion_topic_dc85ad4c":"Diskussionsemne","new_quiz_34aacba6":"Ny test","page_50c4823d":"Side","quiz_e0dcce8f":"Test","student_5da6bfd1":"Studerende","students_1b8cd07b":"Studerende"},"da-x-k12":{"assignment_976578a8":"Opgave","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke annullere offentliggørelse af %{name}, hvis det indeholder afleveringer fra elever","discussion_topic_dc85ad4c":"Diskussionsemne","new_quiz_34aacba6":"Ny quiz","page_50c4823d":"Side","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Elev","students_1b8cd07b":"Elever"},"de":{"assignment_976578a8":"Aufgabe","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Veröffentlichen von %{name} kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","discussion_topic_dc85ad4c":"Diskussionsthema","new_quiz_34aacba6":"Neues Quiz","page_50c4823d":"Seite","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Studenten"},"el":{"assignment_976578a8":"Εργασία","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Δεν γίνεται να απενεργοποιηθεί η δημοσίευση %{name} αν υπάρχουν υποβολές σπουδαστών","discussion_topic_dc85ad4c":"Θέμα συζήτησης","new_quiz_34aacba6":"Νέο Κουίζ","quiz_e0dcce8f":"Κουίζ","student_5da6bfd1":"Μαθητής ","students_1b8cd07b":"Μαθητές"},"en-AU":{"assignment_976578a8":"Assignment","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion Topic","new_quiz_34aacba6":"New Quiz","page_50c4823d":"Page","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"en-AU-x-unimelb":{"assignment_976578a8":"Assignment","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion Topic","new_quiz_34aacba6":"New Quiz","page_50c4823d":"Page","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"en-CA":{"assignment_976578a8":"Assignment","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion Topic","new_quiz_34aacba6":"New Quiz","page_50c4823d":"Page","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"en-GB":{"assignment_976578a8":"Assignment","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion topic","new_quiz_34aacba6":"New quiz","page_50c4823d":"Page","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"en-GB-x-lbs":{"assignment_976578a8":"Task","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion topic","new_quiz_34aacba6":"New Survey","page_50c4823d":"Page","quiz_e0dcce8f":"Survey","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"en-GB-x-ukhe":{"assignment_976578a8":"Assignment","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions","discussion_topic_dc85ad4c":"Discussion topic","new_quiz_34aacba6":"New quiz","page_50c4823d":"Page","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Students"},"es":{"assignment_976578a8":"Tarea","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"No se puede cancelar la publicación de %{name} si hay entregas de estudiantes","discussion_topic_dc85ad4c":"Tema del foro de discusión","new_quiz_34aacba6":"Nuevo examen","page_50c4823d":"Página","quiz_e0dcce8f":"Examen","student_5da6bfd1":"Estudiante","students_1b8cd07b":"Estudiantes"},"fa":{"assignment_976578a8":"تکلیف","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار %{name} را لغو کرد","discussion_topic_dc85ad4c":"موضوع بحث","new_quiz_34aacba6":"آزمون جدید","page_50c4823d":"صفحه","quiz_e0dcce8f":"آزمون","student_5da6bfd1":"دانشجو","students_1b8cd07b":"دانشجویان"},"fi":{"assignment_976578a8":"Tehtävä","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Julkaisua %{name} ei voida peruuttaa, jos opiskelijoiden tehtäväpalautuksia on olemassa.","discussion_topic_dc85ad4c":"Keskustelun aihe","new_quiz_34aacba6":"Uusi testi","page_50c4823d":"Sivu","quiz_e0dcce8f":"Testi","student_5da6bfd1":"Opiskelija","students_1b8cd07b":"Opiskelijat"},"fr":{"assignment_976578a8":"Travail","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Impossible de retirer la publication %{name} s’il y a des soumissions d’étudiants","discussion_topic_dc85ad4c":"Sujet de discussion","new_quiz_34aacba6":"Nouveau questionnaire","page_50c4823d":"Page","quiz_e0dcce8f":"Questionnaire","student_5da6bfd1":"Étudiant","students_1b8cd07b":"Élèves"},"fr-CA":{"assignment_976578a8":"Tâche","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ne peut retirer %{name} de la publication si des étudiants ont envois","discussion_topic_dc85ad4c":"Sujet de discussion","new_quiz_34aacba6":"Nouveau questionnaire","page_50c4823d":"Page","quiz_e0dcce8f":"Questionnaire","student_5da6bfd1":"Étudiant","students_1b8cd07b":"Étudiants"},"he":{"assignment_976578a8":"משימה","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"לא ניתן לבטל את הפרסום %{name} אם יש הגשות תלמידים","discussion_topic_dc85ad4c":"נושא דיון","new_quiz_34aacba6":"בוחן חדש","quiz_e0dcce8f":"בוחן","student_5da6bfd1":"תלמיד","students_1b8cd07b":"תלמידים"},"ht":{"assignment_976578a8":"Sesyon","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ou paka pa pibliye %{name} si gen soumisyon elèv","discussion_topic_dc85ad4c":"Sijè Diskisyon","new_quiz_34aacba6":"Nouvo Quiz","page_50c4823d":"Paj","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Elèv","students_1b8cd07b":"Elèv"},"hu":{"assignment_976578a8":"Feladat","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Nem lehet visszavonni %{name} publikálását, ha már vannak hallgatói munkák beadva","discussion_topic_dc85ad4c":"Fórumtéma","new_quiz_34aacba6":"Új kvíz","page_50c4823d":"Oldal","quiz_e0dcce8f":"Kvíz","student_5da6bfd1":"Hallgató","students_1b8cd07b":"Hallgatók"},"hy":{"assignment_976578a8":"Հանձնարարություն","discussion_topic_dc85ad4c":"Քննարկման թեմա","quiz_e0dcce8f":"Թեստ","student_5da6bfd1":"Ունկնդիր","students_1b8cd07b":"Ունկնդիրներ"},"is":{"assignment_976578a8":"Verkefni","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ekki hægt að fela %{name} ef skil nemenda eru til staðar","discussion_topic_dc85ad4c":"Umræðuefni","new_quiz_34aacba6":"Nýtt próf","page_50c4823d":"Síða","quiz_e0dcce8f":"Próf","student_5da6bfd1":"Nemandi","students_1b8cd07b":"Nemendur"},"it":{"assignment_976578a8":"Compito","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Impossibile annullare la pubblicazione %{name} se ci sono consegne degli studenti","discussion_topic_dc85ad4c":"Argomento di discussione","new_quiz_34aacba6":"Nuovo quiz","page_50c4823d":"Pagina","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Studente","students_1b8cd07b":"Studenti"},"ja":{"assignment_976578a8":"課題","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"受講生の提出物がある場合は、%{name}を未公開にできません","discussion_topic_dc85ad4c":"ディスカッション トピック","new_quiz_34aacba6":"新しいクイズ","page_50c4823d":"ページ","quiz_e0dcce8f":"クイズ","student_5da6bfd1":"受講生","students_1b8cd07b":"受講生"},"ko":{"assignment_976578a8":"과제","discussion_topic_dc85ad4c":"토론 주제","quiz_e0dcce8f":"퀴즈","student_5da6bfd1":"학생","students_1b8cd07b":"학생"},"mi":{"assignment_976578a8":"Whakataunga","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kāore e taea te tāngia %{name} ki te reira e tāpaetanga ākonga","discussion_topic_dc85ad4c":"Kōrerorero Kaupapa","new_quiz_34aacba6":" Quiz Hou","page_50c4823d":"Whārangi","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Ākonga","students_1b8cd07b":"Ngā ākonga"},"nb":{"assignment_976578a8":"Oppgave","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke avpublisere %{name} hvis det er innleveringer fra student","discussion_topic_dc85ad4c":"Diskusjonstema","new_quiz_34aacba6":"Ny test","page_50c4823d":"Side","quiz_e0dcce8f":"Test","student_5da6bfd1":"Student","students_1b8cd07b":"Studenter"},"nb-x-k12":{"assignment_976578a8":"Oppgave","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke avpublisere %{name} hvis det er innleveringer fra elev","discussion_topic_dc85ad4c":"Diskusjonstema","new_quiz_34aacba6":"Ny test","page_50c4823d":"Side","quiz_e0dcce8f":"Test","student_5da6bfd1":"Elev","students_1b8cd07b":"Elever"},"nl":{"assignment_976578a8":"Opdracht","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan publicatie %{name} niet ongedaan maken als er inzendingen van cursisten zijn","discussion_topic_dc85ad4c":"Discussieonderwerp","new_quiz_34aacba6":"Nieuwe toets","page_50c4823d":"Pagina","quiz_e0dcce8f":"Toets","student_5da6bfd1":"Cursist","students_1b8cd07b":"Cursisten"},"nn":{"assignment_976578a8":"Oppgåve","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikkje fjerne publisering av %{name} dersom det finst studentinnleveringar","discussion_topic_dc85ad4c":"Diskusjonsemne","new_quiz_34aacba6":"Ny quiz","page_50c4823d":"Side","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Studentar"},"pl":{"assignment_976578a8":"Zadanie","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Nie można cofnąć publikowania %{name}, jeśli znajdują się przesłane zadania uczestnika","discussion_topic_dc85ad4c":"Temat dyskusji","new_quiz_34aacba6":"Nowy test","page_50c4823d":"Strona","quiz_e0dcce8f":"Test","student_5da6bfd1":"Uczestnik","students_1b8cd07b":"Uczestnicy"},"pt":{"assignment_976578a8":"Tarefa","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Não é possível publicar%{name} se existirem envios de alunos","discussion_topic_dc85ad4c":"Tópico de discussão","new_quiz_34aacba6":"Novo teste","page_50c4823d":"Página","quiz_e0dcce8f":"Teste","student_5da6bfd1":"Aluno","students_1b8cd07b":"Alunos"},"pt-BR":{"assignment_976578a8":"Tarefa","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Não é possível remover a publicação de %{name} se houver trabalhos submetidos pelos alunos","discussion_topic_dc85ad4c":"Assunto do fórum","new_quiz_34aacba6":"Novo teste","page_50c4823d":"Página","quiz_e0dcce8f":"Teste","student_5da6bfd1":"Aluno","students_1b8cd07b":"Alunos"},"ru":{"assignment_976578a8":"Задание","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Невозможно отменить публикацию %{name}, если есть отправленные студентами задания","discussion_topic_dc85ad4c":"Тема обсуждения","new_quiz_34aacba6":"Новое тестирование","page_50c4823d":"Страница","quiz_e0dcce8f":"Тестирование","student_5da6bfd1":"Студент","students_1b8cd07b":"Студенты"},"sl":{"assignment_976578a8":"Naloga","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Neobjava %{name} ni mogoča, če obstajajo oddaje študentov.","discussion_topic_dc85ad4c":"Tema razprave","new_quiz_34aacba6":"Nov kviz","page_50c4823d":"Stran","quiz_e0dcce8f":"Kviz","student_5da6bfd1":"Študent","students_1b8cd07b":"Študenti"},"sv":{"assignment_976578a8":"Uppgift","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Det går inte att avpublicera %{name} om det finns studentinlämningar","discussion_topic_dc85ad4c":"Diskussionsämne","new_quiz_34aacba6":"Ny quiz","page_50c4823d":"Sida","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Student","students_1b8cd07b":"Studenter"},"sv-x-k12":{"assignment_976578a8":"Uppgift","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Det går inte att avpublicera %{name} om det finns elevinlämningar","discussion_topic_dc85ad4c":"Diskussionsämne","new_quiz_34aacba6":"Ny quiz","page_50c4823d":"Sida","quiz_e0dcce8f":"Quiz","student_5da6bfd1":"Elev","students_1b8cd07b":"Elever"},"tr":{"assignment_976578a8":"Ödev","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Öğrenci gönderileri varsa %{name} yayından kaldırılamaz","discussion_topic_dc85ad4c":"Tartışma Konusu","new_quiz_34aacba6":"Yeni Kısa Sınav","page_50c4823d":"Sayfa","quiz_e0dcce8f":"Kısa Sınav","student_5da6bfd1":"Öğrenci","students_1b8cd07b":"Öğrenciler"},"uk":{"assignment_976578a8":"Завдання","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Неможливо скасувати публікацію %{name} якщо присутні студентські матеріали","discussion_topic_dc85ad4c":"Тема для обговорення","new_quiz_34aacba6":"Нова контрольна робота","page_50c4823d":"Сторінка","quiz_e0dcce8f":"Контрольна робота","student_5da6bfd1":"Студент","students_1b8cd07b":"Студенти"},"zh-Hans":{"assignment_976578a8":"作业","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"如果有学生提交，则无法取消发布的%{name}","discussion_topic_dc85ad4c":"讨论主题","new_quiz_34aacba6":"新测验","page_50c4823d":"页面","quiz_e0dcce8f":"测验","student_5da6bfd1":"学生","students_1b8cd07b":"学生"},"zh-Hant":{"assignment_976578a8":"作業","can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"如果有學生提交件，則無法取消發佈 %{name}","discussion_topic_dc85ad4c":"討論主題","new_quiz_34aacba6":"新測驗","page_50c4823d":"頁面","quiz_e0dcce8f":"測驗","student_5da6bfd1":"學生","students_1b8cd07b":"學生"}}'))
i("jQeR")
i("0sPK")
var f=p["default"].scoped("models_Assignment")
var g=i("tybv")
var b=i("3H9/")
var y=i("FdVj")
var v=i("cRz0")
function T(e,t){if(!(e&&t))return false
const i=new URL(e)
const s=new URL(t)
return i.origin===s.origin}var D,S,z,w=function(e,t){return function(){return e.apply(t,arguments)}},A=function(e,t){for(var i in t)x.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},x={}.hasOwnProperty
D=function(){var e
return null!=(e=ENV.PERMISSIONS)?e.manage:void 0}
S=function(){return r.a.includes(ENV.current_user_roles,"admin")}
z=function(){return r.a.includes(ENV.current_user_roles,"student")&&!D()}
t["a"]=function(e){var t
A(i,e)
function i(){this.quizzesRespondusEnabled=w(this.quizzesRespondusEnabled,this)
this.showGradersAnonymousToGradersCheckbox=w(this.showGradersAnonymousToGradersCheckbox,this)
this.pollUntilFinished=w(this.pollUntilFinished,this)
this.pollUntilFinishedLoading=w(this.pollUntilFinishedLoading,this)
this.pollUntilFinishedMigrating=w(this.pollUntilFinishedMigrating,this)
this.pollUntilFinishedImporting=w(this.pollUntilFinishedImporting,this)
this.pollUntilFinishedDuplicating=w(this.pollUntilFinishedDuplicating,this)
this.retry_migration=w(this.retry_migration,this)
this.duplicate_failed=w(this.duplicate_failed,this)
this.duplicate=w(this.duplicate,this)
this.setNullDates=w(this.setNullDates,this)
this._filterFrozenAttributes=w(this._filterFrozenAttributes,this)
this._getAssignmentType=w(this._getAssignmentType,this)
this._hasOnlyType=w(this._hasOnlyType,this)
this._submissionTypes=w(this._submissionTypes,this)
this.toView=w(this.toView,this)
this.submissionTypesFrozen=w(this.submissionTypesFrozen,this)
this.failedToImport=w(this.failedToImport,this)
this.isImporting=w(this.isImporting,this)
this.isQuizLTIAssignment=w(this.isQuizLTIAssignment,this)
this.is_quiz_assignment=w(this.is_quiz_assignment,this)
this.originalAssignmentName=w(this.originalAssignmentName,this)
this.originalAssignmentID=w(this.originalAssignmentID,this)
this.originalQuizID=w(this.originalQuizID,this)
this.originalCourseID=w(this.originalCourseID,this)
this.failedToMigrate=w(this.failedToMigrate,this)
this.failedToDuplicate=w(this.failedToDuplicate,this)
this.isMigrating=w(this.isMigrating,this)
this.isDuplicating=w(this.isDuplicating,this)
this.canDuplicate=w(this.canDuplicate,this)
this.singleSectionDueDate=w(this.singleSectionDueDate,this)
this.allDates=w(this.allDates,this)
this.nonBaseDates=w(this.nonBaseDates,this)
this.hasPointsPossible=w(this.hasPointsPossible,this)
this.hasDueDate=w(this.hasDueDate,this)
this.multipleDueDates=w(this.multipleDueDates,this)
this.defaultDates=w(this.defaultDates,this)
this.showBuildButton=w(this.showBuildButton,this)
this.newQuizzesAssignmentBuildButtonEnabled=w(this.newQuizzesAssignmentBuildButtonEnabled,this)
this.submissionTypeSelectionTools=w(this.submissionTypeSelectionTools,this)
this.dueDateRequiredForAccount=w(this.dueDateRequiredForAccount,this)
this.maxNameLengthRequiredForAccount=w(this.maxNameLengthRequiredForAccount,this)
this.maxNameLength=w(this.maxNameLength,this)
this.sisIntegrationSettingsEnabled=w(this.sisIntegrationSettingsEnabled,this)
this.postToSISName=w(this.postToSISName,this)
this.postToSISEnabled=w(this.postToSISEnabled,this)
this.labelId=w(this.labelId,this)
this.htmlEditUrl=w(this.htmlEditUrl,this)
this.htmlUrl=w(this.htmlUrl,this)
this.objectType=w(this.objectType,this)
this.iconType=w(this.iconType,this)
this.useNewQuizIcon=w(this.useNewQuizIcon,this)
this.published=w(this.published,this)
this.isGpaScaled=w(this.isGpaScaled,this)
this.isLetterGraded=w(this.isLetterGraded,this)
this.isSimple=w(this.isSimple,this)
this.externalToolNewTab=w(this.externalToolNewTab,this)
this.externalToolDataStudentLabelText=w(this.externalToolDataStudentLabelText,this)
this.isMasteryConnectTool=w(this.isMasteryConnectTool,this)
this.externalToolCustomParamsStringified=w(this.externalToolCustomParamsStringified,this)
this.externalToolCustomParams=w(this.externalToolCustomParams,this)
this.externalToolDataStringified=w(this.externalToolDataStringified,this)
this.externalToolData=w(this.externalToolData,this)
this.externalToolUrl=w(this.externalToolUrl,this)
this.gradingStandardId=w(this.gradingStandardId,this)
this.groupCategoryId=w(this.groupCategoryId,this)
this.vericiteEnabled=w(this.vericiteEnabled,this)
this.turnitinEnabled=w(this.turnitinEnabled,this)
this.gradeGroupStudentsIndividually=w(this.gradeGroupStudentsIndividually,this)
this.vericiteAvailable=w(this.vericiteAvailable,this)
this.turnitinAvailable=w(this.turnitinAvailable,this)
this.allowedExtensions=w(this.allowedExtensions,this)
this.restrictFileExtensions=w(this.restrictFileExtensions,this)
this.notifyOfUpdate=w(this.notifyOfUpdate,this)
this.peerReviewsAssignAt=w(this.peerReviewsAssignAt,this)
this.peerReviewCount=w(this.peerReviewCount,this)
this.automaticPeerReviews=w(this.automaticPeerReviews,this)
this.anonymousPeerReviews=w(this.anonymousPeerReviews,this)
this.peerReviews=w(this.peerReviews,this)
this.graderCommentsVisibleToGraders=w(this.graderCommentsVisibleToGraders,this)
this.gradersAnonymousToGraders=w(this.gradersAnonymousToGraders,this)
this.anonymousGrading=w(this.anonymousGrading,this)
this.anonymousInstructorAnnotations=w(this.anonymousInstructorAnnotations,this)
this.moderatedGrading=w(this.moderatedGrading,this)
this.postToSIS=w(this.postToSIS,this)
this.isOnlineSubmission=w(this.isOnlineSubmission,this)
this.acceptsOnlineTextEntries=w(this.acceptsOnlineTextEntries,this)
this.acceptsMediaRecording=w(this.acceptsMediaRecording,this)
this.acceptsOnlineURL=w(this.acceptsOnlineURL,this)
this.acceptsAnnotatedDocument=w(this.acceptsAnnotatedDocument,this)
this.acceptsOnlineUpload=w(this.acceptsOnlineUpload,this)
this.withoutGradedSubmission=w(this.withoutGradedSubmission,this)
this.hasSubmittedSubmissions=w(this.hasSubmittedSubmissions,this)
this.allowedToSubmit=w(this.allowedToSubmit,this)
this.expectsSubmission=w(this.expectsSubmission,this)
this.submissionType=w(this.submissionType,this)
this.selectedSubmissionTypeToolId=w(this.selectedSubmissionTypeToolId,this)
this.isNonPlacementExternalTool=w(this.isNonPlacementExternalTool,this)
this.isGenericExternalTool=w(this.isGenericExternalTool,this)
this.defaultToolSelected=w(this.defaultToolSelected,this)
this.isQuickCreateDefaultTool=w(this.isQuickCreateDefaultTool,this)
this.defaultToOnPaper=w(this.defaultToOnPaper,this)
this.defaultToOnline=w(this.defaultToOnline,this)
this.defaultToNone=w(this.defaultToNone,this)
this.isDefaultTool=w(this.isDefaultTool,this)
this.shouldShowDefaultTool=w(this.shouldShowDefaultTool,this)
this.isNewAssignment=w(this.isNewAssignment,this)
this.submissionTypes=w(this.submissionTypes,this)
this.courseID=w(this.courseID,this)
this.omitFromFinalGrade=w(this.omitFromFinalGrade,this)
this.gradingType=w(this.gradingType,this)
this.inClosedGradingPeriod=w(this.inClosedGradingPeriod,this)
this.frozenAttributes=w(this.frozenAttributes,this)
this.frozen=w(this.frozen,this)
this.freezeOnCopy=w(this.freezeOnCopy,this)
this.canMove=w(this.canMove,this)
this.canDelete=w(this.canDelete,this)
this.canFreeze=w(this.canFreeze,this)
this.assignmentGroupId=w(this.assignmentGroupId,this)
this.secureParams=w(this.secureParams,this)
this.pointsPossible=w(this.pointsPossible,this)
this.name=w(this.name,this)
this.description=w(this.description,this)
this.importantDates=w(this.importantDates,this)
this.dueDateRequired=w(this.dueDateRequired,this)
this.lockAt=w(this.lockAt,this)
this.unlockAt=w(this.unlockAt,this)
this.dueAt=w(this.dueAt,this)
this.assignmentType=w(this.assignmentType,this)
this.isAssignment=w(this.isAssignment,this)
this.isNotGraded=w(this.isNotGraded,this)
this.defaultToolUrl=w(this.defaultToolUrl,this)
this.defaultToolName=w(this.defaultToolName,this)
this.isNonPlacementExternalTool=w(this.isNonPlacementExternalTool,this)
this.isExternalTool=w(this.isExternalTool,this)
this.isPage=w(this.isPage,this)
this.isDiscussionTopic=w(this.isDiscussionTopic,this)
this.isQuiz=w(this.isQuiz,this)
return i.__super__.constructor.apply(this,arguments)}i.mixin(u["a"])
i.prototype.resourceName="assignments"
t="https://canvas.instructure.com/lti/mastery_connect_assessment"
i.prototype.urlRoot=function(){return this._defaultUrl()}
i.prototype.defaults={publishable:true,hidden:false,unpublishable:true}
i.prototype.initialize=function(){var e,t,i,s
null!=(t=this.get("assignment_overrides"))&&this.set("assignment_overrides",new _["a"](t))
null!=(i=this.get("turnitin_settings"))&&this.set("turnitin_settings",new l["a"](i),{silent:true})
null!=(s=this.get("vericite_settings"))&&this.set("vericite_settings",new c["a"](s),{silent:true})
null!=(e=this.get("all_dates"))&&this.set("all_dates",new h["a"](e))
if(this.postToSISEnabled()&&!this.get("id")&&false!==this.get("post_to_sis"))return this.set("post_to_sis",!!("undefined"!==typeof ENV&&null!==ENV?ENV.POST_TO_SIS_DEFAULT:void 0))}
i.prototype.isQuiz=function(){return this._hasOnlyType("online_quiz")}
i.prototype.isDiscussionTopic=function(){return this._hasOnlyType("discussion_topic")}
i.prototype.isPage=function(){return this._hasOnlyType("wiki_page")}
i.prototype.isExternalTool=function(){return this._hasOnlyType("external_tool")}
i.prototype.isNonPlacementExternalTool=function(){return this.isExternalTool}
i.prototype.defaultToolName=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_NAME&&escape(ENV.DEFAULT_ASSIGNMENT_TOOL_NAME).replace(/%20/g," ")}
i.prototype.defaultToolUrl=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_URL}
i.prototype.isNotGraded=function(){return this._hasOnlyType("not_graded")}
i.prototype.isAssignment=function(){return!r.a.includes(this._submissionTypes(),"online_quiz","discussion_topic","not_graded","external_tool")}
i.prototype.assignmentType=function(e){if(!(arguments.length>0))return this._getAssignmentType()
return"assignment"===e?this.set("submission_types",["none"]):this.set("submission_types",[e])}
i.prototype.dueAt=function(e){if(!(arguments.length>0))return this.get("due_at")
return this.set("due_at",e)}
i.prototype.unlockAt=function(e){if(!(arguments.length>0))return this.get("unlock_at")
return this.set("unlock_at",e)}
i.prototype.lockAt=function(e){if(!(arguments.length>0))return this.get("lock_at")
return this.set("lock_at",e)}
i.prototype.dueDateRequired=function(e){if(!(arguments.length>0))return this.get("dueDateRequired")
return this.set("dueDateRequired",e)}
i.prototype.importantDates=function(e){if(!(arguments.length>0))return this.get("important_dates")
return this.set("important_dates",e)}
i.prototype.description=function(e){if(!(arguments.length>0))return this.get("description")
return this.set("description",e)}
i.prototype.name=function(e){if(!(arguments.length>0))return this.get("name")
return this.set("name",e)}
i.prototype.pointsPossible=function(e){if(!(arguments.length>0))return this.get("points_possible")||0
return y["a"].validate(e)?this.set("points_possible",y["a"].parse(e)):this.set("points_possible",e)}
i.prototype.secureParams=function(){return this.get("secure_params")}
i.prototype.assignmentGroupId=function(e){if(!(arguments.length>0))return this.get("assignment_group_id")
return this.set("assignment_group_id",e)}
i.prototype.canFreeze=function(){return null!=this.get("frozen_attributes")&&!this.frozen()&&!this.isQuizLTIAssignment()}
i.prototype.canDelete=function(){return!this.inClosedGradingPeriod()&&!this.frozen()}
i.prototype.canMove=function(){return!this.inClosedGradingPeriod()&&!r.a.includes(this.frozenAttributes(),"assignment_group_id")}
i.prototype.freezeOnCopy=function(){return this.get("freeze_on_copy")}
i.prototype.frozen=function(){return this.get("frozen")}
i.prototype.frozenAttributes=function(){return this.get("frozen_attributes")||[]}
i.prototype.inClosedGradingPeriod=function(){if(S())return false
return this.get("in_closed_grading_period")}
i.prototype.gradingType=function(e){if(!e)return this.get("grading_type")||"points"
return this.set("grading_type",e)}
i.prototype.omitFromFinalGrade=function(e){if(!(arguments.length>0))return this.get("omit_from_final_grade")
return this.set("omit_from_final_grade",e)}
i.prototype.courseID=function(){return this.get("course_id")}
i.prototype.submissionTypes=function(e){if(!(arguments.length>0))return this._submissionTypes()
return this.set("submission_types",e)}
i.prototype.isNewAssignment=function(){return!this.name()}
i.prototype.shouldShowDefaultTool=function(){if(!this.defaultToolUrl())return false
return this.defaultToolSelected()||this.isQuickCreateDefaultTool()||this.isNewAssignment()}
i.prototype.isDefaultTool=function(){return"external_tool"===this.submissionType()&&this.shouldShowDefaultTool()}
i.prototype.defaultToNone=function(){return"none"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.defaultToOnline=function(){return"online"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.defaultToOnPaper=function(){return"on_paper"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.isQuickCreateDefaultTool=function(){return this.submissionTypes().includes("default_external_tool")}
i.prototype.defaultToolSelected=function(){return T(this.defaultToolUrl(),this.externalToolUrl())}
i.prototype.isGenericExternalTool=function(){return"external_tool"===this.submissionType()&&!this.isDefaultTool()&&!this.selectedSubmissionTypeToolId()}
i.prototype.isNonPlacementExternalTool=function(){return"external_tool"===this.submissionType()&&!this.selectedSubmissionTypeToolId()}
i.prototype.selectedSubmissionTypeToolId=function(){var e,t
if("external_tool"!==this.submissionType())return
t=null!=(e=this.get("external_tool_tag_attributes"))?e.content_id:void 0
if(t&&r.a.find(this.submissionTypeSelectionTools(),(function(e){return t===e.id})))return t}
i.prototype.submissionType=function(){var e
e=this._submissionTypes()
return r.a.includes(e,"none")||0===e.length?"none":r.a.includes(e,"on_paper")?"on_paper":r.a.includes(e,"external_tool")||r.a.includes(e,"default_external_tool")?"external_tool":"online"}
i.prototype.expectsSubmission=function(){var e
e=this._submissionTypes()
return e.length>0&&!r.a.includes(e,"")&&!r.a.includes(e,"none")&&!r.a.includes(e,"not_graded")&&!r.a.includes(e,"on_paper")&&!r.a.includes(e,"external_tool")}
i.prototype.allowedToSubmit=function(){var e
e=this._submissionTypes()
return this.expectsSubmission()&&!this.get("locked_for_user")&&!r.a.includes(e,"online_quiz")&&!r.a.includes(e,"attendance")}
i.prototype.hasSubmittedSubmissions=function(){return this.get("has_submitted_submissions")}
i.prototype.withoutGradedSubmission=function(){var e
e=this.get("submission")
return null==e||e.withoutGradedSubmission()}
i.prototype.acceptsOnlineUpload=function(){return!!r.a.includes(this._submissionTypes(),"online_upload")}
i.prototype.acceptsAnnotatedDocument=function(){return!!r.a.includes(this._submissionTypes(),"student_annotation")}
i.prototype.acceptsOnlineURL=function(){return!!r.a.includes(this._submissionTypes(),"online_url")}
i.prototype.acceptsMediaRecording=function(){return!!r.a.includes(this._submissionTypes(),"media_recording")}
i.prototype.acceptsOnlineTextEntries=function(){return!!r.a.includes(this._submissionTypes(),"online_text_entry")}
i.prototype.isOnlineSubmission=function(){return r.a.some(this._submissionTypes(),(function(e){return"online"===e||"online_text_entry"===e||"media_recording"===e||"online_url"===e||"online_upload"===e||"student_annotation"===e}))}
i.prototype.postToSIS=function(e){if(!(arguments.length>0))return this.get("post_to_sis")
return this.set("post_to_sis",e)}
i.prototype.moderatedGrading=function(e){if(!(arguments.length>0))return this.get("moderated_grading")||false
return this.set("moderated_grading",e)}
i.prototype.anonymousInstructorAnnotations=function(e){if(!(arguments.length>0))return this.get("anonymous_instructor_annotations")
return this.set("anonymous_instructor_annotations",e)}
i.prototype.anonymousGrading=function(e){if(!(arguments.length>0))return this.get("anonymous_grading")
return this.set("anonymous_grading",e)}
i.prototype.gradersAnonymousToGraders=function(e){if(!(arguments.length>0))return this.get("graders_anonymous_to_graders")
return this.set("graders_anonymous_to_graders",e)}
i.prototype.graderCommentsVisibleToGraders=function(e){if(!(arguments.length>0))return!!this.get("grader_comments_visible_to_graders")
return this.set("grader_comments_visible_to_graders",e)}
i.prototype.peerReviews=function(e){if(!(arguments.length>0))return this.get("peer_reviews")
return this.set("peer_reviews",e)}
i.prototype.anonymousPeerReviews=function(e){if(!(arguments.length>0))return this.get("anonymous_peer_reviews")
return this.set("anonymous_peer_reviews",e)}
i.prototype.automaticPeerReviews=function(e){if(!(arguments.length>0))return this.get("automatic_peer_reviews")
return this.set("automatic_peer_reviews",e)}
i.prototype.peerReviewCount=function(e){if(!(arguments.length>0))return this.get("peer_review_count")||0
return this.set("peer_review_count",e)}
i.prototype.peerReviewsAssignAt=function(e){if(!(arguments.length>0))return this.get("peer_reviews_assign_at")||null
return this.set("peer_reviews_assign_at",e)}
i.prototype.intraGroupPeerReviews=function(){return this.get("intra_group_peer_reviews")}
i.prototype.notifyOfUpdate=function(e){if(!(arguments.length>0))return this.get("notify_of_update")
return this.set("notify_of_update",e)}
i.prototype.restrictFileExtensions=function(){return!!this.allowedExtensions()}
i.prototype.allowedExtensions=function(e){if(!(arguments.length>0))return this.get("allowed_extensions")
return this.set("allowed_extensions",e)}
i.prototype.turnitinAvailable=function(){return"undefined"!==typeof this.get("turnitin_enabled")}
i.prototype.vericiteAvailable=function(){return"undefined"!==typeof this.get("vericite_enabled")}
i.prototype.gradeGroupStudentsIndividually=function(e){if(!(arguments.length>0))return this.get("grade_group_students_individually")
return this.set("grade_group_students_individually",e)}
i.prototype.turnitinEnabled=function(e){return 0===arguments.length?void 0!==this.get("turnitin_enabled")&&!!this.get("turnitin_enabled"):this.set("turnitin_enabled",e)}
i.prototype.vericiteEnabled=function(e){return 0===arguments.length?void 0!==this.get("vericite_enabled")&&!!this.get("vericite_enabled"):this.set("vericite_enabled",e)}
i.prototype.groupCategoryId=function(e){if(!(arguments.length>0))return this.get("group_category_id")
return this.set("group_category_id",e)}
i.prototype.canGroup=function(){return!this.get("has_submitted_submissions")}
i.prototype.gradingStandardId=function(e){if(!(arguments.length>0))return this.get("grading_standard_id")
return this.set("grading_standard_id",e)}
i.prototype.externalToolUrl=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.url
t.url=e
return this.set("external_tool_tag_attributes",t)}
i.prototype.externalToolData=function(){var e
e=this.get("external_tool_tag_attributes")||{}
return e.external_data}
i.prototype.externalToolDataStringified=function(){var e
e=this.externalToolData()
if(e)return JSON.stringify(e)
return""}
i.prototype.externalToolCustomParams=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.custom
t.custom=e
return this.set("external_tool_tag_attributes",t)}
i.prototype.externalToolCustomParamsStringified=function(){var e
e=this.externalToolCustomParams()
if(e)return JSON.stringify(e)
return""}
i.prototype.isMasteryConnectTool=function(){var e,i
i=this.get("external_tool_tag_attributes")||{}
return(null!=i&&null!=(e=i.external_data)?e.key:void 0)===t}
i.prototype.externalToolDataStudentLabelText=function(){var e
e=this.externalToolData()
if(!e)return""
if(1===e.studentCount)return f.t("Student")
return f.t("Students")}
i.prototype.externalToolNewTab=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.new_tab
t.new_tab=e
return this.set("external_tool_tag_attributes",t)}
i.prototype.isSimple=function(){var e
e=this.get("assignment_overrides")
return"points"===this.gradingType()&&"none"===this.submissionType()&&!this.groupCategoryId()&&!this.peerReviews()&&!this.frozen()&&(!e||e.isSimple())}
i.prototype.isLetterGraded=function(){return"letter_grade"===this.gradingType()}
i.prototype.isGpaScaled=function(){return"gpa_scale"===this.gradingType()}
i.prototype.published=function(e){if(!(arguments.length>0))return this.get("published")
return this.set("published",e)}
i.prototype.useNewQuizIcon=function(){return ENV.FLAGS&&ENV.FLAGS.newquizzes_on_quiz_page&&(this.isQuiz()&&z()||this.isQuizLTIAssignment())}
i.prototype.position=function(e){if(!(arguments.length>0))return this.get("position")||0
return this.set("position",e)}
i.prototype.iconType=function(){if(this.useNewQuizIcon())return"quiz icon-Solid"
if(this.isQuiz())return"quiz"
if(this.isDiscussionTopic())return"discussion"
if(this.isPage())return"document"
return"assignment"}
i.prototype.objectType=function(){if(this.isQuiz())return"Quiz"
if(this.isDiscussionTopic())return"Discussion"
if(this.isPage())return"WikiPage"
return"Assignment"}
i.prototype.objectTypeDisplayName=function(){if(this.isQuiz()||this.isQuizLTIAssignment()&&z())return f.t("Quiz")
if(this.isQuizLTIAssignment())return f.t("New Quiz")
if(this.isDiscussionTopic())return f.t("Discussion Topic")
if(this.isPage())return f.t("Page")
return f.t("Assignment")}
i.prototype.htmlUrl=function(){return this.isQuizLTIAssignment()&&D()&&ENV.FLAGS&&ENV.FLAGS.new_quizzes_modules_support?this.htmlEditUrl():this.get("html_url")}
i.prototype.htmlEditUrl=function(){return this.get("html_url")+"/edit"}
i.prototype.labelId=function(){return this.id}
i.prototype.postToSISEnabled=function(){return ENV.POST_TO_SIS}
i.prototype.postToSISName=function(){return ENV.SIS_NAME}
i.prototype.sisIntegrationSettingsEnabled=function(){return ENV.SIS_INTEGRATION_SETTINGS_ENABLED}
i.prototype.maxNameLength=function(){return ENV.MAX_NAME_LENGTH}
i.prototype.maxNameLengthRequiredForAccount=function(){return ENV.MAX_NAME_LENGTH_REQUIRED_FOR_ACCOUNT}
i.prototype.dueDateRequiredForAccount=function(){return ENV.DUE_DATE_REQUIRED_FOR_ACCOUNT}
i.prototype.submissionTypeSelectionTools=function(){return ENV.SUBMISSION_TYPE_SELECTION_TOOLS||[]}
i.prototype.newQuizzesAssignmentBuildButtonEnabled=function(){return ENV.NEW_QUIZZES_ASSIGNMENT_BUILD_BUTTON_ENABLED}
i.prototype.showBuildButton=function(){return this.isQuizLTIAssignment()&&this.newQuizzesAssignmentBuildButtonEnabled()}
i.prototype.defaultDates=function(){return new d["a"]({due_at:this.get("due_at"),unlock_at:this.get("unlock_at"),lock_at:this.get("lock_at")})}
i.prototype.multipleDueDates=function(){var e,t
e=this.get("all_dates_count")
if(e&&e>1)return true
t=this.get("all_dates")
return t&&t.length>1}
i.prototype.hasDueDate=function(){return!this.isPage()}
i.prototype.hasPointsPossible=function(){return!this.isQuiz()&&!this.isPage()}
i.prototype.nonBaseDates=function(){var e,t
e=this.get("all_dates")
if(!e)return false
t=r.a.filter(e.models,(function(e){return e&&!e.get("base")}))
return t.length>0}
i.prototype.allDates=function(){var e,t
e=this.get("all_dates")
t=e&&e.models||[]
return r.a.map(t,(function(e){return e.toJSON()}))}
i.prototype.singleSectionDueDate=function(){var e,t,i,s
if(this.multipleDueDates()||this.dueAt())return this.dueAt()
e=this.allDates()
for(t=0,i=e.length;t<i;t++){s=e[t]
if(s.dueAt)return s.dueAt.toISOString()}}
i.prototype.canDuplicate=function(){return this.get("can_duplicate")}
i.prototype.isDuplicating=function(){return"duplicating"===this.get("workflow_state")}
i.prototype.isMigrating=function(){return"migrating"===this.get("workflow_state")}
i.prototype.failedToDuplicate=function(){return"failed_to_duplicate"===this.get("workflow_state")}
i.prototype.failedToMigrate=function(){return"failed_to_migrate"===this.get("workflow_state")}
i.prototype.originalCourseID=function(){return this.get("original_course_id")}
i.prototype.originalQuizID=function(){return this.get("original_quiz_id")}
i.prototype.originalAssignmentID=function(){return this.get("original_assignment_id")}
i.prototype.originalAssignmentName=function(){return this.get("original_assignment_name")}
i.prototype.is_quiz_assignment=function(){return this.get("is_quiz_assignment")}
i.prototype.isQuizLTIAssignment=function(){return this.get("is_quiz_lti_assignment")}
i.prototype.isImporting=function(){return"importing"===this.get("workflow_state")}
i.prototype.failedToImport=function(){return"failed_to_import"===this.get("workflow_state")}
i.prototype.submissionTypesFrozen=function(){return r.a.includes(this.frozenAttributes(),"submission_types")}
i.prototype.toView=function(){var e,t,i,s,n
t=["acceptsAnnotatedDocument","acceptsMediaRecording","acceptsOnlineTextEntries","acceptsOnlineURL","acceptsOnlineUpload","allDates","allowedExtensions","anonymousGrading","anonymousInstructorAnnotations","anonymousPeerReviews","assignmentGroupId","automaticPeerReviews","canFreeze","defaultToNone","defaultToOnPaper","defaultToOnline","defaultToolName","description","dueAt","dueDateRequired","externalToolCustomParams","externalToolCustomParamsStringified","externalToolData","externalToolDataStringified","externalToolDataStudentLabelText","externalToolNewTab","externalToolUrl","failedToDuplicate","failedToImport","failedToMigrate","freezeOnCopy","frozen","frozenAttributes","gradeGroupStudentsIndividually","gradersAnonymousToGraders","gradingStandardId","gradingType","groupCategoryId","hasDueDate","hasPointsPossible","htmlEditUrl","htmlUrl","iconType","inClosedGradingPeriod","isDefaultTool","isDuplicating","isExternalTool","isGenericExternalTool","isGpaScaled","isImporting","isLetterGraded","isMasteryConnectTool","isMigrating","isNonPlacementExternalTool","isNotGraded","isOnlineSubmission","isOnlyVisibleToOverrides","isQuizLTIAssignment","isSimple","is_quiz_assignment","labelId","lockAt","moderatedGrading","multipleDueDates","name","newQuizzesAssignmentBuildButtonEnabled","nonBaseDates","notifyOfUpdate","objectTypeDisplayName","omitFromFinalGrade","originalAssignmentName","peerReviewCount","peerReviews","peerReviewsAssignAt","pointsPossible","position","postToSIS","postToSISEnabled","published","restrictFileExtensions","secureParams","selectedSubmissionTypeToolId","showBuildButton","showGradersAnonymousToGradersCheckbox","singleSectionDueDate","submissionType","submissionTypeSelectionTools","submissionTypesFrozen","turnitinAvailable","turnitinEnabled","unlockAt","vericiteAvailable","vericiteEnabled","importantDates"]
i={id:this.get("id"),is_master_course_child_content:this.get("is_master_course_child_content"),restricted_by_master_course:this.get("restricted_by_master_course"),master_course_restrictions:this.get("master_course_restrictions")}
for(s=0,n=t.length;s<n;s++){e=t[s]
i[e]=this[e]()}return i}
i.prototype.toJSON=function(){var e,t,s,n
e=i.__super__.toJSON.apply(this,arguments)
e=this._filterFrozenAttributes(e);(null!=(t=ENV.MASTER_COURSE_DATA)?t.is_master_course_child_content:void 0)&&(null!=(s=ENV.MASTER_COURSE_DATA)&&null!=(n=s.master_course_restrictions)?n.content:void 0)&&delete e.description
return this.alreadyScoped?e:{assignment:e}}
i.prototype.inGradingPeriod=function(e){var t,i
t=this.get("all_dates")
i=new g["a"](e)
return t?r.a.some(t.models,(function(t){return i.isDateInGradingPeriod(t.dueAt(),e.id)})):i.isDateInGradingPeriod(b["b"].parse(this.dueAt()),e.id)}
i.prototype.search=function(e,t){var i
i=""===e||this.get("name").match(e)
i&&t&&(i=this.inGradingPeriod(t))
if(i){this.set("hidden",false)
return true}this.set("hidden",true)
return false}
i.prototype.endSearch=function(){return this.set("hidden",false)}
i.prototype.parse=function(e){var t,s,n
e=i.__super__.parse.call(this,e)
null!=(t=e.assignment_overrides)&&(e.assignment_overrides=new _["a"](t))
null!=(s=e.turnitin_settings)&&(e.turnitin_settings=new l["a"](s))
null!=(n=e.vericite_settings)&&(e.vericite_settings=new c["a"](n))
return e}
i.prototype.doNotParse=function(){return this.parse=function(){return{}}}
i.prototype._submissionTypes=function(){return this.get("submission_types")||[]}
i.prototype._hasOnlyType=function(e){var t
t=this._submissionTypes()
return 1===t.length&&t[0]===e}
i.prototype._getAssignmentType=function(){return this.isDiscussionTopic()?"discussion_topic":this.isPage()?"wiki_page":this.isQuiz()?"online_quiz":this.isExternalTool()?"external_tool":this.isNotGraded()?"not_graded":"assignment"}
i.prototype._filterFrozenAttributes=function(e){var t,i
i=this.attributes
for(t in i){if(!x.call(i,t))continue
i[t]
r.a.includes(this.frozenAttributes(),t)&&delete e[t]}r.a.includes(this.frozenAttributes(),"title")&&delete e.name
r.a.includes(this.frozenAttributes(),"group_category_id")&&delete e.grade_group_students_individually
if(r.a.includes(this.frozenAttributes(),"peer_reviews")){delete e.automatic_peer_reviews
delete e.peer_review_count
delete e.peer_reviews_assign_at}delete e.frozen
delete e.frozen_attributes
return e}
i.prototype.setNullDates=function(){this.dueAt(null)
this.lockAt(null)
this.unlockAt(null)
return this}
i.prototype.publish=function(){return this.save("published",true)}
i.prototype.unpublish=function(){return this.save("published",false)}
i.prototype.disabledMessage=function(){return f.t("Can't unpublish %{name} if there are student submissions",{name:this.get("name")})}
i.prototype.duplicate=function(e){var t,i
i=this.courseID()
t=this.id
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+t+"/duplicate","POST",{},e)}
i.prototype.duplicate_failed=function(e){var t,i,s,o,r
r=this.courseID()
o=this.id
i=this.originalCourseID()
t=this.originalAssignmentID()
s="?target_assignment_id="+o
i!==r&&(s+="&target_course_id="+r)
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+t+"/duplicate"+s,"POST",{},e)}
i.prototype.retry_migration=function(e){var t,i,s
t=this.courseID()
s=this.originalQuizID()
i=this.get("id")
return n.a.ajaxJSON("/api/v1/courses/"+t+"/content_exports?export_type=quizzes2&quiz_id="+s+"&failed_assignment_id="+i+"&include[]=migrated_assignment","POST",{},e)}
i.prototype.pollUntilFinishedDuplicating=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isDuplicating)}
i.prototype.pollUntilFinishedImporting=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isImporting)}
i.prototype.pollUntilFinishedMigrating=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isMigrating)}
i.prototype.pollUntilFinishedLoading=function(e){null==e&&(e=3e3)
if(this.isDuplicating())return this.pollUntilFinishedDuplicating(e)
if(this.isImporting())return this.pollUntilFinishedImporting(e)
if(this.isMigrating())return this.pollUntilFinishedMigrating(e)}
i.prototype.pollUntilFinished=function(e,t){var i
i=new v["a"](e,5*e,(s=this,function(e){return s.fetch().always((function(){e()
if(!t())return i.stop()}))}))
var s
return i.start()}
i.prototype.isOnlyVisibleToOverrides=function(e){if(!(arguments.length>0))return this.get("only_visible_to_overrides")||false
return this.set("only_visible_to_overrides",e)}
i.prototype.isRestrictedByMasterCourse=function(){return this.get("is_master_course_child_content")&&this.get("restricted_by_master_course")}
i.prototype.showGradersAnonymousToGradersCheckbox=function(){return this.moderatedGrading()&&this.get("grader_comments_visible_to_graders")}
i.prototype.quizzesRespondusEnabled=function(){return this.get("require_lockdown_browser")&&this.isQuizLTIAssignment()&&z()}
return i}(a["Model"])}}])

//# sourceMappingURL=33-c-642c492511.js.map