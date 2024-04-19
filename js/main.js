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

function submitTerminal(val) {
    console.log(val)
}

var cli = document.getElementById('cli');
var initiatedSudo = false;
var sudoTries = 0;
var accessGranted = false;

cli.oninput = function() {
    this.style.width = ((this.value.length) * 8) + 'px';
};

cli.addEventListener('keypress', function(event) {
    let audio = new Audio('../audio/keyboard.mp3');

    skipBeat = true;

    this.style.width = "0px";

    if (event.key === "Enter") {
        let val = cli.value;
        cli.value = "";

        let terminal = document.getElementById("terminal");

        if (initiatedSudo) {
            if (val === "c0ngr4ts_scr1ptk1ddy") {
                terminal.innerHTML = `
                    <p>Root access granted...</p>
                `
                accessGranted = true;
            } else {
                sudoTries++;
                terminal.innerHTML = `
                    <p>Incorrect password...</p>
                `
            }

            if (sudoTries === 3) {
                terminal.innerHTML = `
                    <p>Too many incorrect attempts...</p>
                `
                initiatedSudo = false;
                sudoTries = 0;
                setTimeout(() => {
                    terminal.innerHTML = "";
                }, 1000);
            }
        }

        if (val === "clear") {
            terminal.innerHTML = "";
        } else if (val === "help") {
            terminal.innerHTML += `
                <ul>
                    <li>ls</li>
                    <li>cd</li>
                    <li>cat</li>
                    <li>clear</li>
                    <li>su</li>
                </ul>
            `;
        } else if ((val === "ls") || (val === "dir")) {
            if (accessGranted) {
                terminal.innerHTML += `
                    <ul>
                        <li>/projects</li>
                        <li>/socials</li>
                        <li>/counter</li>
                        <li>password.txt</li>
                        <li>/admin</li>
                    </ul>
                `;

            } else {
                terminal.innerHTML += `
                    <ul>
                        <li>/projects</li>
                        <li>/socials</li>
                        <li>/counter</li>
                        <li>password.txt</li>
                    </ul>
                `;
            }
        } else if ((val === "cd Projects") || (val === "cd projects")) {
            window.location.href = "../html/projects.html";
        } else if ((val === "cd Socials") || (val === "cd socials")) {
            window.location.href = "../html/socials.html";
        } else if ((val === "cd Counter") || (val === "cd counter")) {
            window.location.href = "../html/counter.html";
        } else if ((val === "cd Admin") || (val === "cd admin")) {
            if (accessGranted) {
                window.location.href = "../html/admin.html";
            } else {
                terminal.innerHTML += `
                    <p>Permission denied...</p>
                `;
            }
        } else if ((val === "cat password.txt")) {
            terminal.innerHTML += `
                <p>c0ngr4ts_scr1ptk1ddy</p>
            `;
        } else if (val === "su root") {
            initiatedSudo = true;

            terminal.innerHTML += `
                <p>Enter root password...</p>
            `;
        } else {
            terminal.innerHTML += `
                <p>Command not found...</p>
            `;
        }

    }
});

cli.addEventListener('keyup', function(event) {
    skipBeat = false;
});