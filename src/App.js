/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Singledog from './components/singledog';
import Alldogs from './components/alldogs';
import Retriever from './components/retriever';
import Bulldog from './components/bulldog';
import Corgi from './components/corgi';
import Samoyed from './components/samoyed';

function App() {
  const [singledog, setSingledog] = useState({});
  const setSingleDogPage = (image, name, age, description, breed, characteristics) => {
    setSingledog({image: image, name: name, age: age, description: description, breed: breed, characteristics: characteristics});
  };

  return (
    <div className="App">
      <Helmet>
        <title>JRR Dog Adoption Center</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path= "/Dog-Adoption-App" element= { <Homepage />}/>
          <Route exact path= "/singledog" element= { <Singledog singledog={singledog}/>}/>
          <Route exact path= "/alldogs" element= { <Alldogs setSingleDogPage={setSingleDogPage}/>}/>
          <Route exact path= "/retrievers" element= { <Retriever setSingleDogPage={setSingleDogPage}/>}/>
          <Route exact path= "/bulldogs" element= { <Bulldog setSingleDogPage={setSingleDogPage}/>}/>
          <Route exact path= "/corgis" element= { <Corgi setSingleDogPage={setSingleDogPage}/>}/>
          <Route exact path= "/samoyeds" element= { <Samoyed setSingleDogPage={setSingleDogPage}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
