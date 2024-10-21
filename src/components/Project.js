import './Project.css';

const Project1 = '/Project1.png';
const Project2 = '/Project2.png';
const Project3 = '/Project3.png';
const Project4 = '/Project4.png';

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={Project1} alt="Project1" className="project-img" />
          <div className="project-info">
            <h3>Pet Roulette</h3>
            <p>Developed a responsive web app using React and Material UI, enabling users to search for pets via the Petfinder 
            API, enhancing user engagement through a dynamic UI and responsive layout</p>
            <a href="https://pet-roulette.github.io/" target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project-card">
          <img src={Project2} alt="Project2" className="project-img" />
          <div className="project-info">
            <h3>MoodBoost API</h3>
            <p>Engineered a RESTful API with Flask and SQLAlchemy to deliver personalized messages, improving data handling 
            by 18% with marshmallow and ensuring endpoint reliability through Postman testing</p>
            <a href="https://moodboostapi.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project-card">
          <img src={Project3} alt="Project3" className="project-img" />
          <div className="project-info">
            <h3>Virtual Portfolio</h3>
            <p>Designed an interactive personal portfolio website to showcase projects, skills, and experiences, featuring a
            responsive design and dynamic components (in progress)</p>
            <a href="https://kjung4706.github.io/" target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project-card">
          <img src={Project4} alt="Project4" className="project-img" />
          <div className="project-info">
            <h3>Checker AI</h3>
            <p>Developed a checkers AI using the minimax algorithm with alpha-beta pruning, optimizing move evaluation 
            and decision-making efficiency for competitive play​</p>
            <a href="https://github.com/kjung4706" target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
