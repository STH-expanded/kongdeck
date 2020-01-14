window.onload = () => {
    var data = JSON.parse(document.getElementById("data").value);
    data.forEach(elem => {
        for (let [key, value] of Object.entries(elem)) {
            var div = document.createElement("p");
            div.innerHTML = "key:" + key + " value:" + value;
            document.body.appendChild(div)
        }
    });
}