// you need to see documentatino to see whether or not you need to use curly braces
// anytime you using outside library to be told whether or not you need the curiles

import { combineReducers } from 'redux';

// both reducers are going to be in this file and will be exported
// below is a static list of songs. so no arguements to be worried about 
// below will be returning an array of obj where very object returns a song
//

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ];

};

// below will be called with the first arguement of the currently selected song
// action obj is the second arguement

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;

    };

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

})