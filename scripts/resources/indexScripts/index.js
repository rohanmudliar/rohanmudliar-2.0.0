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

var nameData = document.getElementById('name');
var emailData = document.getElementById('email');
var subjectData = document.getElementById('subject');
var textAreaData = document.getElementById('textarea');
var submitData = document.getElementById('submit');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk4LB28pNG2a7F72shcXArygiM3PHmW30",
    authDomain: "portfolio-a18ee.firebaseapp.com",
    databaseURL: "https://portfolio-a18ee.firebaseio.com",
    projectId: "portfolio-a18ee",
    storageBucket: "portfolio-a18ee.appspot.com",
    messagingSenderId: "816112998185",
    appId: "1:816112998185:web:ffa7a625a9785127dd8938",
    measurementId: "G-DDZ1473NGM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

submitData.addEventListener('click', (e) => {
    e.preventDefault();
    var x = emailData.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (nameData.value == '' || emailData.value == '' || submitData.value == '' || textAreaData == '') {
        alert("Please fill all details");
        return false;
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    } else {
        var data = {
            date: Date(Date.now()).toString(),
            name: nameData.value,
            email: emailData.value,
            subject: subjectData.value,
            message: textAreaData.value,
        }

        db.collection("contact").add(data)
            .then(function (docRef) {
                // console.log("Document written with ID: ", docRef.id);
                window.location.reload();
            })
            .catch(function (error) {
                // console.error("Error adding document: ", error);
                nameData.value = emailData.value = subjectData.value = textAreaData.value = '';
                alert('Please renter your data.')
            });
    }
})