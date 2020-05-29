var projects = document.querySelectorAll('#section__project button');
var blogCards = document.querySelectorAll('.section__blogs-blogCard');

$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0, 0);
});

// if (performance.navigation.type == 1) {
//     console.info("This page is reloaded");
// } else {
//     console.info("This page is not reloaded");
// }

$('.js--wp-0').waypoint(() => {
    $('.js--wp-0').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('.js--wp-1').waypoint(() => {
    $('.js--wp-1').addClass('animated moveInRightProject');
}, {
    offset: '70%'
});

$('.js--wp-2').waypoint(() => {
    $('.js--wp-2').addClass('animated moveInLeftProject');
}, {
    offset: '70%'
});

$('.js--wp-3').waypoint(() => {
    $('.js--wp-3').addClass('animated moveInRightProject');
}, {
    offset: '70%'
});

projects.forEach(project => {
    project.addEventListener('click', (e) => {
        var currentProjectName = e.currentTarget.getAttribute('dataName');
        window.localStorage.setItem('currentProject', `${currentProjectName}`);
    })
});

blogCards.forEach(card => {
    card.addEventListener('click', (e) => {
        var currentBlogId = card.getAttribute('blogId');
        window.localStorage.setItem('currentBlogId', `${currentBlogId}`);
    })
})

var Books = (function () {
    var $books = $('#bk-list > li > div.bk-book');

    function init() {
        $books.each(function () {
            var $book = $(this),
                $parent = $book.parent(),
                $bookview = $parent.find('button.bk-bookview');

            $parent.find('button.bk-bookback').on('click', function () {
                $bookview.removeClass('bk-active');
                if ($book.data('flip')) {
                    $book.data({ opened: false, flip: false }).removeClass('bk-viewback').addClass('bk-bookdefault');
                } else {
                    $book.data({ opened: false, flip: true }).removeClass('bk-viewinside bk-bookdefault').addClass('bk-viewback');
                }
            });
        });
    }

    return { init: init };
})();

Books.init();