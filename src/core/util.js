import { hashHistory } from 'react-router';
import valueData from 'data/values';
import Toast from 'components/toast';

//基础工具
class Util{

	parseContent = (str) => {
		return {
			__html:str
		}
	}

	scrollToTop = () => {
		window.scrollTo(window.scrollX,0);
	}

	trim = (str) => {
		return str.replace(/(^\s*)|(\s*$)/g,"");
	}

	/**
	 * param 将要转为URL参数字符串的对象
	 * key URL参数字符串的前缀
	 * encode true/false 是否进行URL编码,默认为true
	 * 
	 * return URL参数字符串
	 */
	param = (data, key, encode) => {
	  if( data == null ) return '';
	  var paramStr = '';
	  var t = typeof (data);
	  if (t == 'string' || t == 'number' || t == 'boolean') {
	    paramStr += '&' + key + '=' + ((encode == null||encode) ? encodeURIComponent(data) : data);
	  } else {
	    for (var i in data) {
	      var k = key == null ? i : key + (data instanceof Array ? '[' + i + ']' : '.' + i);
	      paramStr += this.param(data[i], k, encode);
	    }
	  }
	  return paramStr;
	}

	toast = (type, msg, duration, callback) => {
		Toast.open({
			type: type,
			msg: msg,
			duration: duration,
			callback: callback
		})
	}

	money = (s, n) => {
		n = n > 0 && n <= 20 ? n : 2;
	    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  

	    var t = "";  
	    for (var i = 0; i < l.length; i++) {  
	        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
	    }
	    return t.split("").reverse().join("") + "." + r;
	}

	rmoney = (s) => {   
	   return parseFloat(s.replace(/[^\d\.-]/g, ""));   
	} 

	startLoading = (msg) => {
		this.toast("loading", msg );
	}

	closeLoading = () => {
		Toast.close();
	}

	success = (msg, duration = 3000, callback) => {
		this.toast("success", msg, duration, callback)
	}
	
	error = (msg, duration = 3000, callback) => {
		this.toast("error", msg, duration, callback)
	}

	pushWindow = (url) => {
		hdp && hdp.do && hdp.do('mgj.navigation.pushWindow', url);
	}

	popWindow = () => {
		hdp && hdp.do && hdp.do('mgj.navigation.popWindow');
	}
}
export default new Util;

