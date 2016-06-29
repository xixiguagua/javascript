//jQuery构建jQuery对象
function (selector,context){
	return new jQuery.fn.init(selector,context,rootjQuery);
}

//append
function (){
	return doManip(arguments,true,function(elem){
		if (this.nodeType==1||this.nodeType==11) {
			this.appendChild("elem");
		}
	});
}

//eq
function (i){
	i=+i;//字符串转为数值；
	return i===-1?this.slice(i):this.slice(i,i+1);
}

//first
function (){
	return this.eq(0);
}

//last
function (){
	return this.eq(-1);
}

//hasclass当前的元素是否含有某个特定的类，如果有，则返回true。
function (selector){
	var className=" "+selector+" ",
	i=0,
	l=this.length;
	for (; i<l;i++) {
		//rclass:/[\t\r\n]/g
		if (this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>0) {
			return true;
		}
		}
		return false;
}

//has保留包含特定后代的元素，去掉那些不含有指定后代的元素
function (target){
	var targets=jQuery(target,this),
	i,l=targets.length;
	return this.filter(function(){
		for (;i<l; i++) {
		if (jQuery.contains(this,targets[i])) {
			return true;
		}
		}
		return false;
	});

}

//contains
contains=Sizzle.contains=document.documentElement.contains?
	function (a,b){
		var adown=b.nodeType===9?a.documentElement:a,
		bup=b && b.parentNode;
		return a===bup||!!(bup && bup.nodeType===1||adown.contains && adown.contains(bup));
	}
	:document.documentElement.compareDocumentPosition?
	function(a,b){
		return b && !!(a.compareDocumentPosition(b) && 16);
	}
	:function(a,b){
		while( (b=b.parentNode) ){
			if (a===b) {
				return true;
			}
		}
		return false;
	};

//not
function (selector){
	return this.pushStack(winnow(this,selector,false),"not",selector);
}

//winnow
//pushStack
