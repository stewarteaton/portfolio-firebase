import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SkillsIcon from '../util/SkillsIcon'
// SVG's
// Frontend
import ReactLogo from '../images/svg-icons/react.svg';
import html5 from '../images/svg-icons/html5.svg';
import css3 from '../images/svg-icons/css3.svg';
import javascript from '../images/svg-icons/javascript.svg';
import redux from '../images/svg-icons/redux.svg';
import bootstrap from '../images/svg-icons/bootstrap.png';
import pug from '../images/svg-icons/pug.svg';
import sass from '../images/svg-icons/sass.svg';
import materialUI from '../images/svg-icons/material-ui.svg';
import gimp from '../images/svg-icons/gimp.png'
// Backend
import nodejs from '../images/svg-icons/node.js.svg';
import mongodb from '../images/svg-icons/mongodb.svg';
import firebase from '../images/svg-icons/firebase.svg';
import java from '../images/svg-icons/java.svg';
import python from '../images/svg-icons/python.svg';
import flask from '../images/svg-icons/flask.png';
import aws from '../images/svg-icons/aws.svg';
import php from '../images/svg-icons/php.svg';
import oracle from '../images/svg-icons/icons8-oracle-logo2.svg'
import mariadb from '../images/svg-icons/mariadb.svg';
import graphql from '../images/svg-icons/graphql.png';
import mysql from '../images/svg-icons/mysql.svg';
import postgresql from '../images/svg-icons/postgresql.svg';
import objectiveC from '../images/svg-icons/apple.svg';
import swift from '../images/svg-icons/swift.svg';
import heroku from '../images/svg-icons/heroku.svg';
import postman from '../images/svg-icons/postman.svg';
import cloudinary from '../images/svg-icons/cloudinary.svg';
import express from '../images/svg-icons/express.svg';
// mobile 
import xcode from '../images/svg-icons/xcode.png'
import andriod from '../images/svg-icons/andriod.png'



export default function skills() {
    return (
        <div className='skillsPage' id='skills'>
                <h1 className='skillsTitle'>Technical Skills</h1>
                <hr />
                <p>Passionate about development and bringing projects from an idea to a working product</p>
                {/* <p>Knowledgable in computer science fundamentals such as algorithms & data-structures, operating systems, and database design. Experienced in object-oriented programming and building web/mobile apps.</p> */}
                <h4>Front-End</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={0}>
                            <SkillsIcon icon={css3} name='CSS 3' />            
                            <SkillsIcon icon={html5} name='HTML 5' />
                            <SkillsIcon icon={javascript} name='JavaScript' />       
                            <SkillsIcon icon={ReactLogo} name='React' />
                            <SkillsIcon icon={redux} name='Redux' />
                            <SkillsIcon icon={materialUI} name='Material-UI' />
                            <SkillsIcon icon={bootstrap} name='Bootstrap' />
                            <SkillsIcon icon={gimp} name='Photoshop' />
                            <SkillsIcon icon={sass} name='Sass' />
                            <SkillsIcon icon={pug} name='Pug' />

                    </Grid>
                </Paper>

                {/******* Back End Skills *****/}
                <h4 className='skillPaperLabel'>Back-End</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={2}>
                            <SkillsIcon icon={nodejs} name='Node.js' />
                            {/* <SkillsIcon icon={express} name='Express.js' /> */}
                            <SkillsIcon icon={aws} name='AWS' />
                            <SkillsIcon icon={firebase} name='Firebase' />
                            <SkillsIcon icon={mongodb} name='MongoDB' />
                            <SkillsIcon icon={oracle} name='Oracle' />
                            <SkillsIcon icon={postgresql} name='PostgreSQL' />
                            <SkillsIcon icon={heroku} name='Heroku' />
                            <SkillsIcon icon={graphql} name='GraphQL' />
                            <SkillsIcon icon={java} name='Java' />
                            <SkillsIcon icon={python} name='Python' />
                            <SkillsIcon icon={flask} name='Flask' />
                            <SkillsIcon icon={php} name='PHP' />
                            {/* <SkillsIcon icon={postman} name='Postman' /> */}
                    </Grid>
                </Paper>

                {/******* Mobile Skills      */}
                <h4 className='skillPaperLabel'>Mobile</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={2}>
                            <SkillsIcon icon={ReactLogo} name='React Native' />
                            <SkillsIcon icon={redux} name='Redux' />
                            <SkillsIcon icon={xcode} name='Xcode'/>
                            <SkillsIcon icon={andriod} name='Andriod'/>
                            <SkillsIcon icon={swift} name='Swift'/>
                            {/* <SkillsIcon icon={objectiveC} name='Objective-C' /> */}
                    </Grid>
                </Paper>
        </div>
    )
}
