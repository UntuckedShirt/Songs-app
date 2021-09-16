// Action creator
// ---------------------------------------------------------------//
// rules of redux is you need a type property. you dont need to havea payload prop
// its technically optional. But a type is always needed
// we watn a payload to specifiy wht song to select
// we then need to export bu not in the conventional way. Now we need
// to use a named export. a named export allows us to export many diff functions 
// from a single file
// ---------------------------------------------------------------//

export const selectSong = (song) => {
    // return an Action
    return {
        type: "SONG_SELECTED",
        payload: song

    };

};

