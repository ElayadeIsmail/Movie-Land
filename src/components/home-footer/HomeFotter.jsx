import React from "react";
import "./home-fotter.style.scss";

const HomeFotter = () => (
  <React.Fragment>
    <div className='home-fotter'>
      <h1 className='home-fotter-title'>
        <span className='li'>Movie</span>Land
      </h1>
      <p>
        MovielAND - Free movies online - . Yes! It is, you're in a Land that you
        can watch thousands blockbuster free movies, tv-series online for free
        on movieLand . Watch free movies for everyone, at everywhere, on
        everydevice, and watch everything. "movieLand" is next Your Right
        Choose.
      </p>
      <h3>Copyright © movieLand. All Rights Reserved</h3>
      <span>
        Disclaimer: This site (movieLand) does not store any files on its
        server. All contents are provided by non-affiliated third parties.
      </span>
    </div>
    <div className='footer'>
      <h1>
        Made by <span className='li'>Elayade</span>
      </h1>
    </div>
  </React.Fragment>
);

export default HomeFotter;
