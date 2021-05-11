import * as bannerStyles from './Banner.module.css';
import PortfolioProfilePic from '../../Images/PortfolioProfilePic.jpg';
import linkedin from '../../Images/linkedin.png';
import medium from '../../Images/Medium.png';
import codepen from '../../Images/codepen.png';


const Banner = () => {
    return (
        <div className={bannerStyles.bannerContainer}>
            <div className={bannerStyles.leftColumn}>
                <h1 className={bannerStyles.aboutMe}>ABOUT ME</h1>
            </div>
            <div className={bannerStyles.rightColumn}>
                <div className={bannerStyles.mainImgContainer}>
                    <img className={bannerStyles.mainImg} src={PortfolioProfilePic} alt="Author Smiling" />
                </div>
                <div className={bannerStyles.contentContainer}>
                    <h2 className={bannerStyles.name}>TYLER CONTI</h2>
                    <h3 className={bannerStyles.occupation}>SOFTWARE DEVELOPER</h3>
                    <p className={bannerStyles.brandStatement}>Software developer with an interest in new technologies, learning, science and aviation. I lave good knowledge of front-end technology. I love structure and order, and I also stand for quality.</p>
                    <h3 className={bannerStyles.blogPosts}>BLOG POSTS</h3>
                    <a className={bannerStyles.link} href="https://medium.com/geekculture/make-your-own-tile-map-with-vanilla-javascript-a627de67b7d9" target="_blank">Make Your Own Tile Map with Vanilla Javascript</a>
                    <h3 className={bannerStyles.connectWithMe}>CONNECT WITH ME</h3>
                    <div className={bannerStyles.connectionLogos}>
                        <div className={bannerStyles.connectLogoContainer}>
                            <a className={bannerStyles.link} href="https://www.linkedin.com/in/tylerjconti/" target="_blank"><img className={bannerStyles.connectLogo} src={linkedin} alt="linkedin logo" /></a>
                        </div>
                        <div className={bannerStyles.connectLogoContainer}>
                            <a className={bannerStyles.link} href="https://tjconti12.medium.com/" target="_blank"><img className={bannerStyles.connectLogo} src={medium} alt="medium logo" /></a>
                        </div>
                        <div className={bannerStyles.connectLogoContainer}>
                            <a className={bannerStyles.link} href="https://codepen.io/tjconti12" target="_blank" ><img className={bannerStyles.connectLogo} src={codepen} alt="codepen logo" /></a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner
