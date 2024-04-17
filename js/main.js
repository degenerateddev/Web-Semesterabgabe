window.onload = function() {
    var date = new Date().getFullYear();
    document.getElementById('date').textContent = date;
}

function submitTerminal(val) {
    console.log(val)
}

var cli = document.getElementById('cli');
var initiatedSudo = false;
var sudoTries = 0;
document.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        let val = cli.value;
        cli.value = "";

        let terminal = document.getElementById("terminal");

        if (initiatedSudo) {
            if (val === "c0ngr4ts_scr1ptk1ddy") {
                terminal.innerHTML = `
                    <p>Root access granted...</p>
                `
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
        } else if ((val === "ls") || (val === "dir")) {
            terminal.innerHTML = `
                <ul>
                    <li>Projects</li>
                    <li>Socials</li>
                    <li>Counter</li>
                    <li>password.txt</li>
                </ul>
            `;
        } else if ((val === "cd Projects") || (val === "cd projects")) {
            window.location.href = "../html/projects.html";
        } else if ((val === "cd Socials") || (val === "cd socials")) {
            window.location.href = "../html/socials.html";
        } else if ((val === "cd Counter") || (val === "cd counter")) {
            window.location.href = "../html/counter.html";
        } else if ((val === "cat password.txt")) {
            terminal.innerHTML = `
                <p>c0ngr4ts_scr1ptk1ddy</p>
            `;
        } else if (val === "su root") {
            initiatedSudo = true;

            terminal.innerHTML = `
                <p>Enter root password...</p>
            `;
        } else {
            terminal.innerHTML = `
                <p>Command not found...</p>
            `;
        }

    }
});