import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counters from './Counters.jsx';
import Die from './Die.jsx';
import Layout from './Layout.jsx';
import MissingKey from './MissingKey.jsx';
import MovieList from './MovieList.jsx';
import Pokemon from './Pokemon.jsx';

export default function App() {
  return (
    // This router handles what should be displayed on the screen.
    // It allows us to link to multiple "pages",
    // even though each "page" shows up on the same screen
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/dice"
            element={
              <div>
                <Die sides="4" />
                <Die sides="6" />
                <Die sides="8" />
                <Die sides="10" />
                <Die sides="12" />
                <Die sides="20" />
              </div>
            }
          />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/missing-key" element={<MissingKey />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/pokemon" element={<Pokemon num={10} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
