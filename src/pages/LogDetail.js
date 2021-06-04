import useLogs from '../hooks/useLogs';
import LogInProgress from '../containers/LogInProgress';
import CompletedLog from '../containers/CompletedLog';

import '../Sass/Forms.scss';

const LogDetail = ({ match }) => {
  const [log] = useLogs(match.params.id);

  const checkCompletion = () => {
    return log.complete ? 
    <CompletedLog log={log} /> : 
    <LogInProgress log={log}/>
  }

  return (
    <>
      {
        !log ?
        <p>Loading...</p> :
        checkCompletion()
      }

    </>
    
  )
}

export default LogDetail;