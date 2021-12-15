(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[41],{"08kA":function(e,n,t){"use strict"
var a=t("s4NR"),r=t("CxY0"),s=t("U6jy")
function o(e){return e&&e.rel}function d(e,n){function t(t){e[t]=s(n,{rel:t})}n.rel.split(/\s+/).forEach(t)
return e}function c(e,n){var t=n.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
t&&(e[t[1]]=t[2])
return e}function i(e){try{var n=e.match(/<?([^>]*)>(.*)/),t=n[1],o=n[2].split(";"),d=r.parse(t),i=a.parse(d.query)
o.shift()
var _=o.reduce(c,{})
_=s(i,_)
_.url=t
return _}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(i).filter(o).reduce(d,{})}},BrAc:function(e,n,t){"use strict"
var a=t("vDqi")
var r=t.n(a)
r.a.defaults.xsrfCookieName="_csrf_token"
r.a.defaults.xsrfHeaderName="X-CSRF-Token"
const s=r.a.defaults.headers.common.Accept
r.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+s
r.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
n["a"]=r.a},HeaX:function(e,n,t){"use strict"
t.d(n,"a",(function(){return y}))
var a=t("An8g")
var r=t("Ff2n")
var s=t("HGxv")
var o=t("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
t("jQeR")
t("0sPK")
var d=s["default"].scoped("canvas_modal")
var c=t("q1tI")
var i=t.n(c)
t("17x9")
var _=t("Mmr1")
var l=t("n12J")
var b=t("TstA")
var u=t("msMH")
var g=t("Dibh")
var h=t("RtK/")
var f=t("qwzJ")
var p=t("1sWr")
var v=t.n(p)
const m=["padding","errorSubject","errorCategory","errorImageUrl","label","title","onDismiss","children","footer","closeButtonSize"]
y.defaultProps={padding:"small",errorImageUrl:v.a,footer:null,title:null,closeButtonSize:"small"}
function y(e){let n=e.padding,t=e.errorSubject,s=e.errorCategory,o=e.errorImageUrl,c=e.label,p=e.title,v=e.onDismiss,y=e.children,j=e.footer,k=e.closeButtonSize,C=Object(r["a"])(e,m)
null==p&&(p=c)
return i.a.createElement(g["a"],Object.assign({label:c,onDismiss:v},C),Object(a["a"])(g["a"].Header,{},void 0,Object(a["a"])(b["a"],{},void 0,Object(a["a"])(b["a"].Item,{grow:true},void 0,Object(a["a"])(u["a"],{},void 0,p)),Object(a["a"])(b["a"].Item,{},void 0,Object(a["a"])(_["a"],{onClick:v,size:k},void 0,d.t("Close"))))),Object(a["a"])(g["a"].Body,{padding:n},void 0,Object(a["a"])(l["a"],{as:"div",height:"100%"},void 0,Object(a["a"])(h["a"],{errorComponent:Object(a["a"])(f["a"],{imageUrl:o,errorSubject:t,errorCategory:s})},void 0,y))),j&&Object(a["a"])(g["a"].Footer,{},void 0,"function"===typeof j?j():j))}},Jd0u:function(e,n,t){"use strict"
t.d(n,"a",(function(){return l}))
var a=t("VTBJ")
var r=t("ouhR")
var s=t.n(r)
var o=t("FOCd")
var d=t("08kA")
var c=t.n(d)
var i=t("etQE")
function _({path:e,params:n}){const t=s.a.param(n)
if(!t.length)return e
return`${e}?${t}`}async function l({path:e,method:n="GET",headers:t={},params:r={},body:s,fetchOpts:d={}}){const l=Object(a["a"])({},i["e"])
l.headers["X-CSRF-Token"]=Object(o["a"])("_csrf_token")
if(s&&"string"!==typeof s){s=JSON.stringify(s)
l.headers["Content-Type"]="application/json"}Object.assign(l.headers,t)
Object.assign(l,d)
const b=_({path:e,params:r})
const u=await fetch(b,Object(a["a"])({body:s,method:n},l))
if(!u.ok){const e=new Error(`doFetchApi received a bad response: ${u.status} ${u.statusText}`)
e.response=u
throw e}const g=c()(u.headers.get("Link"))
const h=await u.text()
const f=h.length>0?JSON.parse(h):null
return{json:f,response:u,link:g}}},Nuch:function(e,n,t){"use strict"
t.d(n,"a",(function(){return u}))
var a=t("An8g")
var r=t("Ff2n")
var s=t("HGxv")
var o=t("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"copy_to_64f8456b":"نسخ إلى..."},"ca":{"copy_to_64f8456b":"Copia a..."},"cy":{"copy_to_64f8456b":"Copïo I..."},"da":{"copy_to_64f8456b":"Kopier til ..."},"da-x-k12":{"copy_to_64f8456b":"Kopier til ..."},"de":{"copy_to_64f8456b":"Kopieren nach ..."},"en-AU":{"copy_to_64f8456b":"Copy To..."},"en-AU-x-unimelb":{"copy_to_64f8456b":"Copy To..."},"en-CA":{"copy_to_64f8456b":"Copy To..."},"en-GB":{"copy_to_64f8456b":"Copy To..."},"en-GB-x-ukhe":{"copy_to_64f8456b":"Copy To..."},"es":{"copy_to_64f8456b":"Copiar a..."},"fa":{"copy_to_64f8456b":"کپی به ..."},"fi":{"copy_to_64f8456b":"Kopioi kohteeseen..."},"fr":{"copy_to_64f8456b":"Copier dans..."},"fr-CA":{"copy_to_64f8456b":"Copié à…"},"ht":{"copy_to_64f8456b":"Kopye Nan..."},"is":{"copy_to_64f8456b":"Afrita til…"},"it":{"copy_to_64f8456b":"Copia a..."},"ja":{"copy_to_64f8456b":"コピー先..."},"mi":{"copy_to_64f8456b":"Tārua kī ..."},"nb":{"copy_to_64f8456b":"Kopier til..."},"nb-x-k12":{"copy_to_64f8456b":"Kopier til..."},"nl":{"copy_to_64f8456b":"Kopiëren naar..."},"nn":{"copy_to_64f8456b":"Kopier til..."},"pl":{"copy_to_64f8456b":"Kopiuj do..."},"pt":{"copy_to_64f8456b":"Copiar para..."},"pt-BR":{"copy_to_64f8456b":"Cópia para..."},"ru":{"copy_to_64f8456b":"Копировать в..."},"sv":{"copy_to_64f8456b":"Kopiera till..."},"sv-x-k12":{"copy_to_64f8456b":"Kopiera till..."},"zh-Hans":{"copy_to_64f8456b":"复制到..."},"zh-Hant":{"copy_to_64f8456b":"複製到..."}}'))
t("jQeR")
t("0sPK")
var d=s["default"].scoped("direct_share_course_tray")
var c=t("q1tI")
var i=t.n(c)
var _=t("l0h0")
const l=["sourceCourseId","contentSelection","onDismiss"]
const b=Object(c["lazy"])(()=>Promise.all([t.e(5),t.e(9),t.e(10),t.e(13),t.e(139),t.e(4052)]).then(t.bind(null,"dpkT")))
function u(e){let n=e.sourceCourseId,t=e.contentSelection,s=e.onDismiss,o=Object(r["a"])(e,l)
return i.a.createElement(_["a"],Object.assign({label:d.t("Copy To..."),placement:"end",onDismiss:s,padding:"medium"},o),Object(a["a"])(b,{sourceCourseId:n,contentSelection:t,onCancel:s}))}},QbG7:function(e,n,t){"use strict"
t.d(n,"a",(function(){return j}))
var a=t("An8g")
var r=t("VTBJ")
var s=t("ODXe")
var o=t("Ff2n")
var d=t("HGxv")
var c=t("8WeW")
Object(c["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","content_share_started_successfully_2c37fb79":"تم بدء مشاركة المحتوى بنجاح","error_starting_content_share_18fb1532":"حدث خطأ أثناء بدء مشاركة المحتوى","loading_bde52856":"يتم الآن التحميل...","send_e3bd0ed0":"إرسال","send_to_b940900a":"إرسال إلى ...","starting_content_share_2d8c2999":"جارٍ بدء مشاركة المحتوى"},"ca":{"cancel_caeb1e68":"Cancel·la","content_share_started_successfully_2c37fb79":"S\'ha començat a compartir el contingut correctament","error_starting_content_share_18fb1532":"Error en comença a compartir el contingut","loading_bde52856":"S\'està carregant","send_e3bd0ed0":"Envia","send_to_b940900a":"Envia a...","starting_content_share_2d8c2999":"S\'està començant a compartir el contingut"},"cy":{"cancel_caeb1e68":"Canslo","content_share_started_successfully_2c37fb79":"Rhannu cynnwys wedi dechrau\'n llwyddiannus","error_starting_content_share_18fb1532":"Gwall wrth ddechrau rhannu cynnwys","loading_bde52856":"Wrthi’n llwytho","send_e3bd0ed0":"Anfon","send_to_b940900a":"Anfon At...","starting_content_share_2d8c2999":"Dechrau rhannu cynnwys"},"da":{"cancel_caeb1e68":"Annuller","content_share_started_successfully_2c37fb79":"Indholdsdelingen blev påbegyndt","error_starting_content_share_18fb1532":"Fejl ved påbegyndelse af indholdsdeling","loading_bde52856":"Indlæser","send_e3bd0ed0":"Send","send_to_b940900a":"Send til ...","starting_content_share_2d8c2999":"Starter indholdsdeling"},"da-x-k12":{"cancel_caeb1e68":"Annuller","content_share_started_successfully_2c37fb79":"Indholdsdelingen blev påbegyndt","error_starting_content_share_18fb1532":"Fejl ved påbegyndelse af indholdsdeling","loading_bde52856":"Indlæser","send_e3bd0ed0":"Send","send_to_b940900a":"Send til ...","starting_content_share_2d8c2999":"Starter indholdsdeling"},"de":{"cancel_caeb1e68":"Abbrechen","content_share_started_successfully_2c37fb79":"Inhaltsfreigabe erfolgreich gestartet","error_starting_content_share_18fb1532":"Fehler beim Starten der Inhaltsfreigabe","loading_bde52856":"Wird geladen","send_e3bd0ed0":"Senden","send_to_b940900a":"Senden an ...","starting_content_share_2d8c2999":"Starten der Inhaltsfreigabe"},"el":{"cancel_caeb1e68":"Ακύρωση","loading_bde52856":"Φόρτωση","send_e3bd0ed0":"Αποστολή"},"en-AU":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-CA":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-GB":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","loading_bde52856":"Loading","send_e3bd0ed0":"Send"},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"es":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"El contenido comenzó a compartirse correctamente","error_starting_content_share_18fb1532":"Ocurrió un error al comenzar a compartir contenido","loading_bde52856":"Cargando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar a...","starting_content_share_2d8c2999":"Comenzando a compartir contenido"},"fa":{"cancel_caeb1e68":"لغو","content_share_started_successfully_2c37fb79":"اشتراک محتوای با موفقیت شروع شد","error_starting_content_share_18fb1532":"خطا در شروع به اشتراک گذاری محتوا","loading_bde52856":"در حال بارگذاری","send_e3bd0ed0":"ارسال","send_to_b940900a":"ارسال به ...","starting_content_share_2d8c2999":"شروع به اشتراک گذاری محتوای"},"fi":{"cancel_caeb1e68":"Peruuta","content_share_started_successfully_2c37fb79":"Sisällön jako aloitettiin onnistuneesti","error_starting_content_share_18fb1532":"Virhe sisällön jaon aloittamisessa","loading_bde52856":"Ladataan","send_e3bd0ed0":"Lähetä","send_to_b940900a":"Lähetä kohteeseen...","starting_content_share_2d8c2999":"Sisällön jako aloitetaan"},"fr":{"cancel_caeb1e68":"Annuler","content_share_started_successfully_2c37fb79":"Le partage de contenu a été lancé avec succès","error_starting_content_share_18fb1532":"Erreur lors du lancement du partage de contenu","loading_bde52856":"En cours de chargement","send_e3bd0ed0":"Envoyer","send_to_b940900a":"Envoyer à...","starting_content_share_2d8c2999":"Lancement du partage de contenu"},"fr-CA":{"cancel_caeb1e68":"Annuler","content_share_started_successfully_2c37fb79":"Le partage de contenu a démarré avec succès","error_starting_content_share_18fb1532":"Une erreur est survenue lors du démarrage du partage de contenu","loading_bde52856":"Chargement","send_e3bd0ed0":"Envoyer","send_to_b940900a":"Envoyer à…","starting_content_share_2d8c2999":"Démarrage du partage de contenu"},"he":{"cancel_caeb1e68":"ביטול","loading_bde52856":"טוען","send_e3bd0ed0":"שליחה"},"ht":{"cancel_caeb1e68":"Anile","content_share_started_successfully_2c37fb79":"Pataj kontni kòmanse ak siksè","error_starting_content_share_18fb1532":"Erè nan demaraj pataj kontni","loading_bde52856":"Chajman","send_e3bd0ed0":"Voye","send_to_b940900a":"Voye Bay...","starting_content_share_2d8c2999":"Demaraj pataj kontni"},"hu":{"cancel_caeb1e68":"Mégse","content_share_started_successfully_2c37fb79":"Tartalom megosztás sikeresen elindult","error_starting_content_share_18fb1532":"Tartalom megosztás elindítása nem sikerült","loading_bde52856":"Töltődik","send_e3bd0ed0":"Küldés","starting_content_share_2d8c2999":"Tartalom megosztás indítása"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","loading_bde52856":"Բեռնում է","send_e3bd0ed0":"Ուղարկել"},"is":{"cancel_caeb1e68":"Hætta við","content_share_started_successfully_2c37fb79":"Efnisdeiling hófst giftusamlega","error_starting_content_share_18fb1532":"Villa við að byrja efnisdeilingu","loading_bde52856":"Sæki","send_e3bd0ed0":"Senda","send_to_b940900a":"Senda til…","starting_content_share_2d8c2999":"Byrja efnisdeilingu"},"it":{"cancel_caeb1e68":"Annulla","content_share_started_successfully_2c37fb79":"La condivisione dei contenuti è iniziata con successo","error_starting_content_share_18fb1532":"Errore nell’avvio della condivisione dei contenuti","loading_bde52856":"Caricamento in corso","send_e3bd0ed0":"Invia","send_to_b940900a":"Invia a...","starting_content_share_2d8c2999":"Inizio della condivisione dei contenuti"},"ja":{"cancel_caeb1e68":"キャンセル","content_share_started_successfully_2c37fb79":"コンテンツの共有が正常に開始されました","error_starting_content_share_18fb1532":"コンテンツの共有開始時にエラー","loading_bde52856":"読み込み中","send_e3bd0ed0":"送信","send_to_b940900a":"送信先...","starting_content_share_2d8c2999":"コンテンツの共有開始中"},"ko":{"cancel_caeb1e68":"취소","send_e3bd0ed0":"보내기"},"mi":{"cancel_caeb1e68":"Whakakore","content_share_started_successfully_2c37fb79":"Te tuari ihirangi i timata pai","error_starting_content_share_18fb1532":"He hapa i te wā e timata ana te tuari ihirangi","loading_bde52856":"E tukuake ana","send_e3bd0ed0":"Tukua","send_to_b940900a":"Tukua ki ...","starting_content_share_2d8c2999":"E timata tuari ihirangi"},"nb":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innholdsdeling startet vellykket","error_starting_content_share_18fb1532":"Avvik under start av innholdsdeling","loading_bde52856":"Laster","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Starter innholdsdeling"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innholdsdeling startet vellykket","error_starting_content_share_18fb1532":"Avvik under start av innholdsdeling","loading_bde52856":"Laster","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Starter innholdsdeling"},"nl":{"cancel_caeb1e68":"Annuleren","content_share_started_successfully_2c37fb79":"Contentshare is gestart","error_starting_content_share_18fb1532":"Fout bij starten van contentshare","loading_bde52856":"Bezig met laden...","send_e3bd0ed0":"Versturen","send_to_b940900a":"Verzenden naar...","starting_content_share_2d8c2999":"Contentshare starten"},"nn":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innhaldsdeling er starta","error_starting_content_share_18fb1532":"Det oppstod ein feil under oppstart av innhaldsdeling","loading_bde52856":"Lastar","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Startar innhaldsdeling"},"pl":{"cancel_caeb1e68":"Anuluj","content_share_started_successfully_2c37fb79":"Pomyślnie rozpoczęto udostępnianie zawartości","error_starting_content_share_18fb1532":"Błąd podczas udostępniania zawartości","loading_bde52856":"Trwa ładowanie","send_e3bd0ed0":"Wyślij","send_to_b940900a":"Wyślij do...","starting_content_share_2d8c2999":"Rozpoczynanie udostępniania zawartości"},"pt":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"O partilhamento de conteúdo foi iniciado com sucesso","error_starting_content_share_18fb1532":"Erro ao iniciar o partilhamento de conteúdo","loading_bde52856":"Carregando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar para...","starting_content_share_2d8c2999":"A iniciar o partilhamento de conteúdo"},"pt-BR":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"Compartilhamento de conteúdo iniciado com sucesso","error_starting_content_share_18fb1532":"Erro ao iniciar compartilhamento de conteúdo","loading_bde52856":"Carregando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar para...","starting_content_share_2d8c2999":"Iniciando compartilhamento de conteúdo"},"ru":{"cancel_caeb1e68":"Отменить","content_share_started_successfully_2c37fb79":"Общий доступ к контенту успешно запущен","error_starting_content_share_18fb1532":"Ошибка запуска общего доступа к контенту","loading_bde52856":"Загрузка","send_e3bd0ed0":"Отправить","send_to_b940900a":"Отправить в...","starting_content_share_2d8c2999":"Запуск общего доступа к контенту"},"sl":{"cancel_caeb1e68":"Prekliči","loading_bde52856":"Nalaganje","send_e3bd0ed0":"Pošlji"},"sv":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innehållsdelning startades","error_starting_content_share_18fb1532":"Fel vid start av innehållsdelning","loading_bde52856":"Laddar","send_e3bd0ed0":"Skicka","send_to_b940900a":"Skicka till...","starting_content_share_2d8c2999":"Startar innehållsdelning"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innehållsdelning startades","error_starting_content_share_18fb1532":"Fel vid start av innehållsdelning","loading_bde52856":"Laddar","send_e3bd0ed0":"Skicka","send_to_b940900a":"Skicka till...","starting_content_share_2d8c2999":"Startar innehållsdelning"},"tr":{"cancel_caeb1e68":"İptal","content_share_started_successfully_2c37fb79":"İçerik paylaşımı başarılı bir şekilde başlatıldı","loading_bde52856":"Yükleniyor","send_e3bd0ed0":"Gönder"},"uk":{"cancel_caeb1e68":"Скасувати","loading_bde52856":"Завантаження","send_e3bd0ed0":"Надіслати"},"zh-Hans":{"cancel_caeb1e68":"取消","content_share_started_successfully_2c37fb79":"内容共享已成功启动","error_starting_content_share_18fb1532":"启动内容共享出错","loading_bde52856":"加载","send_e3bd0ed0":"发送","send_to_b940900a":"发送至...","starting_content_share_2d8c2999":"启动内容共享"},"zh-Hant":{"cancel_caeb1e68":"取消","content_share_started_successfully_2c37fb79":"內容共用已成功開始","error_starting_content_share_18fb1532":"開始內容共用發生錯誤","loading_bde52856":"正在載入","send_e3bd0ed0":"發送","send_to_b940900a":"傳送到...","starting_content_share_2d8c2999":"開始內容共用"}}'))
t("jQeR")
t("0sPK")
var i=d["default"].scoped("direct_share_user_modal")
var _=t("q1tI")
var l=t.n(_)
t("17x9")
var b=t("L+/K")
var u=t("Xx/m")
var g=t("uSnb")
var h=t("n12J")
var f=t("HeaX")
t("XFtX")
var p=t("uloQ")
var v=t("Jd0u")
const m=["contentShare","courseId"]
const y=Object(_["lazy"])(()=>Promise.all([t.e(5),t.e(9),t.e(10),t.e(4019)]).then(t.bind(null,"pdP4")))
function j(e){let n=e.contentShare,t=e.courseId,d=Object(o["a"])(e,m)
const c=Object(_["useState"])([]),j=Object(s["a"])(c,2),k=j[0],C=j[1]
const S=Object(_["useState"])(null),O=Object(s["a"])(S,2),x=O[0],A=O[1]
const E=Object(_["useRef"])(d.open)
function z(){C([])
A(null)}function L(e){k.find(n=>n.id===e.id)||C(k.concat([e]))}function I(e){C(k.filter(n=>n.id!==e.id))}function R(){return Object(v["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:Object(r["a"])(Object(r["a"])({},n),{},{receiver_ids:k.map(e=>e.id)})})}function T(){A("info")
R().then(B).catch(e=>{console.error(e)
e.response&&console.error(e.response)
A("error")})}function B(){Object(p["c"])(i.t("Content share started successfully"))()
d.onDismiss()}function w(){return l.a.createElement(l.a.Fragment,null,Object(a["a"])(u["a"],{onClick:d.onDismiss},void 0,i.t("Cancel")),Object(a["a"])(u["a"],{disabled:0===k.length||"info"===x,variant:"primary",margin:"0 0 0 x-small",onClick:T},void 0,i.t("Send")))}const F=Object(a["a"])(h["a"],{as:"div",textAlign:"center"},void 0,Object(a["a"])(g["a"],{renderTitle:i.t("Loading")}))
if(d.open!==E.current){E.current=d.open
z()}let q=""
"info"===x?q=i.t("Starting content share"):"error"===x&&(q=i.t("Error starting content share"))
const K=q?Object(a["a"])(b["a"],{variant:x},void 0,Object(a["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,q),"info"===x?Object(a["a"])(g["a"],{renderTitle:q,size:"x-small"}):null):null
return l.a.createElement(f["a"],Object.assign({label:i.t("Send To..."),size:"medium"},d,{footer:Object(a["a"])(w,{})}),Object(a["a"])(_["Suspense"],{fallback:F},void 0,K,Object(a["a"])(y,{courseId:t,selectedUsers:k,onUserSelected:L,onUserRemoved:I})))}},"RtK/":function(e,n,t){"use strict"
t.d(n,"a",(function(){return s}))
var a=t("q1tI")
var r=t.n(a)
t("17x9")
class s extends r.a.Component{constructor(...e){super(...e)
this.state={hasError:false,error:null}}static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,n){console.error(e,n)}render(){if(this.state.hasError)return r.a.cloneElement(this.props.errorComponent,{errorSubject:this.state.error.message})
return this.props.children}}},U6jy:function(e,n){e.exports=a
var t=Object.prototype.hasOwnProperty
function a(){var e={}
for(var n=0;n<arguments.length;n++){var a=arguments[n]
for(var r in a)t.call(a,r)&&(e[r]=a[r])}return e}},XFtX:function(e,n,t){"use strict"
var a=t("17x9")
var r=t("lNsk")
const s=Object(a["shape"])({id:a["string"],display_name:a["string"],url:a["string"]})
var o=s
const d=Object(a["shape"])({id:a["string"].isRequired,progress_url:a["string"],user_id:a["string"],workflow_state:Object(a["oneOf"])(["created","exporting","exported","failed"]),attachment:o})
var c=d
const i=["assignment","discussion_topic","page","quiz","module","module_item"]
Object(a["shape"])({id:a["string"].isRequired,name:a["string"].isRequired,content_type:Object(a["oneOf"])(i).isRequired,created_at:a["string"].isRequired,updated_at:a["string"].isRequired,read_state:a["string"].isRequired,sender:r["b"].isRequired,content_export:c})},bJGz:function(e,n,t){"use strict"
t.d(n,"a",(function(){return y}))
var a=t("An8g")
var r=t("Ff2n")
var s=t("HGxv")
var o=t("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
t("jQeR")
t("0sPK")
var d=s["default"].scoped("tray")
var c=t("q1tI")
var i=t.n(c)
t("17x9")
var _=t("Mmr1")
var l=t("n12J")
var b=t("TstA")
var u=t("msMH")
var g=t("Ci/e")
var h=t("RtK/")
var f=t("qwzJ")
var p=t("1sWr")
var v=t.n(p)
const m=["padding","headerPadding","contentPadding","errorSubject","errorCategory","errorImageUrl","label","title","onDismiss","children"]
y.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:v.a}
function y(e){var n,t,s
let o=e.padding,c=e.headerPadding,p=e.contentPadding,v=e.errorSubject,y=e.errorCategory,j=e.errorImageUrl,k=e.label,C=e.title,S=e.onDismiss,O=e.children,x=Object(r["a"])(e,m)
null==c&&(c=`0 0 ${o} 0`)
null==C&&(C=k)
function A(){return Object(a["a"])(b["a"],{as:"div",padding:c},void 0,n||(n=Object(a["a"])(b["a"].Item,{grow:true},void 0,Object(a["a"])(u["a"],{ellipsis:true},void 0,C))),Object(a["a"])(b["a"].Item,{},void 0,Object(a["a"])(_["a"],{onClick:S,size:"small"},void 0,d.t("Close"))))}function E(){return Object(a["a"])(h["a"],{errorComponent:t||(t=Object(a["a"])(f["a"],{imageUrl:j,errorSubject:v,errorCategory:y}))},void 0,s||(s=Object(a["a"])(l["a"],{as:"div",padding:p,width:"100%",height:"100%"},void 0,O)))}return i.a.createElement(g["a"],Object.assign({label:k,onDismiss:S},x),Object(a["a"])(l["a"],{as:"div",padding:o,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(a["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,A(),Object(a["a"])("div",{style:{position:"relative",flex:1}},void 0,E()))))}},l0h0:function(e,n,t){"use strict"
t.d(n,"a",(function(){return g}))
var a=t("An8g")
var r=t("Ff2n")
var s=t("HGxv")
var o=t("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"loading_25990131":"جارٍ التحميل..."},"ca":{"loading_25990131":"S\'està carregant..."},"cy":{"loading_25990131":"Wrthi’n llwytho..."},"da":{"loading_25990131":"Indlæser ..."},"da-x-k12":{"loading_25990131":"Indlæser ..."},"de":{"loading_25990131":"Wird geladen ..."},"el":{"loading_25990131":"Φόρτωση..."},"en-AU":{"loading_25990131":"Loading..."},"en-AU-x-unimelb":{"loading_25990131":"Loading..."},"en-CA":{"loading_25990131":"Loading..."},"en-GB":{"loading_25990131":"Loading..."},"en-GB-x-lbs":{"loading_25990131":"Loading..."},"en-GB-x-ukhe":{"loading_25990131":"Loading..."},"es":{"loading_25990131":"Cargando..."},"fa":{"loading_25990131":"در حال بارگذاری..."},"fi":{"loading_25990131":"Ladataan..."},"fr":{"loading_25990131":"Chargement..."},"fr-CA":{"loading_25990131":"En cours de chargement..."},"he":{"loading_25990131":"טוען..."},"ht":{"loading_25990131":"Chajman..."},"hu":{"loading_25990131":"Töltődik..."},"hy":{"loading_25990131":"Բեռնում է..."},"is":{"loading_25990131":"Hleð inn..."},"it":{"loading_25990131":"Caricamento in corso..."},"ja":{"loading_25990131":"読み込み中・・・"},"ko":{"loading_25990131":"로드하는 중..."},"mi":{"loading_25990131":"E uta ana ...."},"nb":{"loading_25990131":"Laster..."},"nb-x-k12":{"loading_25990131":"Laster..."},"nl":{"loading_25990131":"Bezig met laden..."},"nn":{"loading_25990131":"Lastar..."},"pl":{"loading_25990131":"Wczytywanie..."},"pt":{"loading_25990131":"A carregar..."},"pt-BR":{"loading_25990131":"Carregando..."},"ru":{"loading_25990131":"Выполняется загрузка..."},"sl":{"loading_25990131":"Nalaganje ..."},"sv":{"loading_25990131":"Läser in ..."},"sv-x-k12":{"loading_25990131":"Läser in ..."},"tr":{"loading_25990131":"Yükleniyor..."},"uk":{"loading_25990131":"Завантаження..."},"zh-Hans":{"loading_25990131":"加载中……"},"zh-Hant":{"loading_25990131":"正在載入……"}}'))
t("jQeR")
t("0sPK")
var d=s["default"].scoped("canvas_lazy_tray")
var c=t("q1tI")
var i=t.n(c)
var _=t("bJGz")
var l=t("uSnb")
var b=t("n12J")
const u=["children"]
function g(e){let n=e.children,t=Object(r["a"])(e,u)
const s=Object(a["a"])(b["a"],{as:"div",textAlign:"center"},void 0,Object(a["a"])(l["a"],{renderTitle:d.t("Loading...")}))
return i.a.createElement(_["a"],t,Object(a["a"])(c["Suspense"],{fallback:s},void 0,n))}},lNsk:function(e,n,t){"use strict"
t.d(n,"a",(function(){return s}))
var a=t("17x9")
const r=Object(a["shape"])({id:a["string"].isRequired,display_name:a["string"].isRequired,avatar_image_url:a["string"]})
n["b"]=r
Object(a["shape"])({id:a["string"].isRequired,name:a["string"].isRequired,avatar_url:a["string"],email:a["string"]})
const s=Object(a["shape"])({id:a["string"].isRequired,name:a["string"].isRequired,avatar_image_url:a["string"],html_url:a["string"].isRequired})}}])

//# sourceMappingURL=41-c-eadd35bf0e.js.map