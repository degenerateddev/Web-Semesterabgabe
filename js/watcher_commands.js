var cli = document.getElementById('cli');
var terminal = document.getElementById("terminal");

document.addEventListener('keypress', function(event) {
    var val = "";

    if (event.key === "Enter") {
        val = cli.innerText;
        cli.innerText = "";
        
        if ((val === "ls") || (val === "dir")) {
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
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";
        } else if ((val === "cd /headers") || (val === "cd headers") || (val === "cd headers/")) {
            terminal.innerText = `
                Permission denied.
            `;
        } else if ((val === "cat subroutines.cpp") || (val === "cat main.cpp") || (val === "cat perms.cpp")) {
            terminal.innerHTML = `
                <div class="text-center text-large" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    Permission denied
                </div>
            `;
        } else if (val === "vim core.cpp") {
            terminal.innerHTML = `
                <code>
                    
                </code>
            `;
        }

    }
});