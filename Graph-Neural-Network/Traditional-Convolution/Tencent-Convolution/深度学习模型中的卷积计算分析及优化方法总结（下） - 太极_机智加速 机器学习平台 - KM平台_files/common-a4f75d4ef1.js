function load_mykbars(target_id, options, callback){
	if (eval("typeof(load_mykbars_"+target_id+") == 'undefined'")) {
		var GROUPS_PER_LINE = options.GROUPS_PER_LINE;
		var DISPLAY_LINES = options.DISPLAY_LINES;
		var CAROUSEL_OUTER_WIDTH = options.CAROUSEL_OUTER_WIDTH;
		var CAROUSEL_OUTER_HEIGHT = options.CAROUSEL_OUTER_HEIGHT;
		var SLIDE_HEIGHT = options.SLIDE_HEIGHT;
		var leave_check = true;
		$.getJSON(km_path+"apis/kbars.php?type=user_menu&target="+current_user+"&timestamp="+Date.parse(new Date()),
			function(data){
				if (data.length == 0) {
					$('#'+target_id).html('<div class="no_kbars empty_block">没有任何K吧。赶快<a href="'+km_path+'groups/catalog?kmref=km_header" style="display:inline;text-decoration:underline">加入</a>一个吧~~~</div>');
				} else {
					var content = [];
					while(data.length > 0) {
						var kbars = data.splice(0, DISPLAY_LINES * GROUPS_PER_LINE);
						mykbars_html = "<div class='group_panel'>" + render_group_list(kbars) + "</div>";
						content.push({"content":mykbars_html});
					}
					var total_page = content.length;
					
					$('#'+target_id).agile_carousel({
						// required settings
						carousel_data: content,
						carousel_outer_height: CAROUSEL_OUTER_HEIGHT,
						carousel_height: SLIDE_HEIGHT,
						slide_height: SLIDE_HEIGHT,
						carousel_outer_width: CAROUSEL_OUTER_WIDTH,
						slide_width: CAROUSEL_OUTER_WIDTH,
						number_slides_visible:1,
						// end required settings
						
						transition_type: "slide",
						transition_time: 300,
						timer: 0,
						continuous_scrolling: false,
						control_set_2: "previous_button,next_button",
						control_set_1 : (total_page > 1) ? "group_numbered_buttons" : ""
						
					});
					var w = $('#' + target_id + ' .control_set_1').width();
					var l = (CAROUSEL_OUTER_WIDTH - w)/2;
					$('#' + target_id + ' .control_set_1').css({'left':l+'px'});
				}
				if(callback) callback();
			}
		);
		eval("load_mykbars_"+target_id+" = true");
	}

}

function render_group_list(groups){
	var groups_html = "";
	if (groups.length != 0) {		
		groups_html += '<ul class="groups_list">';
		$.each(groups, function(i,group){
			var noimg = 'group_small.png';
			groups_html += '<li class="item center">';
			groups_html += '<div>';
			groups_html += '	<a href="'+group.url+'?kmref=km_header"  title="'+group.name+'">';
			groups_html += '	<img onerror="javascrpt:this.src=\''+km_path+'img/'+noimg+'\'" class="avatar" src="'+group.logo+'" />';
			groups_html += '	</a>';
			groups_html += '	<div><a href="'+group.url+'?kmref=km_header" title="'+group.name+'">'+htmlspecialchars(group.display_name)+'</a></div>';
			groups_html += '</div>';
			groups_html += '</li>';
			
		});
		groups_html += '</ul>';
	}
	
	return groups_html;
}

function add_kmref(){
	$('[kmref] a').each(function(){
		var ref_code = $(this).closest('[kmref]').attr('kmref');
		var text = $(this).html();
		var turl = $(this).attr('href');
		var anchor = ''; 
		
		//判断是否已经添加过了
		if(turl.indexOf('kmref') == -1){
			if ( turl.indexOf("#") != -1 ) {
				anchor = turl.substr(turl.indexOf("#"),turl.length);
				turl = turl.substr(0,turl.indexOf("#"));
			} 
			if ( turl.indexOf("?") == -1 ) {
				turl = turl + '?kmref=' + ref_code + anchor;
			} else if ( turl.indexOf("javascript") >= 0 ) {
				//暂未发现处理情况
			} else {
				turl = turl + '&kmref=' + ref_code + anchor;
			}
			$(this).attr('href', turl);
			$(this).html(text);
		}
	});
}

