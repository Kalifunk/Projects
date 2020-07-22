
const tweets = ["Test tweet1", "Test tweet2","Test tweet3","Test tweet4","Test tweet5"];

pickRandomTweet(tweets)

function pickRandomTweet(tweets) {
    var randomTweet = tweets[Math.floor(Math.random()*tweets.length)]
    document.getElementById("tweet").innerHTML = randomTweet;
}

// 3. Add event handler
document.getElementById("btn1").addEventListener("click", function(){
    pickRandomTweet(tweets)
});

