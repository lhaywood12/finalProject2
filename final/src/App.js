import {Outlet, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Sign from './components/Sign';
import Valentine from './components/Valentine';
import Easter from './components/Easter';
import Animal from './components/Animal';
import Christmas from './components/Christmas';
import Halloween from './components/Halloween';
import MardiGras from './components/MardiGras';
import Patrick from './components/Patrick';
import Birthday from './components/Birthday';
import Single from './components/Single';
import React from 'react';

function App() {

  const [keychainData, setKeychainData] =React.useState([])
    React.useEffect(() => {
      fetch('http://localhost:3002/api/keychain')
        .then(res => res.json())
        .then(data => setKeychainData(data))
        .catch(error => console.log(error))
    }, [])

    // const [keychainData, setKeychainData] =React.useState([])
    // React.useEffect(() => {
    //   fetch(`http://localhost:3002/api/${params.id}`)
    //     .then(res => res.json())
    //     .then(data => setKeychainData(data))
    //     .catch(error => console.log(error))
    // }, [])

    // import { useParams } from "react-router-dom";

    // export default function Invoice() {
    //   let params = useParams(
      //    fetch(`http://localhost:3002/api/${params.id}`)
      //     .then(res => res.json())
      //     .then(data => setKeychainData(data))
      //     .catch(error => console.log(error))
    //);
    //   return <h2>Invoice: {params.invoiceId}</h2>;
    // }


    console.log(keychainData)

    return (
    <div className="App">
      <div>
        <Header />
        <Routes>

        <Route path='home' element={<Home />} />
                <Route path='product' element={<Products data={keychainData}/>} />
                <Route path='product/valentine' element={<Valentine data={keychainData} />} />
                <Route path='product/easter' element={<Easter data={keychainData} />} />
                <Route path='product/halloween' element={<Halloween data={keychainData}/>} />
                <Route path='product/christmas' element={<Christmas data={keychainData}/>} />
                <Route path='product/birthday' element={<Birthday data={keychainData}/>} />
                <Route path='product/mardigras' element={<MardiGras data={keychainData}/>} />
                <Route path='product/patrick' element={<Patrick data={keychainData}/>} />
                <Route path='product/animal' element={<Animal data={keychainData}/>} />
                <Route path='product/:id' element={<Single data={keychainData}/>} />
                <Route path='about' element={<About />} />
                <Route path='sign' element={<Sign />} />
                {/* <Route path=':productId' element={<Products />} /> */}
        </Routes>
      </div>
    <Outlet />
  </div>
  );
}


export default App;
