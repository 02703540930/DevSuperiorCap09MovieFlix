
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';


type urlParams = {
  movieId : string;
};

const Reviews = () => {

  const {movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect( () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials:true, 
    }
    requestBackend(config)
    .then((response) => {
      setReviews(response.data)
    })
  },[movieId]

  )
    return (
      <>
        <div className='container'>
          <h1> Tela detalhes do filme id: {movieId}  </h1>

         <p>{reviews}</p>
        </div>
        </>
    );

}

export default Reviews;