import useLogs from '../hooks/useLogs';
import EmotionIndex from '../components/Emotions/EmotionIndex';
import NewEmotion from '../components/Emotions/NewEmotion';

const LogDetail = ({ match }) => {
  const [log] = useLogs(match.params.id);

  return (
    <div>
      {
        !log ?
        <p>Loading...</p> :
        <>
        <h3>{log.event}</h3>
      <EmotionIndex emotions={log.emotions}/>
      <NewEmotion logId={log._id} />
      </>
      }
    </div>
    
  )
}

export default LogDetail;