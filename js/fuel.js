
  
 
var flashvars={
		f:'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4',
		c:0,
		b:1,
		i:'../img/fuel_img/fuel-filler_03.png'
		
		};

	var params={bgcolor:'#FFF',allowFullScreen:false,allowScriptAccess:'always',wmode:'transparent'};
	var video=['http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4 ->video/mp4'];
	CKobject.embed('../ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video)	
	
window.onresize = function(){
	$('#a1').css('width','60%');
	$('#a1').css('height','75%');
	
	
}
