function formatNumber(num) {
    return num < 10 ? "0" + num : "" + num;
}

function updateClock() {
    const now = new Date();
    const hours = formatNumber(now.getHours());     /* Ví dụ: "22" */
    const minutes = formatNumber(now.getMinutes()); /* Ví dụ: "05" */
    const seconds = formatNumber(now.getSeconds()); /* Ví dụ: "45" */

    /* Tách từng ký tự và ghép thành tên file dạng 00.gif -> 09.gif */
    document.getElementById("h1").src = "img/0" + hours[0] + ".gif";
    document.getElementById("h2").src = "img/0" + hours[1] + ".gif";
    
    document.getElementById("m1").src = "img/0" + minutes[0] + ".gif";
    document.getElementById("m2").src = "img/0" + minutes[1] + ".gif";
    
    document.getElementById("s1").src = "img/0" + seconds[0] + ".gif";
    document.getElementById("s2").src = "img/0" + seconds[1] + ".gif";

    /* Đoạn xử lý lời chào giữ nguyên */
    const currentHour = now.getHours();
    let message = "Chào buổi tối";

    if (currentHour >= 5 && currentHour < 12) {
        message = "Chào buổi sáng";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Chào buổi chiều";
    }

    document.getElementById("greeting").innerText = message;
}

setInterval(updateClock, 1000);

updateClock();
