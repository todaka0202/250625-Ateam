const calendarEl = document.getElementById('calendar');

function formatDate(date) {
    return date.toISOString().slice(0, 10);
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function renderCalendar(year, month) {
    calendarEl.innerHTML = '';
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    weekDays.forEach(d => {
        const wd = document.createElement('div');
        wd.textContent = d;
        wd.className = 'weekday';
        calendarEl.appendChild(wd);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const days = getDaysInMonth(year, month);

    // 空白
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        calendarEl.appendChild(empty);
    }

    for (let d = 1; d <= days; d++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = d;
        dayDiv.className = 'day';
        dayDiv.addEventListener('click', () => {
            // 別ページ（例えば detail.html）に日付情報をクエリパラメータで渡して遷移
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            window.location.href = `detail.html?date=${dateStr}`;
        });
        calendarEl.appendChild(dayDiv);
    }
}

const today = new Date();
renderCalendar(today.getFullYear(), today.getMonth());