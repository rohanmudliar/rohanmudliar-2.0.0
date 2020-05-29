const individualNavBar = document.getElementById('individualNavBar');
let prevScrollposInd = window.pageYOffset;

$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0, 0);
});

window.onscroll = function () {
    let currentScrollPosInd = window.pageYOffset;
    if (prevScrollposInd > currentScrollPosInd) {
        individualNavBar.style.top = "0";
    } else {
        if (individualNavBar.parentElement.style.overflowY != 'hidden')
            individualNavBar.style.top = `-${individualNavBar.offsetHeight}px`;
    };
    prevScrollposInd = currentScrollPosInd;
};