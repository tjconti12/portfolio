import * as footerStyles from './Footer.module.css';
import linkedin from '../../Images/linkedin.png';
import medium from '../../Images/Medium.png';
import github from '../../Images/github.png';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.topFooter}>
                <h4 className={footerStyles.moreInfo}>For more information, you can find my accounts below</h4>
                    <div className={footerStyles.connectionLogos}>
                        <div className={footerStyles.connectLogoContainer}>
                            <a className={footerStyles.link} href="https://www.linkedin.com/in/tylerjconti/" target="_blank" rel="noopener noreferrer"><img className={footerStyles.connectLogo} src={linkedin} alt="linkedin logo" /></a>
                        </div>
                        <div className={footerStyles.connectLogoContainerMedium}>
                            <a className={footerStyles.link} href="https://tjconti12.medium.com/" target="_blank" rel="noopener noreferrer"><img className={footerStyles.connectLogo} src={medium} alt="medium logo" /></a>
                        </div>
                        <div className={footerStyles.connectLogoContainer}>
                            <a className={footerStyles.link} href="https://github.com/tjconti12/" target="_blank" rel="noopener noreferrer"><img className={footerStyles.connectLogo} src={github} alt="github logo" /></a>
                        </div>
                    </div>
            </div>
            <div className={footerStyles.bottomFooter}>
                <h4 className={footerStyles.name}>&copy; Tyler Conti <span className={footerStyles.afterName}>|</span> Portfolio</h4>
            </div>
        </div>
    )
}

export default Footer
