import * as socialStyles from './socialBanner.module.css';
import linkedin from '../../Images/linkedin.png';
import medium from '../../Images/Medium.png';
import github from '../../Images/github.png';


const SocialBanner = () => {
    return (
        <div className={socialStyles.container}>
            <div className={socialStyles.square}>
                <h3 className={socialStyles.squareHeader}>Resume</h3>
                <a href="https://drive.google.com/file/d/1VMd4l0SLDovPFCcaVKdIEu5ZL6ZfB8b0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={socialStyles.button}>View PDF</a>
            </div>
            <div className={socialStyles.square}>
                <h3 className={socialStyles.squareHeader}>Publications</h3>
                <a href="https://medium.com/geekculture/make-your-own-tile-map-with-vanilla-javascript-a627de67b7d9" target="_blank" rel="noopener noreferrer" className={socialStyles.button}>Geek Culture</a>
            </div>
            <div className={socialStyles.square}>
                <h3 className={socialStyles.squareHeader}>Connect With Me</h3>
                    <div className={socialStyles.connectionLogos}>
                        <div className={socialStyles.connectLogoContainer}>
                            <a className={socialStyles.link} href="https://www.linkedin.com/in/tylerjconti/" target="_blank" rel="noopener noreferrer"><img className={socialStyles.connectLogo} src={linkedin} alt="linkedin logo" /></a>
                        </div>
                        <div className={socialStyles.connectLogoContainerMedium}>
                            <a className={socialStyles.link} href="https://tjconti12.medium.com/" target="_blank" rel="noopener noreferrer"><img className={socialStyles.connectLogo} src={medium} alt="medium logo" /></a>
                        </div>
                        <div className={socialStyles.connectLogoContainer}>
                            <a className={socialStyles.link} href="https://github.com/tjconti12/" target="_blank" rel="noopener noreferrer"><img className={socialStyles.connectLogo} src={github} alt="github logo" /></a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SocialBanner
