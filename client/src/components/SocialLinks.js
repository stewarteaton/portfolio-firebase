import React from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';


// const useStyles = makeStyles({
//     homeSocialLinks: {
//         // margin: 'auto',
//         width: '400px',
//         backgroundColor: 'rgb(224, 224, 224)',
//         textAlign: 'center'
//     },
//     icons: {
//         fontSize: '3em',
//         color: '#673ab7',
//         marginLeft: '20%',
//         '&:hover': {
//             color: 'black',
//          },
//          '&:i': {
//             margin: 5
//          },
//     }

// });

export default function SocialLinks() {
    // const classes = useStyles();

    return (
        // <Paper className={classes.homeSocialLinks}>
            <div className='socialIcons'>
                <Tooltip title='Linked In' placement='top'>
                    <a href='https://www.linkedin.com/in/stewart-eaton' target='_blank' rel="noopener noreferrer" >
                        {/* <i className="fab fa-linkedin" style={{ color: '#0077B5' }}></i> */}
                        <i className="fab fa-linkedin" id='linkedin'></i>

                    </a>
                </Tooltip>
                <Tooltip title='Github' placement='top'>
                    <a href='https://github.com/stewarteaton/' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-github" ></i>
                    </a>
                </Tooltip>
                <Tooltip title='Instagram' placement='top'>
                    <a href='https://www.instagram.com/stewart_eaton/' target='_blank' rel="noopener noreferrer">
                        {/* <i className="fab fa-instagram" style={{ color: '#C13584' }} ></i> */}
                        <i className="fab fa-instagram"  ></i>

                    </a>
                </Tooltip>
                <Tooltip title='Facebook' placement='top'>
                    <a href='https://www.facebook.com/stewart.eaton.96' target='_blank' rel="noopener noreferrer">
                        {/* <i className="fab fa-facebook-square" style={{ color: '#3b5998' }}></i> */}
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </Tooltip>
            </div>
        // </Paper>
    )
}
