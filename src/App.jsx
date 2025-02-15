import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProject } from "./components/NoProject";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { SelectedProject } from "./components/SelectedProject";

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

  const handleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
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
        selectedProject: undefined,
        projects: [...prevState.projects, data]
      }
    });
  }

  const handleSelectProject = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  const handleDeleteProject = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(p => p.id !== id)
      }
    })
  }

  const selectedProject = projectState.projects.find(p => p.id === projectState.selectedProject);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  if (projectState.selectedProject === undefined) content = <NoProject onAdd={handleAddProject} />
  else if (projectState.selectedProject === null) content = <NewProject onSave={handleSaveProject} onCancel={handleCancelAddProject} />

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onAdd={handleAddProject} 
        projects={projectState.projects} 
        onSelect={handleSelectProject} 
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
