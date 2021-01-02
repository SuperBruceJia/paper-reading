/*
 * InputHint 2.0 - 输入框的提示引导语
 * 
 */
 
(function($) {
	if (typeof $.fn.input_hint_label == 'undefined'){
	
		$.fn.input_hint_label=function(options){
			if (options == 'hide') {
				$(this).next('.input_hint_label').hide();
				return;
			};
			var defaults = {
				hintWords : '请在这里输入文字...',		//提示引导语
				defaultCss : {color:'#999'},		//默认样式，没有输入时使用
				focusCss :{color:'#333'},
				box_z_index: 998,					//Box的z-index属性
				offset: {left: 2, top:2}, 			//label出现位置的偏移值，单位为px
				implementation: 'label'				//实现方式，label 和 text
			};
			var options = $.extend(defaults, options);
		 
			var init = function($this, options){
				if (options.implementation == 'text') {
					init_text($this, options);
				} else {
					init_label($this, options);
				}
			};
			
			var init_label = function($this, options) {
				var new_label = null;
				var parent_box = $this.position();
				var box_width = options.width ? options.width : ($this.width()-options.offset.left);
				var box_left = parent_box.left+parseInt($this.css("paddingLeft"))+options.offset.left;
				var box_top = parent_box.top+parseInt($this.css("paddingTop"))+options.offset.top;
				
				var box_style = { position:"absolute", left:box_left+"px", top:box_top+"px",  "z-index":options.box_z_index, "text-align":"left", cursor:"text", "line-height":'18px', height:'18px', width:box_width+"px"};
		
					
				new_label = $("<label class='input_hint_label '>"+ options.hintWords +"</label>").hide().insertAfter($this)
							.css($.extend(box_style, options.defaultCss))
							.click(function(e){$this.focus();e.stopPropagation();});
				
				$this.ready(function() {
					if (document.activeElement != $this[0] && $.trim($this.val()) == "") {
						new_label.show();
					}
				}).focus(function() {
					new_label.hide();
				}).blur(function() {
					if ($.trim($this.val()) == "") {
						new_label.show();
					}
				});
			};
			
			var init_text = function($this,options){
				var hintWords = options.hintWords;
				$this.ready(function() {
					if (document.activeElement != $this[0] && ($.trim($this.val()) == "" || $this.val() == hintWords)) {
						$this.css(options.defaultCss).val(hintWords);
					} else { 
						$this.css(options.focusCss);
					}	
				}).change(function() {
					$this.removeClass("error-encountered");
				}).focus(function() {
					if ($this.val() == hintWords) {
						$this.val("").css(options.focusCss);
					}
					
				}).blur(function() {
					if ($.trim($this.val()) == "") {
						$this.val(hintWords).css(options.defaultCss);
					}
				});
			};
		
			return this.each(function(){
				init($(this),options);
			});
		};
	}
 
})(jQuery);
