define(function(require){
    require('common/txtpl');
    require('tag_chooser/tag_chooser');
    require('popbox');
    require('jquery.chainedSelects');
    require('bootstrap-button');
    require('jquery/jquery.tooltip');
    require('jquery/jquery.cookie');
    require('actions');
    // require('common/comment');
    require('common/feedback');
    var operation_data = $(".js-operations-data").data();
    $(function() {
        var url = operation_data.km_path + 'actions';

        $.ajax({
            url: url,
            dataType: 'json',
            data: {
                target_type: operation_data.target_type,
                target_id: operation_data.target_id,
                group_id: operation_data.group_id,
                url_prefix: operation_data.url_prefix
            },
            success: function(data) {
                //把来自dom的数据通过参数传递给回调
                data.operation_data = operation_data;
                //顶和收藏
                digg_favor_success_callback(data);
                //分享组件
                share_to_success_callback(data);
                //实体相关操作
                //对于乐问，比心卡需求需要使用go接口获取比心卡相关数据，暂时只能以这种不优雅的方式这么写
                if (operation_data.target_type === "Q") {
                    getQThanksData(operation_data.target_id, function (cbData) {
                        data['thanks'] = cbData;
                        op_entity_success_callback(data);
                    });
                } else {
                    op_entity_success_callback(data);
                }
            }
        });



    });

    function getQThanksData(question_id, cb) {
        $.ajax({
            url: km_path + 'gkm/api/q/' + question_id + '/thanks-top-sender',
            type: 'GET',
            success: function (data) {
                if (data.code === 0) {
                    typeof cb === 'function' && cb(data.data);
                } else {
                    typeof cb === 'function' && cb();
                    console.error('获取感谢数据失败');
                }
            },
            error: function () {
                typeof cb === 'function' && cb();
                console.error('获取感谢数据失败');
            }
        })
    }
});
