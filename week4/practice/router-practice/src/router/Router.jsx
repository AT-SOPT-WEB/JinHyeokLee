import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';

// import createBrowserRouter from 'react-router';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:pokeId',
    element: <PokemonDetail />,
  },
]);

export default router;
