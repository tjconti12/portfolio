import * as navbarStyles from './ProjectNavbar.module.css';

const ProjectNavbar = () => {
    return (
        <nav className={navbarStyles.nav}>
        <div className={navbarStyles.blackLine}></div>
            <ul className={navbarStyles.ul}>
                <li className={navbarStyles.li} >Project 1</li>
                <li className={navbarStyles.li} >Project 2</li>
                <li className={navbarStyles.li} >Project 3</li>
                <li className={navbarStyles.li} >Project 4</li>
                <li className={navbarStyles.li} >Project 5</li>
                <li className={navbarStyles.li} >Project 6</li>
                <li className={navbarStyles.li} >Project 7</li>
            </ul>
        </nav>
    )
}

export default ProjectNavbar
