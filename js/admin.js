var cli = document.getElementById('cli');

document.onload = function() {
    document.addEventListener('keypress', function(event) {
        var val = "";
        
        if (event.key === "Enter") {
            val = cli.innerText;
            cli.innerText = "";

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
                            <td>root</td>
                            <td>root</td>
                            <td>4096</td>
                            <td>2024-18-3 11:00:00</td>
                            <td>/secret</td>
                        </tr>
                    </table>
                `;
            } else if (val === "cd ..") {
                window.location.href = "../index.html";
            } else if (val === "cd /secret") {
                window.location.href = "../html/admin/secret.html";
            } else {
                terminal.innerHTML += `
                    <p>Command not found...</p>
                `;
            }

        }
    });
}