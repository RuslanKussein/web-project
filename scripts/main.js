$(document).ready(function () {
    //Portfolio
    $('button[val]').click(function () {
        if ($(this).attr('val') != 'all' && $(this).attr('bool') == 'off') {
            $('button[bool]').attr('bool', 'off');
            $(this).attr('bool', 'on');
            $('button[bool]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter>div').hide(300);
            var nameOfValue=$(this).attr('val');
            $('.filter>div[val='+nameOfValue+']').show(300);
        } else if ($(this).attr('val') == 'all' && $(this).attr('bool') == 'off') {
            $('button[bool]').attr('bool', 'off');
            $(this).attr('bool', 'on');
            $('button[bool]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter>div[val]').show(300);
        }
    });

    //Navbar
    $('ul.menu a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 3000);
        $('ul.menu a[href^="#"]').css({
            'color': '#212121'
        });
        $(this).css({
            'color': '#004b99'
        });
        return false;
    });

    //Arrow toTop
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    //Drop down menu
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });
});
