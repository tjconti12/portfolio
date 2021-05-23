// import { useState, useEffect } from 'react';
import * as languageStyles from './Languages.module.css';
import Logos from '../Logos/Logos';
import Chart from '../Chart/Chart';

const Languages = () => {
    

    return (
        <div className={languageStyles.container}>
            <h2 className={languageStyles.title}>Skills | Languages</h2>
            <div className={languageStyles.listContainer}>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>Javascript</li>
                    <li className={languageStyles.li}>Html</li>
                    <li className={languageStyles.li}>Git</li>
                    <li className={languageStyles.li}>React</li>
                </ul>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>Css</li>
                    <li className={languageStyles.li}>Css Modules</li>
                    <li className={languageStyles.li}>Bootstrap</li>
                    <li className={languageStyles.li}>Tailwind Css</li>
                </ul>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>SASS</li>
                    <li className={languageStyles.li}>REST APIs</li>
                    <li className={languageStyles.li}>Node</li>
                    <li className={languageStyles.li}>Express</li>
                </ul>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>Python</li>
                    <li className={languageStyles.li}>Django</li>
                    <li className={languageStyles.li}>Material UI</li>
                    <li className={languageStyles.li}>Command Line (CLI)</li>
                </ul>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>Mongo DB</li>
                    <li className={languageStyles.li}>Mongoose</li>
                    <li className={languageStyles.li}>PostreSQL</li>
                    <li className={languageStyles.li}>Placeholder</li>
                </ul>
                <ul className={languageStyles.ul}>
                    <li className={languageStyles.li}>Design</li>
                    <li className={languageStyles.li}>Photoshop</li>
                    <li className={languageStyles.li}>MS Office</li>
                    <li className={languageStyles.li}>Mac & Windows</li>
                </ul>
            </div>
        </div>
    )
}

export default Languages
