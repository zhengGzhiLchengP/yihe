var box7_img = document.getElementById("box7_img");
var box7_spans = document.getElementsByClassName("box7_span");
for(i=0;i<=box7_spans.length;i++){
	// box7_spans[i].aa=i;
	box7_spans[i].onmousemove = function(){
		box7_img.style.left=-370+(this.aa)*140+"px";
	}
}