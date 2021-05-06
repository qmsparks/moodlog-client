import useLogs from '../hooks/useLogs';
import EmotionContainer from '../components/MoodLogs/EmotionContainer';
import ThoughtContainer from '../components/MoodLogs/ThoughtContainer';

import '../Sass/Forms.scss';

const LogDetail = ({ match }) => {
  const [log] = useLogs(match.params.id);


  return (
    <div>
      {
        !log ?
        <p>Loading...</p> :
        <>
        <h1>{log.event}</h1>
        <EmotionContainer />
        <ThoughtContainer />
      </>
      }
    </div>
    
  )
}

export default LogDetail;