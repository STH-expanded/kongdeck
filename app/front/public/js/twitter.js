window.onload = () => {

    document.getElementById("submit").onclick = () =>{
        var message = document.querySelector('input[name="tweet"]:checked') ? document.querySelector('input[name="tweet"]:checked').value : null;
        if (message) {
            fetch("http://localhost:3003/status", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({kong: document.getElementById("kong_id"), message:message })
            }).then(response => {
                response.status === 200 ? response.json().then(data => location.reload()) : console.log('ERROR', response.status);
            }).catch(err => console.log('ERROR', err));
        }
        else alert("Click a message to send it on the KongDeck twitter account !");
    }

    var dislayTweetList = tweets => {
        var tweetList = document.getElementById("tweetList");
        tweetList.style.backgroundImage = null;
        tweetList.innerHTML = "";

        tweets.forEach(tweet => {
            var div = document.createElement("div");
            div.innerHTML = tweet.message;
            tweetList.appendChild(div);
        });
    }

    fetch("http://localhost:3003/list/" + document.getElementById("list_id"), { method: "GET" }).then(response => {
        response.status === 200 ? response.json().then(data => dislayTweetList(data)) : console.log('ERROR', response.status);
    }).catch(err => console.log('ERROR', err));
}