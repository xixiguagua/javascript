    push = Array.prototype.push,
	slice = Array.prototype.slice,
	indexOf = Array.prototype.indexOf,
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	trim = String.prototype.trim,

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

//init

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

//size
function (){
	return this.length;
}

//toArray
function (){
	return slice.call(this);
}

//get
function (num){
	return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);
}

//pushStack
function (elems,name,selector){
	var ret=jQuery.merge(this.constructor,elems);//constructor 属性返回对创建此对象的引用。
	ret.prevObject=this;
	ret.context=this.context;
	if (name==="find") {
		ret.selector=this.selector+(this.selector?" ":"")+selector;
	 }else if (name) {
		ret.selector=this.selector+"."+name+"("+selector+")";
	}
	return ret;
}

//each
function (callback,argus){
	return jQuery.each(this,callback,argus);
}

//jQuery.each
function (object,callback,argus){
	var name ,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);
	if (argus) {
		if (isObj) {
			for(name in object){
				if (callback.apply(object[name],argus)===false) {
					break;
				}
			}
		}else{
			for(;i<length;){
				if (callback.apply(object[i++],argus)===false) {
					break;
				}
			}
		}
	}else{
		if (isObj) {
			for(name in object){
				if (callback.call(object[name],name,object[name])) {
					break;
				} 
			}
		}else{
			for(;i<length;){
				if (callback.call(object[i],name,object[i++])===false) {
					break;
				}
			}
		}
	}
	return object;
}

//ready
function (fn){
	jQuery.ready.promise().down(fn);
	return this;
}

//eq
function (i){
	i=+i;
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

//slice
function (){
	return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));
}

//end
function (){
	return this.prevObject||constructor(null);
}