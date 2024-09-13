import './Hero.css';

const Art = '/Art.png'; 

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Hey there! My name is Kyle and I am a <br /> Full-stack Software Engineer</h1>
          <p>I want to design and develop useful products</p>
          <button className="hero-button">Contact Me</button>
        </div>
        <img src={Art} alt="Decorative Shape One" className="shape-one" />
      </section>
    </div>
  );
};

export default Hero;
