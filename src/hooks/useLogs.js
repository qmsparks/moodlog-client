import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { logState } from '../recoil/logs';
import LogModel from '../models/LogModel';

const useLogs = logId => {
  const [log, setLog] = useRecoilState(logState);

  useEffect(function() {
    fetchLog(logId);
  },
  [logId]);

  function fetchLog(id) {
    LogModel.show(id).then(response => {
      setLog(response.log);
    })
  }

  return [log];
}

export default useLogs;