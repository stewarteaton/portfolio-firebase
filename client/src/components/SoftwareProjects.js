import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SkillsIcon from '../util/SkillsIcon'
import node from '../images/svg-icons/node.png';
import firebase from '../images/svg-icons/firebase.svg';
import react from '../images/svg-icons/react.svg';
import redux from '../images/svg-icons/redux.svg';
import mongodb from '../images/svg-icons/mongodb.svg';
import pug from '../images/svg-icons/pug.svg';
import cloudinary from '../images/svg-icons/cloudinary.svg';
import graphql from '../images/svg-icons/graphql.png';
import aws2 from '../images/svg-icons/aws2.png';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';
import AssignmentIcon from '@material-ui/icons/Assignment';
// Pics
import Abnb from '../images/project-pics/Abnb-Pics.png';

export default function SoftwareProjects() {
    return (
<Fragment>
    <hr />
        {/* AirBnB Clone  */}
        <Grid container spacing={2}>

            <Grid item sm={4} xs={12}>
                <h1 className='projectTitle'>AirBnB Clone</h1>
                <p>An AirBnB clone made with React-Native and Hooks. AWS backend used for authentication, API, and DBs. Google maps API used for mapping features</p>
                {/* <Link to='/Projects/tmdl-website'>
                        <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                </Link> */}
                <br />
                <Tooltip title='View Code'>
                    <a href='https://github.com/stewarteaton/airbnb-clone' target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='github' className='githubIcon'>
                            <i className="fab fa-github" ></i>
                        </IconButton>
                    </a>
                </Tooltip>
                    <div className='skillsPaper'>
                        <SkillsIcon icon={react} name='React Native' />
                        <SkillsIcon icon={aws2} name='AWS' />
                        <SkillsIcon icon={graphql} name='GraphQL' />
                        <SkillsIcon icon={node} name='Node.js' />
                    </div>
            </Grid>
            <Grid item sm={8} xs={12}>
                <a href={Abnb} target='_blank' rel="noopener noreferrer">
                    <img src={Abnb} className='websitePic' alt='Yeet Pic' />
                </a>
            </Grid>
        </Grid>
        <hr />

        {/* YEET  */}
        <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
                <a href='https://res.cloudinary.com/dmgp6exro/image/upload/v1580504570/Portfolio/Yeet-WireFrame.png' target='_blank' rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580504570/Portfolio/Yeet-WireFrame.png' className='websitePic' alt='Yeet Pic' />
                </a>
            </Grid>
            <Grid item sm={4} xs={12}>
                <h1 className='projectTitle'>Yeet</h1>
                <p>A social media platform app for travelers to create a profile, share pictures and posts, meet each other, and plan activities. Using Redux for state management and Firebase for backend.</p>
                {/* <Link to='/Projects/tmdl-website'>
                        <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                </Link> */}
                <br />
                <Tooltip title='View Code'>
                    <a href='https://github.com/stewarteaton/yeet' target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='github' className='githubIcon'>
                            <i className="fab fa-github" ></i>
                        </IconButton>
                    </a>
                </Tooltip>
                    <div className='skillsPaper'>
                        <SkillsIcon icon={react} name='React Native' />
                        <SkillsIcon icon={redux} name='Redux' />
                        <SkillsIcon icon={node} name='Node.js' />
                        <SkillsIcon icon={firebase} name='Firebase' />
                    </div>

            </Grid>
        </Grid>
        <hr />

        {/* TMDL App */}
        <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
                <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500939/Portfolio/TMDL-WireFrame.png' className='websitePic' alt='TMDL Website' />
                {/* <a href='https://tmdl-db.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500939/Portfolio/TMDL-WireFrame.png' className='websitePic' alt='TMDL Website' />
                </a> */}
            </Grid>
            <Grid item sm={4} xs={12}>
                <h1 className='projectTitle'>TMDL Web App</h1>
                <p>A website created for the Mississippi Department of Environmental Quality that provides simple management and access to their database of water qualty (a.k.a TMDL) reports</p>
                {/* <Link to='/Projects/tmdl-website'>
                        <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                </Link> */}
                <br />
                <Tooltip title='View Website'>
                    <a href='https://tmdl-db.herokuapp.com/'  target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='launch' className='launchIcon'>
                            <LaunchIcon style={{ fontSize: 35 }}/>
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip title='View Code'>
                    <a href='https://github.com/stewarteaton/TMDL-Tool' target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='github' className='githubIcon'>
                            <i className="fab fa-github" ></i>
                        </IconButton>
                    </a>
                </Tooltip>
                <div className='skillsPaper'>
                <SkillsIcon icon={node} name='Node.js' />
                <SkillsIcon icon={mongodb} name='MongoDB' />
                <SkillsIcon icon={cloudinary} name='Cloudinary' />
                <SkillsIcon icon={pug} name='Pug' />
                </div>
            </Grid>
        </Grid>
        {/****** Social Web Demo *******/}
        <hr />
        <Grid container spacing={2}>

            <Grid item sm={4} xs={12}>
                <h1 className='projectTitle'>Social Media (demo)</h1>
                <p>A twitter-like social media website clone that allows users to create a profile, and then like, comment, and share posts with notifications</p>
                {/* <Link to='/Projects/social-web-website'>
                        <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                </Link> */}
                <br />
                <Tooltip title='View Website'>
                    <a href='https://socialweb-4fb98.firebaseapp.com/'  target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='launch' className='launchIcon'>
                            <LaunchIcon style={{ fontSize: 35 }}/>
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip title='View Code'>
                    <a href='https://github.com/stewarteaton/Social-Web' target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='github' className='githubIcon'>
                            <i className="fab fa-github" ></i>
                        </IconButton>
                    </a>
                </Tooltip>
                <div className='skillsPaper'>
                    <SkillsIcon icon={node} name='Node.js' />
                    <SkillsIcon icon={firebase} name='Firebase' />
                    <SkillsIcon icon={react} name='React' />
                    <SkillsIcon icon={redux} name='Redux' />
                </div>
            </Grid>
            <Grid item sm={8} xs={12}>
                <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500918/Portfolio/SocialWeb-WireFrame.png' className='websitePic' alt='TMDL Website' />
                {/* <a href='https://socialweb-4fb98.firebaseapp.com/' target='_blank' rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500918/Portfolio/SocialWeb-WireFrame.png' className='websitePic' alt='TMDL Website' />
                </a> */}
            </Grid>
        </Grid>

        {/****** Travel Booker Demo ******/}
        <hr />
        <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
                <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500897/Portfolio/TravelBooker-WireFrame.png' className='websitePic' alt='Hotel Booking website' />
                {/* <a href='https://travel-booker.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1580500897/Portfolio/TravelBooker-WireFrame.png' className='websitePic' alt='Hotel Booking website' />
                </a> */}
            </Grid>
            <Grid item sm={4} xs={12}>
                <h1 className='projectTitle'> Hotel Booking Website (demo)</h1>
                <p>A full stack demo website that allows users to query a database of hotels by price, quality, location, and book hotels. Admins can add, edit, or remove existing hotels. </p>
                {/* <Link to='/Projects/hotel-booking-website'>
                        <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                </Link> */}
                <br />
                <Tooltip title='View Website'>
                    <a href='https://travel-booker.herokuapp.com/'  target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='launch' className='launchIcon'>
                            <LaunchIcon style={{ fontSize: 35 }}/>
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip title='View Code'>
                    <a href='https://github.com/stewarteaton/Travel-Booker-Website' target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label='github' className='githubIcon'>
                            <i className="fab fa-github" ></i>
                        </IconButton>
                    </a>
                </Tooltip>
                <div className='skillsPaper'>
                    <SkillsIcon icon={node} name='Node.js' />
                    <SkillsIcon icon={mongodb} name='MongoDB' />
                    <SkillsIcon icon={cloudinary} name='Cloudinary' />
                    <SkillsIcon icon={pug} name='Pug' />
                </div>
            </Grid>
        </Grid>
        <hr />
        </Fragment>
    )
}
