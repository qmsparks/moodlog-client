import { BASE_URI } from '../config/constants';
const URL = `${BASE_URI}/emotions`;

class EmotionModel {
  static create = emotionData => {
    return fetch(URL, {
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