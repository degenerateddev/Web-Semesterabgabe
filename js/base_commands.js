var cli = document.getElementById('cli');
var terminal = document.getElementById("terminal");

document.addEventListener('keypress', function(event) {
    var val = "";

    if (event.key === "Enter") {
        val = cli.innerText;
        cli.innerText = "";

        if ((val === "ls") || (val === "dir")) {
            if (document.cookie.includes("secretAccess=1")) {
                terminal.innerHTML += `
                    <table>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2023-19-12 2:00:00</td>
                            <td>/projects</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2024-18-3 11:00:00</td>
                            <td>/socials</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>root</td>
                            <td>root</td>
                            <td>4096</td>
                            <td>2024-12-2 16:00:00</td>
                            <td>/admin</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>root</td>
                            <td>root</td>
                            <td>4096</td>
                            <td>2024-12-2 16:00:00</td>
                            <td>/watcher</td>
                        </tr>
                        <tr>
                            <td>-rwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2024-09-01 12:00:00</td>
                            <td>password.txt</td>
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
                            <td>2023-19-12 2:00:00</td>
                            <td>/projects</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2024-18-3 11:00:00</td>
                            <td>/socials</td>
                        </tr>
                        <tr>
                            <td>drwxr-xr-x</td>
                            <td>root</td>
                            <td>root</td>
                            <td>4096</td>
                            <td>2024-12-2 16:00:00</td>
                            <td>/admin</td>
                        </tr>
                        <tr>
                            <td>-rwxr-xr-x</td>
                            <td>default</td>
                            <td>default</td>
                            <td>4096</td>
                            <td>2024-09-01 12:00:00</td>
                            <td>password.txt</td>
                        </tr>
                    </table>
                `;
            }
        } else if ((val === "cd /projects") || (val === "cd projects") || (val === "cd projects/")) {
            window.location.href = "../html/projects.html";
        } else if ((val === "cd /socials") || (val === "cd socials") || (val === "cd socials/")) {
            window.location.href = "../html/socials.html";
        } else if ((val === "cd /admin") || (val === "cd admin" || (val === "cd admin/"))) {
            let accessGranted = document.cookie.includes("sudoAccess=1");
            
            if (accessGranted) {
                window.location.href = "../html/admin.html";
            } else {
                terminal.innerHTML += `
                    <div class="text-center text-large" style="background-color: #073605; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                        Permission denied
                    </div>
                `;
                setTimeout(() => {
                    terminal.innerHTML = "";
                }, 2000);
            }
        } else if ((val === "cd /secret") || (val === "cd secret") || (val === "cd secret/")) {
            if (document.cookie.includes("sudoAccess=1")) {
                window.location.href = "../html/secret.html";
            } else {
                terminal.innerHTML += `
                    <div class="text-center text-large" style="background-color: #073605; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                        Permission denied
                    </div>
                `;
                setTimeout(() => {
                    terminal.innerHTML = "";
                }, 2000);
            }
        } else if ((val === "cd /watcher") || (val === "cd watcher") || (val === "cd watcher/")) {
            if (document.cookie.includes("secretAccess=1")) {
                window.location.href = "../html/watcher.html";
            }
        } else if ((val === "cat password.txt")) {
            terminal.innerHTML += `
                <p>c0ngr4ts_scr1ptk1ddy</p>
            `;
        }

    }
});