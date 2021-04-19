import { useRecoilValue } from 'recoil';

import { emotionState } from '../../recoil/logs';
import EmotionDetail from './EmotionDetail';

const EmotionIndex = () => {
  const emotions = useRecoilValue(emotionState);

  return (
    <div>
      {emotions.map(emotion => {
        return <EmotionDetail key={emotion._id} emotion={emotion} />
      })}
    </div>
  )
}

export default EmotionIndex;