function add_referer( div_id, ref_code , filter) {
	$('#'+div_id+' a').each(function(){
		var flag = filter ? filter(this) : true;
		if(flag){
			var text = $(this).html();
			var turl = $(this).attr('href');
			if ( turl.indexOf("javascript")>=0){

			} else if ( turl.indexOf("?") == -1 ){
				turl = turl + '?kmref=' + ref_code;
			} else {
				turl = turl + '&kmref=' + ref_code;
			}
			$(this).attr('href', turl);
			$(this).html(text);
		}
	});
}

function km_submit(submit_link,submit_button){
	$('#button_cover').css('top', $('#'+submit_link).offset().top-1);
	$('#button_cover').css('left', $('#'+submit_link).offset().left-1);
	$('#button_cover').width($('#'+submit_link).width()+2);
	$('#button_cover').height($('#'+submit_link).height()+2);
	$('#button_cover').show();

	if((typeof GetContent)=='function'){
		var v = GetContent();
		v = v.toLowerCase() == '<div></div>' ? '' : v;
		v = v.replace(/<[\/]?script>/ig,"");
		$('input[richeditor]').val(v);
	}

	$('#submit_button').trigger('click');
}

var show_dialog = function(div) {
	if (typeof document.body.style.maxHeight == "undefined") { // if IE6
		$('body', 'html').css({height: '100%', width: '100%'});
		$('html').css('overflow', 'hidden');
	}
	if ($('#overlay').length == 0) {
		$('body').append('<div id="overlay"></div><div id="dialog"></div>');
		$('#overlay').click(close_dialog);
	}
	if(div != null){
		$('#dialog').empty().append(div);
	}else{
		$('#dialog').html("<div class='loadpop'>正在载入，请稍候...</div>");
	}
	document.onkeyup = function(e){
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}
		if (keycode == 27) { // close
			close_dialog();
		}
	};
};

var load_dialog = function(url) {
	if (typeof document.body.style.maxHeight == "undefined") { // if IE6
		$('body', 'html').css({height: '100%', width: '100%'});
		$('html').css('overflow', 'hidden');
	}
	if ($('#overlay').length == 0) {
		$('body').append('<div id="overlay"></div><div id="dialog"></div>');
		$('#overlay').click(close_dialog);
	}

	$('#dialog').load(url);

	document.onkeyup = function(e){
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}
		if (keycode == 27) { // close
			close_dialog();
		}
	};
};

var close_dialog = function() {
	$('#overlay').unbind('click');
	$('#dialog,#overlay').remove();
	if (typeof document.body.style.maxHeight == "undefined") {// if IE6
		$('body','html').css({height: 'auto', width: 'auto'});
		$('html').css('overflow', '');
	}
	document.onkeydown = '';
	return false;
};

var get_form_fields = function(form) {
	var param = {};
	$(':input', form).each(function(i){
		var name = this.name;
		if (this.type == 'checkbox'|| this.type == 'radio') {
			if (this.checked) param[name] = this.value;
		} else if (this.type == 'submit'){
			if (/selected/.test(this.className)) param[name] = this.value;
		} else {
			if (name) param[name] = this.value;
		}
		if(/notnull/.test(this.className) && this.value == ''){
			$(this).prev().addClass('errnotnull');
			param['err'] = 'notnull';
		}
	});

	return param;
};

var clear_form_fields = function(form){
	$(':input', form).each(function(i){
		var type = this.type;
		var tag = this.tagName.toLowerCase();

		if(type == 'text' || type == 'password' || tag == 'textarea'){
			this.value = '';
		}else if(type == 'checkbox' || type == 'radio'){
			this.checked == false;
		}else if(tag == 'select'){
			this.selectedIndex = -1;
		}
	});
};

var remote_submit_json = function(form, func, is_abled) {
	var fvalue = get_form_fields(form);
	if (fvalue['err'] == undefined) {
		if (!is_abled) {
			$(':submit',form).attr('disabled', 1);
			$('textarea',form).attr('disabled', 1);
		}
		jQuery.post(form.action, fvalue, function(ret){
			func(ret);
			// var json = eval('('+ret+')'); func(json);
		});
	}
};

/**
 * 搜索框的灰色引导语
 * 
 * @params obj search_input 输入框
 * @params string guiding_words 引导语
 * @author Joseph
 */
