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