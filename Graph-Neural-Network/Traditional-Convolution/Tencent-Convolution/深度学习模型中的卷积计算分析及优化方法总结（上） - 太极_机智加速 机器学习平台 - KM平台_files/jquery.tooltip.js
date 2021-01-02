/**
 * @license 
 * jQuery Tools 1.2.5 Tooltip - UI essentials
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/
 * 这个家伙已经失去联系了，更新是指望不上了。
 * Since: November 2008
 * Date:    Wed Sep 22 06:02:10 2010 +0000 
 */
(function($) { 	
	// static constructs
	$.tools = $.tools || {version: '1.2.5'};
	
	$.tools.tooltip = {
		
		conf: { 
			
			// default effect variables
			effect: 'toggle',			
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 100,
			opacity: 1,			
			tip: 0,
			width: 160,

			/*
			* position 可以是 'top','right','bottom','left'
			*/
			position: 'bottom', 
			offset: [0, 0],
			arrowOffset: 0,
			relative: false,
			cancelDefault: true,
			
			// type to event mapping 
			events: {
				def: "mouseenter,mouseleave",
				input: "focus,blur",
				widget: "focus mouseenter,blur mouseleave",
				tooltip: "mouseenter,mouseleave"
			},
			
			// 1.2
			layout: '<div><img class="absolute" /><div /></div>',
			tipClass: '',
			//提示的类型可以是 'white', 'yellow'
			tipType: 'yellow', 
			arrows: {
				white: {
					'top'	: 'img/tooltip/up.png',
					'right'	: 'img/tooltip/right.png', 
					'bottom': 'img/tooltip/down.png',
					'left'	: 'img/tooltip/left.png'
				},
				yellow: {
					'top'	: 'img/tooltip/up-yellow.png',
					'right'	: 'img/tooltip/right-yellow.png', 
					'bottom': 'img/tooltip/down-yellow.png',
					'left'	: 'img/tooltip/left-yellow.png'
				}
			}
		},
		
		addEffect: function(name, loadFn, hideFn) {
			effects[name] = [loadFn, hideFn];	
		},

		detctTargets: $("[data-tooltip-title]")
	};
	
	
	var effects = { 
		toggle: [ 
			function(done) { 
				var conf = this.getConf(), tip = this.getTip(), o = conf.opacity;
				if (o < 1) { tip.css({opacity: o}); }
				tip.show();
				done.call();
			},
			
			function(done) { 
				this.getTip().hide();
				done.call();
			} 
		],
		
		fade: [
			function(done) { 
				var conf = this.getConf();
				this.getTip().fadeTo(conf.fadeInSpeed, conf.opacity, done); 
			},  
			function(done) { 
				this.getTip().fadeOut(this.getConf().fadeOutSpeed, done); 
			} 
		]		
	};   

		
	/* calculate tip position relative to the trigger */  	
	function getPosition(trigger, tip, conf) {	

		// get origin top/left position 
		var top = conf.relative ? trigger.position().top : trigger.offset().top, 
			 left = conf.relative ? trigger.position().left : trigger.offset().left,
			 pos = conf.position;
		var tip_height = tip.outerHeight(), tip_width = tip.outerWidth(),
			trigger_height = trigger.outerHeight(), trigger_width = trigger.outerWidth();

		if(pos.indexOf(" ") > 0){
			pos = conf.position.split(" ")[0];
		}
		top  -= tip_height;
		left += trigger_width;
		
		// iPad position fix
		if (/iPad/i.test(navigator.userAgent)) {
			top -= $(window).scrollTop();
		}
		
		// adjust X Y	
		var height = tip_height + trigger_height;
		var width = tip_width + trigger_width;
		var arrow_width = 10;
		switch(pos){
			case 'top' : {
				top -= trigger_height; 
				if(conf.subPosition == 'left'){
					left -= trigger_width;

				}else if(conf.subPosition == 'right'){
					left = left - tip_width;
				}else{
					left -= width / 2;
				}
			}
			break;
			case 'right' : {
				top += tip_height / 2;
				left += arrow_width;
			}
			break;
			case 'bottom' : {
				top += height; 
				if(conf.subPosition == 'left'){
					left -= trigger_width;

				}else if(conf.subPosition == 'right'){
					left = left - tip_width;

				}else{
					left -= width / 2;
				}
			}
			break;
			case 'left' : {
				top += tip_height / 2;
				left -= width + arrow_width;
			}
			break;
			default: {
				top += tip_height / 2;
				left -= width / 2;
			}
		} 
		
		return {top: top + conf.offset[1], left: left + conf.offset[0]};
	}		

	
	
	function Tooltip(trigger, conf) {

		var self = this, 
			conf = $.extend({}, conf),
			fire = trigger.add(self),
			tip,
			timer = 0,
			pretimer = 0, 
			title = trigger.attr("title") || '',
			tipAttr = trigger.data("tooltip-target") || conf.tipTarget,
			effect = effects[conf.effect],
			shown,
			 
			// get show/hide configuration
			isInput = trigger.is(":input"), 
			isWidget = isInput && trigger.is(":checkbox, :radio, select, :button, :submit"),			
			type = trigger.attr("type"),
			evt = conf.events[type] || conf.events[isInput ? (isWidget ? 'widget' : 'input') : 'def']; 
		
		
		// check that configuration is sane
		if (!effect) { throw "Nonexistent effect \"" + conf.effect + "\""; }					
		
		evt = evt.split(/,\s*/); 
		if (evt.length != 2) { throw "Tooltip: bad events configuration for " + type; } 
		
		
		// trigger --> show  
		trigger.bind(evt[0], function(e) {

			clearTimeout(timer);
			if (conf.predelay) {
				pretimer = setTimeout(function() { self.show(e); }, conf.predelay);	
				
			} else {
				self.show(e);	
			}
			
		// trigger --> hide
		}).bind(evt[1], function(e)  {
			clearTimeout(pretimer);
			if (conf.delay)  {
				timer = setTimeout(function() { self.hide(e); }, conf.delay);	
				
			} else {
				self.hide(e);		
			}
			
		}); 
		
		
		// remove default title
		if (title && conf.cancelDefault) { 
			trigger.removeAttr("title");
			trigger.data("title", title);			
		}		
		
		$.extend(self, {
				
			show: function(e) {  

				// tip not initialized yet
				if (!tip) {
					
					// data-tooltip-target 
					if (tipAttr) {
						tip = $(tipAttr);

					// single tip element for all
					} else if (conf.tip) { 
						tip = $(conf.tip).eq(0);
						
					// autogenerated tooltip
					} else { 
						if(conf.tipType == 'white') {
							tip = $(conf.layout).addClass('tooltip').appendTo(document.body).hide();
						}else if(conf.tipType == 'yellow') {
							tip = $(conf.layout).addClass('km_tip').appendTo(document.body).hide();
						}
						tip.find("div").append(title);
						if(conf.tipClass){
							tip.addClass(conf.tipClass);
						}
						if(conf.width){tip.width(conf.width)};
						if(conf.position.indexOf(" ") > 0){
							var arr_position = conf.position.split(" ");
							conf.position = arr_position[0];
							conf.subPosition = arr_position[1];
						}
						
						var imgURL = km_path + conf.arrows[conf.tipType][conf.position],
							$arrow = tip.children("img");
						$arrow.attr("src", imgURL);
						var top = 0, left = 0, arrowcss = {};
						var tip_arrow_width = 9, tip_arrow_height = 5;
						//set arrow position
						switch(conf.position){
							case 'top' : {
								arrowcss.top = tip.outerHeight() - 2;  // 2 is the border of top and bottom

								if(conf.subPosition == 'left'){
									arrowcss.left = 15;

								}else if(conf.subPosition == 'right'){
									arrowcss.left = conf.width - 15;

								}else{
									arrowcss.left = conf.width ? conf.width / 2 + tip_arrow_height : tip.width() / 2 + tip_arrow_height;
								
								}

								if(conf.arrowOffset){
									arrowcss.left += conf.arrowOffset;
								}
							}
							break;
							case 'right' : {
								arrowcss.top = (tip.outerHeight() -  tip_arrow_width)/ 2; // 19 is arrow height
								arrowcss.left = - tip_arrow_height; 
							}
							break;
							case 'bottom' : {
								arrowcss.top = - tip_arrow_height;
								if(conf.subPosition == 'left'){
									arrowcss.left = 15;

								}else if(conf.subPosition == 'right'){
									arrowcss.left = conf.width - 15;

								}else{
									arrowcss.left = conf.width ? conf.width / 2 + tip_arrow_height : tip.width() / 2 + tip_arrow_height;
								
								}
								
								if(conf.arrowOffset){
									arrowcss.left += conf.arrowOffset;
								}
							}
							break;
							case 'left' : {
								arrowcss.top = (tip.outerHeight() -  tip_arrow_width)/ 2;
								arrowcss.left = $arrow.outerWidth() + tip.outerWidth() - 2; // 2 is the border of top and bottom
							}
							break;
							default: {
								arrowcss.top = - tip_arrow_height;
								arrowcss.left = conf.width ? conf.width / 2 + tip_arrow_width : tip.width() / 2 + tip_arrow_width;
							}
						}
						$arrow.css(arrowcss);			
						
					}
					
					if (!tip.length) { throw "Cannot find tooltip for " + trigger;	}
				} 
			 	
			 	if (self.isShown()) { return self; }  
				
			 	// stop previous animation
			 	tip.stop(true, true); 			 	
			 	
				// get position
				var pos = getPosition(trigger, tip, conf);			
		
				// restore title for single tooltip element
				if (conf.tip) {
					tip.html(trigger.data("title"));
				}

				// onBeforeShow
				e = e || $.Event();
				e.type = "onBeforeShow";
				fire.trigger(e, [pos]);				
				if (e.isDefaultPrevented()) { return self; }
		
				
				// onBeforeShow may have altered the configuration
				pos = getPosition(trigger, tip, conf);
				
				// set position
				tip.css({position:'absolute', top: pos.top + 10, left: pos.left, "z-index": 10010});
				shown = true;
				
				// invoke effect 
				effect[0].call(self, function() {
					e.type = "onShow";
					shown = 'full';
					fire.trigger(e);		 
				});					

	 	
				// tooltip events       
				var event = conf.events.tooltip.split(/,\s*/);

				if (!tip.data("__set")) {
					
					tip.bind(event[0], function() { 
						clearTimeout(timer);
						clearTimeout(pretimer);
					});
					
					if (event[1] && !trigger.is("input:not(:checkbox, :radio), textarea")) { 					
						tip.bind(event[1], function(e) {
	
							// being moved to the trigger element
							if (e.relatedTarget != trigger[0]) {
								trigger.trigger(evt[1].split(" ")[0]);
							}
						}); 
					} 
					
					tip.data("__set", true);
				}
				
				return self;
			},
			
			hide: function(e) {
				if (!tip || !self.isShown()) { return self; }
				tip.css({"z-index": 0});
				// onBeforeHide
				e = e || $.Event();
				e.type = "onBeforeHide";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return; }
	
				shown = false;
				
				effects[conf.effect][1].call(self, function() {
					e.type = "onHide";
					fire.trigger(e);		 
				});
				
				return self;
			},
			
			isShown: function(fully) {
				return fully ? shown == 'full' : shown;	
			},
				
			getConf: function() {
				return conf;	
			},
			
			setContent: function(content) {
				tip.find("div").html(content);
			},
			
			getTip: function() {
				return tip;	
			},
			
			getTrigger: function() {
				return trigger;	
			}		

		});		

		// callbacks	
		$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).bind(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;
			};
		});
		
	}
		
	
	// jQuery plugin implementation
	$.fn.tooltip = function(conf) {
		var api = this.data("tooltip");
		if(api){return api;}
		
		var conf = $.extend(true, {}, $.tools.tooltip.conf, conf);
		
		// install tooltip for each entry in jQuery object
		this.each(function(e) {
			
			if(conf["auto-detct"]) {
				var tooltipData = $(this).data();
				if(tooltipData["tooltipPosition"]){
					conf.position = tooltipData["tooltipPosition"];
				}
				if(tooltipData["tooltipOffset"]){
					conf.offset = tooltipData["tooltipOffset"];
				}
				if(tooltipData["tooltipType"]){
					conf.tipType = tooltipData["tooltipType"];
				}
				if(tooltipData["arrowOffset"]){
					conf.arrowOffset = tooltipData["arrowOffset"];
				}
			}
			var api = new Tooltip($(this), conf);
			$(this).data("tooltip", api); 
		});
		
		return conf.api ? api: this;		 
	};
	
	if($.tools.tooltip.detctTargets.length > 0){
		$.tools.tooltip.detctTargets.tooltip({'auto-detct': true})
	}
		
}) (jQuery);

		

