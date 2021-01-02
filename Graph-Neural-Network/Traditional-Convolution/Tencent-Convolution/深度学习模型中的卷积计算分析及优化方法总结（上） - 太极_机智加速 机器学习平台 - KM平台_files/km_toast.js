// JavaScript Document
/*
*	emperor
弹出式提示组件。

两个参数，
第一个是形态（默认警告态）
第二个是文案（默认“操作已记录”）
*/
(function($, _window){
	$.extend({
	    km_toast: function(status, text) {
			/*
			*	合并配置信息
			*/
			var def = {	
				status : 'success',
				text : '操作已记录'
			};
			//IE兼容
			var temp = {
                status : status,
                text : text
			}

			def = $.extend(def, temp);
			//构造弹出框

			html = "";
			html += "<div class='km_toast'>";
			html += 	"<div class='icon'></div>";
			html += 	"<div class='text'></div>";
			html += "</div>";
			$('body').append(html);
			
			$('.km_toast .icon').addClass(def.status);
			$('.km_toast .text').html(def.text);

			var width = $('.km_toast .text').width() + 100;
			
			$('.km_toast').css('width', width);

			setTimeout(function(){
				$('.km_toast').remove();
			},3000);
	    }
	});

})(jQuery, window)