var slide;
var tabs;
var slide_index;
var interval;
function init_tabs(){
	slide = document.getElementsByClassName('div_class_Slide');
	slide_index = 0;
	var tabc = document.getElementById('div_id_Slide_Tabs');
	var html = "";
	for(var i = 0;i <slide.length;i++)
	{
		html += '<span class="div_class_Slide_Tabs" onclick = "slide_x('+i+')"></span>';
	}
	tabc.innerHTML = html;
	tabs = tabc.childNodes;
	tabs[slide_index].className = addClass(tabs[slide_index].className,'div_class_Slide_Tabs_Active');
	cInterval();
}
function cInterval(){
	interval = setInterval("autoNext()",5000);
}
function pInterval(){
	clearInterval(interval);
}
function autoNext(){
	console.log("当前index为："+ slide_index);
	slideOut(slide_index);
	slide_index = (slide_index + 1)%slide.length;
	console.log("现在index为："+ slide_index);
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
	cInterval();
}

function removeClasses(obj,name){
	console.log("obj:"+ obj,"name:"+ name);
	if(obj == null || typeof (obj) != 'string'){
		return obj;
	}
	var x = obj.indexOf(name);
	if(x != -1){
		if(x>0) obj=obj.replace(name,'');
	}
	console.log(obj);
	return obj;
}


// function remCls(o,n){	
// 	if(o==null||typeof(o)!='string')return o;	
// 	var x = o.indexOf(n);	
// 	if(x>-1){		
// 		if(x>0) o=o.replace(n,'');		
// 		else o=o.replace(" "+n,'');	
// 	}	
// 	return o;
// }



function addClass(o,n){
	if(o==null||typeof(o)!='string')return o;
	if(o.length>0) o+=' '+n;
	else o+=n;
	return o;
}
// function slide_next(){	
// 	var x=(slide_index-1+slide.length)%slide.length;	
// 	slide_x(x);
// }
// function slide_last(){	
// 	pInterval();	
// 	slide[slide_index].className=remCls(slide[slide_index].className,'left-in');	
// 	slide[slide_index].className=remCls(slide[slide_index].className,'right-in');	
// 	slide[slide_index].className=addCls(slide[slide_index].className,'left-out');	
// 	tabs[slide_index].className = remCls(tabs[slide_index].className,"slide-tab-acitve");
// 	slide_index=(slide_index+1)%slide.length;		
// 	slide[slide_index].className=remCls(slide[slide_index].className,'left-out');	
// 	slide[slide_index].className=remCls(slide[slide_index].className,'right-out');	
// 	slide[slide_index].className=addCls(slide[slide_index].className,'right-in');	
// 	tabs[slide_index].className = addCls(tabs[slide_index].className,"slide-tab-acitve");	
// 	cInterval();
// }
