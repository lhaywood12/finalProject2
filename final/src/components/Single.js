import React from 'react';
import { Routes, Route, useParams, useEffect } from 'react-router-dom';


const Single =(props)=> {
  
  const [keyChainData, setKeychainData] =React.useState([])
  const {id} = useParams()

    React.useEffect(() => {
      fetch(`http://localhost:3002/api/keychain/${id}`)
      .then(res => res.json())
      .then(data => setKeychainData(data))
    }, [])
    
    console.log(keyChainData)
    return (
      <div className="single">
        <div className="single-img">
          <img src={keyChainData.url} className="placeholder img" alt="img-fluid"/>
        </div>

         <h2>{keyChainData.title}</h2>
         <p>{keyChainData.price}</p>
      </div>
    );

}

export default Single
    
    



