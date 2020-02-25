import React,{Component} from 'react'
import {CheckLogin} from '../context/CheckLogin'
import CreateUser from './CreateUser'
import StoreValue from './StoreValue'
import {NavBar} from './NavBar'
import UserData from './UserData'
import FetchDataProvider from '../context/FetchData'
class Start extends Component
{
  static contextType=CheckLogin
  render(){
    console.log(this.context)
    const isLogin=this.context.isLogin
    const username=this.context.username
    
    var didLogin;
    var nav=<NavBar props={username}/>

    
    
  //   if(!isLogin)
  //   {
  //     didLogin=<CreateUser/>
  //     nav=""
  //   }
  //   else
  // {
  //   nav=<NavBar />
  //     didLogin=<StoreValue/>

  //   }
    
    return isLogin ?(
      <div>
        <CreateUser/>
     </div>
    ):(
      <div>
        <FetchDataProvider>
          <UserData></UserData>
        {nav}
        <StoreValue/>
        </FetchDataProvider>
      </div>
    )
}
}

export default Start