import { useState } from 'react';

import LogModel from '../models/LogModel';
import NewLog from '../components/Log Creation/NewLog';
import NewEmotion from '../components/Log Creation/NewEmotion';
import NewThought from '../components/Log Creation/NewThought';

const LogCreation = () => {
  const [logId, setLogId] = useState('');  
  const [emotions, setEmotions] = useState([]);
  const [thoughts, setThoughts] = useState([]);

  const logToState = newLogId => {
    setLogId(newLogId);
  }

  const addEmotion = emotionId => {
    const updatedEmotions = [...emotions, emotionId];
    setEmotions(updatedEmotions);
  }

  const addThought = thoughtId => {
    const updatedThoughts = [...thoughts, thoughtId];
    setThoughts(updatedThoughts);
  }

  return (
    <div>
      <h2>New Mood Log</h2>
      <NewLog logToState={logToState} />
      <NewEmotion addEmotion={addEmotion} />
      <NewThought addThought={addThought} />
    </div>
  )
}

export default LogCreation;