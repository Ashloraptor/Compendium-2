import React from 'react';
import './Home.css'; // Import CSS for styling

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
          <p>Join me on my adorable adventures!</p>
        </section>
        <section className="gallery-section">
          <h2>Cute Gallery</h2>
          <div className="image-grid">
            <img src="cute-image1.jpg" alt="Cute Image 1" />
            <img src="cute-image2.jpg" alt="Cute Image 2" />
            <img src="cute-image3.jpg" alt="Cute Image 3" />
            {/* Add more cute images here */}
          </div>
        </section>
        <section className="add-friends-section">
          <h2>Add Friends (Coming Soon)</h2>
          <p>Stay tuned for the ability to add friends!</p>
          <p>Connect with fellow cute enthusiasts!</p>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <p>Let's stay in touch!</p>
          <p>Email: cute@example.com</p>
          <p>Phone: 123-456-7890</p>
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