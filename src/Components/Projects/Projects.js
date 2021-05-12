import ProjectDetail from "../ProjectDetail/ProjectDetail"
import * as projectInfo from '../projects.json';

const Projects = () => {
    console.log(projectInfo.default)
    return (
        <div>
        {projectInfo.default.map(project => <ProjectDetail details={project} />)}
        </div>
    )
}

export default Projects
