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

rt = pickRandomTweet(tweets);

function pickRandomTweet(tweets) {
    var randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    document.getElementById("tweet").innerHTML = randomTweet;
    return randomTweet;
}

function getTweetOwner(tweet) {
    for (var i in celebrities) {
        if (celebrities[i].includes(tweet)) {
            return i;
        }
    }
}

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
