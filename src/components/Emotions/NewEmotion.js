import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { logState } from '../../recoil/logs';
import EmotionModel from '../../models/EmotionModel';

const NewEmotion = () => {
  const [log, setLog] = useRecoilState(logState);
  const [name, setName] = useState('');
  const [startStrength, setStartSrength] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    EmotionModel.create(log._id, {name, startStrength})
      .then(response => {
        setLog(response.log);
        setName('');
        setStartSrength('');
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