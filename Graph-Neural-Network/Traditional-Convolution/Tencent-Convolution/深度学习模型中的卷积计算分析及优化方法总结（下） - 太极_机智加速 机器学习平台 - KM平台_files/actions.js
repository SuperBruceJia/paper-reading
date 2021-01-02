var load_bookmark_box = true,
    load_post2k_box = true,
    load_reship_box = true;

var operation_data = $(".js-operations-data").data();
/**
 * 入口
 */
function op_entity_success_callback(data) {
    var type = data.operation_data.target_type === 'Slide' ? 'Attachment' : data.operation_data.target_type;
    var func = 'op_' + type.toLowerCase() + '_success_callback(data)';
    eval('(' + func + ')');
}
/**
 * 顶和收藏
 */
//请求顶和收藏成功时的回调函数
function digg_favor_success_callback(data) {
    if (typeof data.digg !== 'undefined' && typeof data.favor !== 'undefined') {
        var digg = data.digg;
        var favor = data.favor;
        var bookmark_running = false;

        $('#digg_favor').append(txTpl('digg_favor_tpl', data));

        //显示最近顶的人的信息
        show_lastest_digg_user_list(digg.latest_digged_user_list);
        //“我顶”
        do_digg(digg.is_expert, digg.latest_digged_user_list);
        //底部“收藏”
        do_bookmark();
        //底部“取消收藏”
        $('#bookmark_btn:not(.bookmark)').live('click', cancel_bookmark);

        //顶部“收藏”
        $(".bookmark_link").live("click", function() {
            if (!bookmark_running) {
                bookmark_entity();
                bookmark_running = true;
                setTimeout(function() {
                    bookmark_running = false;
                }, 1000);
            }
        });
        //顶部“取消收藏”
        $(".cancel_bookmark_link").live("click", cancel_bookmark);
    }
}
//显示最近顶的人的信息
function show_lastest_digg_user_list(digged_user_list) {
    if (digged_user_list.length > 0) {
        $('#digg').bind('mouseover', function() {
            if ($('#latest_digged_user_list').css('left') == '0px' || $('#latest_digged_user_list').css('left') == 'auto') {
                $('#arrowup').css('left', ($('#digg_favor_bar').width() / 2 - 74) + 'px');
                $('#latest_digged_user_list').css('left', ($('#digg_favor_bar').width() / 2 - 100) + 'px');
            }
            var digg_top = parseInt($('#digg').offset().top);
            var digg_left = parseInt($('#digg').offset().left);
            $('#latest_digged_user_list').css("left", digg_left + "px").css("top", (digg_top + 73) + "px").show();
            $('#arrowup').css("left", (digg_left + 23) + "px").css("top", (digg_top + 64) + "px").show();
        }).bind('mouseout', function() {
            $('#latest_digged_user_list').hide();
            $('#arrowup').hide();
        });
    }
}
//“我顶”
function do_digg(is_expert, digged_user_list) {
    var operation_data = $(".js-operations-data").data();
    $('#digg:not(.digged)').one('click', function() {
        $.ajax({
            url: operation_data.km_path + 'operations/recommend',
            type: "GET",
            dataType: "jsonp",
            data: { target_id: operation_data.target_id, target_type: operation_data.target_type, group_id: operation_data.group_id },
            success: function(ret) {
                if (ret.result == 'ok') {
                    var current_user = operation_data.current_user;
                    $('#digg').attr('class', 'digged');
                    $('#digg').attr('onclick', 'javascript:void(0);')
                        .next().html('<span>已顶</span><span class="num">(' + ret.digg_count + ')</span>');

                    if (digged_user_list && current_user) {
                        digged_user_list.reverse().push({ created_by: current_user, is_expert: is_expert });
                        digged_user_list.reverse();
                        if (digged_user_list.length > 8) {
                            digged_user_list.pop();
                        }
                    }
                    var digged_user_str = '';
                    $.each(digged_user_list, function(idx, item) {
                        digged_user_str += item.created_by;
                        if (item.is_expert) {
                            digged_user_str += "<span class='vip_link'>&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                        }
                        if (idx != digged_user_list.length - 1) digged_user_str += ', ';
                    });
                    $('#latest_digged_user_list').html(digged_user_str + ' 最近顶过此文');

                    $('#digg').live('mouseover', function() {
                        if ($('#latest_digged_user_list').css('left') == '0px' || $('#latest_digged_user_list').css('left') == 'auto') {
                            $('#arrowup').css('left', ($('#digg_favor_bar').width() / 2 - 74) + 'px');
                            $('#latest_digged_user_list').css('left', ($('#digg_favor_bar').width() / 2 - 100) + 'px');
                        }
                        var digg_top = parseInt($('#digg').offset().top);
                        var digg_left = parseInt($('#digg').offset().left);
                        $('#latest_digged_user_list').css("left", digg_left + "px").css("top", (digg_top + 70) + "px").show();
                        $('#arrowup').css("left", (digg_left + 20) + "px").css("top", (digg_top + 61) + "px").show();
                    }).live('mouseout', function() {
                        $('#latest_digged_user_list').hide();
                        $('#arrowup').hide();
                    });
                }
            }
        });
    });
}
//底部“收藏”

function do_bookmark() {
    $("#bookmark_btn:not(.unbookmark)").live('click', function() {
        if (typeof(change_doc_reader_wmode) == "function") {
            change_doc_reader_wmode("transparent");
        }
        if (load_bookmark_box) {
            bookmark_entity(load_bookmark_box);
            load_bookmark_box = false;
        }

        $('#bookmark_div').on('hidden.bs.modal', function() {
            if (typeof(change_doc_reader_wmode) == "function") {
                change_doc_reader_wmode("window");
            }
        });
        $('#bookmark_div').modal();
    });
}
//收藏框提交
function bookmark_submit() {
    var operation_data = $(".js-operations-data").data();
    var tags = $.trim($('#PostTag').val());
    var tag = $.trim($("#PostTags").val());
    if (tag != '') {
        tags = $.trim(tags + ' ' + tag);
    }
    if (tags.split(" ").length <= 5) {
        $.ajax({
            url: operation_data.km_path + 'operations/bookmark_tags',
            type: "GET",
            dataType: "jsonp",
            cache: false,
            data: { target_id: operation_data.target_id, target_type: operation_data.target_type, tags: tags },
            success: function(ret) {
                if (ret.result == 'ok') {
                    $('#bookmark_div').modal('hide');
                    if (typeof(change_doc_reader_wmode) == "function") {
                        change_doc_reader_wmode("window");
                    }

                    load_bookmark_box = true;
                }
            }
        });
    } else {
        $('#post_tags_error_hint .error_message').text('输入的标签不能超过5个').css({ 'margin-top': '-20px' }).show();
    }
};
// 收藏框取消提交
function bookmark_submit_cancel() {
    $('#bookmark_div').modal('hide');
    load_bookmark_box = true;
}
//收藏
function bookmark_entity(load_bookmark_box) {
    var operation_data = $(".js-operations-data").data();
    var bookmark_url = operation_data.km_path + 'operations/do_bookmark';
    $.ajax({
        url: bookmark_url,
        type: "GET",
        dataType: "jsonp",
        cache: false,
        data: { target_id: operation_data.target_id, target_type: operation_data.target_type, group_id: operation_data.group_id },
        success: function(ret) {
            if (ret.result == 'ok') {
                $('#bookmark_btn').unbind('click')
                    .attr('class', 'unbookmark')
                    .next().html('<span>已收藏</span><span class="num">(' + ret.bookmark_count + ')</span>');

                if (load_bookmark_box) {
                    $('#bookmark_div').find('.modal_body').load(operation_data.km_path + "common/bookmark_box?target_type=" + operation_data.target_type + "&target_id=" + operation_data.target_id + "&group_id=" + operation_data.group_id);
                }
                if ($("#bookmark_btn_top")[0]) {
                    $("#bookmark_btn_top").html('<a class="cancel_bookmark_link bookmarked" href="javascript:void(0);">已收藏<span class="secondary bookmark_count">(' + ret.bookmark_count + ')</span></a>');
                }
                if ($("#bookmarked_top")[0]) {
                    $("#bookmarked_top").html('<a class="cancel_bookmark_link bookmarked" href="javascript:void(0);">已收藏<span class="secondary bookmark_count">(' + ret.bookmark_count + ')</span></a>');
                }
            }
        }
    });
}
//取消收藏
function cancel_bookmark() {
    var operation_data = $(".js-operations-data").data();
    var bookmark_url = operation_data.km_path + 'operations/unbookmark';
    $.ajax({
        url: bookmark_url,
        type: "GET",
        dataType: "jsonp",
        cache: false,
        data: { target_id: operation_data.target_id, target_type: operation_data.target_type, group_id: operation_data.group_id },
        success: function(ret) {
            if (ret.result == 'ok') {
                $('#bookmark_btn')
                    .attr('class', 'bookmark')
                    .next().html('<span>收藏</span><span class="num">(' + ret.bookmark_count + ')</span>');

                if ($("#bookmark_btn_top")[0]) {
                    $("#bookmark_btn_top").html('<a class="bookmark_link" href="javascript:void(0);">收藏<span class="secondary bookmark_count">(' + ret.bookmark_count + ')</span></a>');
                }
                if ($("#bookmarked_top")[0]) {
                    $("#bookmarked_top").html('<a class="bookmark_link" href="javascript:void(0);">收藏<span class="secondary bookmark_count">(' + ret.bookmark_count + ')</span></a>');
                }
            }
        }
    });
}

/**
 * 邀请同事组件
 */
function invite_success_callback(data) {
    if (typeof data.invite !== 'undefined') {
        var invite_data = {
            invite: data.invite ? data.invite : '',
            km_path: km_path,
            date: new Date()
        };

        if (invite_data.invite) {
            $('#invite_box').append(txTpl('invite_modal_tpl', invite_data));

            //分享到rtx
            $('.js_operations_bar').delegate('.js_rtx_invite', 'click', function() {
                var $modal = $('#rtx_invite_modal');
                $modal.find('#send_rtx').attr('checked', true);
                $modal.find('#send_mail').attr('checked', false);

                $('#rtx_invite_users_select').prependTo('#rtx_invite_modal .km_user_chooser_wrap');
                $modal.modal({ 'show': true, 'backdrop': 'static' });
                toggle_hint($modal, '#rtx_invite_users_select');
            });

            //分享到邮件
            $('.js_operations_bar').delegate('.js_eamil_invite', 'click', function() {
                var $modal = $('#email_invite_modal');
                $modal.find('#send_mail').attr('checked', true);
                $modal.find('#send_rtx').attr('checked', false);
                $('#send_bcc').attr('checked', false);

                $('#email_invite_users_select').prependTo('#email_invite_modal .km_user_chooser_wrap');
                $modal.modal({ 'show': true, 'backdrop': 'static' });
                toggle_hint($modal, '#email_invite_users_select');
            });
        }
    }
}

/**
 * 分享组件
 */
//请求分享组件成功时的回调函数
function share_to_success_callback(data) {
    if (typeof data.share_to !== 'undefined') {
        var share_data = {
            share_to: data.share_to ? data.share_to : '',
            km_path: data.operation_data.km_path,
            date: new Date()
        };
        if (share_data.share_to) {
            var twitter = share_data.share_to.twitter;

            // 若有下部分享组件才进行渲染
            if ($('#share_to_tpl').length > 0) {
                $('#share_list').append(txTpl('share_to_tpl', share_data));
            }

            $('#share_list').append(txTpl('share_to_modal_tpl', share_data));
            if (share_data.share_to.email && share_data.share_to.email.topic_info) {
                $('#share_list').find('#share_to_email_modal').find('#email_title').val(share_data.share_to.email.topic_info);
            }

            //分享到微博
            $(".js_operations_bar").delegate('.js_share_to_twitter', 'click', function() {
                //target_pic_src是指分享到微博底部的缩略小图，只有照片和相册用到，target_pic_url是指缩略原图
                show_share_to_twitter_modal({
                    target_id: data.operation_data.target_id,
                    target_type: data.operation_data.target_type,
                    target_title: twitter.target_title ? twitter.target_title : '',
                    target_pic_url: twitter.pic_url ? twitter.pic_url : '',
                    target_pic_src: twitter.pic_src ? twitter.pic_src : '',
                    target_pic_name: twitter.pic_name ? twitter.pic_name : '',
                    target_pic_width: twitter.width ? twitter.width : '',
                    target_pic_height: twitter.height ? twitter.height : '',
                    target_group_account_id: twitter.share_target_group_account_id ? twitter.share_target_group_account_id : ''
                });
            });
            //微博输入框的一些操作
            twitter_form_content_op();

            //分享到rtx
            $('.js_operations_bar').delegate('.js_share_to_rtx', 'click', function() {
                var $modal = $('#share_to_rtx_modal');
                $modal.find('#send_rtx').attr('checked', true);
                $modal.find('#send_mail').attr('checked', false);

                $('#rtx_to_users_select').prependTo('#share_to_rtx_modal .km_user_chooser_wrap');
                $modal.modal({ 'show': true, 'backdrop': 'static' });
                toggle_hint($modal, '#rtx_to_users_select');
            });

            //分享到邮件
            $('.js_operations_bar').delegate('.js_share_to_eamil', 'click', function() {
                var $modal = $('#share_to_email_modal');
                $modal.find('#send_mail').attr('checked', true);
                $modal.find('#send_rtx').attr('checked', false);
                $('#send_bcc').attr('checked', false);

                $('#email_to_users_select').prependTo('#share_to_email_modal .km_user_chooser_wrap');
                $modal.modal({ 'show': true, 'backdrop': 'static' });
                toggle_hint($modal, '#email_to_users_select');
            });

            //@add by brandwang 鼠标移到分享二维码按钮上才去请求 能省则省
            $('.js_operations_bar').delegate('.js_share_to_qrcode', 'mouseover', function(e) {
                if (share_data.share_to.qr_code) {

                    //如果没有数据才请求
                    if ($('#share_wechat_image').attr('src') == '') {
                        //当前页面url(去除参数)
                        var url = window.location.protocol + "//" + window.location.host + window.location.pathname;
                        var wechat_image_url = operation_data.km_path + 'operations/get_wechat_image?target_url=' + url;
                        var wechat_image_url_download = wechat_image_url + '&down=1';

                        $('#share_wechat_image').attr('src', wechat_image_url);
                        $('#share_wechat_image_download').attr('href', wechat_image_url_download);

                        $.get(operation_data.km_path + 'operations/super_url', { link: url, use_short_link: '1' }, function(ret) {
                            $('#wechat_url').val(ret.data);
                        }, 'json');
                    };
                };
            });

            //分享到微信（二维码）
            $('.js_operations_bar').delegate('.js_share_to_qrcode', 'click', function(e) {
                // 显示modal
                $('#share_to_qrcode_modal').modal({ 'show': true, 'backdrop': 'static' });
            });

            $('#share_twitter').on("click", share_twitter);

            //发给同事
            $('#send_mail_btn.js_send_email').live('click', function() {
                var $modal = $('#send_mail_modal');
                if (target_type === 'Tag') {
                    $modal.find('#send_mail').attr('checked', false);
                    $modal.find('#send_rtx').attr('checked', true);
                    $('.send_mail_wrap').hide();
                }

                $('#email_to_users_select').prependTo('#send_mail_modal .km_user_chooser_wrap');
                $modal.modal({ 'show': true, 'backdrop': 'static' });
                toggle_hint($modal, '#email_to_users_select');
            });

            /* 这里是用于分享到二维码的引导
             * 如果需要移除引导,除了删除一下代码外，还需要修改的文件有
             * elements/actions/share_to.thtml, common.less
             * 在以上文件里搜索 ‘share to 引导’
             */
            if ((data.operation_data.target_type == 'Event' || data.operation_data.target_type == 'Survey') && (share_data.share_to.qr_code && share_data.share_to.qr_code.qr_name)) {
                var type = data.operation_data.target_type.toLowerCase();
                if (!$.cookie('qrcode-guide-' + type)) {
                    var $share_to = $(".share_list"),
                        $operations_bar = $('#operations'),
                        $guide = $(".js-qrcode-guide");

                    $operations_bar.addClass('margin-fix');
                    var position = $share_to.offset();

                    var browser = navigator.appName
                    var b_version = navigator.appVersion
                    var version = b_version.split(";");

                    if (version[1] != null) {
                        var trim_Version = version[1].replace(/[ ]/g, "");

                        if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
                            position.top = position.top - $guide.outerHeight() - 15;
                        } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
                            position.top = position.top;
                        } else {
                            position.top = position.top - $guide.outerHeight() - 15;
                        }
                    } else {
                        position.top = position.top - $guide.outerHeight() - 15;
                    }

                    position.left = position.left + 2;
                    $guide.offset(position).show();

                    $guide.find(".user-guide-close").on("click", function() {
                        $guide.hide();
                        $operations_bar.removeClass('margin-fix');
                        $.cookie('qrcode-guide-' + type, 1, { expires: 365, path: '/', domain: 'oa.com' });
                    })
                }
            }
        }
    }
}

