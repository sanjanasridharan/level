import React, { Component } from 'react'
import axios from 'axios';
import {CheckLogin} from '../context/CheckLogin'
import {FetchData} from '../context/FetchData'
import MovieList from './MovieList'
export class UserData extends Component {
    static contextType=CheckLogin

    constructor(props) {
        super(props)
    
        this.state = {
             list:[],
            
        }
    }
     
    componentDidMount()
    {  
        const username=this.context.username
        console.log(username)
        axios.get('http://localhost:5000/getData/userdata',{params:{name:username}})
        .then(response => {
          this.setState({ list: response.data })
        })
        .catch((error) => {
          console.log(error);
        })  
        console.log(this.state.list)
       
       
    }
    
      
    render() {
        return (
            
            <div>
                
                {/* <MovieList props={this.state.list}></MovieList> */}
            </div>   
        )
    }
}

export default UserData