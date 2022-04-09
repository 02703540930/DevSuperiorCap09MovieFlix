

import { MoviesData } from 'types/moviesdata';
import './styles.css';

type Props = {
  movies: MoviesData;
};
const MovieCatalog = ({ movies }: Props) => {
  

  return (
    <div className="container ">
      <div className="row catalog-title-container">
      </div>
      <div className="row" >
        <div className="col-sm-6 col-lg-4 col-xl-12"  >
          <h1> Acessar /moveis/{movies.id}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCatalog;
