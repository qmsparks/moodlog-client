import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/auth`;

class AuthModel {
  static register = data => {
    return fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json());
  }

  static login = data => {
    return fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json());
  }
}

export default AuthModel;