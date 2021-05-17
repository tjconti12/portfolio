import * as bannerStyles from './Banner.module.css';
import PortfolioProfilePic from '../../Images/PortfolioProfilePic.jpg';
import linkedin from '../../Images/linkedin.png';
import medium from '../../Images/Medium.png';
import github from '../../Images/github.png';


const Banner = () => {
    return (
        <div className={bannerStyles.bannerContainer}>
            <div className={bannerStyles.leftColumn}>
                <h1 className={bannerStyles.aboutMe}>ABOUT ME</h1>
            </div>
            <div className={bannerStyles.rightColumn}>
                <div className={bannerStyles.leftColumnImgContainer}>
                    <div className={bannerStyles.mainImgContainer}>
                        <img className={bannerStyles.mainImg} src={PortfolioProfilePic} alt="Author Smiling" />
                    </div>
                </div>
                <div className={bannerStyles.contentContainer}>
                    <h2 className={bannerStyles.name}>TYLER CONTI</h2>
                    <h3 className={bannerStyles.occupation}>SOFTWARE DEVELOPER</h3>
                    <p className={bannerStyles.brandStatement}>I am a software developer with a background in Biology and Aviation. I aim to work with and motivate others to collectively solve complex problems with creative solutions. I bring my passion for knowledge and experience into each opportunity that I am given. My unique background coupled with experience in teaching and leadership enables me to approach each project with a logical and empathetic perspective.</p>
                    <h3 className={bannerStyles.blogPosts}>BLOG POSTS</h3>
                    <a className={bannerStyles.link} href="https://medium.com/geekculture/make-your-own-tile-map-with-vanilla-javascript-a627de67b7d9" target="_blank" rel="noopener noreferrer">Make Your Own Tile Map with Vanilla Javascript</a>
                    <h3 className={bannerStyles.connectWithMe}>CONNECT WITH ME</h3>
                    <div className={bannerStyles.connectionLogos}>
                        <div className={bannerStyles.connectLogoContainer}>
                            <a className={bannerStyles.link} href="https://www.linkedin.com/in/tylerjconti/" target="_blank" rel="noopener noreferrer"><img className={bannerStyles.connectLogo} src={linkedin} alt="linkedin logo" /></a>
                        </div>
                        <div className={bannerStyles.connectLogoContainer}>
                            <a className={bannerStyles.link} href="https://tjconti12.medium.com/" target="_blank" rel="noopener noreferrer"><img className={bannerStyles.connectLogo} src={medium} alt="medium logo" /></a>
                        </div>
                        <div className={bannerStyles.connectLogoContainerGit}>
                            <a className={bannerStyles.link} href="https://github.com/tjconti12/" target="_blank" rel="noopener noreferrer"><img className={bannerStyles.connectLogo} src={github} alt="github logo" /></a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner
