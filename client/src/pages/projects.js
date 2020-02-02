import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SoftwareProjects from '../components/SoftwareProjects';
import ChemicalProjects from '../components/ChemicalProjects';

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
                <SoftwareProjects/>
            ) : (
                <ChemicalProjects />
            )}
        </div>
        );
    }

}

export default projects;

