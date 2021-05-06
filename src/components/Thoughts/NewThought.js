import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { logState } from '../../recoil/logs';
import ThoughtModel from '../../models/ThoughtModel';

const NewThought = () => {
  const [log, setLog] = useRecoilState(logState);
  const [negativeThought, setNegativeThought] = useState('');
  const [startStrength, setStartStrength] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    ThoughtModel.create(log._id, {negativeThought, startStrength})
      .then(response => {
        setLog(response.log);
        setNegativeThought('');
        setStartStrength(0)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="negativeThought">What Are You Thinking?</label>
      <input 
      type="text" 
      name="negativeThought"
      value={negativeThought}
      onChange={e => setNegativeThought(e.target.value)}
      />

      <label htmlFor="startStrength">Estimate Your Belief (0 to 100)</label>
      <input 
      type="range" 
      name="startStrength"
      min="0"
      max="100"
      value={startStrength}
      onChange={e => setStartStrength(e.target.value)} 
      />
      {startStrength}

      <button type="submit">Submit Thought</button>
    </form>
  )
}

export default NewThought;