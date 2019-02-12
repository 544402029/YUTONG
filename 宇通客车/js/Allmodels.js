$(document).ready(function(){
    //tab切换车型
    var types=$('#product-caption a'),
        tab=$('#product-tab-box .product-tab');

    // 点击选项卡切换客车类型    
    types.on('click',function(){
       index=$(this).index();
        // 给选项卡添加选中样式
       $(this)
       .css({background: '#3b3b3b',color: '#ffffff'})
       .siblings()
       .css({background: '#e0e0e0',color: '#000000'});
        // 客车类型切换页面
       tab.eq(index).show().siblings().hide();
    })
})