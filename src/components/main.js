import React, { Component } from 'react';
import { Typography, Container, AppBar, IconButton, Toolbar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        background: "rgb(254,255,0)",
        background: "linear-gradient(274deg, rgba(254,255,0,1) 0%, rgba(255,0,245,1) 42%, rgba(0,11,148,1) 100%)"
    },
    appBarButtonFont: {
        fontWeight: "bold"
    },
    hide: {
        display: "none"
    }
  }));

const App = () => {
    const classes = useStyles();
    return (<div>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    
                </Typography>
                <Button  className={classes.appBarButtonFont} background="inherited" id="2">[Repos]</Button>
                <Button  className={classes.hide +" "+ classes.appBarButtonFont} background="inherited" id="1">[Profile]</Button>
                <Button  className={classes.appBarButtonFont} color="inherited" onClick={LOGIN} id="0">[Login]</Button>
            </Toolbar>
        </AppBar>
    </div>);
};

class Reposotory {
    constructor() {
        this.a = 1
    }
    print() {
        console.log(a);
    }
}

function LOGIN(b) {
    var profileButton = document.getElementById("1");
    profileButton.style.display="flex"
}

var a = new Reposotory();
a.print()

export default App;