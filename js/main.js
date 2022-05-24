$(function () {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {                   
                    dots: false
                }

            }
        ]
    });
});
$(function () {
    $('.reviews__slider').slick({

        
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,        
        responsive: [
            {
                breakpoint: 1150,
                settings: { 
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 950,
                settings: { 
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 700,
                settings: { 
                    slidesToShow: 1,
                    
                }
            },

        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    })

});
