var aas = document.getElementsByClassName("aa");
var box3_img = document.getElementsByClassName("box3_img");
var box3_imga = document.getElementById('box3_imga');
var box3_imgs = document.getElementById('box3_imgs');

for (var i = 0;i<box3_img.length;i++) {
	box3_img[i].bb=i;
	box3_img[i].onmouseover = function(){
		box3_imga.style.left=920+20*(this.bb)+"px";
		box3_imgs.style.left=-1920*(this.bb)+"px";

	}
}