import useLogs from '../hooks/useLogs';

import EmotionContainer from '../components/MoodLogs/EmotionContainer';
import ThoughtContainer from '../components/MoodLogs/ThoughtContainer';

const LogDetail = ({ match }) => {
  const [log] = useLogs(match.params.id);

  return (
    <div>
      {
        !log ?
        <p>Loading...</p> :
        <>
        <h3>{log.event}</h3>
        <EmotionContainer />
        <ThoughtContainer />
      </>
      }
    </div>
    
  )
}

export default LogDetail;