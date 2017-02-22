window.onload = function () {
	$('#head').load('join.html');
	
	var oHtml = document.documentElement;
	
	getFont();
	function getFont(){
		
		var screenWidth = oHtml.clientWidth;
		oHtml.style.fontSize = screenWidth/(1440/40)+'px';
	}
	
	window.onresize = function(){
		
		getFont();
		
		
	}
	
	
}