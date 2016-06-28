//one
String.prototype.substring=function(start,end){
	var arr=[];
	for (var i = start; i < end; i++) {
		arr.push(this.charAt(i));
		}
		return arr.join("");
	};
String.prototype.indexOf=function(str){
	for (var i = 0; i < this.length-str.length; i++) {
			if (this.charAt(i)==str.charAt(0) && this.substring(i,i+str.length)==str) {
				return i;
			}
		}
		return -1;
	};


//two
String.prototype.substr=function(start,length){
	var arr=[];
	for (var i = start; i < start+length; i++) {
		arr.push(this.charAt(i));
	}
	return arr.join("");
};
String.prototype.indexOf=function(str){
	for (var i = 0; i < this.length-str.length; i++) {
		if (this.charAt(i)==str.charAt(0) && this.substr(i,str.length)==str) {
			return i;
		}
	}
	return -1;
};


//three
String.prototype.indexOf=function(str){
	var len=str.length,tlen=this.length;
	if (len==tlen) {
		return str==this?0:-1;
	}
	if (len>tlen) {
		return -1;
	}
	loop:
	for(var i = 0; i < tlen-len+1; i++){
		if (this.charAt(i)==str.charAt(0)) {
			for (var j = 1; j <str.length; j++) {
				if (this.charAt(j+i)!=str.charAt(j)) {
					continue loop;
				}
			}
		return i;
		}
	}
	return -1;
};


//four
String.prototype.indexOf=function(str){
	var pos=0,len=str.length,tlen=this.length,i=0,same;
	if (len==tlen) {
		return str==this?0:-1;
	}
	if (len<tlen) {
	while(i<tlen-len+1){
		same=this.charAt(i)==str.charAt(pos);
		i=same?i+1:i-pos+1;
		pos=same?pos+1:0;
		if (pos==len) {
			return i-len;
		}
	}
	}
	return -1;
};

var str="asdf ghjkl asdf zxcv asdf qwer",sub="asd",array=[],pos=str.indexOf(sub);
while(pos>-1){
	array.push(pos);
	pos=str.indexOf(sub,pos+1);
}