var slide;
var tabs;
var slide_index;
var interval;
window.onresize = function(){
 var containter = document.getElementsByClassName('div_class_Container');
 containter[0].style.height = window.innerHeight - 48 + "px" ;
}

function init_tabs(){
	var containter = document.getElementsByClassName('div_class_Container');
	containter[0].style.height = window.innerHeight - 48 + "px" ;
	slide = document.getElementsByClassName('div_class_Slide');
	slide_index = 0;
	var tabc = document.getElementById('div_id_Slide_Tabs');
	var html = "";
	for(var i = 0;i <slide.length;i++)
	{
		html += '<span class="div_class_Slide_Tabs" onmouseenter = "slide_x('+i+')"></span>';
	}
	tabc.innerHTML = html;
	tabs = tabc.childNodes;
	tabs[slide_index].className = addClass(tabs[slide_index].className,'div_class_Slide_Tabs_Active');
	cInterval();
}
function mouseIn(){
	pInterval();
	var leftMask = document.getElementById('div_id_LeftMask');
	leftMask.style.visibility = 'visible';
	leftMask.style.left = '0%';
	if(leftMask.className.length != 0){
		var name = leftMask.className;
		leftMask.classList.remove(name);
	}
	leftMask.classList.add('showMaskLeft');
	var rightMask = document.getElementById('div_id_RightMask');
	rightMask.style.visibility = 'visible';
	rightMask.style.right = '0%';
	if(rightMask.className.length != 0){
		name = rightMask.className;
		rightMask.classList.remove(name);
	}
	rightMask.classList.add('showMaskRight');
	
}
function mouseOut(){
	cInterval();
	var leftMask = document.getElementById('div_id_LeftMask');
	leftMask.style.left = '-100%';
	if(leftMask.className.length != 0){
	 	var name = leftMask.className;
	 	leftMask.classList.remove(name);
	 }
	leftMask.classList.add('deleteMaskLeft');

	var rightMask = document.getElementById('div_id_RightMask');
	rightMask.style.right = '-100%';
	if(rightMask.className.length != 0){
		name = rightMask.className;
		rightMask.classList.remove(name);
	}
	rightMask.classList.add('deleteMaskRight');
}
function slide_next(){	
	pInterval();
	var x = (slide_index+1) % slide.length;	
	slide_x(x);
}

function slide_last(){
	pInterval();
	slide[slide_index].className=removeClasses(slide[slide_index].className,'left_in');
	slide[slide_index].className=removeClasses(slide[slide_index].className,'right_in');
	slide[slide_index].className=addClass(slide[slide_index].className,'right_out');
	tabs[slide_index].className = removeClasses(tabs[slide_index].className,"div_class_Slide_Tabs_Active");
	slide_index=(slide_index-1 + slide.length )%slide.length;
	slide[slide_index].className=removeClasses(slide[slide_index].className,'left_out');
	slide[slide_index].className=removeClasses(slide[slide_index].className,'right_out');
	slide[slide_index].className=addClass(slide[slide_index].className,'left_in');
	tabs[slide_index].className = addClass(tabs[slide_index].className,"div_class_Slide_Tabs_Active");
}
function cInterval(){
	if(interval != -1){
		clearInterval(interval);
	}
	interval = setInterval("autoNext()",5000);
}
function pInterval(){
	clearInterval(interval);
	interval = -1;
}
function autoNext(){
	slideOut(slide_index);
	slide_index = (slide_index + 1)%slide.length;
	slideIn(slide_index);
	
}
function slideOut(index){
	slide[index].className = removeClasses(slide[index].className,'right_in');
	slide[index].className = removeClasses(slide[index].className,'left_in');
	slide[index].className = addClass(slide[index].className,'left_out');
	tabs[index].className = removeClasses(tabs[index].className,'div_class_Slide_Tabs_Active');
}
function slideIn(index){
	slide[index].className = removeClasses(slide[index].className,'left_out');
	slide[index].className = removeClasses(slide[index].className,'right_out');
	slide[index].className = addClass(slide[index].className,'right_in');
	tabs[index].className = addClass(tabs[index].className,'div_class_Slide_Tabs_Active');
}
function slide_x(index){
	pInterval();
	index = index%slide.length;
	slideOut(slide_index);
	slideIn(index);
	slide_index=index;
}

function removeClasses(obj,name){
	if(obj == null || typeof (obj) != 'string'){
		return obj;
	}
	var x = obj.indexOf(name);
	if(x != -1){
		if(x>0) 
			obj=obj.replace(name,'');
	}
	return obj;
}

function addClass(obj,name){
	if(obj==null||typeof obj != 'string'){
		return obj;
	}
	if(obj.length>0) {
		obj += ' ' + name;
	}
	else{
		obj += name;
	} 
	return obj;
}