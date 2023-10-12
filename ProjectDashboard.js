//Making the scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  const project_containers = document.querySelectorAll('.project-container');
  project_containers.forEach((el) => observer.observe(el));