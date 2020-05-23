var projects = document.querySelectorAll('#section__project > a > div')

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
        if (e.currentTarget.className.split('-')[1] == 'first')
            window.localStorage.setItem('currentProject', 'musicPlayer');
        else if (e.currentTarget.className.split('-')[1] == 'second')
            window.localStorage.setItem('currentProject', 'chromeExtension');
        else if (e.currentTarget.className.split('-')[1] == 'third')
            window.localStorage.setItem('currentProject', 'pokeGame');
    })
})