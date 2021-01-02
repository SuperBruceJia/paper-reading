/*
 * KM User Chooser 
 * Owner : KM Team
 * Creater Jacky
 * Create Date : 2012.9.27
 * Version : 1.0
 */
;(function($){
var Tools = {
	isIE7 : $.browser.msie && $.browser.version==="7.0", 
	__cookieData : function(name, value, options) {
		if (typeof value != 'undefined') {
				options = options || {};
				if (value === null) {
						  value = '';
						  options = $.extend({}, options);
						  options.expires = -1;
				}
				var expires = '';
				if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
						  var date;
						  if (typeof options.expires == 'number') {
									date = new Date();
									date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
						  } else {
									date = options.expires;
						  }
						  expires = '; expires=' + date.toUTCString();
				}
				var path = options.path ? '; path=' + (options.path) : '';
				var domain = options.domain ? '; domain=' + (options.domain) : '';
				var secure = options.secure ? '; secure' : '';
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else {
				var cookieValue = null;
				if (document.cookie && document.cookie != '') {
						  var cookies = document.cookie.split(';');
						  for (var i = 0; i < cookies.length; i++) {
									var cookie = jQuery.trim(cookies[i]);
									if (cookie.substring(0, name.length + 1) == (name + '=')) {
											  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
											  break;
									}
						  }
				}
				return cookieValue;
		}
	},	
	_getCookieData : function(str){return this.__cookieData(str);},
	_getLocalStorageData : function(str){return localStorage.getItem(str);},
	_setCookieData : function(str, data){var i_options = {expires:1, domain:"oa.com", path:"/"}; this.__cookieData(str, data, i_options);},
	_setLocalStorageData : function(str, data){
		if(localStorage) {
			localStorage.setItem(str, data);
		}
	}
};

/*
*--------------X Private Functions---------------*
*/
	  
Array.prototype.JsonArrayUnique = function(flag) {
	var res = [], hash = {};
	for(var i=0, elem; this[i] && (elem = this[i][0]) != null; i++) {
		if(flag == true){
			elem = $.trim(elem);
			if(elem === ""){
				continue;	
			}
		}
		if (!hash[elem])
		{
			res.push(this[i]);
			hash[elem] = true;
		}
	}
	return res;
};

/*
*--------------O Public Functions---------------*
*/
if(!window.Tencent_NameSelecter_DataManager){
	window.Tencent_NameSelecter_DataManager = {
		UniqueStringArray : function(array){
				var res = [], hash = {};
				for(var i=0, elem; (array[i] || array[i] == '') && (elem = array[i]) != null; i++) {
					
					elem = $.trim(elem);
					if(elem === ""){
						continue;	
					}
					
					if (!hash[elem])
					{
						res.push(array[i]);
						hash[elem] = true;
					}
				}
				return res;
			},
			
		FormatMemoryData : function(data){
				var fullNameArray = [];
				if(data && data != ""){
					var tempArray = data.split(";");
						
					for(var i=0, len=tempArray.length; i<len; i++){
						//数据排除空值
						tempArray[i] = $.trim(tempArray[i]);
						if(tempArray[i] == ""){ continue; }
						var sep = tempArray[i].indexOf("("),
							sArr = tempArray[i].substring(0, sep);
						
						fullNameArray.push([sArr,tempArray[i]]);
					}
				}
				//return 的数据里包含一个key=""，这个是为初始化的时候加载记忆的数据，当时是没有关键字的
				return {
							"key":"", 
							"fullName":fullNameArray
						};
			},
			
		NameIndexStart : function(key, jsonData){
				var	tempAllName = jsonData,
					Right=tempAllName.length-1,
					Left = 0,
					Center,
					keyLength = key.length,
					tempSubstring;
				
				while(Left <= Right){
				
					if (tempAllName[Left][1].toLowerCase().indexOf(key)==0){
						while (Left>=0&&tempAllName[Left][1].toLowerCase().indexOf(key)==0)
						  Left--;
						return Left+1;
					}else if (Right>=0&&tempAllName[Right][1].toLowerCase().indexOf(key)==0){
						while (tempAllName[Right][1].toLowerCase().indexOf(key)==0)
						  Right--;
						return Right+1;
					}
					
					Center = Math.floor((Right+Left)/2);
				
					tempSubstring = $.trim(tempAllName[Center][1]).toLowerCase();
					
					if(tempSubstring.indexOf(key)==0){
						while (Center>=0&&tempSubstring.indexOf(key)==0){
							Center--;
							tempSubstring = $.trim(tempAllName[Center][1]).toLowerCase();
						}
						return Center+1;
					}	
					
					if(tempSubstring > key){
						Right = Center - 1;
					}
					
					if(tempSubstring < key){
						Left = Center + 1;
					}
				}
				return -1;
			},
			
		NameIndexEnd : function(key, jsonData){
				var	tempAllName = jsonData,
					tempAllName_Len = tempAllName.length,
					Right=tempAllName_Len-1,
					Left = 0,
					Center,
					keyLength = key.length,
					tempSubstring;
				
				while(Left <= Right){
				
					if (tempAllName[Left][1].toLowerCase().indexOf(key)==0){
						while (Left<tempAllName_Len&&tempAllName[Left][1].toLowerCase().indexOf(key)==0)
						  Left++;
						return Left-1;
					}else if (tempAllName[Right][1].toLowerCase().indexOf(key)==0){
						while (Right<tempAllName_Len&&tempAllName[Right][1].toLowerCase().indexOf(key)==0)
						  Right++;
						return Right-1;
					}
					
					Center = Math.floor((Right+Left)/2);
				
					tempSubstring = $.trim(tempAllName[Center][1]).toLowerCase();
					
					if(tempSubstring.indexOf(key)==0){
						while (Center<tempAllName_Len&&tempSubstring.indexOf(key)==0){
							Center++;
							tempSubstring = $.trim(tempAllName[Center][1]).toLowerCase();
						}
						return Center-1;
					}	
					
					if(tempSubstring > key){
						Right = Center - 1;
					}
					
					if(tempSubstring < key){
						Left = Center + 1;
					}
				}
				return -1;
			},
		
		NameValidate : function(key, jsonData){
			//fix bug when input user nick,add '(' to nick, than validate 
				var flag_idx = key.indexOf('(');
				if(key.indexOf('（')>=0){
					flag_idx = key.indexOf('（');
				}
				if(flag_idx == -1){
					key = key + '(';
				}	
				key = key.toLowerCase();
				var	tempAllName = jsonData,
					tempAllName_Len = tempAllName.length,
					Right=tempAllName_Len-1,
					Left = 0,
					Center,
					keyLength = key.length,
					tempSubstring;
				
				while(Left <= Right){
					Center = Math.floor((Right+Left)/2);
					tempSubstring = $.trim(tempAllName[Center][1]).toLowerCase();
					//fix bug 49054165
					if(tempSubstring.indexOf(key) == 0){
						return Center;
					}
					
					if(tempSubstring > key){
						Right = Center - 1;
					}
					
					if(tempSubstring < key){
						Left = Center + 1;
					}
				}
				return -1;
				
			},	
	
		DataMerge : function(arr_all, arr_memory){
				//TODO 这里会修改原始的数组，需要做修改
				var newArr =  $.merge($.merge([], arr_all.fullName), arr_memory.fullName),
				     uniqArr = newArr.JsonArrayUnique();
				return {"key" : arr_all.key, "fullName" : uniqArr };
			},
		
		FormatDataToMemoryString : function(arrData, limitNum){
				var newArr = [], limit = Math.min(arrData.length, limitNum);
				for(var i=0; i<limit; i++){
					newArr.push(arrData[i][1]);
				}
				return newArr.join(";");
			},
			
		GetLocalData : function(name){
				var strData = "";
				if(Tools.isIE7){
					strData = Tools._getCookieData(name);
				}else{
					strData = Tools._getLocalStorageData(name);
				}	
				return strData;
			},
			
		SetLocalData : function(name, data){
				if(Tools.isIE7){
					Tools._setCookieData(name, data);
				}else{
					Tools._setLocalStorageData(name, data);
				}	
			}	
	};
}
/*
*--------------O Public Functions---------------*
*/			  
})(jQuery); 

