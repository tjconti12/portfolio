// import codepen from '../../Images/codepen.png';
import arduino from '../../Images/arduino.png';
import bootstrap from '../../Images/bootstrap.png';
import css from '../../Images/css.png';
import django from '../../Images/django.png';
import express from '../../Images/express.png';
import git from '../../Images/git.png';
import heroku from '../../Images/heroku.png';
import html from '../../Images/html.png';
import javascript from '../../Images/javascript.png';
import mongodb from '../../Images/mongodb.gif';
import nodejs from '../../Images/nodejs.png';
import photoshop from '../../Images/photoshop.png';
import postgresql from '../../Images/postgresql.png';
import postman from '../../Images/postman.png';
import python from '../../Images/python.png';
import react from '../../Images/react.png';
import sass from '../../Images/sass.png';
import * as logoStyles from './Logos.module.css';

const Logos = () => {
    return (
        <div className={logoStyles.logoContainer}>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={arduino} alt="arduino logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={bootstrap} alt="bootstrap logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={css} alt="css logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={django} alt="django logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={express} alt="express logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={git} alt="git logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={heroku} alt="heroku logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={html} alt="html logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={javascript} alt="javascript logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={mongodb} alt="mongodb logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={nodejs} alt="nodejs logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={photoshop} alt="photoshop logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={postgresql} alt="postgreSQL logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={postman} alt="postman logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={python} alt="python logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={react} alt="react logo" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={sass} alt="sass logo" />
            </div>
        </div>
    )
}

export default Logos