function search_guide_words(search_input, guiding_words) {
	search_input.ready(function() {
		search_input.addClass("search_input_default");
		if (search_input.val() == "") {
			search_input.val(guiding_words);
		} else if (search_input.val() != guiding_words) {
			search_input.addClass("search_input_focused");
		}
	}).change(function() {
		search_input.removeClass("error-encountered");
	}).focus(function() {
		if (search_input.val() == guiding_words) {
			search_input.val("");
			search_input.addClass("search_input_focused");
		}
	}).blur(function() {
		if (search_input.val() == "") {
			search_input.val(guiding_words);
			search_input.removeClass("search_input_focused");
		}
	});
}

function getCookie(name){
	var returnCookieValue = "";
	var cookieMessage = document.cookie;
	var cookies = cookieMessage.split("; ");
	var cookiesValue = new Array();
	for (var i=0;i<cookies.length;i++) {
		var tempArr = cookies[i].split("=");
		cookiesValue[i] = tempArr;
	}
	for (var i = 0; i < cookiesValue.length ; i++) {
		if (cookiesValue[i][0]==name)	{
			returnCookieValue = cookiesValue[i][1];
			break;
		}
	}
	return returnCookieValue;
}

function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}else{
		expires = 7 * 1000 * 60 * 60 * 24;
	}
	if(!path){
		path = '/';
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+'='+escape( value ) +
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + // expires.toGMTString()
		( ( path ) ? ';path=' + path : '' ) +
		( ( domain ) ? ';domain=' + domain : '' ) +
		( ( secure ) ? ';secure' : '' );
}

function get_file_ext(filename){
	var pos = filename.lastIndexOf('.');
	if (pos>0){
		return filename.substring(pos+1, filename.length);
	} else {
		return filename;
	}
}


function extract(title_id, tags_id, content_id){
	$.post(_base + 'tags/extract',
			{title: encodeURI($('#' + title_id).val()),
			text: encodeURI(get_rich_content(content_id))},
			 function(data) {
				$('#' + tags_id).val($.trim($('#' + tags_id).val()) + ' '+data);
	});
	return false;
}

function get_rich_content(content_id){
	var v = '';
	if(typeof qmEditor == 'object'){
		v = qmEditor.getEditor(content_id + 'Editor').getContent();
	} else {
		v = tinymce.activeEditor.getContent();
	}
	v = v.toLowerCase() == '<div></div>' ? '' : v;
	v = v.replace(/<[\/]?script>/ig,"");
	var r = new RegExp(document.location.protocol + "\/\/" + document.location.host, "ig");
	v = v.replace(r, "");
	return v;
}

function autoBreakWord(id) {
	if (/msie/i.test(navigator.userAgent)) return;
	var textBlock = document.getElementById(id);
	if(textBlock){
		var content = textBlock.innerHTML.split('').join('<wbr>');
		textBlock.innerHTML = content;
	}
}

String.prototype.format = function() {
	if (arguments.length == 0) {
		return this;
	}
	for(var str = this, i = 0; i < arguments.length; i++) {
		str = str.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
	}
	return str;
};

/**
 * 删除字符串左右两端的空格
 * 
 * @param string str 需要去除空白的字符串
 * @return string 去除前后空白的字符串
 * @author Garifeld
 */
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 通用post方法提交数据。刷新方式而不是异步方式。可用于一些危险操作，如数据的删除，post代替get提高安全性。
 * 
 * @param url 提交数据的地址
 * @param params javascript对象，对象中的属性会被作为参数提交
 * @author lorienliu
 */
function sendData(url, params) {
	var postForm = document.createElement("form");
		document.body.appendChild(postForm);
		postForm.style.display="none";
		postForm.id="postForm";
		postForm.method="post";
		postForm.action=url;

	for(var p in params){
		if(typeof(params[p])!="function"){
			var field = document.createElement("input");
			field.type="text";
			field.name=p;
			field.value=params[p];
			postForm.appendChild(field);
		}
	}
	postForm.submit();
}

/**
 * 计算微博的长度 微博字数计算规则 汉字 1 英文 0.5 网址 11 当中多空白当作一个空白 除去首尾空白
 * 
 * @author libzhang
 * @params str text 微博的正文
 */
function get_twitter_length_by_text(text) {
	var text = text.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*","gi"),'填充填充填充填充填充');
	text = text.replace(/\s{2,}/g, " ");
	var len = Math.ceil(($.trim(text.replace(/[^\u0000-\u00ff]/g,"aa")).length)/2);
	return len;
}

