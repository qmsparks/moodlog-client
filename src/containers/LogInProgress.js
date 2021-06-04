import { useState } from 'react';

import EmotionContainer from '../components/MoodLogs/EmotionContainer';
import ThoughtContainer from '../components/MoodLogs/ThoughtContainer';

const LogInProgress = ({ log }) => {
  const [focusEmotions, setFocusEmotions] = useState(true);

  const toggleModal = () => {
    setFocusEmotions(!focusEmotions);
  }
  return (
    <div>
      <h1>{log.event}</h1>
      {
        focusEmotions ? 
        <EmotionContainer /> :
        <ThoughtContainer />
      }
      <button onClick={toggleModal}>{focusEmotions ? 'Add Thoughts' : 'Add Emotions'}</button>
    </div>
  )
}

export default LogInProgress;