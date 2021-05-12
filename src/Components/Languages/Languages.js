import { useState, useEffect } from 'react';
import ProjectNavbar from "../ProjectNavbar/ProjectNavbar";
import * as languageStyles from './Languages.module.css';
import { PieChart } from 'react-minimal-pie-chart';
import Logos from '../Logos/Logos';
import Chart from '../Chart/Chart';

const Languages = () => {
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);    

    const items = [];

    

    const getRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/tjconti12/repos');
            const data = await response.json();
            setRepos(data)
        } catch (error) {
            console.log(error)
        }
    }


    const getLanguages = () => {
        let languageTotal = [];
        repos.map(async repo => {
            const response = await fetch(repo.languages_url);
            const data = await response.json();
            for(const key in data){
                if(languageTotal[key]){
                    languageTotal[key] += data[key]
                } else {
                    languageTotal[key] = data[key]
                }
            }
            setLanguages(Object.entries(languageTotal))
        })
    }

    useEffect(() => {
        getRepos();
    }, [])

    useEffect(() => {
        if(repos) getLanguages()
    }, [repos])

    

    return (
        <div className={languageStyles.languageSection}>
            <ProjectNavbar />
            <div className={languageStyles.container}>
                <div className={languageStyles.leftColumn}>
                    <Chart languages={languages} />
                </div>
                <div className={languageStyles.rightColumn}>
                    <Logos />
                    <h2 className={languageStyles.sectionTitle}>LANGUAGES AND TOOLS</h2>
                </div>    
            </div>
            <div className={languageStyles.bottomBar}>

            </div>
        </div>
    )
}

export default Languages
