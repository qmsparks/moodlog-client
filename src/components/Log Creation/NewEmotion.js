import { useState } from 'react';

import EmotionModel from '../../models/EmotionModel';

const NewEmotion = ({ addEmotion, moodLog }) => {
  const [name, setName] = useState('');
  const [startStrength, setStartSrength] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    EmotionModel.create({ name, startStrength, moodLog })
      .then(response => {
        addEmotion(response.emotion._id);
      })
  }

  return (
    <div>
      <h3>Time to have some feelings!</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">How Do You Feel?</label>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <label htmlFor="startStrength">How strongly from 0 to 100?</label>
        <input 
        type="number"
        name="startStrength"
        value={startStrength}
        onChange={e => setStartSrength(e.target.value)}
        />

        <button type="submit">That's sure an emotion</button>
      </form>
    </div>
  )

}

export default NewEmotion;