
window.onload = function(){
	var flag =true ;
		$(".btn1").click(function(){
			
			if(flag){
				$(".app").slideDown(300);
				
				flag = false ;
			}else{
				$(".app").slideUp(300);
				
				flag = true;
			}
		})
}
