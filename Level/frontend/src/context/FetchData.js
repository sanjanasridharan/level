import React,{createContext,useState} from 'react'
export const FetchData=createContext();

const FetchDataProvider =(props)=>{
    console.log("1122")
    let preventRender=true
    let [movieData,setData]=useState([]);
    const checkRender=(props)=>{
         preventRender=false
        
        console.log(preventRender)
    }

    const addData =(data)=>{
        
        setData(data)
        console.log(movieData)
    }

    return(
        <FetchData.Provider value={{preventRender,checkRender,movieData,addData}}>
            {props.children}
        </FetchData.Provider>

    )
}
export default FetchDataProvider