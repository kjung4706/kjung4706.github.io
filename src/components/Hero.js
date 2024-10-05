import './Hero.css';

const Art = '/Art.png';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Hey! My name is Kyle and I'm a Full-stack Software Engineer</h1>
          <p>Welcome to my portfolio!</p>
          <img src={Art} alt="Decorative Art 1" className="art-one" />
          <button className="hero-button">Contact Me</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
