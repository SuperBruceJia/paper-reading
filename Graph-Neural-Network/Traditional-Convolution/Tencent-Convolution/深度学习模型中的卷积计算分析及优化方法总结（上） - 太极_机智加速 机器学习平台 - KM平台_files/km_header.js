define(function(require){
	require('tag_chooser/tag_chooser');
	require('agilecarousel/agile_carousel.alpha');

	$(function () {
		// 我的k吧列表
		$('#my-kbars').hover(function() {
			setTimeout(function() {
				load_mykbars('top_my_kbars_list', {
					GROUPS_PER_LINE : 4,
					DISPLAY_LINES : 3,
					CAROUSEL_OUTER_WIDTH : 368,
					CAROUSEL_OUTER_HEIGHT : 295,
					SLIDE_HEIGHT : 270
				});
			}, 200);
		});

		// k吧排序模态框
		$('.manage-kbars').click(function() {
			var box = $('#manage-kbars-box').find('.modal_body').eq(0);
			var url = km_path + 'user/' + current_user + '/groups_manager?cb=groups_manager_callback&cancel_cb=groups_manager_cancel_callback';
			if (box.html().length < 10 ) {
				box.html('<iframe src="' + url + '" width="761" height="595" frameBorder="0"></iframe>');
			}
			$('#manage-kbars-box').modal('show');
		});

		// 快捷入口下拉框的展示和隐藏
		var t1, t2;
		$('.quick-entry .entry').mouseenter(function () {
			var $self = $(this);
			clearTimeout(t2);
			t1 = setTimeout(function() {
				$('.quick-entry .km-dropdown').addClass('hide');
				$self.find('.km-dropdown').removeClass('hide');
			}, 200);
		}).mouseleave(function () {
			var $self = $(this);
			clearTimeout(t1);
			t2 = setTimeout(function() {
				$self.find('.km-dropdown').addClass('hide');
			}, 200);
		});

		var $search_keyword = $(".js-search-keyword");
		var search_keyword_width = $(".js-search-keyword").attr('id') == 'search-keyword' ? 290 : 208;
		var is_search_app = $('#search-keyword-app').data('is_search_app');
		var hint_word = !$search_keyword.data('popular') ? '搜文章/乐问/同事/K吧' : ('大家都在搜：' + $search_keyword.data('popular'));

		if ($search_keyword.length) {
			// 搜索框自动补全
			$search_keyword.tag_chooser(km_path + "search/complete", {
				multiple: false,
				width: search_keyword_width,
				delay: 100,
				minChars: 1,
				selectFirst: false,
				max: 6,
				scrollHeight: 250
			}).result(function(event, item) {
				if (!is_search_app){
					location.href = km_path + "pages/search?q=" + encodeURIComponent("" + item);
				}
			});
			// placeholder
			$('#search-keyword').input_hint_label({
				hintWords : hint_word,
				defaultCss : {color:'#999'},
				focusCss :{color:'#333'},
				box_z_index: 1002,
				offset: {left: 2, top: 6}, 
				implementation: 'label',
				width: 200
			});
		}
		$search_keyword.closest('form').submit(function(e){	
			if (!!$search_keyword.data('popular') && $search_keyword.val() == '') {
				e.preventDefault();
				location.href = km_path + "pages/search?q=" + $search_keyword.data('popular');
			}
		});

		// 搜索框focus & blur的操作
		$('#search-keyword-app').focus(function () {
			$(this).animate({width: '280px'});
			$(this).addClass('focus');
			if (is_search_app) {
				$('.js-search-btn').show();
				$('.js-search-btn-default').hide();
			}
		}).blur(function () {
			if (!is_search_app) {
				$(this).css({width: '270px'}).animate({width: '184px'});
				$(this).removeClass('focus');
			}
		});
		// 点击页面时收搜索框
		$('#search-keyword-app').click(function (e) {
			e.stopPropagation();
		})
		$(document).click(function () {
			if (is_search_app && $('#search-keyword-app').hasClass('focus')) {
				$('#search-keyword-app').css({width: '270px'}).animate({width: '184px'});
				$('#search-keyword-app').removeClass('focus');
				$('.js-search-btn').hide();
				$('.js-search-btn-default').show();
			}
		});

        var $search_form = $('.km-search-box');

		$('.js-search-btn').click(function () {
            $search_form.attr('action', $(this).data('action')); // change action of the form on click
            $search_form.data('is_search_all', $(this).hasClass('search-btn-all'));
		});

        $search_form.submit(function () {
		    if ($search_form.data('is_search_all')) {
                $(this).children('#search_type').remove(); // 删除type域，否则会搜索具体应用而非全部
            }
        })
    });

	// 获取消息提醒
	$.getJSON(km_path + 'apis/km_usertips.php?nick=' + current_user + '&callback=?', function(data) {
		var tip = parseInt(data.tips, 10);
		tip = tip > 99 ? 99 : tip;
		var twitter = parseInt(data.twitters, 10);
		twitter = twitter > 99 ? 99 : twitter;

		var uncheck_tip = parseInt(data.tips_uncheck, 10);
		uncheck_tip = uncheck_tip > 99 ? 99 : uncheck_tip;
		var uncheck_twitter = parseInt(data.twitters_uncheck, 10);
		uncheck_twitter = uncheck_twitter > 99 ? 99 : uncheck_twitter;

		var html = [];
		var html_tip = [];
		var html_twitter = [];
		// 生成消息
		if (tip > 0) {
			html_tip = [
				'<li class="item">',
					'<a class="item-a clearfix" href="' + km_path + 'tips?kmref=km_header">',
						'<span class="left">' + tip + '条系统消息</span>',
						'<span class="right pointer a-blue">查看</span>',
					'</a>',
				'</li>'
			];
		}
		if (twitter > 0) {
			html_twitter = [
				'<li class="item">',
					'<a class="item-a clearfix" href="' + km_path + 'twitters?type=at&kmref=km_header">',
						'<span class="left">' + twitter + '条@我的微博</span>',
						'<span class="right pointer a-blue">查看</span>',
					'</a>',
				'</li>'
			];
		}

		tip_uncheck_message = (uncheck_tip) ? uncheck_tip + '条' : '';
		html_uncheck_tip = [
			'<li class="item">',
				'<a class="item-a clearfix" href="' + km_path + 'tips?kmref=km_header">',
					'<span class="left">' + tip_uncheck_message + '系统消息</span>',
					'<span class="right pointer a-blue">查看</span>',
				'</a>',
			'</li>'
		];
		twitter_uncheck_message = (uncheck_twitter) ? uncheck_twitter + '条' : '';
		html_uncheck_twitter = [
			'<li class="item">',
				'<a class="item-a clearfix" href="' + km_path + 'twitters?type=at&kmref=km_header">',
					'<span class="left">' + twitter_uncheck_message + '@我的微博</span>',
					'<span class="right pointer a-blue">查看</span>',
				'</a>',
			'</li>'
		];

		// 添加消息到DOM
		$('.msg-entry .my-tips .my-tips-list').html(html_tip.join('') + html_twitter.join(''));
		// 叉掉消息提醒
		$('.msg-entry').find('.close').click(function() {
			$('.msg-entry .my-tips').remove();
			// 发送删除消息的请求
			$.get(km_path + 'tips/hide_tips', null, null);
		});
		$('.msg-entry .my-tips-unchecked .my-tips-list').html(html_uncheck_tip.join('') + html_uncheck_twitter.join(''));

		// 显示消息
		if (tip > 0 || twitter > 0) {
			$('.msg-entry .my-tips').removeClass('hide');
            $('.msg-entry .my-tips').addClass('one-time-show');

		}
		if (uncheck_tip > 0 || uncheck_twitter > 0) {
			$('.msg-entry').addClass('has-tips');
		}
		// hover显示下面的内容
		var t1, t2;
		$('.msg-entry').hover(function() {
			if (!$('.msg-entry .my-tips').hasClass('one-time-show')) {
				clearTimeout(t2);
				t1 = setTimeout(function() {
					$('.msg-entry .km-dropdown').removeClass('hide');
					$('.msg-entry .my-tips-unchecked').removeClass('hide');
				}, 200);
			};
		}, function() {
			clearTimeout(t1);
			t2 = setTimeout(function() {
				$('.msg-entry .my-tips-unchecked').addClass('hide');
			}, 200);
		});
	});
});