var slide;
var tabs;
var slide_index;
var interval;
function init_tabs()
{
	slide = document.getElementsByClassName('div_class_Slide');
	slide_index = slide.length - 1;
	var tabc = document.getElementById('div_id_Slide_Tabs');
	var html = '';
	for(var i = 0;i <slide.length;i++)
	{
		html += '<span class="div_class_Slide_Tabs" onclick = "slide_x('+i+')"></span>';
	}
	tabc.innerHTML = html;
	tabs = tabc.childNodes;
	tabs[slide_index].className = addCls(tabs[slide_index].className,'div_class_Slide_Tabs_Active');
	cInterval();
}
function cInterval(){
	if(interval == -1)
		clearInterval(interval);
	interval = setInterval("autoNext()",1000);
}
function pInterval(){
	clearInterval(interval);
	interval = -1;
}
function autoNext(){
	slideOut(slide_index);
	slide_index = (slide_index - 1 + slide.length)%slide.length;
	slideIn(slide_index);
}
function slideOut(index){
	console.log(index);
	slide[index].className = rems(slide[index].className,'right_in');
	slide[index].className = rems(slide[index].className,'left_in');
	slide[index].className = rems(slide[index].className,'right_out');
	tabs[index].className = rems(tabs[index].className,'div_class_Slide_Tabs_Active');
}
function slideIn(index){
	slide[index].className = rems(slide[index].className,'left_out');
	slide[index].className = rems(slide[index].className,'right_out');
	slide[index].className = rems(slide[index].className,'left_in');
	tabs[index].className = rems(tabs[index].className,'div_class_Slide_Tabs_Active');
}
function slide_x(index){
	pInterval();
	index = index%slide.length;
	slideOut(slide_index);
	slideIn(index);
	slide_index=index;
	cInterval();
}

function rems(obj,name){
	if(obj == null || typeof obj != 'string'){
		return obj;
	}
	var x = obj.indexOf(name);
	if(x>-1){
		if(x>0){
			obj = obj.replace(name,'');
		}
		else{
			obj = obj.replace(" "+n,'');
		}
	}
	return obj;
}

function addCls(o,n){
	console.log(typeof o);
	if(o==null||typeof(o)!='string')return o;
	if(o.length>0) o+=' '+n;
	else o+=n;
	return o;
}