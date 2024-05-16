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
                        <td>5120</td>
                        <td>2023-12-12 1:00:00</td>
                        <td>..</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>6144</td>
                        <td>2023-12-19 3:00:00</td>
                        <td>/writing</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>7168</td>
                        <td>2024-03-18 12:00:00</td>
                        <td>/instagram</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>root</td>
                        <td>root</td>
                        <td>8192</td>
                        <td>2024-02-12 17:00:00</td>
                        <td>/twitter</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>9216</td>
                        <td>2024-01-09 13:00:00</td>
                        <td>/linkedin</td>
                    </tr>
                    <tr>
                        <td>drwxr-xr-x</td>
                        <td>default</td>
                        <td>default</td>
                        <td>10240</td>
                        <td>2024-01-09 14:00:00</td>
                        <td>/github</td>
                    </tr>
                </table>
            `;
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";
        } else if ((val === "cd /writing") || (val === "cd writing") || (val === "cd writing/")) {
            window.location.href = "https://www.story.one/en/author/tim-arnold-31780/";
        } else if ((val === "cd /instagram") || (val === "cd instagram") || (val === "cd instagram/")) {
            window.location.href = "https://www.instagram.com/degenerateddev/";
        } else if ((val === "cd /twitter") || (val === "cd twitter" || (val === "cd twitter/"))) {
            window.location.href = "https://twitter.com/degenerateddev";
        } else if ((val === "cd /linkedin") || (val === "cd linkedin") || (val === "cd linkedin/")) {
            window.location.href = "https://www.linkedin.com/in/tim-arnold-22a035254/";
        } else if ((val === "cd /github") || (val === "cd github") || (val === "cd github/")) {
            window.location.href = "https://github.com/degenerateddev";
        }

    }
});