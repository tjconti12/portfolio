import { useState, useEffect } from 'react';
import ProjectNavbar from "../ProjectNavbar/ProjectNavbar";
import * as languageStyles from './Languages.module.css';
import { PieChart } from 'react-minimal-pie-chart';
import Logos from '../Logos/Logos';

const Languages = () => {
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);    

    const items = [];

    const labelStyle = {
        fontSize: '4px',
    }

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

    let colors = ['yellow', 'green', 'pink', 'orange', 'red']

    return (
        <div className={languageStyles.languageSection}>
            <ProjectNavbar />
            <div className={languageStyles.container}>
                <div className={languageStyles.leftColumn}>
                    <div className={languageStyles.chartContainer}>
                        <PieChart
                            className={languageStyles.chart}
                            data={languages.map((obj, index) => {
                                return {title: obj[0], value: obj[1], color: colors[index] ? colors[index] : colors[Math.floor(Math.random() * colors.length)]}
                            })}
                            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                            labelPosition={75}
                            labelStyle={{
                                ...labelStyle
                            }}
                            lineWidth={50}
                            paddingAngle={5}
                            animate={true}
                            animationDuration={500}
                            radius={20}
                        />
                        <div className={languageStyles.labelContainer}>
                        <h2>Label</h2>
                            <div className={languageStyles.labelItemsContainer}>
                                {languages.map((obj, index) => {
                                    return (
                                        <div className={languageStyles.labelItem}>
                                            <h4>{obj[0]}</h4>
                                            <div className={languageStyles.colorBox} style={{"backgroundColor" : colors[index], "width": "20px", "height": "20px"}}></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>  
                </div>
                <div className={languageStyles.rightColumn}>
                    <Logos />
                    <h2 className={languageStyles.sectionTitle}>LANGUAGES AND TOOLS</h2>
                </div>    
            </div>
            
        </div>
    )
}

export default Languages
