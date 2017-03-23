function stripesTables() {
	if(!document.getElementsByTagName) return false;

	var tables = document.getElementsByTagName("table");
	var rows = tables[0].getElementsByTagName("tr");
	for(var i=0; i<rows.length; i++){
		if(i%2 != 0){
			addClassName(rows[i],"odd");
			//rows[i].style.backgroundColor = "#ffc";
		} else{
			addClassName(rows[i],"even");
			//rows[i].style.backgroundColor = "#cff";
		}
	}
}

function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i=0; i<rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function addClassName(element,value){
	if(!element.className){
		element.className = value;
	} else{
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

addLoadEvent(highlightRows);
addLoadEvent(stripesTables);