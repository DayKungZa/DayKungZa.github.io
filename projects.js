const projectList = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/projectList.json";
let selectedTags = []; 

async function initProjects() {
  let projectText = await loadProject();
  const contents = document.getElementById("project");
  contents.innerHTML = projectText;
}

async function loadTags(){
  const response = await fetch(projectList);
  if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

  const data = await response.json();
  let tags = new Set();
  data.project.forEach((proj) => {
    proj.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  //print tags into html
  let tagHTML = ``;
  tags.forEach((tag) => {
    tagHTML += `<span class="project-tag" id="${tag}" onclick="tagClick('this')">${tag}</span>`;
  });
  const tagInsert = document.getElementById("tag-section");
  tagInsert.innerHTML = tagHTML;
}

async function tagClick(obj, tag){
  console.log(`${tag} clicked`);


  //if tag has class tag-selected, remove it
  if(tag.classList.contains("tag-selected")){
    selectedTags = selectedTags.filter((item) => item !== tag); //remove tag from selectedTags
    //remove class from tag if deselected
    obj.classList.remove("tag-selected");

  } else {
    selectedTags.push(tag); //add tag to selectedTags
    //add class to tag if selected
    obj.classList.add("tag-selected");
  }
  const contents = document.getElementById("project");
  contents.innerHTML = await loadProject(selectedTags);
}

async function loadProject(selectedTags) {
  const response = await fetch(projectList);
  if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

  const data = await response.json();
  let projectHTML = '';

  data.project.forEach((proj) => {
    //check if there are selected tags
    if (selectedTags && selectedTags.length > 0) {
      let found = false;
      selectedTags.forEach((tag) => {
        if (proj.tags.includes(tag)) {
          found = true;
        }
      });
      //if not foung, skip this project
      if (!found) return;
    }
    console.log(proj.id);
    projectHTML += `<div class="project-section" id="${proj.id}">`;
    projectHTML += `<img src="${proj.imgSrc}" alt="${proj.altText}" class="project-image">`;
    projectHTML += `<div class="project-text">`;

    //tags
    projectHTML += `<div>`;
    proj.tags.forEach((tag) => {
      projectHTML += `<span class="project-tag">${tag}</span>`;
    });
    projectHTML += `</div>`;

    //text section
    projectHTML += `<h2 class="text-2xl font-bold py-5">${proj.title}</h2>`;
    proj.description.forEach((desc) => {
      projectHTML += `<p class="py-2">${desc}</p>`;
    });

    //buttons
    projectHTML += `<div class="flex flex-wrap">`;
    proj.buttons.forEach((button) => {
      projectHTML += `<a href="${button.buttonLink}" class="w-5/10 bg-black text-white p-2 my-4 mr-4 text-lg transition-colors duration-300 hover:bg-blue-500" target="_blank">${button.buttonText}</a>`;
    });
    projectHTML += `</div>`;
    projectHTML += `</div>`;
    projectHTML += `</div>`;
  });

  return projectHTML;
}

initProjects();
loadTags();
