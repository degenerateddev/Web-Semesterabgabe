window.onload = function() {
    var date = new Date().getFullYear();
    document.getElementById('date').textContent = date;
}

var caretDisplayed = true;
var caret = document.getElementById('caret');
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
}

cli.oninput = function() {
    this.style.width = ((this.value.length) * 12) + 'px';

    // play typing sound audio file
    let random = Math.floor(Math.random() * 3) + 1;
    let audio = new Audio('../audio/' + random.toString() + ".wav");
    audio.play();
};

cli.addEventListener('keydown', function(event) {
    skipBeat = true;
    caret.style.display = "none";
});

cli.addEventListener('keyup', function(event) {
    skipBeat = false;
});