import * as navbarStyles from './ProjectNavbar.module.css';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link

const ProjectNavbar = () => {
    return (
        <nav className={navbarStyles.nav}>
        <div className={navbarStyles.blackLine}></div>
            <ul className={navbarStyles.ul}>
                <li className={navbarStyles.li} ><ScrollLink to="1" spy={true} smooth={true} duration={500}><h3>Project 1</h3></ScrollLink></li>
                <li className={navbarStyles.li} ><ScrollLink to="2" spy={true} smooth={true} duration={500}><h3>Project 2</h3></ScrollLink></li>
                <li className={navbarStyles.li} ><ScrollLink to="3" spy={true} smooth={true} duration={500}><h3>Project 3</h3></ScrollLink></li>
            </ul>
        </nav>
    )
}

export default ProjectNavbar
