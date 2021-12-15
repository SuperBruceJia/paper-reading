(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[45,4045,4122],{"897F":function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var i=a("Y/W1")
var s=a.n(i)
var o=a("qqwe")
a("ESjL")
r.a.fn.fixDialogButtons=function(){return this.each((function(){const e=r()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let a=r.a.map(t.toArray(),t=>{const a=r()(t)
let n=a.attr("class")||""
const i=a.attr("id")
if(a.is(".dialog_closer")){a.off(".fixdialogbuttons")
a.on("click.fixdialogbuttons",Object(o["a"])(()=>e.dialog("close")))}"submit"===a.prop("type")&&a[0].form&&(n+=" button_type_submit")
return{text:a.text(),"data-text-while-loading":a.data("textWhileLoading"),click:()=>a.click(),class:n,id:i}})
a=s.a.sortBy(a,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",a)}}))}},RoCN:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var i=a("Y/W1")
var s=a.n(i)
var o=a("gI0r")
a("tHpF")
a("sXof")
a("Dhso")
a("8JEM")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".mce-tinymce").find(".mce-edit-area")},findField:function(e,t){var a,n,i
null==t&&(t=false)
i=(null!=(n=this.fieldSelectors)?n[e]:void 0)||"[name='"+e+"']"
a=t?r()(i):this.$(i)
a.data("rich_text")&&(a=this.findSiblingTinymce(a))
return a},showErrors:function(e,t){var a,n,i,s,l,u,c,d
null==t&&(t=false)
d=[]
for(i in e){n=e[i]
a=n.element||this.findField(i,t)
s=n.message||function(){var e,t,a,r
r=[]
for(e=0,t=n.length;e<t;e++){l=n[e].message
r.push(Object(o["a"])((null!=(a=this.translations)?a[l]:void 0)||l))}return r}.call(this).join("</p><p>")
null!=(u=a.errorBox(r.a.raw(""+s)))&&null!=(c=u.css("z-index","1100"))&&c.attr("role","alert")
this.attachErrorDescription(a,s)
n.$input=a
d.push(n.$errorBox=a.data("associated_error_box"))}return d},attachErrorDescription:function(e,t){var a
a=this.findOrCreateDescriptionField(e)
a["description"].text(r.a.raw(""+t))
return e.attr("aria-describedby",a["description"].attr("id")+" "+a["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,a,n
a=e.attr("id")
r()("#"+a+"_sr_description").length>0||r()("<div>").attr({id:a+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=r()("#"+a+"_sr_description")
n=this.getExistingDescriptionIds(e,a)
return{description:t,originalDescriptionIds:n}},getExistingDescriptionIds:function(e,t){var a,n
a=e.attr("aria-describedby")
n=a?a.split(" "):[]
return s.a.without(n,t+"_sr_description")}}},VrN0:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var i=a("eodz")
const s=/^(?:select|textarea)/i
const o=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function u(){if(this.elements)return r.a.makeArray(this.elements)
{const e=r()(this).find(":input")
return e.length?e:this}}function c(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||l.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(o,"\r\n"))
return{name:e,value:t}}function h(){const e=r()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(i["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return r.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}r.a.fn.serializeForm=function(){return this.map(u).filter(c).map(h).get()}},br6r:function(e,t,a){"use strict"
var n=a("mX+G")
var r=a.n(n)
var i=a("RoCN")
var s=a("ouhR")
var o=a.n(s)
var l=a("Y/W1")
var u=a.n(l)
var c=a("HGxv")
var d=a("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"errors":{"blank":"مطلوب","required":"مطلوب","unsaved_changes":"توجد تغييرات لم يتم حفظها."}},"ca":{"errors":{"blank":"Obligatori","required":"Obligatori","unsaved_changes":"Teniu missatges sense guardar."}},"cy":{"errors":{"blank":"Gofynnol","required":"Gofynnol","unsaved_changes":"Mae gennych chi newidiadau heb eu cadw."}},"da":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"da-x-k12":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"de":{"errors":{"blank":"Erforderlich","required":"Erforderlich","unsaved_changes":"Sie haben nicht gespeicherte Änderungen."}},"el":{"errors":{"blank":"Απαιτούμενο","required":"Απαιτούμενο","unsaved_changes":"Έχετε αλλαγές που δεν έχουν αποθηκευτεί"}},"en-AU":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-AU-x-unimelb":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-CA":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB-x-lbs":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB-x-ukhe":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"es":{"errors":{"blank":"Obligatorio","required":"Obligatorio","unsaved_changes":"Tiene cambios sin guardar."}},"fa":{"errors":{"blank":"لازم","required":"لازم","unsaved_changes":"ذخیره سازی تغییرات را لغو کرده اید."}},"fi":{"errors":{"blank":"Pakollinen","required":"Pakollinen","unsaved_changes":"Sinulla on tallentamattomia muutoksia."}},"fr":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"fr-CA":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"he":{"errors":{"blank":"נדרש","required":"נדרש","unsaved_changes":"יש עדיין שינויים שטרם נשמרו"}},"ht":{"errors":{"blank":"Obligatwa","required":"Obligatwa","unsaved_changes":"Ou gen chanjman ki pa anrejistre."}},"hu":{"errors":{"blank":"Kötelező","required":"Kötelező","unsaved_changes":"Még el nem mentett módosításai vannak."}},"hy":{"errors":{"blank":"Պահանջվում է","required":"Պահանջվում է","unsaved_changes":"Դուք չպահպանված փոփոխություններ եք արել:"}},"is":{"errors":{"blank":"Krafist","required":"Krafist","unsaved_changes":"Þú átt óvistaðar breytingar."}},"it":{"errors":{"blank":"Obbligatorio","required":"Obbligatorio","unsaved_changes":"Hai delle modifiche non salvate."}},"ja":{"errors":{"blank":"必須","required":"必須","unsaved_changes":"未保存の変更内容があります。"}},"ko":{"errors":{"blank":"필수 사항","required":"필수 사항","unsaved_changes":"저장하지 않은 변경 사항이 있습니다."}},"mi":{"errors":{"blank":"e hiahiatia ana","required":"e hiahiatia ana","unsaved_changes":"Whai huringa tiakina koe."}},"nb":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nb-x-k12":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nl":{"errors":{"blank":"Vereist","required":"Vereist","unsaved_changes":"Je hebt veranderingen die nog niet zijn opgeslagen."}},"nn":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringar som ikkje er lagra."}},"pl":{"errors":{"blank":"Wymagany","required":"Wymagany","unsaved_changes":"Nie zapisano wszystkich zmian."}},"pt":{"errors":{"blank":"Necessário","required":"Necessário","unsaved_changes":"Tem alterações não guardadas."}},"pt-BR":{"errors":{"blank":"Obrigatório","required":"Obrigatório","unsaved_changes":"Você tem alterações não salvas"}},"ru":{"errors":{"blank":"Требуется","required":"Требуется","unsaved_changes":"Вы сохранили не все изменения."}},"sl":{"errors":{"blank":"Zahtevano","required":"Zahtevano","unsaved_changes":"Obstajajo spremembe, ki jih niste shranili."}},"sv":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har osparade ändringar."}},"sv-x-k12":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har osparade ändringar."}},"tr":{"errors":{"blank":"Zorunlu","required":"Zorunlu","unsaved_changes":"Kaydedilmemiş değişiklikler var."}},"uk":{"errors":{"blank":"Обов\'язковий","required":"Обов\'язковий","unsaved_changes":"Ви маєте незбережені зміни."}},"zh-Hans":{"errors":{"blank":"必需","required":"必需","unsaved_changes":"您有未保存的更改。"}},"zh-Hant":{"errors":{"blank":"必填","required":"必填","unsaved_changes":"您有未保存的更改。"}}}'))
a("jQeR")
a("0sPK")
var h=c["default"].scoped("errors")
a("tHpF")
a("sXof")
a("Dhso")
var g=a("eodz")
var p=a("4M30")
var f=function(e,t){return function(){return e.apply(t,arguments)}},_=function(e,t){for(var a in t)v.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},v={}.hasOwnProperty,m=[].slice
t["a"]=function(e){_(t,e)
function t(){this.checkUnload=f(this.checkUnload,this)
this.watchUnload=f(this.watchUnload,this)
this.onSaveFail=f(this.onSaveFail,this)
this.onSaveSuccess=f(this.onSaveSuccess,this)
return t.__super__.constructor.apply(this,arguments)}t.mixin(i["a"])
t.prototype.tagName="form"
t.prototype.className="validated-form-view"
t.prototype.events={submit:"submit"}
t.prototype.saveOpts={wait:true}
t.prototype.disableWhileLoadingOpts={}
t.prototype.submit=function(e,t){var a,n,r,i,s,l,c,d,h
null==t&&(t=g["d"])
null!=e&&e.preventDefault()
this.hideErrors()
d=this.$el.find("textarea[data-rich_text]").toArray()
c=true
d.length>0&&window.ENV.use_rce_enhancements&&(c=d.map((function(e){return t(o()(e),"checkReadyToGetCode",window.confirm)})).every((function(e){return e})))
if(!c)return
n=this.getFormData()
s=this.validateBeforeSave(n,{})
if(0===u.a.keys(s).length){i=new o.a.Deferred
h=this.saveFormData(n)
h.then(this.onSaveSuccess.bind(this),this.onSaveFail.bind(this))
h.fail((p=this,function(){i.reject()
if(p.setFocusAfterError)return p.setFocusAfterError()}))
this.dontRenableAfterSaveSuccess||h.done((function(){return i.resolve()}))
this.$el.disableWhileLoading(i,this.disableWhileLoadingOpts)
d.length>0&&d.forEach((function(e){return t(o()(e),"RCEClosed")}))
this.trigger("submit")
return h}r=u.a.map(o()("[data-error-type]"),(function(e){return o()(e).attr("data-error-type")}))
a=u.a.chain(u.a.keys(s)).reject((function(e){return u.a.includes(r,e)})).value()
l=a[0]||r[0]
this.findField(l).focus()
return window.setTimeout(function(e){return function(){e.showErrors(s)
return null}}(this),50)
var p}
t.prototype.cancel=function(){var e
e=this.$el.find("textarea[data-rich_text]").toArray()
return e.forEach((function(e){return Object(g["d"])(o()(e),"RCEClosed")}))}
t.prototype.getFormData=function(){return this.$el.toJSON()}
t.prototype.saveFormData=function(e){var t,a
null==e&&(e=null)
t=this.model
e||(e=this.getFormData())
a=this.saveOpts
return t.save(e,a)}
t.prototype.validate=function(e){var t,a
null==e&&(e={})
e||(e={})
t=e["data"]||this.getFormData()
a=this.validateFormData(t,{})
this.hideErrors()
this.showErrors(a)
return 0===a.length}
t.prototype.validateFormData=function(e){return{}}
t.prototype.validateBeforeSave=function(e){return this.validateFormData(e)}
t.prototype.hideErrors=function(){return this.$el.hideErrors()}
t.prototype.onSaveSuccess=function(e){return this.trigger.apply(this,["success",e].concat(m.call(arguments)))}
t.prototype.onSaveFail=function(e){var t
t=this.parseErrorResponse(e)
t||(t={})
this.showErrors(t)
return this.trigger.apply(this,["fail",t].concat(m.call(arguments)))}
t.prototype.parseErrorResponse=function(e){if(422===e.status)return{authenticity_token:"invalid"}
try{return o.a.parseJSON(e.responseText).errors}catch(e){e
return{}}}
t.prototype.translations=Object(p["b"])({},{required:function(){return h.t("required","Required")},blank:function(){return h.t("blank","Required")},unsaved:function(){return h.t("unsaved_changes","You have unsaved changes.")}})
t.prototype.fieldSelectors=null
t.prototype.findField=function(e){var t,a,n
n=(null!=(a=this.fieldSelectors)?a[e]:void 0)||"[name='"+e+"']"
t=this.$(n)
0===t.length&&(t=this.$("[data-error-type='"+e+"']"))
t.data("rich_text")&&(t=this.findSiblingTinymce(t))
t.length>1&&(t=t.not("[type=hidden]"))
return t}
t.prototype.castJSON=function(e){var t
if(!u.a.isObject(e))return e
if(null!=e.toJSON)return e.toJSON()
t=u.a.clone(e)
u.a.each(t,(a=this,function(e,n){return t[n]=a.castJSON(e)}))
var a
return t}
t.prototype.original=null
t.prototype.watchUnload=function(){this.original=this.castJSON(this.getFormData())
this.unwatchUnload()
return o()(window).on("beforeunload",this.checkUnload)}
t.prototype.unwatchUnload=function(){return o()(window).off("beforeunload",this.checkUnload)}
t.prototype.checkUnload=function(){var e
e=this.castJSON(this.getFormData())
if(!u.a.isEqual(this.original,e))return this.translations.unsaved}
return t}(r.a.View)},"mT8+":function(e,t,a){"use strict"
a.d(t,"c",(function(){return w}))
a.d(t,"b",(function(){return S}))
var n=a("ouhR")
var r=a.n(n)
var i=a("br6r")
var s=a("qqwe")
var o=a("3O+N")
var l=a.n(o)
var u=a("HGxv")
var c=a("8WeW")
Object(c["a"])(JSON.parse('{"ar":{"dialog_form_wrapper":{"cancel":"إلغاء","save_settings":"حفظ الإعدادات","saving":"جارٍ الحفظ..."}},"ca":{"dialog_form_wrapper":{"cancel":"Cancel·la","save_settings":"Desa la configuració","saving":"S\'està desant..."}},"cy":{"dialog_form_wrapper":{"cancel":"Canslo","save_settings":"Cadw Gosodiadau","saving":"Wrthi’n cadw..."}},"da":{"dialog_form_wrapper":{"cancel":"Annuller","save_settings":"Gem indstillinger","saving":"Gemmer ..."}},"da-x-k12":{"dialog_form_wrapper":{"cancel":"Annuller","save_settings":"Gem indstillinger","saving":"Gemmer ..."}},"de":{"dialog_form_wrapper":{"cancel":"Abbrechen","save_settings":"Einstellungen speichern","saving":"Speichervorgang läuft ..."}},"el":{"dialog_form_wrapper":{"cancel":"Ακύρωση","save_settings":"Αποθήκευση Ρυθμίσεων","saving":"Αποθήκευση..."}},"en-AU":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-AU-x-unimelb":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-CA":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-GB":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"en-GB-x-lbs":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"en-GB-x-ukhe":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"es":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Guardar las configuraciones","saving":"Guardando..."}},"fa":{"dialog_form_wrapper":{"cancel":"لغو","save_settings":"ذخیره سازی تنظیمات","saving":"در حال ذخیره سازی..."}},"fi":{"dialog_form_wrapper":{"cancel":"Peruuta","save_settings":"Tallenna asetukset","saving":"Tallennetaan..."}},"fr":{"dialog_form_wrapper":{"cancel":"Annuler","save_settings":"Enregistrer les paramètres","saving":"Enregistrement..."}},"fr-CA":{"dialog_form_wrapper":{"cancel":"Annuler","save_settings":"Enregistrer les paramètres","saving":"Enregistrement..."}},"he":{"dialog_form_wrapper":{"cancel":"ביטול","save_settings":"שמירת הגדרות","saving":"שומר..."}},"ht":{"dialog_form_wrapper":{"cancel":"Anile","save_settings":"Anrejistre Paramèt","saving":"Anrejistreman..."}},"hu":{"dialog_form_wrapper":{"cancel":"Mégse","save_settings":"Beállítások mentése","saving":"Mentés..."}},"hy":{"dialog_form_wrapper":{"cancel":"Չեղյալ համարել","save_settings":"Պահպանել կարգաբերումները","saving":"Պահպանվում է..."}},"is":{"dialog_form_wrapper":{"cancel":"Hætta við","save_settings":"Vista stillingar","saving":"Vista..."}},"it":{"dialog_form_wrapper":{"cancel":"Annulla","save_settings":"Salva impostazioni","saving":"Salvataggio in corso..."}},"ja":{"dialog_form_wrapper":{"cancel":"キャンセル","save_settings":"設定の保存","saving":"保存しています..."}},"ko":{"dialog_form_wrapper":{"cancel":"취소","save_settings":"설정 저장","saving":"저장 중..."}},"mi":{"dialog_form_wrapper":{"cancel":"Whakakore","save_settings":"Ngā Tautuhinga Tiaki","saving":"Kei te tiakina"}},"nb":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillinger","saving":"Lagrer…"}},"nb-x-k12":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillinger","saving":"Lagrer…"}},"nl":{"dialog_form_wrapper":{"cancel":"Annuleren","save_settings":"Instellingen opslaan","saving":"Bezig met opslaan..."}},"nn":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillingar","saving":"Lagrar..."}},"pl":{"dialog_form_wrapper":{"cancel":"Anuluj","save_settings":"Zapisz ustawienia","saving":"Trwa zapisywanie..."}},"pt":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Guardar configurações","saving":"A guardar..."}},"pt-BR":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Salvar configurações","saving":"Salvando..."}},"ru":{"dialog_form_wrapper":{"cancel":"Отменить","save_settings":"Сохранить настройки","saving":"Сохранение..."}},"sl":{"dialog_form_wrapper":{"cancel":"Prekliči","save_settings":"Shrani nastavitve","saving":"Shranjevanje ..."}},"sv":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Spara inställningarna","saving":"Sparar ..."}},"sv-x-k12":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Spara inställningarna","saving":"Sparar ..."}},"tr":{"dialog_form_wrapper":{"cancel":"İptal","save_settings":"Ayarları Kaydet","saving":"Kaydediliyor..."}},"uk":{"dialog_form_wrapper":{"cancel":"Скасувати","save_settings":"Зберегти налаштування","saving":"Збереження..."}},"zh-Hans":{"dialog_form_wrapper":{"cancel":"取消","save_settings":"保存设置","saving":"正在保存..."}},"zh-Hant":{"dialog_form_wrapper":{"cancel":"取消","save_settings":"保存設置","saving":"正在保存..."}}}'))
a("jQeR")
a("0sPK")
u["default"].scoped("dialog_form_wrapper")
a("BGrI")
var d=l.a.default
var h=d.template,g=d.templates=d.templates||{}
var p="/work/canvas-deploy/generated/ui/shared/forms/jst/DialogFormWrapper"
g[p]=h((function(e,t,a,n,r){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
r=r||{}
var i,s,o="",l=a.helperMissing,u=this.escapeExpression
o+='<div class="outlet"></div>\n\n<div class="button-container">\n  <button class="btn dialog_closer">'+u((i=a.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:r},i?i.call(t,"cancel","Cancel",s):l.call(t,"t","cancel","Cancel",s)))+'</button>\n  <button\n    class="btn btn-primary"\n    data-text-while-loading=\''+u((i=a.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:r},i?i.call(t,"saving","Saving...",s):l.call(t,"t","saving","Saving...",s)))+'\'\n    type="submit"\n  >'+u((i=a.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:r},i?i.call(t,"save_settings","Save Settings",s):l.call(t,"t","save_settings","Save Settings",s)))+"</button>\n\n"
return o}))
var f=g[p]
a("ESjL")
a("897F")
var _,v,m,b=function(e,t){return function(){return e.apply(t,arguments)}},y=function(e,t){for(var a in t)k.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},k={}.hasOwnProperty
m=!!(null!=(_=window.ENV)&&null!=(v=_.FEATURES)?v.responsive_awareness:void 0)
var w=!window.matchMedia("(min-width: 550px)").matches
var S=function(e,t){return m&&w?e:t}
t["a"]=function(e){y(t,e)
function t(){this.onSaveSuccess=b(this.onSaveSuccess,this)
this.renderElAgain=b(this.renderElAgain,this)
this.firstRenderEl=b(this.firstRenderEl,this)
this.toggle=b(this.toggle,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={trigger:false,title:null,width:null,height:null,minWidth:null,minHeight:null,fixDialogButtons:true}
t.prototype.$dialogAppendTarget=r()("body")
t.prototype.className="dialogFormView"
t.prototype.wrapperTemplate=f
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.setTrigger()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.open=null
t.prototype.close=function(){var e,t;(null!=(e=this.dialog)?e.isOpen():void 0)&&this.dialog.close()
return null!=(t=this.focusReturnsTo())?t.focus():void 0}
t.prototype.toggle=function(){var e
return(null!=(e=this.dialog)?e.isOpen():void 0)?this.close():this.open()}
t.prototype.remove=function(){var e,a
t.__super__.remove.apply(this,arguments)
null!=(e=this.$trigger)&&e.off(".dialogFormView")
null!=(a=this.$dialog)&&a.remove()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.firstOpen=function(){this.insert()
this.render()
this.setupDialog()
this.openAgain()
return this.open=this.openAgain}
t.prototype.openAgain=function(){this.dialog.open()
return this.dialog.focusable.focus()}
t.prototype.insert=function(){return this.$el.appendTo(this.$dialogAppendTarget)}
t.prototype.setTrigger=function(e){e&&(this.options.trigger=e)
if(!this.options.trigger)return
this.$trigger=r()(this.options.trigger)
return this.attachTrigger()}
t.prototype.attachTrigger=function(){var e
return null!=(e=this.$trigger)?e.on("click.dialogFormView",Object(s["a"])(this.toggle)):void 0}
t.prototype.renderEl=null
t.prototype.firstRenderEl=function(){this.$el.html(this.wrapperTemplate(this.toJSON()))
this.renderElAgain()
return this.renderEl=this.renderElAgain}
t.prototype.renderElAgain=function(){var e
e=this.template(this.toJSON())
return this.$el.find(".outlet").html(e)}
t.prototype.getDialogTitle=function(){var e
return this.options.title||(null!=(e=this.$trigger)?e.attr("title"):void 0)||this.getAriaTitle()}
t.prototype.getAriaTitle=function(){var e,t
e=null!=(t=this.$trigger)?t.attr("aria-describedby"):void 0
return r()("#"+e).text()}
t.prototype.setupDialog=function(){var e
e={autoOpen:false,title:this.getDialogTitle(),close:(t=this,function(){t.close()
return t.trigger("close")}),open:function(e){return function(){return e.trigger("open")}}(this)}
var t
e.width=this.options.width
e.height=this.options.height
e.minWidth=this.options.minWidth
e.minHeight=this.options.minHeight
this.$el.dialog(e)
this.options.fixDialogButtons&&this.$el.fixDialogButtons()
this.dialog=this.$el.data("dialog")
return r()(".ui-resizable-handle").attr("aria-hidden",true)}
t.prototype.setDimensions=function(e,t){var a
e=null!=e?e:this.options.width
t=null!=t?t:this.options.height
a={width:e,height:t}
return this.$el.dialog(a)}
t.prototype.onSaveSuccess=function(){t.__super__.onSaveSuccess.apply(this,arguments)
return this.close()}
t.prototype.focusReturnsTo=function(){var e
if(!this.$trigger)return null
return(e=this.$trigger.data("focusReturnsTo"))?r()("#"+e):this.$trigger}
return t}(i["a"])},msTH:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var i=a("Y/W1")
var s=a.n(i)
var o=a("gI0r")
var l=a("HGxv")
var u=a("8WeW")
Object(u["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
a("jQeR")
a("0sPK")
var c=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){var t,a
if(!(null!==(t=ENV)&&void 0!==t&&null!==(a=t.FEATURES)&&void 0!==a&&a.new_math_equation_handling)){const t=r()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=r()('<span class="hidden-readable"></span>')
a.html(t)
return a}},toMediaCommentLink(e){const t=r()(`<a\n        id='media_comment_${Object(o["a"])(r()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(o["a"])(r()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(o["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(o["a"])(r()(e).attr("data-alt"))}'\n      />`)
t.html(r()(e).html())
return t},convert(e,t={}){const a=r()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=r()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=s.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a=`//${ENV.files_domain}${a}`)
const n=r()(`<form\n            action='${Object(o["a"])(a)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(o["a"])(t)}'\n            id='form-${Object(o["a"])(t)}'\n          />`)
n.append(r()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(r()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
r()("body").append(n)
setTimeout(()=>n.submit(),0)
return r()(`<iframe\n            class='user_content_iframe'\n            name='${Object(o["a"])(t)}'\n            style='width: ${Object(o["a"])(e.data("uc_width"))}; height: ${Object(o["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(o["a"])(c.t("User Content"))}'\n          />`)}))
a.find("img.equation_image").each((e,t)=>{const a=r()(t)
const n=d.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(n)})}return a.html()}}
t["a"]=d},tHpF:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
a("VrN0")
const i={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const s=function(e,t,a){e[t]=a
return e}
r.a.fn.toJSON=function(){let e={},t={}
const a=function(e,a){void 0===t[e]&&(t[e]=0)
if(void 0===a)return t[e]++
if(void 0!==a&&a>t[e])return t[e]=++a}
r.a.each(r()(this).serializeForm(),(function(){if(!i.validate.test(this.name))return
let t,n=this.name.match(i.key),o=this.value,l=this.name
while(void 0!==(t=n.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(i.push))o=s([],a(l),o)
else if(t.match(i.fixed)){a(l,t)
o=s([],t,o)}else t.match(i.named)&&(o=s({},t,o))}e=r.a.extend(true,e,o)}))
return e}}}])

//# sourceMappingURL=45-c-eb535e3ce9.js.map