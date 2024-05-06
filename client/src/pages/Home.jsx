import React from 'react';
import './Home.css';


const Homepage = () => {
  return (
    <div className="homepage">
      <div className='container'><header>
        <h1>Welcome to your Compendium!</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>✨A place to document your travels and adventures with the plants you find along the way✨</h2>
          {/* <p>I'm a lover of all things cute and cuddly! 🐻✨</p> */}
          <p>Log every plant you see for safe keeping!</p>
        </section>
        <section className="gallery-section">
          <h2> “One's destination is never a place, but a new way of seeing things.” - Henry Miller</h2>
          <div className="image-grid">
            <img src="../../imgs/alpine.jpg" alt="Cute Image 1" />
            <img src="../../imgs/waterfall.jpg" alt="Cute Image 2" />
            <img src="../../imgs/trail.jpg" alt="Cute Image 3" />
            <img src="../../imgs/woods.jpg" alt="Cute Image 3" />
            {/* Add more cute images here */}
          </div>
        </section>
        <section className="add-friends-section">
          <h2>Add Friends (Coming Soon)</h2>
          <p>Stay tuned for the ability to add friends!</p>
          <p>Connect with fellow adenture enthusiasts!</p>
        </section>
       
      </main>
      <footer>
        <p>&copy; 2024 Compendium</p>
      </footer>
    </div>
    </div>
  );
};

export default Homepage;