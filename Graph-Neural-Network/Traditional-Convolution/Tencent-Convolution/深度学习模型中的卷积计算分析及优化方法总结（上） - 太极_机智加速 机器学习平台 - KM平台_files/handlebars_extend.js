// for demo: http://jsbin.com/jeqesisa/7/edit
// for detailed comments, see my SO answer here http://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional/21915381#21915381

/* a helper to execute an IF statement with any expression
	USAGE:
 -- Yes you NEED to properly escape the string literals, or just alternate single and double quotes 
 -- to access any global function or property you should use window.functionName() instead of just functionName()
 -- this example assumes you passed this context to your handlebars template( {name: 'Sam', age: '20' } ), notice age is a string, just for so I can demo parseInt later
 <p>
	 {{#xif " this.name == 'Sam' && this.age === '12' " }}
		 BOOM
	 {{else}}
		 BAMM
	 {{/xif}}
 </p>
 */
Handlebars.registerHelper("xif", function (expression, options) {
	return Handlebars.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
});

 /* a helper to execute javascript expressions
 USAGE:
 -- Yes you NEED to properly escape the string literals or just alternate single and double quotes 
 -- to access any global function or property you should use window.functionName() instead of just functionName(), notice how I had to use window.parseInt() instead of parseInt()
 -- this example assumes you passed this context to your handlebars template( {name: 'Sam', age: '20' } )
 <p>Url: {{x " \"hi\" + this.name + \", \" + window.location.href + \" <---- this is your href,\" + " your Age is:" + window.parseInt(this.age, 10) "}}</p>
 OUTPUT:
 <p>Url: hi Sam, http://example.com <---- this is your href, your Age is: 20</p>
*/
Handlebars.registerHelper("x", function (expression, options) {
	var fn = function(){}, result;
	try {
		fn = Function.apply(this,["window", "return " + expression + " ;"]);
	} catch (e) {
		console.warn("{{x " + expression + "}} has invalid javascript", e);
	}

	try {
		result = fn.call(this, window);
	} catch (e) {
		console.warn("{{x " + expression + "}} hit a runtime error", e);
	}
	return result;
});

/**
 * ifCondition
 * @example {{#ifCondition a b operator="<"}}
 * @author cattyhuang
 */
Handlebars.registerHelper('ifCondition', function(lvalue, rvalue, options) {
		if (arguments.length < 3) {
				throw new Error("Handlerbars Helper 'ifCondition' needs 3 parameters");
		}
		operator = options.hash.operator || "==";

		var operators = {
				'==':       function(l,r) { return l == r; },
				'===':      function(l,r) { return l === r; },
				'!=':       function(l,r) { return l != r; },
				'<':        function(l,r) { return l < r; },
				'>':        function(l,r) { return l > r; },
				'<=':       function(l,r) { return l <= r; },
				'>=':       function(l,r) { return l >= r; },
				'typeof':   function(l,r) { return typeof l == r; },
				'||':       function(l,r) { return l || r; },
				'&&':       function(l,r) { return l && r; }
		}

		if (!operators[operator]) {
				throw new Error("Handlerbars Helper 'ifCondition' doesn't know the operator " + operator);
		}

		var result = operators[operator](lvalue,rvalue);

		if (result) {
				return options.fn(this);
		} else {
				return options.inverse(this);
		}
});

/**
 * htmlEntities
 */
Handlebars.registerHelper('htmlEntities', function (str) {
	str = str.replace(/&amp;/, '&');
	str = str.replace(/&lt;/g, '<');
	str = str.replace(/&gt;/g, '>');
	str = str.replace(/&acute;/g, '\'');
	str = str.replace(/&quot;/g, '"');
	str = str.replace('/&brvbar;/g', '|');

	return str;
});

/**
 * 解析微博tag #.....#
 */
