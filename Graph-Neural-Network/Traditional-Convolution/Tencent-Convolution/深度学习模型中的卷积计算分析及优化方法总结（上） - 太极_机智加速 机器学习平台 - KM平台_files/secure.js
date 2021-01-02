define(function(require, exports){
	$("[data-confirm]").live('click', function(event){
		var self = $(this);
		var message = self.data('confirm');
		if(confirm(message)) {
			return true;
		} else {
			event.stopImmediatePropagation();
			return false;
		}
	});

	$('.anti-csrf').live('click', function(){
		check_csrf(this.href, this);
		return false;
	});

	// 设置全局ajax默认项，允许被重置
	$.ajaxSetup({
		beforeSend: function(jqXHR, settings) {
			jqXHR.setRequestHeader('X-Csrf-Token', $('#csrf_token').html());
		}
	});

	window.check_csrf = exports.check_csrf = function(url, node) {
		var form = document.createElement('form'); 
		form.style.display = 'none'; 
		node.parentNode.appendChild(form);
		form.method = 'POST'; 
		form.action = url;
		var input = document.createElement('input'); 
		input.setAttribute('type', 'hidden'); 
		input.setAttribute('name', 'csrf_token');
		input.setAttribute('value', $('#csrf_token').html()); 
		form.appendChild(input);
		form.submit();
		return false;
	};
})