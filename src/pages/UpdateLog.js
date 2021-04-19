import { useState, useEffect } from 'react';

import LogModel from '../models/LogModel';
import NewEmotion from '../components/Emotions/NewEmotion';
import NewThought from '../components/Thoughts/NewThought';
import EmotionDetail from '../components/Emotions/EmotionDetail';
import ThoughtDetail from '../components/Thoughts/ThoughtDetail';

const UpdateLog = ({ match }) => {
  const [log, setLog] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [thoughts, setThoughts] = useState([]);

  useEffect(function() {
    console.log('Use! That! Effect!');
    LogModel.show(match.params.id)
      .then(response => {
        setLog(response.log);
        setEmotions(response.log.emotions.map(emotion => emotion._id));
        setThoughts(response.log.thoughts.map(thought => thought._id));
      })
  },
  [match.params.id]);

  useEffect(function() {
    if (emotions.length !== 0 || thoughts.length !== 0){
      console.log('Time to update the log itself');
      LogModel.update(match.params.id, {emotions, thoughts})
      .then(response => {
        setLog(response.log);
      })
    }
    
  },
  [emotions, thoughts]);

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
      {
        log &&
        <>
        <h2>{log.event}</h2>

        <h3>Emotions</h3>
        {log.emotions.map(emotion => {
          return <EmotionDetail key={emotion._id} emotion={emotion} />
        })}

        <h3>Thoughts</h3>
        {log.thoughts.map(thought => {
          return <ThoughtDetail key={thought._id} thought={thought}/>
        })}
        </>
      }

      <NewEmotion addEmotion={addEmotion} moodLog={match.params.id} />
      <NewThought addThought={addThought} moodLog={match.params.id} />
    </div>
  )
}

export default UpdateLog;