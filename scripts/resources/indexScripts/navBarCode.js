const navBar = document.getElementById('navBar');
const hamburger = document.getElementById('navBar__links-icon');
const mobileNavBar = document.getElementById('mobileNavBar');
const mobileNavLinks = document.querySelectorAll('#mobileNavBar li');
const headerLogo = document.getElementById('headerLogo');

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        if (navBar.parentElement.style.overflowY != 'hidden')
            navBar.style.top = `-${navBar.offsetHeight}px`;
    }
    prevScrollpos = currentScrollPos;
}

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobileNavBar.getBoundingClientRect().left != 0) {
        mobileNavBar.style.left = 0;
        navBar.parentElement.style.overflowY = 'hidden';
        hamburger.children[0].classList.add('open');
        // navBar.style.top = `+${navBar.offsetHeight}px`;
    } else {
        mobileNavBar.style.left = '100%';
        navBar.parentElement.style.overflowY = 'auto';
        hamburger.children[0].classList.remove('open');
        // navBar.style.top = `-${navBar.offsetHeight}px`;
    };
    // mobileNavBar.style.paddingTop = navBar.getBoundingClientRect().height + 'px';
})


$('.mobileNavBar__links li a, .navBar__links li a, #headerLogo').click(function () {
    navBar.parentElement.style.overflowY = 'auto';
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 0);
    mobileNavBar.style.left = '100%';
    hamburger.children[0].classList.remove('open')
    return false;
});