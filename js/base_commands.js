var cli = document.getElementById('cli');
var initiatedSudo = false;
var sudoTries = 0;

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

        if ((val === "ls") || (val === "dir")) {
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
            let accessGranted = document.cookie.includes("sudoAccess=1");
            
            if (accessGranted) {
                window.location.href = "../html/admin.html";
            } else {
                terminal.innerHTML += `
                    <p>Permission denied...</p>
                `;
            }
        } else if ((val === "cd /secret") || (val === "cd secret") || (val === "cd secret/")) {
            if (document.cookie.includes("sudoAccess=1")) {
                window.location.href = "../html/secret.html";
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
        } else if (val === "c0ngr4ts_scr1ptk1ddy") {
            
        }

    }
});