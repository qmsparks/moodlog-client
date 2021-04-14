import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/logs`;

class LogModel {
  static create = logData => {
    return fetch(URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData)
    })
    .then(response => response.json());
  }

  // static all = () => {
  //   return fetch(URL, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.uid}`
  //     }
  //   })
  //   .then(response => response.json());
  // }

  static show = logId => {
    return fetch(`${URL}/${logId}`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    })
    .then(response => response.json());
  }

  static update = (logId, logData) => {
    return fetch(`${URL}/${logId}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.uid}`, 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logData)
    })
    .then(response => response.json());
  }

  // static delete = logId => {
  //   return fetch(`${URL}/${logId}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: `Bearer ${localStorage.uid}`
  //     }
  //   })
  //   .then(response => response.json());
  // }
}

export default LogModel;