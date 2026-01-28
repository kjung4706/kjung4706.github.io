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
          <a href="#about" className="hero-button">About Me</a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
