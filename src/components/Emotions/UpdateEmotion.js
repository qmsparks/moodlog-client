import { useState } from 'react';
import EmotionModel from '../../models/EmotionModel';


const UpdateEmotion = ({ name, startStrength, id }) => {
  const [endStrength, setEndStrength] = useState(startStrength);

  const handleUpdate = e => {
    e.preventtDefault();

    EmotionModel.update(id, {name, endStrength})
      .then(response => {
        console.log(response);
      })
  }

  return (
    <form onSubmit={handleUpdate}>
      <label htmlFor="endStrength">Rate This Feeling's Strength Again</label>
      <input type="range" 
      name="endStrength"
      min="0"
      max="100"
      value={endStrength}
      onChange={e => setEndStrength(e.target.value)}
      />
      {endStrength}

      <button type="submit">Submit Rating</button>
    </form>
  )
}

export default UpdateEmotion;