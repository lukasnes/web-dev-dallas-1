import { useState } from 'react';

export default function CreateRatingForm({ onCreateRating }) {
  const [scoreValue, setScoreValue] = useState('');

  return (
    <form onSubmit={(e) => onCreateRating(e, { score: scoreValue })}>
      <label htmlFor="score">Score:</label>
      <select
        id="score"
        name="score"
        value={scoreValue}
        onChange={(e) => setScoreValue(e.target.value)}
      >
        <option value="">--</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
