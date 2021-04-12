import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/thoughts`;

class ThoughtModel {
  static create = thoughtData => {
    return fetch(URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thoughtData)
    })
    .then(response => response.json());
  }
}

export default ThoughtModel;