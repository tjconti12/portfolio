import * as bannerStyles from './Banner.module.css';
import PortfolioProfilePic from '../../Images/bwProfilePic.jpg';
import linkedin from '../../Images/linkedin.png';
import medium from '../../Images/Medium.png';
import github from '../../Images/github.png';


const Banner = () => {
    return (
        <div className={bannerStyles.bannerContainer}>
            <div className={bannerStyles.leftColumn}>
                <div className={bannerStyles.aboutMeContainer}>
                    <h1 className={bannerStyles.aboutMe}>ABOUT ME</h1>
                </div>
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
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner
