$(window).on('beforeunload', function () {
    console.log('here')
    $('body').hide();
    $(window).scrollTop(0, 0);
});

const dataEval = document.querySelectorAll('[dataEval]');
let currentProject = window.localStorage.getItem('currentProject');

let updatedObjName = currentProject.toLowerCase().split(' ').join("");

if (currentProject == null)
    updatedObjName = 'musicplayer';

dataEval.forEach((data) => {
    data.innerHTML = projectData[`${updatedObjName}`][data.getAttribute('dataEval')];
});