(function($) {
if(!window.Tencent_UI_Widget){window.Tencent_UI_Widget = {};}
var	defaultConfig = {
	height: 220,
	width : 100,
	resultsClass : "dropdown_wrapper",
	activeClass : "activeItem",
	Data : null,
	showItems : 10,
	itemHeight : 24,
	isShowBlank : false,
	fixedHeight : false,
	
	onHide : null,
	onShow : null,
	onClick : null,
	
	onSwitchItem : null,
	onMouseOver : null,
	onMouseOut : null,
	callee : null,
	onInit : null
	};
		
Tencent_UI_Widget.DropdownList = function(inputTarget, config){
	this.$input = $(inputTarget);
	//设置宽度的默认值
	defaultConfig.width = this.$input.width();
	this.config = $.extend({}, defaultConfig, config);
	this.active = -1;
	this.init();
};
Tencent_UI_Widget.DropdownList.prototype = {
	init : function(){
		this.create();	
		this.bindEvent();
		this.isShow=false;
		this.mouse_over_flag = false;
		//active 是当前获得焦点的item 默认第一条获得焦点
		this.active = 0;
	},
	create : function(){
		this.$Main = $("<div/>")
			.hide()
			.addClass(this.config.resultsClass)
			.css("position", "absolute")
			.appendTo(document.body);
		this.$list = $('<ul class="dropdown_items_box clearfix" />').appendTo(this.$Main);
		//设置下拉框的宽度，默认值是input的宽度
		if( this.config.width > 0 ){this.$Main.css("width", this.config.width);}
		//当选择固定高度，设置下拉框的高度
		if( this.config.fixedHeight ){this.$Main.css("height", this.config.height);}
		//设置显示zindex
		if( this.config.zIndex != undefined ){this.$Main.css("zIndex", this.config.zIndex);}
	},
	setInputValue : function(data){
		if(this.config.onChange){
			if(this.config.callee){
				this.config.onChange.call(this.config.callee, data);
			}else{
				this.config.onChange(data);
			}
		}
		this.$input.val(data).data("name_item", data);
	},
	ItemFocus : function(idx){
		if(idx<0)idx = 0;
		var allLi = this.$list.find("li");
		if(idx>=allLi.length)idx = allLi.length - 1;
		this.active = idx;
		$("li", this.$list).removeClass("activeItem");
		$(allLi[idx]).addClass("activeItem");
	},
	
	isVisiable : function(childDom, parentDom){
		var cPosi = getPosition($(childDom)),
			pPosi = getPosition($(parentDom)),
			cTop = cPosi.top,
			cBottom = cTop + cPosi.height,
			diffTop = cTop,
			diffBottom = cBottom - pPosi.height;
		if(diffTop<0 || diffBottom>0){
			return diffTop<0?diffTop:diffBottom;
		}
		return true;
	},
	
	bindEvent : function (){
		var _this = this;
		$(window).bind("scroll",function(){
				_this.hide();						
										})
		this.$Main.bind("click", function(e){
						e.stopPropagation();				  									  
										  })
		this.bindInputEvent();
		this.bindItemsEvent();
	},
	
	bindInputEvent : function (){
		var _this=this;
		this.$input.bind("keyup", function(e){
			var val = e.target.value;
			switch (e.keyCode){
				case 38 :
					//up
						{
							_this.active-=1;
							if(_this.active<0)_this.active=0;
							_this.ItemFocus(_this.active);
							var focusItem = _this.$list.find("li")[_this.active], isVisable = true;
							if(focusItem  && _this.isShow){
								$(focusItem).trigger("fillInputVal");
								isVisable = _this.isVisiable(focusItem, _this.$Main);							
								if(typeof isVisable == "number"){
									var currentScrollTop = _this.$Main.scrollTop();
									_this.$Main.scrollTop(currentScrollTop + isVisable);
								}
								if(_this.config.onSwitchItem){
									if(_this.config.callee){
										_this.config.onSwitchItem.call(_this.config.callee, _this.config.Data[_this.active], _this.active);
									}else{
										_this.config.onSwitchItem(_this.config.Data[_this.active]);
									}
								}
								$(this).focus();
							}
						break;	
						}
					case 40 :
					//down
						{
							_this.active+=1;
							var maxIdx = _this.$list.find("li").length;
							if(_this.active>=maxIdx)_this.active=maxIdx-1;
							_this.ItemFocus(_this.active);
							var focusItem = _this.$list.find("li")[_this.active];
							if(focusItem && _this.isShow){
								$(focusItem).trigger("fillInputVal");
								var isVisable = _this.isVisiable(focusItem, _this.$Main);	
								if(typeof isVisable == "number"){
									var currentScrollTop = _this.$Main.scrollTop();
									_this.$Main.scrollTop(currentScrollTop + isVisable);
								}
								if(_this.config.onSwitchItem){
									if(_this.config.callee){
										_this.config.onSwitchItem.call(_this.config.callee, _this.config.Data[_this.active], _this.active);
									}else{
										_this.config.onSwitchItem(_this.config.Data[_this.active]);
									}
								}
								$(this).focus();
							}
						break;	
						}
					case 37:
					case 39:
						{
							break;	
						}
					default : 
						{
							if(_this.config.onChange){
								if(_this.config.callee){
									_this.config.onChange.call(_this.config.callee, val);
								}else{
									_this.config.onChange(val);
								}
							}
							break;
						}
				}
				
			}).bind("click", function(){
				if(_this.isShow){
					_this.hide();
					return;
				}else{
					_this.show();
					return;
				}
			})
		
	},
	
	bindItemsEvent : function(){
		var _this=this;
		this.$list.mouseover( function(e) {
			_this.mouse_over_flag = true;
			if(e.target.nodeName && e.target.nodeName.toLowerCase() == 'li') {
				  _this.active = $("li", _this.$list).removeClass("activeItem").index(e.target);
				  $(e.target).addClass("activeItem"); 
				  if(_this.config.onMouseOver){
						if(_this.config.callee){
							_this.config.onMouseOver.call(_this.config.callee, _this.active, $(e.target));
						}else{
							_this.config.onMouseOver(_this.active, $(e.target));
						}
					}
			}
		}).mouseleave(function(e){
			_this.mouse_over_flag = false;
		}).delegate("li","click", function(e) {
			var $target = $(e.target);
			if(e.target.nodeName.toLowerCase() == "b"){
				$target = $(e.target).parent();
			}
			$target.addClass("activeItem");
			if(_this.config.onClick){
				if(_this.config.callee){
					_this.config.onClick.call(_this.config.callee, _this.config.Data[_this.active], _this.active);
				}else{
					_this.config.onClick(_this.config.Data[_this.active], _this.active);
				}
			}else{
				_this.setInputValue(_this.config.Data[_this.active]);
			}
			_this.hide();
					
		}).delegate("li","fillInputVal", function(e) {
			var itemData = _this.config.Data[_this.active];
			_this.setInputValue(itemData[1]);		
		});
	},
	
	getOverStatus : function(){
		return this.mouse_over_flag;
	},
	
	resetData : function(){
		this.config.Data = []; 
	},
	
	show : function(){
		//默认显示的目标元素是input
		var dataLen = this.config.Data?this.config.Data.length:0;
		if(dataLen == 0 && !this.config.isShowBlank){
			return;
		}
		if(this.config.width<=0){
			this.setPosition(this.$input);
		}
		if(this.config.onShow){
			if(this.config.callee){
				this.config.onShow.call(this.config.callee);
			}else{
				this.config.onShow();
			}
		}
		this.$Main.show();
		this.isShow = true;
	},
	hide : function(){
		if(this.config.onHide){
			if(this.config.callee){
				this.config.onHide.call(this.config.callee);
			}else{
				this.config.onHide();
			}
		}
		this.$Main.hide();
		this.mouse_over_flag = false;
		this.isShow = false;
	},
	
	bindData : function(arrData){
		if(!arrData)arrData=[];
		this.config.Data = arrData;
		this.populate(arrData);
		this.ItemFocus(0);		
	},

	populate : function(arrData){
		//这个方法可以重写，以便应各个场合
		var key = this.$input.val(), keyLength = 0;
		if( key )keyLength = key.length;
		this.$list.empty();
		if(arrData && $.isArray(arrData) && arrData.length > 0){
			var showLen = Math.min(this.config.showItems, arrData.length);
			for(var i=0,len=showLen; i<len; i++){
				var inText = arrData[i].substring(keyLength);
				var tempDom = $('<li class="dropdown_item"><b></b>'+ inText +'</li>');
				if(key)tempDom.find("b").text(key);
				this.$list.append(tempDom);
			}
		}
	},
	
	getListData : function(){
		return this.config.Data;
	},
	
	setWidth : function (num){
		this.$Main.width(num);
	},

	setPosition : function($dom){
		var posi = getPosition($dom);
		setPosition(this.$Main, posi);
	}
};
function getPosition($dom){
	var position = $dom.offset();
	position.width = $dom.innerWidth();
	position.height = $dom.innerHeight();
	return position;	
}

function setPosition($dom, position){
	var top = position.top + position.height + 1;
	$dom.css({"left" : position.left, "top" : top, "width" : position.width});
}
})(jQuery); 

