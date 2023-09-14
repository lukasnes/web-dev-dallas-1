import { useLoaderData,Link } from "react-router-dom";

export default function YourRatingsPage() {
  let {ratings} = useLoaderData()
  console.log(ratings)
  let ratingsListItems = ratings.map(({score,movieId,ratingId,movie: {title}}) => {
    return (
      <li key={ratingId}>
        <Link to={`/movies/${movieId}`}>
          {title} 
        </Link>
        || {score}
      </li>
    )
  })

  return (
    <>
      <h1>Your Ratings</h1>
      <ul>
        {ratingsListItems}
      </ul>
    </>
  );
}
