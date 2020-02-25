import React,{createContext,Component} from 'react'

export const CheckLogin=createContext();

class CheckLoginProvider extends Component{
    state={
        isLogin:true,
        username:'',
        currentLevel:0,
        splashDisplay:0,
    }
    
    changeState=(props)=>{
        this.setState({isLogin:false,username:props})
        
    }
    changeLevel=(props)=>{
        this.setState({currentLevel:props,splashDisplay:1})
    }
    render(){
        return(
            <CheckLogin.Provider value={{isLogin:this.state.isLogin,changeState:this.changeState,username:this.state.username,currentLevel:this.state.currentLevel,changeLevel:this.changeLevel,splashDisplay:this.state.splashDisplay}}>
                {this.props.children}
            </CheckLogin.Provider>
        )
    }
}
export default CheckLoginProvider