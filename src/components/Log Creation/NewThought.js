import { useState } from 'react';

import ThoughtModel from '../../models/ThoughtModel';

const NewThought = ({ addThought, moodLog }) => {
  const [negativeThought, setNegativeThought] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    ThoughtModel.create({ negativeThought, moodLog })
      .then(response => {
        addThought(response.thought._id);
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