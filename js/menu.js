var contact = 0;

$(window).scroll(function(){
    if($(window).width()>768){
        if ($(window).scrollTop() > 40){
            $('#header').addClass('scroll');
        }else{
            $('#header').removeClass('scroll');
        }
    }
});

$(window).load(function(){
    $(document).on('click', '.button-contact, .footer-contact, .open-contact', function(e){
        e.preventDefault();

        $('.bglightbox').css({'opacity':1,'z-index':15});

        $('#contact').fadeIn(300);

        if($(this).hasClass('open-contact')){
            indexPack = $(this).parents('.wrap-pack').index();
            $('#contact .dropdown').eq(0).find("ul li").eq(indexPack).trigger('click');
        }
    });

    $('#contact .icn-cross').on('click',function(){
        $('#contact').fadeOut();
        $('.bglightbox').css({'opacity':0,'z-index':-1});
    });

    $('#contact input').on('change',function(){
        if($(this).val()!=''){
            $(this).removeClass('empty').addClass('full');
        }else{
            $(this).removeClass('full').addClass('empty');
        }
    })

    $('#hamburger').click(function(){
        $('#header').addClass('open');
    })

    $('.close-menu').click(function(){
        $('#header').removeClass('open');
    })
});