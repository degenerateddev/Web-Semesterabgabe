window.onload = function () {
    setInterval(() => {
        let time = new Date(2024, 12, 24) - new Date();
        let diffDays = Math.round(time / (1000 * 60 * 60 * 24));
        let diffHours = Math.round((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let diffMinutes = Math.round((time % (1000 * 60 * 60)) / (1000 * 60));
        
        window.document.getElementById("time").innerText = diffDays + ":" + diffHours + ":" + diffMinutes;
    }, 1000);
};