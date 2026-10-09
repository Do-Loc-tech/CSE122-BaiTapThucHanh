const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

function updateGreeting() {
    const currentHour = new Date().getHours();
    let message = "Chào buổi tối!";

    if (currentHour >= 5 && currentHour < 12) {
        message = "Chào buổi sáng!";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Chào buổi chiều!";
    }
    
    document.getElementById("greeting").innerText = message;
}

function printCalendar() {
    const day = parseInt(document.getElementById("inp-day").value);
    const month = parseInt(document.getElementById("inp-month").value);
    const year = parseInt(document.getElementById("inp-year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31) {
        alert("Vui lòng nhập ngày tháng năm hợp lệ!");
        return;
    }

    const targetDate = new Date(year, month - 1, day);

    if (targetDate.getDate() !== day) {
        alert("Ngày bạn nhập không tồn tại trong tháng này!");
        return;
    }

    const weekdayIndex = targetDate.getDay();
    const weekdayName = weekdays[weekdayIndex];

    document.getElementById("res-year").innerText = year;
    document.getElementById("res-month").innerText = "Tháng " + month;
    document.getElementById("res-day").innerText = day;
    document.getElementById("res-weekday").innerText = weekdayName;
    
    updateGreeting();
}

document.getElementById("btn-print").addEventListener("click", printCalendar);

updateGreeting();
