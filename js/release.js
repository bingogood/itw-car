+(function(){
	//字体
		
    
        
        
        
        
        function getFont(){
        	 // 获取html标签 
        	var oHtml = document.documentElement;
       		// 获取屏幕的宽度	
	        var screenWidth = oHtml.clientWidth;
	        // 动态去计算font-size值
	        oHtml.style.fontSize = screenWidth/(1440/12)+'px';
        }
		getFont();
	
        window.onresize = function(){
        	getFont();
        	//视频盒子大小
        	$("#a1").css("width","60%");
			$("#a1").css("height","auto");
        	
        }		
		//右边的指示器
		var sTop=null;
		$(document).scroll(function(){
			sTop=$("body").scrollTop();
			
			$(".a").each(function(i,o){
					var aTop=$(this).offset().top;
				if(sTop>=aTop){
					$("#fixedBtn li").eq(i).css("background","#841C24").siblings("li").css("background","white");
				}
			})
			
			
		})
		
})()

/*视频配置*/
+(function(){
	var flashvars={
		//视频地址
		f:'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4',
		c:0,
		s:1,
		b:1,
		i:"../img/release/release_vidio.jpg"
	};
		var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
   	 	var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
    	CKobject.embed('/ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',true,flashvars,video,params);
	
	
})()
