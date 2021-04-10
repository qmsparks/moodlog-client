import { useState } from 'react';
import LogModel from '../models/LogModel';

const NewLog = () => {

  const [event, setEvent] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    LogModel.create({ event })
      .then(response => {
        console.log(response);
        // TODO grab the created log's id, save it into state....somewhere (should have thought about user flow before now, oops) and proceed with adding associated moods and thoughts
      })
  }

  return (
    <div>
      <h2>New Mood Log</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="event">Upsetting Event</label>
        <input 
        type="text" 
        name="event"
        value={event}
        onChange={e => setEvent(e.target.value)}
        />

        <button type="submit">Create Log</button>
      </form>
    </div>
  )
}

export default NewLog;