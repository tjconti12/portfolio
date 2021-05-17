import { useState } from 'react';
import * as navbarStyles from './ProjectNavbar.module.css';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link

const ProjectNavbar = () => {

    const [firstActive, setFirstActive] = useState(false);
    const [secondActive, setSecondActive] = useState(false);
    const [thirdActive, setThirdActive] = useState(false);

    return (
        <nav className={navbarStyles.nav}>
        <div className={navbarStyles.blackLine}></div>
            <ul className={navbarStyles.ul}>
                <li className={navbarStyles.li} style={ firstActive? {"border": "2px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="1" spy={true} smooth={true} duration={500} offset={-150} onSetActive={() => setFirstActive(true)} onSetInactive={() => setFirstActive(false)}>
                        <h3>Project 1</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ secondActive? {"border": "2px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="2" spy={true} smooth={true} duration={500} offset={-150} onSetActive={() => setSecondActive(true)} onSetInactive={() => setSecondActive(false)}>
                        <h3>Project 2</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ thirdActive? {"border": "2px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="3" spy={true} smooth={true} duration={500} offset={-150} onSetActive={() => setThirdActive(true)} onSetInactive={() => setThirdActive(false)}>
                        <h3>Project 3</h3>
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    )
}

export default ProjectNavbar