(function($) {
function CreateInputPanel(config){
		var DomStr = [
					'<div>',
					'<span class="name_input_errorMsg">Error</span>',
					'<span class="name_input_wrap">',
						'<input type="text" class="name_edit_input ignore_changed_check" style="border:none;" />',
						'<span class="name_width_agent"></span>',
					'</span>',
					'</div>'
			];
        var InputWrapWidth = 4;
            if(config.isPlaceHolder){
            	InputWrapWidth = getWrapWidth();
            	//重组
            	DomStr[2] = '<span class="name_input_wrap"' + ' style="width:' + InputWrapWidth + 'px">';
            	DomStr[3] = '<input type="text" class="name_edit_input ignore_changed_check" style="border:none;" ' +  'placeholder=" ' + config.isPlaceHolder + '"/>';
      		}
      	function getWrapWidth(){
            //曲线救国（分析字符长度，但没有这种接口）
            $('body').append('<span class="hide placeholder_width">' + config.isPlaceHolder + '</span>');
            return $('.placeholder_width').width() + 4;
        }

		return $(DomStr.join(""));
}	
if(!window.Tencent_UI_Widget)
{window.Tencent_UI_Widget = {};}
var	defaultConfig = {
			/*
			*  是否加载本地记忆数据
			*/
			isUseMemory : true,
			/*
			*  数据源，DataSource是全部数据
			*  MemoryData是记忆的数据，来自本地存储
			*/
			DataSource : [],
			MemoryData : [],
			ajaxUrl : "",
			/*
			*  filter的到的数据，这里的fullName将提交改dropdown来显示
			*/
			currentData : null,
			/*
			*  这个宽度是私有的
			*/
			minInputWidth : 4,
			/*
			*  Dropdown width
			*  显示列表的宽度
			*/
			width : 140,
			/*
			*  Error Config
			*  error item show config
			*  输入错误的名字是否需要显示出来，默认显示。
			*/
			isShowErrorItem : true, 
			/*
			*  Error Config
			*  error message show config
			*  输入错误名字的时候是否需要显示错误提示信息，默认不显示。
			*/
			isShowErrorMsg : false,
			/*
			*  Filter Item Config
			*  Filter Max Item config
			*  每次输入过滤出的选项数量，这里是最多个数。
			*/
			filterLimit : 8,
			/*
			*  Show Item Config
			*  show max items config
			*  每次显示项个数限制，这里是最大值。
			*/
			showLimit : 8,
			visibleLine : 3,
			/*
			*  记忆的人名限制，最多记忆多少个输入的人名
			*/
			MemoryLimit : 20,
			/*
			*  这里是初始化的句柄
			*  onInit在初始化之前调用，onAfterInit在初始化之后调用
			*/
			onInit : null,
			onAfterInit : null,
			/*
			*  这里是显示下拉框的句柄
			*  onShow在显示之前调用，onAfterShow在显示之后调用
			*/
			onShow : null,
			onAfterShow : null,
			/*
			*  这里是隐藏下拉框的句柄
			*  onHide在隐藏之前调用，onAfterHide在隐藏之后调用
			*/
			onHide : null,
			onAfterHide : null,
			/*
			*  当选择的数据发生改变时调用，
			*  return : 选择的全部数据字符串 -- "abc;def;hig"
			*/
			onContentChange : null,
			isShowBlank : false,
			/*
			*	name 是添加的hidden input的name属性，nameValType是输入到input的数据的类型，控件会在给定的DIV后面插入hidden的input
			*/
			"name" : "",
			"nameValType" : "0", // 0 为昵称，1 为全名 默认值0.
			"initValue" : "",
			"data_type" : 0,
			onEnter: null,
			onBlur: null,
            /*
            *  弟子emper致敬师父，给人名选择器拓展个placehoder接口
            */
            isPlaceHolder : ''
		};		
window.Tencent_UI_Widget.NameSelector = function(target, option){
	var config = $.extend({},defaultConfig, option);
	var $Inner = CreateInputPanel(config),
		$Main = $(target);
		$Main.html($Inner.html()).addClass("clearfix");
		$InputWrap = $Main.find(".name_input_wrap"),
		$Input = $InputWrap.find("input"),
		$WidthAgent = $InputWrap.find("span"),
		$ErrMsg = $Main.find(".name_input_errorMsg").hide();
		//拓展支持关闭本地记忆接口
	var localdataStr = config.isUseMemory ? Tencent_NameSelecter_DataManager.GetLocalData("AddressArray") : "";

	var memoryNameData = Tencent_NameSelecter_DataManager.FormatMemoryData(localdataStr);
	var data_source_array = [], data_source_hash = null;
	if(config.data_type == 0){
		//fiel name /km/files/js/usersandadgroups.js
		data_source_array = typeof _arrusersandadgroups == "undefined" ? [] : _arrusersandadgroups;
		if(typeof _arrusersandadgroups_hash != "undefined"){
			data_source_hash = _arrusersandadgroups_hash;
		}else{
			data_source_hash = {};
			this.requestHashData("usersandadgroups_hash",function(json){
				//可以一步拉取CGI获取列表重置最新的
				config.DataSourceHash = json;
			},function(e){
				//置为空MAP，规避后续逻辑执行错误
				config.DataSourceHash = {};
			});	
		}
	}else if(config.data_type == 1){
		//file name /km/files/js/users.js
		data_source_array = typeof _arrusers == "undefined" ? [] : _arrusers;
	}else if(config.data_type == 2){
		//file name /km/files/js/adgroups.js
		data_source_array = typeof _arradgroups == "undefined" ? [] : _arradgroups;
		if(typeof _arradgroups_hash != "undefined"){
			data_source_hash = _arradgroups_hash;
		}else{
			data_source_hash = {};
			this.requestHashData("adgroups_hash",function(json){
				//可以一步拉取CGI获取列表重置最新的
				config.DataSourceHash = json;
			},function(e){
				//置为空MAP，规避后续逻辑执行错误
				config.DataSourceHash = {};
			});			
		}
	}else if(config.data_type == 3){
		//file name /km/files/js/usersandadgroupslimit.js
		data_source_array = typeof _arrusersandadgroupslimit == "undefined" ? [] : _arrusersandadgroupslimit;
		//if(typeof _arradgroups_hash != "undefined"){
		if(typeof _arrusersandadgroupslimit_hash != "undefined"){
			//修复原有代码老逻辑的BUG
			data_source_hash = _arrusersandadgroupslimit_hash;
		}else{
			data_source_hash = {};
			this.requestHashData("usersandadgroupslimit_hash",function(json){
				//可以一步拉取CGI获取列表重置最新的
				config.DataSourceHash = json;
			},function(e){
				//置为空MAP，规避后续逻辑执行错误
				config.DataSourceHash = {};
			});				
		}
	}
	config.DataSource = {
		"fullName" : data_source_array
	};
	//可以一步拉取CGI获取列表
	config.DataSourceHash = data_source_hash;
	
	config.MemoryData = memoryNameData;
	
	if(config.currentData == null){
		config.currentData = config.MemoryData;
	}
	var dropdownConfig = {
		callee : this,
		onSwitchItem : this.droplist_switch_handler,
		showLimit : 8,
		onClick : this.droplist_click_handler,
		Data : config.MemoryData.fullName,
		zIndex : config.zIndex
	};
	
	
	
	this.DomManager = {"$Main": $Main, "$InputWrap" : $InputWrap, "$Input" : $Input, "$ErrMsg" : $ErrMsg, "$WidthAgent":$WidthAgent};
	this.config = config;
	this.DomManager.$Input.css("ime-mode", "disabled");
	this.filterLimit = this.config.filterLimit;
	this.MainClass = "name_panel";
	if(this.config.model == "single"){
		this.MainClass = "name_panel_single";
	}
	if(target){
		dropdownConfig.width = this.config.width;
		this.Dropdown = new Tencent_UI_Widget.DropdownList($Input, dropdownConfig);
		
		//重新实现dropdown的populate方法，实现不同业务的不同呈现
		this.Dropdown.populate = function(arrData){
			var key = this.$input.val(), keyLength = 0;
			if(key)keyLength = key.length;
			this.$list.empty();
			if(arrData && $.isArray(arrData) && arrData.length > 0){
				var showLen = Math.min(this.config.showLimit, arrData.length);
				for(var i=0,len=showLen; i<len; i++){
					var inText = arrData[i][1].substring(keyLength) +arrData[i][1].substring(arrData[i][1].length);
					var tempDom = $('<li class="dropdown_item"><b></b>'+ inText +'</li>');
					if(key){
						var boldText = arrData[i][0].substring(0,keyLength);
						tempDom.find("b").text(boldText);
					}
					this.$list.append(tempDom);
				}
			}
		}
		
		this.init();
	}
};


window.Tencent_UI_Widget.NameSelector.prototype = {
	init : function(){
		if(this.config.onInit)this.config.onInit();
		if(this.config.visibleLine){
			var lineHeight = this.DomManager.$Main.height();
			if(this.config.maxHeight!=''){
				this.DomManager.$Main.css("maxHeight", this.config.maxHeight);
			} else {
				this.DomManager.$Main.css("maxHeight", lineHeight*this.config.visibleLine);
			}
		}
		this.DomManager.$Main.addClass(this.MainClass);
		if(this.config.name){
			this.HiddenInput = $('<input type="hidden" name="' + this.config.name + '"  />');
			this.DomManager.$Main.after(this.HiddenInput);
		}
		if(this.config.width > 0){
			this.DomManager.$Main.width(this.config.width);
		}
		this.bindEvent();
		if(this.config.onAfterInit)this.config.onAfterInit();
		if(this.config.initValue){
			this.setValue(this.config.initValue);
		}
	},
	/**
	 * @param ops 请求数据列表的配置
	 * 	ops.term 搜索的关键字符串
	 * 	ops.type CGI数据源和原有的JS文件映射，通过TYPE区分。每一种TYPE返回的数据是不同的
	 * 	"usersandadgroups" => /km/files/js/usersandadgroups.js
	 *  "users" => /km/files/js/users.js
	 *  "adgroups" => /km/files/js/adgroups.js
	 *  "usersandadgroupslimit" => /km/files/js/usersandadgroupslimit.js
	 * 
	 */
	requestData : function(ops, success, err){
		var term = ops.term || "";
		var type = ops.type || "usersandadgroups";
		var limit = ops.limit || 20;
		$.ajax({
			mode : "abort",
			url : window.km_path + "users/ajax_get_user_selector_data",
			type : "GET",
			data : {
				type : type,
				q: term,
				frequent: "",
				limit: limit
			},
			/**
			 * 返回的数据格式，是一个json数组Array : [{"a_name_key" : "a_name_full"},{"b_name_key" : "b_name_full"}]
			 */
			success : function(data){
				//如果数据是老格式的(window.km_path + "apis/user_at.php")，进行转义,"Aname\nBname\nCname\n"
				var arr = [];
				if(typeof data == "string"){
					//容错兜底逻辑
					var tempFullName = data.split("\n");
					var len = tempFullName.length;
					var newFull = [];
					for(var k = 0; k < len;k++){
						//过滤掉\n引起的空字符串
						if(tempFullName[k] == ""){
							continue;
						}
						var sep = tempFullName[k].indexOf("("),
						sArr = tempFullName[k].substring(0, sep);
						newFull.push([sArr,tempFullName[k]]);
					}
					arr = newFull;
				}else if($.isArray(data)){
					//符合格式，直接赋值
					arr = data;
				}else{
					arr = [];
				}
				success && success(term,arr);
			},
			error : function(e){
				//console.error("get name php error!");
				err && err(e);
			}
		});
	},

	requestDataBatch : function(ops, success, err){
		var term = ops.term || [];
		var type = ops.type || "usersandadgroups";
		var limit = ops.limit || 20;
		$.ajax({
			mode : "abort",
			url : window.km_path + "users/ajax_get_user_selector_multi_data",
			type : "POST",
			data : {
				type : type,
				q: term,
				frequent: "",
				limit: limit
			},
			/**
			 * 返回的数据格式，是一个json数组Array : [{"a_name_key" : "a_name_full"},{"b_name_key" : "b_name_full"}]
			 */
			success : function(data){
				//如果数据是老格式的(window.km_path + "apis/user_at.php")，进行转义,"Aname\nBname\nCname\n"
				var arr = [];
				if(typeof data == "string"){
					//容错兜底逻辑
					var tempFullName = data.split("\n");
					var len = tempFullName.length;
					var newFull = [];
					for(var k = 0; k < len;k++){
						//过滤掉\n引起的空字符串
						if(tempFullName[k] == ""){
							continue;
						}
						var sep = tempFullName[k].indexOf("("),
						sArr = tempFullName[k].substring(0, sep);
						newFull.push([sArr,tempFullName[k]]);
					}
					arr = newFull;
				}else if($.isArray(data)){
					//符合格式，直接赋值
					arr = data;
				}else{
					arr = [];
				}
				success && success(term,arr);
			},
			error : function(e){
				//console.error("get name php error!");
				err && err(e);
			}
		});
	},
	/**
	 * @param type 获取哪一个hash map  = "_arrusersandadgroups_hash" || "_arradgroups_hash" || "_arrusersandadgroupslimit_hash"
	 */
	requestHashData : function(type, success, err){
		$.ajax({
			mode : "abort",
			url : window.km_path + "users/ajax_get_user_selector_hash_data",
			type : "GET",
			data : {
				type : type
			},
			/**
			 * 返回的数据格式，是一个json = {
			 * "t_tswitchtswitch":"t_tswitch（tswitch项目组）",
			 * "t_tswitch（tswitch项目组）":"t_tswitchtswitch",
			 * 
			 * "t_TO()":"t_TO(培训运营实施)",
			 * "t_TO(培训运营实施)":"t_TO()",
			 * 
			 * "t_TAlertingNetmonT":"t_TAlertingNetmon（网管系统T项目）",
			 * "t_TAlertingNetmon（网管系统T项目）":"t_TAlertingNetmonT",
			 * "t_Switch(IT)":"t_Switch(IT开发需求分流小组)"
			 * 	}
			 */
			success : function(data){
				if(!data){
					//容错
					success && success({});
					return;
				}
				success && success(data);
			},
			error : function(e){
				//console.error("get name php error!");
				err && err(e);
			}
		});		
	},	
	//可以复用
	input_uniq : function(myVal, selectedText){
		//可以输入多个，用分号分割
		var inputValArr = myVal.split(";");
		//数组去重
		inputValArr = Tencent_NameSelecter_DataManager.UniqueStringArray(inputValArr);
		//fix 避免操作原数组过程中又同时在遍历
		var inputValArrTemp = [];
		//for 去掉已经被选择的项				
		for(var itemIdx=0, itemLen=inputValArr.length; itemIdx<itemLen; itemIdx++){
			var compareStr=inputValArr[itemIdx],
				strFlag = compareStr.indexOf("(");
			if(strFlag>=0){
				compareStr = compareStr.substring(0,strFlag);
			}
			var inArrayFlag = $.inArray(compareStr, selectedText);
			if(!(inArrayFlag>=0)){
				inputValArrTemp.push(inputValArr[itemIdx]);
				//inputValArr.splice(itemIdx,1);
			}
		}
		//return inputValArr;
		return inputValArrTemp;
	},
	//可以复用
	/**
	 * 老逻辑为什么有souce param ,函数里面还去读this.config.DataSource.fullName?
	 */
	input_validate : function (inputValArr, source){
		var errItem=[], fullNameObj=[];
		// 把每一项添加到$Main
		// 已经过滤完的数组
		for(var realItemIdx=0, realItemLen=inputValArr.length; realItemIdx<realItemLen; realItemIdx++){
			//错误的名字做出标记
			errorClass = "";
			//输入的内容可能包含括号
			var compareStrApp=$.trim(inputValArr[realItemIdx]);
			
			var validateFlag = Tencent_NameSelecter_DataManager.NameValidate(compareStrApp, source);
			
			if(validateFlag < 0){
				var filter_hash = this.filter_name_hash(compareStrApp, this.config.DataSourceHash);
				if(filter_hash.length > 0){
					fullNameObj.push(filter_hash[0]);
				}else{
					 errorClass = "selected_item_error";
					 errItem.push(inputValArr[realItemIdx]);
					 if(this.config.isShowErrorItem){
						 // 模拟正常数据形式
						 fullNameObj = [[compareStrApp, inputValArr[realItemIdx]]];
					 }else{
						continue; 
					 }
				 }
			}else{
				//
				//fullNameObj.push(this.config.DataSource.fullName[validateFlag]);
				fullNameObj.push(source[validateFlag]);
			}
		}
		return {"errItem" : errItem, "fullNameObj" : fullNameObj};
	},
	
	confirm_input_handler : function(e, flag){
		var limitStatus = this.check_limit();
		if(limitStatus == false)return;
		var	$target = $(e.target),
			myVal = e.target.value,
			myData = $target.data("name_item");
			selectedText = [];
		if(myData && typeof myData == "string"){
			myVal = myData;
		}
		
		//弟子emperor向师父表示敬意，在此处做一个小小的改动以适配通过邮件直接粘贴入人名选择器的情况。
		//2016.3.4

		//防止<>中出现奇奇怪怪的英文字符正好匹配到相应的名字；
		myVal = myVal.replace(/<[^>]*>/g, "");
		//替换
		myVal = myVal.replace(/[^A-Za-z0-9&_]+/g, ";");

		//收集已经输入的
		this.DomManager.$Main.find(".name_input_ensure").each(function(){
			var fullName = $(this).data("name_fullName");
			if(myVal === fullName[1]){
				$(this).remove();
			}else{
				selectedText.push(fullName[0]);	
			}
		});
		
		//处理异步取不到值问题$('#mail_to_user').val() 
		function dealInput(){
			if(this.config.onContentChange)this.config.onContentChange(this.getValue(true));
			if(this.config.name){
				var val = this.config.nameValType == 0?this.getValue():this.getValue(true);
				this.HiddenInput.val(val);
			}
			//single 调用	
			this.setFocusItemPosition(this.DomManager.$InputWrap.prev(".name_input_ensure"));
			this.save_memory();
			
			//重置dropdown的数据并隐藏
			this.hide();
			this.Dropdown.active = -1;
			//确认输入完成重置输入框	;
			this.setInputValue("")
			this.key = "";
			this.set_input_width(this.config.minInputWidth);
			$target.removeData("name_item");	
			this.bindData();

		}
		if(myVal != ""){			
			var inputValArr = this.input_uniq(myVal, selectedText);
			//输入限制 最多输入多少个人名
			if(selectedText.length >= parseInt(this.config.limit,10) && parseInt(this.config.limit,10)>0){
				var focusItem =this.DomManager.$Main.find(".selected_item");
				if(focusItem.length > 0 && inputValArr.length>0){
					focusItem.remove();
				}
			}
			//如果没有匹配到，再走一次CGI匹配
			var resuleItems = this.input_validate(inputValArr, this.config.DataSource.fullName);
			if(inputValArr.length < 2 && resuleItems.fullNameObj.length){
				//直接老逻辑同步形式
				for(var i=0, len=resuleItems.fullNameObj.length; i<len; i++){
					if(flag != "noMemory")this.config.MemoryData.fullName.unshift(resuleItems.fullNameObj[i]);
					this.addItem(resuleItems.fullNameObj[i]);
				}
				if(resuleItems.errItem.length > 0 && this.config.isShowErrorMsg) {
					var errmsg = resuleItems.errItem.join(", ") + " are Wrong!"
					this.error_msg_show(errmsg);
				}
				dealInput.call(this);
			}else{
				//其他情况走异步
				//如果没有进行搜索，直接选择上次选择过的，此处this.config.DataSource.fullName = [];
				var data_type_s = String(this.config.data_type);
				var dMap = {
					"0" : "usersandadgroups",
					"1" : "users",
					"2" : "adgroups",
					"3" : "usersandadgroupslimit"
				};
				var dt = dMap[data_type_s] || "users";	//users是全部集合
				var that = this;
				this.requestDataBatch({
					//传递数组格式
					term : inputValArr,
					type : dMap[data_type_s] || "usersandadgroups"
				},function(inputValArr,json){
					var tempFullName = json || [];
					var resuleItems = that.input_validate(inputValArr, tempFullName);
					//展示采用异步
					for(var i=0, len=resuleItems.fullNameObj.length; i<len; i++){
					if(flag != "noMemory")that.config.MemoryData.fullName.unshift(resuleItems.fullNameObj[i]);
						that.addItem(resuleItems.fullNameObj[i]);
					}
					if(resuleItems.errItem.length > 0 && that.config.isShowErrorMsg) {
						var errmsg = resuleItems.errItem.join(", ") + " are Wrong!"
						that.error_msg_show(errmsg);
					}	
					dealInput.call(that);
				});

			}
			

			// var resuleItems = this.input_validate(inputValArr, this.config.DataSource.fullName);
				
			// for(var i=0, len=resuleItems.fullNameObj.length; i<len; i++){
			// 	if(flag != "noMemory")this.config.MemoryData.fullName.unshift(resuleItems.fullNameObj[i]);
			// 	this.addItem(resuleItems.fullNameObj[i]);
			// }
			// if(resuleItems.errItem.length > 0 && this.config.isShowErrorMsg) {
			// 	var errmsg = resuleItems.errItem.join(", ") + " are Wrong!"
			// 	this.error_msg_show(errmsg);
			// }		
					
		}

	},
	
	save_memory : function(){
		//获得新记忆数组
		var newMemoryArr = this.config.MemoryData.fullName.JsonArrayUnique(true);
		//重置 memoryData;
		this.config.MemoryData.fullName = newMemoryArr;
		var MemoryString = Tencent_NameSelecter_DataManager.FormatDataToMemoryString(newMemoryArr, this.config.MemoryLimit);
		Tencent_NameSelecter_DataManager.SetLocalData("AddressArray", MemoryString);
	},
	
	getValue : function(flag){
		var AllVal = [];
		this.DomManager.$Main.find(".name_input_ensure").each(function(){
			var name="",
				data = $(this).data("name_fullName");
			if(flag){name = data[0];}
			else{name = data[1];}
			AllVal.push(name);
		});
		return AllVal.join(";");
	},
	
	setValue : function(nameVal){
		this.clearValue();
		var nameString = "";
		if(typeof nameVal === "string"){
			nameString = nameVal;
		}else if($.isArray(nameVal)){
			nameString = nameVal.join(";");
		}
		
		this.setInputValue(nameString);
		this.DomManager.$Input.trigger("KeyChange");
		this.DomManager.$Input.trigger("ConfirmInput", "noMemory");
	},
	
	clearValue : function(){
		this.DomManager.$Main.find(".name_input_ensure").remove();
		this.setInputValue("");
	},
	
	addItem : function(fullName, errClass){
		var newTemp = $('<span class="name_input_ensure"><span class="name_input_posiflag"></span></span>'),
			valStr = fullName[0];
		if(fullName[1])valStr = fullName[1];
		valStr = valStr + ";";
		var s_num = valStr.indexOf("("), varStrArr = [];
		if(s_num > 0){
			varStrArr[0] = valStr.substring(0, s_num);
			varStrArr[1] = valStr.substring(s_num+1, valStr.length-2);
			valStr =$('<span class="fullname_span">' + varStrArr[0] + '(<label style="margin:0;">' + varStrArr[1] + '</label>);</span>');
		}
		newTemp.append(valStr);
		if(errClass)newTemp.addClass(errClass)
		newTemp.data("name_fullName", fullName);
		this.DomManager.$InputWrap.before(newTemp);
	},
	
	setInputValue : function(val){
		this.DomManager.$Input.val(val);	
		this.DomManager.$WidthAgent.text(val);
	},
	
	bindData : function(data){
		if(data){
			this.config.currentData = data;
		}else {
			this.config.currentData = this.config.MemoryData;
		}
		this.Dropdown.bindData(this.config.currentData.fullName);
	},
	
	bindEvent : function(){
		this.bind_main_event();
		this.bind_wrap_event();
		this.bind_input_event();
	},
	
	bind_main_event :  function(){
		var _this=this;
		//应使用dommanager，由于追加和时间冒泡终止尝试失败		
		$('body').delegate(".input_hint_label","click", function(e){
			_this.DomManager.$Main.click();
		});
		this.DomManager.$Main.bind("click", function(e){
			var clickItem = null,
				click_blank_space=true;
			if(e.target.nodeName.toLowerCase() === "label"){
				//点击人名label
				clickItem = $(e.target).parent().parent();
			}else if(e.target.className === "fullname_span"){
				//点击人名span
				clickItem = $(e.target).parent();
			}else if(e.target.className === "name_input_ensure"){
				//点击人名的外框span
				clickItem = $(e.target);
			}else if(e.target.className === "name_input_posiflag"){
				//点击 人名之间的空白位置
				clickItem = $(e.target).parent();
				clickItem.before($(this).find(".name_input_wrap"));
				click_blank_space = false;

			}else if(e.target == this){
				//点击 $Main
				$(this).append($(this).find(".name_input_wrap"));
				click_blank_space = false;
			}
			
			if(click_blank_space && clickItem){
				//直接点击了一个人名
				_this.setInputValue("");
				_this.DomManager.$InputWrap.animate({width:_this.config.minInputWidth},50);
				
				if(!e.ctrlKey){
					$(this).find(".selected_item").each(function(){$(this).removeClass("selected_item")});	
				}
		
				clickItem.addClass("selected_item").after(_this.DomManager.$InputWrap);
				_this.DomManager.$Input[0].focus();
				//单行输入使用
				//_this.setFocusItemPosition(clickItem);
			}else{
				//点击了人名之间的空白或者点击了$Main 
				$(this).find(".name_input_ensure").each(function(){$(this).removeClass("selected_item")});
				var status = _this.check_limit();
				//这里是输入数量的控制
				if(!status){
					_this.hide();
				}else{
					_this.show();
					if(_this.config.currentData.fullName.length>0)_this.bindData(_this.config.currentData);
					//延迟100ms获得焦点，解决在QQ浏览器和IE7下不能获得焦点的问题
					setTimeout(function(){_this.DomManager.$Input[0].focus();}, 100);
				}
			}
		}).bind("dblclick", function(e){
			if(_this.config.model != "single"){
				var clickItem = null;
				if(e.target.nodeName.toLowerCase() === "label"){
					//点击人名label
					clickItem = $(e.target).parent().parent();
				}else if(e.target.className === "fullname_span"){
					//点击人名span
					clickItem = $(e.target).parent();
				}else if($(e.target).hasClass("name_input_ensure")){
					clickItem = $(e.target);
				}
				if(clickItem){
					var val = clickItem.text();
					clickItem.replaceWith(_this.DomManager.$InputWrap);
					setTimeout(function(){
						_this.setInputValue(val);
						_this.DomManager.$Input.trigger("KeyChange");
						_this.DomManager.$Input.val('').focus().val(val);
					},70);
				}
			}	
		}).delegate(".fullname_span","mouseenter", function(e){
			 var $target = $(this).parent();
			 if($target.hasClass("name_input_ensure")){
				 $target.addClass("name_input_ensure_hover");
			 }
			
		}).delegate(".fullname_span", "mouseleave", function(e){
			 var $target = $(this).parent();
			 if($target.hasClass("name_input_ensure")){
				 $target.removeClass("name_input_ensure_hover");
			 }
		}).bind("mouseup", function(e){
			var clickItem = null;
			if(e.target.nodeName.toLowerCase() === "label"){
				clickItem = $(e.target).parent();
			}else if(e.target.className === "name_input_ensure"){
				clickItem = $(e.target);
			}else if(e.target.className === "name_input_posiflag"){
				clickItem = $(e.target).parent();
			}
		});
	},
	
	bind_wrap_event :  function(){
		var _this=this;
		$("body").bind("click", function(e){
				if($.contains(_this.Dropdown.$Main[0], e.target) || _this.Dropdown.$Main[0] == e.target || $.contains(_this.DomManager.$Main[0], e.target) || _this.DomManager.$Main[0] == e.target){
					return;
				}	
				_this.hide();						 
		 });
		$(window).resize(function(){
			_this.hide();
		});
	},
	
	bind_input_event :  function(){
		var _this=this;
		this.DomManager.$Input.bind("KeyChange", function(e){
			//KeyChange 只更改input的宽度
			var selected = _this.DomManager.$Main.find(".name_input_ensure");
			var myKey = this.value;
			//得出宽度值
			if(myKey == ""){
				_this.set_input_width(_this.config.minInputWidth);
			}else{
				_this.set_input_width();
			}
		}).bind("ConfirmInput", function(e,flag){
	
			_this.filtered = false;
			_this.confirm_input_handler(e ,flag);
		}).bind("focus", function(e,flag){
			if(!flag){
				if(this.value === ""){
					//_this.bindData(_this.config.currentData.fullName);
				}
			}				
		}).bind("blur", function(e){
			if(_this.ctrlKey){
				
			}else{
				_this.DomManager.$Main.find(".name_input_ensure").each(function(){$(this).removeClass("selected_item")});
			}
			
			var isSelect = list_over = _this.Dropdown.getOverStatus();
			//input失去焦点， 没有点击下拉列表的选项
			if(this.value != "" && !list_over){
				_this.DomManager.$Input.trigger("ConfirmInput");
			}
			if(_this.MoveFlag)this.focus();
			//MoveFlag only for IE
			_this.MoveFlag = false;
			//用于单行
			if(_this.config.model == "single")_this.DomManager.$InputWrap.animate({"width" : _this.config.minInputWidth}, 100);
			
			if(_this.config.onBlur){
				_this.config.onBlur(e, this.value, isSelect);
			}
						
		}).bind("keyup", function(e){
				var status = _this.check_limit();
				if(!status)return false;
				var myVal = this.value;
				if(_this.ctrlKey)_this.ctrlKey = false;
				switch(e.keyCode){
					case 13 : 
					//Enter
						{
							e.preventDefault();
							e.stopPropagation();
							//当上下选择了一个人名
							if(_this.filtered && ((myVal == _this.key || _this.Dropdown.active >= 0) || !_this.key)){			
								var SeleData;
								if(_this.Dropdown.active >= 0){
									SeleData = _this.config.currentData.fullName.length>0?_this.config.currentData.fullName[_this.Dropdown.active]:null;
									if(SeleData)$(this).data("name_item", SeleData[1])
								}
								$(this).trigger("ConfirmInput");
								
							}else{
								_this.keyup_filter_callback(e);
							}
							if(_this.config.onEnter){
								_this.config.onEnter(e);
							}
							break;
						}
					case 38 :
					case 40 :
						{
							var focusItem = _this.DomManager.$Main.find(".selected_item");
							if(focusItem.length > 0)focusItem.removeClass("selected_item");
							_this.show();
							//up and down
							break;
						}
					case 37:
						{//left
							if(myVal == ""){
								var focusItem = _this.DomManager.$Main.find(".selected_item");
								if(focusItem.length > 0){
									var preItem = $(focusItem[0]).prev(".name_input_ensure");
									if(preItem.length > 0){
										preItem.addClass("selected_item");
										focusItem.removeClass("selected_item");
										$(preItem).after(_this.DomManager.$InputWrap);
										var clickItem = preItem;
										_this.setFocusItemPosition(clickItem);
									}
								
								}else{
									var preDom = _this.DomManager.$InputWrap.prev(".name_input_ensure");
									if(preDom.length > 0)preDom.before(_this.DomManager.$InputWrap);
								}
								setTimeout(function(){_this.DomManager.$Input.focus()},50);
								_this.MoveFlag = true;
							}
							break;
						}
					case 39:
						{//right
							if(myVal == ""){
								var focusItem = _this.DomManager.$Main.find(".selected_item");
								if(focusItem.length > 0){
									var nextItem = $(focusItem[0]).next().next(".name_input_ensure");
									if(nextItem.length > 0){
										nextItem.addClass("selected_item");
										focusItem.removeClass("selected_item");
										$(nextItem).after(_this.DomManager.$InputWrap);
										var clickItem = nextItem;
										_this.setFocusItemPosition(clickItem);
									}
								}else{
									var nextDom = _this.DomManager.$InputWrap.next(".name_input_ensure");
									if(nextDom.length > 0)nextDom.after(_this.DomManager.$InputWrap);
								}
								setTimeout(function(){_this.DomManager.$Input.focus()},50);
								_this.MoveFlag = true;
							}
							break;
						}
					default : {
						if(e.ctrlKey && e.keyCode==65){
							_this.DomManager.$Main.find(".name_input_ensure").each(function(){
								$(this).addClass("selected_item");	
							})
						}else{
							if(e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18){
								//屏蔽shift ctrl alt
							}else{
								_this.keyup_filter_callback(e);
							}
						}
						break;	
					}
				}
		}).bind("keydown", function(e){
				var status = _this.check_limit();
				var myVal = this.value;
				if(status)_this.show();
				if(e.ctrlKey)_this.ctrlKey = true;
				switch(e.keyCode){
					case 8 :
					case 46:
					//Backspace
						{
//							if(_this.delete_items_timer){
//								clearTimeout(_this.delete_items_timer);	
//							}
							e.stopPropagation();
							if(myVal == ""){
								var select_item_flag = _this.DomManager.$InputWrap.prev(".selected_item");
								if(select_item_flag.length == 0){
									//如果input的内容为空 删除前面的元素;
									_this.DomManager.$InputWrap.prev(".name_input_ensure").remove();
									//长按backspace删除多个
//									_this.delete_items_timer = setTimeout(function(){
//										_this.DomManager.$InputWrap.prevAll(".name_input_ensure").remove();
//										}, 800);
								}else{
									//如果input的内容为空 删除选中的元素;
									_this.DomManager.$Main.find(".selected_item").remove();
								}
								if(_this.config.onContentChange)_this.config.onContentChange(_this.getValue(true));
								if(_this.config.name){
									var val = _this.config.nameValType == 0?_this.getValue():_this.getValue(true);
									_this.HiddenInput.val(val);
								}
							}
							break;
						}
					case 13 : 
					//Enter
						{
							e.preventDefault();
							//e.stopPropagation();
							break;
						}
					default : {
						if(!status)return false;	
					}
				}
	    })
	
	},
	
	keyup_filter_callback : function(e){
		var myVal = e.target.value;
		myVal = myVal.replace(/\'/g, "");
		this.key = myVal;
		this.MoveFlag = false;
		
		//默认加载记忆数据
		this.config.currentData = this.config.MemoryData;
		this.DomManager.$WidthAgent.html(myVal);
		if(myVal == ""){
			this.set_input_width(this.config.minInputWidth);
		
			this.filtered = false;
			this.bindData(this.config.currentData);
			this.show();
		}else{
			// this.set_input_width();
			// //Single 调用 预防input被隐藏
			// this.setInputPosition();
			// //过滤数据
			// this.config.currentData = this.filter_name(myVal);
			// if(this.config.currentData.fullName.length == 0){
			// 	var filter_hash = this.filter_name_hash(myVal, this.config.DataSourceHash);
			// 	if(filter_hash.length > 0){
			// 		this.config.currentData = {fullName: filter_hash};
			// 	}
			// }
			// this.filtered = true;
			this.set_input_width();
			//Single 调用 预防input被隐藏
			this.setInputPosition();
			//过滤数据
			var me = this;
			(me.tmpDeb ||  (me.tmpDeb = _.debounce(function(myVal){
				me.filter_name(myVal,function(json){
					me.config.currentData = json;
					if(me.config.currentData.fullName.length == 0){
						var filter_hash = me.filter_name_hash(myVal, me.config.DataSourceHash);
						if(filter_hash.length > 0){
							me.config.currentData = {fullName: filter_hash};
						}
					}
					me.filtered = true;
					me.bindData(me.config.currentData);
					me.show();
				});
			},300)))(myVal);

		}
		
	
	},
	
	filter_name_hash : function(val, data){
		var new_arr = [];
		val = val.toLowerCase();
		if(data){
			for(var key in data){
				if(key.toLowerCase().indexOf(val) == 0){
					if(key.toLowerCase().indexOf("(") < 0){
						var temp_arr = [];
						temp_arr.push(key);
						temp_arr.push(data[key]);
						new_arr.push(temp_arr);
					}else{
						new_arr.push([data[key], key]);
					}
					
				}
			}
		}
		return new_arr;
	},
	
	/*
	* Error Msg
	*/
	error_msg_show : function(msg){
		this.DomManager.$ErrMsg.text(msg).show(100);
		var _this=this;
		setTimeout(function(){
				_this.error_msg_hide();	
		},2000);
	},
	
	error_msg_hide : function(){
		this.DomManager.$ErrMsg.text("").hide(70);
	},
	/*
	* DropDown Callback
	*/
	droplist_click_handler : function(val,idx){
		var status = this.check_limit();
		if(!status)return false;
		var valStr = val[1];
		this.DomManager.$Input.val(valStr).data("name_item", val[1]);
		this.DomManager.$WidthAgent.text(valStr);
		this.set_input_width();
		this.DomManager.$Input.trigger("ConfirmInput");
		this.DomManager.$Input.focus();
		this.hide();
	},
	
	droplist_switch_handler : function(val){
		var valStr = val[1];
		this.DomManager.$WidthAgent.text(valStr);	
		this.set_input_width();
	},
	
	setInputPosition : function(){
		if(this.config.model == "single"){
			var MPosi = this.getPosition(this.DomManager.$Main),
				IPosi = this.getPosition(this.DomManager.$InputWrap),
				RMposi = MPosi.left + MPosi.width,
				RIposi = IPosi.left + IPosi.width,
				diff = RIposi - RMposi;
			if(diff > -60){
				this.DomManager.$InputWrap.animate({width:70},300);
				var scrollLeft = this.DomManager.$Main.scrollLeft() + 70;
				this.DomManager.$Main.animate({"scrollLeft":scrollLeft},250);
			}
		}
	},
	
	filter_name_old : function (myVal){
		//filterLimit
		var filterKey = myVal.toLowerCase(), resultPetNameData;
		var myAllDataStart = Tencent_NameSelecter_DataManager.NameIndexStart(filterKey, this.config.DataSource.fullName),
			myAllDataEnd = Tencent_NameSelecter_DataManager.NameIndexEnd(filterKey, this.config.DataSource.fullName),
			myMemoryDataStart = Tencent_NameSelecter_DataManager.NameIndexStart(filterKey, this.config.MemoryData.fullName),
			myMemoryDataEnd = Tencent_NameSelecter_DataManager.NameIndexEnd(filterKey, this.config.MemoryData.fullName),
			myMemoryData = {"key":filterKey, "fullName":[]},
			myAllData = {"key":filterKey, "fullName":[]};
		
		
		var s1 = myAllDataStart + parseInt(this.filterLimit) -1,
			s2 = myMemoryDataStart + parseInt(this.filterLimit) - 1;

		myAllDataEnd = Math.min(myAllDataEnd, s1);
		myMemoryDataEnd = Math.min(myMemoryDataEnd, s2);
		
		myMemoryData.fullName = this.config.MemoryData.fullName.slice(myMemoryDataStart, myMemoryDataEnd+1);
		myAllData.fullName = this.config.DataSource.fullName.slice(myAllDataStart, myAllDataEnd+1);
		resultPetNameData = Tencent_NameSelecter_DataManager.DataMerge(myMemoryData, myAllData);
		return resultPetNameData;
	},

	filter_name : function (myVal,callback){
		var me = this;
		myVal = myVal || "";
		var data_type_s = String(this.config.data_type);
		var dMap = {
			"0" : "usersandadgroups",
			"1" : "users",
			"2" : "adgroups",
			"3" : "usersandadgroupslimit"
		};
		function tfun(searchKey,json){
				var tempFullName = this.config.DataSource.fullName  = json || [];
			
				//filterLimit
				var filterKey = myVal, resultPetNameData;
				var myAllDataStart = Tencent_NameSelecter_DataManager.NameIndexStart(filterKey, tempFullName),
					myAllDataEnd = Tencent_NameSelecter_DataManager.NameIndexEnd(filterKey, tempFullName),
					myMemoryDataStart = Tencent_NameSelecter_DataManager.NameIndexStart(filterKey, this.config.MemoryData.fullName),
					myMemoryDataEnd = Tencent_NameSelecter_DataManager.NameIndexEnd(filterKey, this.config.MemoryData.fullName),
					myMemoryData = {"key":filterKey, "fullName":[]},
					myAllData = {"key":filterKey, "fullName":[]};
				
				
				var s1 = myAllDataStart + parseInt(this.filterLimit) -1,
					s2 = myMemoryDataStart + parseInt(this.filterLimit) - 1;

				myAllDataEnd = Math.min(myAllDataEnd, s1);
				myMemoryDataEnd = Math.min(myMemoryDataEnd, s2);
				
				myMemoryData.fullName = this.config.MemoryData.fullName.slice(myMemoryDataStart, myMemoryDataEnd+1);
				myAllData.fullName = tempFullName.slice(myAllDataStart, myAllDataEnd+1);
				resultPetNameData = Tencent_NameSelecter_DataManager.DataMerge(myMemoryData, myAllData);
				//return resultPetNameData;
				callback(resultPetNameData);

		}
		if(myVal.length > 30){
			//处理黏贴操作引发的输入，交给后续的CGI匹配处理
			tfun.call(me,myVal,[]);
			return;
		}
		this.requestData({
			term : myVal.toLowerCase(),
			type : dMap[data_type_s] || "usersandadgroups"
		},function(searchKey,json){
			tfun.call(me,searchKey,json)
		},function(){});
	},

	show : function(){
		this.Dropdown.setPosition(this.DomManager.$Main);
		if(this.Dropdown.isShow == false ){
			if(this.config.onShow)this.config.onShow();
			this.Dropdown.show();
			if(this.config.onAfterShow)this.config.onAfterShow();
		}
	},
	
	hide : function(){
		if(this.config.onHide)this.config.onHide();
		this.Dropdown.hide();
		this.Dropdown.active = -1;
		this.Dropdown.$Main.scrollTop(0);
		if(this.config.onAfterHide)this.config.onAfterHide();
	},
	
	setFocusItemPosition : function (clickItem){
		if(this.config.model == "single" && clickItem){
			var scrollLeft = this.DomManager.$Main.scrollLeft();
			var ItemPosition = this.getPosition(clickItem),
				MainPosition = this.getPosition(this.DomManager.$Main),
				LeftDiff = ItemPosition.left - MainPosition.left,
				RightDiff = ItemPosition.left + ItemPosition.width - MainPosition.left - MainPosition.width;
			if(LeftDiff < 0){
				var scrollWidth = scrollLeft+LeftDiff-10;
				this.DomManager.$Main.animate({"scrollLeft": scrollWidth},200);
			}
			if(RightDiff > -10){
				var scrollWidth = scrollLeft+RightDiff+20;
				this.DomManager.$Main.animate({"scrollLeft": scrollWidth},300);
			}
		}
	},
	
	set_input_width : function(w){
		var width = this.DomManager.$WidthAgent.innerWidth(),
			iWidth = this.DomManager.$InputWrap.innerWidth();
		width = width<this.config.minInputWidth?10:width+10;
		width = Math.max(width, iWidth);
		if(w)width = w;
		this.DomManager.$InputWrap.width(width);
	},
	getPosition : function($dom){
		var position = $dom.position();
		position.width = $dom.innerWidth();
		position.height = $dom.innerHeight();
		return position;	
	},
	
	check_limit : function(){
		var status = true, selected=null;
		if(this.config.limit && this.config.limit>0){
			selected = this.DomManager.$Main.find(".name_input_ensure");
			if(selected.length>=this.config.limit)
			{
				status = false;
			}
		}
		return status;
	}
};

})(jQuery);