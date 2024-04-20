window.onload = function() {
    var date = new Date().getFullYear();
    document.getElementById('date').textContent = date;

    setInterval(() => {
        /* let time = new Date(2024, 12, 24) - new Date();
        let diffDays = Math.round(time / (1000 * 60 * 60 * 24));
        let diffHours = Math.round((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let diffMinutes = Math.round((time % (1000 * 60 * 60)) / (1000 * 60));
        
        window.document.getElementById("time").innerText = diffDays + ":" + diffHours + ":" + diffMinutes;*/
        
        document.getElementById("time").innerText = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "  " + new Date().getFullYear() + ":" + new Date().getMonth() + ":" + new Date().getDate();
    }, 1000);
}

var caretDisplayed = true;
var caret = document.getElementById('caret');
var cli = document.getElementById('cli');
var skipBeat = false;

window.onload = function() {
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