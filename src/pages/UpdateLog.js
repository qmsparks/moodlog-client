import { useState, useEffect } from 'react';

import LogModel from '../models/LogModel';
import NewEmotion from '../components/LogCreation/NewEmotion';
import NewThought from '../components/LogCreation/NewThought';

const UpdateLog = ({ match }) => {
  const [log, setLog] = useState(null);

  useEffect(function() {
    console.log('Use! That! Effect!');
    LogModel.show(match.params.id)
      .then(response => {
        setLog(response.log);
      })

  },
  []);

  return (
    <div>
      {
        log &&
      <h2>{log.event}</h2>
      }
    </div>
  )
}

export default UpdateLog;