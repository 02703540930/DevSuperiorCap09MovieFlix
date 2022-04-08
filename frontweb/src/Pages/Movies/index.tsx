import { AxiosRequestConfig } from 'axios';
import MovieCatalog from 'components/moviecatalog';
import { useEffect, useState } from 'react';
import { MoviesData } from 'types/moviesdata';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';


const Movies = () => {
  const [page, setPage] = useState<SpringPage<MoviesData>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <div>
        <div className="movie-card">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="card-bottom-container">
          {page?.content.map((movie) => (
              <MovieCatalog movies={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
