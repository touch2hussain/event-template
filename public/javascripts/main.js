$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000,
        autoplay: 6000,
        grabCursor: true
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var trackGalleryOpen = function (label) {
        var magnificPopup = $.magnificPopup.instance;
        var label;
        switch (magnificPopup.index) {
            case 1:
                label = 'Birthday';
                break;
            case 2:
                label = 'wedding&reception';
                break;
            case 3:
                label = 'Mall Events';
                break;
            case 4:
                label = 'Corporate gatherings';
                break;
            case 5:
                label = 'Entertainment Activities & shows';
                break;
            case 6:
                label = 'Creative Services';
                break;
        }
        ga('send', {
            hitType: 'event',
            eventCategory: 'Gallery',
            eventAction: 'Open',
            eventLabel: label
        });
    }

    // for light box
    var groups = {};
    var items = {
        1: [{
            src: '../images/birthday/hmevents_birthday1.jpg',
            title: 'HM Events Birthday Gallery',
            alt: 'India'
        },
        {
            src: '../images/birthday/hmevents_birthday2.jpg',
            title: 'india'
        },
        {
            src: '../images/birthday/hmevents_birthday3.jpg',
            title: 'america'
        },
        {
            src: '../images/birthday/hmevents_birthday4.jpg',
            title: 'america'
        },
        {
            src: '../images/birthday/hmevents_birthday5.jpg',
            title: 'america'
        },
        {
            src: '../images/birthday/hmevents_birthday6.jpg',
            title: 'america'
        },
        {
            src: '../images/birthday/hmevents_birthday7.jpg',
            title: 'america'
        }
        ],
        3: [{
            src: '../images/mall/hmevents_mall_events1.jpg',
            title: 'HM Events 2017 New Year Party',
            alt: 'India'
        },
        {
            src: '../images/mall/hmevents_mall_events2.jpg',
            title: 'india'
        },
        {
            src: '../images/mall/hmevents_mall_events3.jpg',
            title: 'america'
        },
        {
            src: '../images/mall/hmevents_mall_events4.jpg',
            title: 'america'
        },
        {
            src: '../images/mall/hmevents_mall_events5.jpg',
            title: 'america'
        },
        {
            src: '../images/mall/hmevents_mall_events6.jpg',
            title: 'america'
        },
        {
            src: '../images/mall/hmevents_mall_events7.jpg',
            title: 'america'
        },
        {
            src: '../images/mall/hmevents_mall_events8.jpg',
            title: 'america'
        }
        ],
        5: [{
            src: '../images/shows/hmevents_shows1.jpg',
            title: 'HM Events 2017 New Year Party',
            alt: 'India'
        },
        {
            src: '../images/shows/hmevents_shows2.jpg',
            title: 'india'
        },
        {
            src: '../images/shows/hmevents_shows3.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows4.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows5.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows6.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows7.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows8.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows9.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows10.jpg',
            title: 'america'
        },
        {
            src: '../images/shows/hmevents_shows11.jpg',
            title: 'america'
        }
        ],
        6: [{
            src: '../images/shows/hmevents_shows8.jpg',
            title: 'Peter'
        },
        {
            src: '../images/creative/hmevents_creative2.jpg',
            title: 'demo india'
        },
        {
            src: '../images/creative/hmevents_creative3.jpg',
            title: 'demo america'
        },
        ]

    }




    $('.galleryItem').each(function () {
        var id = parseInt($(this).attr('data-group'), 10);

        if (!groups[id]) {
            groups[id] = [];
        }

        groups[id].push(this);
    });
    $.each(groups, function (index) {
        var val = parseInt(index) + 1;
        $(this).magnificPopup({
            items: items[index],
            index: parseInt(index),
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            // Delay in milliseconds before popup is removed
            removalDelay: 300,

            // Class that is added to popup wrapper and background
            // make it unique to apply your CSS animations just to this exact popup
            mainClass: 'mfp-fade',

            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

                tPrev: 'Previous', // title for left button
                tNext: 'Next', // title for right button
            },
            callbacks: {
                open: function () {
                    trackGalleryOpen();
                },
                close: function () {
                    // Will fire when popup is closed
                }
            }
        })

    });

});