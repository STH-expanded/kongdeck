window.onload = () => {
    var tweets = Array.from(JSON.parse(document.getElementById("list").value));
    var tweetList = document.getElementById("tweetList");

    tweets.forEach(tweet => {
        var div = document.createElement("div");
        div.className = 'tweetElement';
        div.innerHTML = tweet.text;
        tweetList.appendChild(div);
    });

    document.getElementById("submit").onclick = () =>{
        var message = document.querySelector('input[name="tweet"]:checked') ? document.querySelector('input[name="tweet"]:checked').value : null;
        if (!message) alert("Click a message to send it on the KongDeck twitter account !");
    }
}