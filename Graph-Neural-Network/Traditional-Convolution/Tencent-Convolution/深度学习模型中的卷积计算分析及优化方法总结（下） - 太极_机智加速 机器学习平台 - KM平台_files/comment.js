define(function (require) {
	require('json2');
	require('km_widgets/km_pages');
	require('common/highlight/highlight.min');
	require('jquery-autocomplete/jquery.autocomplete');
	require('jquery/jquery.autosize.min');
	require('km_widgets/enable_changed_form_confirm');

	var $commentCommonData = $('#comment-common-data');
	var target_type = $commentCommonData.data('target-type');
	var target_id = $commentCommonData.data('target-id');
	var avatar_path = $commentCommonData.data('avatar-path');
	var limit = $commentCommonData.data('limit');
	if (typeof current_user == 'undefined') {
		current_user = $commentCommonData.data('current-user');
	}
	if (typeof (group_map) == 'undefined') {
		group_map = new Array();
	}

	/**
	 * 加载评论列表
	 */
	window.loadComment = function (total) {
		//渲染函数
		var init = 1;
		function render(data) {
			// 评论模板渲染
			var source = $('#comment-box-template').html();
			source = source.replace(/\<\\\//g, '</');

			var template = Handlebars.compile(source);
			$('#super-comments-content .comment').html(template(data));

			if (init) {
				init = 0;
				// 加载ikm tips、人名映射、自动高度
				loadTips();
				// 对评论的顶
				diggComment();
				// 删除评论
				deleteComment();
				// 回复框的隐藏和展示
				toggleReplyBox();
				// 评论 & 回复
				textCommentSubmit();
				// 表情
				showFace();
				//自适应压缩图片
				img_compression();
				// 初始化富文本编辑器
				tinymce.init(tinymce_config);
			}
			//给@rtx增加class
			addatRtxColor()
		}
		var url = km_path + 'comments/get_comments_count';
		var page_total;
		$.get(url, {
			target_type: target_type,
			target_id: target_id
		}, function (data) {
			var data = JSON.parse(data);

			page_total = Math.ceil(data.comments_count / limit);
			if (page_total > 1) {
				$("#commentsPagination").show();
			}
			// 此处往下为翻页真正内容
			var params = {
				page_total: page_total,
				url: km_path + 'comments/show',
				anchor: 'super-comments',
				param_data: { target_type: target_type, target_id: target_id, limit: limit },
				onsuccess: function (data) {
					data.current_user = $commentCommonData.data('current-user');
					render(data);
				}
			};
			$("#commentsPagination").find(".pages").km_pages(params);
		});
	};

	/**
	 * 加载ikm tips、人名映射、自动高度
	 */
	function loadTips() {
		$.fn.tooltip && $(".js-show-cell").tooltip({
			offset: [0, 0],
			tipType: "white",
			width: 170,
			onBeforeShow: function () {
				var title = this.getTrigger().data("title");
				var link = '</br>想随时随地上KM?<a target="_blank' + '" href="' + 'http://km.oa.com/pages/ikm">点此安装</a>';
				this.setContent(title + link);
			}
		});

		// at user or group
		var userAtUrl = km_path + 'apis/user_at.php';
		$('.js-comment-textarea').autocomplete(userAtUrl, {
			multiple: true,
			multipleSeparator: ' ',
			width: 160,
			minChars: 2,
			max: 50,
			delay: 100,
			formatResult: function (data, value) {
				if (('' + data).match(/^k_/)) { //显示k吧中文名
					var group_full_name = '' + data;
					var group_name = group_full_name.split("(")[1].replace(")", "");
					return "@" + group_name;
				} else {
					return ("@" + data).replace(/\(.*?\)/, "");
				}
			}
		});
		//用户选择后,存储需要替换的k吧中文名和code映射
		$('.js-comment-textarea').result(function (event, data, formatted) {
			if (('' + data).match(/^k_/)) {
				var group_full_name = '' + data;
				var group_code = group_full_name.split('(')[0];
				var group_name = group_full_name.split('(')[1].replace(')', '');
				group_map.push(new Array(group_code, group_name));
			}
		});

		// 富文本自适应高度
		$('.js-autoheight').autosize();
	}

	/**
	 * 对评论的顶
	 */
	function diggComment() {
		$('#super-comments').delegate('.js-comment-digg', 'click', function () {
			var self = $(this);
			var comment_id = self.attr('data-comment-id');

			var url = km_path + 'operations/recommend';

			$.ajax({
				url: url,
				type: "GET",
				dataType: "jsonp",
				data: {
					target_id: comment_id,
					target_type: 'Comment'
				},
				success: function (ret) {
					if (ret.result == 'ok') {
						self
							.html('<span class="bg_sprites comment-icon comment-digged-icon"></span> 顶<span> (<span class="digg-count">' + ret.digg_count + '</span>)</span>')
							.fadeIn('slow');
					}
				}
			});
		});
	}

	/**
	 * 删除评论
	 */
	function deleteComment() {
		$('#super-comments').delegate('.js-comment-delete', 'click', function () {
			var comment_id = $(this).attr('data-comment-id');
			var comment_type = $(this).attr('data-comment-type');
			var wording = (comment_type === 'Comment') ? '删除这条评论后，它的所有回复也将跟随着被删除，确认要删除吗？' : '你确认要删除这条回复吗？';
			$.confirm(wording, function () {
				$.ajax({
					url: km_path + 'operations/comment_delete',
					type: 'GET',
					cache: false,
					data: {
						comment_id: comment_id
					},
					success: function (data) {
						var ret = JSON.parse(data);
						if (ret.result == 'ok') {
							$('.js-comment-' + comment_id).fadeOut();
							// 根据评论框的高度来判断当前页面是否完全被删除
							var height = document.getElementsByClassName("km-comment-container")[0].offsetHeight
							var aCommentItemHeight = document.getElementsByClassName("km-comment-container")[0].getElementsByClassName("comment")[0].offsetHeight;
							if (height <= aCommentItemHeight * 1.1) {
								// 重新拉取数据渲染页面
								// 获取当前被激活的page
								var currentPage = document.querySelectorAll(".current.jump_link")[0] ? document.querySelectorAll(".current.jump_link")[0].innerText : 1;
								currentPage = currentPage == 1 ? 1 : currentPage - 1
								// 重新渲染函数
								afterDeleteApageRenderComment(currentPage)
							}

						}
					}
				});
			});

			return false;
		});
	}
	// 把当前页全部评论删除后 重新渲染分页组件
	function afterDeleteApageRenderComment(currentPage, total) {
		currentPage = currentPage ? currentPage : 1
		//渲染函数
		function render(data) {
			// 评论模板渲染
			var source = $('#comment-box-template').html();
			source = source.replace(/\<\\\//g, '</');
			var template = Handlebars.compile(source);
			$('#super-comments-content .comment').html(template(data));
			// 给@rtx 增加背景
			addatRtxColor()
		}
		var url = km_path + 'comments/get_comments_count';
		var page_total;
		$.get(url, {
			target_type: target_type,
			target_id: target_id
		}, function (data) {
			var data = JSON.parse(data);
			page_total = Math.ceil(data.comments_count / limit);
			if (page_total > 1) {
				$("#commentsPagination").show();
			}
			// 此处往下为翻页真正内容
			var params = {
				page_total: page_total,
				url: km_path + 'comments/show',
				anchor: 'super-comments',
				param_data: { target_type: target_type, target_id: target_id, limit: limit },
				page_now: currentPage,
				onsuccess: function (data) {
					data.current_user = $commentCommonData.data('current-user');
					render(data);
				}
			};
			document.querySelectorAll("#commentsPagination .pages")[0].innerHTML = ""
			$(".hide#commentsPagination").find(".pages").km_pages(params);
		});
	};

	/**
	 * 纯文本 评论 & 回复
	 */
	function textCommentSubmit() {
		var operation_data = $(".js-operations-data").data();
		$('#super-comments').delegate('.js-comment-submit', 'click', function (e) {
			var _this = $(this);

			var $commentBox = $(this).parents('.km-comment-box');
			var $commentTextarea = $commentBox.find('textarea');
			var commentType = $(this).attr('data-operate');
			var commentContainer = commentType == 'Reply' ? $commentBox.siblings('.replies') : $('.km-comment-container');

			var comment_data = $('#comment-common-data').data();
			var targetType = comment_data['targetType'];
			var targetId = comment_data['targetId'];
			var content = $commentTextarea.val();
			var group_id = operation_data ? operation_data.group_id : 0;
			if ($(e.target).data('operate') == 'Reply') {
				targetType = 'Comment';
				targetId = $(e.target).data('target-id');
			}

			for (var i = 0; i < group_map.length; i++) {
				content = content.replace("@" + group_map[i][1] + " ", "@" + group_map[i][0] + " ");
			}
			$commentTextarea.val(content);
			if ($.trim(content) == '') {
				$.alert('评论不能为空');
			} else {
				// 评论按钮点击后disable，防止二次提交
				$('.js-comment-submit').button({ loadingText: '发表中...' }).button('loading');
				$.ajax({
					url: km_path + 'operations/comment_add',
					type: 'POST',
					data: {
						target_id: targetId,
						target_type: targetType,
						group_id: group_id,
						content: $.trim(content)
					},
					success: function (data) {
						var data = JSON.parse(data);
						if (data.result == 'ok') {
							// @人名、k吧解析
							data.content = parseAt(data.content);
							// 区分评论和回复
							data.type = commentType;
							// 评论模板渲染
							var source = $('#comment-add-template').html();
							source = source.replace(/\<\\\//g, '</');

							var template = Handlebars.compile(source);
							commentContainer.append(template({ kmComment: data }));
							//给@rtx增加class
							addatRtxColor()
							$commentTextarea.val('');

							if (_this.parents('.km-comment-box').first().attr('data-target-id')) {
								var com_Id = _this.parents('.km-comment-box').first().attr('data-target-id');
								var $comBox = $('.comment-box-' + com_Id);

								$comBox.toggle();
							}
						}
						// 清空评论相关的本地储存
						reset_comment_localstorage();
						// 按钮reset
						$('.js-comment-submit').button('reset');
						$('#comment-textarea').attr('style', '');
					}
				});
			}
		});
	}

	/*
	* 添加富文本评论
	*/
	$('#super-comments').delegate('.comment-submit-button', 'click', function () {
		$('.comment-submit-button').attr('disabled', true).addClass('disabled');

		var v = tinymce.activeEditor.getContent();
		v = v.toLowerCase() == '<div></div>' ? '' : v;
		v = v.replace(/<[\/]?script>/ig, "");

		var contentText = $.trim($(v).text());
		var img_patt = new RegExp(/<IMG[\s\w\=\"\/\.]+/gi);
		contentText = contentText || img_patt.exec(v);
		var v_temp = $.trim(v).replace(/<\s*br\s*\/?>/gi, '');
		if (!contentText || !v_temp === '' || /^<div>(&nbsp;(\s)*)*<\/div>$/i.test(v_temp) || /^(&nbsp;(\s)*)+$/.test(v_temp)) {
			$.alert('评论内容不能为空');
			$('.comment-submit-button').attr('disabled', false).removeClass('disabled');
		} else {
			if (window.parent.$('.comment_share_to_twitter input').is(':checked')) {
				window.parent.share_to_twitter(v.replace(/<[^>]+>/g, ""));
			}
			// 评论按钮点击后disable，防止二次提交
			$('.js-comment-submit').button({ loadingText: '发表中...' }).button('loading');
			$.ajax({
				url: km_path + 'operations/comment_add?is_richtext=true',
				type: "POST",
				dataType: "jsonp",
				data: {
					target_id: target_id,
					target_type: target_type,
					content: v
				},
				success: function (data) {
					data.content = parseAt(data.content);
					data.type = 'Comment';
					// 评论模板渲染
					var source = $('#comment-add-template').html();
					source = source.replace(/\<\\\//g, '</');
					var template = Handlebars.compile(source);
					$('.km-comment-container').append(template({ kmComment: data }));
					//图片自适应压缩
					img_compression();
					// 清空评论相关的本地储存
					reset_comment_localstorage();
					//给@rtx增加class
					addatRtxColor()
					// 按钮reset
					$('.js-comment-submit').button('reset');
				}
			});
			//发表完成后，清空富文本内容，并恢复提交按钮
			tinymce.activeEditor.setContent('');
			$('.comment-submit-button').attr('disabled', false).removeClass('disabled');
		}
	});

	/**
	 * 回复框的隐藏和展示
	 */
	function toggleReplyBox() {
		$('#super-comments').delegate('.js-comment-reply', 'click', function () {
			var nick = $(this).attr('data-comment-nick');
			var text = '';
			if (nick != undefined) {
				text += '@' + nick + ' ';
			}
			var commentId = $(this).attr('data-comment-id');
			var $commentBox = $('.comment-box-' + commentId);
			$commentBox.toggle();
			$commentTextarea = $commentBox.find('textarea');
			$commentTextarea.focus();
			$commentTextarea.val(text);

			return false;
		});
	}

	/**
	 * 表情
	 */
	function showFace() {
		$('.js-comment-face').click(function (e) {
			var face_wrap = $('#face_wrap');
			var offset = $(this).offset();
			window.face_target = $(this).parents('.km-comment-box').find('textarea'); //表示选取好了表情以后显示在哪个输入框

			if (face_wrap.is(':hidden')) {
				face_wrap.css({ top: offset.top + 20 + 'px', left: offset.left + 'px' }).show();
				window.face_current = this;
			} else {
				if (window.face_current == this) {
					face_wrap.hide();
				} else {
					face_wrap.css({ top: offset.top + 20 + 'px', left: offset.left + 'px' });
					window.face_current = this;
				}
			}
			return false;
		});
	}

	/**
	 * 以下是评论的富文本编辑器使用的JS
	 */
	function getUserSelection(win) {
		if (win.getSelection) {
			return win.getSelection();
		} else if (win.document.selection) {
			return win.document.selection.createRange();
		}
	}

	function getRange(selection) {
		if (selection.getRangeAt) {
			return selection.getRangeAt(0);
		} else {
			var range = document.createRange();
			range.setStart(selection.anchorNode, selection.anchorOffset);
			range.setEnd(selection.focusNode, selection.focusOffset);
			return range;
		}
	}

	function check_img_format(e) {
		var file_name = $(e).val();
		$("#ipt_UploadFile_name").text(file_name);
		var arr = e.value.split("."),
			arr_l = arr.length;

		if (arr[arr_l - 1].toLowerCase() === "bmp") {
			alert("不支持上传这个类型的图片!");
			document.forms['img_upload_form'].reset();
		}
	}
	function uploadImgUrl(urls, cb) {
		$.ajax({
			url: km_path + "gkm/api/operations/crawl-images",
			data: {
				urls: urls
			},
			type: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'  //multipart/form-data;boundary=--xxxxxxx   application/json
			},
			success: function(data){
				if (data.code === 0) {
					cb(data.data);
				}
			}
		})
	}
	var tinymce_config = {
		mode: "exact",
		language: "zh_CN",
		elements: "km-editor",
		skin: false,
		plugins: [
			"paste link lists code km_imgimport insert_code",
			"contextmenu textcolor fullscreen km_removeformat screensnap autoresize"
		],
		toolbar1: "bold italic underline forecolor | km_removeformat | bullist numlist | link km_imgimport screensnap insert_code code | fullscreen",
		paste_postprocess: function (plugin, args) {
			//这里实现的功能是，删除粘贴内容的格式，保存指定格式
			$(args.node).find("*").each(function () {
				var color = $(this)[0].style.color;
				$(this).removeAttr("style");
				if (color) {
					$(this).css({ "color": color });
				}
			})
			//这里的功能是实现粘贴到富文本的如果是链接，就用a标签插入内容
			if (args.node.innerText && args.node.innerText.search(/^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/) == 0) {
				var href = args.node.innerText;
				if (args.node.innerText.indexOf('http') < 0 && args.node.innerText.indexOf('ftp') < 0) {
					//给拷贝过来的没有带http的链接加上这个前缀
					href = 'http://' + args.node.innerText;
				}
				args.node.innerHTML = '<a target="_blank" href="' + href + '">' + args.node.innerText + '</a>';
			}
		},
		paste_preprocess: function(plugin, args) {
			let content = args.content;
			content = tinyMCE.DOM.decode(content);
			let imgReg = /<img.*?(?:>|\/>)/gi;
			let srcReg = /\ssrc=[\'\"]?([^\'\"]*)[\'\"]?/i;
			let arr = content.match(imgReg) || [];
			let urls = [];
			for (let i = 0; i < arr.length; i++) {
				let src = arr[i].match(srcReg)[1];
				if (src.indexOf(km_path) > 0) return;
				// 处理以//开头的url
				if (String.prototype.startsWith && src.startsWith("//")) {
					let fixedSrc = 'http:' + src;
					args.content = content.replace(src, fixedSrc);
					src = fixedSrc;
				}
				urls.push(src);
			}
			if (urls.length === 0) return;
			const loadingImageURL = km_path + '/img/km_pictures/loading.gif';
			args.content = content.replace(/\ssrc=[\'\"]?([^\'\"]*)[\'\"]?/ig, ` src="${loadingImageURL}"`);
			uploadImgUrl(urls, function(urls) {
				let content = tinymce.activeEditor.getContent();
				urls.forEach(function(url) {
					content = content.replace(loadingImageURL, url);
				});
				tinymce.activeEditor.setContent(content);
				tinymce.activeEditor.selection.select(tinymce.activeEditor.getBody(), true);
				tinymce.activeEditor.selection.collapse(false);
				setTimeout(function() {
					tinymce.activeEditor.selection.getNode().scrollIntoView(false);
				}, 500)
			});
		},
		valid_styles: {
			"*": "color, font-weight, font-style, text-decoration"
		},
		paste_retain_style_properties: "color, font-weight, font-style, text-decoration",
		paste_remove_styles: false,
		paste_remove_styles_if_webkit: false,
		menubar: false,
		toolbar_items_size: 'small',
		statusbar: false,
		visual: true,
		autoresize_min_height: '100',
		autoresize_max_height: $(window).height(),
		tooltip: false,
		fixed_toolbar_container: ".rich_editor_wrapper",
		valid_elements: "*[*],table[border=1|*]",
		extended_valid_elements: "embed[width|height|name|flashvars|src|wmode|bgcolor|align|play|loop|quality|allowscriptaccess|allowfullscreen|type|pluginspage]",
		invalid_elements: "script,link,style",
		image_advtab: true,
		convert_urls: false,
		media_strict: false,
		schema: 'html4',
		media_use_script: true,
		is_install_plugin: false,
		style_formats: [
			{ title: '正文', block: 'p' },
			{ title: '标题3', block: 'h3' },
			{ title: '标题2', block: 'h2' },
			{ title: '标题1', block: 'h1' }
		],
		formats: {
			removeformat: [
				{ selector: 'font,strike', remove: 'all', split: true, expand: false, block_expand: true, deep: true },
				{ selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
				{ selector: '*', attributes: ['style', 'class'], split: false, expand: false, deep: true }
			]
		},
		contextmenu: 'cut copy paste | inserttable',
		init_instance_callback: function (tiny) {
			var rich_content = $("#comment-textarea").val();
			tiny.setContent(rich_content);
			// 触发save使得isNotDirty设置为ture
			tinyMCE.triggerSave();
			//tinymce在执行setContent后会自动执行autoresize,但是在浏览器打开非常多页面后，js执行缓慢，某些IE下面这个执行的会提前，这里再执行一次。
			setTimeout(function () {
				if ($.trim(rich_content) != '') tiny.execCommand('mceAutoResize', false, '');
			}, 200);
			//如果富文本编辑器没有安装截屏插件，在FF和chrome里可以直接粘贴来自QQ截屏的图片
			$(tiny.getWin()).on("paste", function (e) {
				if (tiny.settings.is_install_plugin) {
					return;
				}
			});

			tiny.on('FullscreenStateChanged', function (flag) {
				var isfull = flag.state;
				if (isfull) {
					flag.target.buttons.fullscreen.tooltip = "取消全屏";
					$(tiny.getContainer()).css({ 'z-index': 20010 });
				} else {
					flag.target.buttons.fullscreen.tooltip = "全屏";
					$(tiny.getContainer()).css({ 'z-index': '' });
					var offset = $(".km-richeditor").offset();
					$("body").scrollTop(offset.top);
					$(window).scrollTop(offset.top);
				}
			});

			$(tiny.getBody()).on("keydown", function (e) {
				if (e.keyCode == 50 && e.shiftKey) {
					$(e.target).data('at-flag', '1');
				}
			})

			$(tiny.getBody()).on("keyup", function (e) {
				if (e.keyCode == 50 && $(e.target).data('at-flag')) {
					//当用户输入了@，替换当前的'@'为一个A标签
					if ($.browser.msie) {
						var range = document.selection.createRange();
						range.moveStart('character', -1);
						range.moveEnd('character', 0);
						range.pasteHTML('<a href="@" class="mention-holder">@</a>');
						range.moveStart('character', 0);
						range.moveEnd('character', 0);
					} else {
						var selection = getUserSelection(tiny.getWin());
						var pos = selection.anchorOffset;
						var link = document.createElement("a");
						link.className = 'mention-holder';
						link.href = '@';
						link.innerText = '@';
						var range = getRange(selection);
						var node = range.commonAncestorContainer;
						range.setStart(selection.anchorNode, pos - 1);
						range.setEnd(selection.anchorNode, pos);
						range.surroundContents(link);
						if ($.browser.mozilla) {
							range.setStart(selection.anchorNode, selection.anchorOffset);
							range.setEnd(selection.anchorNode, selection.anchorOffset);
						}
					}

					var iframe_offset = $(tinymce.activeEditor.editorContainer).find('iframe').offset(),
						holder_offset = $(tiny.getWin().document.body).find(".mention-holder").offset(),
						offset = {
							'left': iframe_offset.left + holder_offset.left + 20,
							'top': iframe_offset.top + holder_offset.top - 3
						};
					$(".autocomplete-box").show().offset(offset).find("input").focus().val('@');

				}
				if (e.keyCode == 27) {
					//当用户按了'Esc'，隐藏人名/组的输入框
					$(".autocomplete-box").hide().find("input").val('');

					//如果没有输入人名或者邮件组，则当做原来的‘@’符号
					$(tiny.getWin().document.body).find("a.mention-holder").replaceAll('@');
				}
			});

			$(tiny.getWin()).on("focus", function (e) {
				//当富文本编辑器获得焦点，隐藏人名/组的输入框
				$(".autocomplete-box").hide().find("input").val('');

				//如果没有输入人名或者邮件组，则当做原来的‘@’符号
				$(tiny.getWin().document.body).find("a.mention-holder").replaceWith('@');
			})

			// 从本地存储里面取数据回填评论框
			if (window.localStorage) {
				if (window.localStorage['km_comment_' + target_type + '_' + target_id]) {
					var is_richtext = window.localStorage['km_comment_is_richtext_' + target_type + '_' + target_id] && window.localStorage['km_comment_is_richtext_' + target_type + '_' + target_id] == 1 ? 1 : 0;
					var comment = window.localStorage['km_comment_' + target_type + '_' + target_id];

					if (is_richtext) {
						show_richeditor(comment);
					} else {
						$('#comment-textarea').val(comment);
					}
				} else {
					// 清空评论相关的本地储存
					reset_comment_localstorage();
				}
			}

			// 评论、回复表单离开二次确认
			$('#super-comments').enable_changed_form_confirm({
				tips: '你在评论框已输入内容，离开可能会丢失，确定离开吗？',
				check_rich_editor: true,
				except: $('#super-comments-content .live_ignore_save_notice, #super-comments-content #commentsPagination'),
				on_init: function () { },
				before_check: function () {
					if (window.localStorage) {
						var is_richtext = window.localStorage['km_comment_is_richtext_' + target_type + '_' + target_id] && window.localStorage['km_comment_is_richtext_' + target_type + '_' + target_id] == 1 ? 1 : 0;
						var comment = is_richtext ? tinymce.editors['km-editor'].getContent() : $('#comment-textarea').val();
						if (comment || window.localStorage['km_comment_' + target_type + '_' + target_id]) {
							window.localStorage['km_comment_' + target_type + '_' + target_id] = comment;
						}
					}
				},
				is_form_changed: function () { return false; }
			});
		},
		oninit: function () {
			$("#km-editor").css('visibility', 'visible');
		},
		content_css: km_path + "css/common/tinyMce_content_simple.css?v=" + (new Date()).getDate()
	};

	$(function () {
		function tinymce_giveup_at(tiny_editor) {
			var tiny = tiny_editor ? tiny_editor : tinyMCE.activeEditor;
			$(".autocomplete-box").hide().find("input").val('');
			//如果没有输入人名或者邮件组，则当做原来的‘@’符号
			$(tiny.getWin().document.body).find("a.mention-holder").replaceWith('@');
		}

		var km_user_url = km_path + "apis/user_at.php";
		$(".autocomplete-box input").autocomplete(km_user_url, {
			multiple: true,
			multipleSeparator: " ",
			width: 160,
			delay: 100,
			minChars: 1,
			max: 50,
			notice: "@团队，团队成员会在[提到我的]页收到",
			formatResult: function (data, value) {
				if (("" + data).match(/^k_/)) {
					var group_full_name = "" + data;
					var group_name = group_full_name.split("(")[1].replace(")", "");
					return "@" + group_name;//显示k吧中文名
				} else {
					return ("@" + data).replace(/\(.*?\)/, "");
				}
			}
		});

		//用户选择后,存储需要替换的k吧中文名和code映射
		$(".autocomplete-box input").result(function (event, data, formatted) {
			if (("" + data).match(/^k_/)) {
				var group_full_name = "" + data;
				var group_code = group_full_name.split("(")[0];
				var group_name = group_full_name.split("(")[1].replace(")", "");
				group_map.push(new Array(group_code, group_name));
			}

			// var link_value = '@' + formatted.split("(")[0] + ' ';
			var link_value = '@' + formatted.split("(")[0] + '\u00A0';
			var text_node = tinymce.activeEditor.getWin().document.createTextNode(link_value);
			$(tinymce.activeEditor.getWin().document.body).find("a.mention-holder").after(text_node).remove();
			tinyMCE.activeEditor.selection.select(text_node, true);
			tinyMCE.activeEditor.selection.collapse(false);
			$(".autocomplete-box").hide();
		});

		$(".autocomplete-box input").on("keyup", function (e) {
			if (e.keyCode == 27) {
				//按了Esc退出
				var tiny = tinyMCE.activeEditor;
				tinymce_giveup_at(tiny);
			}

		}).on("blur", function () {
			var tiny = tinyMCE.activeEditor;
			//tinymce_giveup_at(tiny);
		});

		// 富文本的显示和隐藏切换
		$('#super-comments').delegate('.js-init-editor', 'click', function () {
			var comment = $('#comment-textarea').val();
			// 展示富文本，回写内容
			show_richeditor(comment);
			// 手动设置富文本内容已变更
			if (comment) {
				tinymce.editors['km-editor'].isNotDirty = false;
			}
			// 记录当前评论框为富文本态
			if (window.localStorage) {
				window.localStorage['km_comment_is_richtext_' + target_type + '_' + target_id] = 1;
			}

			return false;
		});
	});
	// 展示富文本，回写内容
	function show_richeditor(comment) {
		$(".km-richeditor").show();
		$(".comment-textarea-wrap").hide();
		tinymce.editors['km-editor'].setContent(comment);
	}
	// 清空评论相关的本地储存
	function reset_comment_localstorage() {
		if (window.localStorage) {
			window.localStorage.removeItem('km_comment_is_richtext_' + target_type + '_' + target_id);
			window.localStorage.removeItem('km_comment_' + target_type + '_' + target_id);
		}
	}
	/**
	 * 为@rtx增加class
	 */
	function addatRtxColor() {
		$(".comment-content a").each((_, el) => {
			var user = el.innerText;
			if (!user) return;
			var r = new RegExp(km_path + "user/" + user.slice(1))
			var href = el.href;
			if (r.test(href) && user.indexOf("@") === 0) {
				$(el).addClass("highlight");
				// 如果是@自己增加一个 self class
				if (user.slice(1) == current_user && href.lastIndexOf(user.slice(1))) {
					$(el).addClass("self")
				}
			}
		});
	}
});
