(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[42],{C8i9:function(e,a,t){"use strict"
var n=t("ouhR")
var i=t.n(n)
var o=t("Y/W1")
var _=t.n(o)
var r=t("QYKH")
var s=t("EyBU")
t("dhbk")
var l=function(e,a){return function(){return e.apply(a,arguments)}},u=function(e,a){for(var t in a)d.call(a,t)&&(e[t]=a[t])
function n(){this.constructor=e}n.prototype=a.prototype
e.prototype=new n
e.__super__=a.prototype
return e},d={}.hasOwnProperty,c=[].slice
a["a"]=function(e){u(a,e)
function a(){this.externalToolEnabled=l(this.externalToolEnabled,this)
return a.__super__.constructor.apply(this,arguments)}a.prototype.url=function(){return this.isNew()?a.__super__.url.apply(this,arguments):"/api/v1/files/"+this.id}
a.prototype.initialize=function(e,t){null==t&&(t={})
this.preflightUrl=t.preflightUrl
return a.__super__.initialize.apply(this,arguments)}
a.prototype.save=function(e,t){var n,o,_,r,l,u
null==e&&(e={})
null==t&&(t={})
if(!this.get("file"))return a.__super__.save.apply(this,arguments)
this.set(e)
n=i.a.Deferred()
l=(d=this,function(e){d.set(e)
n.resolve(e)
return"function"===typeof t.success?t.success(e):void 0})
var d
r=function(e){n.reject(e)
return"function"===typeof t.error?t.error(e):void 0}
o=this.get("file")
_=(o.value||o.name).split(/[\/\\]/).pop()
o=o.files[0]
u={name:_,on_duplicate:"rename"}
Object(s["uploadFile"])(this.preflightUrl,u,o).then(l)["catch"](r)
return n}
a.prototype.isFile=true
a.prototype.toJSON=function(){var e
if(!this.get("file"))return a.__super__.toJSON.apply(this,arguments)
return _.a.pick.apply(_.a,[this.attributes,"file"].concat(c.call(_.a.keys(null!=(e=this.uploadParams)?e:{}))))}
a.prototype.present=function(){return _.a.clone(this.attributes)}
a.prototype.externalToolEnabled=function(e){var a
if(e.accept_media_types&&e.accept_media_types.length>0){a=this.get("content-type")
return _.a.find(e.accept_media_types.split(","),(function(e){var t
t=new RegExp("^"+e.replace("*",".*")+"$")
return a.match(t)}))}return true}
return a}(r["a"])},EyBU:function(e,a,t){"use strict"
t.r(a)
t.d(a,"uploadFile",(function(){return v}))
t.d(a,"completeUpload",(function(){return f}))
t.d(a,"submissionCommentAttachmentsUpload",(function(){return h}))
t.d(a,"uploadFiles",(function(){return m}))
var n=t("VTBJ")
var i=t("BrAc")
var o=t("Qyje")
var _=t.n(o)
var r=t("HGxv")
var s=t("8WeW")
Object(s["a"])(JSON.parse('{"ar":{"canvas_failed_to_complete_the_upload_864a4c0f":"فشل Canvas في إكمال التحميل.","canvas_failed_to_initiate_the_upload_8e3824d5":"فشل Canvas في بدء التحميل.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"يتعذر نقل الملف إلى خدمة التخزين. قد تكون الخدمة معطلة أو قد تحتاج إلى إعادة تسجيل الدخول إلى Canvas."},"ca":{"canvas_failed_to_complete_the_upload_864a4c0f":"El Canvas no ha pogut completar la càrrega.","canvas_failed_to_initiate_the_upload_8e3824d5":"El Canvas no ha pogut iniciar la càrrega.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No es pot transmetre el fitxer al servei d\'emmagatzematge. Pot ser que el servei no funcioni o que hàgiu de tornar a iniciar la sessió al Canvas."},"cy":{"canvas_failed_to_complete_the_upload_864a4c0f":"Mae Canvas wedi methu cwblhau’r broses llwytho i fyny.","canvas_failed_to_initiate_the_upload_8e3824d5":"Mae Canvas wedi methu rhoi’r broses llwytho i fyny ar waith.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Doedd dim modd trosglwyddo ffeil i’r gwasanaeth storio. Efallai nad yw’r gwasanaeth ar gael ar hyn o bryd, neu efallai y bydd angen i chi fewngofnodi eto i Canvas."},"da":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke afslutte uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"da-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fuldføre uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"de":{"canvas_failed_to_complete_the_upload_864a4c0f":"Upload fehlgeschlagen","canvas_failed_to_initiate_the_upload_8e3824d5":"Initialisierung des Upload fehlgeschlagen","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."},"en-AU":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-AU-x-unimelb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-lbs":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-ukhe":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"es":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas no pudo completar la carga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas no pudo iniciar la carga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No se pudo transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},"fa":{"canvas_failed_to_complete_the_upload_864a4c0f":"کانواس نتوانست بارگذاری را انجام دهد.","canvas_failed_to_initiate_the_upload_8e3824d5":"کانواس موفق به آپلود نشد","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"انتقال فایل به سرویس ذخیره سازی امکان پذیر نیست. ممکن است سرویس از کار افتاده باشد و یا لازم باشد دوباره وارد کانواس شوید."},"fi":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas ei onnistunut suorittamaan latausta loppuun.","canvas_failed_to_initiate_the_upload_8e3824d5":"Latauksen aloittaminen epäonnistui.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Tiedoston siirto tallennuspalveluun epäonnistui. Palvelu saattaa olla alhaalla tai sinun täytyy ehkä kirjautua uudelleen Canvasiin."},"fr":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas n\'a pas réussi à terminer le téléchargement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pas réussi à lancer le téléchargement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible de transmettre le fichier au service de stockage. Le service peut être en panne ou vous devez peut-être vous reconnecter à Canvas."},"fr-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas a échoué de conclure le téléversement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pu commencer le téléversement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible d’envoyer le fichier au service de stockage. Le service peut être inactif ou vous pourriez avoir besoin de vous connecter de nouveau à Canvas."},"ht":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas pa reyisi fini telechajman an.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas pa reyisi lanse telechajman an.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Enposib pou transmèt fichye nan sèvis estokaj la. Petèt ke sèvis la an pàn oswa ou ka bezwen rekonekte sou Canvas."},"hu":{"canvas_failed_to_complete_the_upload_864a4c0f":"A Canvas nem tudta a feltöltést feldolgozni","canvas_failed_to_initiate_the_upload_8e3824d5":"A Canvas nem tudta elindítani a feltöltést.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nem sikerült elküldeni a fájlt a tár szolgáltatásnak. Lehet, hogy a szolgáltatás nem működik, vagy újra be kell lépnie a Canvas-ba."},"is":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas tókst ekki að klára upphalið","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas gat ekki byrjað upphalið.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Ekki tókst að senda skjal í geymslu. Annaðhvort liggur þjónustan niðri eða þú þarft að endurinnskrá þig á Canvas."},"it":{"canvas_failed_to_complete_the_upload_864a4c0f":"Impossibile completare il caricamento in Canvas.","canvas_failed_to_initiate_the_upload_8e3824d5":"Impossibile inizializzare il caricamento in Canvas.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossibile trasmettere il file al servizio di archiviazione. Il servizio potrebbe essere inattivo o potrebbe essere necessario effettuare nuovamente l\'accesso a Canvas."},"ja":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas はアップロードを完了できませんでした。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas はアップロードを開始できませんでした。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"ストレージサービスにファイルを送信できません。サービスが停止しているか、Canvas に再度ログインする必要があるかもしれません。"},"mi":{"canvas_failed_to_complete_the_upload_864a4c0f":"I rahua a Canvas ki te whakaoti i te tukuake.","canvas_failed_to_initiate_the_upload_8e3824d5":"I rahua a Canvas ki te tīmata i te tukuake.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kāore e taea te tuku kōnae ki te ratonga rokiroki. Ka mutu te ratonga, ka hiahia pea koe ki te whakauru atu anō ki Canvas."},"nb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikke overføre fil til lagringsenhet. Denne tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nb-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre fil til lagringsenhet. Tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan de upload niet uitvoeren.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kan de upload niet initiëren.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan bestand niet overzetten naar de opslagservice. Misschien is de service niet geactiveerd of moet je je opnieuw aanmelden bij Canvas."},"nn":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikkje fullføre opplastinga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikkje starte opplastinga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikkje overføre fil til lagringsteneste. Tenesta kan vere nede eller du må logge inn i Canvas på nytt."},"pl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas nie może ukończyć przesyłania.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas nie może rozpocząć przesyłania.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nie można przesłać pliku do usługi przechowywania. Usługa może być niedostępna lub wymagane jest ponowne zalogowanie w Canvas."},"pt":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou ao concluir o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou ao iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Não é possível transmitir o ficheiro para o serviço de armazenamento. O serviço pode estar inativo ou você pode precisar fazer o login novamente no Canvas."},"pt-BR":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou em importar o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou em iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Incapaz de transmitir o arquivo para o serviço de armazenamento. O serviço pode estar interrompido ou você precisa fazer login novamente no Canvas."},"ru":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas не удается завершить отправку.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas не удается запустить отправку.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Невозможно передать файл на устройство хранения. Сервис может быть отключен, или вам может быть необходимо выйти и снова войти в Canvas."},"sl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Zaključevanje nalaganja v sistemu Canvas ni uspelo.","canvas_failed_to_initiate_the_upload_8e3824d5":"Zagon nalaganja v sistemu Canvas ni uspel.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Datoteke ni mogoče prenesti v storitev shranjevanja. Storitev morda ne deluje ali pa se morate znova prijaviti v sistem Canvas."},"sv":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"sv-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"zh-Hans":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 无法完成上传。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 无法启动上传。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"无法将文件传输到存储服务。服务可能中断，或者您可能需要重新登录到 Canvas。"},"zh-Hant":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 無法完成上傳。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 無法啟動上傳。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"無法將檔案傳輸到儲存空間服務。該服務可能已關閉，或者您可能需要重新登入 Canvas。"}}'))
t("jQeR")
t("0sPK")
var l=r["default"].scoped("upload_file")
var u=t("gBVS")
function d(e){if("Network Error"===e.message){const a=new Error(l.t("Canvas failed to initiate the upload."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function c(e){if("Network Error"===e.message){const a=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function p(e){if("Network Error"===e.message){const a=new Error(l.t("Canvas failed to complete the upload."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function v(e,a,t,n=i["a"],o){if(!t&&!a.url)throw new Error("expected either a file to upload or a url to clone",{file:t,preflightData:a})
if(t&&a.url)throw new Error("can't upload with both a file object and a url to clone",{file:t,preflightData:a})
a.no_redirect=true
a["attachment[context_code]"]&&(a=_.a.stringify(a))
return n.post(e,a).catch(d).then(e=>f(e.data,t,{ajaxLib:n,onProgress:o}))}function f(e,a,t={}){const o=t.ajaxLib||i["a"]
const r=t.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(a&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!a&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const s=e,l=s.upload_url,d=s.progress
if(!l)return Object(u["a"])(d,{ajaxLib:o}).catch(p)
let v=e,f=v.file_param,h=v.upload_params,m=v.success_url
f=f||"file"
h=h||{}
m=m||h.success_url
const g=!!m
const b=new FormData
Object.entries(h).forEach(([e,a])=>b.append(e,a))
a&&b.append(f,a,t.filename)
const k=o.post(l,b,Object(n["a"])({responseType:g?"document":"json",onUploadProgress:t.onProgress,withCredentials:!g},r))
return k.catch(c).then(e=>{if(d)return Object(u["a"])(d,{ajaxLib:o}).catch(p)
let a,n={}
if(m){const t=e.data,i=t.Bucket,o=t.Key,_=t.ETag
a=m
n={bucket:i,key:o,etag:_}}else if(201===e.status&&!t.ignoreResult){a=e.data.location
n={}}if(a){t.includeAvatar&&(n.include="avatar")
n=_.a.stringify(n)
n&&(a=-1!==a.indexOf("?")?`${a}&${n}`:`${a}?${n}`)
return o.get(a).then(({data:e})=>e).catch(p)}return e.data})}function h(e,a,t){const n=`/api/v1/courses/${a}/assignments/${t}/submissions/self/comments/files`
const i=e.map(e=>{const a={name:e.name,content_type:e.type}
return v(n,a,e)})
return Promise.all(i)}function m(e,a){const t=e.map(e=>e.url?v(a,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):v(a,{name:e.name,content_type:e.type},e))
return Promise.all(t)}},QYKH:function(e,a,t){"use strict"
var n=t("mX+G")
var i=t.n(n)
var o=t("Y/W1")
var _=t.n(o)
var r=t("s9Pr")
var s=function(e,a){for(var t in a)l.call(a,t)&&(e[t]=a[t])
function n(){this.constructor=e}n.prototype=a.prototype
e.prototype=new n
e.__super__=a.prototype
return e},l={}.hasOwnProperty
a["a"]=function(e){s(a,e)
function a(){return a.__super__.constructor.apply(this,arguments)}a.prototype.displayName=function(){return this.get("display_name")||this.get("name")}
a.prototype.destinationIsSameContext=function(e){var a,t,n,i,o,_,s,l
s=(a=this.get("context_asset_string"))?Object(r["a"])(a,false):[null!=(i=this.collection.parentFolder)?i.get("context_type"):void 0,null!=(o=this.collection.parentFolder)&&null!=(_=o.get("context_id"))?_.toString():void 0],n=s[0],t=s[1]
return n&&t&&n.toLowerCase()===e.get("context_type").toLowerCase()&&t===(null!=(l=e.get("context_id"))?l.toString():void 0)}
a.prototype.moveTo=function(e,a){null==a&&(a={})
return this.destinationIsSameContext(e)?this.moveToFolder(e,a):this.copyToContext(e,a)}
a.prototype.moveToFolder=function(e,a){var t
null==a&&(a={})
t=this.setAttributes({parent_folder_id:e.id},a)
$.extend(t,{parent_folder_id:e.id})
return this.save({},{attrs:t}).then((n=this,function(){n.collection.remove(n)
return n.updateCollection(n,e,a)}))
var n}
a.prototype.copyToContext=function(e,a){var t,n,i,o,r,s
null==a&&(a={})
t=this.setAttributes($.extend({},this.attributes),a)
r=this.isFile?"file":"folder"
t["source_"+r+"_id"]=t.id
delete t.id
n=new this.constructor(_.a.omit(t,"id","parent_folder_id","parent_folder_path"))
i=this.updateCollection(n,e,a)
n.url=i.url
this.set("url",i.url)
o="copy_"+r
s="/api/v1/folders/"+e.attributes.id+"/"+o
return n.save(t,{url:s})}
a.prototype.setAttributes=function(e,a){null==e&&(e={})
null==a&&(a={})
"overwrite"===a.dup?$.extend(e,{on_duplicate:"overwrite"}):"rename"===a.dup&&(a.name?$.extend(e,{display_name:a.name,name:a.name,on_duplicate:"rename"}):$.extend(e,{on_duplicate:"rename"}))
return e}
a.prototype.updateCollection=function(e,a,t){var n,i
i=this.isFile?"files":"folders"
n=a[i]
"overwrite"===t.dup&&n.remove(n.where({display_name:e.get("display_name")}))
n.add(e,{merge:true})
return n}
return a}(i.a.Model)},gBVS:function(e,a,t){"use strict"
t.d(a,"a",(function(){return o}))
var n=t("BrAc")
function i(e){return new Promise(a=>{setTimeout(a,e)})}function o(e,a={}){const t=a.ajaxLib||n["a"]
const _=e.url,r=e.workflow_state,s=e.results,l=e.message
if("queued"===r||"running"===r){let e=a.interval
e||(e=1e3)
e<100&&(e=100)
return i(e).then(()=>t.get(_)).then(e=>{const t=e.data
return o(t,a)})}return"completed"===r?Promise.resolve(s):Promise.reject(l)}}}])

//# sourceMappingURL=42-c-d57e15b777.js.map