/**
 * 分享到微博
 */
//微博输入框的一些操作
function twitter_form_content_op() {
    if (typeof group_map === "undefined") {
        var group_map = new Array();
    }
    var km_user_url = operation_data.km_path + "apis/user_at.php";
    $("#share_to_twitter_form_content").live('focus', function() {
        $(this).autocomplete(km_user_url, {
            multiple: true,
            multipleSeparator: " ",
            width: 160,
            minChars: 1,
            max: 50,
            delay: 100,
            formatResult: function(data, value) {
                if (("" + data).match(/^k_/)) {
                    var group_full_name = "" + data;
                    var group_name = group_full_name.split("(")[1].replace(")", "");
                    return "@" + group_name; //显示k吧中文名
                } else {
                    return ("@" + data).replace(/\(.*?\)/, "");
                }
            }
        });
    });
    //用户选择后,存储需要替换的k吧中文名和code映射
    $("#share_to_twitter_form_content").result(function(event, data, formatted) {
        if (("" + data).match(/^k_/)) {
            var group_full_name = "" + data;
            var group_code = group_full_name.split("(")[0];
            var group_name = group_full_name.split("(")[1].replace(")", "");
            group_map.push(new Array(group_code, group_name));
        }
    });
    //实时计算微博输入框字数
    $("#share_to_twitter_form_content").live('keyup', function(e) {
        var ev = window.event || e;
        if (((ev.keyCode == 13) || (ev.keyCode == 10)) && (ev.ctrlKey)) {
            share_twitter();
        }
        setTimeout("javascript:cal_twitter_share_length()", 100);
    });
}
//分享到微博
function share_twitter() {
    var content_temp = $('#share_to_twitter_form_content').val();

    for (var i = 0; i < group_map.length; i++) {
        content_temp = content_temp.replace("@" + group_map[i][1] + " ", "@" + group_map[i][0] + " ");
    }
    $('#share_to_twitter_form_content').val(content_temp);

    url = operation_data.km_path + 'twitters/add_twitter';
    len = words_length($("#share_to_twitter_form_content").val());
    if (len != 0) {
        $("#share_twitter").attr("disabled", true);
    } else {
        return false;
    }
    if (len > 140) {
        output = '<span class="outof_length_red">超出' + (len - 140) + '字</span>';
        $("#share_to_twitter_count").html(output);
        $("#share_twitter").attr("disabled", false);
        return false;
    }

    $('#share_twitter').button({ loadingText: '发送中...' }).button('loading');
    $.post(url, $("#share_to_twitter_form").serialize(), function(data) {
        ret = eval('(' + data + ')');
        if (ret.result == 'ok') {
            $("#share_twitter").attr("disabled", false);
            $("#share_to_twitter_box").hide();
            $("#twitter_result_box").show();
            setTimeout("close_twitter_share_modal()", 1000);
        }
        $('#share_twitter').button('reset');
    });
}
//关闭分享到微博modal
function close_twitter_share_modal() {
    $("#share_to_twitter_modal").modal('hide');
    // 触发afterClose事件
    $('#share_to_twitter_modal').trigger('afterClose');
}
//展示分享到微博modal
function show_share_to_twitter_modal(data) {
    // 触发beforeOpen事件
    $('#share_to_twitter_modal').trigger('beforeOpen');

    var url = "";
    var title = "";
    var topic = "";
    var content = "";
    var pic_url = "";
    var type = data.target_type;
    switch (type) {
        case 'Global':
            topic = "";
            $("#twitter_share_place_type").val("toolbar");
            $("#twitter_share_place_id").val("");
            $("#twitter_share_group_id").val("");
            url = "no_need";
            break;
        case 'Profile':
            topic = "#评头论像# ";
            var nick = data.target_id;
            title = "一起来围观@" + nick + " 的头像 ";
            break;
        case 'Slide':
            topic = "#分享幻灯片# ";
            break;
        case 'Attachment':
            topic = "#分享附件# ";
            break;
        case 'Post':
            topic = "#分享文章# ";
            if ($(data.target_post_url).length > 0) {
                url = data.target_post_url;
            }
            break;
        case 'Question':
            topic = "#分享问答# ";
            break;
        case 'Topic':
            topic = "#分享讨论# ";
            break;
        case 'Knowledge':
            topic = "#分享文集# ";
            break;
        case 'Survey':
            topic = "#分享投票# ";
            break;
        case 'Album':
            topic = "#分享相册# ";
            break;
        case 'Photo':
            topic = "#分享照片# ";
            break;
        case 'Event':
            topic = "#分享活动#";
            break;
        case 'Twitter':
            var nick = data.expert_nick;
            topic = "#达人微访谈#";
            title = " @" + nick + " ";
            url = "no_need";
            break;
        case 'Tag':
            topic = "#分享话题# ";
            title = "我正在关注和参加#" + data.target_title + "#这个话题的讨论，号召有兴趣的朋友们都来加入！";
            url = "no_need";
            break;
        case 'KMExchange':
            topic = "#KM四周年#";
            title = "我已经在K币兑换中抢兑到奖品" + data.target_title + "，你也试试吧";
            url = data.target_url;
            break;
        case 'Lottery':
            topic = "";
            title = "我在#KM四周年#活动中幸运抽奖中了" + data.target_title + "KB，你也来试试手气吧！";
            url = data.target_url;
            break;
        case '5th_anniversary':
            topic = "";
            title = data.target_title;
            break;
        case 'Fund':
            topic = "#分享微爱项目#";
            title = data.target_title;
            break;
        case 'Liveroom':
            topic = "#分享直播间#";
            title = data.target_title;
            break;
    }
    if (!title) {
        title = replaceArray(['&amp;', '&quot;', '&#039;', '&lt;', '&gt;'], ["&", '"', "'", '<', '>'], data.target_title);
    }
    if (!url) {
        if (type == 'Post') {
            url = km_path + "articles/view/" + data.target_id;
        } else {
            url = window.location.protocol + "//" + window.location.host + window.location.pathname;
        }
    } else if (url == 'no_need') {
        url = "";
    }
    var from_user_center = url.match(/user\//);
    if (from_user_center && type != 'Global') {
        $("#twitter_share_place_type").val("user");
    }

    if (!url) {
        content = topic + title;
    } else {
        content = topic + title + ' ' + url + ' ';
    }

    $("#share_to_twitter_form_content").val(content);
    var pos = $("#share_to_twitter_form_content").val().length;

    pic_url = data.target_pic_url;
    if (pic_url) {
        if (type == 'Event' || type == 'Slide') {
            $("#twitter_share_link_url").val(url);
            $("#twitter_share_app_type").val(type);
            $("#twitter_share_app_target_id").val(data.target_id);

        }
        $("#twitter_share_pic_url").val(pic_url);
        pic_name = data.target_pic_name;
        $("#twitter_share_pic_name").val(pic_name);
        pic_width = data.target_pic_width;
        pic_height = data.target_pic_height;
        pic_src = data.target_pic_src;
        if (pic_src) {
            pic_html_snippet = "<a style=\"width:" + pic_width + "px; height:" + pic_height + "px; \"><img class=\"pic_cover\" src=\"" + pic_src + "\" style=\"max-width:" + pic_width + "px; max-height:" + pic_height + "px;\"></a>";
        } else {
            pic_html_snippet = "<a style=\"width:" + pic_width + "px; height:" + pic_height + "px; \"><img class=\"pic_cover\" src=\"" + pic_url + "\" style=\"max-width:" + pic_width + "px; max-height:" + pic_height + "px;\"></a>";
        }
        $("#twitter_share_pic").empty().append(pic_html_snippet);
    } else {
        $("#twitter_share_pic_url").val("");
        $("#twitter_share_pic_name").val("");
        $("#twitter_share_pic").empty();
    }

    var group_account_id = data.target_group_account_id;
    if (group_account_id) {
        $("#twitter_share_group_account_id").val(group_account_id);
        $("#twitter_share_group_account_id").attr("checked", false);
        $("#group_account_id_wrap").show();
    }

    set_share_modal_frequent_at_user();
    $("#twitter_result_box").hide();
    $("#share_to_twitter_box").show();
    $("#share_to_twitter_modal").modal({ 'show': true, 'backdrop': 'static' });

    //fix firefox bug
    if (!$('#share_to_twitter_content').is(':hidden')) {
        $("#share_to_twitter_form_content").focus().selection(pos, pos);
        cal_twitter_share_length();
    }
}
//计算微博长度
function cal_twitter_share_length() {
    // resize_twitter_share_textarea("#share_to_twitter_form_content");
    //微博字数计算规则 汉字 1 英文 0.5 网址 11 当中多空白当作一个空白 除去首尾空白
    text = $("#share_to_twitter_form_content").val();

    var len = words_length(text);

    //var len = $("#share_to_twitter_form_content").val().length;
    var max_length = 140;
    if (len > max_length) {
        output = '<span style="color:red">-' + (len - max_length) + '</span>';
    } else {
        output = max_length - len;
    }
    $("#share_to_twitter_count").html(output);
}
//resize微博输入框
function resize_twitter_share_textarea(id) {
    // chrome的浏览器类型是safari，不对chrome进行自动伸缩。使用jquery.elastic-1.5进行自动伸缩时有问题，可能是因为它还进行了count_word_length的原因
    if (!$.browser.safari) {
        var comHeight = $(id).height();
        if ($.browser.mozilla) {
            if (comHeight > 84) {
                $(id).height(0);
            }
        }
        var comScrollHeight = $(id).get(0).scrollHeight;
        if (comScrollHeight > 80) {
            $(id).height(comScrollHeight);
        } else if (comHeight > 80) {
            $(id).height(80);
        }
    }
}
//计算长度
function words_length(text) {
    text = text.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*", "gi"), '填充填充填充填充填充填');
    text = text.replace(/\s{2,}/g, " ");
    var len = Math.ceil(($.trim(text.replace(/[^\u0000-\u00ff]/g, "aa")).length) / 2);
    return len;
}
//特殊字符替换
function replaceArray(find, replace, str) {
    var replaceString = str;
    var regex;
    for (var i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
}
//微博@
function share_to_twitter_post_at(src) {
    $('#share_to_twitter_form_content').focus();
    var cursorAt = $('#share_to_twitter_form_content').selection().start;
    var len = $('#share_to_twitter_form_content').val().length;
    var input_value = $('#share_to_twitter_form_content').val();
    var selection_start, selection_end, name, tipWord = '';
    if (src) {
        tipWord = $(src).text() + ' ';
    } else {
        tipWord = '@同事中英文ID/团队名称';
    }
    var value = input_value.substr(0, cursorAt) + tipWord + input_value.substr(cursorAt, len);
    $('#share_to_twitter_form_content').val(value);
    if (src) {
        selection_start = selection_end = cursorAt + tipWord.length;
        if (twitter_share_frequent_user.length > 0) {
            name = twitter_share_frequent_user.shift();
            $(src).text('@' + name);
        } else {
            $(src).hide();
        }
    } else {
        selection_start = cursorAt + 1;
        selection_end = cursorAt + tipWord.length;
    }

    $('#share_to_twitter_form_content').selection(selection_start, selection_end);
    return false;
}
//设置分享到微博最近@的人
function set_share_modal_frequent_at_user() {
    var uid = getCookie('t_uid');
    var item_key = 'frequent_user_' + uid;
    var frequent_user = '';
    if (window.localStorage) {
        frequent_user = localStorage.getItem(item_key);
    } else {
        frequent_user = getCookie(item_key);
    }
    frequent_user = frequent_user ? frequent_user : '';
    frequent_user = frequent_user.replace(/%2C/g, ',').replace(/k_[^,]+,?/gi, '').replace(/^,+/, '').replace(/,+$/, '');
    var frequent_user_array = frequent_user ? frequent_user.split(',') : [];
    var name = '';
    $('.share_to_twitter_at').find('a:lt(2)').hide();
    for (var i = 0; i < 2 && i < frequent_user_array.length; i++) {
        name = frequent_user_array[i];
        $('.share_to_twitter_at').find('a').eq(i).text('@' + name).show();
    }
    for (; i > 0; i--) {
        frequent_user_array.shift();
    }
    window.twitter_share_frequent_user = frequent_user_array;
}

/**
 * 通过rtx和邮件分享
 */
//显示、隐藏发给同事的input hint
function toggle_hint($modal, input_selector) {
    var is_send_rtx = (input_selector != '#invite_users_select') && $modal.find('#send_rtx').is(":checked");
    if ($modal.find('.input_hint_label').length === 0) {
        // 此处原为提示逻辑，弃用。
    } else {
        $modal.find('.input_hint_label').show();
    }
    if ($('#mail_to_user').val() && !is_send_rtx) {
        $modal.find('.input_hint_label').hide();
    }
    if ($('#rtx_to_user').val() && is_send_rtx) {
        $modal.find('.input_hint_label').hide();
    }

    $modal.find(input_selector).focus(function() {
        $modal.find('.input_hint_label').hide();
        $modal.find(input_selector + ' .name_edit_input').focus();
    });
    $modal.find(input_selector + ' .name_edit_input').focus(function() {
        $modal.find('.input_hint_label').hide();
    }).blur(function() {
        if (!$('#mail_to_user').val() && !is_send_rtx) {
            $modal.find('.input_hint_label').show();
        }
        if (!$('#rtx_to_user').val() && is_send_rtx) {
            $modal.find('.input_hint_label').show();
        }
    });
}
//获取上一次发邮件或rtx的名字
function get_last_name(ctrl) {
    var $modal = $(ctrl).parents('.modal');
    $.getJSON(operation_data.km_path + 'groups/get_mail_receivers',
        function(data) {
            if (data.result == 'ok') {
                if (data.value) {
                    $modal.find(".input_hint_label").hide();
                    $('.mail_to_user').val(data.value);
                    $('.rtx_to_user').val(data.value);
                    if ($modal.find('#email_to_users_select').length > 0) {
                        email_to_users_select.setValue(data.value);
                    } else if ($modal.find('#rtx_to_users_select').length > 0) {
                        rtx_to_users_select.setValue(data.value);
                    } else if ($modal.find('#email_invite_users_select').length > 0) {
                        email_invite_users_select.setValue(data.value);
                    } else if ($modal.find('#rtx_invite_users_select').length > 0) {
                        rtx_invite_users_select.setValue(data.value);
                    }
                } else {
                    alert("无上次记录");
                }
            }
        });
    return false;
}
//发送邮件或rtx
var email_submit_fail_count = 0;

function email_submit(ctrl) {
    var $modal = $(ctrl).parents('.modal');
    var is_send_mail = $modal.find('#send_mail').is(":checked");
    var id = operation_data.target_id;
    var type = operation_data.target_type;
    if ($(ctrl).attr("id") == 'invite_submit') {
        var to = $('#mail_to_user').val();
    } else {
        var to = is_send_mail ? $('#mail_to_user').val() : $('#rtx_to_user').val();
    }
    var words = $modal.find('#email_recommend_words').val();
    var title = $modal.find('#email_title').val();
    var rtx = $modal.find('#send_rtx')[0].checked ? 'send_by_rtx' : '';
    var mail = $modal.find('#send_mail')[0].checked ? 'send_by_mail' : '';
    var bcc = $modal.find("#send_bcc").length && $modal.find("#send_bcc")[0].checked ? 'bcc' : '';
    var group_id = $modal.find('#group_id').val();
    var is_invite = $modal.find('#is_invite').val();
    var email_title_valid = $modal.find('#email_title_valid').val() == undefined ? '' : $modal.find('#email_title_valid').val();
    var users_categories = '';

    if (mail == '' && rtx == '') {
        alert('请选择发送方式');
        return;
    }

    $modal.find('.users_categories').find('input:checkbox').each(function() {
        if ($(this).attr('checked')) {
            users_categories += ',' + $(this).val();
        }
    });
    if (users_categories != '') {
        users_categories = users_categories.substring(1);
    }

    if (to == '' && users_categories == '') {
        email_submit_fail_count++;
        //fix 9610238【发给同事】接收人为空时会提示脚本加载不成功
        if (email_submit_fail_count >= 5) {
            alert('脚本可能没有成功加载，请刷新页面后重试');
        } else {
            alert('你还没有告诉我们你想发送给谁呢~');
        }
        return;
    }

    $modal.find('#email_operation_action_message').empty().prepend('<img src="' + operation_data.km_path + 'img/indicator.gif" />');
    $modal.find('#email_submit').addClass('disabled').attr('disabled', true);

    if (is_invite) {
        rurl = operation_data.km_path + 'operations/invite';
        //邀请同事 点击确定后先禁用按钮
        $(ctrl).addClass('disabled').attr('disabled', true);
    } else {
        rurl = operation_data.km_path + 'operations/notice';
    }

    $.post(rurl, { target_id: id, target_type: type, mail_to: to, mail_title: title, recommend_words: words, rtx: rtx, mail: mail, users_categories: users_categories, bcc: bcc, group_id: group_id, valid: email_title_valid },
        function(data) {
            var ret = eval('(' + data + ')');
            if (ret.result == 'ok') {
                $modal.find('#email_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="vertical-align:middle">发送成功！</label>');
                $modal.find('#operation_action_message_success').fadeIn(1000).fadeOut(1500);
                setTimeout(function() {
                    close_mail_modal(ctrl);
                    $modal.find('#mail_target_id').val('');
                    $('#mail_to_user').val('');
                    $('#rtx_to_user').val('');
                    $modal.find('#email_recommend_words').val('');
                    $modal.find('#email_submit').removeClass('disabled').attr('disabled', false);
                }, 2000);
            } else {
                $modal.find('#email_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="vertical-align:middle">发送失败了，请重试一次</label>');
            }
        });
}
//关闭发送邮件、rtx模态框
function close_mail_modal(ctrl) {
    var $modal = $(ctrl).parents('.modal');
    $modal.modal('hide');
    if (email_to_users_select || rtx_to_users_select || invite_users_select) {
        email_to_users_select && email_to_users_select.clearValue();
        rtx_to_users_select && rtx_to_users_select.clearValue();
        typeof invite_users_select != 'undefined' && invite_users_select.clearValue();
        $('#mail_to_user').val('');
        $('#rtx_to_user').val('');
    }
    return false;
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 文章
 */
function op_post_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#article_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_entity(data, {});
        if (data.upload_video) {
            //上传视频
            upload_video_func();
        } else if (data.delete_video) {
            //删除视频
            delete_video_func(data.delete_video.delete_url);
        }
        //文章配图
        if (data.edit_picture) {
            edit_picture();
        }
        //置顶
        if (data.top) {
            uptop(data.top.is_top, data.top.top_url);
        }
        //精华
        if (data.essential) {
            essential_func(data.essential.is_essential, data.essential.essential_url);
        }
        //异步导出
        $('.export_access_state').click(function() {
            //提示用户正在下载访问记录
            //$(this).button({loadingText: '正在准备数据...'}).button('loading');
            //这里采用直接下载的方式
            window.location.href=$(this).data('url');
        });
        //全局隐藏文章
        if (typeof data.is_hidden !== "undefined") {
            search_hide_func(data);
        }
    }
    //采编（加入直达区）
    post2k();
    //转载
    reship_to();
    // 取消转载
    cancel_reship();

}
//显示、隐藏编辑/管理操作栏
function toggle_manage_bar() {
    $('.to_edit_link').bind('mouseover', function(e) {
        $(this).find('#more_div').show();
        $(this).find('#more_management_copy').show();
        $(this).find('.q_more_management').hide();
        e.stopPropagation();
    }).bind('mouseout', function(e) {
        $(this).find('#more_management_copy').hide();
        $(this).find('#more_div').hide();
        $(this).find('.q_more_management').show();
        e.stopPropagation();
    });
}
//删除实体
function delete_entity(data, liveroom) {
    var have_liveroom = liveroom && (liveroom.status !== 'not_exist');
    if (data.operation_data.target_type === 'Post' && data.remove.km_recommend && data.remove.km_recommend.is_recommended && !data.remove.is_admin) {
        $('.delete_entity').live('click', function() {
            $.alert('此文为KM推荐文章，确定删除请联系km热线。');
            return false;
        });
    } else if (data.operation_data.target_type === 'Event' && have_liveroom) {
        var liveroom_is_end = liveroom && liveroom.status === 'end' ? true : false;
        if (liveroom_is_end) {
            $('.delete_entity').live('click', function() {
                var _this = this;
                $.confirm('删除活动会将活动中的直播间一并删除，确认删除？', function() {
                    check_csrf(data.remove.delete_url, _this);
                });
                return false;
            });
        } else {
            $('.delete_entity').live('click', function() {
                $.alert("活动有关联的未结束的直播间，不能删除");
            });
        }
    } else {
        $('.delete_entity').live('click', function() {
            var _this = this;
            $.confirm('你确定要删除吗？', function() {
                check_csrf(data.remove.delete_url, _this);
            });
            return false;
        });
    }
}
//上传视频
function upload_video_func() {
    $(".video_upload_link").live("click", function() {
        var box = $('#video_upload_box').find('.modal_body').eq(0);
        var url = operation_data.km_path + 'videos/upload_box?callback=video_upload_success';
        if (box.html().length < 10) {
            box.html('<iframe src="' + url + '" width="555" frameBorder="0"></iframe>');
        }
        if (!window.has_plugin) {
            $.alert("请打开以下地址安装视频上传插件:<a href=" + window.plugin_url + " target=_blank>" + window.plugin_url + "</a>");
        } else {
            $('#video_upload_box').modal({ 'show': true, 'backdrop': 'static' });
        }
    });
}
//删除视频
function delete_video_func(delete_url) {
    $('.video_delete_link').click(function() {
        if (confirm('你确定要删除吗？')) {
            var url = delete_url;
            $.getJSON(
                km_path + 'posts/ajax_delete_video', { id: operation_data.target_id },
                function(result) {
                    location.reload();
                }
            );
        }
    });
}
//置顶 AND 星标
function uptop(is_top, top_url) {
    $('.uptop_btn').click(function() {
        var to_top = is_top ? '0' : '1';
        $.get(top_url + to_top, function(data) {
            var ret = eval('(' + data + ')');
            if (ret.result == 'ok') {
                var text = operation_data.target_type == 'Doc' ? '星标' : '置顶';
                if (is_top) {
                    $('.uptop_btn').text(text);
                    is_top = 0;
                } else {
                    $('.uptop_btn').text('取消' + text);
                    is_top = 1;
                }
            }
        });
    });
}
//精华
function essential_func(is_essential, essential_url) {
    $('.essential_btn').click(function() {
        var to_essential = is_essential ? '0' : '1';
        $.get(essential_url + to_essential, function(data) {
            var ret = eval('(' + data + ')');
            if (ret.result == 'ok') {
                if (is_essential) {
                    $('.essential_btn').text('精华');
                    is_essential = 0;
                } else {
                    $('.essential_btn').text('取消精华');
                    is_essential = 1;
                }
            }
        });
    });
}

//全局搜索隐藏
function search_hide_func(data) {
    $('.search_hide_btn').click(function() {
        var id = data.operation_data.target_id;
        var to = data.is_hidden === "1" ? 0 : 1;
        $.ajax({
            url: km_path + 'admin/ajax_toggle_post_visibility',
            type: 'POST',
            cache: false,
            data: {
                id: id,
                hidden: to,
            },
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            success: function (ret) {
                if (ret.code === 0) {
                    if (ret.data.is_hidden) {
                        $('.search_hide_btn').text('解除全局搜索隐藏');
                        // $(".js-operations-data").data('is_search_hide', 1);
                        data.is_hidden = "1";
                    } else {
                        $('.search_hide_btn').text('从全局搜索中隐藏');
                        data.is_hidden = "0";
                        // $(".js-operations-data").data('is_search_hide', 0);
                    }
                }
            },
            fail: function () {
                $.tips("设置失败");
            }
        });
    });
}
//km推荐，加入邮件池
function do_post_mailpool() {
    var target_id = operation_data.target_id;
    $('#PostId').val(target_id);
    var desc = 'post-' + target_id + '-gpid';
    $('#PostTitle').text($('#' + desc).text());

    if (confirm('推荐后会显示在KM首页和加入KM邮件池，确定推荐吗？')) {
        $.post(operation_data.km_path + 'operations/posts_addmailpool', { post_id: target_id }, function(data) {
            if (data == 'ok') {
                window.location.reload();
            }
        });
    }
}
//文章配图modal
function edit_picture() {
    var upload_img_html = [
        '<form id="upload_img_popup" class="modal" method="POST" enctype="multipart/form-data" action="' + operation_data.km_path + 'articles/update_header_img_file">',
        '<input type="hidden" name="csrf_token" value="' + $('#csrf_token').html() + '">',
        '<div class="modal_header">',
        '<a class="close" data-dismiss="modal" href="javascript:void(0);">&times;</a> 文章配图',
        '</div>',
        '<div class="modal_body padding_xl">',
        '<input type="hidden" name="data[Post][ref]" value="' + location.href + '" />',
        '<input type="hidden" name="data[Post][id]" value="' + operation_data.target_id + '"/>',
        '<input class="header_img_file" type="file" size="30" name="data[Post][header_img_file]" style="width: 350px;"/>',
        '<p class="mt_s secondary">为保证显示效果，请上传360 X 200的png或jpg格式的图片</p>',
        '</div>',
        '<div class="modal_footer">',
        '<a href="javascript:void(0);" onclick="javascript:confirm_upload_img();" class="k_button">确定</a>',
        '<a href="javascript:void(0);" class="k_button_secondary" data-dismiss="modal">取消</a>',
        '</div>',
        '</form>'
    ];
    $('body').append(upload_img_html.join(''));
    $('.edit_pic_btn').click(function() {
        $('#upload_img_popup').modal();
    });
}
//文章配图提交
function confirm_upload_img() {
    var upload_img_popup = $('#upload_img_popup');
    var file_name = upload_img_popup.find('.header_img_file').val();
    if (file_name != '') {
        var ext_name = file_name.substring(file_name.lastIndexOf('.') + 1).toLowerCase();
        if (ext_name != 'png' && ext_name != 'jpg') {
            alert('只能是png或者是jpg格式的图片');
        } else {
            upload_img_popup.submit();
        }
    }
}
//更改摘要
function edit_post_summary() {
    var url = operation_data.km_path + 'posts/edit_summary/' + operation_data.target_id;
    show_operation_modal(url, '更改摘要', '317px');
}
//显示操作栏modal
function show_operation_modal(url, title, height, width) {
    var height = height == 'undefined' ? '300px' : height;
    var width = width == undefined ? '100%' : width;
    $('#operation_modal .modal_body').html('<iframe src=' + url + ' width="' + width + '" height="' + height + '" frameBorder=0 />');
    $('#operation_modal').find('.modal_header span').text(title).end()
        .modal('show');
}
//隐藏operation modal
function hide_operation_modal() {
    $('#operation_modal').modal('hide');
}
//采编（加入直达区）
function post2k() {
    if ($("#post2k_btn").length > 0) {
        $("#post2k_btn").popBox({
            boxId: "post2k_div",
            alignRight: 1,
            alignTop: 0,
            onShowBox: before_show_post2k_box,
            relativeId: 'operations'
        });
    }
}
//采编框展示之前
function before_show_post2k_box() {
    if (load_post2k_box) {
        var target_id = $('#post2k_div').attr('target_id');
        $('#post2k_div').load(operation_data.km_path + "apis/o_post2k.php?target_id=" + target_id);
        load_post2k_box = false;
    }
}
//采编（加入直达区）提交
function post2k_submit() {
    var column_id = $("select[name=columns]").val();
    var post_id = $("input[name=post_id]").val();
    $('#post2k_operation_action_message').empty().prepend('<img src="' + operation_data.km_path + 'img/indicator.gif" />');
    $('#post2k_submit').addClass('disabled').attr('disabled', true);

    $.get(km_path + 'knowledges/post2knowledge', { column_id: column_id, post_id: post_id }, function(data) {
        if (data == 'ok') {
            $('#post2k_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">加入文集成功！</label>');
            $('#operation_action_message_success').fadeIn(1000).fadeOut(1500);
            setTimeout(function() {
                close_post2k_box();
                $('#post2k_submit').removeClass('disabled').attr('disabled', false);
            }, 2000);
        } else if (data == 'reshiped') {
            $('#post2k_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">重复收录！</label>');
            $('#operation_action_message_success').fadeIn(1000).fadeOut(1500);
            setTimeout(function() {
                close_post2k_box();
                $('#post2k_submit').removeClass('disabled').attr('disabled', false);
            }, 2000);
        } else {
            $('#post2k_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">出错了！</label>');
            $('#operation_action_message_success').fadeIn(1000).fadeOut(1500);
        }
    });
}
//关闭采编框
function close_post2k_box() {
    $("#post2k_div").hide();
}
//转载
function reship_to() {
    if ($(".js-reship-btn").length > 0) {
        $(".js-reship-btn").popBox({
            boxId: "reship_div",
            alignRight: 1,
            alignTop: 0,
            onShowBox: before_show_reship_box,
            relativeId: 'operations'
        });
    }
}
// 取消转载
function cancel_reship() {
    $('.js-cancel-reship').click(function() {
        var cancel_reship_url = $(this).data('cancel_reship_url');
        var _this = this;
        $.confirm('你确定要取消转载吗？', function() {
            check_csrf(cancel_reship_url, _this);
        });
    });
}

var reship_popbox_height = 20;

function set_reship_box_position(popbox_height) {
    var window_height = document.documentElement.clientHeight,
        btn_offset_top = $(".js-reship-btn").offset().top,
        body_scroll_top = document.body.scrollTop;
    var reship_div_bottom = (window_height - (btn_offset_top - body_scroll_top));
    if (reship_div_bottom < popbox_height) {
        var reship_div_top = btn_offset_top - popbox_height;
        $('#reship_div').css("top", reship_div_top);
    }
}
//转载框出现之前
function before_show_reship_box() {
    if (load_reship_box) {
        $('#reship_div').load(km_path + "apis/o_reship.php?target_id=" + operation_data.target_id + "&target_type=" + operation_data.target_type + "&origin_group_id=" + operation_data.group_id, function() {
            reship_popbox_height = $('#reship_div').outerHeight();
            set_reship_box_position(reship_popbox_height);
        });
        load_reship_box = false;
    }
    set_reship_box_position(reship_popbox_height);
}
//转载提交
function reship_submit() {
    var reship_url = km_path;

    $('#reship_operation_action_message').empty().prepend('<img src="' + operation_data.km_path + 'img/indicator.gif" />');
    $('#reship_submit').addClass('disabled').attr('disabled', true);

    if (operation_data.group_id && operation_data.target_id) {
        switch (target_type) {
            case 'Post':
                reship_url += 'posts/post_reship?group_id=' + operation_data.group_id + '&post_id=' + operation_data.target_id;
                break;
            case 'Event':
                reship_url += 'events/event_reship?group_id=' + operation_data.group_id + '&event_id=' + operation_data.target_id;
                break;
            case 'Knowledge':
                reship_url += 'knowledges/knowledge_reship?group_id=' + operation_data.group_id + '&knowledge_id=' + operation_data.target_id;
                break;
            default:
                break;
        }

        $.get(reship_url, function(data) {
            if (data == 'ok') {
                $('#reship_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">转载成功！</label>');
                $('#operation_action_message_success').fadeIn(1000, function() {
                    $(this).fadeOut(1500, function() {
                        $('#reship_submit').removeClass('disabled').attr('disabled', false);
                        close_reship_box('submit');
                    });
                });
            } else if (data == 'reshiped') {
                $('#reship_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">重复转载！</label>');
                $('#operation_action_message_success').fadeIn(1000, function() {
                    $(this).fadeOut(1500, function() {
                        $('#reship_submit').removeClass('disabled').attr('disabled', false);
                    });
                });
            } else {
                $('#reship_operation_action_message').empty().prepend('<label id="operation_action_message_success" style="background-color: lightyellow">出错了！</label>');
                $('#operation_action_message_success').fadeIn(1000, function() {
                    $(this).fadeOut(1500, function() {
                        $('#reship_submit').removeClass('disabled').attr('disabled', false);
                    });
                });
            }
        });
    }

}
//关闭转载框
function close_reship_box(param) {
    var origin_html = $(".js-reship-btn").html();
    var re = /\d+/i;
    var number = origin_html.match(re);
    if ('submit' == param) {
        if (number == null) {
            $(".js-reship-btn").html('转载(1)<span class="arrow-icon"></span>');
        } else {
            $(".js-reship-btn").html('转载(' + (parseInt(number) + 1) + ')<span class="arrow-icon"></span>');
        }
    }
    $("#reship_submit").attr("disabled", "disabled");
    $(".bookmark_form")[0].reset();
    $("#reship_div").hide();
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 活动
 */
function op_event_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_entity(data);
        //发送短信
        send_message();
    }
    //采编（加入直达区）
    post2k();
    //转载
    reship_to();
    // 取消转载
    cancel_reship();
    // 邀请同事
    invite_success_callback(data);

    $('.export_event_access_state').click(function() {
        $.getJSON($(this).data('url'), function(data) {
            if (data.res == 'ok') {
                $.alert('报表稍后将会通过邮件发送给您。');
            } else {
                $.alert('无法生成报表，请联系KM热线！')
            }
        });
    });

}

