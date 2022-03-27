import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'Pages/Login';

import './styles.css';

const Home = () => {
  return (
    <div className='main'>
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>

          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-login-container">
          <Login />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
