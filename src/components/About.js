import './About.css';

const Profile = '/Profile.jpg'; 

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-shapes">
        <div className="shape shape-black">
          <h1>About Me</h1>
        </div>
        <div className="shape shape-blue">
          <div className="blue">
            <h2>Skills</h2>
            <div className="blue-section">
              <div>
                <h3>Languages 🌐</h3>
                <div className="blue-section column">
                  <p>Python</p>
                  <p>JavaScript</p>
                  <p>SQL</p>
                  <p>C++</p>
                  <p>Java</p>
                  <p>HTML/CSS</p>
                </div>
              </div>
              <div>
                <h3>Frameworks 🏗️</h3>
                <div className="blue-section column">
                  <p>React</p>
                  <p>Flask</p>
                  <p>.NET</p>
                  <p>Node.js</p>
                  <p>RESTful API</p>
                  <p>Ruby on Rails</p>
                </div>
              </div>
              <div>
                <h3>Other 🔧</h3>
                <div className="blue-section column">
                  <p>AWS ECS</p>
                  <p>Docker</p>
                  <p>MySQL</p>
                  <p>Git</p>
                  <p>NumPy</p>
                  <p>pandas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape shape-green">
          <img src={Profile} alt="Profile" className="profile-one" />
          <p><b>Full Name</b> → Kyle Jung</p>
        </div>
        <div className="shape shape-pink">
          <div><b>Location</b> → Irvine, CA</div>
          <div><b>Languages</b> → English & Korean</div>
          <div><b>Hobbies</b> → Pickleball & Hiking</div>
          <div><b>Education</b> → UC Irvine</div>
        </div>
      </div>
    </section>
  );
};

export default About;
