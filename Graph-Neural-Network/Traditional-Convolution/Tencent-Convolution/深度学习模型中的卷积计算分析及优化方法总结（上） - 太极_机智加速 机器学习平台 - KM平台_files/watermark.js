var WaterMark = function(config) {
	this.init(config);
}
WaterMark.prototype = {
	init: function(config) {
		this.$watermarked = $(config.watermarked);
		this.img = config.img;
		this.active = config.active == undefined ? 0 : config.active;
		this.watermarkedClass   = config.watermarkClass == undefined ? "watermarked" : config.watermarkClass;
		this.watermarkClass   = config.watermarkClass == undefined ? "watermark" : config.watermarkClass;
        this.activeHideWatermark =  config.activeHideWatermark == undefined ? 1 : config.watermarkClass;
	},

	draw: function () {

	    //图像在某些极端情况下会类似二值化过程，有可能暴露隐水印。因此，先要处理
        this.$watermarked.find('img, pre, .jwplayer').each(function (){
            $(this).css({
                "position":"relative",
                 "z-index":"2"
            });
        	//$(this).replaceWith('<span><span class="watermark-zindex">' + $(this)[0].outerHTML + '</span></span>');
        });
		this.$watermarked
			// .html('<div class="relative" style="z-index: 1">' + this.$watermarked.html() + '</div>')
			.addClass(this.watermarkedClass)
			.prepend('<div class="' + this.watermarkClass + '"></div><div class="' + this.watermarkClass + 'Hide' + '"></div>');
		if(this.active){
			var _this = this;
			$.get(this.img, {}, function(result){
				if (result.code === 0) {
					$("." + _this.watermarkClass).css("background-image", "url(" + (result.url) + ")");
				};
			});
		}
        if(this.activeHideWatermark){
			var _this = this;
			$.get(km_path + 'pages/personalBgHide', {}, function(result){
				if (result.code === 0) {
					$("." + _this.watermarkClass + 'Hide').css("background-image", "url(" +  (result.url) + ")");
				};
			});
        }
    }
}
