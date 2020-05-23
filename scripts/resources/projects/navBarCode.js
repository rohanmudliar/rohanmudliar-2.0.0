const projectNavBar = document.getElementById('projectNavBar');
const dataEval = document.querySelectorAll('[dataEval]');
let currentProject = window.localStorage.getItem('currentProject');

if (currentProject == null)
    currentProject = musicPlayer;

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        projectNavBar.style.top = "0";
    } else {
        if (projectNavBar.parentElement.style.overflowY != 'hidden')
            projectNavBar.style.top = `-${projectNavBar.offsetHeight}px`;
    };
    prevScrollpos = currentScrollPos;
};

dataEval.forEach((data) => {
    data.innerHTML = (eval(currentProject))[data.getAttribute('dataEval')]
});