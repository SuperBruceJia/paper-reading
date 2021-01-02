/**
 * js前端监控数据采集
 * 包括js异常监控和性能监控
 * @author cattyhuang
 */

// 页面load完后将性能数据发送到后台
window.onload = function () {
    return
	setTimeout(function () {
		performanceMonitor();
	}, 0);
}

// 通过onerror监听页面异常，一有错误就直接发送到后台
window.onerror = function (msg, url, line, col, error) {
    return
	var errorMessage = [];
	var column = col || (window.event && window.event.errorCharacter) || -1; // 不一定所有浏览器都支持col参数
	var module = get_module().module;
	var data = {
		created: (new Date()).Format('yyyy-MM-dd hh:mm:ss'), 
		created_by: current_user, 
		module: module, 
		url: window.location.href, 
		file: url, 
		message: msg, 
		line: line, 
		col: column, 
		navigator: window.navigator.userAgent, 
		stack: error && error.stack ? error.stack : ''
	};
	errorMessage.push({type: 'error', data: data});

	frontEndMonitor('error', errorMessage);
}

// 通过performance API获取页面性能数据
function performanceMonitor () {
	var performanceMessage = [];
	var perf = window.performance, 
		timing = perf ? perf.timing : '', 
		points = ['navigationStart', 'domainLookupEnd', 'connectEnd', 'responseStart', 'responseEnd', 'domInteractive', 'domContentLoadedEventEnd', 'loadEventEnd', 'domComplete'], 
		map = ['dns', 'connect', 'request', 'response', 'domready', 'domcontentloaded', 'onload'];
	
	if (perf && timing) {
		var length = points.length;
		var navigationStart = timing[points[0]];
		var data = {
			created: (new Date()).Format('yyyy-MM-dd hh:mm:ss'), 
			created_by: current_user, 
			controller: get_module().controller, 
			action: get_module().action, 
			url: window.location.href, 
			navigator: window.navigator.userAgent
		};
		for (var i = 1; i < length - 1; i++) {
			data[map[i - 1]] = timing[points[i]] - navigationStart;
		}
		// load事件没触发、用domcomplete事件时间代替
		if (timing[points[length - 2]] < timing[points[length - 1]]) {
			data[map[length - 3]] = timing[points[length - 1]] - navigationStart;
		}
		// 白屏时间、即首次渲染时间
		var firstPaint = 0;
		if (window.chrome && window.chrome.loadTimes) { // chrome
			firstPaint = parseInt((window.chrome.loadTimes().firstPaintTime - window.chrome.loadTimes().startLoadTime) * 1000);
		} else if (typeof window.performance.timing.msFirstPaint === 'number') { // ie9+
			firstPaint = window.performance.timing.msFirstPaint - navigationStart;
		}
		data['firstpaint'] = firstPaint;

		// 遍历性能数据，若数据中有负数或大于某个临界值则直接丢弃该数据
		var isPositive = true;
		$.each(data, function (i, v) {
			if (v < 0 || v > 65535) {
				isPositive = false;
			}
		});
		isPositive ? performanceMessage.push({type: 'performance', data: data}) : '';

		frontEndMonitor('performance', performanceMessage);
	}
}

// 通过img请求提交错误数据、性能数据
function frontEndMonitor (type, data) {
	var url = is_dev ? 'http://wei.oa.com/front-end-monitor-test.html' : 'http://wei.oa.com/front-end-monitor.html';

	var frontEndData = [];
	var localData = window.localStorage ? window.localStorage.getItem(type + 'Message') : '';
	if (localData && localData.length) {
		frontEndData = JSON.parse(localData);
		frontEndData.push(data[0]);
	}
	frontEndData = frontEndData.length ? frontEndData : data;
	window.localStorage ? window.localStorage.setItem(type + 'Message', JSON.stringify(frontEndData)) : '';

	if (type && frontEndData && frontEndData.length) {
		var img = new Image();
		var isrc = url + '?data=' + encodeURI(JSON.stringify(frontEndData));
		img.onload = img.onerror = function() {
			window.localStorage && window.localStorage.getItem(type + 'Message') ? window.localStorage.setItem(type + 'Message', '') : '';
			img = null;
		};
		img.src = isrc;
	}
}

// 获取错误所属模块
function get_module () {
	var href = window.location.href;
	var matches = href.match(km_path + '([^\?\/]*)(?:\/([^\?\/]*))?');
	var controller = matches && matches[1] ? matches[1] : 'pages';
	if (controller == 'group') {
		matches = href.match(km_path + 'group/[^\?\/]*/([^\?\/]*)(?:\/([^\?\/]*))?');
		controller = matches && matches[1] ? matches[1] : 'group';
	}
	if (controller == 'user') {
		matches = href.match(km_path + '(user)/[^\?\/]*/([^\?\/]*)');
	}
	var action = 'index';
	if (matches && matches[2]) {
		action = /show|view|\d+/.test(matches[2]) ? 'view' : (/index/.test(matches[2]) ? 'index' : matches[2]);
	}

	return {
		controller: controller, 
		action: action, 
		module: controller + ':' + action
	};
}

// 时间格式化
Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, // 月份
		"d+": this.getDate(), // 日
		"h+": this.getHours(), // 小时
		"m+": this.getMinutes(), // 分
		"s+": this.getSeconds(), // 秒
		"q+": Math.floor((this.getMonth() + 3) / 3), // 季度
		"S": this.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}