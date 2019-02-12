$(document).ready(function(){
    //tab切换
    var types=$('#sale-caption a'),
        tab=$('#sale-tab-box .sale-tab');

    // 点击选项卡切换站点  
    types.on('click',function(){
       index=$(this).index();
        // 给选项卡添加选中样式
       $(this)
       .css({background: '#3b3b3b',color: '#ffffff'})
       .siblings()
       .css({background: '#e0e0e0',color: '#000000'});
        // 服务网点切换页面
       tab.eq(index).fadeIn().siblings().fadeOut();
    })
})