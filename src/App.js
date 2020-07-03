import React, { useReducer } from 'react';
import './App.css';
// import ImagesContext from './imgsContext'
import ImageReducer from './ImageReducer'

function App() {

  // Use of useState to maintain the state of img index value..
  let [img, changeImg] = useReducer(ImageReducer)
  // let imgs = React.useContext(ImagesContext)
  return (
    // <ImagesContext.Provider>
    < div className="App" >
      <h1 > Images Gallery</h1 >
      <img alt='Couple' className="img" src={img} />
      <br />
      <div >
        <button className="btn" onClick={() => {
          changeImg({ type: 'PREV' })
        }}> Prev Image</button >
        <button className="btn" onClick={() => {
          changeImg({ type: 'NEXT' })
        }}> Next Image</button >
      </div >
    </div >
    // </ImagesContext.Provider >
  );

}

export default App;
