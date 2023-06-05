//interface - то чем мы управляем логика спрятанна внутри, также и API - AP interface.
//чтобы взаимодействовать с сервером (сервер состоит из эндоинтов): нам надо знать адрес,тип (post,delete,put,options), должны отдать какую нагрузку (request payload), что должны получать (response data), ошибки (404 - not found, 5xx - server error, 3xx-redirect,2xx-ok)
//REST API как с програмой взаимоействовать (сервер).REST API работает на основе запросов HTTP для передачи данных между клиентом и сервером. В REST API каждый ресурс (например, объект, файл или сервис) представлен уникальным URL-адресом. Клиент может отправлять запросы серверу, используя HTTP методы, такие как GET, POST, PUT и DELETE, чтобы выполнить операции с ресурсами.
//Запросы должны быть индопотентные тоесть что отдаем то и должны получать.
// Установите URL-адрес и параметры запроса

//пример
//1
function getUsers() {
  // Установите URL-адрес и параметры запроса
  const url = 'https://api.example.com/users';
  const params = { page: 1, limit: 10 };

  // Выполните GET запрос с использованием функции fetch
  fetch(url + '?' + new URLSearchParams(params))
    .then(response => {
      // Проверьте статус-код ответа
      if (response.ok) {
        // Распарсите ответ в формате JSON
        return response.json();
      } else {
        // Выбросьте ошибку в случае неудачного запроса
        throw new Error('Ошибка выполнения запроса: ' + response.status);
      }
    })
    .then(data => {
      // Обработайте полученные данные
      console.log(data);
    })
    .catch(error => {
      // Обработайте ошибку
      console.error(error);
    });
}

//2
const axios = require('axios');//импортирует библиотеку axios в скрипт.

async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// Вызов функции getPosts() в асинхронной среде
getPosts();

async function login(username, password) {
  const url = 'https://example.com/login';
  const data = { username, password };
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
login('myusername', 'mypassword');

//заглушки серверные на  https://jsonplaceholder.typicode.com/