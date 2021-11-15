let keys = document.querySelectorAll(".key");
let whiteKeys = document.querySelectorAll(".key.white");
let blackKeys = document.querySelectorAll(".key.black");




keys.forEach(key => {
    key.addEventListener("click", () => {
        playnote(key);
    });
})


document.addEventListener("keydown", e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE.indexOf(key);
    const blackKeyIndex = BLACK.indexOf(key);
    if (whiteKeyIndex > -1) playnote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playnote(blackKeys[blackKeyIndex]);

})

function playnote(key) {

    let noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.volume = 1.0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    })
}

const WHITE = ['1', '3', '5', '6', '8', '0', '=', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'z', 'c', 'b', 'n', ',', '/', "'"];
let BLACK = ['2', '4', '7', '9', '-', 'w', 'e', 't', 'y', 'u', 'x', 'v', 'm', '.', ';'];