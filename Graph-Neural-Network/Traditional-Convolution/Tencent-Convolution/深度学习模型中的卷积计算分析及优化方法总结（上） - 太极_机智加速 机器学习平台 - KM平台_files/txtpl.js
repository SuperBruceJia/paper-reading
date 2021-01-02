
/**
 * 模板解析器txTpl: 
 * @author: wangfz
 * @param {String}  模板id || 原始模板text
 * @param {Object}  数据源json 
 * @param {String}  可选 要匹配的开始选择符 '<%' 、'[%' 、'<#' ..., 默认为'<%'
 * @param {String}  可选 要匹配的结束选择符 '%>' 、'%]' 、'#>' ..., 默认为'%>'
 * @param {Boolean} 可选 默认为true 
 * @return {String}	 
 * 注意1: 输出"\"时, 要转义,用"\\"或者实体字符"&#92"; 
 *　　　  输出"开始选择符"或"结束选择符"时, 至少其中一个字符要转成实体字符。 
 *　　　  html实体对照表：http://www.f2e.org/utils/html_entities.html
 * 注意2: 模板拼接时用单引号。
 * 注意3: 数据源尽量不要有太多的冗余数据。 
 */
var txTpl=(function(){
	var cache={};
	return function(str, data, startSelector, endSelector, isCache){
		var fn, d=data, valueArr=[], isCache=isCache!=undefined ? isCache : true;
		if(isCache && cache[str]){
			for (var i=0, list=cache[str].propList, len=list.length; i<len; i++){valueArr.push(d[list[i]]);}	
			fn=cache[str].parsefn;
		}else{
			var propArr=[], formatTpl=(function(str, startSelector, endSelector){
				if(!startSelector){var startSelector='<%';}	
				if(!endSelector){var endSelector='%>';}					
				var tpl=str.indexOf(startSelector) == -1 ? document.getElementById(str).innerHTML : str;			
				return tpl
					.replace(/\\/g, "\\\\") 											
					.replace(/[\r\t\n]/g, " ") 											
					.split(startSelector).join("\t")										
					.replace(new RegExp("((^|"+endSelector+")[^\t]*)'","g"), "$1\r")	
					.replace(new RegExp("\t=(.*?)"+endSelector,"g"), "';\n s+=$1;\n s+='")  					
					.split("\t").join("';\n")											
					.split(endSelector).join("\n s+='")		
					.split("\r").join("\\'");		
			})(str, startSelector, endSelector);	
			for (var p in d) {propArr.push(p);valueArr.push(d[p]);}	
			fn = new Function(propArr, " var s='';\n s+='" + formatTpl+ "';\n return s");
			isCache && (cache[str]={parsefn:fn, propList:propArr});
		}
		
		try{
			return fn.apply(null,valueArr);
		}catch(e){
			function globalEval(strScript) {
				var ua = navigator.userAgent.toLowerCase(), head=document.getElementsByTagName("head")[0], script = document.createElement("script"); 
				if(ua.indexOf('gecko') > -1 && ua.indexOf('khtml') == -1){window['eval'].call(window, fnStr); return}				
				script.innerHTML = strScript; 
				head.appendChild(script); 
				head.removeChild(script);
			}	
			
			var fnName='txTpl' + new Date().getTime(), fnStr='var '+ fnName+'='+fn.toString();
			globalEval(fnStr);
			window[fnName].apply(null,valueArr);		
		}			
	}
})();














