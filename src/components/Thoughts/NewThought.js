import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { logState } from '../../recoil/logs';
import ThoughtModel from '../../models/ThoughtModel';

const NewThought = () => {
  const [log, setLog] = useRecoilState(logState);
  const [negativeThought, setNegativeThought] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    ThoughtModel.create(log._id, {negativeThought})
      .then(response => {
        setLog(response.log);
        setNegativeThought('');
      })
  }

  return (
    <div>
      <h3>What garbage is your brain telling you?</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="negativeThought">Negative Thought</label>
        <input 
        type="text" 
        name="negativeThought"
        value={negativeThought}
        onChange={e => setNegativeThought(e.target.value)}
        />
        <button type="submit">Thinkin' big thoughts</button>
      </form>
    </div>
  )
}

export default NewThought;