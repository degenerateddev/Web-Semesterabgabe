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
                        <td>2048</td>
                        <td>2023-12-12 0:00:00</td>
                        <td>..</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>3072</td>
                        <td>2023-19-12 2:30:00</td>
                        <td>/author-portfolio</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>4096</td>
                        <td>2024-09-01 12:30:00</td>
                        <td>/docknote</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>5120</td>
                        <td>2024-09-01 13:00:00</td>
                        <td>/blog</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>6144</td>
                        <td>2024-09-01 13:30:00</td>
                        <td>/analiki</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>7168</td>
                        <td>2024-09-01 14:00:00</td>
                        <td>/ransom</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>8192</td>
                        <td>2024-09-01 14:30:00</td>
                        <td>/ftp-worm</td>
                    </tr>
                </table>
                
                <table style="border-top: dotted 3px;">
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>work-in-progress</td>
                        <td>work-in-progress</td>
                        <td>2048</td>
                        <td>2023-12-12 0:00:00</td>
                        <td>/inquisipay</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>work-in-progress</td>
                        <td>work-in-progress</td>
                        <td>3072</td>
                        <td>2023-19-12 2:30:00</td>
                        <td>/taletyper</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>work-in-progress</td>
                        <td>work-in-progress</td>
                        <td>4096</td>
                        <td>2024-09-01 12:30:00</td>
                        <td>/talebrain</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>work-in-progress</td>
                        <td>work-in-progress</td>
                        <td>5120</td>
                        <td>2024-09-01 13:00:00</td>
                        <td>/trap-ai</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>work-in-progress</td>
                        <td>work-in-progress</td>
                        <td>6144</td>
                        <td>2024-09-01 13:30:00</td>
                        <td>/caterizer</td>
                    </tr>
                </table>
            `;
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";
        } else if ((val === "cd /author-portfolio") || (val === "cd author-portfolio") || (val === "cd author-portfolio/")) {
            window.location.href = "https://daniela-arnold.de";
        } else if ((val === "cd /docknote") || (val === "cd docknote" || (val === "cd docknote/"))) {
            window.location.href = "https://github.com/degenerateddev/Docknote";
        } else if ((val === "cd /blog") || (val === "cd blog") || (val === "cd blog/")) {
            window.location.href = "https://github.com/degenerateddev/AbyssalWritings";
        } else if ((val === "cd /analiki") || (val === "cd analiki") || (val === "cd analiki/")) {
            window.location.href = "https://github.com/degenerateddev/Analiki";
        } else if ((val === "cd /ransom") || (val === "cd ransom") || (val === "cd ransom/")) {
            window.location.href = "https://github.com/degenerateddev/Ransom";
        } else if ((val === "cd /ftp-worm") || (val === "cd ftp-worm") || (val === "cd ftp-worm/")) {
            window.location.href = "https://github.com/degenerateddev/FTP-Attack";
        } else if (
            (val === "cd /inquisipay") || (val === "cd inquisipay") || (val === "cd inquisipay/") ||
            (val === "cd /taletyper") || (val === "cd taletyper") || (val === "cd taletyper/") ||
            (val === "cd /talebrain") || (val === "cd talebrain") || (val === "cd talebrain/") ||
            (val === "cd /trap-ai") || (val === "cd trap-ai") || (val === "cd trap-ai/") ||
            (val === "cd /caterizer") || (val === "cd caterizer") || (val === "cd caterizer/")) {
            terminal.innerHTML += `
                <div class="text-center text-large" style="background-color: #073605; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; border: 3px solid #199515; width: fit-content;">
                    Permission denied
                </div>
            `;
            setTimeout(() => {
                terminal.innerHTML = "";
            }, 2000);
        }
    }
});