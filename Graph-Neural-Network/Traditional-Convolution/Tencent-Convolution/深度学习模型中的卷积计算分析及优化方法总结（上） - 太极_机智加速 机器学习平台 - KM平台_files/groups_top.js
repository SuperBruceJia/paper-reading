//k吧头部和头部操作栏的js模块
define(function(require) {
	$(function(){
		var is_admin = $('#is_admin').data('is-admin');
		var is_member = $('#is_member').data('is-member');
		var is_dept = $('#is_dept').data('is-dept');

		//k吧头部部分
		$(".group-qrcode-icon").tooltip({
			position: "bottom",
			width: 150,
			tipTarget: "#group-qrcode",
			offset: [59, -5]
		});
		
		$("#btn_wechat_operate").on("click", function(){
			$("#group-qrcode").hide();
			$("#wechat_operate").modal({'show': true, 'backdrop': 'static'});
			setTimeout(function(){
				_init_zclip_binding();
			}, 100)
			return false;
		});
		
		function _init_zclip_binding() {
			$("#url_copy_btn").attr("data-clipboard-target", "#wechat_group_url");
			var clipboard = new ClipboardJS("#url_copy_btn");

			clipboard.on('success', function(e) {
				$.km_toast('success', "复制成功，现在你可以粘贴（ctrl+v）到其他地方。");
				e.clearSelection();
			});

			clipboard.on('error', function(e) {
				window.alert("复制链接出错，请稍后再试或反馈KM热线");
			});
		}

		//navigation part操作栏部分
		$('#group-nav-action').click(function(e) {
			e.stopPropagation();
			$('#group-nav-more').toggle();
			$(this).toggleClass('active');
		});
		$(document).click(function () {
			$('#group-nav-more').hide();
			$(this).removeClass('active');
		});

		$('.group-nav .item').hover(
			function() {
				$(this).find('.add-logo').animate({
					top: '0',
					right: '0'
				}, {queue: false});
			},
			function() {
				$(this).find('.add-logo').animate({
					top: '-21',
					right: '-21'
				}, {queue: false});
			}
		);

		$('.add-video-logo').click(function(event) {
			if (is_admin || is_member) {
				//k吧成员或超管可以进行上传视频的操作，添加.add_video以触发视频上传modal显示
				$(this).addClass('add_video');
			} else if (is_dept) {
				//团队吧非成员没有权限做添加操作
				$.alert("没有权限做此操作，请联系K吧管理员");
			}
			$(this).attr('href', 'javascript:void(0);');
			event.preventDefault();
		});

		if (!is_dept && !is_member && !is_admin) {
			//主题吧的非成员（不包括超管）需要加入k吧才有添加、编辑等权限
			$('.add-logo, .js-if-kbarer').click(function(e) {
				is_member = $('#is_member').attr('data-is-member');
				if (!is_member) {
					e.preventDefault();
					var that = this;
					$.confirm('你要加入本吧才能执行此操作，确定要加入吗？', function() {
						var group_id = $('#group_id').data('group-id');
						var nick = $('#current_user').data('current-user');

						$.getJSON(km_path + "groups/ajax_join", {
								group_id: group_id,
								nick: nick
							},
							function(result){
								if (result.word == 'success') { 
									window.location.reload();
								}
							}
						);
					});
				}
			});
		}

		if (is_dept && !is_member && !is_admin) {
			//主题吧的非成员（不包括超管）需要加入k吧才有添加、编辑等权限
			$('.add-logo').click(function(e) {
				if (!is_member) {
					e.preventDefault();
					$.alert('K吧成员才能执行此操作，如有需要请联系K吧管理员');
				}
			});
		}

	    $(".upload-picture").click(function(){
	        if (!is_member && !is_dept) {
	            var self = $(this);
	            $.confirm('你要加入本吧才能执行此操作，确定要加入吗？', function() {
	                $.getJSON(km_path + "groups/ajax_join", {
	                        group_id: $('#group_id').data('group-id'),
	                        nick: $('#current_user').data('current-user')
	                    },
	                    function(result){
	                        if (result.word == 'success') { 
	                            location.href = self.attr('href');
	                        }
	                    }
	                );
	            });
	            return false;
	        } else if(!is_member && is_dept) {
	            $.alert('K吧成员才能执行此操作，如有需要请联系K吧管理员');
	            return false;
	        } else {
	            return true;
	        }
	    });
	    
	    $('#receive_rtx').click(function(){
	    	$('#quit_rtx').removeClass('hide-important');
	    	$(this).addClass('hide-important');
	    	var _this = this;
	    	var url = $(this).data('url') + '?format=json';
	    	$.post(url, function(data){
	    		// 异步设置接收RTX提醒失败时，改用同步
	    		if (data !== 'ok') {
	    			window.location = $(_this).data('url');
	    		}
	    	});
	    });
	    $('#quit_rtx').click(function(){
	    	var _this = this;
	    	$.confirm("你确定不接收本K吧的RTX推送消息吗？", function(){
	    		window.location = $(_this).attr('href');
	    	});
	    	return false;
	    });
	    $('#quit_dept').click(function(){
	    	$.alert("本K吧已关联你所在的组织架构，你不能退出");
	    	return false;
	    });
	    $('#quit_group').click(function(){
	    	var _this = this;
	    	$.confirm("你确定退出本K吧？", function(){
	    		window.location = $(_this).attr('href');
	    	});
	    	return false;
	    });
	});
});
