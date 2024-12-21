const expList = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/experienceList.json";

async function initExp() {
  let expText = await loadExp();
  const contents = document.getElementById("exp");
  contents.innerHTML = expText;
}

async function loadExp() {
  const response = await fetch(expList);
  if (!response.ok) throw new Error(`Failed to fetch expList: ${response.statusText}`);

  const data = await response.json();
  let projectHTML = '';

    data.experiences.forEach((exp) => {
        console.log(exp.id);
        projectHTML += `<div class="project-section" id="${exp.id}">`;
        projectHTML += `<img src="${exp.imgSrc}" alt="${exp.altText}" class="project-image">`;
        projectHTML += `<div class="project-text">`;

        //text section
        projectHTML += `<h2 class="text-2xl font-bold pt-5">${exp.title}</h2>`;
        projectHTML += `<h2 class="text-1xl italic">${exp.company}</h2>`;
        projectHTML += `<h2 class="text-1xl pb-5">${exp.time}</h2>`;
        exp.description.forEach((desc) => {
        projectHTML += `<p class="py-2">${desc}</p>`;
        });
        projectHTML += `</div>`;
        projectHTML += `</div>`;   
    });
    return projectHTML;
}

initExp();

