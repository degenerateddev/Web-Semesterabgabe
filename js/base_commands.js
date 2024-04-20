var cli = document.getElementById('cli');
var initiatedSudo = false;
var sudoTries = 0;
var accessGranted = false;

document.addEventListener('keypress', function(event) {
    var val = "";

    if (event.key === "Enter") {
        val = cli.innerText;
        cli.innerText = "";

        console.log(val);

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
        } else if ((val === "ls") || (val === "dir")) {
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
        } else if ((val === "cd /projects") || (val === "cd projects") || (val === "cd projects/")) {
            window.location.href = "../html/projects.html";
        } else if ((val === "cd /socials") || (val === "cd socials") || (val === "cd socials/")) {
            window.location.href = "../html/socials.html";
        } else if ((val === "cd /admin") || (val === "cd admin" || (val === "cd admin/"))) {
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
            // maybe set cookie here so people can't just navigate to /admin
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