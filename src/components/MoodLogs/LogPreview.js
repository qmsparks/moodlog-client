import { Link } from 'react-router-dom';

const LogPreview = ({log}) => {

  return (
    <div>
      <Link to={`/logs/${log._id}`}>
      <p>{log.event}</p>
      </Link>
    </div>
  )
}

export default LogPreview;