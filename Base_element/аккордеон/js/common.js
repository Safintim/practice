$(document).ready(function(){

    $('.accordeon__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this), //a.accordeon__trigger
            item = $this.closest('.accordeon__item'),//li.accordeon__item
            list = $this.closest('.accordeon__list'),// ul.accordeon__list
            items = list.find('.accordeon__item'),//находим все li.accordeon__item , которые есть в ul.accordeon__list
            content = item.find('.accordeon__inner'), //находим все ul.accordeon__inner, которые есть в li.accordeon__item
            otherContent = list.find('.accordeon__inner'), //находим все li.accordeon__item, которые есть в  ul.accordeon__list
            duration = 300;
        
        if(!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');

            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else{
            content.stop(true, true).slideUp(duration);
            item.stop(true, true).removeClass('active');
        }
   });
    
    
});