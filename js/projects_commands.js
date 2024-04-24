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
                        <td>2023-12-12 0:00:00</td>
                        <td>..</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>4096</td>
                        <td>2023-19-12 2:00:00</td>
                        <td>/author-portfolio</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>4096</td>
                        <td>2024-18-3 11:00:00</td>
                        <td>/clockwork-systems</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>root</td>
                        <td>root</td>
                        <td>4096</td>
                        <td>2024-12-2 16:00:00</td>
                        <td>/devotee</td>
                    </tr>
                    <tr>
                        <td>-rwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>4096</td>
                        <td>2024-09-01 12:00:00</td>
                        <td>/docknote</td>
                    </tr>
                    <tr>
                        <td>-rwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>4096</td>
                        <td>2024-09-01 12:00:00</td>
                        <td>/blog</td>
                    </tr>
                </table>
            `;
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";
        } else if ((val === "cd /author-portfolio") || (val === "cd author-portfolio") || (val === "cd author-portfolio/")) {
            window.location.href = "https://daniela-arnold.de";
        } else if ((val === "cd /clockwork-systems") || (val === "cd clockwork-systems") || (val === "cd clockwork-systems/")) {
            window.location.href = "";
        } else if ((val === "cd /devotee") || (val === "cd devotee") || (val === "cd devotee/")) {
            window.location.href = "https://devotee.fans";
        } else if ((val === "cd /docknote") || (val === "cd docknote" || (val === "cd docknote/"))) {
            window.location.href = "https://github.com/degenerateddev/Docknote";
        } else if ((val === "cd /blog") || (val === "cd blog") || (val === "cd blog/")) {
            window.location.href = "https://github.com/degenerateddev/AbyssalWritings";
        } else {
            terminal.innerHTML += `
                <p>Command not found...</p>
            `;
        }

    }
});