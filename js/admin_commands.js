var cli = document.getElementById('cli');
var terminal = document.getElementById('terminal');

window.onload = function() {
    terminal.innerHTML += `
        Welcome to the admin panel...
    `;
};

document.addEventListener('keypress', function(event) {
    var val = "";
    
    if (event.key === "Enter") {
        val = cli.innerText;
        cli.innerText = "";

        console.log(val);

        let terminal = document.getElementById("terminal");

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
        } else if (val === "cd /secret" || val === "cd secret" || val === "cd secret/") {
            window.location.href = "../html/secret.html";
        }
    }
});