//活动关联投票
function survey_relate() {
    var url = operation_data.km_path + operation_data.url_prefix + 'event/' + operation_data.target_id + '/survey_relate';
    $('#related_modal').load(url, function() {
        $('#related_modal').modal('show');
    });
}
//关联投票submit
function do_relate(form) {
    remote_submit_json(form, function(data) {
        if (data == 'ok') {
            $('#dialog').html('<div class="loadpop m">成功关联投票！</div>');
            setTimeout(function() {
                $('#dialog').fadeOut(close_dialog);
            }, 400);
            location.reload();
            return;
        }
        var err_msg = '';
        if (data == 'survey_not_exist') {
            err_msg = '关联投票投票不存在，请选择其他投票';
            $("input[name='data[Event][survey_id]']").addClass('form_error').one('focus', function() {
                $(this).removeClass('form_error');
            });
        } else if (data == 'query_has_owner') {
            err_msg = '关联投票已关联其他活动，请选择其他投票';
        } else {
            err_msg = '操作出错啦，请重试一次';
        }
        $('#notice').show().html("<span style='color:red'>" + err_msg + "...</span>");
    });
    return false;
}
//上传附件
function file_upload(url) {
    $.alert('内部资料分享注意事项：\n' +
        '1. 避免包含对政府、同行的不恰当言论；\n' +
        '2. 避免包含用户、同事的隐私数据；\n' +
        '3. 避免包含公司战略、财务数据、精确运营数据的信息；\n' +
        '4. 模糊化未公开的系统或产品截图、关键文字、URL、精确IP；',
        function() {
            $('#operation_modal').css({ 'margin-top': '-113px' });
            show_operation_modal(url, '上传活动附件', '192px');
        });
}
//发送短信
function send_message() {
    $('#send_msg').click(function() {
        $('#send_msg_form').submit();
    });
}
//附件回调
function attach_upload_cb(attach_id, attach_name, attach_size, attach_type) {
    var attach_url = operation_data.km_path + 'attachments/show/' + attach_id;
    var del_url = operation_data.km_path + operation_data.url_prefix + 'event/' + operation_data.target_id + '/attach_delete/' + attach_id;

    $('#event_attaches_list').closest('.km_box').show().end().prepend('<li>' + '<span><div class="filetype ' + attach_type + '_icon">' + '<a title="' + attach_name + '" href="' + attach_url + '">' + attach_name + '</a>' + '(' + attach_size + ')' + '<a class="secondary ml_m" href="' + del_url + '" onclick="return attach_delete(this);">删除</a>' + '</div>' + '</span>' + '</li>');

    hide_operation_modal();
}
//删除附件
function attach_delete(src) {
    $.confirm('确定要删除此附件？', function() {
        check_csrf(src.href, src);
    });
    return false;
}

