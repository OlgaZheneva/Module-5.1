const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton');
const greeting = document.getElementById('greeting');

// Функция для загрузки сохранённого имени
function loadName() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        greeting.textContent = `Привет, ${savedName}!`;
    }
}

// Функция для сохранения имени
function saveName() {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('username', name);
        greeting.textContent = `Привет, ${name}!`;
        nameInput.value = '';
    } else {
        alert('Пожалуйста, введите ваше имя');
    }
}

// Обработчик события для кнопки
saveButton.addEventListener('click', saveName);

// Загрузка имени при загрузке страницы
window.addEventListener('load', loadName);
