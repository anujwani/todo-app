import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProject } from "./components/NoProject";
import { ProjectSidebar } from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })

  const handleAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  const handleSaveProject = (data) => {
    setProjectState(prevState => {
      const prev_id = prevState && prevState.projects && prevState.projects.length > 0 ? 
        Math.max(...prevState.projects.map(p => p.id)) : 0

      data.id = prev_id + 1

      return {
        ...prevState,
        projects: [...prevState.projects, data]
      }
    });
  }

  let content;
  if (projectState.selectedProject === null) content = <NewProject onSave={handleSaveProject} />
  else if (projectState.selectedProject === undefined) content = <NoProject onAdd={handleAddProject} />

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAdd={handleAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
