var offset = 0;
setInterval(() => {
    offset = (offset - 1) % 512;
    document.getElementById("container").style.backgroundPosition = offset + 'px 0px';
}, 10);