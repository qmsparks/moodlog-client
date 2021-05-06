import { useState } from 'react';

import EmotionIndex from '../Emotions/EmotionIndex';
import NewEmotion from '../Emotions/NewEmotion';

const EmotionContainer = () => {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  }

  return (
    <div>
      <h2>Record Your Negative Feelings</h2>
      <EmotionIndex />
      { form && <NewEmotion />}
      <button onClick={toggleForm}>{ form ? 'Finished Recording Feelings' : 'Add More Feelings' }</button>
    </div>
  )
}

export default EmotionContainer;