/**
 * 计算字符串的字数，汉字 1 其它 0.5
 */
function get_word_count_of_plain_text(text) {
	return Math.ceil(text.replace(/[^\u0000-\u00ff]/g, "aa").length / 2);
}

/**
 * 过滤掉HTML标签
 */
function filter_html_tags(content) {
    return content.replace(/<[^>]+>/g, "");
}

/**
 * 弹出式富文本编辑器
 * 
 * @author Joseph
 */
function popup_rich_editor(url) {
	$('#rich_editor_modal .modal_body').html('<iframe src=' + url + ' width="750px" height="365px" frameBorder=0 />');
	$('#rich_editor_modal').find('.modal_header span').text('选择文档').end()
							.modal('show');
}

/**
 * 把字符串里的表情文字转成图片
 * 
 * @author libzhang
 * @params str $str 待转换的字符串
 * @return str 表情文字转成了图片的img标签
 */
function parse_face(str) {
	var search = ["/微笑", "/撇嘴", "/色", "/发呆", "/得意", "/流泪", "/害羞", "/闭嘴", "/睡", "/大哭",
		"/尴尬", "/发怒", "/调皮", "/呲牙", "/惊讶", "/难过", "/酷", "/冷汗", "/抓狂", "/吐", "/偷笑", "/可爱",
		"/白眼", "/傲慢", "/饥饿", "/困", "/惊恐", "/流汗", "/憨笑", "/大兵", "/奋斗", "/咒骂", "/疑问", "/嘘",
		"/晕", "/折磨", "/衰", "/骷髅", "/敲打", "/再见", "/擦汗", "/抠鼻", "/鼓掌", "/糗大了", "/坏笑", "/左哼哼",
		"/右哼哼", "/哈欠", "/鄙视", "/委屈", "/快哭了", "/阴险", "/亲亲", "/吓", "/可怜", "/菜刀", "/西瓜",
		"/啤酒", "/篮球", "/乒乓", "/咖啡", "/饭", "/猪头", "/玫瑰", "/凋谢", "/示爱", "/爱心", "/心碎", "/蛋糕",
		"/闪电", "/炸弹", "/刀", "/足球", "/瓢虫", "/便便", "/月亮", "/太阳", "/礼物", "/拥抱", "/强", "/弱",
		"/握手", "/胜利", "/抱拳", "/勾引", "/拳头", "/差劲", "/爱你", "/NO", "/OK", "/爱情", "/飞吻", "/跳跳",
		"/发抖", "/怄火", "/转圈", "/磕头", "/回头", "/跳绳", "/挥手", "/激动", "/街舞", "/献吻", "/左太极", "/右太极"];
	var replace = [14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 15, 16, 96, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
		28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
		111, 112, 89, 113, 114, 115, 60, 61, 46, 63, 64, 116, 66, 67, 53, 54, 55, 56, 57, 117, 59, 75, 74, 69, 49, 76, 77,
		78, 79, 118, 119, 120, 121, 122, 123, 124, 42, 85, 43, 41, 86, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134];
	for (i = 0; i < search.length; i++) {
		var reg = new RegExp(search[i], "g");
		str = str.replace(reg, '<img src="' + km_path + 'img/face/' + replace[i] + '.gif" title="' + search[i].substr(1) + '"/>');
	}

	return str;
}

/**
 * @人名、k吧解析
 */
function parseAt(content) {
	var replacement = '<a href="' + km_path + 'user/$2" target="_blank">$1</a>$3';
	var word = content + ' ';
	content = word.replace(/(@([^\s@k_;][a-zA-Z0-9]+))([;\s\u4e00-\u9fa5])/ig, replacement);
	content.replace(/(\s*$)/g, '');

	var splited = content.split('@k_');
	if (splited.length >= 2) {
		var str = content; 
		var patt = new RegExp('@(k_([a-zA-Z0-9]+))', 'ig');
		var result;

		while ((result = patt.exec(str)) != null)  {
			var name = '';
			for (i = 0; i < group_map.length; i++) {
				if (group_map[i][0] == result[1]) {
					name = group_map[i][1];
				}
			}
			var replacement = '<a href="' + km_path + 'group/' + result[2] + '" target="_blank" >@' + name + '</a> ' ;
			content = content.replace(result[0]+" ", replacement+" ");
			content.replace(/(\s*$)/g, '');
		}
	}

	return content;
}

