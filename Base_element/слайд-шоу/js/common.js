$(document).ready(function(){

    $('.slideshow__pic').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.slideshow__item'),// li.slideshow__item
            container = $this.closest('.slideshow'),//div.slideshow
            display = container.find('.slideshow__display'),//div.slideshow__display
            path = item.find('img').attr('src'),//путь к картинке
            duration = 300;
        
        if(!item.hasClass('active')){
            item.addClass('active').siblings().removeClass('active');
        }
        display.find('img').fadeOut(duration, function(){
            $(this).attr('src', path).fadeIn(duration);
        });
   });
    
    
});