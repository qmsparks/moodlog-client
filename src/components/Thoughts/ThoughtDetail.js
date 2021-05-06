const ThoughtDetail = ({ thought }) => {

  return (
    <p>{thought.negativeThought} {thought.startStrength}%</p>
  )
}

export default ThoughtDetail;