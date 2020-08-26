const CELEBRITY_HASHMAP = {
    "Donald-Trump": {
        imageUrl: "images/Donald_Trump.jpg",
        Tweets: ["Trump1", "Trump2", "Trump3"],
    },
    "Hillary-Clinton": {
        imageUrl: "images/Hillary_Clinton.jpg",
        Tweets: ["Hillary1", "Hillary2"],
    },
    "Joe-Biden": {
        imageUrl: "images/Joe_Biden.jpg",
        Tweets: ["Biden1", "Biden2"],
    },
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomCelebrities() {
    let keyArray = Object.keys(CELEBRITY_HASHMAP);
    keyArray = shuffle(keyArray);
    return keyArray.slice(0, 2);
}

function setCelebrity(index, displayTweet, side, random_tweet) {
    const celebrityName = two_celebrities[index];
    const celebrityImgUrl = CELEBRITY_HASHMAP[celebrityName].imageUrl;
    const celebrityNameFormatted = celebrityName.replace("-", " ");

    document.getElementById(
        side
    ).style.backgroundImage = `url(${celebrityImgUrl})`;

    if (side === "left-half") {
        document.getElementById("btn1").value = celebrityName;
        document.getElementById("btn1").innerHTML = celebrityNameFormatted;
    } else {
        document.getElementById("btn2").value = celebrityName;
        document.getElementById("btn2").innerHTML = celebrityNameFormatted;
    }

    if (displayTweet) {
        document.getElementById("tweet").innerHTML = random_tweet;
    }
}

function displayCelebrity(index, displayThisTweet, isLeftElseRight) {
    const celebrityName = two_celebrities[index];
    const celebrityTweets = CELEBRITY_HASHMAP[celebrityName].Tweets;

    let randomTweet =
        celebrityTweets[Math.floor(Math.random() * celebrityTweets.length)];
    if (isLeftElseRight) {
        setCelebrity(index, displayThisTweet, "left-half", randomTweet);
    } else {
        setCelebrity(index, displayThisTweet, "right-half", randomTweet);
    }
    if (displayThisTweet) {
        return randomTweet;
    } else {
        return null;
    }
}

function pickSide() {
    return Math.random() >= 0.5 ? true : false;
}

function addCorrectMarker(isRightElseWrong) {
    let img = document.createElement("img");
    if (isRightElseWrong) {
        img.src = "images/gameround/correct_tick.png";
        img.id = "correct-img";
    } else {
        img.src = "images/gameround/incorrect-cross.jpg";
        img.id = "incorrect-img";
    }
    var src = document.getElementById("marker");
    src.appendChild(img);
}

function removeMarker(isRightElseWrong) {
    if (isRightElseWrong) {
        var image = document.getElementById("correct-img");
    } else {
        var image = document.getElementById("incorrect-img");
    }
    image.parentNode.removeChild(image);
}

function randomAssign() {
    isLeftElseRight = pickSide();
    two_celebrities = getRandomCelebrities(CELEBRITY_HASHMAP);
    displayCelebrity(0, true, isLeftElseRight);
    displayCelebrity(1, false, !isLeftElseRight);
}

function updateButton(btn) {
    document.getElementById(btn).addEventListener("click", function () {
        if (document.getElementById(btn).value == two_celebrities[0]) {
            addCorrectMarker(true);
            setTimeout(() => {
                removeMarker(true);
                randomAssign();
            }, 1000);
        } else {
            addCorrectMarker(false);
            setTimeout(() => {
                removeMarker(false);
                randomAssign();
            }, 1000);
        }
    });
}

two_celebrities = getRandomCelebrities(CELEBRITY_HASHMAP);
let isLeftElseRight = pickSide();
displayCelebrity(0, true, isLeftElseRight);
displayCelebrity(1, false, !isLeftElseRight);
updateButton("btn1");
updateButton("btn2");
