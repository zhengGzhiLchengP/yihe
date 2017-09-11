var box1_1_topa = document.getElementById("box1_1_topa");
 var box1_1_topb = document.getElementById("box1_1_topb");
 var input = document.getElementById("input");
 box1_1_topb.onclick = function(){
 	box1_1_topb.style.fontWeight="bolder";
 	box1_1_topb.style.backgroundColor="#038CE0";
 	box1_1_topb.style.color="#fff";
 	box1_1_topa.style.fontWeight="normal";
 	box1_1_topa.style.backgroundColor="#fff";
 	box1_1_topa.style.color="black";
 	input.placeholder="请输入商品名称或关键字进行筛选";
 }
  box1_1_topa.onclick = function(){
 	box1_1_topa.style.fontWeight="bolder";
 	box1_1_topa.style.backgroundColor="#038CE0";
 	box1_1_topa.style.color="#fff";
 	box1_1_topb.style.fontWeight="normal";
 	box1_1_topb.style.backgroundColor="#fff";
 	box1_1_topb.style.color="black";
 	input.placeholder="请输入商家名称或关键字进行筛选";
 }

