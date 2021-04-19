const EmotionDetail = ({ emotion }) => {

  return (
    <p>{emotion.startStrength}% {emotion.name}</p>
  )
}

export default EmotionDetail;