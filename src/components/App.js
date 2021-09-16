import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail'
//the curlybraces below means that we want to import a named export from this file
// if we had an export defualt then we wouldnt need the curlies
// import { selectSong } from '../actions'


// we are not creating App with a class based component. We use class
// based components when we want to make use of state Since we are working
// with redux we are going to see that we make use of ocmponent lvl state
// much less frequently. Instead we store our data in redux. All state insdie react app
// will be in redux which makes a more streamline app component

const App = () => {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  };
  
  export default App;