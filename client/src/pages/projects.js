import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';
import AssignmentIcon from '@material-ui/icons/Assignment';

class projects extends Component {
    constructor(){
        super();
        this.state = {
            softwareProjects: true,
            chemicalProjects: false,
        };
    }

    setSoftware(){
        this.setState({
            softwareProjects: true,
            chemicalProjects: false
        });
    }

    setChemical(){
        this.setState({
            softwareProjects: false,
            chemicalProjects: true,
        });
    }

    render(){
        var softwareProjects = this.state.softwareProjects;
        return(
        <div className='projectsPage' id='projects'>
            <Fragment>
                <h1 className='projectsPageTitle'>Projects</h1>
                <div className='projectToggleDiv'>
                    <div onClick={this.setSoftware.bind(this)} className='projectsToggleSoftware' style={{ opacity: this.state.softwareProjects === true? '1' : '0.35'}}>Software</div>
                    <div onClick={this.setChemical.bind(this)} className='projectsToggleChemical' style={{ opacity: this.state.chemicalProjects === true? '1' : '0.35'}}>Chemical</div>
                </div>
            </Fragment>
            {softwareProjects ? (
            <Fragment>
            {/* <h4 className='projectsPageTitle2'>Here are some projects I've recently developed...</h4> */}
            <hr />
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <a href='https://tmdl-db.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564683887/Portfolio/TMDL-Pic.png' className='websitePic' alt='TMDL Website' />
                    </a>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'>TMDL Web App</h1>
                    <p>A website created for the Mississippi Department of Environmental Quality that provides simple management and access to their database of water qualty (a.k.a TMDL) reports</p>
                    <p className='techUsed'>Node.js &nbsp;Express &nbsp;MongoDB &nbsp;Pug</p>
                    <Link to='/Projects/tmdl-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
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
                </Grid>
            </Grid>
            {/****** Social Web Demo *******/}
            <hr />
            <Grid container spacing={2}>

                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'>Social Media (demo)</h1>
                    <p>A twitter-like social media website clone that allows users to create a profile, and then like, comment, and share posts with notifications</p>
                    <p className='techUsed'>React &nbsp;Node.js &nbsp;Express &nbsp;Firebase </p>
                    <Link to='/Projects/social-web-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
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
                </Grid>
                <Grid item sm={8} xs={12}>
                    <a href='https://socialweb-4fb98.firebaseapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564687287/Portfolio/social-web-pic.png' className='websitePic' alt='TMDL Website' />
                    </a>
                </Grid>
            </Grid>

            {/****** Travel Booker Demo ******/}
            <hr />
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <a href='https://travel-booker.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564688322/Portfolio/travelBooker.png' className='websitePic' alt='Hotel Booking website' />
                    </a>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'> Hotel Booking Website (demo)</h1>
                    <p>A full stack demo website that allows users to query a database of hotels by price, quality, location, and book hotels. Admins can add, edit, or remove existing hotels. </p>
                    <p className='techUsed'>Node.js &nbsp;Express &nbsp;MongoDB &nbsp;Pug</p>                   
                    <Link to='/Projects/hotel-booking-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
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
                </Grid>
            </Grid>
            <hr />
            </Fragment>
            ) : (
             <Fragment>
              <hr />
             <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'>Acetone Plant Design and Optimization</h1>
                    <p>Designed, simulated, and optimized a pharmaceuitical-grade Acetone production plant for my senior project.
                       Created an economic analysis using Excel that estimates operating and fixed capital costs to determine plant feasibility.
                       Presented optimized results to a panel of professional chemical engineers.
                    </p>
                    {/* <p className='techUsed'>React &nbsp;Node.js &nbsp;Express &nbsp;Firebase </p> */}
                    {/* <Link to='/Projects/social-web-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link> */}
                    <a href='https://res.cloudinary.com/dmgp6exro/image/upload/v1579665394/ChemE/Executive_Summary.pdf' target='_blank' rel="noopener noreferrer">
                        <Button className='readMoreBtn' >View PDF Report</Button>
                    </a>
                    <a href='https://res.cloudinary.com/dmgp6exro/raw/upload/v1579666016/ChemE/Optimized_Case_Excel_File.xlsx'>
                        <Button className='readMoreBtn' >View Excel File</Button>
                    </a>
                    <br />
                    <Tooltip title='View Report'>
                        <a href='https://res.cloudinary.com/dmgp6exro/image/upload/v1579665394/ChemE/Executive_Summary.pdf'  target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='launch' className='launchIcon'>
                                <AssignmentIcon style={{ fontSize: 40 }}/>
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Tooltip title='Download Excel File'>
                        <a href='https://github.com/stewarteaton/Social-Web' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='github' className='githubIcon'>
                                <i className="fas fa-file-excel" ></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Tooltip title='Download Powerpoint  Presentation'>
                        <a href='https://res.cloudinary.com/dmgp6exro/raw/upload/v1579666432/ChemE/Final_Presentation.pptx' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='github' className='githubIcon'>
                                <i className="fas fa-file-powerpoint" ></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <a href='https://res.cloudinary.com/dmgp6exro/image/upload/v1579665394/ChemE/Executive_Summary.pdf' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1579664625/ChemE/process_flow.png' className='websitePic' alt='TMDL Website' />
                    </a>
                </Grid>
             </Grid>
             </Fragment>
            )}
        </div>
        );
    }

}

export default projects;

