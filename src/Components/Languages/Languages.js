import { useState, useEffect } from 'react';
import * as languageStyles from './Languages.module.css';
import Logos from '../Logos/Logos';
import Chart from '../Chart/Chart';

const Languages = () => {
    const [repos, setRepos] = useState(null);
    const [languages, setLanguages] = useState(null);    

    const getRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/tjconti12/repos', {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            });
            const data = await response.json();
            setRepos(data)
        } catch (error) {
            console.log(error)
        }
    }


    const getLanguages = () => {
        let languageTotal = [];
        if(repos) {
            repos.map(async repo => {
                try {
                    const response = await fetch(repo.languages_url, {
                        headers: {
                            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                        }
                    });
                    const data = await response.json();
                    for(const key in data){
                        if(languageTotal[key]){
                            languageTotal[key] += data[key]
                        } else {
                            languageTotal[key] = data[key]
                        }
                    }
                    setLanguages(Object.entries(languageTotal))
                } catch (error) {
                    console.log(error)
                }
                
            })
        }
    }

    useEffect(() => {
        getRepos();
    }, [])

    useEffect(() => {
        if(repos) getLanguages()
    }, [repos])

    

    return (
        <div className={languageStyles.languageSection}>
            <div className={languageStyles.container}>
                <div className={languageStyles.leftColumn}>
                {languages ?
                    <Chart languages={languages} />
                    : <h2 className={languageStyles.failedToLoad}>Sorry! The Data Failed To Load From Github. View the stats at <a target="_blank" rel="noopener noreferrer" href="https://github.com/tjconti12/">Github</a></h2>
                }
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
