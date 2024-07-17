function generateCalendar() {
    var monthSelector = document.getElementById('month-selector');
    var calendar = document.getElementById('calendar');
    var month = parseInt(monthSelector.value);
    var date = new Date();
    date.setMonth(month, 1);

    var  daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    var  firstDay = new Date(date.getFullYear(), month, 1).getDay();

    var  dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var calendarHtml = '';

    dayHeaders.forEach(day => {
        calendarHtml += `<div class="day day-header">${day}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        calendarHtml += `<div class="day"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendarHtml += `<div class="day">${i}</div>`;
    }

    calendar.innerHTML = calendarHtml;
}
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
});
