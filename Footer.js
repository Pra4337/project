import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../../assets/logo.svg';
import Grid  from "@material-ui/core/Grid";

const useStyles=makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.blue,
        width:"100%",
    },
    logo:{
        width: "22rem",
    },
    mainContainer:{
        position:"relative"
    },
    link:{
        color:"white",
        fontSize:"0.75rem",
        fontWeight:"bold",
    },
    gridItem:{
        margin:"3em"
    },
}));
export default function Footer(){
    const classes=useStyles();
    return <footer className={classes.footer}>
    <Grid container justify="center" className={classes.mainContainer}>
    <Grid item className={classes.gridItem}>
    <Grid container direction="column" spacing={2} >
    <Grid item className={classes.link}>Home</Grid>
        </Grid>
    </Grid>
    <Grid item className={classes.gridItem}>
    <Grid container direction="column" spacing={2}>
    <Grid item className={classes.link}>Services</Grid>
    <Grid item className={classes.link}>CustomerSoftware</Grid>
    <Grid item className={classes.link}>Mobile App</Grid>
    <Grid item className={classes.link}>Website Dev</Grid>
        </Grid>
    </Grid>
        <Grid item className={classes.gridItem}>
        <Grid container  direction="column" spacing={2}>
    <Grid item className={classes.link}>THE REVOLUTION</Grid>
    <Grid item className={classes.link}>CustomerSoftware</Grid>
    <Grid item className={classes.link}>Mobile App</Grid>
    <Grid item className={classes.link}>Website Dev</Grid>
        </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2} >
    <Grid item className={classes.link}>ABOUT US</Grid>
    <Grid item className={classes.link}>CustomerSoftware</Grid>
    <Grid item className={classes.link}>Mobile App</Grid>
    <Grid item className={classes.link}>Website Dev</Grid>
        </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
    <Grid item className={classes.link}>Contact Us</Grid>
        </Grid>

        </Grid>
        
       

        
    </Grid>
    
    <img src={logo} alt='companylogo' className={classes.logo} />
    
    </footer>
}