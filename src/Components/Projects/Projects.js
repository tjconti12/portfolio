import ProjectDetail from "../ProjectDetail/ProjectDetail"
import * as projectInfo from '../projects.json';
import { Element } from 'react-scroll';
import { uuid } from 'uuidv4';

const Projects = () => {
    return (
        <div>
        {projectInfo.default.map(project => <Element key={uuid()} id={project.id.toString()}><ProjectDetail details={project} /></Element>)}
        </div>
    )
}

export default Projects