Handlebars.registerHelper('parseTag', function (str) {
	if (str.match(/(#(.+)#)/g)) {
		str = str.replace(/#(.+)#/g, '<a href="' + km_path + 'twitters/tag/' + RegExp.$2 + '">' + RegExp.$1 + '</a>');
	}
	return str;
});

/**
 * profile url
 * @param  {[type]} nick current user nick
 */
Handlebars.registerHelper('profileUrl', function (nick) {
	return km_path + 'user/' + nick;
});

/**
 * avatar url
 * @param  {[type]} nick current user nick
 */
Handlebars.registerHelper('avatarUrl', function (nick) {
	return avatar_path + nick + '/profile.jpg';
});

/**
 * group url
 * @param  {[type]} nick current user nick
 */
Handlebars.registerHelper('groupUrl', function (groupId) {
	return km_path + 'group/' + groupId;
});

/**
 * photo url
 * @param  {[type]} ids     photos id
 * @param  {[type]} index   photos id index
 * @param  {[type]} groupId group id
 */
Handlebars.registerHelper('photoUrl', function (ids, index, groupId) {
	return km_path + (groupId ? 'group/' + groupId + '/' : '') + 'photos/show/' + ids[index];
});

/**
 * url 拼接
 */
Handlebars.registerHelper('urlJoin', function (targetType, targetId, groupId, entityType, entityId) {
	// url 后缀
	var urlSuffix = '';
	// url 前缀
	var urlPrefix;
	// url
	var url;

	switch (targetType) {
		case 'Post':
			urlSuffix = 'posts/show/';
			break;
		case 'Doc':
			urlSuffix = 'docs/show/';
			break;
		case 'Event': 
			urlSuffix = 'event/';
			break;
		case 'Survey':
			urlSuffix = 'surveys/view/';
			break;
		case 'Knowledge': 
			urlSuffix = 'knowledge/';
			break;
		case 'Q':
			urlSuffix = 'q/view/';
			break;
		case 'Cheese':
			urlSuffix = 'cheeses/view/';
			break;
		case 'Answer':
			urlSuffix = 'q/answer/';
			break;
		case 'Topic':
			urlSuffix = 'topics/view/';
			break;
		case 'Group':
			urlSuffix = 'group/';
			break;
		case 'Album':
			urlSuffix = 'photos/album/';
			break;
		case 'Photo':
			urlSuffix = 'photos/show/';
			break;
		case 'Assignment':
			urlSuffix = 'assignments/show/';
			break;
		case 'User':
			urlSuffix = 'user/';
			break;
		case 'Twitter':
			urlSuffix = 'twitter/';
			break;
		case 'Video':
			urlSuffix = 'videos/show/';
			break;
		case 'Fund':
			urlSuffix = 'funds/view/';
			break;
		case 'CalendarEvent':
			urlSuffix = 'calendars/view_cal_event/';
			break;
		case 'CalendarSeries':
			urlSuffix = 'calendars/view_cal_events_series/';
			break;
		case 'Meeting':
			urlSuffix = 'meetings/show/';
			break;
		case 'Attachment': 
			urlSuffix = 'attachments/attachment_view/';
			break;
		case 'Liveroom': 
			urlSuffix = 'liveroom/';
			break;
	}
	urlPrefix = groupId && groupId != 0 && targetType !== 'Post' ? 'group/' + groupId + '/' : '';
	url = km_path + urlPrefix + urlSuffix + targetId;

	return url;
});

/**
 * 名词解释
 */
Handlebars.registerHelper('termName', function (targetType) {
	var codeMap = {
		'Post': '文章',
		'Doc': '文档',
		'Event': '活动',
		'Survey': '投票',
		'Liveroom': '直播间',
		'Knowledge': '文集',
		'Q': '乐问',
		'Answer': '回答',
		'Topic': '讨论',
		'Group': 'K吧',
		'Album': '相册',
		'Photo': '照片',
		'Assignment': '任务',
		'User': '用户',
		'Twitter': '微博',
		'Video': '视频',
		'Fund': '微爱',
		'CalendarEvent': '日历',
		'CalendarSeries': '日历',
		'Meeting': '会议',
		'Attachment': '附件'
	};
	return codeMap[targetType] || '其他';
});

/**
 * increase self
 */
Handlebars.registerHelper('increase', function (num) {
	return num + 1;
});


/**
 * add
 */
Handlebars.registerHelper('add', function (a, b, c) {
	var result = 0;
	for (var i = 0, length = arguments.length - 1; i < length; i++) {
		result += arguments[i];
	}
	return result;
});

/**
 * is author
 */
Handlebars.registerHelper('isAuthor', function (created_by) {
	return created_by === current_user;
});

/**
 * return key-value
 */
Handlebars.registerHelper('keyValue', function (object, key) {
	return object[key] || '';
});

/**
 * return string with '...'
 */
Handlebars.registerHelper('strTruncate', function(str, len) {
	if (str && str.length > len) {
		var new_str = str.substr(0, len + 1);

		while (new_str.length) {
			var ch = new_str.substr(-1);
			new_str = new_str.substr(0, -1);

			if (ch == ' ') {
				break;
			}
		}

		if (new_str == '') {
			new_str = str.substr(0, len);
		}

		return new Handlebars.SafeString(new_str + '...');
	}
	return str;
});