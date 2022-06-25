import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.svg';
import Tab  from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import useMediaQuery  from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {makeStyles} from '@material-ui/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';
const useStyles=makeStyles(theme=>({
    toolbarMargine:{
        ...theme.mixins.toolbar
    },
    logo:{
      
        height:"4em",
        margin:"2px"
    },
    logoContainer:{
        padding:0,
    },
    tabcontainer:{
        marginLeft:'auto',
    },
    tab:{
        ...theme.typography.tab,
        minWidth:7,
        marginLeft:"5px",
    },
    button:{
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        color:"white"
    
    },
    menu:{
        backgroundColor:theme.palette.common.blue,
        color:"white"
    },
    menuItem:{
        opacity:0.7,
        "&:hover":{
            opacity:1
        }

    }

}))
 function  Header(){
    const classes=useStyles();
    const [value,setvalue]=useState(2);
    const [anchorEl,setanchorEl]=useState(null);
    const[open,setopen]=useState(false);
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("mid"))
    console.log(matches);

    const handleChange = (event, newValue) => {
        setvalue(newValue);
      };
      const handleClick=(e)=>{
        setanchorEl(e.currentTarget);
        setopen(true);
      }
      const handleClose=(e)=>{
        setanchorEl(null);
        setopen(false);
      }
      useEffect(()=>{
        if(window.location.pathname==="/"&& value!==0){
            setvalue(0);
        }
        else if(window.location.pathname==="/services"&& value!==1){
            setvalue(1);
        }
        else if(window.location.pathname==="/revolution"&& value!==2){
            setvalue(2);
        }
        else if(window.location.pathname==="/about"&& value!==3){
            setvalue(3);
        }
        else if(window.location.pathname==="/contact"&& value!==4){
            setvalue(4);
        }
        else if(window.location.pathname==="/estimate"&& value!==5){
            setvalue(5);
        }
      },[value])
    const tabs=(
        <React.Fragment>
         <Tabs value={value}  onChange={handleChange} 
                indicatorColor='primary'
                className={classes.tabcontainer}>
                    <Tab className={classes.tab} component={Link} to="/" label="HOME"/>
                    <Tab className={classes.tab} 
                    aria-owns={anchorEl?"simple-menu":undefined}
                    aria-haspopup={anchorEl?"true":undefined}
                    component={Link} to="/services"
                    onMouseOver={event=>handleClick(event)} label="SERVICES"/>
                    <Tab className={classes.tab} component={Link}  to="/revolution" label="THE REVOLUTION"/>
                    <Tab className={classes.tab} component={Link} to="/about" label="ABOUT US"/>
                    <Tab className={classes.tab} component={Link}  to="/contact" label="CONTACT US"/>
                </Tabs>
                <Button  variant="contained" className={classes.button} color="secondary">Contained</Button>
                <Menu id="simple-menu" 
                anchorEl={anchorEl}
                open={open}
                classes={{paper:classes.menu}}
                // onClose={handleClose}
                MenuListProps={{onMouseLeave:handleClose}}
                elevation={1}
                >
                <MenuItem onClick={()=>{handleClose();setvalue(1)}}  classes={{root:classes.menuItem}} component={Link} to="/services" >Services</MenuItem>
                <MenuItem onClick={()=>{handleClose();setvalue(1)}} classes={{root:classes.menuItem}} component={Link} to="/customersoftware">CustomerSoftware</MenuItem>
                <MenuItem onClick={()=>{handleClose();setvalue(1)}} classes={{root:classes.menuItem}} component={Link} to="/mobileapp">Mobile App</MenuItem>
                <MenuItem onClick={()=>{handleClose();setvalue(1)}} classes={{root:classes.menuItem}} component={Link} to="/website">Website Dev</MenuItem>

                </Menu>

        </React.Fragment>
    )
    return(
        <>
        <AppBar position="static" color="primary"  >
              <Toolbar disableGutters>
              <Button component={Link} to="/" 
              className={classes.logoContainer}><img src={logo} alt='companylogo' className={classes.logo}
               /></Button>
                
               {matches ? <><h3>hellp</h3></> :tabs}
              </Toolbar>
        </AppBar>
        
        </>
    )
 }
 export default Header;