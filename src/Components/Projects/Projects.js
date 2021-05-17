import ProjectDetail from "../ProjectDetail/ProjectDetail"
import * as projectInfo from '../projects.json';
import { Element } from 'react-scroll';

const Projects = () => {
    return (
        <div>
        {projectInfo.default.map(project => <Element id={project.id}><ProjectDetail details={project} /></Element>)}
        </div>
    )
}

export default Projects