/**
 * 是否是IE
 * 
 * @author Joseph
 */
function isMSIE() {
	return navigator.userAgent.indexOf("MSIE")>0;
}

/**
 * 是否按下了Ctrl+Enter
 * 
 * @author Joseph
 */
function isCtrlAndEnter(event) {
	if ((event.keyCode === 10 || event.keyCode == 13) && event.ctrlKey) {
		return true;
	}

	return false;
}

/**
 * htmlEncode
 * 
 * @author Joseph
 */
function htmlEncode(str) {
	var div = document.createElement("div");
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
}

/**
 * htmlDecode
 * 
 * @author Joseph
 */
function htmlDecode(str) {
	var div = document.createElement("div");
	div.innerHTML = str;
	return div.innerHTML;
}

/**
 * htmlspecialchars
 * 
 * @author libzhang
 */
function htmlspecialchars(str) {
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	str = str.replace(/'/g, '&acute;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace('/\|/g', '&brvbar;');

	return str;
}

/**
 * in_array
 * 
 * @author cattyhuang
 */
function in_array(needle, arr) {
	var length = arr.length;
	for(var i = 0; i < length; i++) {
		if(arr[i] == needle) {
			return true;
		}
	}
	return false;
}

/**
 * 删除数组中指定元素
 *
 * @author brandwang
 */
function delete_ele_in_array(el, array) {
	var index = -1;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == el) {
			index = i;
		}
	}
	if (index > -1) {
		array.splice(index, 1);
	}
}

/**
 * 禁止冒泡
 */
function stop_propagation(e) {
	if (window.event) {
		window.event.cancelBubble = true;
	} else {
		e.stopPropagation();
	}
}

function is_blank_html(html) {
	if (html.length > 100) {
		return false;
	}
	if (!html.trim()) {
		return true;
	}
	var blanks = ['&nbsp;', '<br>', '<br\\/>', '<br \\/>', '<p>'];
	for (var i = 0; i < blanks.length; i++) {
		html = html.replace(eval('/' + blanks[i] + '/g'), '');
	}; 
	if (!html.trim()) {
		return true;
	}
	return false;
}
// 这个函数是从km_big_header.js中拷贝过来的，在文档编辑页面需要
function drop_sth(drop_sth_id) {
	$('#'+drop_sth_id).show();
	var func = function(e){
		if (!$('#'+drop_sth_id).has(e.target)) {
			$('#'+drop_sth_id).hide();
			$(document).unbind('click', func);
		}
	};
	// setTimeout(function(){$(document).click(func);}, 1);
	return false;
}


function format_size(size) {
	var i, sizes = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	for (i = 0; (size > 1024) && typeof sizes[i + 1] !== 'undefined'; i++) {
		size /= 1024;
	}
	return Math.round(size) + sizes[i];
}

function init_videos(){
	var videos = [],
		audios = [];
	$(".jwplayer_wrapper").each(function(){
		videos.push($(this).data("videoid"));
	});

	$(".jwplayer_audio_wrapper").each(function(){
		audios.push($(this).data("videoid"));
	});
	
	var video_tip = '<div class="video_left_block"><div class="video_notice">视频正在转码中，大概需要30分钟左右</div></div>';
	var audio_tip = '<div class="video_left_block"><div class="video_notice">音频正在转码中，大概需要30分钟左右</div></div>';

	var videos_length = videos.length;
	if(videos_length > 0){
		var url = km_path + 'videos/view_video_url';
		$.post(url, {video_ids : videos}, function(data){
			if(data.result == 'ok') {
				for(var i=0; i<videos_length; i++){
					var media_id = 'jwplayer_wrapper_' + videos[i];
					if(data.url[i] != '') {
						jwplayer(media_id).setup({
							flashplayer: km_path + "flash/pl.swf",
							file: data.url[i],
		                    image: km_path + 'files/videos/' + videos[i] + '/' + data.video_pic[i],
							width:640,
							height:480
						});
					} else {
						$('#'+media_id).hide().after(video_tip);
					}
				}
			} else {
				for(var i=0; i<videos_length; i++){
					var media_id = 'jwplayer_wrapper_' + videos[i];
					$('#'+media_id).hide().after(video_tip);
				}
			}
			
		}, 'json');
	}
	var audios_length = audios.length;
	if(audios_length > 0){
		var url = km_path + 'videos/view_video_url';
		$.post(url, {video_ids : audios}, function(data){
			if(data.result == 'ok') {
				for(var i=0; i<audios_length; i++){
					var media_id = 'jwplayer_wrapper_' + audios[i];
					if(data.url[i] != '') {
						jwplayer(media_id).setup({
							flashplayer: km_path + "flash/pl.swf",
							file: data.url[i],
		                    image: km_path + 'files/videos/' + audios[i] + '/' +data.video_pic[i],
							width: 680,
							height: 24,
							controlbar: 'bottom'
						});
					} else {
						$('#'+media_id).hide().after(audio_tip);
					}			
				}
			} else {
				for(var i=0; i<audios_length; i++){
					var media_id = 'jwplayer_wrapper_' + audios[i];
					$('#'+media_id).hide().after(audio_tip);
				}
			}
			
		}, 'json');
	}
}

