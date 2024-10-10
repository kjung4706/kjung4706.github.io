import './Project.css';

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-img">IMG</div>
          <div className="project-info">
            <h3>Title</h3>
            <p>Info</p>
            <a href="#link">Link</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">IMG</div>
          <div className="project-info">
            <h3>Title</h3>
            <p>Info</p>
            <a href="#link">Link</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">IMG</div>
          <div className="project-info">
            <h3>Title</h3>
            <p>Info</p>
            <a href="#link">Link</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">IMG</div>
          <div className="project-info">
            <h3>Title</h3>
            <p>Info</p>
            <a href="#link">Link</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
