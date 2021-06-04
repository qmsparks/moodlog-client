import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/emotions`;

class EmotionModel {
  static create = (logId, emotionData) => {
    return fetch(`${URL}/${logId}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotionData)
    })
    .then(response => response.json());
  }

  static update = (emotionId, emotionData) => {
    return fetch(`${URL}/${emotionId}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotionData)
    })
    .then(response => response.json());
  }

}

export default EmotionModel;