//让所有在.km_view_content下的图片自适应压缩
var img_compression = function(ctrl, callback) {
	var image = ctrl ? ctrl.find('.km_view_content img') : $('.km_view_content img');
	image.each(function() {
		var self = $(this);
		var parent = self.parent();
		var isrc = self.attr('src');
		var img = new Image();
		img.onload = function() {
			var parent_width = get_parent_width(parent);
			var km_view_content_width = $('.km_view_content').width();

			if(img.width > parent_width) {

				// 如果父元素是a标签 即图片链接场景，则不做点击跳转功能
				if (self.parent()[0] && self.parent()[0].tagName != 'A') {
                    self.addClass('amplify');
                    if (!$(".km_view_content").hasClass("no-compression-img")) {
                        //这样是保证只绑定一次，否则会打开多份。
                        self[0].onclick = function () {
                            window.open(isrc);
                        };
                    }
                }

				if (parent_width && parent_width < km_view_content_width) {
					self.attr({'style': 'max-width: ' + parent_width + 'px'});
				}
			}
			if (typeof callback == 'function') {
				callback();
			}
		};
		img.src = isrc;
		
		if (typeof(self.attr('alt')) != 'undefined') {
			self.attr('alt', '');
		}
	});
};

//获取父元素容器的宽度
var get_parent_width = function (ctrl) {
	var display = ctrl[0].style.display;
	ctrl.css('display', 'block');
	var width = ctrl.width() - parseInt(ctrl.css('text-indent'));
	if(!ctrl.is(":visible")) {
		var $outer = ctrl.closest(".km_view_content");
		var outer_display_orig = $outer[0].style.display;
		$outer.css("display", "block");
		width = ctrl.width() - parseInt(ctrl.css('text-indent'));
		$outer.css("display", outer_display_orig);
	}
	
	ctrl.css('display', display);
	return width;
};

//设置iframe的高度，在iframe的onload方法中调用，可以使iframe高度自适应
function set_iframe_height(obj) {
	var win = obj; 
	if (document.getElementById) {
		if (win && !window.opera) {
			if (win.contentDocument && win.contentDocument.body.offsetHeight) {
				win.height = win.contentDocument.body.offsetHeight;
			}
			else if(win.Document && win.Document.body.scrollHeight) {
				win.height = win.Document.body.scrollHeight;
			}
		}
	}
}

//操作栏评论按钮点击定位到评论框
$(document).delegate('.comment_link', 'click', function() {
	var scroll_height = $('body').height();
	$(window).scrollTop(scroll_height);
	$('.js-comment-textarea').focus();
});


$(function() {
	$('.add_one').live('click', function(){
		if ($('#add_one').size() == 0) {
			$('<div id="add_one">+1</div>').appendTo('body');
		};
		var self = $(this);
		var x = self.offset().left;
		var y = self.offset().top;
		var add_one = $('#add_one').show();
		add_one.offset(function(n, c){
			new_pos=new Object();
			new_pos.left=x + self.width()/2 - $(this).width()/2;
			new_pos.top=y;
			return new_pos;
		});
		add_one.css('opacity', 100);
		add_one.animate({
			top : y - 20,
			opacity : '0'
		}, 800, function(){
			add_one.hide();
		});
	});
	
	//让所有在.km_view_content下的图片自适应压缩
	img_compression();

	$('.link-confirm').live('click', function(){
		var self = $(this);
		var message = "你确定删除么？";
		var link = self.attr('href');
		$.confirm(message, function(){
			location.href = link;
		});
		return false;
	});

	// 头条icon动画
	$('#km-headline-icon').hover(function() {
		$('.pageflip-top img').stop().animate({width: '60px', height: '60px'}, 300);
		$('.pageflip-bottom').stop().animate({width: '52px', height: '52px'}, 300);	
	}, function() {
		$('.pageflip-top img').stop().animate({width: '50px', height: '50px'});
		$('.pageflip-bottom').stop().animate({width: '43px', height: '43px'});
	});
});

