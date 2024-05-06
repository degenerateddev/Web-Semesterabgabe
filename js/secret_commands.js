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
                        <td>2023-19-12 2:00:00</td>
                        <td>supersecrettext.txt</td>
                    </tr>
                </table>
            `;
        } else if ((val === "cd ..") || (val === "cd /")) {
            window.location.href = "../index.html";

        } else if (val === "cat supersecrettext.txt") {
            terminal.innerHTML += `
                <p style="word-wrap: break-word;">
                    SW4gZmllbGRzIG9mIGdvbGQsIHdoZXJlIGRyZWFtcyB0YWtlIGZsaWdodCwKCkNhc3Rpbmcgc2hhZG93cyBpbiB0aGUgc2lsZW50IG5pZ2h0LgpBbWlkc3QgdGhlIHdoaXNwZXJzIG9mIHRoZSB0cmVlcywKTnVydHVyaW5nIHNlY3JldHMgd2l0aCB0aGUgYnJlZXplLgoKU2VjcmV0cyB3aGlzcGVyZWQsIHNlY3JldHMgdG9sZCwKRW5ncmF2ZWQgaW4gc3RvcmllcywgYW5jaWVudCBhbmQgb2xkLgpFbnN1cmluZyBzZWNyZXRzIGRvbid0IHN0cmF5IGZhci4KCllvdSBtYXkgd2FuZGVyLCB5b3UgbWF5IHJvYW0sCk9ubHkgdG8gZmluZCB5b3UncmUgbm90IGFsb25lLgpVbnNlZW4gZXllcyB3YXRjaCBmcm9tIGFmYXIs
                </p>
            `

        }

    }
});