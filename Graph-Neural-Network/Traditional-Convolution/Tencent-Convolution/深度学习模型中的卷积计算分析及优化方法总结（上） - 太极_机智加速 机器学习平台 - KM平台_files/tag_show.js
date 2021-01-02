/**
 * 以下情况会调用此函数：
 * 1. 当标签选择器选择一个标签后，通过回调函数调用
 * 2. 输入标签文字后按空格键
 * 3. 选择推荐标签
 * 4. 进入编辑页面，标签输入表单框里面已经有了标签
 * @param event 标签选择器回调函数的事件,为空时表示进入编辑页面
 * @param item 在标签选择器中选择的项目"
 
 * 这里需要重构
 */
function modify_input(event, item) {
	var $tag = $('#PostTags');
	var $tags = $('#PostTag');
	var html = '';
	if (!event) {
		var tag_item = item.split(' ');
		var length = tag_item.length;
		$('.tag_inner_input').remove();
		for(var i = 0; i < length; i++) {
			html += '<span class="tag_inner_input"><span class="topic">' + htmlspecialchars(tag_item[i] + '') + '</span><span class="tag_delete q_delete_tag bg_sprites"></span></span>';
			$tags[0].value = item + ' ';
		}
	} else {
		html += '<span class="tag_inner_input"><span class="topic">' + htmlspecialchars(item + '') + '</span><span class="tag_delete q_delete_tag bg_sprites"></span></span>';
		$tags[0].value += htmlspecialchars(item + '') + ' ';
	}
	$tag.val('');
	$tag.before(html);
	hide_hint_label($tag);
	setTimeout(function() {
		$tag.focus();
	}, 10);
}

/**
 * 以下情况会调用此函数：
 * 1. 当标签选择器选择一个标签后，通过回调函数调用
 * 2. 输入标签文字后按空格键
 * 3. 选择推荐标签
 * 4. 进入编辑页面，标签输入表单框里面已经有了标签
 * @param event 标签选择器回调函数的事件,为空时表示进入编辑页面
 * @param item 在标签选择器中选择的项目"
 */
function bookmark_modify_input(event, item) {
	var $tag = $('#PostTags');
	var $tags = $('#PostTag');
	var html = '';
	if (!event) {
		var tag_item = item.split(' ');
		var length = tag_item.length;
		$('.tag_inner_input').remove();
		for(var i = 0; i < length; i++) {
			html += '<span class="tag_inner_input"><span class="topic">' + htmlspecialchars(tag_item[i] + '') + '</span><span class="bookmark_tag_delete q_delete_tag bg_sprites"></span></span>';
			$tags[0].value = item + ' ';
		}
	} else {
		html += '<span class="tag_inner_input"><span class="topic">' + htmlspecialchars(item + '') + '</span><span class="bookmark_tag_delete q_delete_tag bg_sprites"></span></span>';
		$tags[0].value += htmlspecialchars(item + '') + ' ';
	}
	$tag.val('');
	$tag.before(html);
	hide_hint_label($tag);
	setTimeout(function() {
		$tag.focus();
	}, 10);
}
/**
 * 前端删除一个标签，包括点击叉和使用回退键
 * @param self jq对象
 * @param type 包括‘close_click’点击叉和‘backspace’系统回退键
 */
function handle_tag_delete(self, type) {
	var $target;
	if (type === 'close_click') {
		$target = self.parent();
	} else if (type === 'backspace') {
		$target = self.prev();
	}
	var $tag = $('#PostTags');
	var $tags = $('#PostTag');
	var tag_value = $.trim($target.children('span').text());
	var tags_value = $('#PostTag').val();
	$target.remove();
	$tags.val(tags_value.replace(tag_value + ' ', ''));
	$tag.focus();
	if($tags.val() === '') {
		show_hint_label($tag);
	}
}
//隐藏input框提示语
function hide_hint_label($tag) {
	$tag.next('.input_hint_label').css({'color': '#fff'});
	$tag.next('.input_hint_label').css({'z-index': '-1'});
	$tag.css({'width': '12px'});
}
//展示input框提示语
function show_hint_label($tag) {
	$tag.next('.input_hint_label').css({'color': '#999'});
	$tag.next('.input_hint_label').css({'z-index': '998'});
	$tag.css({'width': ''});
}
/**
 * 获得text长度，规则为 
 * 中文2个字符， 英文1个字符
 * @param text 原始字符串
 * @return int 字符串长度
 */
function get_len(text) {
	text = text.replace(/\s{2, }/g, " ");
	var len = ($.trim(text).replace(/[^\u0000-\u00ff]/g, "aa")).length;
	return len;
}