//获取url参数
$.urlParam = function(name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results ? results[1] : 0;
};

$.extend({
	getUrlParams: function() {
		var vars = {}, hash;
		var idx = window.location.href.indexOf('?');
		if (idx < 0) {
			return vars;
		}
		var hashes = window.location.href.slice(idx + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlParam: function(name) {
		return $.getUrlVars()[name];
	}
});

//搜索广告位 链接点击
$('.search_advertise  a').mouseover(function() {
	var search_advertise_group_id = $('#search_advertise_id').data('search-advertise-id');

	//对被点击的a链接href进行判断，进行跳转或者加后缀操作
	var _this = $(this);
	var a_href = _this[0].href;

	if ( a_href.indexOf('km.oa.com') > -1 && a_href.indexOf('search_ad') < 0 ) {
		a_href = a_href + '?kmref=search_ad&kmad=' + search_advertise_group_id;
		_this[0].href = a_href;
	} else if( a_href.indexOf('km.oa.com') < 0 && a_href.indexOf('tem_page') < 0) {
		a_href = km_path + "pages/tem_page?link=" + a_href + "&kmref=search_ad";
		_this[0].href = a_href;
	}
});

$('.search_advertise  a').click(function() {
	var search_advertise_group_id = $('#search_advertise_id').data('search-advertise-id');

	//点击广告位之后 点击数量+1
	var url = km_path + "admin/click_count_increase";
	$.post(url, {advertise_id : search_advertise_group_id}, function() {

	});
});

// Object assign polyfill
if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}

/**
 * 返回浏览器版本
 * @returns {*}
 */
function browser_type() {
	var userAgent = navigator.userAgent;

	var isOpera = userAgent.indexOf("Opera") > -1; // 判断是否Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // 判断是否IE浏览器
	var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; // 判断是否IE的Edge浏览器
	var isFF = userAgent.indexOf("Firefox") > -1; // 判断是否Firefox浏览器
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; // 判断是否Safari浏览器
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // 判断Chrome浏览器

	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);

		var fIEVersion = parseFloat(RegExp["$1"]);
		if(fIEVersion == 7) {
			return "IE7";
		} else if(fIEVersion == 8) {
			return "IE8";
		} else if(fIEVersion == 9) {
			return "IE9";
		} else if(fIEVersion == 10) {
			return "IE10";
		} else if(fIEVersion == 11) {
			return "IE11";
		} else {
			return "0";
		}//IE版本过低
	}//isIE end

	if (isFF) { return "FF";}
	if (isOpera) { return "Opera";}
	if (isSafari) { return "Safari";}
	if (isChrome) { return "Chrome";}
	if (isEdge) { return "Edge";}
}

/**
 * react浏览器版本检测 IE>8
 * 不在此范围内 页面顶部显示小黄条提醒
 * TODO 后续发现有问题的浏览器版本持续补充
 */
function browser_detection() {
	var browser_type = window.browser_type();

	if (browser_type == 'IE7' || browser_type == 'IE8' || browser_type == 'IE9' || browser_type == '0') {
		if ($('.browser-bulletin').length == 0) {
            // 显示顶部小黄条
            $("#bulletin_span").after("<div style='color:#333' class='bulletin browser-bulletin'><p>您当前使用的浏览器版本较低，页面可能会有显示异常，推荐使用Chrome或QQ浏览器。</p></div>");
        }
	}
}

function toggleForbidScrollThrough() {
	var scrollTop;
	function getScrollTop() {
		return document.body.scrollTop || document.documentElement.scrollTop;
	}
	return function toggleForbidScrollThroughInner(isForbide) {
		if (isForbide) {
			scrollTop = getScrollTop();
			// position fixed会使滚动位置丢失，所以利用top定位
			document.body.style.position = 'fixed';
			document.body.style.top = '-' + scrollTop + 'px';
		} else {
			// 恢复时，需要还原之前的滚动位置
			document.body.style.position = 'static';
			document.body.style.top = '0px';
			window.scrollTo(0, scrollTop);
		}
	};
}