/**
 * 回答查看页面的分享操作
 */
function op_answer_success_callback(data) {}

/**
 * 除收藏、顶、分享组件外实体操作
 * 文档
 */
function op_doc_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#doc_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_entity(data);
        //文档被锁住
        if (data.doc_lock) {
            js_doc_lock(data.edit.edit_url);
        }
        //置顶
        if (data.top) {
            uptop(data.top.is_top, data.top.top_url);
        }
    }
    //版本管理
    if (data.revision && data.revision.length) {
        toggle_revision();
    }
    // 下载管理
    if (data.download) {
        //显示不可下载提示
        toggle_tooltips();
        //下载附件
        download_check(data.download.url);
    }
}
//历史版本
function toggle_revision() {
    $('.q_revision').parent().hover(function(e) {
        // $('#view_revision_copy').toggle();
        $('#revision_div').toggle();
    });
}

//被锁定的文档不能编辑
function js_doc_lock(edit_url) {
    $('.js_edit_link').click(function() {
        location.href = edit_url;
    });
}

//给文档解锁
function unlock_doc() {
    var unlock_url = operation_data.km_path + 'docs/unlock';
    $.ajax({
        url: unlock_url,
        type: "GET",
        dataType: "jsonp",
        cache: false,
        data: { doc_id: operation_data.target_id },
        success: function(ret) {
            if (ret.result == 'ok') {
                $('.js_doc_unlock').hide();
            }
        }
    });
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 投票
 */
function op_survey_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $(txTpl('bar_actions_top_tpl', data)).insertBefore('#survey-privacy-tip');

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_entity(data);
    }
    // 邀请同事
    invite_success_callback(data);

    $('.export_survey_access_state').click(function() {
        $.getJSON($(this).data('url'), function(data) {
            if (data.res == 'ok') {
                $.alert('报表稍后将会通过邮件发送给您。');
            } else {
                $.alert('无法生成报表，请联系KM热线！')
            }
        });
    });
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 视频
 */
