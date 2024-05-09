var caretDisplayed = true;
var caret = document.getElementById('caret');
var cli = document.getElementById('cli');
var terminal = document.getElementById('terminal');
var skipBeat = false;
var currentValue = "";

var initiatedSudo = false;
var initiatedSecret = false;

var sudoTries = 0;
var secretTries = 0;

window.onload = function() {
    var lineStart = document.getElementById('cli-linestart');

    if (document.cookie.includes("sudoAccess=1")) {
        lineStart.innerText = "root@terminal>";
    
    } else if (document.cookie.includes("secretAccess=1")) {
        lineStart.innerText = "thewatcher@terminal>";

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
                    document.cookie = "secretAccess=0";
                    window.location.reload();
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

            if (initiatedSecret) {
                if (currentValue === "eyesonyou") {
                    terminal.innerHTML = `
                        <p>Access granted...</p>
                    `
                    document.cookie = "secretAccess=1";
                    document.cookie = "sudoAccess=0";
                    window.location.reload();
                } else {
                    secretTries++;
                    terminal.innerHTML = `
                        <p>Incorrect password...</p>
                    `
                }
    
                if (secretTries === 3) {
                    terminal.innerHTML = `
                        <p>Too many incorrect attempts...</p>
                    `
                    document.cookie = "secretAccess=0";
                    initiatedSecret = false;
                    secretTries = 0;
                    setTimeout(() => {
                        terminal.innerHTML = "";
                    }, 1000);
                }
            }

            if (currentValue.toLowerCase() === "i can see you") {
                terminal.innerHTML = 
                `
                    <pre style="color: red;">
                    88                                           
                    88                                           
                    88                                           
                    88                                           
                    88                                           
                    88                                           
                    88                                           
                    88                                           
                                                                 
                                                                 
                                                                 
                      ,ad8888ba,         db         888b      88 
                     d8"'    ""8b       d88b        8888b     88 
                    d8'                d8''8b       88 '8b    88 
                    88                d8'  '8b      88  '8b   88 
                    88               d8YaaaaY8b     88   '8b  88 
                    Y8,             d8""""""""8b    88    '8b 88 
                     Y8a.    .a8P  d8'        "8b   88     '8888 
                      '"Y8888Y"'  d8'          '8b  88      '888 
                                                                 
                                                                 
                                                                 
                     ad88888ba   88888888888  88888888888        
                    d8"     "8b  88           88                 
                    Y8,          88           88                 
                    "Y8aaaaa,    88aaaaa      88aaaaa            
                      """"""8b,  88"""""      88"""""            
                            "8b  88           88                 
                    Y8a     a8P  88           88                 
                     "Y88888P"   88888888888  88888888888        
                                                                 
                                                                 
                                                                 
                    8b        d8  ,ad8888ba,    88        88     
                     Y8,    ,8P  d8"'    '"8b   88        88     
                      Y8,  ,8P  d8'        '8b  88        88     
                       "8aa8"   88          88  88        88     
                        '88'    88          88  88        88     
                         88     Y8,        ,8P  88        88     
                         88      Y8a.    .a8P   Y8a.    .a8P     
                         88       '"Y8888Y"'     '"Y8888Y"'
                    </pre/>
                `
                
                setTimeout(() => {
                    var asciiArts = [
                        `
                        <pre style="color: red;">
                                                ....xxxxx...,..
                                            ..XXXXXXXXXXXXXXXXXXXXx. 
                                        ..XXXXXXXXWWWWWWWWWWWWWWWWXXXX. 
                                        ...XXXXXWWW"   W88N88@888888WWWWWXX.  
                                    ...XXXXXXWWW"   thewatcher:eyesonyou WMBX.   
                                ..XXXXXXXXWWW"     M88888WWRWWWMW8oo88M   WWMX.  
                            "XXXXXXXXXXXXWW"       WN8888WWWWW  W8@@@8M    BMBRX.   
                            XXXXXXXX=MMWW":  .      W8N888WWWWWWWW88888W      XRBRXX. 
                            ""XXXXXMM::::. .        W8@889WWWWWM8@8N8W      . . :RRXx. 
                                    MMM::.:.  .      W888N89999888@8W      . . ::::"RXV  
                                        MMMm::.  .      WW888N88888WW     .  . mmMMMMMRXx
                                        ""MMmm .  .       WWWWWWW   . :. :,miMM"""  
                                            ""MMMMmm . .  .  .   ._,mMMMM""" 
                                                    ""MMMMMMMMMMMMM""" 
                        </pre/>
                        `,
                        `
                        <pre style="color: red;">
                                                ....xxxxx...,..
                                            ..XXXXXXXXXXXXXXXXXXXXx. 
                                        ..XXXXXXXXWWWWWWWWWWWWWWWWXXXX. 
                                        ...XXXXXWXXWWWWWWWWWWWWWWWWWWWWWWXX.  
                                    ...XXXXXXWWXXWWWWWWWWWWWWWWWWWWWWWWWWWMBX.   
                                ..XXXXXXXXWWW"     M88888WWRWWWMW8oo88M   WWMX.  
                            "XXXXXXXXXXXXWW"       WN8888WWWWW  W8@@@8M    BMBRX.   
                            XXXXXXXX=MMWW":  .      W8N888WWWWWWWW88888W      XRBRXX. 
                            ""XXXXXMM::::. .        W8@889WWWWWM8@8N8W      . . :RRXx. 
                                    MMM::.:.  .      W888N89999888@8W      . . ::::"RXV  
                                        MMMm::.  .      WW888N88888WW     .  . mmMMMMMRXx
                                        ""MMmm .  .       WWWWWWW   . :. :,miMM"""  
                                            ""MMMMmm . .  .  .   ._,mMMMM""" 
                                                    ""MMMMMMMMMMMMM""" 
                        </pre/>
                        `,
                        `
                        <pre style="color: red;">
                                                ....xxxxx...,..
                                            ..XXXXXXXXXXXXXXXXXXXXx. 
                                        ..XXXXXXXXWWWWWWWWWWWWWWWWXXXX. 
                                        ...XXXXXWXXWWWWWWWWWWWWWWWWWWWWWWXX.  
                                    ...XXXXXXWWXXWWWWWWWWWWWWWWWWWWWWWWWWWMBX.   
                                ..XXXXXXXXWWWXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWMX.  
                            "XXXXXXXXXXXXWWXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBMBRX.   
                            XXXXXXXX=MMWWXXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXRBRXX. 
                            ""XXXXXMMXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWRRXx. 
                                    MMM::.:.  .      W888N89999888@8W      . . ::::"RXV  
                                        MMMm::.  .      WW888N88888WW     .  . mmMMMMMRXx
                                        ""MMmm .  .       WWWWWWW   . :. :,miMM"""  
                                            ""MMMMmm . .  .  .   ._,mMMMM""" 
                                                    ""MMMMMMMMMMMMM""" 
                        </pre/>
                        `,
                        `
                        <pre style="color: red;">
                                                ....xxxxx...,..
                                            ..XXXXXXXXXXXXXXXXXXXXx. 
                                        ..XXXXXXXXWWWWWWWWWWWWWWWWXXXX. 
                                        ...XXXXXWXXWWWWWWWWWWWWWWWWWWWWWWXX.  
                                    ...XXXXXXWWXXWWWWWWWWWWWWWWWWWWWWWWWWWMBX.   
                                ..XXXXXXXXWWWXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWMX.  
                            "XXXXXXXXXXXXWWXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBMBRX.   
                            XXXXXXXX=MMWWXXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXRBRXX. 
                            ""XXXXXMMXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWRRXx. 
                                    MMMXXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"RXV  
                                        MMMmXXXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWmmMMMMMRXx
                                        ""MMmmXXXWWWWWWWWWWWWWWWWWWWWWWWWWWmiMM"""  
                                            ""MMMMmmWWWWWWWWWWWWWWWWmMMMM""" 
                                                    ""MMMMMMMMMMMMM""" 
                        </pre/>
                        `,
                    ]
                    var i = 0;
                    var direction = 1;
    
                    function updateTerminal() {
                        terminal.innerHTML = asciiArts[i];
    
                        var delay = (i === 0 || i === asciiArts.length - 1) ? 1000 : 150;
    
                        if (i === asciiArts.length - 1) {
                            direction = -1;
                        } else if (i === 0) {
                            direction = 1;
                        }
    
                        i += direction;
    
                        setTimeout(updateTerminal, delay);
                    }
    
                    updateTerminal();
                }, 2500);
    
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
                            <tr>
                                <td>- vim [filename]</td>
                                <td>open a file in vim</td>
                            </tr>
                        </table>
                    `;
            } else if (currentValue === "su root") {
                // maybe set cookie here so people can't just navigate to /admin
                initiatedSudo = true;
    
                terminal.innerHTML += `
                    <p>Enter root password...</p>
                `;
            } else if (currentValue === "su thewatcher") {
                initiatedSecret = true;

                terminal.innerHTML += `
                    <p>Enter password for thewatcher...</p>
                `;
            } else if (currentValue === "c0ngr4ts_scr1ptk1ddy") {
                
            } else if (currentValue === "eyesonyou") {

            }/*else {
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