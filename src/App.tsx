import Hero from "./components/hero/Hero"
import ProjectList from "./components/project-list/ProjectList"
import OtherProjects from "./components/projects/OtherProjects"
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Hero/>
      <ProjectList/>
      <OtherProjects/>
    </div>
  )
}

export default App