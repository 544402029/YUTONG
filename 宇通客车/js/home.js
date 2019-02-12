$(document).ready(function(){

    // 轮播图动画
	 var index=0,
	     timer=null,
	     banner=$('#banner'),
	     pics=$('#banner div'),
	     len=pics.length;
	     lis=$('#banner-bottom li');
	     //定时更换banner，取消定时
		function slideImg(){
            // 点轮播图清除定时器,暂停轮播
			banner.mouseover(function(){
				if (timer) clearInterval(timer);
            })
            // 离开轮播图开始播放轮播图,每1秒更换一次
			banner.mouseout(function(){
				timer=setInterval(function(){
					index++;
					if (index>=len) {
						index=0;
					}
					//调用切换图片函数
					changeImg();
				},2000);
			})
			
			// 点缩略图列表切换图片
            lis.mouseover(function(){
                index=$(this).index();
                //如果点li的索引就取消定时
                if (timer) clearInterval(timer);
                changeImg();
            })
            // 离开缩略图列表重新开始播放轮播图
            lis.mouseout(function(){
                banner.mouseout();
            })

            // 进入页面直接播放轮播图
            banner.mouseout();
		}
		//切换图片函数
		function changeImg(){
            pics.eq(index).fadeIn('slow').siblings().fadeOut('slow');
		    lis.eq(index).css('outline','#000000 solid 3px').addClass('active').siblings().css('outline','none').removeClass('active');
        }
        
		//调用banner轮播图函数
		slideImg();	
		


		//产品推荐滑动效果
		var prev=$('.slider-control-left'),
			next=$('.slider-control-right'),
			recommend=$('#recommend-product'),
			length=$('.product-item').length,
			widt=0;
		
		next.eq(0).click(function(e){
			width=--widt*300;
			if(widt>=-8){
				recommend.css('left',width);
			}else{
				widt=-1;
				recommend.css('left',-300);
			}
		})	
			
	
		prev.eq(0).click(function(e){
			width=++widt*300;
			if(widt>=1){
				recommend.css('left',-2100);
				widt=-7;
			}else{
				recommend.css('left',width);
			}
		})	
})