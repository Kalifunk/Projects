
Tweets = ["Test tweet1", "Test tweet2","Test tweet3","Test tweet4","Test tweet5"];
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Change tweet";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    var randomTweet = Tweets[Math.floor(Math.random()*Tweets.length)]
    
    document.getElementById("tweet").innerHTML = randomTweet;
});
