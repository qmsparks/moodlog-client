import { useState, useEffect } from 'react';

import LogModel from '../models/LogModel';
import LogPreview from '../components/MoodLogs/LogPreview'

const LogIndex = () => {
  const [logs, setLogs] = useState([]);

  useEffect(function() {
    LogModel.all().then(response => {
      setLogs(response.logs);
    })
  },[])

  return (
    <div>
      <h3>All your logs!</h3>
      {logs.map(log => {
        return <LogPreview key={log._id} log={log} />
      })}
    </div>
  )
}

export default LogIndex;