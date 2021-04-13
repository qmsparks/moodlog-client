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

  const saveLog = () => {
    LogModel.update(logId, {emotions, thoughts})
      .then(response => {
        console.log(response);
      })
  }

  return (
    <div>
      <h2>New Mood Log</h2>
      <NewLog logToState={logToState} />
      <NewEmotion addEmotion={addEmotion} moodLog={logId} />
      <NewThought addThought={addThought} moodLog={logId} />

      <button onClick={saveLog}>Update Log</button>
    </div>
  )
}

export default LogCreation;