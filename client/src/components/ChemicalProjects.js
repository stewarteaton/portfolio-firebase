import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function ChemicalProjects() {
    return (
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
    )
}
