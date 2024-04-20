var caretDisplayed = true;
var caret = document.getElementById('caret');
var cli = document.getElementById('cli');
var skipBeat = false;

window.onload = function() {
    var date = new Date().getFullYear();
    document.getElementById('year').innerText = "© " + date;

    setInterval(() => {
        document.getElementById("time").innerText = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "  " + new Date().getFullYear() + ":" + new Date().getMonth() + ":" + new Date().getDate();
    }, 1000);

    setInterval(() => {
        if (skipBeat === false) {
            caretDisplayed = !caretDisplayed;

            if (caretDisplayed) {
                caret.style.display = "block";
            } else {
                caret.style.display = "none";
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        let random = Math.floor(Math.random() * 3) + 1;
        let audio = new Audio('../audio/' + random.toString() + ".wav");
        audio.play();

        skipBeat = true;
        caret.style.display = "none";

        if (event.key === "Backspace") {
            cli.innerText = cli.innerText.slice(0, -1);
        };

        resetCLIWidth();
    });
    
    document.addEventListener('keyup', function(event) {
        skipBeat = false;
    });

    document.addEventListener('keypress', function(event) {
        resetCLIWidth();
    });
}

function resetCLIWidth() {
    let width = cli.innerText.length * 12;
    cli.style.width = width + "px";
}