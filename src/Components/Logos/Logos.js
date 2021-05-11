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
                <img className={logoStyles.logo} src={arduino} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={bootstrap} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={css} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={django} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={express} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={git} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={heroku} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={html} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={javascript} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={mongodb} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={nodejs} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={photoshop} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={postgresql} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={postman} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={python} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={react} alt="" />
            </div>
            <div className={logoStyles.imgContainer}>
                <img className={logoStyles.logo} src={sass} alt="" />
            </div>
        </div>
    )
}

export default Logos
