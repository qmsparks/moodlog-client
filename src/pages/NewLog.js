import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { logState } from '../recoil/logs';
import LogModel from '../models/LogModel';

const NewLog = () => {
  const [event, setEvent] = useState('');
  const [log, setLog] = useRecoilState(logState);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    LogModel.create({ event })
      .then(response => {
        setLog(response.log);
        history.push(`/logs/${log._id}`);
      })
  }

  return (
    <div>
      <h1>New Mood Log</h1>

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