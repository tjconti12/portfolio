import { useState } from 'react';
import * as navbarStyles from './ProjectNavbar.module.css';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link

const ProjectNavbar = () => {

    const [firstActive, setFirstActive] = useState(false);
    const [secondActive, setSecondActive] = useState(false);
    const [thirdActive, setThirdActive] = useState(false);
    const [fourthActive, setFourthActive] = useState(false);
    const [fifthActive, setFifthActive] = useState(false);
    const [sixthActive, setSixthActive] = useState(false);

    return (
        <nav className={navbarStyles.nav}>
        <div className={navbarStyles.blackLine}></div>
            <ul className={navbarStyles.ul}>
                <li className={navbarStyles.li} style={ firstActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="1" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setFirstActive(true)} onSetInactive={() => setFirstActive(false)}>
                        <h3 className={navbarStyles.h3}>Project 1</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ secondActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="2" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setSecondActive(true)} onSetInactive={() => setSecondActive(false)}>
                        <h3 className={navbarStyles.h3} >Project 2</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ thirdActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="3" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setThirdActive(true)} onSetInactive={() => setThirdActive(false)}>
                        <h3 className={navbarStyles.h3}>Project 3</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ fourthActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="4" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setFourthActive(true)} onSetInactive={() => setFourthActive(false)}>
                        <h3 className={navbarStyles.h3}>Project 4</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ fifthActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="5" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setFifthActive(true)} onSetInactive={() => setFifthActive(false)}>
                        <h3 className={navbarStyles.h3}>Project 5</h3>
                    </ScrollLink>
                </li>
                <li className={navbarStyles.li} style={ sixthActive? {"border": "3px solid black"} : {'border': 'none'}}>
                    <ScrollLink to="6" spy={true} smooth={true} duration={500} offset={-100} onSetActive={() => setSixthActive(true)} onSetInactive={() => setSixthActive(false)}>
                        <h3 className={navbarStyles.h3}>Project 6</h3>
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    )
}

export default ProjectNavbar
