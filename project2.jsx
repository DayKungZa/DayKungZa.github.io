import React, { useState, useEffect } from "react";

const projectListUrl = "https://raw.githubusercontent.com/DayKungZa/DayKungZa.github.io/refs/heads/main/projectList.json";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isTagSearchOpen, setIsTagSearchOpen] = useState(false);

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    try {
      const response = await fetch(projectListUrl);
      if (!response.ok) throw new Error(`Failed to fetch projectList: ${response.statusText}`);

      const data = await response.json();
      setProjects(data.project);

      // Extract tags
      const uniqueTags = new Set();
      data.project.forEach((proj) => {
        proj.tags.forEach((tag) => uniqueTags.add(tag));
      });
      setTags([...uniqueTags]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const filteredProjects = projects.filter((proj) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((tag) => proj.tags.includes(tag));
  });

  return (
    <div>
      <div id="tag-section" className="tag-section">
        {isTagSearchOpen ? (
          <>
            <span
              className="project-tag search-selected bg-red-500 text-white"
              onClick={() => {
                setIsTagSearchOpen(false);
                setSelectedTags([]);
              }}
            >
              Close Tags Search
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`project-tag ${selectedTags.includes(tag) ? "tag-selected bg-blue-500 text-white" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </>
        ) : (
          <span
            className="project-tag"
            onClick={() => setIsTagSearchOpen(true)}
          >
            Open Tags Search
          </span>
        )}
      </div>

      <div id="project" className="project">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj) => (
            <div className="project-section" key={proj.id} id={proj.id}>
              <img src={proj.imgSrc} alt={proj.altText} className="project-image" />
              <div className="project-text">
                <div>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold py-5">{proj.title}</h2>
                {proj.description.map((desc, index) => (
                  <p key={index} className="py-2">
                    {desc}
                  </p>
                ))}
                <div className="flex flex-wrap">
                  {proj.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.buttonLink}
                      className="w-5/10 bg-black text-white p-2 my-4 mr-4 text-lg transition-colors duration-300 hover:bg-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {button.buttonText}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl font-bold py-5">No projects found</h2>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
