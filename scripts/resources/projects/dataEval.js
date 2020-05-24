const dataEval = document.querySelectorAll('[dataEval]');
let currentProject = window.localStorage.getItem('currentProject');

if (currentProject == null)
    currentProject = musicPlayer;
dataEval.forEach((data) => {
    data.innerHTML = (eval(currentProject))[data.getAttribute('dataEval')]
});