const textID = "content";
const topics = "https://raw.githubusercontent.com/DayKungZa/reviews/main/topics.json";
let clicked = false;
let headerFooterText = ''; 

async function initProjects() {
  headerFooterText = await loadProjects();
}
initProjects();

async function loadProject() {
    const response = await fetch(projectList);
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const project = data.project;

    // Get reference to the container where the HTML will be added
    const container = document.querySelector('body');

    // Create the project section dynamically
    const projectSection = document.createElement('div');
    projectSection.className = 'project-section';
    projectSection.id = project.id;

    // Add image
    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.altText;
    projectSection.appendChild(img);

    // Add text container
    const projectText = document.createElement('div');
    projectText.className = 'project-text';

    // Add tags
    const tags = document.createElement('span');
    tags.textContent = project.tags;
    projectText.appendChild(tags);

    // Add title
    const title = document.createElement('h2');
    title.textContent = project.title;
    projectText.appendChild(title);

    // Add description
    const description = document.createElement('p');
    project.description.forEach(line => {
      const textLine = document.createTextNode(line);
      description.appendChild(textLine);
      description.appendChild(document.createElement('br'));
    });
    projectText.appendChild(description);

    // Add button
    const button = document.createElement('a');
    button.href = project.buttonLink;
    button.className = 'button';
    button.target = '_blank';
    button.textContent = project.buttonText;
    projectText.appendChild(button);

    // Append text container to project section
    projectSection.appendChild(projectText);

    // Append the entire project section to the container
    container.appendChild(projectSection);
  })
  .catch(error => console.error('Error loading project data:', error));