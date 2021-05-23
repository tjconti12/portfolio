import * as projectStyles from './ProjectDetail.module.css';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import { uuid } from 'uuidv4';

const ProjectDetail = ({ details }) => {
    return (
        <div className={projectStyles.projectSection}>
            <div className={projectStyles.gridContainer}>
            <div className={projectStyles.leftColumn}>
                <ProjectCarousel details={details}/>
            </div>
            <div className={projectStyles.rightColumn}>
                <h2 className={projectStyles.title}>{details.title}</h2>
                <h4 className={projectStyles.description}>{details.description}</h4>
                <h3 className={projectStyles.h3}>Motivation</h3>
                <p className={projectStyles.p}>{details.motivation}</p>
                <h3 className={projectStyles.h3}>Build Status</h3>
                <p className={projectStyles.p}>{details.buildStatus}</p>
                <h3 className={projectStyles.h3}>Tech/Framework Used</h3>
                <p className={projectStyles.p}>{details.tech}</p>
                <h3 className={projectStyles.h3}>Features</h3>
                <p className={projectStyles.p}>{details.features}</p>
                <div className={projectStyles.buttonContainer}>
                    <a className={projectStyles.button} href={details.repo} target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className={projectStyles.button} href={details.url} target="_blank" rel="noopener noreferrer">Live Application</a>
                </div>
            </div>
            </div>
            <div className={projectStyles.grayBar}></div>
        </div>
    )
}

export default ProjectDetail
