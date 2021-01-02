/*
* 创建/编辑表单离开时二次确认控件
* @author mistcheng
*/
window.form_leave_need_check = true; // 是否进行表单变动检查，_config.except元素被点击时此值为false

/*
* add by brandwang 2015.9.1
* 有些元素可能需要忽略掉检查 则增加class='ignore_changed_check'则可以跳过检查
*/

$.fn.enable_changed_form_confirm = function (config) {
    var defaults = {
        tips: '表单未保存，如果你离开页面数据将丢失', // 提示文字
        on_init: function() {
            // 初始化函数，可以在这里做一些初始化工作，例如给input赋值
        },
        before_check: function() {
            // 在做表单变动检查前调用  
        },
        is_form_changed: function() {
           // 自定义检查函数
           return false;
        },
        check_rich_editor: false, // 是否检查富文本内容，km专有
        except: false // 例外情况，此种情况不进行表单变动检查
    };
    var _config = $.extend(defaults, config);

    var _f = this;
    var _is_rich_editor_content_changed = false; // 富文本内容有无变化
    var _check_id_count = 0; // 调用init方法后，对表单里的input和select进行标记，并记录总数，用这种方式进行表单元素增加或删除判断

    // _config.except元素被点击时_leave_need_check值为false，不进行检查
    if (_config.except) {
        _config.except.on("click", function(){
            window.form_leave_need_check = false;
            // 100ms后恢复_leave_need_check值为false，用以防止用户没有提交成功时的情况
            //setTimeout(function() {window.form_leave_need_check = true;}, 100);
        });
    }

    /**
    * 初始化函数
    */
    function init(f) {
        _config.on_init(); // 调用用户自定义的on_init函数
        // 记录input、select和textarea元素的原始值
        $('input', f).each(function() {
            var $this = $(this);
            
            switch($this.attr('type')) {
                case 'radio':
                case 'checkbox':
                    var _v = '';
                    if(this.checked == true) {
                        _v = 'on';
                    } else {
                        _v = 'off';
                    }
                    $this.attr('_value', _v);
                    break;
                case 'text':
                case 'hidden':
                case 'file':
                    $this.attr('_value', $this.val());
                    break;
                case 'button':
                case 'submit':
                default:
                    break;
            }

            $this.attr('_check_id', _check_id_count++);
        });

        $('select', f).each(function() {
            $(this).attr('_value', this.options[this.selectedIndex].value)
                .attr('_check_id', _check_id_count++);
        });

        $('textarea:visible', f).each(function() {
            $(this).attr('_value', $(this).val())
                .attr('_check_id', _check_id_count++);
        });
    }

    /**
    * 基础的表单变动检查方法，对于大部分情况是适用的，
    * 用户可以通过on_init、before_check和is_form_changed三个方法增加自己的检查方法
    */
    function basic_is_form_changed(f) {
        var changed = false;

        //  检查input是否有增加或删除
        var new_check_id_count = f.find('[_check_id]').length;
        if(_check_id_count != new_check_id_count) {
            changed = true;
            return changed;
        }
        // 检查input、select和textarea的内容有无变化
        $('input', f).each(function() {
            var $this = $(this);
            if (!$this.hasClass('ignore_changed_check')) {
                if(typeof($this.attr('_check_id')) == 'undefined') {
                    changed = true;
                }
                switch($this.attr('type')) {
                    case 'radio':
                    case 'checkbox':
                        var _v = '';
                        if(this.checked == true) {
                            _v = 'on';
                        } else {
                            _v = 'off';
                        }
                        if($this.attr('_value') != _v) {
                            changed = true;
                        }
                        
                        break;
                    case 'text':
                    case 'hidden':
                    case 'file':
                        var _v = $this.attr('_value');
                        if(typeof($this.attr('_value')) == 'undefined') {
                            _v = '';
                        }
                        if(_v != $this.val()) {
                            changed = true;
                        }
                        break;
                    case 'button':
                    case 'submit':
                    default:
                        break;
                }
                if(changed == true) {
                    return false; // 退出each遍历
                }
            };
        });

        $('select', f).each(function() {
            if (!$(this).hasClass('ignore_changed_check')) {
                var _v = $(this).attr('_value');
                if(typeof($(this).attr('_value')) == 'undefined') {
                    _v = '';
                }
                if(_v != this.options[this.selectedIndex].value) {
                    changed = true;
                }
                if(changed == true) {
                    return false; // 退出each遍历
                }
            };
        });

        $('textarea:visible', f).each(function() {
            var $this = $(this);
            
            if (!$this.hasClass('ignore_changed_check')) {
                var _v = $this.attr('_value');
                if(typeof($this.attr('_value')) == 'undefined') {
                    _v = '';
                }
                if(_v != $this.val()) {
                    changed = true;
                }
                if(changed == true) {
                    return false; // 退出each遍历
                }
            };
        });

        if (_config.check_rich_editor == true) {
            if(is_rich_editor_content_changed()) {
                changed = true;
                return changed;
            }
        }
        return changed;
    }

    // 检查KM富文本编辑器内容有无变化
    function is_rich_editor_content_changed() {
        return tinyMCE && tinyMCE.activeEditor && tinyMCE.activeEditor.isDirty();
    }

    // 执行init函数
    init(_f);

    // 监听onbeforeunload事件
    $(window).on('beforeunload', function (e) {
        if(window.form_leave_need_check) {
            // 表单检查前调用before_check
            _config.before_check();
            if(basic_is_form_changed(_f) || _config.is_form_changed()) {
                return _config.tips;
            }
        }else{
            reset_form_leave_need_check();
        }
    });
}
/*
*   用于重置检查表单提交
* */
function reset_form_leave_need_check(){
    window.form_leave_need_check = true;
}