/*
const tweets = [
    "Test tweet1",
    "Test tweet2",
    "Test tweet3",
    "Test tweet4",
    "Test tweet5",
];

const celebrities = {
    Donald_Trump: ["Test tweet1", "Test tweet2", "Test tweet3"],
    Hillary_Clinton: ["Test tweet4", "Test tweet5"],
};
*/

let celebrityHashmap = {
    "Donald-Trump": {
        imageUrl: "images/Donald_trump.jpg",
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
    picked_celebrities = [];
    let keyArray = Object.keys(celebrityHashmap);
    keyArray = shuffle(keyArray);
    for (var i = 0; i < 2; ++i) {
        let current = keyArray[i];
        picked_celebrities.push(current);
    }
    return picked_celebrities;
}

two_celebrities = getRandomCelebrities(celebrityHashmap);

function displayCelebrity(index, displayThisTweet, isLeftElseRight) {
    const celebrityName = two_celebrities[index];
    const celebrityImgUrl = celebrityHashmap[celebrityName].imageUrl;
    const celebrityTweets = celebrityHashmap[celebrityName].Tweets;
    const celebrityNameFormatted = celebrityName.replace("-", " ");

    let randomTweet =
        celebrityTweets[Math.floor(Math.random() * celebrityTweets.length)];

    if (isLeftElseRight) {
        document.getElementById(
            "left-half"
        ).style.backgroundImage = `url(${celebrityImgUrl}`;
        document.getElementById("btn1").value = celebrityName;
        document.getElementById("btn1").innerHTML = celebrityNameFormatted;
        if (displayThisTweet) {
            document.getElementById("tweet").innerHTML = randomTweet;
        }
    } else {
        document.getElementById(
            "right-half"
        ).style.backgroundImage = `url(${celebrityImgUrl}`;
        document.getElementById("btn2").value = celebrityName;
        document.getElementById("btn2").innerHTML = celebrityNameFormatted;
        if (displayThisTweet) {
            document.getElementById("tweet").innerHTML = randomTweet;
        }
    }
    if (displayThisTweet) {
        return randomTweet;
    } else {
        return null;
    }
}

function pickSide() {
    let decider = null;
    let side_picked = Math.round(Math.random());

    if (side_picked) {
        /*right side */
        decider = false;
    } else {
        decider = true;
    }
    return decider;
}

let isLeftElseRight = pickSide();

displayCelebrity(0, true, isLeftElseRight);
displayCelebrity(1, false, !isLeftElseRight);

/*
    let randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    document.getElementById("tweet").innerHTML = randomTweet;
    return randomTweet;
    */

function updateButton(btn) {
    document.getElementById(btn).addEventListener("click", function () {
        //pickRandomTweet(tweets);

        if (document.getElementById(btn).value == two_celebrities[0]) {
            alert("You guessed correctly!");
            isLeftElseRight = pickSide();
            two_celebrities = getRandomCelebrities(celebrityHashmap);
            displayCelebrity(0, true, isLeftElseRight);
            displayCelebrity(1, false, !isLeftElseRight);
        } else {
            alert("You guessed incorrectly!");
            isLeftElseRight = pickSide();
            two_celebrities = getRandomCelebrities(celebrityHashmap);
            displayCelebrity(0, true, isLeftElseRight);
            displayCelebrity(1, false, !isLeftElseRight);
        }
    });
}

updateButton("btn1");
updateButton("btn2");
/*
document.getElementById("btn1").addEventListener("click", function () {
    //pickRandomTweet(tweets);

    var tweeter = getTweetOwner(rt);
    if (document.getElementById("btn1").value == tweeter) {
        alert("You guessed correctly!");
    } else {
        alert("You guessed incorrectly!");
    }
    rt = pickRandomTweet(tweets);
});

document.getElementById("btn2").addEventListener("click", function () {
    //pickRandomTweet(tweets);
    var tweeter = getTweetOwner(rt);
    if (document.getElementById("btn2").value == tweeter) {
        alert("You guessed correctly!");
    } else {
        alert("You guessed incorrectly!");
    }
    rt = pickRandomTweet(tweets);
});
*/
