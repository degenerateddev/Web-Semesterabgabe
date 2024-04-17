window.onload = function () {
    setInterval(() => {
        let time = new Date(2024, 12, 24) - new Date();
        let diff = Math.round(time / (1000 * 60 * 60 * 24));
        console.log(diff)
        window.document.getElementById("time").innerText = diff + " days";
    }, 1000);
};