'use strict';
$(document).ready(function(){

    $('.link__animation').on('click', function(e){
        e.preventDefault();
        
        var $this = $(this),
            warning = $('.warning');
        
        $this.addClass('active');
        
        warning.css({
			'transform': 'translate(-100%,100%)'
			})

    });
    $('.wrapper').on('click', function(e){
        
        var 
			$this = $(this),
			linkAnim = $(".link__animation"),
			pageX = e.pageX,
			pageY = e.pageY,
			warning = $('.warning');
        
        if (linkAnim.hasClass('active')) {
            console.log(pageX);
            linkAnim.css({
				'top': pageY,
				'left': pageX
			});
        } else {
			warning.css({
				'transform': 'translate(2%, 100%)'
			})
		}

    });

});
