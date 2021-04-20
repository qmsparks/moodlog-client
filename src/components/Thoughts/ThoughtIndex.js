import { useRecoilValue } from 'recoil';

import { thoughtState } from '../../recoil/logs';
import ThoughtDetail from './ThoughtDetail';

const ThoughtIndex = () => {
  const thoughts = useRecoilValue(thoughtState);

  return (
    <div>
      {thoughts.map(thought => {
        return <ThoughtDetail key={thought._id} thought={thought} />
      })}
    </div>
  )
}

export default ThoughtIndex;