import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/thoughts`;

class ThoughtModel {
  static create = (logId, thoughtData) => {
    return fetch(`${URL}/${logId}`, {
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