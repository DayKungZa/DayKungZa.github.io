const expList = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/experienceList";

async function initExp() {
  let expText = await loadExp();
  const contents = document.getElementById("exp");
  contents.innerHTML = expText;
}

async function loadExp() {
  const response = await fetch(expList);
  if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

  const data = await response.json();
  let projectHTML = '';

    data.project.forEach((proj) => {
        console.log(proj.id);
        projectHTML += `<div class="project-section" id="${proj.id}">`;
        projectHTML += `<img src="${proj.imgSrc}" alt="${proj.altText}" class="project-image">`;
        projectHTML += `<div class="project-text">`;

        //text section
        projectHTML += `<h2 class="text-2xl font-bold pt-5">${proj.title}</h2>`;
        projectHTML += `<h2 class="text-1xl italic">${proj.company}</h2>`;
        projectHTML += `<h2 class="text-1xl pb-5">${proj.time}</h2>`;
        proj.description.forEach((desc) => {
        projectHTML += `<p class="py-2">${desc}</p>`;
        });
    });
    return projectHTML;
}

initExp();

