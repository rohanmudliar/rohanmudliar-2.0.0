// https://www.browserling.com/tools/random-hex
var randomHexCode = [
    '6af9cfa929c39', '2e7aa50309ef8', 'df33c1a774f05', '1e36b54f8b7c7', '2c9ccc9192356',
    '06a331c001253', '40500afa6a74e', '9e7de782f5c8b', 'c30ea2e359337', '548286f0b00b4',
    '6e560ee17e984', '958ecc459f943', '6ecd7564a1c6b', '6f9fbdfdfec93', 'c8115be1b06e5',
    '557db777e7aae', 'b321149c96ae4', '6c43897db6b36', '5bae6789622a8', 'd0d6293a346fe',
    'e157294d2c426', '7f801a898c373', 'e70962df97770', 'c4cdf4c1b3b80', 'b937777ff5822',
    '0eebca9bdfa19', '450715c9fbc12', '3e6979b2caaea', 'f674cc0960af3', 'd1403e8ed5bd2',
]


var blogData = [
    //     {
    //         "blogId": "7d3419eeea0f6",
    //         "title": "HEllo TItle 1 ready",
    //         "headingImgSrc": "../../images/bg_canvas-dark.jpg",
    //         "altAttrForHeadingImg": "YooHoooo",
    //         "updatedOn": "Updated: 05/18/20 | May 18th, 2020",
    //         "body": `Lorem ipsum dolor sit`
    //     }
];

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

db.collection("blogs").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        blogData.push(doc.data())
    });
}).then(() => {
    var displayBlogData = document.querySelector('.individualBlog');
    let currentBlogId = window.localStorage.getItem('currentBlogId');

    if (currentBlogId == null)
        currentBlogId = blogData[0].blogId;

    var currentBlogData = blogData.find(el => {
        return el.blogId == currentBlogId
    });

    const { title, headingImgSrc, altAttrForHeadingImg, updatedOn, body } = currentBlogData

    var data = `
    <!-- Title -->
    <div class="individualBlog__heading">
        <p>${title}</p>
    </div>

    <!-- Img -->
    <div class="individualBlog__img">
        <img src="${headingImgSrc}" alt="${altAttrForHeadingImg}">
    </div>

    <!-- Update on -->
    <div class="individualBlog__updatedOn">
        <p>${updatedOn}</p>
    </div>

    <!-- Body -->
        <div class="individualBlog__body">
        ${body}
    </div>
    `;

    displayBlogData.innerHTML = data;
})

// blogData.forEach(data => {
    // db.collection("blogs").add(blogData[i])
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //     });
// })
