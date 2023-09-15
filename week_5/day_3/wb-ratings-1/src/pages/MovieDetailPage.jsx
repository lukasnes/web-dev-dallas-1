import { useLoaderData } from 'react-router-dom';

export default function MovieDetailPage() {
  const response = useLoaderData();
  const movieDetail = response.data;

  return (
    <>
      <h1>Movie Detail Page</h1>
      <p>TODO</p>
    </>
  );
}
