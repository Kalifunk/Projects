const CELEBRITY_HASHMAP = {
    "Donald-Trump": {
        imageUrl: "images/Donald_Trump.jpg",
        Tweets: [
            "I would like to extend my best wishes to all, even the haters and losers, on this special date, September 11th.",
            "I have never seen a thin person drinking Diet Coke.",
            "Every time I speak of the haters and losers I do so with great love and affection. They cannot help the fact that they were born fucked up!",
            "It's freezing and snowing in New York--we need global warming!",
            "@cher--I don’t wear a “rug”—it’s mine. And I promise not to talk about your massive plastic surgeries that didn’t work.",
        ],
    },
    "Hillary-Clinton": {
        imageUrl: "images/Hillary_Clinton.jpg",
        Tweets: [
            "Happy birthday to this future president.",
            "Trump just criticized me for preparing for this debate. You know what else I prepared for? Being president.",
            "Delete your account.",
            "People in covfefe houses shouldn't throw covfefe.",
            "This is horrific. We cannot allow this man to become president.",
        ],
    },
    "Joe-Biden": {
        imageUrl: "images/Joe_Biden.jpg",
        Tweets: [
            "It's time for us, for We the People, to come together. Because united, we can — and will — overcome this season of darkness in America.",
            "Folks, we need to listen to our frontline heroes. Wear a mask. It’s not just about you. It’s about keeping your family, neighbors, and fellow citizens safe.",
            "This was almost two months ago. Since then? Tens of thousands more lives lost. A million and a half new cases. The President? Still golfing.",
        ],
    },
    "Kanye-West": {
        imageUrl: "images/Kanye_West.jpg",
        Tweets: [
            "truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth",
            "BILL COSBY INNOCENT !!!!!!!!!",
            "Fur Pillows are hard to actually sleep on",
            "I want to see a tour with Nikki Minaj and Cardi B",
            "7 billion smiles and my own is my favourite. ",
        ],
    },
    "Post-Malone": {
        imageUrl: "images/Post_Malone.jpg",
        Tweets: [
            "garlic bread don't pay the bills",
            "is meatball an fruit",
            "and i would walk 0.2 miles and i would walk 0.2 more, just to be the man to walk 0.4 miles and wound up at your door",
            "running for president... my platform? to stop lighter theft. #1 crime in America and no one seems to care. rates are skyrocketing. this needs to stop.",
            "if u use the stairs instead of the escalator u a snitch",
        ],
    },
    "Lil-Uzi-Vert": {
        imageUrl: "images/Lil_Uzi_Vert.png",
        Tweets: [
            "Read with your Brain not Eyes 👁",
            "Omg these hoes trippin in this hotel 😂😂😂😂😂😂😩😩😩😩😩😩",
            "I haven't had sex in 2 years like end of 2018.",
            "This that free crack 🔺🙏",
            "The Darkest Positive guy in the room 🤘🔥®",
        ],
    },
    "Lady-Gaga": {
        imageUrl: "images/Lady_Gaga.png",
        Tweets: [
            "What's fortnight",
            "f",
            "can you eat too much chinese broccoli",
            "I am so snatched right now I don't know what to do",
            "Me: I need a cigarette.\nMe: No I'll just vape.\nMind: Locate file.DELETE.",
        ],
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
        img.src = "images/gameround/incorrect-cross.png";
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
        document.getElementById(btn).disabled = true;
        if (document.getElementById(btn).value == two_celebrities[0]) {
            addCorrectMarker(true);
            setTimeout(() => {
                removeMarker(true);
                randomAssign();
                document.getElementById(btn).disabled = false;
            }, 1000);
        } else {
            addCorrectMarker(false);
            setTimeout(() => {
                removeMarker(false);
                randomAssign();
                document.getElementById(btn).disabled = false;
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
