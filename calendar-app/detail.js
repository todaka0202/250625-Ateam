// クエリパラメータから日付を取得
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

const dateStr = getQueryParam('date');
document.getElementById('date').textContent = dateStr;

// ローカルストレージからデータ取得
const diaryKey = 'diary-' + dateStr;
const diaryEl = document.getElementById('diary');
diaryEl.value = localStorage.getItem(diaryKey) || '';

// 保存ボタン
document.getElementById('save').onclick = () => {
    localStorage.setItem(diaryKey, diaryEl.value);
    alert('保存しました');
};