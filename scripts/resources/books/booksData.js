$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0, 0);
});

var booksData = [
    {
        "bookName": "All Rights Reserved For You",
        "authorName": "Suddeep Nagarkar",
        "fontImgSrc": "AllRightsReservedForYou-front",
        "backImgSrc": "AllRightsReservedForYou-back",
        "bookColor": "#37BFB3",
        "ISBN_13": "9789353050399",
        "id": "upxYDwAAQBAJ"
    },
    {
        "bookName": "The Alchemist",
        "authorName": "Paulo Coelho",
        "fontImgSrc": "TheAlchemist-front",
        "backImgSrc": "TheAlchemist-back",
        "bookColor": "#EA4520",
        "ISBN_13": "9780062416216",
        "id": "FzVjBgAAQBAJ",
    },
    {
        "bookName": "Wake Up Life Is Calling",
        "authorName": "Preeti Shenoy",
        "fontImgSrc": "WakeUpLifeIsCalling-front",
        "backImgSrc": "WakeUpLifeIsCalling-back",
        "bookColor": "#0E6E90",
        "ISBN_13": "9789387022607",
        "id": "BZ6PDwAAQBAJ",
    },
    {
        "bookName": "Who Will Cry When You Die",
        "authorName": "Robin Sharma",
        "fontImgSrc": "WhoWillCryWhenYouDie-front",
        "backImgSrc": "WhoWillCryWhenYouDie-back",
        "bookColor": "#00B9F1",
        "ISBN_13": "9788179922323",
        "id": "w0VfGUdngHQC",
    },
    {
        "bookName": "Life Is What You Make It",
        "authorName": "Preeti Shenoy",
        "fontImgSrc": "LifeIsWhatYouMakeIt-front",
        "backImgSrc": "LifeIsWhatYouMakeIt-back",
        "bookColor": "#FCC358",
        "ISBN_13": "9789380349305",
        "id": "jJ2hDwAAQBAJ",
    },
    {
        "bookName": "How To Unleash Your True Potential",
        "authorName": "Shivam",
        "fontImgSrc": "HowToUnleashYourTruePotential-front",
        "backImgSrc": "HowToUnleashYourTruePotential-back",
        "bookColor": "#F1EB31",
        "ISBN_13": "9781946641076",
        "id": "_vgnDgAAQBAJ",
    },
    {
        "bookName": "The Monk Who Sold His Ferrari",
        "authorName": "Robin Sharma",
        "fontImgSrc": "TheMonkWhoSoldHisFerrari-front",
        "backImgSrc": "TheMonkWhoSoldHisFerrari-back",
        "bookColor": "#F27822",
        "ISBN_13": "9780007385614",
        "id": "jeSQNXk4ug8C",
    },
    {
        "bookName": "How Successful People Grow",
        "authorName": "John C Maxwell",
        "fontImgSrc": "HowSuccessfulPeopleGrow-front",
        "backImgSrc": "HowSuccessfulPeopleGrow-back",
        "bookColor": "#005F73",
        "ISBN_13": "9781455583690",
        "id": "AuxDAwAAQBAJ",
    },
    {
        "bookName": "Power Of Your Subconscious Mind",
        "authorName": "Joseph Murphy",
        "fontImgSrc": "PowerOfYourSubconsciousMind-front",
        "backImgSrc": "PowerOfYourSubconsciousMind-back",
        "bookColor": "#1DA9CC",
        "ISBN_13": "9789387944008",
        "id": "A99qDwAAQBAJ",
    },
    {
        "bookName": "Thinking For A Change",
        "authorName": "John C Maxwell",
        "fontImgSrc": "ThinkingForAChange-front",
        "backImgSrc": "ThinkingForAChange-back",
        "bookColor": "#314488",
        "ISBN_13": "9780759527911",
        "id": "4c03AQAAQBAJ",
    },
];

var templateData = '';
booksData.forEach((data, i) => {
    templateData += `<li>
                        <div class="bk-book book-1 bk-bookdefault">
                            <div class="bk-front">
                                <div class="bk-cover-back"></div>
                                <div class="bk-cover">
                                    <img style="width: 100%; height: 100%;"
                                        src="../../images/Books/${data.fontImgSrc}.jpg" alt="${data.bookName}">
                                </div>
                            </div>
                            <div class="bk-back">
                                <img style="width: 100%; height: 100%;" src="../../images/Books/${data.backImgSrc}.jpg"
                                    alt="${data.bookName}">
                            </div>
                            <div class="bk-right"></div>
                            <div class="bk-left" style="background-color: ${data.bookColor}">
                                <h2>
                                    <span></span>
                                    <span>${data.authorName}</span>
                                </h2>
                            </div>
                            <div class="bk-top"></div>
                            <div class="bk-bottom"></div>
                        </div>
                        <div class="bk-info">
                            <button class="bk-bookback">Flip</button><button class="detailsBtn ${i}">Details</button>
                        </div>
                    </li>`
});

document.getElementById('bk-list').innerHTML = templateData;

var DisplayBookData = document.querySelector('.DisplayBookData'),
    span = document.getElementsByClassName("close")[0],
    modal = document.getElementById("myModal"),
    buttonDom = document.querySelectorAll('.detailsBtn'),
    id;

buttonDom.forEach(button => {
    button.onclick = function () {
        id = button.classList[1]
        getData();
        modal.style.display = "block";
    };
});

async function getData() {
    const postResponse = await fetch(`https://www.googleapis.com/books/v1/volumes/${booksData[id].id}`);
    const postData = await postResponse.json();
    console.log(postData);

    var description = `
    <div class="DisplayBookData__imgContainer">
        <img src="${postData.volumeInfo.imageLinks.smallThumbnail}" alt="${postData.volumeInfo.title}">
    </div>
    <div class="DisplayBookData__data">
        <p class="DisplayBookData__data-title">${postData.volumeInfo.title}</p>
        <p class="DisplayBookData__data-author">${postData.volumeInfo.authors[0]}</p>
        <div class="DisplayBookData__data-desp">
            ${postData.volumeInfo.description.split('<br>').join("")}
        </div>
    </div>
    `;

    DisplayBookData.innerHTML = description;
};

span.onclick = function () {
    modal.style.display = "none";
    resetModalData();
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetModalData();
    };
};

function resetModalData() {
    var description = `<div class="DisplayBookData__imgContainer"></div>`
    DisplayBookData.innerHTML = description;
};