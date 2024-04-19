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
};

cli.addEventListener('keyup', function(event) {
    skipBeat = false;
});