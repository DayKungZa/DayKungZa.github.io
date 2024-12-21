const projectList = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/projectList";

async function initProjects() {
  let projectText = await loadProject();
  const contents = document.getElementById("project");
  contents.innerHTML = projectText;
}
initProjects();

async function loadProject() {
  const response = await fetch(projectList);
  if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

  const data = await response.json();
  let projectHTML = '';
  data.project.forEach(proj => {
    projectHTML += `<div class="project-section" id="${proj.id}">`;
    projectHTML += `<img src="${proj.imgSrc}" alt="${proj.altText}">`;
    projectHTML += `<div class="project-text">`;
    proj.tags.forEach(tag => {
      projectHTML += `<span class="project-tag">${tag}</span>`;
    });
    projectHTML += `<h2 class="text-2xl bold">${proj.title}</h2>`;
    proj.description.forEach(desc => {
      projectHTML += `<p>${desc}</p>`;
    });
    proj.buttons.forEach(button => {
      projectHTML += `<a href="${button.buttonLink}" class="button" target="_blank">${button.buttonText}</a>`;
    });
    projectHTML += `</div>`;
    projectHTML += `</div>`;
  });
  return projectHTML;
}
