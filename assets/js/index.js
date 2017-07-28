function click(){
	var btn = document.querySelectorAll('.audio_btn audio');
	var _this = this;
	for(var i=0;i<btn.length;i++){
		btn[i].removeAttribute('autoplay');
	}
	btn[_this].setAttribute('autoplay');
}
