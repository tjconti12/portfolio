import * as projectStyles from './ProjectDetail.module.css';
import javascript from '../../Images/javascript.png';
import sass from '../../Images/sass.png';
import html from '../../Images/html.png';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';

const ProjectDetail = ({ details }) => {
    console.log(details)
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
                <p>{details.motivation}</p>
                <h3 className={projectStyles.h3}>Build Status</h3>
                <p>{details.buildStatus}</p>
                <h3 className={projectStyles.h3}>Tech/Framework Used</h3>
                <p>{details.tech}</p>
                <h3 className={projectStyles.h3}>Features</h3>
                <p>{details.features}</p>
                <div className={projectStyles.logoContainer}>
                    {/* <div className={projectStyles.logoImgContainer}>
                        <img className={projectStyles.logoImg} src={javascript} alt="" />
                        <p>92.8%</p>
                    </div>
                    <div className={projectStyles.logoImgContainer}>
                        <img className={projectStyles.logoImg} src={sass} alt="" />
                        <p>4.2%</p>
                    </div>
                    <div className={projectStyles.logoImgContainer}>
                        <img className={projectStyles.logoImg} src={html} alt="" />
                        <p>3.0%</p>
                    </div> */}
                    {details.languages.map(lang => {
                        return (
                            <div className={projectStyles.logoImgContainer}>
                                <img className={projectStyles.logoImg} src={lang.url} alt="" />
                            <p>{lang.percent}%</p>
                    </div>
                        )
                    })}
                    <div className={projectStyles.languageBarContainer}>
                        <img className={projectStyles.languageBar} src={details.languageBar} alt="" />
                    </div>
                </div>
            </div>
            </div>
            <div className={projectStyles.footer}>
                <h3 className={projectStyles.footerTitle}>Project {details.id}</h3>
                <div className={projectStyles.blackBar}></div>
            </div>
        </div>
    )
}

export default ProjectDetail
