import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'My Portfolio Website',
      description: 'Explore my world, one project at a time, and meet the latest me.',
      image: '/logos/portfolio.png',
      link: 'https://github.com/alesslovejungkook/portfolio'
    },
    {
      id: 2,
      title: 'Luxxe Palace Hotel',
      description: 'Experience luxury and comfort at Luxxe Palace Hotel in Bulacan.',
      image: '/logos/hotelsystem.png',
      link: 'https://github.com/alesslovejungkook/myhotelsystem/tree/main/Downloads/MyHotelSystem/MyHotelSystem'
    },
    {
      id: 3,
      title: 'Bulacan',
      description: 'Your go-to online guide for everything happening in Bulacan.',
      image: '/logos/bulacann.png',
      link: 'https://github.com/alesslovejungkook/bulacanaless.git'
    },
    {
      id: 4,
      title: 'Tech Care Assistance',
      description: 'Streamlined IT support and device monitoring for LCUP students and staff.',
      image: '/logos/techcare.png',
      link: 'https://techcareassistance.com/?fbclid=PAT01DUAM2P8JleHRuA2FlbQIxMAABp_3QQJwehSDBOBR076ans2lv8VdbMNb5iWYLCk5K2Xo_PbtceGIo5yOWda_3_aem_IDZECa7zemdIbli4fqWfZw'
    }
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
