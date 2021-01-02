/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// MODAL CLASS DEFINITION
	// ======================

	var Modal = function (element, options) {
		this.options   = options
		this.$element  = $(element)
		this.$backdrop =
		this.isShown   = null

		if (this.options.remote) {
			this.$element
				.find('.modal_body')
				.load(this.options.remote, $.proxy(function () {
					this.$element.trigger('loaded.bs.modal')
				}, this))
		}
		this.options.iframe && this.options.url && this.options.width && this.options.height 
		&& this.$element.find('.modal_body').html('<iframe src=' + this.options.url + ' width="' + this.options.width + '" height="' + this.options.height + '"  marginwidth=0 marginheight=0 frameBorder=0 />')
		&& this.$element.find('.modal_body').height(this.options.height)
		this.options.title && this.$element.find('.title').text(options.title)
	}

	Modal.DEFAULTS = {
		backdrop: true,
		keyboard: false,
		show: true
	}

	Modal.prototype.toggle = function (_relatedTarget) {
		return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
	}

	Modal.prototype.show = function (_relatedTarget) {
		var that = this
		var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

		this.$element.trigger(e)

		if (this.isShown || e.isDefaultPrevented()) return

		this.isShown = true

		this.escape()
		
		// hide scroll bar after modal is shown
		var hideScroll = true
		if (this.options && typeof this.options.hideScroll === 'boolean') {
			hideScroll = this.options.hideScroll
		}
		if (hideScroll) {
			$(document.body).css({'overflow-y':'hidden'})
			$('html').css({'padding-right':'17px', 'overflow-y':'hidden'})
		}
		
		// reposition the modal when modal is shown
		var $modal = this.$element,
			modal_width = $modal.width(),
			modal_height = $modal.height(),
			modal_ml = -1 * modal_width * 0.5,
			modal_mt = -1 * modal_height * 0.5;
		$modal.css({"margin-left": modal_ml, "margin-top": modal_mt});

		this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

		this.backdrop(function () {
			var transition = $.support.transition && that.$element.hasClass('fade')

			if (!that.$element.parent().length) {
				that.$element.appendTo(document.body) // don't move modals dom position
			}

			that.$element
				.show()
				.scrollTop(0)

			if (transition) {
				that.$element[0].offsetWidth // force reflow
			}

			that.$element
				.addClass('in')
				.attr('aria-hidden', false)

			// fixbug 49389443 【K吧自定义模块】无法上传图片、copy paste 链接失效、键盘shift无法选中文字
			// that.enforceFocus()

			var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

			transition ?
				that.$element.find('.modal-dialog') // wait for modal to slide in
					.one($.support.transition.end, function () {
						that.$element.trigger('focus').trigger(e)
					})
					.emulateTransitionEnd(300) :
				that.$element.trigger('focus').trigger(e)
		})
	}

	Modal.prototype.hide = function (e) {
		if (e) e.preventDefault()

		e = $.Event('hide.bs.modal')

		this.$element.trigger(e)

		if (!this.isShown || e.isDefaultPrevented()) return

		this.isShown = false

		this.escape()
		
		// show scroll bar after modal is hidden
		var hideScroll = true
		if (this.options && typeof this.options.hideScroll === 'boolean'){
			hideScroll = this.options.hideScroll
		}
		if (hideScroll){
			$(document.body).css({'overflow-y':'auto'})
			$('html').css({'padding-right': '0px', 'overflow-y': 'auto'})
		}

		$(document).off('focusin.bs.modal')

		this.$element
			.removeClass('in')
			.attr('aria-hidden', true)
			.off('click.dismiss.bs.modal')

		$.support.transition && this.$element.hasClass('fade') ?
			this.$element
				.one($.support.transition.end, $.proxy(this.hideModal, this))
				.emulateTransitionEnd(300) :
			this.hideModal()
	}

	Modal.prototype.enforceFocus = function () {
		$(document)
			.off('focusin.bs.modal') // guard against infinite focus loop
			.on('focusin.bs.modal', $.proxy(function (e) {
				if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
					this.$element.trigger('focus')
				}
			}, this))
	}

	Modal.prototype.escape = function () {
		if (this.isShown && this.options.keyboard) {
			this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
				e.which == 27 && this.hide()
			}, this))
		} else if (!this.isShown) {
			this.$element.off('keyup.dismiss.bs.modal')
		}
	}

	Modal.prototype.hideModal = function () {
		var that = this
		this.$element.hide()
		this.backdrop(function () {
			that.removeBackdrop()
			that.$element.trigger('hidden.bs.modal')
		})
	}

	Modal.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove()
		this.$backdrop = null
	}

	Modal.prototype.backdrop = function (callback) {
		var animate = this.$element.hasClass('fade') ? 'fade' : ''

		if (this.isShown && this.options.backdrop) {
			var doAnimate = $.support.transition && animate

			this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
			if (!$('.modal-backdrop').length){
				this.$backdrop.appendTo(document.body)
			}

			this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
				if (e.target !== e.currentTarget) return
				this.options.backdrop == 'static'
					? this.$element[0].focus.call(this.$element[0])
					: this.hide.call(this)
			}, this))

			if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

			this.$backdrop.addClass('in')

			if (!callback) return

			doAnimate ?
				this.$backdrop
					.one($.support.transition.end, callback)
					.emulateTransitionEnd(150) :
				callback()

		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass('in')

			$.support.transition && this.$element.hasClass('fade') ?
				this.$backdrop
					.one($.support.transition.end, callback)
					.emulateTransitionEnd(150) :
				callback()

		} else if (callback) {
			callback()
		}
	}


	// MODAL PLUGIN DEFINITION
	// =======================

	var old = $.fn.modal

	$.fn.modal = function (option, _relatedTarget) {
		return this.each(function () {
			var $this   = $(this)
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
			var data    = options.iframe && options.url ? '' : $this.data('bs.modal')
			
			if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
			if (typeof option == 'string') data[option](_relatedTarget)
			else if (options.show) data.show(_relatedTarget)
			
			// repositon multi modal
			var url = $this.data('url')
			if ((!data && !url) || url !== options.url) {
				var $modal = $this,
				modal_width = $modal.width(),
				modal_height = $modal.height(),
				modal_ml = -1 * modal_width * 0.5,
				modal_mt = -1 * modal_height * 0.5;
				$modal.css({"margin-left": modal_ml, "margin-top": modal_mt});
			}
		})
	}

	$.fn.modal.Constructor = Modal


	// MODAL NO CONFLICT
	// =================

	$.fn.modal.noConflict = function () {
		$.fn.modal = old
		return this
	}


	// MODAL DATA-API
	// ==============

	$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
		var $this   = $(this)
		var href    = $this.attr('href')
		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
		var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

		if ($this.is('a')) e.preventDefault()

		$target
			.modal(option, this)
			.one('hide', function () {
				$this.is(':visible') && $this.trigger('focus')
			})
	})

	$(document)
		.on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
		.on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);
