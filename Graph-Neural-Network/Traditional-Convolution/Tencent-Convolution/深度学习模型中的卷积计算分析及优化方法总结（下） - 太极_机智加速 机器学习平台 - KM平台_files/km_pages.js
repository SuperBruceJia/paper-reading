// JavaScript Document
/*
*	emperorliu

详细解释下每个参数的功用：

1.page_total 		(总页数，非必要，默认为0，在分页组件显示数字的情况下为必要)
					(注意：0、不传，意义为关闭通过“page_total”参数判断末页的逻辑，若page_total为1，会隐藏整个分页组件)
2.page_now			(当前页码，非必要，默认为第一页且自增)
3.add_number_area	(分页组件显示数字块，非必要，默认为开，且开时必须传入总页数)
4.add_jump_area		(分页组件显示跳转块，非必要，默认为开，且开时必须传入总页数以防止写入值过大)
5.url 				(必要！，ajax请求连接)
6.show_pages		(数字块显示的页数长度，非必要，且不建议更改以保持统一)
7.onsuccess 		(必要！，ajax请求成功回调)
8.anchor			(锚点，非必要，默认为空，若传入点击后页面会显示至锚点)
9.param_data			(ajax需要附加的开放属性，非必要，默认为空，若传入则会附加在ajax请求url)
10.first_page_ajax	(第一屏渲染开关接口，非必要，默认为开，第一次渲染即会发送请求执行onsuccess)
11.limit			(条数限制，非必要，默认为20条，优先级低于page_total,若关闭可置为0)
12.beforeSend		(ajax请求前函数接口，非必要，默认为空)
13.oncomplete		(ajax请求结束函数接口，非必要，默认为空)
14.async 			(异步/同步开关，非必要，默认为1：异步)

特别鸣谢jacky的开发建议和C姐姐的拓展，使得该插件最终成为了一个简单，易用，人见人爱的分页组件么么哒~

*/
(function($, _window){
	$.fn.km_pages = function(options){
		/*
		*	合并配置信息
		*/
		return this.each(function(){
			new km_pages(this, options);
		});
	};
	
	var km_pages = function(target, config){
		var def = {
			page_total		: 0,			
			page_now		: 1,
			add_number_area	: true,
			add_jump_area	: true,
			url 			: '',
			show_pages		: 9,
			beforeSend		: null,
			onsuccess 		: null,
			oncomplete		: null,
			anchor			: '',
			param_data		: '',
			first_page_ajax	: 1,
			limit			: 20,
			async			: 1
		};
		this.config = $.extend(def, config);
		this.$main = $(target);
		this.init();
		//初始化发送js请求
		if (this.config.first_page_ajax && this.config.async) {
			this.jump_page(this.config.page_now);
		}
	};
	
	km_pages.prototype = {
		init : function(){
			this.config.page_now = parseInt(this.config.page_now);
			if(this.config.async){
				this.create();
			}else{
				//同步初始化
				this.synchro_create();
			}
		},
		create : function(){
			var str = '';
			var _this = this;
			var area_length = (_this.config.show_pages - 3) / 2;
			var left_add = 0;
			var right_add = 0;
			var anchor = "javascript:void(0)";
			_this.has_click = 0;
			//左右部分补齐
			var tem = area_length - (_this.config.page_total - _this.config.page_now - 1);
			if(tem > 0){
				left_add = tem;
				tem = 0;
			}
			tem = _this.config.show_pages - 4 - _this.config.page_now;
			if(tem > 0){
				right_add = tem;
			}

			if(_this.config.page_now == 1){
				str += '<span class="nextprev jump_link" data-page-num="' + 1 + '">« 上一页</span>';
			}else{
				str += '<a class="prev jump_link" href="' + anchor + '" data-page-num="' + ((_this.config.page_now > 1) ? (_this.config.page_now - 1) : 1) + '">« 上一页</a>';
			}
			//有数字区块
			if(_this.config.add_number_area && _this.config.page_total){
				//总页数是否大于能显示的页数
				if(_this.config.page_total > _this.config.show_pages){
					//大于，需要...
					if(_this.config.page_now - area_length > 2){
						//左边
						str += '<a class="jump_link" data-page-num="'+ 1 +'">1</a><span class="skip">…</span>'
						for(var i = 1; i < (area_length + left_add); i++){
								str += '<a class="jump_link" href="' + anchor + '" data-page-num="' + (_this.config.page_now - area_length + i - left_add) + '">' + (_this.config.page_now - area_length + i - left_add) + '</a>';
						}
					}else{
						for(var i = 1; i < _this.config.page_now; i++){
								str += '<a class="jump_link" href="' + anchor + '" data-page-num="'+ i +'">'+ i +'</a>';
						}
					}
					//中间
					str += '<span class="current jump_link" href="' + anchor + '" data-page-num="'+ _this.config.page_now +'">' + _this.config.page_now + '</span>';

					if(_this.config.page_now + area_length < (_this.config.page_total - 1) ){
						//右边
						for(var i = 1; i < (area_length + right_add); i++){
								str += '<a class="jump_link" href="' + anchor + '" data-page-num="'+ (_this.config.page_now + i) +'">'+ (_this.config.page_now + i) +'</a>';
						}
						str += '<span class="skip">…</span><a class="jump_link" href="' + anchor + '" data-page-num="'+ _this.config.page_total +'">' + _this.config.page_total + '</a>'
					}else{
						for(var i = 1; (_this.config.page_now + i) <= _this.config.page_total; i++){
								str += '<a class="jump_link" href="' + anchor + '" data-page-num="'+ (_this.config.page_now + i) +'">'+ (_this.config.page_now + i) +'</a>';
						}
					}
				}else{
					//小于能显示的页数
					for(var i = 1; i <= _this.config.page_total; i ++){
						if(i == _this.config.page_now){
							str += '<span  class="current jump_link" href="' + anchor + '" data-page-num="'+ i +'">' + i + '</span>';
						}else{
							str += '<a class="jump_link" href="' + anchor + '" data-page-num="'+ i +'">'+ i +'</a>';
						}
					}
				}
			}

			if(_this.config.page_now == _this.config.page_total){
				str += '<span class="nextprev">下一页 »</span>';
			}else{
				str += '<a class="next jump_link" href="' + anchor + '" data-page-num="'+ (_this.config.page_now + 1) +'">下一页 »</a>';
			}

			if(_this.config.add_jump_area){
				str += '<span class="page_goto"><label>到</label><input type="text" class="page_goto_input"><label>页</label></span>';
				str += '<input type="button" href="' + anchor + '" value="确定" class="page_goto_btn">';
			}

			_this.$main.html(str);
			
			_this.bind_event();
			
		},

		bind_event : function(){
			var _this = this;
			var parent = $('.jump_link').parent();
			//绑定事件前清理以前事件
			parent.undelegate();

			parent.delegate('.jump_link','click',function(){
				var page_num = $(this).data("page-num");
				_this.jump_page(page_num);
				_this.has_click = 1;
			});
			$(".page_goto_btn").bind("click", function(){
				var page = $(this).prev().find("input").val();
				var page_total = _this.config.page_total;
				if(parseInt(page) > 0 && parseInt(page) <= page_total){
					_this.jump_page(parseInt(page));
				}
				_this.has_click = 1;
			});
			//如少于两页，则直接归于虚无
			if(_this.config.page_total && _this.config.page_total <= 1){
				parent.html('');
			}
		},
		
		click_scroll : function(anchor){
			var scroll_offset = $(anchor).offset();  
			$("body,html").animate({
				scrollTop:scroll_offset.top
			},100);
		},

		jump_page : function(page_num){
			var _this = this;
			var params = {page:page_num};
			var anchor = "#" + _this.config.anchor;

			if(_this.config.param_data){
				var param_data = _this.config.param_data;
				for(var key in param_data){
					params[key] = param_data[key];
				}
			}

			$.ajax({
				type:"GET",
				url: _this.config.url,
				data: params,		
				beforeSend: _this.config.beforeSend, 
				success: _this.config.onsuccess, 
				complete:  _this.config.oncomplete
			}).done(function(data){
				if(_this.has_click && anchor != "#" && anchor != "javascript:void(0)"){
					_this.click_scroll(anchor);
				}
                var ajax_data = typeof data == 'string' ? $.parseJSON(data) : data;

				if( _this.config.limit && _this.config.limit > ajax_data.length ){
					var parent = $('.jump_link.next').parent();
					$('.jump_link.next').remove();
					parent.append("<span class='nextprev'>下一页</span>");
				}
			});

			_this.config.page_now = page_num;
			_this.init();
		},

		synchro_create : function(){
			var str = '';
			var _this = this;
			var area_length = (_this.config.show_pages - 3) / 2;
			var left_add = 0;
			var right_add = 0;
			var url = _this.config.url;

			if(url.indexOf("?") == -1 ){
				url = url + "?page_num=";
			}else{
				url = url + "&page_num=";
			}

			//左右部分补齐
			var tem = area_length - (_this.config.page_total - _this.config.page_now - 1);
			if(tem > 0){
				left_add = tem;
				tem = 0;
			}
			tem = _this.config.show_pages - 4 - _this.config.page_now;
			if(tem > 0){
				right_add = tem;
			}

			if(_this.config.page_now == 1){
				str += '<span class="nextprev jump_link" data-page-num="' + 1 + '">« 上一页</span>';
			}else{
				str += '<a class="prev jump_link" href="' + url + ((_this.config.page_now > 1) ? (_this.config.page_now - 1) : 1) + '" data-page-num="' + ((_this.config.page_now > 1) ? (_this.config.page_now - 1) : 1) + '">« 上一页</a>';
			}
			//有数字区块
			if(_this.config.add_number_area && _this.config.page_total){
				//总页数是否大于能显示的页数
				if(_this.config.page_total > _this.config.show_pages){
					//大于，需要...
					if(_this.config.page_now - area_length > 2){
						//左边
						str += '<a class="jump_link" data-page-num="'+ 1 +'">1</a><span class="skip">…</span>'
						for(var i = 1; i < (area_length + left_add); i++){
								str += '<a class="jump_link" href="' + url + (_this.config.page_now - area_length + i - left_add) + '" data-page-num="' + (_this.config.page_now - area_length + i - left_add) + '">' + (_this.config.page_now - area_length + i - left_add) + '</a>';
						}
					}else{
						for(var i = 1; i < _this.config.page_now; i++){
								str += '<a class="jump_link" href="' + url + i + '" data-page-num="'+ i +'">'+ i +'</a>';
						}
					}
					//中间
					str += '<span class="current jump_link" href="' + url + _this.config.page_now + '" data-page-num="'+ _this.config.page_now +'">' + _this.config.page_now + '</span>';

					if(_this.config.page_now + area_length < (_this.config.page_total - 1) ){
						//右边
						for(var i = 1; i < (area_length + right_add); i++){
								str += '<a class="jump_link" href="' + url + (_this.config.page_now + i) + '" data-page-num="'+ (_this.config.page_now + i) +'">'+ (_this.config.page_now + i) +'</a>';
						}
						str += '<span class="skip">…</span><a class="jump_link" href="' + url + _this.config.page_total + '" data-page-num="'+ _this.config.page_total +'">' + _this.config.page_total + '</a>'
					}else{
						for(var i = 1; (_this.config.page_now + i) <= _this.config.page_total; i++){
								str += '<a class="jump_link" href="' + url + (_this.config.page_now + i) + '" data-page-num="'+ (_this.config.page_now + i) +'">'+ (_this.config.page_now + i) +'</a>';
						}
					}
				}else{
					//小于能显示的页数
					for(var i = 1; i <= _this.config.page_total; i ++){
						if(i == _this.config.page_now){
							str += '<span  class="current jump_link" href="' + url + i + '" data-page-num="'+ i +'">' + i + '</span>';
						}else{
							str += '<a class="jump_link" href="' + url + i + '" data-page-num="'+ i +'">'+ i +'</a>';
						}
					}
				}
			}

			if(_this.config.page_now == _this.config.page_total){
				str += '<span class="nextprev">下一页 »</span>';
			}else{
				str += '<a class="next jump_link" href="' + url + (_this.config.page_now + 1) + '" data-page-num="'+ (_this.config.page_now + 1) +'">下一页 »</a>';
			}

			if(_this.config.add_jump_area){
				str += '<span class="page_goto"><label>到</label><input type="text" class="page_goto_input"><label>页</label></span>';
				str += '<input type="button" href="' + url + '" value="确定" class="page_goto_btn">';
			}

			_this.$main.html(str);

			_this.synchro_bind_event();
		},

		synchro_bind_event : function(){
			var str = '';
			var _this = this;
			var url = _this.config.url;

			$(".page_goto_btn").bind("click", function(){
				var page = $(this).prev().find("input").val();
				var page_total = _this.config.page_total;

				if(url.indexOf("?") == -1 ){
					url = url + "?page_num=" + page ;
				}else{
					url = url + "&page_num=" + page ;
				}

				if(parseInt(page) > 0 && parseInt(page) <= page_total){
					window.location.href = url;
				}
				_this.has_click = 1;
			});			
		}

	};
})(jQuery, window)