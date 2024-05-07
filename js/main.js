var caretDisplayed = true;
var caret = document.getElementById('caret');
var cli = document.getElementById('cli');
var terminal = document.getElementById('terminal');
var skipBeat = false;
var currentValue = "";
var initiatedSudo = false;
var sudoTries = 0;

window.onload = function() {
    var lineStart = document.getElementById('cli-linestart');
    var isRoot = document.cookie.includes("sudoAccess=1");

    if (isRoot) {
        lineStart.innerText = "root@terminal>";

    } else {
        lineStart.innerText = "default@terminal>";
    }

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

        // exclude CTRL + C
        if (event.ctrlKey && event.key === "c") {
            return;
        }

        if (event.key === "Backspace") {
            currentValue = currentValue.slice(0, -1);
            cli.innerText = currentValue;
            return;

        } else if (event.key === "Enter") {
            if (initiatedSudo) {
                if (currentValue === "c0ngr4ts_scr1ptk1ddy") {
                    terminal.innerHTML = `
                        <p>Root access granted...</p>
                    `
                    document.cookie = "sudoAccess=1";
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
                    document.cookie = "sudoAccess=0";
                    initiatedSudo = false;
                    sudoTries = 0;
                    setTimeout(() => {
                        terminal.innerHTML = "";
                    }, 1000);
                }
            }

            if (currentValue === "I CAN SEE YOU") {
                terminal.innerHTML += `
                    <p style="color: red;">I CAN SEE YOU</p>
                `;
    
            } else if (currentValue === "clear") {
                terminal.innerHTML = "";
    
            } else if (currentValue === "help") {
                terminal.innerHTML += `
                    help: Display information about builtin commands.
                        <table style="padding: 50px;">
                            <thead>
                                <tr>
                                    <th>Options:</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>- ls</td>
                                <td>list the current directories' content</td>
                            </tr>
                            <tr>
                                <td>- cd</td>
                                <td>navigate into a different directory</td>
                            </tr>
                            <tr>
                                <td>- cat</td>
                                <td>display the content of a file</td>
                            </tr>
                            <tr>
                                <td>- clear</td>
                                <td>clear the terminal</td>
                            </tr>
                            <tr>
                                <td>- su</td>
                                <td>switch to different user</td>
                            </tr>
                        </table>
                    `;
            } else if (currentValue === "su root") {
                // maybe set cookie here so people can't just navigate to /admin
                initiatedSudo = true;
    
                terminal.innerHTML += `
                    <p>Enter root password...</p>
                `;
            } else if (currentValue === "c0ngr4ts_scr1ptk1ddy") {
                
            } /*else {
                terminal.innerHTML += `
                    <p>Command not found...</p>
                `;
            }*/
            
            currentValue = "";
            terminal.scrollTop = terminal.scrollHeight;

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