function op_video_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#video_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_video(data.remove.url, data.remove.delete_url);
    }
}
//删除视频或视频专辑操作
function delete_video(url, delete_url) {
    $('.delete_video').click(function() {
        var wording = operation_data.target_type === 'Video' ? '你确定要删除该视频吗？' : '本次操作会将专辑删除，专辑下的视频会被保留在视频列表中，你确定删除吗？';
        $.confirm(wording, function() {
            $.ajax({
                type: "POST",
                url: delete_url,
                data: { 'target_id': operation_data.target_id },
                success: function(back) {
                    if (back == 'ok') {
                        window.location.href = url;
                        exit;
                    } else {
                        $.alert('失败');
                    }
                }
            });
        });
    });
}
//弹出PPT时间校对浮层
function check_time() {
    $('#ppt_time_check_box').modal({
        backdrop: 'static',
        show: true
    });
}
//点击ppt时间校对的提交按钮
function submit_check() {
    $("#video_form_ppt_time_log").submit();
    $("#ppt_time_check_box").modal('hide');
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 视频专辑
 */
function op_playlist_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#playlist_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_video(data.remove.url, data.remove.delete_url);
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 相册
 */
function op_album_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#album_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除实体
        if (data.remove) delete_entity(data);
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 照片
 */
function op_photo_success_callback(data) {
    $('#photo_action').append(txTpl('bar_actions_tpl', data));

    //有管理权限
    if (data.remove) {
        //删除实体
        if (data.remove) delete_entity(data);
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 附件、幻灯片
 */
function op_attachment_success_callback(data) {
    $('#attachment_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //重新上传
        file_reupload(data.reupload.is_xls_file);
        //删除实体
        if (data.remove) delete_attach(data.remove.delete_url, data.remove.is_xls_file);
    }
    //显示不可下载提示
    toggle_tooltips();
    //下载附件
    download_check(data.download.url);
}

//下载附件
function download_check(url) {
    $('.attach_download').click(function() {
        if (confirm('KM平台的所有内容仅供内部分享，对于未经授权私自泄露行为，公司将有权追究法律责任！')) {
            var download_count = parseInt($(".download_count")[0].innerHTML.replace(/[^0-9]/ig, ""));
            $(".download_count")[0].innerHTML = "(" + (download_count + 1) + ")";
            if (window.ActiveXObject || "ActiveXObject" in window) {
                url += "?is_ie=1";
            }
            window.location = url;
        }
    });
}
//显示不可下载提示
function toggle_tooltips() {
    $(".download_tips_show").tooltip({
        position: "bottom center"
    });
}
//重新上传附件
function file_reupload(is_xls_file) {
    $('.file_upload').click(function() {
        if (is_xls_file) {
            $('#xls_content').hide();
        }
        $('#file_upload_box').modal('show');
    });
    $('#file_upload_box #submit_button').click(function() {
        var downloadable = $('#downloadable').is(':checked') ? 1 : 0;
        var upload_url = operation_data.km_path + 'attachments/refresh/' + operation_data.target_id + '?downloadable=' + downloadable;
        $.ajaxFileUpload({
            url: upload_url,
            secureuri: false,
            fileElementId: 'attachment_refresh',
            dataType: 'json',
            success: function(data, status) {
                $('#msg_box').fadeIn(500, function() {
                    $(this).fadeOut(1000, function() {
                        $('#file_upload_box').modal('hide');
                        document.location.reload();
                    });
                });
            },
            error: function(data, status) {
                $.alert('上传出错，请重试或联系管理员');
            }
        });
    });
}
//删除附件
function delete_attach(url, is_xls_file) {
    $('.delete_attachment').click(function() {
        if (is_xls_file) {
            $('#xls_content').hide();
        }
        $.confirm('你确定要删除吗？', function() {
            window.location.href = url;
        }, function() {
            if (is_xls_file) {
                $('#xls_content').show();
            }
        });
    });
}
//更改是否可以下载状态
function change_attach_downloadable(type) {
    var attach_type = type ? 'checked' : 'unchecked';
    var url = operation_data.km_path + 'attachments/change_attach_downloadable_ajax/' + operation_data.target_id + '/' + attach_type;
    $.post(url, function(data) {
        var ret = eval('(' + data + ')');
        if (ret.result != 'ok') {
            $.alert('更新出错，请重试或联系管理员');
        } else {
            document.location.reload();
        }
    });
}
//km推荐幻灯片
function do_slide_mailpool() {
    if (confirm('推荐后会显示在幻灯片首页和加入KM幻灯片推荐池，确定推荐吗？')) {
        $.post(operation_data.km_path + 'operations/slide_addmailpool', { slide_id: operation_data.target_id }, function(data) {
            if ($.trim(data) == 'ok') {
                window.location.reload();
            }
        });
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 直达区
 */
function op_knowledge_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#knowledge_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除直达区
        if (data.remove) {
            delete_knowledge(data.remove.delete_url);
        }

        $('.knowledge-id').val(operation_data.target_id);
        if (data.edit_knowledge_summary) {
            $('#edit-knowledge-summary textarea').val(data.edit_knowledge_summary.summary);
        }
    }
    //转载
    reship_to();
    // 取消转载
    cancel_reship();
}
//删除直达区
function delete_knowledge(url) {
    $('.delete_knowledge').click(function() {
        $.confirm('删除文集后，数据将不能恢复。你确定要删除吗？', function() {
            window.location.href = url;
        });
    });
}
//直达区加入池子
function do_knowledge_mailpool() {
    $.confirm('确定将其放入邮件池中', function() {
        $.get(operation_data.km_path + 'knowledges/do_knowledge_mailpool', { type: 'Knowledge', id: operation_data.target_id }, function(data) {
            var ret = eval('(' + data + ')');
            if (ret.result == 'ok') {
                window.location.reload();
            }
        });
    });
}
//运营 更改文集配图
function edit_knowledge_picture(form) {
    var fileName = $('#edit-knowledge-picture .knowledge-picture').val();

    if (fileName != '') {
        var extendName = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
        if (extendName != 'png' && extendName != 'jpg' && extendName != 'jpeg') {
            alert('只能是png或者是jpg格式的图片');
        } else {
            form.submit();
        }
    }
}
//运营 更改文集摘要
function edit_knowledge_summary(form) {
    remote_submit_json(form, function(data) {
        $('#edit-knowledge-summary').modal('hide');
    }, true);
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 乐问
 */
function op_q_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#operations').prepend(txTpl('bar_actions_follow_tpl', data));
    // 过滤 data 中的 super_push_list,相同推动人只显示一次
    // 倒序遍历 返回的数据按照时间排序
    if(typeof data.super_push !== "undefined" && data.super_push.super_push_list.length){
        var map = {};
        var filterPushList = []
        var index = 1
        for(var i = data.super_push.super_push_list.length-1; i>=0 ; i--){
            var currentUser = data.super_push.super_push_list[i];
            if(!map[currentUser["created_by"]]){
                map[currentUser["created_by"]] = index;
                index++
                filterPushList.push(currentUser)
            }
        }
        window["alreadyPromoteList"] = map;
        data.super_push.super_push_list = filterPushList
    }
    $('#operations').append(txTpl('invite_principal_list_tpl', data));


    // 展示历史版本
    if (data.revision && data.revision.history.length) {
        toggle_revision();

        $('#q_revision_list .look').bind('click', function() {

            var item = data.revision.history[$('#q_revision_list li').index($(this).parent())];
            $('#q-revision-modal .modal_header span').text('问题历史版本：' + item.revision_created + '  by ' + item.revision_created_by);

            var modal_body_html = '<div>';
            for (var i = 0; i < item.tags.length; i++) {
                modal_body_html += '<a class="topic q-revision-tags" target="_blank" href="' + $('#q-revision-modal').data('url') + item.tags[i].id + '">' + item.tags[i].name + '</a>';
            }

            modal_body_html += '</div><br /><p class="q-revision-title long_break">' + item.title + '</p><br /><div class="km_view_content km_view_content_simple long_break">' + item.content + '</div>'
            $('#q-revision-modal .modal_body').html(modal_body_html);

            $('#q-revision-modal').modal('show');
        });
    }

    //有管理权限
    if (data.edit) {

        // 显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
    }
    initDropdown();
    // 邀请回答modal展示前的一些操作
    before_invite_answer_show(data.invite_answer);
    // 邀请同事
    invite_answer_submit(data.invite_answer);

    // 快速跳转到我的回答的提示框
    $(".answered").tooltip({
        position: "top",
        width: 110,
        offset: [0, 10]
    });
}
if(!(window.location.href.indexOf('/q/') > -1)){
    // 邀请回答modal中邀请同事input框添加hint
    $("#q_invite_users_select").input_hint_label({
        hintWords: '每次只能邀请一名同事',
        defaultCss: { color: '#999' },
        focusCss: { color: '#333' },
        box_z_index: 1002,
        offset: { left: 85, top: 4 },
        implementation: 'label',
        width: 122
    });
}

//控制显示和隐藏hint
$("#q_invite_users_select").next('.input_hint_label').click(function() {
    $("#q_invite_users_select").click();
});

$("#q_invite_users_select").click(function() {
    $('.name_edit_input').focus(function() {
        $('#q_invite_users_select').next('.input_hint_label').hide();
    }).blur(function() {
        if (!$.trim($('#q_invite').val())) {
            $('#q_invite_users_select').next('.input_hint_label').show();
        }
    });
});

// 邀请回答modal展示前的一些操作
function before_invite_answer_show(invite_answer) {
    $('#invite_answer').on('show.bs.modal', function() {
        var $container = $('.js-invite-answer-container');

        // 普通人邀请
        $container.html($('#invite-answer-content').html());
    });
}

// 邀请回答人名自动填充
$('#invite_answer').delegate('.js-autofill-invitee', 'click', function() {
    var nick = $(this).data('nick');
    q_invite_users_select.setValue(nick);
    $('#q_invite_users_select').focus();
    $('.input_hint_label').hide();
});

// 初始化乐问操作栏的下拉菜单
function initDropdown() {
    var t1, t2;
    $('.drop-down-entry').mouseenter(function () {
        var $self = $(this);
        clearTimeout(t2);
        t1 = setTimeout(function() {
            $('.drop-down-entry .km-dropdown').addClass('hide');
            $self.find('.km-dropdown').removeClass('hide');
        }, 200);
    }).mouseleave(function () {
        var $self = $(this);
        clearTimeout(t1);
        t2 = setTimeout(function() {
            $self.find('.km-dropdown').addClass('hide');
        }, 200);
    });
}

// 邀请回答
function invite_answer_submit(invite_answer) {
    $('.js-invite-answer-submit').click(function() {
        var cit = Number($("#invite_answer").attr("current_invite_type") || 0);
        var is_q_admin = false;
        var invite_users = $.trim($('#q_invite').val());
        var invite_num = invite_users === '' ? 0 : invite_users.split(';').length;
        var invite_note = $('#q_invite_note').val();
        var is_invited_by_admin = '0';

        if (invite_num === 0 && cit == 0) {
            $('#invitee_hint').hide();
            $('#invitee_error_hint').text('请输入要邀请的同事RTX名').show();
        } else if (invite_num === 1 || (invite_num === 0 && cit == 1)) {
            $("#action_form input[name='data[question_id]']").val(operation_data.target_id);
            if (cit == 1) {
                $("#action_form input[name='data[invite_users]']").val("");
                $("#action_form input[name='data[action_type]']").val('invite_supplement');
            } else {
                $("#action_form input[name='data[invite_users]']").val(invite_users);
                $("#action_form input[name='data[action_type]']").val('invite_users');
            }

            $("#action_form input[name='data[invite_note]']").val(invite_note);
            $("#action_form input[name='data[is_invited_by_admin]']").val(is_invited_by_admin);

            var url = km_path + 'users/get_zongban_nicks';
            $.get(url, function (res) {
                if (cit == 1) {
                    $("#action_form").submit();
                    submit_loading();
                } else {
                    var gm_arr = JSON.parse(res);

                    // 被邀请者含有总办
                    var invitee_is_gm = $.inArray(invite_users, gm_arr) >= 0;

                    // 邀请者含有总办
                    var inviter_is_gm = $.inArray(operation_data.current_user, gm_arr) >= 0;

                    if (invitee_is_gm && !inviter_is_gm && is_invited_by_admin === '0') {
                        $.confirm("你的邀请名单中有总办，如果不是非常必要，建议给问题打上“总办交流”的标签，会有HR相关同事整理并告知总办，以免过于频繁的邀请干扰总办。你确定依然要以你的个人名义邀请总办吗？", function() {
                            $("#action_form").submit();
                            $("#invite_answer .cancel").click();

                            submit_loading();
                        }, '', function() {
                            $('#confirm_box .modal_body').addClass('q_modal_body');
                        }, function() {
                            $('#confirm_box .modal_body').removeClass('q_modal_body');
                            $('#confirm_box').remove();
                        });
                        return false;
                    }
                    $("#action_form").submit();
                    submit_loading();
                }

            });
        } else {
            $('#invitee_hint').hide();
            $('#invitee_error_hint').text('每次只能邀请一名同事').show();
        }
    });
}

//成功邀请同事时modal提交按钮的loading态
function submit_loading() {
    $('#invite_submit').button({ loadingText: '提交中...' }).button('loading');
    $('#invite_answer .close, #invite_answer .km-btn-secondary').attr('onclick', 'return false;');
}

//邀请回答的弹出框使用的回调函数
function on_hide_invite_modal() {
    q_invite_users_select.clearValue();

    $('#q_invite').val('');
    $('#invite_answer .q_invite_note').val('');
    $('#invite_answer .close, #invite_answer .km-btn-secondary').onclick = this;
    $('#invite_submit').button('reset');
    $('#invitee_error_hint').text('').hide();
    $('#invite_answer').modal('hide');
    $("#q_invite_users_select").next('.input_hint_label').show();
    $('#invitee_hint').show();
    $(".question-show-container .operation-mask").hide();
    $("#operations").css("left", "-184px");
}

function on_show_which_invite(t) {
    window.currentInviteType=t;
    $("#invite_answer").attr("current_invite_type",t);
    if ( t == 0 ) {
        $("#q_owener_name").hide();
        $("#q_temp_blank").show();
        $("#q_invite_users_select").show();
        $('.js-element-title-primary').css({'margin-right':'8px'});
    } else if ( t == 1 ) {
        $("#q_owener_name").show();
        $("#q_invite_users_select").hide();
        $("#q_temp_blank").hide();
        $('.js-element-title-primary').css({'margin-right':'0px'});
    }
}

//check_mood_status();

function check_mood_status () {
    if (operation_data.is_km_admin == 1) {
        $("#mood-modal-btn").removeClass("hide");
        $.ajax({
            url: operation_data.km_path + 'q/ajax_get_mood',
            type: "GET",
            cache: false,
            data: {
                target_type: 'q',
                target_id: operation_data.target_id,
            },
            success: function(res) {
                if (res.code == 0) {
                    if (res.data[0]) {
                        $("#mood-modal-btn").text("已设置情绪");
                        $("input[type='radio'][name='mood'][value='" + res.data[0].id + "']").attr("checked","checked");
                    }
                }
            }
        });
    }
}


//设置情绪的弹出框使用的回调函数
function on_hide_mood_modal() {
    $('#mood-modal').modal('hide');
}

$(".js-mood-submit").click(function () {
    var form = $("#mood-form").serializeArray();
    if (!form[0]) {
        alert("请先选择情绪");
        return;
    }
    $.ajax({
        url: operation_data.km_path + 'q/ajax_set_mood',
        type: "POST",
        cache: false,
        data: {
            target_type: 'q',
            target_id: operation_data.target_id,
            mood_ids: form[0].value,
        },
        success: function(res) {
            on_hide_mood_modal();
            if (res.code == 0) {
                $.tips('设置成功');
                $("#mood-modal-btn").text('已设置情绪');
            } else {
                alert(res.message);
            }
        }
    });
});

function on_hide_add_question_content_modal() {
    $('#add_question_content').modal('hide');
}

// 问题点赞、取消点赞
$('#operations').delegate('.js_q_question_agree_btn', 'click', function() {
    var $self = $(this);
    var isAgreed = $self.hasClass('agreed');
    var url = operation_data.km_path + 'q/' + (isAgreed ? 'cancel_upvote_question' : 'upvote_question');

    if ($self.data('is_agreeing') == 1) return;

    $self.data('is_agreeing', 1);
    $.ajax({
        url: url,
        type: 'POST',
        cache: false,
        data: {
            question_id: operation_data.target_id,
        },
        success: function(res) {
            if (isAgreed) { // cancel upvote
                $('.js_q_question_agree_btn').removeClass('agreed');
            } else { // upvote
                $('.js_q_question_agree_btn').addClass('agreed');
            }

            var $count = $('.q_question_agree_area').find('.q_question_agree_count');
            var curCount = parseInt($count.text());
            var newCount = curCount + (isAgreed ? -1 : 1);
            newCount = newCount < 0 ? 0 : newCount;

            $count.text(newCount);
            $('.q_question_agree_area').find('.q_question_agree_status').text(isAgreed ? '赞实名' : '赞实名');

            $self.data('is_agreeing', 0);
        }
    });
});

//问题重定向
function q_redirect() {
    var redirect_q_id = $('#q-redirect-id').val();
    var err = $('#q-redirect .km_input_error_hint');

    if (redirect_q_id == '') {
        err.text('请填入问题ID');
        err.css('display', 'inline-block');
        return false;
    }

    $.post(operation_data.km_path + 'q/redirect_question', { target_id: redirect_q_id, question_id: operation_data.target_id }, function(data) {
        if (data.code == 'ok') {
            location.reload();
        } else {
            err.text(data.message);
            err.css('display', 'inline-block');
        }
    }, 'json');
}

//问题取消重定向
function q_unredirect() {
    $.confirm('确定取消重定向？', function() {
        $.post(operation_data.km_path + 'q/unredirect_question', { question_id: operation_data.target_id }, function(data) {
            if (data.code == 'ok') {
                location.reload();
            } else {
                $.alert('无法取消重定向！');
            }
        }, 'json');
    });
}

//关注，防止多次重复点击增加时延
$(".q_follow_btn").live("click", function() {
    var closetimer = null;
    var _this = this;

    closetimer = window.setTimeout(click_follow(_this), 300);
});

function click_follow(_this) {
    var question_id = $(_this).data('question_id');
    $.post(operation_data.km_path + 'q/follow', { question_id: question_id }, function(data) {
        if (data.code == 200) {
            $('#q_follow_cnt').text(parseInt($('#q_follow_cnt').text()) + 1);
            $('.q_follow_btn').addClass('hide-important');
            $('.q_unfollow_btn').removeClass('hide-important');
            $('.q_btn_focus').css('display', 'none');
            $('.k_btn_focus').css('display', 'none');
        }
    }, 'json');
}

// 取消关注，防止多次重复点击增加时延
$(".q_unfollow_btn").live("click", function() {
    var closetimer = null;
    _this = this;

    closetimer = window.setTimeout(click_unfollow(_this), 300);
});

function click_unfollow(_this) {
    var question_id = $(_this).data('question_id');
    $.post(operation_data.km_path + 'q/unfollow', { question_id: question_id }, function(data) {
        if (data.code == 200) {
            $('#q_follow_cnt').text(parseInt($('#q_follow_cnt').text()) - 1 >= 0 ? parseInt($('#q_follow_cnt').text()) - 1 : 0);
            $('.q_unfollow_btn').addClass('hide-important');
            $('.q_follow_btn').removeClass('hide-important');
            $('.q_btn_focus').css('display', 'block');
            $('.k_btn_focus').css('display', 'block');
        }
    }, 'json');
}

// 乐问详情关注与取消关注
$('#operations').delegate('.js_q_question_follow_btn', 'click', function() {
    var $self = $(this);
    var isFollowed = $self.hasClass('followed');
    var url = operation_data.km_path + 'q/' + (isFollowed ? 'unfollow' : 'follow');
    var question_id = $self.data('question_id');

    if ($self.data('is_following') == 1) return;

    $self.data('is_following', 1);

    $.post(url, { question_id: question_id }, function(data) {
        if (data.code == 200) {
            if (isFollowed) { // unfollow
                $('.js_q_question_follow_btn').removeClass('followed');
            } else { // follow
                $('.js_q_question_follow_btn').addClass('followed');
            }

            var $count = $('.q_follow_area').find('.q_question_follow_count');
            var curCount = parseInt($count.text());
            var newCount = curCount + (isFollowed ? -1 : 1);
            newCount = newCount < 0 ? 0 : newCount;

            $count.text(newCount);
            $('.q_follow_area').find('.q_question_follow_status').text(isFollowed ? '关注' : '已关注');

            $self.data('is_following', 0);
        }
    }, 'json');
});

//有回答的问题作者不能删除，管理员不受此限制，管理员删问题和作者删除0回答的问题
$('.q_item_operation').delegate('.question_delete', 'click', function() {
    $.confirm("你确定要删除吗？", function() {
        $("#action_form input[name='data[question_id]']").val(operation_data.target_id);
        $("#action_form input[name='data[action_type]']").val('delete_question');
        $("#action_form").submit();
    }, function() { //取消删除

    });
});

//有回答的问题作者不能删除，管理员不受此限制，作者删问题
$('.q_item_operation').delegate('.question_answer_delete', 'click', function() {
    if ($(".hot_question").length > 0 && $('.q_answer').length == 0) {
        $.alert('被设为热问的问题不能自己删除，请联系KM热线');
        return true;
    }
    $.alert('该问题已有回答，不能删除');
});

/**
 * 除收藏、顶、分享组件外实体操作
 * 会议
 */
function op_meeting_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#meeting_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit || data.series) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除会议
        if (data.remove) delete_entity(data);
    }
    //显示不可发送outlook提示
    toggle_tooltips();
}
//发送outlook提醒
function send_appointment() {
    var url = operation_data.km_path + 'group/' + operation_data.group_id + '/meetings/appointment_add/' + operation_data.target_id;
    show_operation_modal(url, '发送outlook提醒', '314px');
    return false;
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 任务
 */
function op_assignment_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#assignment_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除任务
        if (data.remove) delete_entity(data);
    }
}
//更新进展
$("#assignment_header").delegate(".update_progress_link", "click", function() {
    var progressTab = $("#Assignment_pregress_title");
    if (!progressTab.hasClass("current")) {
        progressTab.find("a").click();
    }
    $("#update_new_progress").find("textarea").focus();
});

