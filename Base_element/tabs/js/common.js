$(document).ready(function(){

    // первый способ, по порядку
//    $('.tabs__controls-link').on('click', function(e){
//        e.preventDefault();
//        
//        var item = $(this).closest('.tabs__controls-item'),
//            contentItem = $('.tabs__item'),
//            itemPosition = item.index();
//        
//        contentItem.eq(itemPosition)
//            .add(item)
//            .addClass('active')
//            .siblings()
//            .removeClass('active');
//    });
    
    
    //второй способ, при помощи атрибута data-class
    $('.tabs__controls-link').on('click', function(e){
        e.preventDefault();
        
        var item = $(this).closest('.tabs__controls-item'),
            contentItem = $('.tabs__item'),
            itemPosition = item.data('class');
        
        contentItem.filter('.tabs__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .css('opacity', 0)
            .animate({
                'opacity': 1
            },1500)
            .siblings()
            .removeClass('active');
    });
    
    
});