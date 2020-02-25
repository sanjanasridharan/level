import React,{useEffect,useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "../index.css";
 import {FetchData} from '../context/FetchData'
 import axios from 'axios';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
   marginLeft:2
   
  },
  title1:{
    marginLeft:1380
  },
  title2:{
    marginLeft:4
  }
}));
export const NavBar = ({props}) => {
  const classes = useStyles();
  // const [data,setdata]=useState([])
  //  const {preventRender,checkRender,addData} = useContext(FetchData)
  //  const username=props
   
   
  var a=10
  
  
//   useEffect(() => {
    
//     getData()
    
//     console.log("data")
  
//   }, {data});

//   const getData = async () => {
//     const response = await axios.get('http://localhost:5000/getData/name',{params:{name:"ansh"}})
//     setdata(response.data);
    

//   };
//  if(data.length>1)
//   addData(data)
  
//  console.log(data)
  
  return (
    <div id="sti">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
           Ansh
          </Typography>
          
          <EmojiEventsIcon  className={classes.title1}/>
  <Typography variant="h5" className={classes.title2}>{a}</Typography>
        
        </Toolbar>
        
      </AppBar>
    </div>
    </div>
  );
}

