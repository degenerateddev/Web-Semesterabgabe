var cli = document.getElementById('cli');
var terminal = document.getElementById('terminal');

cli.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        let val = cli.value;

        cli.value = "";

        if (val === "clear") {
            terminal.innerHTML = "";
        } else if (val === "help") {
            terminal.innerHTML += `
                <ul>
                    <li>ls</li>
                    <li>cd</li>
                    <li>cat</li>
                    <li>clear</li>
                    <li>su</li>
                </ul>
            `;
        } else if ((val === "ls") || (val === "dir")) {
            terminal.innerHTML += `
                <ul>
                    <li>..</li>
                    <li>/secret</li>
                </ul>
            `;
        } else if (val === "cd ..") {
            window.location.href = "../index.html";
        } else if (val === "cd /secret") {
            window.location.href = "../html/secret.html";
        } else {
            terminal.innerHTML += `
                <p>Command not found...</p>
            `;
        }
    }
});