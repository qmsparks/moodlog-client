import { useState } from 'react';

import LogModel from '../../models/LogModel';

const NewLog = ({ logToState }) => {
  const [event, setEvent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    LogModel.create({ event })
      .then(response => {
        logToState(response.log._id);
      })
  }

  return (
    <div>
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