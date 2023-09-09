/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
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

  getUsers() {
    return fetch(`${this._server}/account/users/`, {
      method: "GET",
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
        email: "113@m.ru",
        password: "11121323ss",
      }),
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
