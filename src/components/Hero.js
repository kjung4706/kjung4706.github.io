import './Hero.css';

const Art1 = '/Art1.png';
const Art2 = '/Art2.png';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Hey! My name is Kyle and I'm a Full-stack Software Engineer</h1>
          <p>Welcome to my portfolio!</p>
          <img src={Art1} alt="Decorative Art 1" className="art-one" />
          <img src={Art2} alt="Decorative Art 2" className="art-two" />
          <button className="hero-button">Contact Me</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
