import { useState } from 'react';

import ThoughtIndex from '../Thoughts/ThoughtIndex';
import NewThought from '../Thoughts/NewThought';

const ThoughtContainer = () => {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  }

  return (
    <div>
      <h2>Record Your Negative Thoughts</h2>
      <ThoughtIndex />
      { form && <NewThought /> }
      <button onClick={toggleForm}>{ form ? 'Finished Recording Thoughts' : 'Add More Thoughts' }</button>
    </div>
  )
}

export default ThoughtContainer;