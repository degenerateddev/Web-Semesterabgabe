var caretDisplayed = true;
var caret = document.getElementById('caret');
var cli = document.getElementById('cli');
var skipBeat = false;
var currentValue = "";

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

        // exclude special keys like tab, shift, etc.
        if (event.key === "Tab" || event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "CapsLock" || event.key === "Meta" || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Escape") {
            return;
        }

        if (event.key === "Backspace") {
            currentValue = currentValue.slice(0, -1);
            cli.innerText = currentValue;
            return;

        } else if (event.key === "Enter") {
            currentValue = "";
            return;
        
        } else if (event.key === " ") {
            currentValue += " ";

        } else {
            currentValue += event.key;
        }

        cli.innerText = currentValue;
        console.log(currentValue);

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
    let width = currentValue.length * 12;
    cli.style.width = width + "px";
}