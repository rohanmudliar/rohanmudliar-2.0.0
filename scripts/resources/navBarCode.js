var navBar = document.getElementById('navBar');

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = `-${navBar.offsetHeight}px`;
    }
    prevScrollpos = currentScrollPos;
}

$('.js--wp-0').waypoint(() => {
    $('.js--wp-0').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-1').waypoint(() => {
    $('.js--wp-1').addClass('animated moveInRightProject');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(() => {
    $('.js--wp-2').addClass('animated moveInLeftProject');
}, {
    offset: '50%'
});

$('.js--wp-3').waypoint(() => {
    $('.js--wp-3').addClass('animated moveInRightProject');
}, {
    offset: '50%'
});

const hamburger = document.getElementById('navBar__links-icon');
const mobileNavBar = document.getElementById('mobileNavBar');
const mobileNavLinks = document.querySelectorAll('#mobileNavBar li');
const headerLogo = document.getElementById('headerLogo');

mobileNavLinks.forEach(li => {
    li.addEventListener('click', () => {
        mobileNavBar.style.left = '100%';
    })
})

headerLogo.addEventListener('click', function () {
    mobileNavBar.style.left = '100%';
})

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobileNavBar.getBoundingClientRect().left != 0) {
        mobileNavBar.style.left = 0;
    } else {
        mobileNavBar.style.left = '100%';
    }
    mobileNavBar.style.paddingTop = navBar.getBoundingClientRect().height + 'px';
})