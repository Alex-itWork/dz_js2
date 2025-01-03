document.getElementById('searchButton').addEventListener('click', function() {
    // Получаем текст из поля ввода
    const searchText = document.getElementById('searchInput').value.toLowerCase();

    // Получаем список сообщений
    const messages = document.querySelectorAll('#messageList li');

    // Очищаем предыдущие результаты
    const resultsList = document.getElementById('searchResults');
    resultsList.innerHTML = '';

    // Ищем сообщения, содержащие искомый текст
    messages.forEach(function(message) {
        if (message.textContent.toLowerCase().includes(searchText)) {
            const listItem = document.createElement('li');
            listItem.textContent = message.textContent;
            resultsList.appendChild(listItem);
        }
    });
});