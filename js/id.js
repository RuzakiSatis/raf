const info_two = document.getElementById('info_two');

info_two.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_two = document.getElementById('Name_two').value;
    var Phone_two = document.getElementById('Phone_two').value;
    var Town_two = document.getElementById('Town_two').value;
    var color_select_two = document.getElementById('color-select_two').value;
    var size_select_two = document.getElementById('size-select_two').value;

    var token = '6752456684:AAHLBxSZvVZv-RODuJ-IYkENYD41EQnLveM';
    var chat_id = '-4212326178';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_two}\nPhone: ${Phone_two}\nTown: ${Town_two}\nColor: ${color_select_two}\nSize: ${size_select_two}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_two').value = "";
    document.getElementById('Phone_two').value = "";
    document.getElementById('Town_two').value = "";
    document.getElementById('color-select_two').value = "";
    document.getElementById('size-select_two').value = "";

    alert("Ваші дані були успішно відправлені! Очікуйте з вами звяжеться менеджер для підтвердження замовлення!");
});
