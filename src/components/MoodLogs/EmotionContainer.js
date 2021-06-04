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
      {/* FIXME Turns out I really don't like needing to pres the button every time you want to add something new? No reason to add more active effort for the user when, theoretically, they're already working on trying to process something tricky. Restructure this. */}
      { form && <NewEmotion />}
      <button onClick={toggleForm}>{ form ? 'Finished Recording Feelings' : 'Add More Feelings' }</button>
    </div>
  )
}

export default EmotionContainer;