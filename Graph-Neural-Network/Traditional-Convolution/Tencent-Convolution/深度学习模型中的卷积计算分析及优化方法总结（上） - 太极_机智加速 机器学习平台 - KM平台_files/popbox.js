$(function(){
    $.fn.realWidth = function(){
    }
    //弹出框控件管理
    $.popBox_queue = [];
    $.popBtn_queue = [];
    $.popBtn_activeClass = [];
    //扩展jquery插件popbox
    $.fn.fixToggle = function(o) {
        var o = $.extend({fnShow:null,fnClose:null},o);
        if(o.fnShow || o.fnClose) {
            this.is(":hidden")?(o.fnShow?o.fnShow():null):(o.fnClose?o.fnClose():null);
        }
        return this[ this.is(":hidden") ? "show" : "hide" ]();
    };
    $.fn.popBox = function(options){
        var defaults = {
            boxId:"popbox", //弹出框id
            alignRight:false,//是否右对齐
            alignTop:false,//是否出现在上面
            btnCss:"active_btn_css",//按钮css
            closeWithOtherBtn:true,//单击其他弹出框按钮时是否关闭该弹出框
            beforeShowBox: null,  //当Box显示之前执行的函数
            onShowBox: null,  //当Box显示的时候执行的函数
            onCloseBox: null,   //当Box关闭的时候执行的函数
            options: null,
            relativeId:null,
            useFixed:false,
			box_z_index: 999 	//Box的z-index属性
        };
        var options = $.extend(defaults, options);
        
        var setPosition = function($this, options) {
        	if ($this.length == 0) {
				return;
			}
            var btn_pos = $this.offset();
            var activeClass = "in_bottom";
            var btn_size = {width:$this.width()+parseInt($this.css("paddingLeft"))+parseInt($this.css("paddingRight")),height:$this.height()+parseInt($this.css("paddingTop"))+parseInt($this.css("paddingBottom"))};
            var _box = $("#"+options.boxId);
            $this.css({cursor:"pointer"});
            $this.addClass(options.btnCss);
            var relativeId=options.relativeId;
            var _box_size = {width:_box.width()+parseInt(_box.css("paddingLeft"))+parseInt(_box.css("paddingRight")),height:_box.height()+parseInt(_box.css("paddingTop"))+parseInt(_box.css("paddingBottom"))};
            var box_left = (options.alignRight?btn_pos.left + btn_size.width - _box_size.width : btn_pos.left);
            //console.debug(_box_size,btn_size);
            var box_top = (options.alignTop?btn_pos.top -_box_size.height - 1 : btn_pos.top+btn_size.height);
            if(relativeId&&$('#'+relativeId).length>0&&$('#'+relativeId).css('position')=='relative'){
                box_left = box_left - $('#'+relativeId).offset().left;
                box_top = box_top - $('#'+relativeId).offset().top;
            }
            if(options.alignTop) activeClass = "in_top";
            if(options.closeWithOtherBtn){
                $.popBox_queue.push(options.boxId);
                $.popBtn_queue.push($this.attr("id"));
                $.popBtn_activeClass.push(activeClass);
            }
            if(options.useFixed){
            	_box.css({display:"none",position:"fixed",left:box_left+"px",top:box_top+"px","z-index":options.box_z_index});
            }else{
            	_box.css({display:"none",position:"absolute",left:box_left+"px",top:box_top+"px","z-index":options.box_z_index});
            }
			return _box;
        }

        //初始化popbox
        var init = function($this,options){
			var activeClass = "in_bottom";
			var _box = $("#"+options.boxId);
			
            var fnshow = function(){
                if (typeof(options.onShowBox) == "function"){
                    options.onShowBox($this);
                }

                for(i = 0,len = $.popBox_queue.length;i < len;i++){
                    if(options.boxId != $.popBox_queue[i]){
                        $("#"+$.popBox_queue[i]).css("display","none")
                        $("#"+$.popBtn_queue[i]).removeClass($.popBtn_activeClass[i]);
                    }
                }
                $this.addClass(activeClass);
            }

            var fnclose = function(){
                if (typeof(options.onCloseBox) == "function"){
                    options.onCloseBox();
                }
                $this.removeClass(activeClass);
            }

            $this.click(function(event){
				if (typeof(options.beforeShowBox) == "function") {
					if (!options.beforeShowBox()) {
						return;
					}
				}
				setPosition($this, options);
                _box.fixToggle({fnShow:fnshow, fnClose:fnclose });
                event.stopPropagation();
            });
            //阻止弹出框没有click时冒泡到document而执行关闭弹出框事件
            _box.click(function(event){
                event.stopPropagation();
            });
            //空白处点击关闭弹出框
            $(document).click(function(event){
                $this.removeClass(activeClass);
                _box.css("display","none");

                if (typeof(options.onCloseBox) == "function"){
                    options.onCloseBox();
                }
            });

        };
        return init($(this),options);
    }
});

