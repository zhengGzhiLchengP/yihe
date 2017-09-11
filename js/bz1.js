var df = document.getElementById("top_df");
var img = document.getElementById("top_img");
var top_aa = document.getElementById("top_aa");
var a1s = document.getElementsByClassName("top_a1");
img.onmouseover = function(){
 	top_aa.style.display="block";
}
top_aa.onlaur = function(){
	top_aa.style.display="none";
}
 for (var i =0;i<=a1s.length;i++){
	 a1s[i].onclick = function(){
	 	df.innerHTML = this.innerHTML;
	 	top_aa.style.display="none";
	 }
 }




 