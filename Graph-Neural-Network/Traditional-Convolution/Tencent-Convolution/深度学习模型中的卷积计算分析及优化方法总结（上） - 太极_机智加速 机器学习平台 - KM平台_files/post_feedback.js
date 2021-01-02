;(function(){

    var operation_data = $(".js-operations-data").data();

    $("#feed_btn").live("click", () => {
        triggerFeedback(true);
    });

    var targetDOM = "#article_content";
    var imgURL = "";
    var r = $(targetDOM).offset(); // 渲染的dom节点距离视口左上方的距离
    var ec = null;

    var feedRightBtn = $(`<div class="select-feedback-tip" hotrep="hp.doc-center.feedback.selection.btn"
                        id="feed_right_btn"><span class="feed_link"></span><span>内容反馈</span></div>`);
    $("body").append(feedRightBtn);
    init_selectWordRightBtn(feedRightBtn[0], $(targetDOM)[0]);

    function triggerFeedback(fromBottom) {
        var innerText = [
            "<div class='feed-type feed-item article-feedtype'>",
                '<label class="title" style="line-height: 30px">反馈类型</label>',
                '<div class="type-radio" style="line-height: 30px">',
                    '<label for="err" class="radio-item"><input type="checkbox" value="内容有误" name="data[type]" id="err" /><span class="radio-text vertical-align-middle">内容有误</span></label>',
                    '<label for="update" class="radio-item"><input type="checkbox" value="内容未更新" name="data[type]" id="update" /><span class="radio-text vertical-align-middle">内容未更新</span></label>',
                    '<label for="advice" class="radio-item"><input type="checkbox" value="内容建议" name="data[type]" id="advice" /><span class="radio-text vertical-align-middle">内容建议</span></label>',
                    '<label for="others" class="radio-item"><input type="checkbox" value="其他" name="data[type]" id="others" /><span class="radio-text vertical-align-middle">其他</span></label>',
                "</div>",
            "</div>",
            "<div class='feed-text feed-item'>",
            '<label class="title">具体描述</label><textarea  maxlength="500" id="feedback-textarea" class="feedback-textarea" name="feedback-desc"></textarea>',
            "</div>"
        ];
        if (!fromBottom) {
            innerText = innerText.concat([
                "<div class='screen-capture feed-item'>",
                    '<label class="title">辅助标记</label>',
                    '<label for="screen" class="screen-check"><input type="checkbox" checked name="screen-check" id="screen" /><span class="radio-text vertical-align-middle">附上屏幕截图快速定位问题</span></label>',
                    "<div class='small-img-wrapper " + (fromBottom ? "hide" : "") + "'><div class='feedimg'></div>",
                    "<div class='screenshot-mask' hotrep='document.feedback.screenshot.edit'><div class='screenshot-tip edit'><i class='shot-edit-icon'></i><p class='shot-edit-text'>加载中...</p></div></div>",
                    "</div>",
                "</div>"
            ]);
        }
        var _this = this;
        window.feed_dialog = $.confirmNew(innerText.join(""), function() {
            var content_type =[];//定义一个数组
            $('input[name="data[type]"]:checked').each(function(){
                content_type.push($(this).val());
            });
            var desc = $('#feedback-textarea').val();
            var screen = !!$('#screen').attr('checked');
            if (content_type.length === 0) {
                $('.modal_footer .tips').text('*请选择反馈类型');
                $('.modal_footer .tips').show();
                return;
            } else if (desc.trim() === '') {
                $('.modal_footer .tips').text('*请输入具体描述');
                $('.modal_footer .tips').show();
                return;
            }
            if (screen && imgURL === '') {
                uploadCanvasImg(window.canvasData, function () {
                    tofeed(content_type, desc);
                    window.canvasData = null;
                    window.feed_dialog.modal('hide');
                });
                return;
            }
            tofeed(content_type, desc);
            window.canvasData = null;
            window.feed_dialog.modal('hide');
        }, function () {
            ec = null;
            window.canvasData = null;
        },{
            headerText: "文章内容反馈",
            containerClassName: "feedback-dialog",
            sureText: '提交'
        });

        $('#screen').live("click", function (e) {
            handleMarkClick(e.target);
        });
        setTimeout(function () {
            // var dom = $(targetDOM)[0];
            generateCanvasData(function (data) {
                var img = document.createElement('img');
                // img.crossOrigin = "Anonymous";
                img.id = "preimg";
                img.src = data.toDataURL("image/png");
                img.style.width = "100%";
                img.height = data.height / (data.width / 519);
                $('.feedimg')[0].append(img);
                $('.shot-edit-text').text('点击标记内容');
            }, fromBottom);
        }, 0);
        // if ($('.mask-wrapper').length > 0) {
        //     $('.container')[0].innerHTML = '';
        // } else {
        //     $("body").append(mask);
        // }
        $(".small-img-wrapper").bind("click", function () {
            if (!window.canvasData) {
                return;
            }
            ec = new FeedbackCanvas(window.canvasData, {
                toolEvents: {
                    revertall_cb: function () {
                        $('.shot-edit-text').text('点击标记内容');
                        imgURL = null;
                    },
                    sure_cb: function () {
                        window.canvasData.getContext("2d").drawImage(ec.canvas, 0, 0);
                        setTimeout(function () {
                            uploadCanvasImg(window.canvasData);
                        }, 500);

                        $('.shot-edit-text').text('标记成功，可点击重新标记');
                    }
                }
            });
            ec.feedContainer.show();
        });
    }

    function handleMarkClick(checkbox) {
        if (checkbox.checked) {
            if (!window.canvasData) {
                $('.shot-edit-text').text('加载中...');
                $('.small-img-wrapper').show();
                generateCanvasData(function (data) {
                    $('#preimg')[0].src = data.toDataURL("image/png");
                    $('#preimg')[0].height = data.height / (data.width / 519);
                    $('.shot-edit-text').text('点击标记内容');
                });
            } else {
                $('.shot-edit-text').text('点击标记内容');
                $('.small-img-wrapper').show();
            }
        } else {
            $('.small-img-wrapper').hide();
        }
    }

    function tofeed(content_type, desc) {
        $.ajax({
            url: km_path + 'pages/ajax_new_feedback',
            type: 'POST',
            cache: false,
            data: {
                target_type: "Post",
                target_id: operation_data.target_id,
                content_type: content_type.join('|'),
                desc: desc,
                url: imgURL,
                feedback_type: "content",
                reserve_options: JSON.stringify({
                    origin_url: window.location.href,
                })
            },
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            success: function (data) {
                if(data.code === 0) {
                    $.tips('提交反馈成功');
                    window.feed_dialog = null;
                    ec = null;
                    imgURL = null;
                }
            },
            error: function () {
                $.tips('提交反馈失败');
            }
        });
    }

    function generateCanvasData(callback, fromBottom) {
        var dom = $(targetDOM)[0];
        var realHeight = fromBottom ? dom.offsetHeight : window.innerHeight;
        setTimeout(function () {
            var pageY = window.pageYOffset;
            // var y =  pageY > r.top ? pageY - r.top : 0;
            var y =  fromBottom ? r.top : (pageY > r.top ? pageY : r.top);
            html2canvas(dom, {
                scale: 1,
                height: realHeight,
                y: y,
                // allowTaint: true,
                // useCORS: true,
                ignoreElements: function (ele) {
                    if (ele.className.indexOf && ele.className.indexOf('watermark')) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }).then(function(source) {
                var canvas = document.createElement('canvas');
                canvas.width = source.width + 30;
                canvas.height = source.height + 30;
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(source, 15, 15);
                window.canvasData = canvas;
                callback && callback(canvas);
            });
        }, 0)
        // }
    }
    function convertBase64UrlToBlob(urlData) {
        let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = window.atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    }
    function uploadCanvasImg(data, cb) {
        var formData = new FormData();
        formData.append('file', convertBase64UrlToBlob(data.toDataURL("image/jpeg")), "file_" + Date.parse(new Date()) + ".jpg");
        $.ajax({
            url: km_path + 'operations/richeditor_upload_image',
            type: 'POST',
            cache: false,
            data: formData,
            contentType: false,
            dataType: 'json',
            processData: false,
            success: function (data) {
                if (data && data.result === "success") {
                    imgURL = data.image_path;
                    if (cb) {
                        cb();
                    }
                } else {
                    $.tips('上传图片失败');
                }
            },
            error: function () {
                $.tips('上传图片失败');
            }
        });
    }

    function getFeedEntryPosition(relatveDOM) {
        var relativeTop = $(relatveDOM).parent().offset().top;
        var userSelection;
        if (window.getSelection) { //现代浏览器
            userSelection = window.getSelection();
        } else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
            userSelection = document.selection.createRange();
        }
        var range = userSelection.getRangeAt(0);
        var center = (range.getBoundingClientRect().top + range.getBoundingClientRect().bottom) / 2 - relativeTop;
        return center;
    }
    function init_selectWordRightBtn(eleBtn, eleContainer) {
        eleContainer = eleContainer || document;
        var funGetSelectTxt = function() {
            var txt = "";
            if(document.selection) {
                txt = document.selection.createRange().text;    // IE
            } else {
                txt = document.getSelection();
            }
            return txt.toString();
        };
        eleContainer.onmouseup = function(e) {
            var txt = funGetSelectTxt();
            var top = getFeedEntryPosition(eleBtn) - 15 + window.pageYOffset;
            var postionTargetDOM = $('.article_middle_main');
            var left = postionTargetDOM[0].offsetWidth + 30 + postionTargetDOM.offset().left;
            if (txt) {
                eleBtn.style.display = "block";
                eleBtn.style.left = left + "px";
                eleBtn.style.top = top + "px";
            } else {
                eleBtn.style.display = "none";
            }
        };
        eleBtn.onclick = function() {
            eleBtn.style.display = "none";
            window.canvasData = null;
            triggerFeedback(false);
        };
    }

})();
