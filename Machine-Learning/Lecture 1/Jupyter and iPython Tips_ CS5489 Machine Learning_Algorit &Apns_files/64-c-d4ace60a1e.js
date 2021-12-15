(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[64],{"2z/i":function(e,o,t){"use strict"
var c=t("HGxv")
var l=t("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"multiple_ba5220cd":"متعدد","upper_lower_56cad16c":"%{upper} - %{lower}"},"ca":{"multiple_ba5220cd":"Diversos","upper_lower_56cad16c":"%{upper} - %{lower}"},"cy":{"multiple_ba5220cd":"Mwy nag un","upper_lower_56cad16c":"%{upper} - %{lower}"},"da":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"da-x-k12":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"de":{"multiple_ba5220cd":"Mehrfach","upper_lower_56cad16c":"%{upper} – %{lower}"},"en-AU":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"en-AU-x-unimelb":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"en-CA":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"en-GB":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"en-GB-x-lbs":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"en-GB-x-ukhe":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"es":{"multiple_ba5220cd":"Múltiple","upper_lower_56cad16c":"%{upper} - %{lower}"},"fa":{"multiple_ba5220cd":"چند مورد","upper_lower_56cad16c":"%{upper} -%{lower}"},"fi":{"multiple_ba5220cd":"Useita","upper_lower_56cad16c":"%{upper} - %{lower}"},"fr":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} – %{lower}"},"fr-CA":{"multiple_ba5220cd":"Multiple","upper_lower_56cad16c":"%{upper} – %{lower}"},"he":{"multiple_ba5220cd":"מרובים","upper_lower_56cad16c":"%{upper} - %{lower}"},"ht":{"multiple_ba5220cd":"Plizyè","upper_lower_56cad16c":"%{upper} - %{lower}"},"hu":{"multiple_ba5220cd":"Többszörös","upper_lower_56cad16c":"%{upper} - %{lower}"},"is":{"multiple_ba5220cd":"Margir","upper_lower_56cad16c":"%{upper} - %{lower}"},"it":{"multiple_ba5220cd":"Multipli","upper_lower_56cad16c":"%{upper} - %{lower}"},"ja":{"multiple_ba5220cd":"複数","upper_lower_56cad16c":"%{upper} -%{lower}"},"mi":{"multiple_ba5220cd":"Maha","upper_lower_56cad16c":"%{upper} - %{lower}"},"nb":{"multiple_ba5220cd":"Flere","upper_lower_56cad16c":"%{upper} - %{lower}"},"nb-x-k12":{"multiple_ba5220cd":"Flere","upper_lower_56cad16c":"%{upper} - %{lower}"},"nl":{"multiple_ba5220cd":"Meerdere","upper_lower_56cad16c":"%{upper} - %{lower}"},"nn":{"multiple_ba5220cd":"Fleire","upper_lower_56cad16c":"%{upper} - %{lower}"},"pl":{"multiple_ba5220cd":"Wiele","upper_lower_56cad16c":"%{upper} - %{lower}"},"pt":{"multiple_ba5220cd":"Múltiplo","upper_lower_56cad16c":"%{upper} - %{lower}"},"pt-BR":{"multiple_ba5220cd":"Múltiplos(as)","upper_lower_56cad16c":"%{upper} - %{lower}"},"ru":{"multiple_ba5220cd":"Множественное число","upper_lower_56cad16c":"%{upper} - %{lower}"},"sl":{"multiple_ba5220cd":"Večkratni","upper_lower_56cad16c":"%{upper} – %{lower}"},"sv":{"multiple_ba5220cd":"Flera","upper_lower_56cad16c":"%{upper}–%{lower}"},"sv-x-k12":{"multiple_ba5220cd":"Flera","upper_lower_56cad16c":"%{upper}–%{lower}"},"uk":{"multiple_ba5220cd":"Множинний","upper_lower_56cad16c":"%{upper} - %{lower}"},"zh-Hans":{"multiple_ba5220cd":"多个","upper_lower_56cad16c":"%{upper} -%{lower}"},"zh-Hant":{"multiple_ba5220cd":"多個","upper_lower_56cad16c":"%{upper} -%{lower}"}}'))
t("jQeR")
t("0sPK")
var r=c["default"].scoped("format_range")
var n=t("Z6JD")
const a=()=>ENV.CONDITIONAL_RELEASE_SERVICE_ENABLED||false
const _=()=>{const e=ENV.CONDITIONAL_RELEASE_ENV&&ENV.CONDITIONAL_RELEASE_ENV.active_rules||[]
return{triggerAssignments:e.reduce((e,o)=>{e[o.trigger_assignment_id]=o
return e},{}),releasedAssignments:e.reduce((e,o)=>{o.scoring_ranges.forEach(t=>{t.assignment_sets.forEach(c=>{c.assignment_set_associations.forEach(c=>{const l=c.assignment_id
e[l]=e[l]||[]
e[l].push({assignment_id:o.trigger_assignment_id,assignment:o.trigger_assignment_model,upper_bound:t.upper_bound,lower_bound:t.lower_bound})})})})
return e},{})}}
let s=_()
const i=e=>s.triggerAssignments.hasOwnProperty(e)
const d=e=>s.releasedAssignments.hasOwnProperty(e)
const u=e=>{const o=s.releasedAssignments[e]||[]
if(o.length>1)return r.t("Multiple")
if(o.length>0){const e=o[0]
return r.t("%{upper} - %{lower}",{upper:Object(n["b"])(e.upper_bound,e.assignment,true),lower:Object(n["b"])(e.lower_bound,e.assignment,false)})}return null}
o["a"]={isEnabled:a,reloadEnv(){s=_()},getItemData(e,o=true){e=e&&e.toString()
return a()?{isCyoeAble:e&&o,isTrigger:e&&o&&i(e),isReleased:d(e),releasedLabel:u(e)}:{}}}},JrkR:function(e,o,t){var c={"./__tests__/handleLtiPostMessage.test.js":["meBD",4114],"./__tests__/lti.resourceImported.test.js":["TgQ9",4063],"./__tests__/requestFullWindowLaunch.test.js":["kzID",4064],"./handleLtiPostMessage.js":["vBsS"],"./lti.resourceImported.js":["WrIf",4115],"./messageTypes.js":["bj3y"],"./requestFullWindowLaunch.js":["vC4c",4116],"./toggleCourseNavigationMenu.js":["cHZI",3619,4117]}
function l(e){if(!t.o(c,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'")
o.code="MODULE_NOT_FOUND"
throw o}))
var o=c[e],l=o[0]
return Promise.all(o.slice(1).map(t.e)).then((function(){return t(l)}))}l.keys=function(){return Object.keys(c)}
l.id="JrkR"
e.exports=l},SYfm:function(e,o,t){"use strict"
var c=t("HGxv")
var l=t("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"lock_c341af13":"تأمين","locked_762f138b":"تم التأمين","locked_click_to_unlock_50747e11":"مؤمّن. انقر لإلغاء التأمين.","locking_91f476a5":"جارٍ التأمين...","unlock_f6196bf5":"إلغاء التأمين","unlocked_beee43de":"غير مؤمّن","unlocked_click_to_lock_53262ce7":"غير مؤمّن. انقر للتأمين.","unlocking_a6b5c02d":"جارٍ إلغاء التأمين..."},"ca":{"lock_c341af13":"Bloqueja","locked_762f138b":"Bloquejat","locked_click_to_unlock_50747e11":"Bloquejat. Feu clic per desbloquejar.","locking_91f476a5":"S\'està bloquejant...","unlock_f6196bf5":"Desbloqueja","unlocked_beee43de":"Desbloquejat","unlocked_click_to_lock_53262ce7":"Desbloquejat. Feu clic per bloquejar.","unlocking_a6b5c02d":"S\'està desbloquejant..."},"cy":{"lock_c341af13":"Cloi","locked_762f138b":"Wedi Cloi","locked_click_to_unlock_50747e11":"Wedi Cloi. Cliciwch i ddatgloi.","locking_91f476a5":"Wrthi’n cloi...","unlock_f6196bf5":"Datgloi","unlocked_beee43de":"Wedi Datgloi","unlocked_click_to_lock_53262ce7":"Wedi Datgloi. Cliciwch i’w gloi.","unlocking_a6b5c02d":"Wrthi’n datgloi..."},"da":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klik for at låse op.","locking_91f476a5":"Låser ...","unlock_f6196bf5":"Lås op","unlocked_beee43de":"Låst op","unlocked_click_to_lock_53262ce7":"Låst op. Klik for at låse.","unlocking_a6b5c02d":"Låser op ..."},"da-x-k12":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klik for at låse op.","locking_91f476a5":"Låser ...","unlock_f6196bf5":"Lås op","unlocked_beee43de":"Låst op","unlocked_click_to_lock_53262ce7":"Låst op. Klik for at låse.","unlocking_a6b5c02d":"Låser op ..."},"de":{"lock_c341af13":"Sperre","locked_762f138b":"Gesperrt","locked_click_to_unlock_50747e11":"Gesperrt. Zum Entsperren klicken","locking_91f476a5":"Wird gesperrt ...","unlock_f6196bf5":"Entsperren","unlocked_beee43de":"Entsperrt","unlocked_click_to_lock_53262ce7":"Entsperrt Zum Sperren klicken","unlocking_a6b5c02d":"Wird entsperrt ..."},"el":{"locked_762f138b":"Κλειδωμένο"},"en-AU":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"en-AU-x-unimelb":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"en-CA":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"en-GB":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"en-GB-x-lbs":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"en-GB-x-ukhe":{"lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","locking_91f476a5":"Locking...","unlock_f6196bf5":"Unlock","unlocked_beee43de":"Unlocked","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock.","unlocking_a6b5c02d":"Unlocking..."},"es":{"lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado","locked_click_to_unlock_50747e11":"Bloqueado. Hacer clic para desbloquear.","locking_91f476a5":"Bloqueando...","unlock_f6196bf5":"Desbloquear","unlocked_beee43de":"Desbloqueado","unlocked_click_to_lock_53262ce7":"Desbloqueado. Hacer clic para bloquear.","unlocking_a6b5c02d":"Desbloqueando..."},"fa":{"lock_c341af13":"قفل کردن","locked_762f138b":"قفل شده","locked_click_to_unlock_50747e11":"قفل شده. برای قفل گشایی کلیک کنید.","locking_91f476a5":"در حال قفل کردن...","unlock_f6196bf5":"قفل گشایی","unlocked_beee43de":"قفل گشایی شده","unlocked_click_to_lock_53262ce7":"قفل گشایی شده. برای قفل کردن کلیک کنید.","unlocking_a6b5c02d":"درحال قفل گشایی..."},"fi":{"lock_c341af13":"Lukitse","locked_762f138b":"Lukittu","locked_click_to_unlock_50747e11":"Lukittu. Poista lukitus napsauttamalla.","locking_91f476a5":"Lukitaan...","unlock_f6196bf5":"Poista lukitus.","unlocked_beee43de":"Lukitus poistettu","unlocked_click_to_lock_53262ce7":"Lukitus poistettu. Lukitse napsauttamalla.","unlocking_a6b5c02d":"Lukitusta poistetaan..."},"fr":{"lock_c341af13":"Verrouiller","locked_762f138b":"Verrouillé(e)","locked_click_to_unlock_50747e11":"Verrouillé. Cliquez pour déverrouiller.","locking_91f476a5":"Verrouillage...","unlock_f6196bf5":"Déverrouiller","unlocked_beee43de":"Déverrouillé","unlocked_click_to_lock_53262ce7":"Déverrouillé. Cliquez pour verrouiller.","unlocking_a6b5c02d":"Déverrouillage..."},"fr-CA":{"lock_c341af13":"Verrouiller","locked_762f138b":"Verrouillé","locked_click_to_unlock_50747e11":"Verrouillé. Cliquez pour déverrouiller.","locking_91f476a5":"En cours de verrouillage...","unlock_f6196bf5":"Déverrouiller","unlocked_beee43de":"Déverrouillé","unlocked_click_to_lock_53262ce7":"Déverrouillé. Cliquez pour verrouiller.","unlocking_a6b5c02d":"En cours de déverrouillage..."},"he":{"lock_c341af13":"נעילה","locked_762f138b":"נעול","locked_click_to_unlock_50747e11":"נעול: הקש/י להסרת נעילה","locking_91f476a5":"נועל..."},"ht":{"lock_c341af13":"Bloke","locked_762f138b":"Bloke","locked_click_to_unlock_50747e11":"Bloke. Klike pou debloke.","locking_91f476a5":"Bblokaj...","unlock_f6196bf5":"Debloke","unlocked_beee43de":"Debloke","unlocked_click_to_lock_53262ce7":"Debloke. Klike pou bloke.","unlocking_a6b5c02d":"Debloke..."},"hu":{"lock_c341af13":"Zárolás","locked_762f138b":"Zárolt","locked_click_to_unlock_50747e11":"Zárolva. Kattintson a zárolás feloldásához.","locking_91f476a5":"Zárolás...","unlock_f6196bf5":"Zárolás feloldása","unlocked_beee43de":"Zárolás feloldva","unlocked_click_to_lock_53262ce7":"Zárolás feloldva. Kattintson a zároláshoz.","unlocking_a6b5c02d":"Zárolás feloldása..."},"hy":{"locked_762f138b":"Արգելափակված է"},"is":{"lock_c341af13":"Læsa","locked_762f138b":"Læst ","locked_click_to_unlock_50747e11":"Læst. Smellið til að opna.","locking_91f476a5":"Læsi...","unlock_f6196bf5":"Aflæsa","unlocked_beee43de":"Aflæst","unlocked_click_to_lock_53262ce7":"Aflæst. Smelltu til að læsa.","unlocking_a6b5c02d":"Aflæsi..."},"it":{"lock_c341af13":"Blocca","locked_762f138b":"Bloccato","locked_click_to_unlock_50747e11":"Bloccato. Fai clic per sbloccare.","locking_91f476a5":"Blocco in corso...","unlock_f6196bf5":"Sblocca","unlocked_beee43de":"Sbloccato","unlocked_click_to_lock_53262ce7":"Sbloccato. Fai clic per bloccare.","unlocking_a6b5c02d":"Sblocco in corso..."},"ja":{"lock_c341af13":"ロック","locked_762f138b":"ロックされています","locked_click_to_unlock_50747e11":"ロックされています。クリックしてロック解除する。","locking_91f476a5":"ロック中...","unlock_f6196bf5":"ロック解除する","unlocked_beee43de":"ロック解除済み","unlocked_click_to_lock_53262ce7":"ロック解除。クリックしてロックする。","unlocking_a6b5c02d":"ロック解除中..."},"mi":{"lock_c341af13":"raka","locked_762f138b":"Kua rakaina","locked_click_to_unlock_50747e11":"Kua rakaina: Pāwhiri ki te huaki","locking_91f476a5":"E raka ana .....","unlock_f6196bf5":"Huaki","unlocked_beee43de":"Kua Weterakaina","unlocked_click_to_lock_53262ce7":"Kua Huakina Pāwhiri ki te huaki","unlocking_a6b5c02d":"E huakina ana"},"nb":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å låse opp.","locking_91f476a5":"Låser…","unlock_f6196bf5":"Lås opp","unlocked_beee43de":"Låst opp","unlocked_click_to_lock_53262ce7":"Låst opp. Klikk for å låse.","unlocking_a6b5c02d":"Låser opp…"},"nb-x-k12":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å låse opp.","locking_91f476a5":"Låser…","unlock_f6196bf5":"Lås opp","unlocked_beee43de":"Låst opp","unlocked_click_to_lock_53262ce7":"Låst opp. Klikk for å låse.","unlocking_a6b5c02d":"Låser opp…"},"nl":{"lock_c341af13":"Vergrendelen","locked_762f138b":"Vergrendeld","locked_click_to_unlock_50747e11":"Vergrendeld. Klik om te ontgrendelen.","locking_91f476a5":"Vergrendelen...","unlock_f6196bf5":"Ontgrendelen","unlocked_beee43de":"Ontgrendeld","unlocked_click_to_lock_53262ce7":"Ontgrendeld. Klik om te vergrendelen.","unlocking_a6b5c02d":"Ontgrendelen..."},"nn":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å opne.","locking_91f476a5":"Låser...","unlock_f6196bf5":"Lås opp","unlocked_beee43de":"Ulåst","unlocked_click_to_lock_53262ce7":"Ulåst. Klikk for å opne. ","unlocking_a6b5c02d":"Låser opp..."},"pl":{"lock_c341af13":"Zablokuj","locked_762f138b":"Zablokowany","locked_click_to_unlock_50747e11":"Zblokowane. Kliknij, aby odblokować.","locking_91f476a5":"Blokowanie...","unlock_f6196bf5":"Odblokuj","unlocked_beee43de":"Odblokowane","unlocked_click_to_lock_53262ce7":"Odblokowane. Kliknij, aby zablokować.","unlocking_a6b5c02d":"Odblokowywanie..."},"pt":{"lock_c341af13":"Bloquear","locked_762f138b":"Travada","locked_click_to_unlock_50747e11":"Bloqueado, Clique para desbloquear.","locking_91f476a5":"A bloquear...","unlock_f6196bf5":"Desbloquear","unlocked_beee43de":"Desbloqueado","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear.","unlocking_a6b5c02d":"A desbloquear..."},"pt-BR":{"lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado(a)","locked_click_to_unlock_50747e11":"Bloqueado. Clique para desbloquear.","locking_91f476a5":"Bloqueando...","unlock_f6196bf5":"Desbloquear","unlocked_beee43de":"Desbloqueado","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear.","unlocking_a6b5c02d":"Desbloqueando..."},"ru":{"lock_c341af13":"Заблокировать","locked_762f138b":"Заблокировано","locked_click_to_unlock_50747e11":"Заблокировано. Нажмите, чтобы разблокировать.","locking_91f476a5":"Осуществляется блокировка...","unlock_f6196bf5":"Разблокировать","unlocked_beee43de":"Разблокировано","unlocked_click_to_lock_53262ce7":"Разблокировано. Нажмите, чтобы заблокировать.","unlocking_a6b5c02d":"Осуществляется разблокировка..."},"sl":{"lock_c341af13":"Zakleni","locked_762f138b":"Zaklenjeno","locked_click_to_unlock_50747e11":"Zaklenjeno. Kliknite, da odklenete.","locking_91f476a5":"Zaklepanje ...","unlock_f6196bf5":"Odkleni","unlocked_beee43de":"Odklenjeno","unlocked_click_to_lock_53262ce7":"Odklenjeno. Kliknite, da zaklenete.","unlocking_a6b5c02d":"Odklepanje ..."},"sv":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klicka för att låsa upp.","locking_91f476a5":"Låser ...","unlock_f6196bf5":"Lås upp","unlocked_beee43de":"Olåst","unlocked_click_to_lock_53262ce7":"Olåst. Klicka för att låsa.","unlocking_a6b5c02d":"Låser upp ..."},"sv-x-k12":{"lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klicka för att låsa upp.","locking_91f476a5":"Låser ...","unlock_f6196bf5":"Lås upp","unlocked_beee43de":"Olåst","unlocked_click_to_lock_53262ce7":"Olåst. Klicka för att låsa.","unlocking_a6b5c02d":"Låser upp ..."},"tr":{"locked_762f138b":"Kilitli"},"uk":{"lock_c341af13":"Заблокувати","locked_762f138b":"Заблоковано","locked_click_to_unlock_50747e11":"Заблоковано. Клацніть, щоб розблокувати.","locking_91f476a5":"Блокування...","unlock_f6196bf5":"Розблокувати","unlocked_beee43de":"Розблоковано","unlocked_click_to_lock_53262ce7":"Розблоковано. Натисніть, щоб заблокувати.","unlocking_a6b5c02d":"Розблокування ..."},"zh-Hans":{"lock_c341af13":"锁定","locked_762f138b":"已锁定","locked_click_to_unlock_50747e11":"已锁定。单击以解锁。","locking_91f476a5":"正在锁定……","unlock_f6196bf5":"解锁","unlocked_beee43de":"已解锁","unlocked_click_to_lock_53262ce7":"已解锁。单击以锁定。","unlocking_a6b5c02d":"正在解锁……"},"zh-Hant":{"lock_c341af13":"鎖定","locked_762f138b":"已鎖定","locked_click_to_unlock_50747e11":"已鎖定。點擊解鎖。","locking_91f476a5":"鎖定中...","unlock_f6196bf5":"解除鎖定","unlocked_beee43de":"已解除鎖定","unlocked_click_to_lock_53262ce7":"已解除鎖定。點擊鎖定。","unlocking_a6b5c02d":"解除鎖定中..."}}'))
t("jQeR")
t("0sPK")
var r=c["default"].scoped("LockButton")
var n=t("ouhR")
var a=t.n(n)
var _=t("mX+G")
var s=t.n(_)
var i=t("gI0r")
t("Dhso")
var d=function(e,o){for(var t in o)u.call(o,t)&&(e[t]=o[t])
function c(){this.constructor=e}c.prototype=o.prototype
e.prototype=new c
e.__super__=o.prototype
return e},u={}.hasOwnProperty
var p=function(e){d(o,e)
function o(){return o.__super__.constructor.apply(this,arguments)}o.prototype.lockedClass="btn-locked"
o.prototype.unlockedClass="btn-unlocked"
o.prototype.disabledClass="disabled"
o.optionProperty("lockedText")
o.optionProperty("unlockedText",o.optionProperty("course_id",o.optionProperty("content_id")))
o.optionProperty("content_type")
o.prototype.tagName="button"
o.prototype.className="btn"
o.prototype.events={click:"click",hover:"hover",focus:"focus",blur:"blur"}
o.prototype.els={i:"$icon",".lock-text":"$text"}
o.prototype.initialize=function(){o.__super__.initialize.apply(this,arguments)
this.disabled=!this.isMasterCourseMasterContent()
this.disabledClass=this.disabled?"disabled":""
this.lockedText=this.lockedText||r.t("Locked. Click to unlock.")
return this.unlockedText=this.unlockedText||r.t("Unlocked. Click to lock.")}
o.prototype.setElement=function(){o.__super__.setElement.apply(this,arguments)
return this.$el.attr("data-tooltip","")}
o.prototype.hover=function(e){var o
o=e.type
if(this.disabled)return
if("mouseenter"===o)return this.isLocked()?this.renderWillUnlock():this.renderWillLock()
if("mouseleave"===o)return this.isLocked()?this.renderLocked():this.renderUnlocked()}
o.prototype.focus=function(){return this.focusblur()}
o.prototype.blur=function(){return this.focusblur()}
o.prototype.focusblur=function(){if(this.disabled)return
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
o.prototype.click=function(e){e.preventDefault()
e.stopPropagation()
if(this.disabled)return
return this.isLocked()?this.unlock():this.lock()}
o.prototype.setFocusToElement=function(){return this.$el.focus()}
o.prototype.lock=function(e){this.renderLocking()
return this.setLockState(true)}
o.prototype.unlock=function(e){this.renderUnlocking()
return this.setLockState(false)}
o.prototype.setLockState=function(e){return a.a.ajaxJSON("/api/v1/courses/"+this.course_id+"/blueprint_templates/default/restrict_item","PUT",{content_type:this.content_type,content_id:this.content_id,restricted:e},(o=this,function(t){o.model.set("restricted_by_master_course",e)
o.trigger(e?"lock":"unlock")
o.render()
o.setFocusToElement()
o.closeTooltip()
return null}),function(e){return function(o){return e.setFocusToElement()}}(this))
var o}
o.prototype.isLocked=function(){return this.model.get("restricted_by_master_course")}
o.prototype.isMasterCourseMasterContent=function(){return!!this.model.get("is_master_course_master_content")}
o.prototype.isMasterCourseChildContent=function(){return!!this.model.get("is_master_course_child_content")}
o.prototype.isMasterCourseContent=function(){return this.isMasterCourseMasterContent()||this.isMasterCourseChildContent()}
o.prototype.reset=function(){this.$el.removeClass(this.lockedClass+" "+this.unlockedClass+" "+this.disabledClass)
this.$icon.removeClass("icon-lock icon-unlock icon-unlocked")
this.$el.removeAttr("aria-label")
return this.closeTooltip()}
o.prototype.closeTooltip=function(){return a()(".ui-tooltip").remove()}
o.prototype.render=function(){if(!this.isMasterCourseContent())return
this.$el.attr("role","button")
this.disabled||this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="lock-text screenreader-only"></span>')
this.cacheEls()
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
o.prototype.renderLocked=function(){return this.renderState({hint:r.t("Locked"),label:this.lockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
o.prototype.renderWillUnlock=function(){return this.renderState({hint:r.t("Unlock"),label:this.lockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
o.prototype.renderUnlocking=function(){return this.renderState({hint:r.t("Unlocking..."),buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
o.prototype.renderUnlocked=function(){return this.renderState({hint:r.t("Unlocked"),label:this.unlockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
o.prototype.renderWillLock=function(){return this.renderState({hint:r.t("Lock"),label:this.unlockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
o.prototype.renderLocking=function(){return this.renderState({hint:r.t("Locking..."),buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
o.prototype.renderState=function(e){this.reset()
this.$el.addClass(e.buttonClass)
this.disabled?this.$el.attr("aria-disabled",true):this.$el.attr("aria-pressed",e.buttonClass===this.lockedClass)
this.$icon.attr("class",e.iconClass)
this.$text.html(""+Object(i["a"])(e.label||e.hint))
return this.$el.attr("title",e.hint)}
return o}(s.a.View)
var k=function(e,o){for(var t in o)b.call(o,t)&&(e[t]=o[t])
function c(){this.constructor=e}c.prototype=o.prototype
e.prototype=new c
e.__super__=o.prototype
return e},b={}.hasOwnProperty
o["a"]=function(e){k(o,e)
function o(){return o.__super__.constructor.apply(this,arguments)}o.prototype.lockClass="lock-icon-lock"
o.prototype.lockedClass="lock-icon-locked"
o.prototype.unlockClass="lock-icon-unlock"
o.prototype.tagName="span"
o.prototype.className="lock-icon"
o.optionProperty("lockText")
o.optionProperty("unlockText")
o.prototype.initialize=function(){o.__super__.initialize.apply(this,arguments)
return this.events=Object.assign({},p.prototype.events,this.events)}
o.prototype.events={keyclick:"click"}
return o}(p)},WIG6:function(e,o,t){"use strict"
t.d(o,"a",(function(){return a}))
var c=t("An8g")
t("q1tI")
t("17x9")
var l=t("bJGz")
var r=t("ouhR")
var n=t.n(r)
function a({tool:e,placement:o,acceptedResourceTypes:t,targetResourceType:r,allowItemSelection:a,selectableItems:_,onDismiss:s,open:i}){const d={com_instructure_course_accept_canvas_resource_types:t,com_instructure_course_canvas_resource_type:r,com_instructure_course_allow_canvas_resource_selection:a,com_instructure_course_available_canvas_resources:_,display:"borderless",placement:o}
const u=-1===(null===e||void 0===e?void 0:e.base_url.indexOf("?"))?"?":"&"
const p=`${null===e||void 0===e?void 0:e.base_url}${u}${n.a.param(d)}`
const k=e?e.title:""
return Object(c["a"])(l["a"],{open:i,label:k,onDismiss:s,placement:"end",size:"regular",padding:"0",headerPadding:"medium"},void 0,Object(c["a"])("iframe",{style:{border:"none",display:"block",width:"100%",height:"100%"},"data-testid":"ltiIframe",src:p,title:k,"data-lti-launch":"true"}))}},Z6JD:function(e,o,t){"use strict"
t.d(o,"b",(function(){return k}))
t.d(o,"a",(function(){return m}))
var c=t("HGxv")
var l=t("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"gpa_scale_6710e2ee":"مقياس المعدل التراكمي","letter_grade_f00fedc4":"الدرجة بالأحرف","other_ddacb37d":"آخر","percent_448ea947":"النسبة المئوية","points_bceb5005":"النقاط"},"ca":{"gpa_scale_6710e2ee":"escala GPA","letter_grade_f00fedc4":"qualificació amb lletra","other_ddacb37d":"altres","percent_448ea947":"percentatge","points_bceb5005":"punts"},"cy":{"gpa_scale_6710e2ee":"Graddfa GPA","letter_grade_f00fedc4":"gradd llythyren","other_ddacb37d":"arall","percent_448ea947":"canran","points_bceb5005":"pwynt"},"da":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavkarakter","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"da-x-k12":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavvurdering","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"de":{"gpa_scale_6710e2ee":"GPA-Skala","letter_grade_f00fedc4":"Buchstabennote","other_ddacb37d":"sonstige","percent_448ea947":"prozentual","points_bceb5005":"Punkte"},"el":{"letter_grade_f00fedc4":"Βαθμολόγηση με Γράμματα","percent_448ea947":"ποσοστό","points_bceb5005":"Μόρια"},"en-AU":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-AU-x-unimelb":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-CA":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-GB":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter mark","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-lbs":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-ukhe":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter mark","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"es":{"gpa_scale_6710e2ee":"Escala de GPA","letter_grade_f00fedc4":"letra de calificación","other_ddacb37d":"otro","percent_448ea947":"porcentaje","points_bceb5005":"puntos"},"fa":{"gpa_scale_6710e2ee":"مقایس معدل","letter_grade_f00fedc4":"نمره با حروف الفبا","other_ddacb37d":"سایر","percent_448ea947":"درصد","points_bceb5005":"امتیازها"},"fi":{"gpa_scale_6710e2ee":"GPA-asteikko","letter_grade_f00fedc4":"kirjainarvosana","other_ddacb37d":"muu","percent_448ea947":"prosenttia","points_bceb5005":"pistettä"},"fr":{"gpa_scale_6710e2ee":"Échelle de la moyenne pondérée cumulative","letter_grade_f00fedc4":"note à lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"fr-CA":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"he":{"gpa_scale_6710e2ee":"סולם ההערכה GPA","letter_grade_f00fedc4":"הערכה מילולית","other_ddacb37d":"אחר","percent_448ea947":"אחוז","points_bceb5005":"נקודות"},"ht":{"gpa_scale_6710e2ee":"Echèl GPA","letter_grade_f00fedc4":"kategori lèt","other_ddacb37d":"lòt","percent_448ea947":"pousantaj","points_bceb5005":"pwen"},"hu":{"gpa_scale_6710e2ee":"GPA skála","letter_grade_f00fedc4":"Betű alapú érdemjegy ","other_ddacb37d":"Egyéb","percent_448ea947":"százalék","points_bceb5005":"pontszám"},"is":{"gpa_scale_6710e2ee":"Meðaleinkunnakvarði","letter_grade_f00fedc4":"bókstafseinkunn","other_ddacb37d":"annar","percent_448ea947":"hlutfall","points_bceb5005":"punktar"},"it":{"gpa_scale_6710e2ee":"Scala GPA","letter_grade_f00fedc4":"voto in lettere","other_ddacb37d":"altro","percent_448ea947":"percentuale","points_bceb5005":"punti"},"ja":{"gpa_scale_6710e2ee":"GPA スケール","letter_grade_f00fedc4":"文字による成績","other_ddacb37d":"その他","percent_448ea947":"パーセント","points_bceb5005":"ポイント"},"mi":{"gpa_scale_6710e2ee":"tauine GPA","letter_grade_f00fedc4":"kōeke reta","other_ddacb37d":"te tahi atu","percent_448ea947":"ōrau","points_bceb5005":"ngā koinga"},"nb":{"gpa_scale_6710e2ee":"Tallkarakter (GPA)-skala","letter_grade_f00fedc4":"Bokstavkarakter","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nb-x-k12":{"gpa_scale_6710e2ee":"Tallvurderingsskala","letter_grade_f00fedc4":"Bokstavvurdering","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nl":{"gpa_scale_6710e2ee":"Gemiddeld eindcijfer","letter_grade_f00fedc4":"beoordeling in lettervorm","other_ddacb37d":"overige","percent_448ea947":"percentage","points_bceb5005":"punten"},"nn":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bokstavkarakter","other_ddacb37d":"anna","percent_448ea947":"prosent","points_bceb5005":"poeng"},"pl":{"gpa_scale_6710e2ee":"Skala GPA","letter_grade_f00fedc4":"ocena literowa","other_ddacb37d":"inne","percent_448ea947":"procent","points_bceb5005":"punkty"},"pt":{"gpa_scale_6710e2ee":"Escala GPA","letter_grade_f00fedc4":"classificar letra","other_ddacb37d":"outro","percent_448ea947":"porcento","points_bceb5005":"pontos"},"pt-BR":{"gpa_scale_6710e2ee":"escala GPA","letter_grade_f00fedc4":"nota por conceito","other_ddacb37d":"outro","percent_448ea947":"porcentagem","points_bceb5005":"pontos"},"ru":{"gpa_scale_6710e2ee":"Шкала GPA","letter_grade_f00fedc4":"оценка по буквенной системе","other_ddacb37d":"другое","percent_448ea947":"процент","points_bceb5005":"баллы"},"sl":{"gpa_scale_6710e2ee":"Lestvica GPA","letter_grade_f00fedc4":"črkovna ocena","other_ddacb37d":"drugo","percent_448ea947":"odstotek","points_bceb5005":"točk"},"sv":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"bokstavsomdöme","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"sv-x-k12":{"gpa_scale_6710e2ee":"Skala för genomsnittsbetyg","letter_grade_f00fedc4":"bokstavsbedömning","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"tr":{"gpa_scale_6710e2ee":"GNO ölçeği","other_ddacb37d":"diğer","percent_448ea947":"yüzde"},"uk":{"gpa_scale_6710e2ee":"GPA масштаб","letter_grade_f00fedc4":"оцінка у вигляді літери","other_ddacb37d":"інше","percent_448ea947":"відсоток","points_bceb5005":"бали"},"zh-Hans":{"gpa_scale_6710e2ee":"绩点","letter_grade_f00fedc4":"字母评分","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分值"},"zh-Hant":{"gpa_scale_6710e2ee":"GPA 比例","letter_grade_f00fedc4":"字母分級","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分數"}}'))
t("jQeR")
t("0sPK")
var r=c["default"].scoped("cyoe_assignment_sidebar_grading_types")
const n={points:{get label(){return r.t("points")},key:"points"},percent:{get label(){return r.t("percent")},key:"percent"},letter_grade:{get label(){return r.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return r.t("GPA scale")},key:"gpa_scale"},other:{get label(){return r.t("other")},key:"other"}}
var a=n
Object(l["a"])(JSON.parse('{"ar":{"score_pts_adcb1af3":"%{score} نقاط"},"ca":{"score_pts_adcb1af3":"%{score} punts"},"cy":{"score_pts_adcb1af3":"%{score} pwynt"},"da":{"score_pts_adcb1af3":"%{score} point"},"da-x-k12":{"score_pts_adcb1af3":"%{score} point"},"de":{"score_pts_adcb1af3":"%{score} Pkte."},"en-AU":{"score_pts_adcb1af3":"%{score} pts"},"en-AU-x-unimelb":{"score_pts_adcb1af3":"%{score} pts"},"en-CA":{"score_pts_adcb1af3":"%{score} pts"},"en-GB":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-lbs":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-ukhe":{"score_pts_adcb1af3":"%{score} pts"},"es":{"score_pts_adcb1af3":"%{score} ptos."},"fa":{"score_pts_adcb1af3":"%{score} امتیاز"},"fi":{"score_pts_adcb1af3":"%{score} pistettä"},"fr":{"score_pts_adcb1af3":"%{score} pts"},"fr-CA":{"score_pts_adcb1af3":"%{score} pts"},"he":{"score_pts_adcb1af3":"%{score} נקודות"},"ht":{"score_pts_adcb1af3":"%{score} pwen"},"hu":{"score_pts_adcb1af3":"%{score} pont"},"is":{"score_pts_adcb1af3":"%{score} punktar"},"it":{"score_pts_adcb1af3":"%{score} pt."},"ja":{"score_pts_adcb1af3":"%{score} 点"},"mi":{"score_pts_adcb1af3":"%{score} ngā koinga"},"nb":{"score_pts_adcb1af3":"%{score} poeng"},"nb-x-k12":{"score_pts_adcb1af3":"%{score} poeng"},"nl":{"score_pts_adcb1af3":"%{score} punten"},"nn":{"score_pts_adcb1af3":"%{score} poeng"},"pl":{"score_pts_adcb1af3":"%{score} pkt"},"pt":{"score_pts_adcb1af3":"%{score} pts"},"pt-BR":{"score_pts_adcb1af3":"%{score} pts"},"ru":{"score_pts_adcb1af3":"%{score} баллов"},"sl":{"score_pts_adcb1af3":"%{score} točk"},"sv":{"score_pts_adcb1af3":"%{score} poäng"},"sv-x-k12":{"score_pts_adcb1af3":"%{score} poäng"},"tr":{"score_pts_adcb1af3":"%{score} puan"},"uk":{"score_pts_adcb1af3":"%{score}балів"},"zh-Hans":{"score_pts_adcb1af3":"%{score} 分"},"zh-Hant":{"score_pts_adcb1af3":"%{score} 分"}}'))
var _=c["default"].scoped("cyoe_assignment_sidebar_score")
var s=t("FdVj")
const i=e=>{const o=s["a"].parse(e)
return!isNaN(o)&&isFinite(o)}
const d=e=>!!e&&!!e.grading_scheme
const u=e=>{const o=e?e.grading_type:a.percent.key
if((o===a.letter_grade.key||o===a.gpa_scale.key)&&!d(e))return a.percent.key
return o}
const p=(e,o)=>{const t=u(o)
return t===a.points.key?f(e,o):t===a.letter_grade.key||t===a.gpa_scale.key?g(e,o):h(e)}
const k=(e,o,t)=>{e||(e=t?"1":"0")
return b(p(e,o),o)}
const b=(e,o)=>{const t=u(o)
return t===a.points.key?_.t("%{score} pts",{score:_.n(e,{precision:2,strip_insignificant_zeros:true})}):t===a.letter_grade.key||t===a.gpa_scale.key?e:_.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const f=(e,o)=>{if(!i(e))return e
if(0===e)return"0"
const t=s["a"].parse(e)
const c=Number(o.points_possible)||100
return parseFloat((t*c).toFixed(2))}
const g=(e,o)=>{if(""===e)return""
const t=s["a"].parse(e)
const c={letter:null,score:-Infinity}
for(const e in o.grading_scheme){const l=s["a"].parse(o.grading_scheme[e])
if(l<=t&&l>c.score||0===l&&l>t){c.score=l
c.letter=e}}return c.letter?c.letter:t}
const h=e=>{if(!i(e))return e
return Math.floor(100*e)}
const m=(e,o)=>{if("string"===typeof e&&o.grading_type!==a.letter_grade.key&&o.grading_type!==a.gpa_scale.key){const t=s["a"].parse(e.replace(/%$/,""))
if(!isNaN(t))return b(t,o)}return e}},bj3y:function(e,o,t){"use strict"
t.r(o)
t.d(o,"whitelist",(function(){return l}))
t.d(o,"ignorelist",(function(){return r}))
var c=t("fhP7")
const l=["requestFullWindowLaunch","lti.resourceImported","toggleCourseNavigationMenu"]
const r=["A2ExternalContentReady","LtiDeepLinkingResponse",c["i"],c["b"],c["j"]]},fhP7:function(e,o,t){"use strict"
t.d(o,"e",(function(){return c}))
t.d(o,"f",(function(){return l}))
t.d(o,"g",(function(){return r}))
t.d(o,"h",(function(){return n}))
t.d(o,"k",(function(){return a}))
t.d(o,"i",(function(){return _}))
t.d(o,"b",(function(){return s}))
t.d(o,"j",(function(){return i}))
t.d(o,"c",(function(){return d}))
t.d(o,"d",(function(){return u}))
t.d(o,"a",(function(){return p}))
const c="mentions-marker"
const l="span#"+c
const r="mention-menu"
const n="span#mention-menu"
const a=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const _="mentions.NavigationEvent"
const s="mentions.InputChangeEvent"
const i="mentions.SelectionEvent"
const d={backspace:8,enter:13,up:38,down:40,escape:27}
const u={[d.up]:"UpArrow",[d.down]:"DownArrow",[d.enter]:"Enter"}
const p={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,o)=>`${e}-mention-popup-item-${o}`}},jFoo:function(e,o,t){"use strict"
t.d(o,"a",(function(){return p}))
var c=t("ouhR")
var l=t.n(c)
t("r2Yr")
var r=t("gI0r")
var n=t("oG6o")
var a=t("vBsS")
let _
function s(e){i()
_=function(o){return o.returnValue=e||""}
window.addEventListener("beforeunload",_)}function i(){if(_){window.removeEventListener("beforeunload",_)
_=null}}function d(e){const o=document.getElementsByTagName("IFRAME")
for(let t=0;t<o.length;t+=1)if(o[t].contentWindow===e)return o[t]
return null}function u(e){if(e.data.source&&"react-devtools-bridge"===e.data.source)return
if(e.data.messageType){Object(a["default"])(e)
return}let o
try{o="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return}try{switch(o.subject){case"lti.frameResize":const c=new n["a"]
var t=o.height
t<=0&&(t=1)
const a=c.tool_content_wrapper(o.token||e.origin).data("height_overridden",true)
if(a.length>0)c.resize_tool_content_wrapper(t,a)
else{const o=d(e.source)
if(o){"number"===typeof t&&(t+="px")
o.height=t
o.style.height=t}}break
case"lti.fetchWindowSize":{const t=d(e.source)
if(t){o.height=window.innerHeight
o.width=window.innerWidth
o.offset=l()(".tool_content_wrapper").offset()
o.footer=l()("#fixed_bottom").height()||0
o.scrollY=window.scrollY
const e=JSON.stringify(o)
t.contentWindow.postMessage(e,"*")}break}case"lti.showModuleNavigation":true!==o.show&&false!==o.show||l()(".module-sequence-footer").toggle(o.show)
break
case"lti.scrollToTop":l()("html,body").animate({scrollTop:l()(".tool_content_wrapper").offset().top},"fast")
break
case"lti.setUnloadMessage":s(Object(r["a"])(o.message))
break
case"lti.removeUnloadMessage":i()
break
case"lti.screenReaderAlert":l.a.screenReaderFlashMessageExclusive("string"===typeof o.body?o.body:JSON.stringify(o.body))
break
case"lti.enableScrollEvents":{const o=d(e.source)
if(o){let e
window.addEventListener("scroll",()=>{e&&window.cancelAnimationFrame(e)
e=window.requestAnimationFrame(()=>{const e=JSON.stringify({subject:"lti.scroll",scrollY:window.scrollY})
o.contentWindow.postMessage(e,"*")})},false)}break}}}catch(e){(console.error||console.log).call(console,"invalid message received from")}}function p(){window.addEventListener("message",e=>{""!==e.data&&u(e)})}},oG6o:function(e,o,t){"use strict"
t.d(o,"a",(function(){return r}))
var c=t("ouhR")
var l=t.n(c)
class r{constructor(e){this.minToolHeight=e||450}sanitizedWrapperId(e){var o
return null===e||void 0===e||null===(o=e.toString())||void 0===o?void 0:o.replace(/[^a-zA-Z0-9_-]/g,"")}tool_content_wrapper(e){let o=l()(`div[data-tool-wrapper-id*='${this.sanitizedWrapperId(e)}']`)
o.length<=0&&1===l()(".tool_content_wrapper").length&&(o=l()(".tool_content_wrapper"))
return o}resize_tool_content_wrapper(e,o){let t=e
"number"!==typeof t&&(t=this.minToolHeight)
const c=o||this.tool_content_wrapper()
c.height(!e||this.minToolHeight>t?this.minToolHeight:t)}}},vBsS:function(e,o,t){"use strict"
t.r(o)
t.d(o,"ltiState",(function(){return l}))
var c=t("bj3y")
const l={}
const r=async e=>{const o=e.data,l=o.messageType,r=o.data
let n
if(c["ignorelist"].includes(l))return false
if(!c["whitelist"].includes(l)){console.error("invalid messageType: "+l)
return false}try{const e=await t("JrkR")(`./${l}.js`)
n=e.default
n(r)
return true}catch(e){console.error(`Error loading or executing message handler for "${l}"`,e)}}
o["default"]=r}}])

//# sourceMappingURL=64-c-d4ace60a1e.js.map