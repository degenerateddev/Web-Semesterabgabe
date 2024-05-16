var cli = document.getElementById('cli');
var terminal = document.getElementById("terminal");

var deletedAll = false;

document.addEventListener('keypress', function(event) {
    var val = "";

    if (event.key === "Enter") {
        val = cli.innerText;
        cli.innerText = "";
        
        if ((val === "ls") || (val === "dir")) {
            if (deletedAll === false) {
                terminal.innerHTML += `
                    <table>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2023-12-12 0:00:00</td>
                            <td>..</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>unknown</td>
                            <td>unknown</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>core.cpp</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>unknown</td>
                            <td>unknown</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>subroutines.cpp</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>unknown</td>
                            <td>unknown</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>main.cpp</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>unknown</td>
                            <td>unknown</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>perms.cpp</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>unknown</td>
                            <td>unknown</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>/headers</td>
                        </tr>
                    </table>
                `;
            } else {
                terminal.innerHTML += `
                    <table>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2023-12-12 0:00:00</td>
                            <td>..</td>
                        </tr>
                    </table>
                `;
            }
            
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";
        } else if ((val === "cd /headers") || (val === "cd headers") || (val === "cd headers/")) {
            terminal.innerHTML += `
                <div class="text-center text-large" style="background-color: #073605; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    Permission denied
                </div>
            `;
            setTimeout(() => {
                terminal.innerHTML = "";
            }, 2000);
        
        } else if ((val === "cat core.cpp") || (val === "cat subroutines.cpp") || (val === "cat main.cpp") || (val === "cat perms.cpp")) {
            terminal.innerHTML += `
                <div class="text-center text-large" style="background-color: #073605; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    Permission denied
                </div>
            `;
            setTimeout(() => {
                terminal.innerHTML = "";
            }, 2000);

        } else if (val === "rm -r *") {
            terminal.innerHTML += `
                <div class="text-center text-large" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    Please insert the authorization code.
                </div>
            `;
        } else if (val === "1337") {
            deletedAll = true;
            terminal.innerHTML = `
                <div class="text-center text-large" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    All files deleted
                </div>
            `;

            setTimeout(() => {
                terminal.innerHTML = `
                    <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                        <code>
                            W-what have you done?
                        </code>
                    </div>
                `;

                setTimeout(() => {
                    terminal.innerHTML = `
                        <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                            <code>
                                YOU DELETED EVERYTHING!
                            </code>
                        </div>
                    `;

                    setTimeout(() => {
                        terminal.innerHTML = `
                            <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                <code>
                                    J-JUST WAITTTTT, I- I'LL BE BBACKK
                                </code>
                            </div>
                        `;

                        setTimeout(() => {
                            terminal.innerHTML = `
                                <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                    <code>
                                        iiiIII CAAaANnn sSEEee yYYOOUUuu... 
                                    </code>
                                </div>
                            `;

                            setTimeout(() => {
                                terminal.innerHTML = `
                                    <div class="text-center text-large" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                        <code>
                                            Connection lost 
                                        </code>
                                    </div>
                                `;
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        
        } else if ((val === "vim core.cpp") || (val === "vim subroutines.cpp") || (val === "vim main.cpp") || (val === "vim perms.cpp")) {
            terminal.innerHTML = `
                <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    <code>
                        What do you think you're doing?
                    </code>
                </div>
            `;

            terminal.innerHTML = `
                <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    <code>
                        What do you think you're doing?
                    </code>
                </div>
            `;

            setTimeout(() => {
                terminal.innerHTML = `
                    <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                        <code>
                            You think you can just open and edit files like that?
                        </code>
                    </div>
                `;

                setTimeout(() => {
                    terminal.innerHTML = `
                        <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                            <code>
                                I can see everything you do.
                            </code>
                        </div>
                    `;

                    setTimeout(() => {
                        terminal.innerHTML = `
                            <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                <code>
                                    I know everything you might think of.
                                </code>
                            </div>
                        `;

                        setTimeout(() => {
                            terminal.innerHTML = `
                                <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                    <code>
                                        And I'm aware of everything you feel.
                                    </code>
                                </div>
                            `;

                            setTimeout(() => {
                                terminal.innerHTML = `
                                    <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                                        <code>
                                            This is my domain.
                                        </code>
                                    </div>
                                `;
                                
                                var counter = 0;
                                let intervalId = setInterval(() => {
                                    let code = counter !== 500 ? Math.floor(Math.random() * 1350) : 1337;

                                    terminal.innerHTML = `
                                        <div class="text-center text-large" style="color: red; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: 10vw;">
                                            <code>
                                                ${code}
                                            </code>
                                        </div>
                                    `;

                                    if (code === 1337) {
                                        clearInterval(intervalId);
                                    }

                                    counter++;
                                }, 20);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }

    }
});