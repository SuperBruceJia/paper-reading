var _osslogfunc = function() {
	var _osslog = window._osslog ? window._osslog : {};
	var top_path = (_osslog.top_path != undefined) ?  _osslog.top_path : 'http://top.oa.com/';
	var _tracker_path = (_osslog.isdev != undefined && _osslog.isdev == false) ? top_path : 'http://top.oa.com/';
	_osslog.system = _osslog.system ? _osslog.system : 'unknown';
	_osslog.user = _osslog.user ? _osslog.user : '';
	if (_osslog.user == '') {
	  _osslog.user = document.cookie.match(new RegExp("(^| )t_uid=([^;]*)(;|$)"));
	  _osslog.user = _osslog.user ? unescape(_osslog.user[2]) : '';
	}
	_osslog.url = window.location.href;
	_osslog.reference = document.referrer;
	
	var params = '';
	for (var x in _osslog) {
	  params += x + '=' + encodeURIComponent(_osslog[x]) + '&' ;
	}
	params = params + 't=' + (new Date()).valueOf();
	var _ossimg = document.createElement('img');
	_ossimg.style.display = 'none';
	_ossimg.width = 0;
	_ossimg.src = _tracker_path + 'apis/tracker.php?' + params.toString();
	//document.body.appendChild(_ossimg);
};
if (window.addEventListener) {
  window.addEventListener('load', _osslogfunc, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', _osslogfunc);
}
