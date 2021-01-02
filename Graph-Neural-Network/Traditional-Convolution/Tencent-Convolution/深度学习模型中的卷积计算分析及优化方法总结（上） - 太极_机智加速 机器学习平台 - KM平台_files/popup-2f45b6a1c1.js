/**
 * alert框和confirm框
 * 复用bootstrap的modal进行一层简单封装，可保留原有的调用方式
 * 重构by cattyhuang
 */

//alert框
$.alert = function(txt, func) {
	var alert_box = $('#alert_box');
	if (alert_box.length === 0) {
		alert_box = $('<div id="alert_box" class="modal alert_box hide"></div>');
		var alert_box_html = [
			'<div class="modal_header">',
				'<a class="close" data-dismiss="modal" href="javascript:void(0);">&times;</a>',
				'提醒',
			'</div>',
			'<div class="modal_body">',
				'<span class="tip_text"></span>',
			'</div>',
			'<div class="modal_footer">',
				'<a href="javascript:void(0);" class="km-btn km-btn-default" data-dismiss="modal">确定</a>',
			'</div>'
		];
		alert_box.html(alert_box_html.join(''));
		$('body').append(alert_box);
	}
	alert_box.find('.tip_text').html(txt);
	alert_box.modal('show');
	//在隐藏alert框前的回调函数，点击确定按钮和关闭按钮都会触发
	if (typeof func === 'function') {
		alert_box.on('hidden.bs.modal', func);
	}
}

$.modal = function(innerHTML, submitCb, options) {
	var confirm_box = $('#modal-box');
	if (confirm_box.length === 0) {
		confirm_box = $('<div id="modal-box" class="new-modal hide"></div>');
		$('body').append(confirm_box);
	    var confirmHtml = `<div class="modal-header">
								<span>${(options && options.headerText) ? options.headerText : "确认"}</span>
								<a class="close" data-dismiss="modal" href="javascript:void(0);">&times;</a>
							</div>
							<div class="modal_body">${innerHTML}</div>
							<div class="modal_footer">
								<a href="javascript:void(0);" class="km-btn km-btn-secondary cancel">${((options && options.cancelText) ? options.cancelText : "取消")}</a>
								<a href="javascript:void(0);" class="km-btn submit km-btn-default butten_success_ie">${((options && options.sureText) ? options.sureText : "确定")}</a>
							</div>`;
		confirm_box.html(confirmHtml);
	}
	confirm_box.show();
};

$.confirmNew = function(txt, callback, cancel_func, options) {
	var confirm_box = $('#confirm_box_new');
	if (confirm_box.length === 0) {
		confirm_box = $('<div id="confirm_box_new" class="modal confirm_box_new hide"></div>');
		$('body').append(confirm_box);
	}
	if (options && options.containerClassName) {
		confirm_box.addClass(options.containerClassName);
	}

	var confirm_box_html = [
		'<div class="modal_header">',
		'<a class="close" data-dismiss="modal" href="javascript:void(0);">&times;</a>',
		(options && options.headerText) ? options.headerText : "确认",
		'</div>',
		'<div class="modal_body">',
		'<div class="tip_text"></div>',
		'</div>',
		'<div class="modal_footer' + ((options && options.hideSubmit && options.hideCancel) ? ' hide' : '') + '">',
		'<span class="tips hide">*请选择分类</span>',
		('<a href="javascript:void(0);" class="km-btn submit ' + (options && options.hideSubmit ? 'hide ' : '') + (options && options.footerReverse ? 'km-btn-secondary cancel' : 'km-btn-default butten_success_ie') + '">' + ((options && options.sureText) ? options.sureText : "确定") + '</a>'),
		('<a href="javascript:void(0);" class="km-btn ' + (options && options.footerReverse ? 'km-btn-default butten_success_ie' : 'km-btn-secondary cancel') + '" data-dismiss="modal" ' + (options && options.hideCancel ? 'style="display: none"' : '')  + '>' + ((options && options.cancelText) ? options.cancelText : "取消") + '</a>'),
		'</div>'
	];
	var confirm_box_html = $(confirm_box_html.join(''));
	confirm_box_html.find('.tip_text').html(txt);
	confirm_box.html(confirm_box_html);
	confirm_box.modal('show');
	//确定
	if (typeof callback === 'function') {
		confirm_box.find('.submit')[0].onclick = function() {
			// confirm_box.modal('hide');
			callback();
			// return false;
		}
	}
	//取消
	if (typeof cancel_func === 'function') {
		confirm_box.find('.cancel')[0].onclick = cancel_func;
	}
	return confirm_box;
}
//confirm框
$.confirm = function(txt, func, cancel_func, before_show_func, after_hide_func) {
	var confirm_box = $('#confirm_box');
	if (confirm_box.length === 0) {
		confirm_box = $('<div id="confirm_box" class="modal confirm_box hide"></div>');
		var confirm_box_html = [
			'<div class="modal_header">',
				'<a class="close" data-dismiss="modal" href="javascript:void(0);">&times;</a>',
				'确认',
			'</div>',
			'<div class="modal_body">',
				'<span class="logo bg_sprites"></span>',
				'<span class="tip_text"></span>',
			'</div>',
			'<div class="modal_footer">',
				'<a href="javascript:void(0);" class="km-btn km-btn-default submit butten_success_ie">确定</a>',
				'<a href="javascript:void(0);" class="km-btn km-btn-secondary cancel" data-dismiss="modal">取消</a>',
			'</div>'
		];
		confirm_box.html(confirm_box_html.join(''));
		$('body').append(confirm_box);
	}
	confirm_box.find('.tip_text').html(txt);
	//显示comfirm框前的操作
	if (typeof before_show_func === 'function') {
		confirm_box.on('show.bs.modal', before_show_func);
	}
	//隐藏comfirm框后的操作
	if (typeof after_hide_func === 'function') {
		confirm_box.on('hidden.bs.modal', after_hide_func);
	}
	confirm_box.modal('show');
	//确定
	if (typeof func === 'function') {
		confirm_box.find('.submit')[0].onclick = function() {
			func();
			confirm_box.modal('hide');
			return false;
		}
	}
	//取消
	if (typeof cancel_func === 'function') {
		confirm_box.find('.cancel')[0].onclick = cancel_func;
	}
};

$.tips = function(txt) {
	var type = arguments[1] ? arguments[1] : 'success';
	var tips_html = $('<div class="km_message"><span class="logo bg_sprites"></span><span class="tip_text"></span></div>');
	tips_html.addClass(type);
	tips_html.find('.tip_text').html(txt);
	$('body').append(tips_html);
	setTimeout(function(){
		tips_html.fadeOut(500);
	}, 1500);
}
