import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { logState } from '../../recoil/logs';
import EmotionModel from '../../models/EmotionModel';

const NewEmotion = () => {
  const [log, setLog] = useRecoilState(logState);
  const [name, setName] = useState('');
  const [startStrength, setStartSrength] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    EmotionModel.create(log._id, {name, startStrength})
      .then(response => {
        setLog(response.log);
        setName('');
        setStartSrength(0);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">How Do You Feel?</label>
      <input 
      type="text"
      name="name"
      placeholder="Sad, anxious, angry, guilty, lonely, hopeless, etc."
      value={name}
      onChange={e => setName(e.target.value)}
      />

      <label htmlFor="startStrength">Rate This Feeling's Strength From 0 To 100</label>
      <input 
      type="range" 
      name="startStrength" 
      min="0"
      max="100"
      value={startStrength}
      onChange={e => setStartSrength(e.target.value)}
      />
      {startStrength}

      <button type="submit">Submit Feeling</button>
    </form>

  )

}

export default NewEmotion;