import { useLoaderData, useNavigate } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm.jsx';
import axios from 'axios';

export default function MovieDetailPage() {
  const { movie } = useLoaderData();
  const { title,posterPath,overview,movieId } = movie
  const navigate = useNavigate()

  const handleCreateRating = async(evt, { score } ) => {
    evt.preventDefault()
    const res = await axios.post('/api/ratings',{ score, movieId })
    if(res.data){
      navigate('/me')
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <img src={posterPath} alt={title} style={{width: '200px'}}/>
      <p>{overview}</p>
      <h2>Rate this movie</h2>
      <CreateRatingForm onCreateRating={handleCreateRating}/>
    </>
  );
}
