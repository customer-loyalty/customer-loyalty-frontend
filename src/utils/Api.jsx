/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
function generateUniqueId() {
  const randomNumber = Math.random();
  const uniqueId = parseInt(randomNumber.toFixed(5).replace(".", ""), 10);
  return uniqueId;
}
const uniqueId = generateUniqueId();
const token = localStorage.getItem("token");
class Api {
  constructor(options) {
    this._server = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postClient(check, surname, name, birthday, mail, reg, phone) {
    return fetch(`${this._server}/account/client/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        surname,
        birthday,
        gender: "male",
        mail,
        reg,
        phone_number: phone,
        // client: 1,
        card: {
          cardType: 1,
          cardId: uniqueId,
        },
        purchase_amount: {
          total_amount: check,
        },
      }),
    }).then((res) => this._getResponseData(res));
  }

  getClients() {
    return fetch(`${this._server}/account/client/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getCards() {
    return fetch(`${this._server}/account/cardtype/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getUsers() {
    return fetch(`${this._server}/account/users/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getMe() {
    return fetch(`${this._server}/account/users/me/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getUserAbout(username) {
    return fetch(`${this._server}/account/users/${username}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getBonuses() {
    return fetch(`${this._server}/account/bonus/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getTable() {
    return fetch(`${this._server}/statisic/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  postUser() {
    return fetch(`${this._server}/account/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        username: "113",
        email: "113@m.ru",
        phone_number: "+79342342422",
        password: "11121323ss",
        first_name: "113",
        last_name: "113",
      }),
    }).then((res) => this._getResponseData(res));
  }

  authUser() {
    return fetch(`${this._server}/auth/jwt/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: "mail@mail.com",
        password: "1234",
      }),
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  // baseUrl: "http://127.0.0.1:8000",
  baseUrl: "http://theproject.ddns.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
