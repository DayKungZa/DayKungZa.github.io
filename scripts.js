const projectList = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/projectList";

async function initProjects() {
  let projectText = await loadProject();
  const contents = document.getElementById("project");
  contents.innerHTML = projectText;
}

async function loadProject() {
  const response = await fetch(projectList);
  if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

  const data = await response.json();
  let projectHTML = '';

  data.project.forEach((proj) => {
    // Start project section
    projectHTML += `<div class="project-section" id="${proj.id}">`;
    
    // Add project image
    projectHTML += `<img src="${proj.imgSrc}" alt="${proj.altText}" class="project-image">`;
    
    // Start text section
    projectHTML += `<div class="project-text">`;

    // Add tags
    projectHTML += `<div class="project-tags">`;
    proj.tags.forEach((tag) => {
      projectHTML += `<span class="project-tag">${tag}</span>`;
    });
    projectHTML += `</div>`;

    // Add project title
    projectHTML += `<h2 class="text-2xl font-bold">${proj.title}</h2>`;

    // Add project description
    proj.description.forEach((desc) => {
      projectHTML += `<p>${desc}</p>`;
    });

    // Add buttons
    if (proj.buttons && proj.buttons.length > 0) {
      projectHTML += `<div class="project-buttons">`;
      proj.buttons.forEach((button) => {
        projectHTML += `<a href="${button.buttonLink}" class="button" target="_blank">${button.buttonText}</a>`;
      });
      projectHTML += `</div>`;
    }

    // Close text section
    projectHTML += `</div>`;
    
    // Close project section
    projectHTML += `</div>`;
  });

  return projectHTML;
}


initProjects();