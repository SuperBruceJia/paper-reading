(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[47],{"65NJ":function(i,e,l){"use strict"
var t=l("ouhR")
var u=l.n(t)
l("w2hD")
u.a.fn.scrollToVisible=function(i){const e={}
const l=u()(i)
if(0===l.length)return
let t=l.offset(),s=l.outerWidth(),n=l.outerHeight(),b=t.top,h=b+n,a=t.left,o=a+s,p="html,body"==this.selector?u.a.windowScrollTop():this.scrollTop(),c=this.scrollLeft(),r=this.outerHeight(),_=this.outerWidth()
if("html,body"!=this.selector){let i=u()("body").offset()
this.each((function(){try{i=u()(this).offset()
return false}catch(i){}}))
b-=i.top
h-=i.top
a-=i.left
o-=i.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){r=u()(window).height()
u()("#wizard_box:visible").length>0&&(r-=u()("#wizard_box:visible").height())
_=u()(window).width()
b-=p
a-=c
h-=p
o-=c}b<0||r<n&&h>r?e.scrollTop=b+p:h>r&&(e.scrollTop=h+p-r+20)
a<0?e.scrollLeft=a+c:o>_&&(e.scrollLeft=o+c-_+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},Vovh:function(i,e,l){"use strict"
var t=l("HGxv")
var u=l("8WeW")
Object(u["a"])(JSON.parse('{"ar":{"publish_btn_module":{"buttons":{"publish":"نشر","published":"منشور","publishing":"جارٍ النشر...","unpublish":"إلغاء النشر","unpublishing":"جارٍ إلغاء النشر..."}},"published_click_to_unpublish_db016671":"تم النشر.  انقر لإلغاء النشر.","published_click_to_unpublish_title_358122a":"تم النشر.  انقر لإلغاء نشر %{title}.","unpublished_click_to_publish_6a6d12e1":"تم إلغاء نشره.  انقر للنشر.","unpublished_click_to_publish_title_7c57293f":"تم إلغاء نشره.  انقر لنشر %{title}."},"ca":{"publish_btn_module":{"buttons":{"publish":"Publica","published":"Publicat","publishing":"S\'està publicant...","unpublish":"Anul·la la publicació","unpublishing":"S\'està anul·lant la publicació..."}},"published_click_to_unpublish_db016671":"Publicat.  Feu clic per anul·lar la publicació.","published_click_to_unpublish_title_358122a":"Publicat.  Feu clic per anul·lar la publicació de %{title}.","unpublished_click_to_publish_6a6d12e1":"No publicat.  Feu clic per publicar.","unpublished_click_to_publish_title_7c57293f":"No publicat.  Feu clic per publicar %{title}."},"cy":{"publish_btn_module":{"buttons":{"publish":"Cyhoeddi","published":"Wedi cyhoeddi","publishing":"Wrthi’n cyhoeddi...","unpublish":"Dad-gyhoeddi","unpublishing":"Wrthi’n dad-gyhoeddi..."}},"published_click_to_unpublish_db016671":"Wedi cyhoeddi.  Cliciwch i ddad-gyhoeddi.","published_click_to_unpublish_title_358122a":"Wedi cyhoeddi.  Cliciwch i ddad-gyhoeddi %{title}.","unpublished_click_to_publish_6a6d12e1":"Heb gyhoeddi.  Cliciwch i gyhoeddi.","unpublished_click_to_publish_title_7c57293f":"Heb gyhoeddi.  Cliciwch i gyhoeddi %{title}."},"da":{"publish_btn_module":{"buttons":{"publish":"Offentliggør","published":"Offentliggjort","publishing":"Offentliggør ...","unpublish":"Annuller offentliggørelse","unpublishing":"Annullerer offentliggørelse ..."}},"published_click_to_unpublish_db016671":"Offentliggjort.  Klik for at fjerne offentliggørelse.","published_click_to_unpublish_title_358122a":"Offentliggjort.  Klik for at fjerne offentliggørelse %{title}.","unpublished_click_to_publish_6a6d12e1":"Offentliggørelse fjernet.  Klik for at offentliggøre.","unpublished_click_to_publish_title_7c57293f":"Offentliggørelse fjernet.  Klik for at offentliggøre %{title}."},"da-x-k12":{"publish_btn_module":{"buttons":{"publish":"Offentliggør","published":"Offentliggjort","publishing":"Offentliggør ...","unpublish":"Annuller offentliggørelse","unpublishing":"Annullerer offentliggørelse ..."}},"published_click_to_unpublish_db016671":"Offentliggjort.  Klik for at fjerne offentliggørelse.","published_click_to_unpublish_title_358122a":"Offentliggjort.  Klik for at fjerne offentliggørelse %{title}.","unpublished_click_to_publish_6a6d12e1":"Offentliggørelse fjernet.  Klik for at offentliggøre.","unpublished_click_to_publish_title_7c57293f":"Offentliggørelse fjernet.  Klik for at offentliggøre %{title}."},"de":{"publish_btn_module":{"buttons":{"publish":"Veröffentlichen","published":"Veröffentlicht","publishing":"Wird veröffentlicht ...","unpublish":"Veröffentlichung rückgängig machen","unpublishing":"Veröffentlichung wird rückgängig gemacht ..."}},"published_click_to_unpublish_db016671":"Veröffentlicht.  Klicken Sie auf die Option „Veröffentlichung zurücknehmen“.","published_click_to_unpublish_title_358122a":"Veröffentlicht.  Hier klicken, um die Veröffentlichung von %{title} zurückzunehmen","unpublished_click_to_publish_6a6d12e1":"Veröffentlichung zurückgenommen.  Klicken Sie, um zu veröffentlichen.","unpublished_click_to_publish_title_7c57293f":"Veröffentlichung zurückgenommen.  Klicken Sie, um %{title} zu veröffentlichen."},"el":{"publish_btn_module":{"buttons":{"publish":"Δημοσίευση","published":"Δημοσιευμένο/α","publishing":"Η δημοσίευση βρίσκεται σε εξέλιξη...","unpublish":"Απενεργοποιήστε την Δημοσίευση","unpublishing":"Απενεργοποίηση δημοσίευσης..."}}},"en-AU":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"en-AU-x-unimelb":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"en-CA":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"en-GB":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"en-GB-x-lbs":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"en-GB-x-ukhe":{"publish_btn_module":{"buttons":{"publish":"Publish","published":"Published","publishing":"Publishing...","unpublish":"Unpublish","unpublishing":"Unpublishing..."}},"published_click_to_unpublish_db016671":"Published.  Click to unpublish.","published_click_to_unpublish_title_358122a":"Published.  Click to unpublish %{title}.","unpublished_click_to_publish_6a6d12e1":"Unpublished.  Click to publish.","unpublished_click_to_publish_title_7c57293f":"Unpublished.  Click to publish %{title}."},"es":{"publish_btn_module":{"buttons":{"publish":"Publicar","published":"Publicado","publishing":"Publicando...","unpublish":"Cancelar publicación","unpublishing":"Ocultando..."}},"published_click_to_unpublish_db016671":"Publicado.  Haga clic para anular la publicación.","published_click_to_unpublish_title_358122a":"Publicado.  Haga clic para anular la publicación %{title}.","unpublished_click_to_publish_6a6d12e1":"No publicado.  Haga clic para publicar.","unpublished_click_to_publish_title_7c57293f":"No publicado.  Haga clic para publicar %{title}."},"fa":{"publish_btn_module":{"buttons":{"publish":"انتشار","published":"منتشر شده","publishing":"در حال انتشار...","unpublish":"لغو انتشار","unpublishing":"در حال لغو انتشار..."}},"published_click_to_unpublish_db016671":"منتشر شده است. برای لغو انتشار کلیک کنید.","published_click_to_unpublish_title_358122a":"منتشر شده است. برای لغو انتشار %{title} کلیک کنید.","unpublished_click_to_publish_6a6d12e1":"منتشر نشده. برای انتشار کلیک کنید.","unpublished_click_to_publish_title_7c57293f":"منتشر نشده. برای انتشار %{title} کلیک کنید."},"fi":{"publish_btn_module":{"buttons":{"publish":"Julkaise","published":"Julkaistu","publishing":"Julkaistaan...","unpublish":"Peruuta julkaisu","unpublishing":"Julkaisua peruutetaan..."}},"published_click_to_unpublish_db016671":"Julkaistu.  Peruuta julkaisu napsauttamalla.","published_click_to_unpublish_title_358122a":"Julkaistu.  Peruuta kohteen %{title}julkaisu napsauttamalla.","unpublished_click_to_publish_6a6d12e1":"Julkaisematon.  Julkaise napsauttamalla.","unpublished_click_to_publish_title_7c57293f":"Julkaisematon.  Julkaise napsauttamalla %{title}."},"fr":{"publish_btn_module":{"buttons":{"publish":"Publier","published":"Date de publication","publishing":"Publication en cours...","unpublish":"Annuler la publication","unpublishing":"Annulation de la publication..."}},"published_click_to_unpublish_db016671":"Publié.  Cliquez pour désactiver la publication","published_click_to_unpublish_title_358122a":"Publié.  Cliquez pour dépublier %{title}.","unpublished_click_to_publish_6a6d12e1":"Non publié.  Cliquez pour publier.","unpublished_click_to_publish_title_7c57293f":"Non publié.  Cliquez pour publier %{title}."},"fr-CA":{"publish_btn_module":{"buttons":{"publish":"Publier","published":"Date de publication","publishing":"Publication en cours...","unpublish":"Annuler la publication","unpublishing":"Annulation de la publication..."}},"published_click_to_unpublish_db016671":"Publié  Cliquer pour enlever la publication.","published_click_to_unpublish_title_358122a":"Publié  Cliquer pour enlever la publication %{title}.","unpublished_click_to_publish_6a6d12e1":"Non publié  Cliquer pour publier.","unpublished_click_to_publish_title_7c57293f":"Non publié  Cliquer pour publier %{title}."},"he":{"publish_btn_module":{"buttons":{"publish":"פרסום","published":"פורסם","publishing":"מפרסם...","unpublish":"ביטול פרסום","unpublishing":"מבטל פרסום..."}}},"ht":{"publish_btn_module":{"buttons":{"publish":"Pibliye","published":"Pibliye","publishing":"Piblikasyon...","unpublish":"Pa Pibliye","unpublishing":"Pa pibliye..."}},"published_click_to_unpublish_db016671":"Klike pou pa pibliye.  Klike pou pa pibliye.","published_click_to_unpublish_title_358122a":"Klike pou pa pibliye.  Klike pou pa pibliye %{title}.","unpublished_click_to_publish_6a6d12e1":"Pa pibliye.  Klike pou pibliye.","unpublished_click_to_publish_title_7c57293f":"Pa pibliye.  Klike pou pibliye %{title}."},"hu":{"publish_btn_module":{"buttons":{"publish":"Publikálás","published":"Publikálva","publishing":"Publikálás alatt...","unpublish":"Publikálás visszavonása","unpublishing":"Publikálás visszavonása folyamatban..."}},"published_click_to_unpublish_db016671":"Publikált. Kattintson a visszavonáshoz.","published_click_to_unpublish_title_358122a":"Publikálva. Kattintson ide a/az %{title} publikálás visszavonásához . ","unpublished_click_to_publish_6a6d12e1":"Nem publikált, kattintson a publikáláshoz","unpublished_click_to_publish_title_7c57293f":"Nem publikált. Kattintson ide a/az %{title} publikálásához."},"hy":{"publish_btn_module":{"buttons":{"publish":"Հրապարակել","published":"Հրապարակված է","publishing":"Հրապարակվում է...","unpublish":"Չեղարկել հրապարակումը","unpublishing":"Հրապարակման չեղյալ համարում..."}}},"is":{"publish_btn_module":{"buttons":{"publish":"Birta","published":"Birt","publishing":"Birti...","unpublish":"Fela","unpublishing":"Óbirti..."}},"published_click_to_unpublish_db016671":"Birt.  Smelltu til að fela.","published_click_to_unpublish_title_358122a":"Birt.  Smelltu til að fela %{title}.","unpublished_click_to_publish_6a6d12e1":"Óbirt. Smelltu til að birta.","unpublished_click_to_publish_title_7c57293f":"Óbirt  Smelltu til að birta %{title}."},"it":{"publish_btn_module":{"buttons":{"publish":"Pubblica","published":"Pubblicato","publishing":"Pubblicazione in corso...","unpublish":"Annulla pubblicazione","unpublishing":"Annullamento pubblicazione in corso..."}},"published_click_to_unpublish_db016671":"Pubblicato.  Fai clic per annullare la pubblicazione.","published_click_to_unpublish_title_358122a":"Pubblicato.  Fai clic per annullare la pubblicazione di %{title}.","unpublished_click_to_publish_6a6d12e1":"Non pubblicato.  Fai clic per pubblicare.","unpublished_click_to_publish_title_7c57293f":"Non pubblicato.  Fai clic per pubblicare %{title}."},"ja":{"publish_btn_module":{"buttons":{"publish":"公開","published":"公開済み","publishing":"公開しています...","unpublish":"未公開","unpublishing":"公開を中止しています..."}},"published_click_to_unpublish_db016671":"公開済み。ここをクリックして非公開にする。","published_click_to_unpublish_title_358122a":"公開済み。ここをクリックして%{title}を非公開にする。","unpublished_click_to_publish_6a6d12e1":"公開取り消し済み。ここをクリックして公開。","unpublished_click_to_publish_title_7c57293f":"公開取り消し済み。クリックして%{title}を公開。"},"ko":{"publish_btn_module":{"buttons":{"publish":"게시","published":"게시됨","publishing":"게시 중...","unpublish":"게시 취소","unpublishing":"게시 취소 중..."}}},"mi":{"publish_btn_module":{"buttons":{"publish":"Whakaputa","published":"I whakaputaina","publishing":"Whakaputa ...","unpublish":"Kaore i whakaputa","unpublishing":"E whakaputa ana"}},"published_click_to_unpublish_db016671":"Kua whakaputaina. Pāwhiri ki te kore e whakaputa","published_click_to_unpublish_title_358122a":"Kua whakaputaina. Pāwhiri ki te kore e whakaputa %{title}.","unpublished_click_to_publish_6a6d12e1":"Kaore i whakaputaina. Pāwhiri ki te whakaputa.","unpublished_click_to_publish_title_7c57293f":"Kaore i whakaputaina. Pāwhiri ki te whakaputa %{title}."},"nb":{"publish_btn_module":{"buttons":{"publish":"Publiser","published":"Publisert","publishing":"Publiserer…","unpublish":"Avpubliser","unpublishing":"Fjerner publisering…"}},"published_click_to_unpublish_db016671":"Publisert.  Trykk for å oppheve publiseringen","published_click_to_unpublish_title_358122a":"Publisert.  Trykk for å oppheve publiseringen %{title}.","unpublished_click_to_publish_6a6d12e1":"Upublisert.  Trykk her for å publisere","unpublished_click_to_publish_title_7c57293f":"Upublisert.  Trykk her for å publisere %{title}."},"nb-x-k12":{"publish_btn_module":{"buttons":{"publish":"Publiser","published":"Publisert","publishing":"Publiserer…","unpublish":"Avpubliser","unpublishing":"Fjerner publisering…"}},"published_click_to_unpublish_db016671":"Publisert.  Trykk for å oppheve publiseringen","published_click_to_unpublish_title_358122a":"Publisert.  Trykk for å oppheve publiseringen %{title}.","unpublished_click_to_publish_6a6d12e1":"Upublisert.  Trykk her for å publisere","unpublished_click_to_publish_title_7c57293f":"Upublisert.  Trykk her for å publisere %{title}."},"nl":{"publish_btn_module":{"buttons":{"publish":"Publiceren","published":"Gepubliceerd","publishing":"Bezig met publiceren...","unpublish":"Publicatie ongedaan maken","unpublishing":"Bezig met ongedaan maken van publicatie..."}},"published_click_to_unpublish_db016671":"Gepubliceerd.  Klik om publicatie ongedaan te maken.","published_click_to_unpublish_title_358122a":"Gepubliceerd.  Klik om publicatie van %{title} ongedaan te maken.","unpublished_click_to_publish_6a6d12e1":"Niet gepubliceerd.  Klik om te publiceren.","unpublished_click_to_publish_title_7c57293f":"Niet gepubliceerd.  Klik om %{title} te publiceren."},"nn":{"publish_btn_module":{"buttons":{"publish":"Publiser","published":"Publisert","publishing":"Publiserer...","unpublish":"Opphev publisering","unpublishing":"Opphevar publisering..."}},"published_click_to_unpublish_db016671":"Publisert. Klikk for å oppheve publisering.","published_click_to_unpublish_title_358122a":"Publisert. Klikk for å oppheve publisering av %{title}.","unpublished_click_to_publish_6a6d12e1":"Ikkje publisert. Klikk for å publisere. ","unpublished_click_to_publish_title_7c57293f":"Ikkje publisert. Klikk for å publisere %{title}. "},"pl":{"publish_btn_module":{"buttons":{"publish":"Publikuj","published":"Opublikowane","publishing":"Trwa publikowanie...","unpublish":"Cofnij publikowanie","unpublishing":"Trwa cofanie publikowania..."}},"published_click_to_unpublish_db016671":"Opublikowane.  Kliknij, aby cofnąć publikację.","published_click_to_unpublish_title_358122a":"Opublikowane.  Kliknij, aby cofnąć publikację %{title}.","unpublished_click_to_publish_6a6d12e1":"Nieopublikowany.  Kliknij, aby opublikować.","unpublished_click_to_publish_title_7c57293f":"Nieopublikowany.  Kliknij, aby opublikować %{title}."},"pt":{"publish_btn_module":{"buttons":{"publish":"Publicar","published":"Publicado","publishing":"A publicar...","unpublish":"Anular publicação","unpublishing":"A anular a publicação..."}},"published_click_to_unpublish_db016671":"Publicado.  Clique para não publicar.","published_click_to_unpublish_title_358122a":"Publicado.  Clique para publicar%{title}.","unpublished_click_to_publish_6a6d12e1":"Não publicado.  Clique para publicar.","unpublished_click_to_publish_title_7c57293f":"Não publicado.  Clique para publicar %{title}."},"pt-BR":{"publish_btn_module":{"buttons":{"publish":"Publicar","published":"Publicado","publishing":"Publicando...","unpublish":"Despublicar","unpublishing":"Cancelando publicação..."}},"published_click_to_unpublish_db016671":"Publicado.  Clique para despublicar.","published_click_to_unpublish_title_358122a":"Publicado.  Clique para cancelar a publicação de %{title}.","unpublished_click_to_publish_6a6d12e1":"Não publicado.  Clique para publicar.","unpublished_click_to_publish_title_7c57293f":"Não publicado.  Clique para publicar %{title}."},"ru":{"publish_btn_module":{"buttons":{"publish":"Опубликовать","published":"Опубликовано","publishing":"Публикация...","unpublish":"Отменить публикацию","unpublishing":"Отмена публикации…"}},"published_click_to_unpublish_db016671":"Опубликовано.  Щелкните, чтобы отменить публикацию.","published_click_to_unpublish_title_358122a":"Опубликовано.  Щелкните, чтобы отменить публикацию %{title}.","unpublished_click_to_publish_6a6d12e1":"Публикация отменена.  Щелкните, чтобы опубликовать.","unpublished_click_to_publish_title_7c57293f":"Публикация отменена.  Щелкните, чтобы опубликовать %{title}."},"sl":{"publish_btn_module":{"buttons":{"publish":"Objavi","published":"Objavljeno","publishing":"Objavljanje ...","unpublish":"Ne objavi","unpublishing":"Razveljavljanje objave ..."}},"published_click_to_unpublish_db016671":"Objavljeno.  Kliknite za razveljavitev objave.","published_click_to_unpublish_title_358122a":"Objavljeno.  Kliknite za razveljavitev objave %{title}.","unpublished_click_to_publish_6a6d12e1":"Neobjavljeno.  Kliknite za objavo.","unpublished_click_to_publish_title_7c57293f":"Neobjavljeno.  Kliknite za objavo %{title}."},"sv":{"publish_btn_module":{"buttons":{"publish":"Publicera","published":"Publicerad","publishing":"Publicerar ...","unpublish":"Avpublicera","unpublishing":"Avpublicerar ..."}},"published_click_to_unpublish_db016671":"Publicerad.  Klicka för att avpublicera","published_click_to_unpublish_title_358122a":"Publicerad.  Klicka för att avpublicera %{title}.","unpublished_click_to_publish_6a6d12e1":"Ej offentliggjord.  Klicka för att publicera.","unpublished_click_to_publish_title_7c57293f":"Ej offentliggjord.  Klicka för att publicera %{title}."},"sv-x-k12":{"publish_btn_module":{"buttons":{"publish":"Publicera","published":"Publicerad","publishing":"Publicerar ...","unpublish":"Avpublicera","unpublishing":"Avpublicerar ..."}},"published_click_to_unpublish_db016671":"Publicerad.  Klicka för att avpublicera","published_click_to_unpublish_title_358122a":"Publicerad.  Klicka för att avpublicera %{title}.","unpublished_click_to_publish_6a6d12e1":"Ej offentliggjord.  Klicka för att publicera.","unpublished_click_to_publish_title_7c57293f":"Ej offentliggjord.  Klicka för att publicera %{title}."},"tr":{"publish_btn_module":{"buttons":{"publish":"Yayınla","published":"Yayınlandı","publishing":"Yayınlanıyor...","unpublish":"Yayından kaldır","unpublishing":"Yayından kaldırılıyor..."}}},"uk":{"publish_btn_module":{"buttons":{"publish":"Опублікувати","published":"Опубліковано","publishing":"Публікація...","unpublish":"Відмінити публікацію","unpublishing":"Скасування публікації..."}},"published_click_to_unpublish_db016671":"Опубліковано Натисніть, щоб скасувати публікацію.","published_click_to_unpublish_title_358122a":"Опубліковано Натисніть, щоб скасувати публікацію %{title}.","unpublished_click_to_publish_6a6d12e1":"Не опубліковано. Натисніть, щоб опублікувати.","unpublished_click_to_publish_title_7c57293f":"Не опубліковано. Натисніть, щоб опублікувати %{title}."},"zh-Hans":{"publish_btn_module":{"buttons":{"publish":"发布","published":"已发布","publishing":"正在发布...","unpublish":"取消发布","unpublishing":"正在取消发布..."}},"published_click_to_unpublish_db016671":"已发布。单击以取消发布。","published_click_to_unpublish_title_358122a":"已发布。单击以取消发布%{title}。","unpublished_click_to_publish_6a6d12e1":"未发布。单击以发布。","unpublished_click_to_publish_title_7c57293f":"未发布。单击以发布%{title}。"},"zh-Hant":{"publish_btn_module":{"buttons":{"publish":"發佈","published":"已發佈","publishing":"正在發佈…","unpublish":"取消發佈","unpublishing":"正在取消發佈..."}},"published_click_to_unpublish_db016671":"已發佈。點擊取消發佈。","published_click_to_unpublish_title_358122a":"已發佈。點擊取消發佈 %{title}。","unpublished_click_to_publish_6a6d12e1":"已取消發佈。點擊發佈。","unpublished_click_to_publish_title_7c57293f":"已取消發佈。點擊發佈 %{title}。"}}'))
l("jQeR")
l("0sPK")
var s=t["default"].scoped("publish_btn_module")
var n=l("ouhR")
var b=l.n(n)
var h=l("mX+G")
var a=l.n(h)
var o=l("gI0r")
l("Dhso")
var p=function(i,e){for(var l in e)c.call(e,l)&&(i[l]=e[l])
function t(){this.constructor=i}t.prototype=e.prototype
i.prototype=new t
i.__super__=e.prototype
return i},c={}.hasOwnProperty
e["a"]=function(i){p(e,i)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.disabledClass="disabled"
e.prototype.publishClass="btn-publish"
e.prototype.publishedClass="btn-published"
e.prototype.unpublishClass="btn-unpublish"
e.optionProperty("title")
e.optionProperty("publishText")
e.optionProperty("unpublishText")
e.optionProperty("disabledForModeration")
e.prototype.tagName="button"
e.prototype.className="btn"
e.prototype.events={click:"click",hover:"hover"}
e.prototype.els={i:"$icon",".publish-text":"$text"}
e.prototype.initialize=function(){var i
e.__super__.initialize.apply(this,arguments)
return null!=(i=this.model)?i.on("change:unpublishable",(l=this,function(){if(!l.model.get("unpublishable")&&l.model.get("published"))return l.disable()})):void 0
var l}
e.prototype.setElement=function(){e.__super__.setElement.apply(this,arguments)
this.$el.attr("data-tooltip","")
if(!this.model.get("unpublishable")&&this.model.get("published"))return this.disable()}
e.prototype.hover=function(i){var e
e=i.type
if("mouseenter"===e){if(this.keepState||this.isPublish()||this.isDisabled())return
this.renderUnpublish()
return this.keepState=true}this.keepState=false
if(!(this.isPublish()||this.isDisabled()))return this.renderPublished()}
e.prototype.click=function(i){i.preventDefault()
i.stopPropagation()
if(this.isDisabled())return
this.keepState=true
if(this.isPublish())return this.publish()
if(this.isUnpublish()||this.isPublished())return this.unpublish()}
e.prototype.addAriaLabel=function(i){var e
e=this.$el.find("span.screenreader-only.accessible_label")
e.length||(e=b()('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el))
e.text(i)
return this.$el.attr("aria-label",i)}
e.prototype.setFocusToElement=function(){return this.$el.focus()}
e.prototype.publish=function(i){this.renderPublishing()
return this.model.publish().always((e=this,function(){e.trigger("publish")
e.enable()
e.render()
return e.setFocusToElement()}))
var e}
e.prototype.unpublish=function(i){this.renderUnpublishing()
return this.model.unpublish().done((e=this,function(){e.trigger("unpublish")
e.disable()
e.render()
return e.setFocusToElement()})).fail(function(i){return function(e){403===e.status&&b.a.flashError(i.model.disabledMessage())
i.disable()
i.renderPublished()
return i.setFocusToElement()}}(this))
var e}
e.prototype.isPublish=function(){return this.$el.hasClass(this.publishClass)}
e.prototype.isPublished=function(){return this.$el.hasClass(this.publishedClass)}
e.prototype.isUnpublish=function(){return this.$el.hasClass(this.unpublishClass)}
e.prototype.isDisabled=function(){return this.$el.hasClass(this.disabledClass)}
e.prototype.disable=function(){return this.$el.addClass(this.disabledClass)}
e.prototype.enable=function(){return this.$el.removeClass(this.disabledClass)}
e.prototype.reset=function(){this.$el.removeClass(this.publishClass+" "+this.publishedClass+" "+this.unpublishClass)
this.$icon.removeClass("icon-publish icon-unpublish icon-unpublished")
return this.$el.removeAttr("aria-label")}
e.prototype.publishLabel=function(){if(this.publishText)return this.publishText
if(this.title)return s.t("Unpublished.  Click to publish %{title}.",{title:this.title})
return s.t("Unpublished.  Click to publish.")}
e.prototype.unpublishLabel=function(){if(this.unpublishText)return this.unpublishText
if(this.title)return s.t("Published.  Click to unpublish %{title}.",{title:this.title})
return s.t("Published.  Click to unpublish.")}
e.prototype.render=function(){this.$el.is("button")||this.$el.attr("role","button")
this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="publish-text"></span>')
this.cacheEls()
this.$text.attr("tabindex","-1")
this.model.get("published")?this.renderPublished():this.renderPublish()
return this}
e.prototype.renderPublish=function(){return this.renderState({text:s.t("buttons.publish","Publish"),label:this.publishLabel(),buttonClass:this.publishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublished=function(){return this.renderState({text:s.t("buttons.published","Published"),label:this.unpublishLabel(),buttonClass:this.publishedClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublish=function(){var i
i=s.t("buttons.unpublish","Unpublish")
return this.renderState({text:i,buttonClass:this.unpublishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublishing=function(){var i
this.disable()
i=s.t("buttons.publishing","Publishing...")
return this.renderState({text:i,buttonClass:this.publishClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublishing=function(){var i
this.disable()
i=s.t("buttons.unpublishing","Unpublishing...")
return this.renderState({text:i,buttonClass:this.unpublishClass,iconClass:"icon-unpublished"})}
e.prototype.renderState=function(i){this.reset()
this.$el.addClass(i.buttonClass)
this.$el.attr("aria-pressed",i.buttonClass===this.publishedClass)
this.$icon.addClass(i.iconClass)
this.$text.html("&nbsp;"+Object(o["a"])(i.text))
if(this.model.get("disabledForModeration"))return this.disableWithMessage("You do not have permissions to edit this moderated assignment")
if(null==this.model.get("unpublishable")||this.model.get("unpublishable")){this.enable()
this.$el.attr("title",i.text)
if(i.label)return this.addAriaLabel(i.label)}else if(this.model.get("published"))return this.disableWithMessage(this.model.disabledMessage())}
e.prototype.disableWithMessage=function(i){this.disable()
this.$el.attr("aria-disabled",true)
this.$el.attr("title",i)
return this.addAriaLabel(i)}
return e}(a.a.View)},aq8L:function(i,e,l){"use strict"
var t=l("HGxv")
var u=l("8WeW")
Object(u["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
l("jQeR")
l("0sPK")
var s=t["default"].scoped("instructure_misc_plugins")
var n=l("ouhR")
var b=l.n(n)
var h=l("gI0r")
var a=l("3PZ/")
l("dhbk")
l("ESjL")
l("65NJ")
l("w2hD")
b.a.fn.setOptions=function(i,e){let l=i?"<option value=''>"+Object(h["a"])(i)+"</option>":""
null==e&&(e=[])
e.forEach(i=>{const e=Object(h["a"])(i)
l+='<option value="'+e+'">'+e+"</option>"})
return this.html(b.a.raw(l))}
b.a.fn.ifExists=function(i){this.length&&i.call(this,this)
return this}
b.a.fn.scrollbarWidth=function(){const i=b()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=i.find("div")
const l=e.innerWidth()
i.css("overflow-y","scroll")
const t=e.innerWidth()
i.remove()
return l-t}
b.a.fn.dim=function(i){return this.animate({opacity:.4},i)}
b.a.fn.undim=function(i){return this.animate({opacity:1},i)}
b.a.fn.confirmDelete=function(i){i=b.a.extend({},b.a.fn.confirmDelete.defaults,i)
const e=this
let l=null
let t=true
i.noMessage=i.noMessage||i.no_message
const u=function(){if(!t){i.cancelled&&b.a.isFunction(i.cancelled)&&i.cancelled.call(e)
return}i.confirmed||(i.confirmed=function(){e.dim()})
i.confirmed.call(e)
if(i.url){i.success||(i.success=function(i){e.fadeOut("slow",()=>{e.remove()})})
const t=i.prepareData?i.prepareData.call(e,l):{}
t.authenticity_token=Object(a["a"])()
b.a.ajaxJSON(i.url,"DELETE",t,l=>{i.success.call(e,l)},(l,t,u,s)=>{i.error&&b.a.isFunction(i.error)?i.error.call(e,l,t,u,s):b.a.ajaxJSON.unhandledXHRs.push(t)})}else{i.success||(i.success=function(){e.fadeOut("slow",()=>{e.remove()})})
i.success.call(e)}}
if(i.message&&!i.noMessage&&!b.a.skipConfirmations){if(i.dialog){t=false
const e="object"===typeof i.dialog?i.dialog:{}
const n=i.url.includes("assignments")?"btn-danger":"btn-primary"
l=b()(i.message).dialog(b.a.extend({},{modal:true,close:u,buttons:[{text:s.t("#buttons.cancel","Cancel"),click(){b()(this).dialog("close")}},{text:s.t("#buttons.delete","Delete"),class:n,click(){t=true
b()(this).dialog("close")}}]},e))
return}t=confirm(i.message)}u()}
b.a.fn.confirmDelete.defaults={get message(){return s.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
b.a.fn.fragmentChange=function(i){if(i&&true!==i){const l=(window.location.search||"").replace(/^\?/,"").split("&")
let t=null
for(var e=0;e<l.length;e++){const i=l[e]
i&&0===i.indexOf("hash=")&&(t="#"+i.substring(5))}this.bind("document_fragment_change",i)
const u=this
let s=false
for(e=0;e<b.a._checkFragments.fragmentList.length;e++){const i=b.a._checkFragments.fragmentList[e]
i.doc[0]==u[0]&&(s=true)}s||b.a._checkFragments.fragmentList.push({doc:u,fragment:""})
b()(window).bind("hashchange",b.a._checkFragments)
setTimeout(()=>{t&&t.length>0?u.triggerHandler("document_fragment_change",t):u&&u[0]&&u[0].location&&u[0].location.hash.length>0&&u.triggerHandler("document_fragment_change",u[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
b.a._checkFragments=function(){const i=b.a._checkFragments.fragmentList
for(let e=0;e<i.length;e++){const l=i[e]
const t=l.doc
if(t[0].location.hash!=l.fragment){t.triggerHandler("document_fragment_change",t[0].location.hash)
l.fragment=t[0].location.hash
b.a._checkFragments.fragmentList[e]=l}}}
b.a._checkFragments.fragmentList=[]
b.a.fn.clickLink=function(){const i=this.eq(0)
i.hasClass("disabled_link")||i.click()}
b.a.fn.showIf=function(i){if(b.a.isFunction(i))return this.each((function(e){b()(this).showIf(i.call(this))}))
i?this.show():this.hide()
return this}
b.a.fn.disableIf=function(i){b.a.isFunction(i)&&(i=i.call(this))
this.prop("disabled",!!i)
return this}
b.a.fn.indicate=function(i){i=i||{}
let e
if("remove"==i){e=this.data("indicator")
e&&e.remove()
return}b()(".indicator_box").remove()
let l=this.offset()
i&&i.offset&&(l=i.offset)
const t=this.width()
const u=this.height()
const s=(i.container||this).zIndex()
e=b()(document.createElement("div"))
e.css({width:t+6,height:u+6,top:l.top-3,left:l.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover((function(){b()(this).stop().fadeOut("fast",(function(){b()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
b()("body").append(e)
i&&i.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){b()(this).remove()})):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){b()(this).remove()}))
i&&i.scroll&&b()("html,body").scrollToVisible(e)}
b.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
b.a.fn.log=function(i){console.log("%s: %o",i,this)
return this}
b.a.fn.fillWindowWithMe=function(i){const e=b.a.extend({minHeight:400},i),l=b()(this),t=b()("#wrapper"),u=b()("#main"),s=b()("#not_right_side"),n=b()(window),h=b()(this).add(e.alsoResize)
function a(){h.height(0)
const i=n.height()-(t.offset().top+t.outerHeight())+(u.height()-s.height()),a=Math.max(400,i)
h.height(a)
b.a.isFunction(e.onResize)&&e.onResize.call(l,a)}a()
n.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",a)
return this}
b.a.fn.autoGrowInput=function(i){i=b.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},i)
this.filter("input:text").each((function(){let e=i.minWidth||b()(this).width(),l="",t=b()(this),u=b()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:t.css("fontSize"),fontFamily:t.css("fontFamily"),fontWeight:t.css("fontWeight"),letterSpacing:t.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){setTimeout(()=>{if(l===(l=t.val()))return
u.text(l)
const s=u.width(),n=s+i.comfortZone>=e?s+i.comfortZone:e,b=t.width(),h=n<b&&n>=e||n>e&&n<i.maxWidth
h&&t.width(n)})}
u.insertAfter(t)
b()(this).bind("keyup keydown blur update change",s)}))
return this}
b.a}}])

//# sourceMappingURL=47-c-3b786372dd.js.map