/**
 * 除收藏、顶、分享组件外实体操作
 * 日历
 */
function op_calendar_event_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#calendar_event_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit || data.series) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除任务
        if (data.remove) delete_entity(data);
    }
    //显示不可发送outlook提示
    toggle_tooltips();
}
//发送日历事件提醒
function send_outlook() {
    var url = operation_data.km_path + 'calendars/cal_event_outlook_info/' + operation_data.target_id;
    show_operation_modal(url, '发送outlook提醒', '315px');
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 微博
 */
function op_single_twitter_success_callback(data) {
    data.target_id = operation_data.target_id;
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 答辑
 */
function op_qalbum_success_callback(data) {
    $('.column-info-attr').append(txTpl('bar_actions_top_tpl', data));
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除任务
        if (data.remove) delete_entity(data);
    }
    if ($('#qalbum-recommend')) {
        //管理员会出现推荐的操作
        $('.qalbum-recommend').click(function() {
            $.post(operation_data.km_path + 'q/album_recommend', {
                data: { id: operation_data.target_id, op_type: $(this).data('op-type') }
            }, function(data) {
                if (data.res == 'SUCCESS') {
                    window.location.reload();
                }
            }, 'json');
        });
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 微博话题
 */
function op_tag_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
    }
}
//关注
function follow_tag() {
    $.get(operation_data.km_path + 'twitters/follow_tag/' + operation_data.target_id, null, function(data) {
        if (data === 'ok') {
            $('#follow').parent('span').empty().hide().append(
                '<a id="unfollow" class="unfollow bg_sprites" href="javascript:void(0);" onclick="unfollow_tag();">取消关注</a>'
            ).fadeIn(1000);
        }
    });
}
//取消关注
function unfollow_tag() {
    $.get(operation_data.km_path + 'twitters/unfollow_tag/' + operation_data.target_id, null, function(data) {
        if (data === 'ok') {
            $('#unfollow').parent('span').empty().hide().append(
                '<a id="follow" class="follow bg_sprites" href="javascript:void(0);" onclick="follow_tag();">关注此话题</a>'
            ).fadeIn(1000);
        }
    });
}
//认领话题
function to_be_manage() {
    if (confirm("认领成为话题的管理员，可对话题进行编辑和运营")) {
        $.get(operation_data.km_path + 'twitters/tobe_manage/' + operation_data.target_id, null, function(data) {
            if (data === 'ok') {
                $('#tobe_manage').parent('span').empty().hide().fadeIn(1000);
                window.location.reload();
            }
        });
    }
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 直播间
 */
function op_liveroom_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
}

/**
 * 除收藏、顶、分享组件外实体操作
 * 讨论
 */
function op_topic_success_callback(data) {
    $('#bar_actions').append(txTpl('bar_actions_tpl', data));
    $('#topic_header .metadata').append(txTpl('bar_actions_top_tpl', data));

    //有管理权限
    if (data.edit) {
        //显示、隐藏编辑/管理操作栏
        toggle_manage_bar();
        //删除讨论
        delete_entity(data, {});
        //置顶
        if (data.top) {
            uptop(data.top.is_top, data.top.top_url);
        }
        //精华
        if (data.essential) {
            essential_func(data.essential.is_essential, data.essential.essential_url);
        }
    }
}

/**
 * 导出附件的下载名单
 * @author todaychen
 */
function export_download_record() {
    var url = operation_data.km_path + 'attachments/export_download_record/' + operation_data.target_id;
    location.href = url;
}
