import React, { Fragment } from 'react';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';



export default function page() {
    // const classes = useStyles();

    return (
        <Fragment>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Fragment>
    );
}


